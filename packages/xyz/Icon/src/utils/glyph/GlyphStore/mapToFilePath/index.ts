import { Glyphs } from '../../../..';
import { mapPropsToGlyphs } from '../../mapPropsToGlyphs';

export function mapToFilePath(fileName: Glyphs) {
  return mapPropsToGlyphs[fileName];
}
