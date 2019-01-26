import {GridUnit, gridUnits, GritConstantUnit, IGridTemplate} from './grid.model';
import {ReactChild} from 'react';
import isFunction from 'lodash-es/isFunction';

export const isConstantUnit = (unit: GridUnit): unit is GritConstantUnit => {
    return gridUnits.includes(unit) && !isFractionUnit(unit) && !isAutoUnit(unit);
};

export const isFractionUnit = (unit: GridUnit): unit is GridUnit.Fr => {
    return unit === GridUnit.Fr;
};

export const isAutoUnit = (unit: GridUnit): unit is GridUnit.Auto => {
    return unit === GridUnit.Auto;
};

export const isGridTemplateFunction = (
    gridTemplate: IGridTemplate | ((childrenToSet: ReactChild[], listIndex: number) => IGridTemplate),
): gridTemplate is (childrenToSet: ReactChild[], listIndex: number) => IGridTemplate => {
    return isFunction(gridTemplate);
};

export const isSpanTemplateFunction = (
    spanTemplate: number[] | ((childrenToSet: ReactChild[], listIndex) => number[])
): spanTemplate is (childrenToSet: ReactChild[], listIndex) => number[] => {
    return isFunction(spanTemplate);
};

export const isGridTemplateArray = (
    gridTemplate: IGridTemplate | ((childrenToSet: ReactChild[], listIndex: number) => IGridTemplate),
): gridTemplate is IGridTemplate => {
    return Array.isArray(gridTemplate);
};

type Diff<T extends keyof any, U extends keyof any> =
    ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
export type Overwrite<T, U> = Pick<T, Diff<keyof T, keyof U>> & U;