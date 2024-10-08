# Change Log - @rnx-kit/metro-serializer

## 2.0.0

### Major Changes

- 3afb5fa: Bump minimum Node version to 16.17

### Patch Changes

- Updated dependencies [3afb5fa]
  - @rnx-kit/tools-react-native@2.0.0

## 1.0.14

### Patch Changes

- 9d7a2dfc: Fix `metro/package.json` not being resolved from the correct path

## 1.0.13

### Patch Changes

- 2885f73c: Ensure correct Metro dependencies are used by traversing the
  dependency chain starting from `react-native`
- Updated dependencies [2885f73c]
  - @rnx-kit/tools-react-native@1.3.4

## 1.0.12

### Patch Changes

- e4c560b3: Remove unused peer dependency

## 1.0.6

Mon, 01 Nov 2021 13:46:13 GMT

### Patches

- Normalize main and types fields across all packages which use them.
  (afoxman@microsoft.com)

## 1.0.2

Wed, 04 Aug 2021 10:08:23 GMT

### Patches

- Bump @rnx-kit/metro-serializer to v1.0.2
  (4123478+tido64@users.noreply.github.com)

## 1.0.1

Thu, 29 Jul 2021 19:42:04 GMT

### Patches

- Bump @rnx-kit/metro-serializer to v1.0.1
  (4123478+tido64@users.noreply.github.com)

## 1.0.0

Mon, 12 Apr 2021 12:44:24 GMT

### Minor changes

- MetroSerializer is Metro's default JavaScript bundle serializer but with
  plugin support (4123478+tido64@users.noreply.github.com)
