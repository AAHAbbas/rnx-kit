import type { Config } from "@react-native-community/cli-types";
import { rnxBuildCommand } from "./build";
import type { InputParams } from "./build/types";
import { runAndroid } from "./run/android";
import { runIOS } from "./run/ios";
import { runMacOS } from "./run/macos";

export function rnxRun(
  _argv: string[],
  config: Config,
  buildParams: InputParams
) {
  switch (buildParams.platform) {
    case "android":
      return runAndroid(config, buildParams);

    case "ios":
    case "visionos":
      return runIOS(config, buildParams);

    case "macos":
      return runMacOS(config, buildParams);
  }
}

export const rnxRunCommand = {
  name: "rnx-run",
  description:
    "Build and run your native app for testing in emulator/simulator or on device",
  func: rnxRun,
  options: [
    ...rnxBuildCommand.options,
    {
      name: "-d, --device <string>",
      description: "The name of the device to launch the app in",
    },
  ],
};
