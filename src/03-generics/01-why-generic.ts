function head(value: string): string;
function head(value: number[]): number[];
function head(value: boolean[]): boolean[];
function head(value: string[]): string;
function head(value: Date[]): Date;
function head(value: any): any {
  return value[0];
}
const heh = head([true, false, true, true]);

interface ModeData {
    title: string,
    value: string, //number [] boolean
}