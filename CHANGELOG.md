# Changelog
All notable changes to this project will be documented in this file.

<a name="v0.2.0"></a>
## [v0.2.0](https://github.com/solid/community-server/compare/v0.1.1...v0.2.0) - 2020-11-05

### Added
* [feat: Expose types](https://github.com/solid/community-server/commit/1dd14692feed21410557548d877c99ac08c2090f)
* [feat: Implement resource mapper for the file resource store (#142)](https://github.com/solid/community-server/commit/383da24601118d13e32c41b044ed7e69b31cc113)
* [feat: More integration tests and test configs (#154)](https://github.com/solid/community-server/commit/b1991cb08ae722aae497104067a7a455456952c7)
* [feat: Update RepresentationMetadata to store triples](https://github.com/solid/community-server/commit/76319ba360f563122f1d35854b0e846417da2490)
* [feat: Add logging](https://github.com/solid/community-server/commit/99464d9a954569cc1f259b01d28e223550571d7a)
* [feat: Implement HEAD request support](https://github.com/solid/community-server/commit/0644f8d24517b88018f85941d5b74b94c3a443f3)
* [feat: Have ExtensionBasedMapper handle extensions correctly](https://github.com/solid/community-server/commit/b47dc3f7f6038cd48a4964a52d9f1b34e52c0562)
* [feat: Decode URI in target extractor](https://github.com/solid/community-server/commit/bb28af937b4f22cb1d46936ab4668d4c76516cbd)
* [feat: Create MetadataHandler](https://github.com/solid/community-server/commit/7dcb3eaa84058694cf98d642d446d1a2220069b0)
* [feat: Integrate MetadataHandler](https://github.com/solid/community-server/commit/31844a4f40c5e4fc96936c87defa1e1cef3072df)
* [feat: Add support for mocking fs](https://github.com/solid/community-server/commit/e00cb05dc3d60a9bbeb774e569adfac09fedb831)
* [feat: Create DataAccessorBasedStore to have a standard store implementation](https://github.com/solid/community-server/commit/6ad40763f9f52ad470e269fe9989eecb7f7209ac)
* [feat: Create file-based DataAccessor](https://github.com/solid/community-server/commit/9a857b7581c59c46078c3ea56bb0c4aa4f134f9a)
* [feat: Add DataAccessorBasedStore integration](https://github.com/solid/community-server/commit/9b26bbef2d2c26402bf01fbe04f85b08a8ec8be9)
* [feat: Create InMemoryDataAccessor](https://github.com/solid/community-server/commit/b896004bac421a3999eeb2db529025333ec03002)
* [feat: Fully support storing content-type in file extensions](https://github.com/solid/community-server/commit/e861b080c22cb52ad0eab522ac639560e228b6a8)
* [feat: Implement SPARQL-based ResourceStore](https://github.com/solid/community-server/commit/6cc705331098a6a182dfae1dbc6bd1f139b913c4)
* [feat: Support SPARQL store backends](https://github.com/solid/community-server/commit/9f7c2461044f37c55293cc4a2fe38e7a29236cd6)
* [feat: Update RepresentationConvertingStore to convert incoming data](https://github.com/solid/community-server/commit/712a690904e544ebfaea21acdcf7d25256c7c07f)
* [feat: Implement a first draft of the RoutingResourceStore](https://github.com/solid/community-server/commit/86de805daae7637c148e2b420f0de059ff400c8c)
* [feat: Create a RoutingResourceStore that takes routing rules](https://github.com/solid/community-server/commit/5287cd1e41f3e0bac2ff8994176611bb10aad29d)
* [feat: Create multiple configs supporting different store backends](https://github.com/solid/community-server/commit/892b5f5921565a45e32a48b0b8b50b914779a38f)
* [feat: Create routing configs and partially clean up config structure](https://github.com/solid/community-server/commit/f8542a2c0c0bbda69a7913d6d3076618ab075a10)

### Changed
* [refactor: Rename BasePermissionsExtractor to MethodPermissionsExtractor](https://github.com/solid/community-server/commit/ba8b3575b0ac70e58768a17ac77a5e74193b5924)
* [refactor: Simplify MethodPermissionsExtractor](https://github.com/solid/community-server/commit/389fb333345b4331bc4ae29cc1cd369a7187210d)
* [refactor: More precise error messages](https://github.com/solid/community-server/commit/063437e5c1b83a36978469bcb9fbc818fe627dcf)
* [refactor: Make PassthroughStore generic](https://github.com/solid/community-server/commit/3d9507879beb77a8acb0144d472e63b875adea9b)
* [chore: update to componentsjs-generator with generics support](https://github.com/solid/community-server/commit/e9983d5837d579c6da0696c3ad6c58a661d4ec33)
* [refactor: Remove RuntimeConfig in favor of config variables, Closes #106](https://github.com/solid/community-server/commit/1dd140ab61845ae8df67c16883136736146549dd)
* [refactor: Streamline RepresentationMetadata interface](https://github.com/solid/community-server/commit/8d3979372b44b9367129c28cbffaad120691e675)
* [refactor: Make URI constants consistent](https://github.com/solid/community-server/commit/85df2e5d7f990b1108cc4da1a63dd18b5f739d87)
* [refactor: Fix typo](https://github.com/solid/community-server/commit/c150da337eee1419783e4bfc2960c48553fd5e2e)
* [refactor: Update eslint related dependencies](https://github.com/solid/community-server/commit/9657fbafb1cf30b23b4da5237e553fe7a82bddee)
* [refactor: Apply naming-convention rules](https://github.com/solid/community-server/commit/e349e041195fc982e80bc82ddb6ab2aa1c1293e0)
* [refactor: Rename UriUtil functions](https://github.com/solid/community-server/commit/e1533a0869071bbeabf0edfdfd05ccf57883cdaa)
* [refactor: Remove Turtle to Quad and Quad to Turtle converters](https://github.com/solid/community-server/commit/d8e6c0885984b5a144117f5128d1f6b1837b2e99)
* [refactor: Move file related metadata to FileResourceStore](https://github.com/solid/community-server/commit/fa935cc4c7064e3fc4f5866e9febcb43cfd84a10)
* [refactor: Let caller decide which error pipeStreamAndErrors should throw](https://github.com/solid/community-server/commit/006f7ea7aa986dcf3bb9cfd3329e509cd1ca90eb)
* [refactor: Rename instances of data resource to document](https://github.com/solid/community-server/commit/626b3114f413af2eb87c00c880ed86dc7569bb08)
* [refactor: Remove file and in memory stores](https://github.com/solid/community-server/commit/03c64e561707a4880822338817dc030b97a0f53f)
* [refactor: Make ExtensionBasedMapper only expose what is needed](https://github.com/solid/community-server/commit/4df26454d44a71e676342fc4c5b37fa9e2ee118c)
* [refactor: Implement empty canHandle on base class. (#289)](https://github.com/solid/community-server/commit/1a45b65df702815a65cc6fb539a6687eea5d3194)
* [chore: Organize tests (#292)](https://github.com/solid/community-server/commit/73a56d8682711fedd8f54216275e521c44a51670)
* [chore: Use Jest recommended linting.](https://github.com/solid/community-server/commit/4b4f7370137dbbacf2ef2c887e952ad6d7e55622)
* [refactor: Change constructor so it is supported by Components.js](https://github.com/solid/community-server/commit/dee4eef131f1852dd62428ff122d73630070d710)
* [refactor: Change routing constructors to work with Components.js](https://github.com/solid/community-server/commit/50dfea1a27b461ea8ca87526165d33f0d991c44a)
* [refactor: Change PreferenceSupport constructor to work with Components.js](https://github.com/solid/community-server/commit/ef6f01a82cc3c17d6b77b824ace707e2602732a0)
* [chore: Add docker npm scripts.](https://github.com/solid/community-server/commit/5f4f4b08b00b8c9004fc266ebdcb5fcab9611e52)
* [chore: Enable/disable Docker testing with a flag.](https://github.com/solid/community-server/commit/fe870f073a672316eb488964c7525884a7a0eb2d)

### Fixed
* [fix: metadata file error in FileResourceStore](https://github.com/solid/community-server/commit/c808dfeff09e26a4b31199cc0eec9db8667add28)
* [fix: Retain status codes when combining errors](https://github.com/solid/community-server/commit/10723bb6b866316c2f20da0fe47349bd5f52edf5)
* [fix: Have AsyncHandlers only check what is necessary](https://github.com/solid/community-server/commit/4d34cdd12f6dfcc5d5df64bd5c90b13148f69cfb)
* [Fix typo.](https://github.com/solid/community-server/commit/79defc3abb77d1454038c8a8e25b79494a9f4a6b)
* [fix: Make sure all URI characters are correctly encoded](https://github.com/solid/community-server/commit/e85ca622da0c8e3ef8344332e162cfe327f74551)
* [fix: Fix test issues](https://github.com/solid/community-server/commit/22962192ffff5eac028ef3604e1cd989331cbff0)
* [fix: Remove metadata file if no new metadata is stored](https://github.com/solid/community-server/commit/63f891c0f17ee915af21805ca114d2a9a90fb62e)
* [fix: Provide full coverage for util functions](https://github.com/solid/community-server/commit/c999abb7b074bd2f0b93c9cfca198324ec9b43ef)
* [fix: Correctly parse URL domain](https://github.com/solid/community-server/commit/5fa068687b3e99fb388e9c6bf1d3714a3695afaa)
* [fix: Resolve duplicate error message and no trailing newline](https://github.com/solid/community-server/commit/a7fa61ab2fc323372b889cab228cec3580e864fb)
* [fix: Write tests and fix related bugs, refactor code](https://github.com/solid/community-server/commit/dff4ba8efe2c0613c6184ee0a3ff7dcdb3587840)


<a name="v0.1.1"></a>
## [v0.1.1](https://github.com/solid/community-server/compare/v0.1.0...v0.1.1) - 2020-09-03

### Fixed
* [docs: Copyfitting on README](https://github.com/solid/community-server/commit/c3c4424636620c468824f9374d1da4b1558fd5b2)
* [fix: Move dependencies to production](https://github.com/solid/community-server/commit/80aad8ab07811ef5070cadfb3b0aabdc6f4214c9)


<a name="v0.1.0"></a>
## [v0.1.0](https://github.com/solid/community-server/compare/b949b6cf...v0.1.0) - 2020-09-03

### Added
* [feat: Send server identification](https://github.com/solid/community-server/commit/4965b476c9eb6405932d8e0b51039ac64e983525)
* [feat: Integrate ChainedConverter into the server](https://github.com/solid/community-server/commit/3931d5f6642c8ce8aaa8116a369ccaa1c0d494f6)
* [feat: Dynamically determine matching types in ChainedConverter](https://github.com/solid/community-server/commit/af4a82f4c18cdd2b7ff951bec4569e4001994c08)
* [feat: Create RepresentationConverter that chains other converters](https://github.com/solid/community-server/commit/734f7e7f0f2630c8ce0ba4a6a0a1fd5ccbe50c1f)
* [feat: allow custom config to be passed](https://github.com/solid/community-server/commit/09707a9e6de1161aee3d4a84748f8dcea1cb51ba)
* [feat: Enable dependency injection with auto-generated components](https://github.com/solid/community-server/commit/db04c55196d15f86c6dadce557d9053ba188aed5)
* [feat: add support for parsing more RDF formats using rdf-parse](https://github.com/solid/community-server/commit/e88e680ed7bd2799cdfd6f627dfc85f064dee94c)
* [feat: Support link and slug headers in SimpleBodyParser](https://github.com/solid/community-server/commit/86d5f367d52b769b563a8ad6ea1a02274f9ec5ab)
* [feat: Move runtime config into dedicated component, Closes #67](https://github.com/solid/community-server/commit/5126356c940bb12d9765bbd3571b6f1f6fa65cd0)
* [feat: Add file based ResourceStore (#52)](https://github.com/solid/community-server/commit/381dae42f689a11937ca4daf0227d0bd16064ce3)
* [feat: Add more extensive permission parsing support](https://github.com/solid/community-server/commit/e06d0bc8c5fed72a47bf8e82f0affba27e1f77bb)
* [feat: Integrate acl with rest of server](https://github.com/solid/community-server/commit/769b49293cffa77cd7381331bc59e488d7e8f4c9)
* [feat: Add acl support](https://github.com/solid/community-server/commit/0545ca121eedec5541900aa1411dbeea8af015e2)
* [feat: Integrate data conversion with rest of server](https://github.com/solid/community-server/commit/4403421c49e02b851c29e3cb29f248f00f03f639)
* [feat: Convert data from ResourceStore based on preferences](https://github.com/solid/community-server/commit/5e1bb10f81dbc81f6d0700a8c108030e5392b36d)
* [feat: Specifiy constants in separate file](https://github.com/solid/community-server/commit/14db5fed91005bc4f9c92aabbe1675b33b6e28a8)
* [feat: Integrate PATCH functionality](https://github.com/solid/community-server/commit/0e486cf6a6160b6e14a11ae988673b24b86f7303)
* [feat: Add support for SPARQL updates on ResourceStores](https://github.com/solid/community-server/commit/04a12c723eefb21b086bdb29e122b4726b1a3e18)
* [feat: Add OperationHandler for PATCH](https://github.com/solid/community-server/commit/482991cb9a94bd2b77b7ad64e0fc11edf5db1c50)
* [feat: Add BodyParser for SPARQL updates](https://github.com/solid/community-server/commit/95c65c86a70b63929ac902e005d809c4621bd759)
* [feat: Add lock functionality](https://github.com/solid/community-server/commit/a9b811a5a3c14c9774878b0e5a722ae9095c6c92)
* [feat: Add prepare script](https://github.com/solid/community-server/commit/a4dc00141cc4efaea782701d184a37f3176ecedd)
* [feat: Set up server using express](https://github.com/solid/community-server/commit/a9dc59bf78393ad6384599ae2f9a901c4b1b6bc2)
* [feat: Add coveralls support](https://github.com/solid/community-server/commit/792323797d4e1d1b97b9fadb32728d6196e7f132)
* [feat: Validate Accept* headers while parsing](https://github.com/solid/community-server/commit/64a3f908316048f826dd0515c56b670b32a15282)
* [feat: Fully support Accept* headers](https://github.com/solid/community-server/commit/9d9f7df5d18b035b036e78ae79019f79b86d9818)
* [feat: add simple response writer](https://github.com/solid/community-server/commit/618005675f50e7c78a25e9059d9706afd18ba1fe)
* [feat: add simple operation handlers](https://github.com/solid/community-server/commit/fe8749390cfe528a5b0c3abc5d3aff949dc5ce8a)
* [feat: add simple resource store](https://github.com/solid/community-server/commit/12fd00e3b8607746fd0304c2372fcb8840e954df)
* [feat: add simple permissions related handlers](https://github.com/solid/community-server/commit/d983fca8f5ae4dcd15adcd03d30303977a72c187)
* [feat: add response description interface](https://github.com/solid/community-server/commit/e0343fca54d6a779fd94df9863db2b28bb9ba332)
* [feat: add simple request parser](https://github.com/solid/community-server/commit/cf258d0317feb8988dff97bf39e262a8cdfc1b94)
* [feat: add simple preference parser](https://github.com/solid/community-server/commit/09eb665c12e08afb0673d4748099b120481d3033)
* [feat: add simple target extractor](https://github.com/solid/community-server/commit/3c8a08761570616fb45af02de1e987a18ce80788)
* [feat: add simple body parser](https://github.com/solid/community-server/commit/d4f70d9c59fd5eaa767f7d862b8117365cd28e8e)
* [feat: add request parsing related interfaces](https://github.com/solid/community-server/commit/70af46933bc055397ee70ee7f4e1801c95bdd9d7)
* [feat: add typed readable](https://github.com/solid/community-server/commit/e0d74fd68af3575f267f8abc87c51a6fbab28d12)
* [feat: Add README with architecture links](https://github.com/solid/community-server/commit/aaf3f8e3aa890219e2a147622605ba2b62b729ee)
* [feat: add AuthenticatedLdpHandler](https://github.com/solid/community-server/commit/3e2cfaf11ee13c2ae3cb3e46f4df78c13c9d19cf)
* [feat: add FirstCompositeHandler to support multiple handlers](https://github.com/solid/community-server/commit/4229932a3ac75c2532da4e495e96b779fc5b6c92)
* [feat: add custom errors](https://github.com/solid/community-server/commit/57405f3e2695f3a82628e02052695314d656af95)
* [feat: add additional supported interfaces](https://github.com/solid/community-server/commit/a4f2b3995c3e8cfeacf5fe3dbbc0eeb8020f9c9e)
* [Initial configuration](https://github.com/solid/community-server/commit/b949b6cf5eade549b91731edcd1c4d931537a42e)
