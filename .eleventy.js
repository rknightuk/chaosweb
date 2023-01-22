module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets")

  eleventyConfig.addFilter("outputJson", function(data) {
    return JSON.stringify(data, '', 2)
  })

  return {
    passthroughFileCopy: true
  };
};
