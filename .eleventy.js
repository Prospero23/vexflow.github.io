import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

// TODO: The GitHub workflow can set an environment variable to turn off debug mode.
const DEBUG_MODE = true;

export default async function (eleventyConfig) {
  eleventyConfig.addGlobalData("currDate", () => new Date());
  eleventyConfig.addPassthroughCopy({ static: "/" });
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin, {
    // baseHref: eleventyConfig.pathPrefix,
    extensions: "html",
  });
}

export const config = {
  dir: {
    input: "src/",
    includes: "./_includes/",
    data: "./_data/",
    output: "./_site/",
  },
  pathPrefix: "/",
};