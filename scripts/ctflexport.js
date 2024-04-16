// const contentfulExport = require("contentful-export");
import contentfulExport from "contentful-export";
// console.log("contentfulExport ", contentfulExport);
import "dotenv/config";

// require("dotenv").config({
//   path: ".env",
// });

// console.log("Hello from benefits prebuild", process.env.CONTENTFUL_SPACE_ID);

const options = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  managementToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  environmentId: "master",
  exportDir: "contentful",
  contentFile: "export.json",
  downloadAssets: false,
};

contentfulExport(options);
