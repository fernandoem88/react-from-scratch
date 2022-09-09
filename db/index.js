const assets = require("./assets.json");
const blocks = require("./blocks.json");
// Something more

module.exports = () => ({
  assets,
  ...blocks,
});
