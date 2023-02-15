import { ReactNode } from 'react';

export type NotionPlacement = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';

export interface BaseAvatarProps {
  dataTestId?: string;
  title?: string;
  alt?: string;
  src?: string;
  initials?: string;
  username?: string;
  subline?: string;
  disabled?: boolean;
  online?: boolean;
  notion?: ReactNode;
  notionPlacement?: NotionPlacement;
  className?: string;
}

export interface InternalAvatarProps {
  cancelableBorder?: boolean;
}

export interface AvatarProps extends BaseAvatarProps, InternalAvatarProps {}
