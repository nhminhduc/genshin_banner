import { useCharacterfromJson } from "hooks/useCharacterData";

export default function useVersionList(): string[] {
  const charactersJSON = useCharacterfromJson();
  const versionList = [
    ...new Set(
      charactersJSON
        .flatMap(({ banner }) => banner?.version)
        .filter((version): version is string => version !== undefined)
        .sort((n1, n2) => {
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
