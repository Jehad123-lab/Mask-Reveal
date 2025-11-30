export type DesignTokenLevel = '1' | '2' | '3' | '1a' | '1b';
export type ComponentSize = 'S' | 'M' | 'L';
export type InteractionState = 'default' | 'hover' | 'focus' | 'press';

export interface StyleObject {
  base: string;
  variants?: Record<string, string>;
  sizes?: Record<string, string>;
  [key: string]: any;
}

export interface MousePosition {
  x: number | null;
  y: number | null;
}

export enum ThemeMode {
  Light = 'Light',
  Dark = 'Dark'
}

export interface ComplianceReport {
  tier1: boolean;
  tier2: boolean;
  tier3: boolean;
}