import { Type } from 'pokemon-resources';

type Forme = {
  readonly name: string;
  readonly formeName: string;
  readonly formeNumber: number;
  readonly isBaseForme: boolean;
  readonly isMega: boolean;
  readonly isGMax: boolean;
  readonly isBattleOnly: boolean;
  readonly alias: string;
  readonly types: readonly Type[];
  readonly genderRatio: { readonly male: number; readonly female: number };
  readonly baseStats: {
    readonly hp: number;
    readonly atk: number;
    readonly def: number;
    readonly spa: number;
    readonly spd: number;
    readonly spe: number;
  };
  readonly ability1: string;
  readonly ability2: string | null;
  readonly abilityH: string | null;
  readonly height: number;
  readonly weight: number;
  readonly evos: readonly FormeReference[];
  readonly prevo: FormeReference | null;
  readonly eggGroups: readonly string[];
  readonly gen: number;
  readonly regional: RegionalForme | null;
  readonly subLegendary: boolean;
  readonly restrictedLegendary: boolean;
  readonly ultraBeast: boolean;
  readonly paradox: boolean;
  readonly mythical: boolean;
  readonly cosmeticForme: boolean;
  readonly sprite: string;
  readonly spriteIndex: readonly [number, number];
};

export type RegionalForme = 'Alola' | 'Galar' | 'Hisui' | 'Paldea';

type FormeReference = {
  readonly dexNumber: number;
  readonly formeNumber: number;
};

export default Forme;
