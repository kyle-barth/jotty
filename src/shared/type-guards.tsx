export function areStrings(val: any): val is string[] {
  return Array.isArray(val) && val.every(x => typeof x === 'string');
}
