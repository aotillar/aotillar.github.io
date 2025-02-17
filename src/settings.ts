// Global data
type Config = {
  title: string;
  description: string;
  lang: string;
  favicon: string;
  og: {
    image: string,
    imageAlt: string,
    imageType: string,
    imageWidth: string,
    imageHeight: string,
  }
}

export const siteConfig: Config = {
  title: "Aaron Otillar",
  description: "A blog about maps, geoscience, and other cool Science Facts",
  lang: "en",
  favicon: "/favicon.svg",
  og: {
    image: "/ogImage.png",
    imageAlt: "Open Graph image for the smallworld Astro template",
    imageType: "image/png",
    imageWidth: "1200",
    imageHeight: "630",
  }
}

