export interface ColorModeToggleProps {
  className: string;
  value: "dark" | "light";
  onChange: (value: "dark" | "light") => void;
}
