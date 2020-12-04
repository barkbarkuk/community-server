const { execSync } = require('child_process')
execSync('docker pull tenforce/virtuoso', { stdio: "inherit" })
execSync(
  'docker container create --name css-virtuoso' +
  ' -p 4000:8890' +
  ' -e SPARQL_UPDATE=true' +
  ' tenforce/virtuoso', 
  { stdio: "inherit" }
) 
