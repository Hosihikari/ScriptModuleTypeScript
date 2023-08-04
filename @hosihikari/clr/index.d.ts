declare interface ClrType {
  new (...args: (ClrInstance | string | boolean)[]): ClrInstance;
  [key: string]: any;
  toString(): string;
  toString(format: string): string;
}
declare interface ClrInstance {
  [key: string]: any;
  toString(): string;
  toString(format: string): string;
}
export function clrImport(clrTypeName: string): ClrType;
export function clrImport(clrTypeName: string, assemblyName: string): ClrType;
export function toClrInstance(obj: any, type: ClrType): ClrInstance;
export function toClrInstance(
  obj: any,
  type:
    | "int"
    | "string"
    | "bool"
    | "double"
    | "float"
    | "long"
    | "short"
    | "byte"
    | "char"
    | "uint"
    | "ulong"
    | "ushort"
    | "sbyte"
    | "decimal"
    | "object"
): ClrInstance;
export function makeGenericType(
  genericType: ClrType,
  ...typeArguments: ClrType[]
): ClrType;
export function makeGenericType(
  elementType: ClrType,
  typeArguments: ClrType[]
): ClrType;
export function getAllLoadedAssembly(): string[];
export function getAllTypeFromAssembly(assemblyName: string): string[];
