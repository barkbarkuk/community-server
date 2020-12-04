// Script to validate our packed package
const { execSync, spawn } = require('child_process')
const fs = require('fs')
const http = require('http')
const treeKill = require('tree-kill')

const port=8888
const targetUrl=`http://localhost:${port}`
const exeName = 'community-solid-server'

var failure = 1
var serverInstalled = false
var serverProcess = null

// Purge any old package files
var filenameRegex = /solid-community-server-(.+)\.tgz/
console.log("Checking for old package builds")
var files = fs.readdirSync('.').filter(filename => filenameRegex.test(filename))
files.forEach(filename => {
  console.log(`Purging: ${filename}`)
  fs.unlinkSync(`${filename}`)
});

// Create new package to deploy
console.log("Building package")
execSync("npm pack", { stdio: "inherit"} )

files = fs.readdirSync('.').filter(filename => filenameRegex.test(filename))
if (files.length > 1) {
  throw new Error(`Unexpected number of packages: ${files.join(', ')}`)
}
var package = files[0]

// Start of async handling
var testComplete = new Promise((allTestResolve, allTestReject) => {
  // Install built package globally
  console.log(`Installing ${package}`)
  execSync(`npm install -g ${package}`, { stdio: "inherit"})
  serverInstalled = true

  // Spawn instance of server
  console.log(`Starting ${exeName}`)
  serverProcess = spawn(exeName, ["-p", port], { shell: true })

  // Wait for server to start listening
  var serverListening = new Promise((resolve, reject) => {
    serverProcess.stdout.on('data', (data) => {
      console.log(`${exeName} stdout: ${data}`)
      // Check server stdout messages for the server listening message
      if (data.includes(`Running at ${targetUrl}`)) {
        resolve(data)
      }
    })
    serverProcess.stderr.on('data', (data) => { console.error(`${exeName} stderr: ${data}`)})
    serverProcess.on('close', (code) => { console.log(`${exeName} exited with: ${code}`)})

    // Eventually timeout if server not listening in reasonable period
    setTimeout(function () {
      reject(`Timeout waiting for ${exeName} to start listening on ${port}`)
    }, 10000)
  })

  // Once the server is listening attempt to get a resource from the server
  serverListening.then(function() {
    http.get(targetUrl, (res) => {
      const { statusCode } = res
      res.resume()
      // At this stage we aren't concerned with how the server responded, just that it did
      console.log(`${targetUrl} responded with: ${statusCode}`)
      failure = 0
      allTestResolve()
    }).on('error', (e) => {
      // If the GET failed for some reason even with the server listening, mark deploy test as failed
      allTestReject(err)
      console.error(e.message)    
    })
  })

  serverListening.catch(err => {
    console.error(err)
    allTestReject(err)
  })

})

testComplete.catch(err => {
  console.error(err)
})

// After testing is complete always clean up and then exit with an appropriate response code
testComplete.finally(function() {
  if (serverProcess) {
    console.log(`Stopping ${exeName} by killing process tree for pid ${serverProcess.pid}`)
    serverProcess.stdin.end()
    // Tree kill is necessary as server process needs to run in shell on Windows
    treeKill(serverProcess.pid)
  }
  
  if (serverInstalled) {
    console.log(`Uninstalling ${exeName}`)
    execSync("npm uninstall -g @solid/community-server", { stdio: "inherit"})
  }
  
  console.log(`Removing package: ${package}`)
  fs.unlinkSync(package)

  process.exit(failure)
})
