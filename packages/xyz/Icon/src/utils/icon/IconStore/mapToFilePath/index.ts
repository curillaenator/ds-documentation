import type { Icons } from '../../../..';

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function mapToFilePath(iconName: Icons) {
  const [dir, ...fileName] = iconName.split('-');
  return `./${dir}/${fileName.map((word, idx) => (idx === 0 ? word : capitalizeFirstLetter(word))).join('')}.tsx`;
}
