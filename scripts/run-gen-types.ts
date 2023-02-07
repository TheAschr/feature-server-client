import fs from "fs";
import path from "path";
import { genTypes } from "../src/genTypes";

export async function main() {
  const types = await genTypes(
    "https://edits-staging.nationalmap.gov/arcgis/rest/services/gaznames/gaznames_editversion/FeatureServer"
  );
  fs.writeFileSync(path.join(__dirname, "...", "__generated__.ts"), types);
}
