const staticConfig = {
  elements: ["anemo", "cryo", "dendro", "electro", "geo", "hydro", "pyro"],
  rarities: ["4", "5"],
  versions: [
    "2.2.2",
    "2.3.1",
    "2.3.2",
    "2.4.1",
    "2.4.2",
    "2.5.1",
    "2.5.2",
    "2.6.1",
    "2.6.2",
    "2.7.1",
    "2.7.2",
    "2.8.1",
    "2.8.2",
    "3.0.1",
    "3.0.2",
    "3.1.1",
    "3.1.2",
    "3.2.1",
    "3.2.2",
    "3.3.1",
    "3.3.2",
  ],
};

export const config = {
  baseUrl: (import.meta.env.VITE_IMAGE_S3_BASE_URL as string) ?? "",
  ...staticConfig,
};
