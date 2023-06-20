'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./reach-listbox.cjs.prod.js");
} else {
  module.exports = require("./reach-listbox.cjs.dev.js");
}
