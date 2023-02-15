import type { LazyExoticComponent } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

type SvgSymbolComponent = LazyExoticComponent<SvgrComponent> | SvgrComponent;

type CreateRequireContextFn = {
  (): (name: string) => Promise<{ default: SvgrComponent }>;
};

interface ISvgSymbolStore<SvgSymbolType> {
  get(name: SvgSymbolType): SvgSymbolComponent;
}

export type { ISvgSymbolStore, SvgSymbolComponent, CreateRequireContextFn };
