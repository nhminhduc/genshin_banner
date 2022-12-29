import versions from "assets/data/versions.json";

export default function useVersionList(): string[] {
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
