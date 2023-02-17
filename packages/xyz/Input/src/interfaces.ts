import type { InputProps as BaseInputProps, MetaProps } from '@kit-base/input';
import { Icons } from '@kit-xyz/icon';

import { GeneratedInputProps } from './tokenInterfaces';

export type InputSize = GeneratedInputProps['size'];
export type InputShape = GeneratedInputProps['shape'];
export type InputState = GeneratedInputProps['state'];

type OmitedBaseInputProps = Omit<BaseInputProps, 'status' | 'upperNode' | 'lowerNode' | 'nodeRight' | 'nodeLeft'>;

export interface InputProps extends GeneratedInputProps, OmitedBaseInputProps {
  label?: string;
  iconLeft?: Icons;
  startMetaText?: MetaProps['startMetaText'];
  endMetaText?: MetaProps['endMetaText'];
  clearable?: boolean;
  onClearInput?: () => void;
}
