# Change Log - @rnx-kit/babel-preset-metro-react-native

## 2.0.0

### Major Changes

- 3afb5fa: Bump minimum Node version to 16.17

### Patch Changes

- Updated dependencies [3afb5fa]
  - @rnx-kit/console@2.0.0

## 1.1.8

### Patch Changes

- b9f259a: Ensure `@babel/runtime` can be found in a pnpm environment
- Updated dependencies [1209e09]
  - @rnx-kit/console@1.1.0

## 1.1.7

### Patch Changes

- 6dd0e03: Deprecate `looseClassTransform`
- Updated dependencies [ff4fe4c]
  - @rnx-kit/console@1.0.13

## 1.1.6

### Patch Changes

- 95703e41: Help Babel find `@babel/plugin-transform-classes` in pnpm setups

## 1.1.5

### Patch Changes

- cca1727d: Use `@react-native/babel-preset` when it's specified in
  `package.json`

## 1.1.4

### Patch Changes

- 5455c234: Include missing peer dependencies detected by Yarn 3.0.

## 1.1.3

### Patch Changes

- a1fcd9eb: Fix modules not being resolved in pnpm-like setups

## 1.1.2

### Patch Changes

- 8147a812: Use esbuild only for production bundles

## 1.1.1

### Patch Changes

- f80cff5a: Use `esbuild` transform profile when `metro-serializer-esbuild` is
  used

## 1.1.0

### Minor Changes

- 79e4f8c: Allow enabling loose mode on `@babel/plugin-transform-classes`

## 1.0.6

Tue, 21 Sep 2021 13:01:58 GMT

### Patches

- Add `esbuild` transform profile for use with `metro-serializer-esbuild`
  (4123478+tido64@users.noreply.github.com)

## 1.0.5

Thu, 16 Sep 2021 10:10:39 GMT

### Patches

- Bump @rnx-kit/babel-preset-metro-react-native to v1.0.5
  (4123478+tido64@users.noreply.github.com)

## 1.0.4

Mon, 16 Aug 2021 14:17:13 GMT

### Patches

- Add support for @babel/plugin-transform-typescript 7.15
  (4123478+tido64@users.noreply.github.com)

## 1.0.3

Tue, 18 May 2021 19:20:51 GMT

### Patches

- Move @babel/core to dependencies. (4123478+tido64@users.noreply.github.com)

## 1.0.2

Fri, 16 Apr 2021 12:03:52 GMT

### Patches

- Allow forwarding options to Metro (4123478+tido64@users.noreply.github.com)

## 1.0.1

Thu, 11 Mar 2021 23:54:05 GMT

### Patches

- Fixed a typo in README (4123478+tido64@users.noreply.github.com)

## 1.0.0

Thu, 11 Mar 2021 15:17:06 GMT

### Minor changes

- Introduce Babel preset for React Native applications
  (4123478+tido64@users.noreply.github.com)
