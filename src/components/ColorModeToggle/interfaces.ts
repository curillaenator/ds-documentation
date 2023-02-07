export type ModesType = 'light' | 'dark' | 'color';

export interface ColorModeToggleProps {
  value: ModesType;
  onChange: (value: ModesType) => void;
  disabled?: boolean;
  title?: string;
  modes?: ModesType[];
  className?: string;
}
