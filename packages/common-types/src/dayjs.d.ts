/* eslint-disable */
import { Dayjs as DayjsInterface, ConfigType, OpUnitType, PluginFunc } from 'dayjs';

declare const plugin: PluginFunc;
export = plugin;

interface DayjsObject {
  years: number;
  months: number;
  date: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

declare module 'dayjs' {
  interface Dayjs extends DayjsInterface {
    fromNow(withoutSuffix?: boolean): string;
    from(compared: ConfigType, withoutSuffix?: boolean): string;
    toNow(withoutSuffix?: boolean): string;
    to(compared: ConfigType, withoutSuffix?: boolean): string;
    isBetween(a: ConfigType, b: ConfigType, c?: OpUnitType | null, d?: string): boolean;
    isSameOrBefore(date: ConfigType, unit?: OpUnitType): boolean;
    isSameOrAfter(date: ConfigType, unit?: OpUnitType): boolean;
    toObject(): DayjsObject;
    utc(): Dayjs;
    local(): Dayjs;
    isUTC(): boolean;
  }
  export function utc(config?: ConfigType, format?: string): Dayjs;
  export function weekdays(): string[];
  export function weekdaysShort(): string[];
  export function weekdaysMin(): string[];
  export function monthsShort(): string[];
  export function months(): string[];
}
