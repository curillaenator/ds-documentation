import { lazy } from 'react';

import { ISvgSymbolStore, SvgSymbolComponent } from './interfaces';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

class SvgSymbolStore<SvgSymbolType extends string> implements ISvgSymbolStore<SvgSymbolType> {
  private readonly DefaultComponentModule: { default: SvgSymbolComponent };

  private readonly cache: Map<SvgSymbolType, SvgSymbolComponent> = new Map();

  private readonly context;

  private readonly mapNamesToPaths;

  constructor(
    context: (name: string) => Promise<{ default: SvgrComponent }>,
    defaultComponent: SvgSymbolComponent,
    mapNamesToPaths: (name: SvgSymbolType) => string,
  ) {
    this.context = context;
    this.DefaultComponentModule = {
      default: defaultComponent,
    };
    this.mapNamesToPaths = mapNamesToPaths;
  }

  get(name: SvgSymbolType): SvgSymbolComponent {
    if (this.cache.has(name)) {
      return this.cache.get(name) as SvgSymbolComponent;
    }

    return lazy(async () => {
      try {
        const module = await this.context(this.mapNamesToPaths(name));

        this.cache.set(name, module.default);

        return module;
      } catch (e) {
        return this.DefaultComponentModule;
      }
    });
  }
}

export default SvgSymbolStore;
