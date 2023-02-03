type Modes = 'light' | 'dark' | 'color';

export interface ColorModeToggleProps {
  value: Modes;
  onChange: (value: Modes) => void;
  disabled?: boolean;
  title?: string;
  modes?: Modes[];
  className?: string;
}
