import { config } from "config";

export default function useVersionList(): string[] {
  const { versions } = config;
  const versionList = [
    ...new Set(
      versions.sort((n1, n2) => {
        if (n1 > n2) {
          return -1;
        }
        if (n1 < n2) {
          return 1;
        }
        return 0;
      }),
    ),
  ];
  return versionList;
}
