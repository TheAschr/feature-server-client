import { z } from "zod";

export const layerInfoSchema = z.object({
  currentVersion: z.number(),
  id: z.number(),
  name: z.string(),
  type: z.string(),
  parentLayer: z.null(),
  defaultVisibility: z.boolean(),
  minScale: z.number(),
  maxScale: z.number(),
  canScaleSymbols: z.boolean(),
  geometryType: z.string(),
  description: z.string(),
  copyrightText: z.string(),
  editFieldsInfo: z.null(),
  ownershipBasedAccessControlForFeatures: z.null(),
  syncCanReturnChanges: z.boolean(),
  relationships: z.array(z.unknown()),
  isDataVersioned: z.boolean(),
  isDataArchived: z.boolean(),
  isCoGoEnabled: z.boolean(),
  supportsRollbackOnFailureParameter: z.boolean(),
  archivingInfo: z.object({
    supportsQueryWithHistoricMoment: z.boolean(),
    startArchivingMoment: z.number(),
  }),
  supportsStatistics: z.boolean(),
  supportsAdvancedQueries: z.boolean(),
  supportsValidateSQL: z.boolean(),
  supportsCoordinatesQuantization: z.boolean(),
  supportsCalculate: z.boolean(),
  supportsDatumTransformation: z.boolean(),
  advancedQueryCapabilities: z.object({
    supportsPagination: z.boolean(),
    supportsTrueCurve: z.boolean(),
    supportsQueryWithDistance: z.boolean(),
    supportsReturningQueryExtent: z.boolean(),
    supportsStatistics: z.boolean(),
    supportsHavingClause: z.boolean(),
    supportsOrderBy: z.boolean(),
    supportsDistinct: z.boolean(),
    supportsCountDistinct: z.boolean(),
    supportsQueryWithResultType: z.boolean(),
    supportsReturningGeometryCentroid: z.boolean(),
    supportsSqlExpression: z.boolean(),
    supportsQueryWithDatumTransformation: z.boolean(),
  }),
  extent: z.object({
    xmin: z.number(),
    ymin: z.number(),
    xmax: z.number(),
    ymax: z.number(),
    spatialReference: z.object({ wkid: z.number(), latestWkid: z.number() }),
  }),
  sourceSpatialReference: z.object({
    wkid: z.number(),
    latestWkid: z.number(),
  }),
  drawingInfo: z.object({
    renderer: z.object({
      type: z.string(),
      symbol: z.object({
        type: z.string(),
        style: z.string(),
        color: z.array(z.number()),
        size: z.number(),
        angle: z.number(),
        xoffset: z.number(),
        yoffset: z.number(),
        outline: z.object({ color: z.array(z.number()), width: z.number() }),
      }),
      label: z.string(),
      description: z.string(),
    }),
    transparency: z.number(),
    labelingInfo: z.null(),
  }),
  hasM: z.boolean(),
  hasZ: z.boolean(),
  enableZDefaults: z.boolean(),
  zDefault: z.number(),
  allowGeometryUpdates: z.boolean(),
  allowTrueCurvesUpdates: z.boolean(),
  onlyAllowTrueCurveUpdatesByTrueCurveClients: z.boolean(),
  hasAttachments: z.boolean(),
  supportsApplyEditsWithGlobalIds: z.boolean(),
  htmlPopupType: z.string(),
  objectIdField: z.string(),
  globalIdField: z.string(),
  displayField: z.string(),
  typeIdField: z.string(),
  subtypeField: z.string(),
  fields: z.array(
    z.union([
      z.object({
        name: z.string(),
        type: z.literal("esriFieldTypeOID"),
        alias: z.string(),
        domain: z.null(),
        editable: z.literal(false),
        nullable: z.literal(false),
        defaultValue: z.null(),
        modelName: z.string(),
      }),
      z.object({
        name: z.string(),
        type: z.literal("esriFieldTypeGlobalID"),
        alias: z.string(),
        domain: z.null(),
        editable: z.literal(false),
        nullable: z.literal(false),
        length: z.number(),
        defaultValue: z.null(),
        modelName: z.string(),
      }),
      z.object({
        name: z.string(),
        type: z.literal("esriFieldTypeGUID"),
        alias: z.string(),
        domain: z.null(),
        editable: z.boolean(),
        nullable: z.boolean(),
        length: z.number(),
        defaultValue: z.null(),
        modelName: z.string(),
      }),
      z.object({
        name: z.string(),
        type: z.literal("esriFieldTypeDate"),
        alias: z.string(),
        domain: z.null(),
        editable: z.boolean(),
        nullable: z.boolean(),
        defaultValue: z.union([z.number(), z.null()]),
        modelName: z.string(),
      }),
      z.object({
        name: z.string(),
        type: z.literal("esriFieldTypeInteger"),
        alias: z.string(),
        domain: z.union([
          z.object({
            type: z.literal("codedValue"),
            name: z.string(),
            description: z.string(),
            codedValues: z.array(
              z.object({ name: z.string(), code: z.number() })
            ),
            mergePolicy: z.string(),
            splitPolicy: z.string(),
          }),
          z.null(),
        ]),
        editable: z.boolean(),
        nullable: z.boolean(),
        defaultValue: z.union([z.number(), z.null()]),
        modelName: z.string(),
      }),
      z.object({
        name: z.string(),
        type: z.literal("esriFieldTypeString"),
        alias: z.string(),
        domain: z.union([
          z.object({
            type: z.literal("codedValue"),
            name: z.string(),
            description: z.string(),
            codedValues: z.array(
              z.object({ name: z.string(), code: z.string() })
            ),
            mergePolicy: z.string(),
            splitPolicy: z.string(),
          }),
          z.null(),
        ]),
        editable: z.boolean(),
        nullable: z.boolean(),
        defaultValue: z.null(),
        length: z.optional(z.number()),
        modelName: z.string(),
      }),
    ])
  ),
  geometryField: z.object({
    name: z.string(),
    type: z.string(),
    alias: z.string(),
    domain: z.null(),
    editable: z.boolean(),
    nullable: z.boolean(),
    defaultValue: z.null(),
    modelName: z.string(),
  }),
  indexes: z.array(
    z.object({
      name: z.string(),
      fields: z.string(),
      isAscending: z.boolean(),
      isUnique: z.boolean(),
      description: z.string(),
    })
  ),
  dateFieldsTimeReference: z.object({
    timeZone: z.string(),
    respectsDaylightSaving: z.boolean(),
  }),
  types: z.array(z.unknown()),
  templates: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      prototype: z.object({
        attributes: z.object({
          isunknowncoords: z.null(),
          gaz_id: z.null(),
          gaz_featureclass: z.null(),
          feature_code: z.null(),
          census_code: z.null(),
          gsa_code: z.null(),
          gsa_code_dateentered: z.null(),
          opm_code: z.null(),
          opm_code_dateentered: z.null(),
          partner: z.null(),
          partner_code: z.null(),
          censusclasscode: z.null(),
          gaz_elevation: z.null(),
          daterecordcommitted: z.null(),
          datelasteditscommitted: z.null(),
          gaz_featurehistory: z.null(),
          gaz_featuredescription: z.null(),
          addressbuildingname: z.null(),
          address: z.null(),
          city: z.null(),
          state_alpha: z.null(),
          zipcode: z.null(),
          isconflated: z.null(),
        }),
      }),
      drawingTool: z.string(),
    })
  ),
  maxRecordCount: z.number(),
  supportedQueryFormats: z.string(),
  capabilities: z.string(),
  useStandardizedQueries: z.boolean(),
  standardMaxRecordCount: z.number(),
  tileMaxRecordCount: z.number(),
  standardMaxRecordCountNoGeometry: z.number(),
  maxRecordCountFactor: z.number(),
});
