function config(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/assets/");

  eleventyConfig.addPassthroughCopy({
    "node_modules/bulma/css/versions/bulma-no-dark-mode.min.css":
      "assets/bulma.min.css",
    "./src/public": "/",
    "./src/assets/": "assets/",
  });

  return {
    dir: { input: "src", output: "dist", includes: "/components" },
  };
}

export default config;
