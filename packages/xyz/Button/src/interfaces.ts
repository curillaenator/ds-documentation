import type {
  ButtonProps as BaseButtonProps,
  ButtonSharedProps,
  ButtonDisabledProps,
  ButtonLoadingProps,
} from '@kit-base/button';
import { Icons as IconName, IconSize } from '@kit-xyz/icon';

import type { GeneratedButtonProps } from './tokenInterfaces';

export type ButtonVariant = NonNullable<GeneratedButtonProps['variant']>;
export type ButtonAppearance = NonNullable<GeneratedButtonProps['appearance']>;
export type ButtonState = NonNullable<GeneratedButtonProps['state']> | 'active' | 'disabled';
export type ButtonSize = NonNullable<GeneratedButtonProps['size']>;
export type ButtonShape = NonNullable<GeneratedButtonProps['shape']>;

export type ButtonColorSchema = `color-${ButtonAppearance}-${ButtonVariant}` | `state-${ButtonState}-${ButtonVariant}`;
export type ButtonBorderVariant = 'always';

export interface ButtonClassNameAssoc {
  colorSchema: Record<ButtonColorSchema, string>;
  shape: Record<ButtonShape, string>;
  size: Record<ButtonSize, string>;
  border: Record<ButtonBorderVariant, string>;
  loading: string;
}
export interface ButtonSizeToIconSizeAssoc extends Record<ButtonSize, IconSize> {}

interface ButtonExternalProps {
  appearance?: ButtonAppearance;
  variant?: ButtonVariant;
  state?: ButtonState | 'default';
  active?: boolean;
  size?: ButtonSize;
  shape?: ButtonShape;
  iconLeftName?: IconName;
  iconRightName?: IconName;
}

interface ButtonClassNameProps {
  bordered?: boolean | ButtonBorderVariant;
  colorSchema?: ButtonColorSchema;
}

interface ButtonInternalProps
  extends ButtonExternalProps,
    BaseButtonProps,
    ButtonClassNameProps,
    Partial<ButtonDisabledProps>,
    Partial<ButtonLoadingProps> {}

export interface ButtonProps extends ButtonExternalProps, Omit<ButtonSharedProps, 'iconLeft' | 'iconEnd'> {}

export type UseButtonClassNameFn = {
  (props: ButtonInternalProps, assoc?: ButtonClassNameAssoc): string;
};

export type UseButtonPropsFn = {
  <P extends ButtonInternalProps>(props: P): Omit<
    P,
    keyof (ButtonExternalProps & ButtonLoadingProps & ButtonClassNameProps)
  >;
};

export type UseButtonIconsFn = {
  <P extends ButtonInternalProps>(props: P): ButtonInternalProps;
};

export type ColorSchemaResolverFn = {
  (props: ButtonInternalProps): ButtonColorSchema;
};

export type BorderVariantResolverFn = {
  (props: ButtonInternalProps): boolean | ButtonBorderVariant;
};
