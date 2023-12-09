export function isNonEmptyArray(arr:any[]): arr is Array<string|number> {
    return arr.length > 0
}