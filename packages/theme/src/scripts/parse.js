/* eslint-disable import/no-dynamic-require, @typescript-eslint/no-var-requires, global-require */
const path = require('path');

const {
  convertDenormalizedTokensToSass,
  parseLocalThemeFile,
  // generateTypesSchema,
  // warnInvalidScaleSize,
  // validateAssocMaps,
  // createVariatedDict,
} = require('@pcbl-ui-v4/ds-tokens-parser');

const src = path.resolve(__dirname, '../source/XYZ.json');
const dist = path.resolve(__dirname, '../dist/XYZ.json');
const scss = path.resolve(__dirname, '../scss/');
// const typesSchema = path.resolve(__dirname, '../typesSchema');

// const componentsNotationsPath = path.resolve(__dirname, '../notations/components.json');
// const tokensNotationsPath = path.resolve(__dirname, '../notations/dictionary.json');

(async () => {
  // const componentsNotations = require(componentsNotationsPath);
  // const { schemaNames, tokenNames, schemaVariations, tokenNamesVariations } = require(tokensNotationsPath);

  // const cssvDict = {
  //   schemaNames: { ...createVariatedDict(schemaNames, schemaVariations) },
  //   tokenNames: { ...createVariatedDict(tokenNames, tokenNamesVariations) },
  // };

  const cssvDict = {
    schemaNames: {},
    tokenNames: {},
  };

  // if (!validateAssocMaps(componentsNotations, cssvDict)) return;

  await parseLocalThemeFile(src, dist);

  const tokens = require(dist);

  // const groups = Object.keys(componentsNotations);
  const groups = ['style'];

  // warnInvalidScaleSize(tokens, { groups });

  await convertDenormalizedTokensToSass(tokens, {
    destination: scss,
    groups,
    // groupsAssoc: componentsNotations,
    groupsAssoc: ['style'],
    cssvDict,
    escapeSymbols: ['%'],
    withCssv: true,
    cssvSkip: ['style'],
  });

  // await generateTypesSchema(tokens, {
  //   destination: typesSchema,
  //   groups,
  // });
})();
