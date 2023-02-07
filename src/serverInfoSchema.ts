import { z } from "zod";

export const serverInfoSchema = z.object({
  currentVersion: z.number(),
  serviceDescription: z.string(),
  hasVersionedData: z.boolean(),
  hasArchivedData: z.boolean(),
  supportsDisconnectedEditing: z.boolean(),
  supportsDatumTransformation: z.boolean(),
  supportsRelationshipsResource: z.boolean(),
  syncEnabled: z.boolean(),
  supportedQueryFormats: z.string(),
  maxRecordCount: z.number(),
  maxRecordCountFactor: z.number(),
  capabilities: z.string(),
  description: z.string(),
  copyrightText: z.string(),
  spatialReference: z.object({ wkid: z.number(), latestWkid: z.number() }),
  initialExtent: z.object({
    xmin: z.number(),
    ymin: z.number(),
    xmax: z.number(),
    ymax: z.number(),
    spatialReference: z.object({ wkid: z.number(), latestWkid: z.number() }),
  }),
  fullExtent: z.object({
    xmin: z.number(),
    ymin: z.number(),
    xmax: z.number(),
    ymax: z.number(),
    spatialReference: z.object({ wkid: z.number(), latestWkid: z.number() }),
  }),
  allowGeometryUpdates: z.boolean(),
  allowTrueCurvesUpdates: z.boolean(),
  onlyAllowTrueCurveUpdatesByTrueCurveClients: z.boolean(),
  supportsApplyEditsWithGlobalIds: z.boolean(),
  supportsTrueCurve: z.boolean(),
  units: z.string(),
  documentInfo: z.object({
    Title: z.string(),
    Author: z.string(),
    Comments: z.string(),
    Subject: z.string(),
    Category: z.string(),
    Keywords: z.string(),
  }),
  supportsQueryDomains: z.boolean(),
  layers: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      parentLayerId: z.number(),
      defaultVisibility: z.boolean(),
      subLayerIds: z.null(),
      minScale: z.number(),
      maxScale: z.number(),
      type: z.string(),
      geometryType: z.string(),
    })
  ),
  tables: z.array(z.object({ id: z.number(), name: z.string() })),
  relationships: z.array(z.unknown()),
  enableZDefaults: z.boolean(),
  zDefault: z.number(),
  allowUpdateWithoutMValues: z.boolean(),
  datumTransformations: z.array(
    z.object({
      geoTransforms: z.array(
        z.object({
          wkid: z.number(),
          latestWkid: z.number(),
          transformForward: z.boolean(),
          name: z.string(),
        })
      ),
    })
  ),
  referenceScale: z.number(),
});
