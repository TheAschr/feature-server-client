import { layerInfoSchema } from "./layerInfoSchema";
import { serverInfoSchema } from "./serverInfoSchema";
import { tableInfoSchema } from "./tableInfoSchema";
import fs from "fs";
import path from "path";
import { TypeOf } from "zod";
import camelCase from "camelcase";

const types = ({
  serverInfo,
  layerInfos,
  tableInfos,
}: {
  serverInfo: TypeOf<typeof serverInfoSchema>;
  layerInfos: TypeOf<typeof layerInfoSchema>[];
  tableInfos: TypeOf<typeof tableInfoSchema>[];
}) => `
import { z } from 'zod';


type LayerAttributes = {
    ${layerInfos.map(
      (layerInfo) => `
    '${layerInfo.name}': {
        ${layerInfo.fields
          .map(
            (field) =>
              `${field.name}: ${(() => {
                let type: "number" | "string" | "boolean";
                switch (field.type) {
                  case "esriFieldTypeDate":
                    type = "number";
                    break;
                  case "esriFieldTypeGUID":
                    type = "string";
                    break;
                  case "esriFieldTypeGlobalID":
                    type = "string";
                    break;
                  case "esriFieldTypeInteger":
                    type = "number";
                    break;
                  case "esriFieldTypeOID":
                    type = "number";
                    break;
                  case "esriFieldTypeString":
                    type = "string";
                    break;
                }
                if (field.nullable) {
                  return `${type} | null`;
                }
                return type;
              })()};`
          )
          .join("\n")}
    }
`
    )}
}

type LayerName = keyof LayerAttributes;

export function featureSchema<T extends LayerName>(layerName: LayerName) {

}
`;

export async function genTypes(rawURL: string) {
  const url = new URL(rawURL);
  url.searchParams.set("f", "json");

  const serverInfo = await fetch(url.toString(), { method: "GET" })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res);
      }
      return res.json();
    })
    .then((res) => serverInfoSchema.parse(res));

  const [layerInfos, tableInfos] = await Promise.all([
    Promise.all(
      serverInfo.layers.map(async (layer) => {
        const layerUrl = new URL(url);
        layerUrl.pathname += `/${layer.id}`;
        return await fetch(layerUrl.toString(), { method: "GET" })
          .then((res) => {
            if (!res.ok) {
              return Promise.reject(res);
            }
            return res.json();
          })
          .then((res) => layerInfoSchema.parse(res));
      })
    ),
    Promise.all(
      serverInfo.tables.map(async (table) => {
        const tableUrl = new URL(url);
        tableUrl.pathname += `/${table.id}`;
        return await fetch(tableUrl.toString(), { method: "GET" })
          .then((res) => {
            if (!res.ok) {
              return Promise.reject(res);
            }
            return res.json();
          })
          .then((res) => {
            try {
              return tableInfoSchema.parse(res);
            } catch (err) {
              console.log(tableUrl);
              throw err;
            }
          });
      })
    ),
  ]);

  return types({ serverInfo, layerInfos, tableInfos });
}

genTypes(
  "https://edits-staging.nationalmap.gov/arcgis/rest/services/gaznames/gaznames_editversion/FeatureServer"
)
  .then((types) => {
    fs.writeFileSync(path.join(__dirname, "__generated__.ts"), types);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
