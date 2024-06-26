# @rnx-kit/third-party-notices

[![Build](https://github.com/microsoft/rnx-kit/actions/workflows/build.yml/badge.svg)](https://github.com/microsoft/rnx-kit/actions/workflows/build.yml)
[![npm version](https://img.shields.io/npm/v/@rnx-kit/third-party-notices)](https://www.npmjs.com/package/@rnx-kit/third-party-notices)

`@rnx-kit/third-party-notices` provides a helper library to create a
third-party-notices text file based on a output bundle. It also provides a cli
interface to the library for integration into build steps like just-scripts

This function will read the sourcemap file and tries to find all files that are
referenced in the sourcemap by assuming that all dependencies are represented as
`node_modules\moduleName` or `node_modules\@scope\moduleName` It will then look
in the package.json file to see if it finds a licence claration or it will look
for the file called `LICENCE` in the root. And aggregate all ese files in the
output file.

This package works for npm, yarn and pnpm package layouts formats.

## Usage

### Commandline

```
npx @rnx-kit/third-party-notices \
    --rootPath <myPackage> \
    --sourceMapFile <myPackage/dist/myPackage.js.map>
```

```
Options:
  --help             Show help                                         [boolean]
  --version          Show version number                               [boolean]
  --rootPath         The root of the repo where to start resolving modules from.
                                                             [string] [required]
  --sourceMapFile    The sourceMap file to generate license contents for.
                                                             [string] [required]
  --json             Output license information as a JSON
                                                      [boolean] [default: false]
  --outputFile       The output file to write the license file to.      [string]
  --ignoreScopes     Npm scopes to ignore and not emit license information for
                                                                         [array]
  --ignoreModules    Modules (js packages) to not emit license information for
                                                                         [array]
  --preambleText     A list of lines to prepend at the start of the generated
                     license file.                                       [array]
  --additionalText   A list of lines to append at the end of the generated
                     license file.                                       [array]
  --fullLicenseText  Include full license text in the JSON output
                                                      [boolean] [default: false]
```

### As a library

```ts
import { writeThirdPartyNotices } from "@rnx-kit/third-party-notices";

writeThirdPartyNotices({
  rootPath: ".",
  sourceMapFile: "./dist/myPackage.js.map",
});
```

### As a plugin

Import and add the plugin to `ThirdPartyNotices` in your `metro.config.js`, and
optionally configure it to your liking:

```diff
 const { makeMetroConfig } = require("@rnx-kit/metro-config");
+const { ThirdPartyNotices } = require("@rnx-kit/third-party-notices");
+const { MetroSerializer } = require("@rnx-kit/metro-serializer");

 module.exports = makeMetroConfig({
   serializer: {
+    customSerializer: MetroSerializer([
+      ThirdPartyNotices(),
+    ]),
   },
 });
```
