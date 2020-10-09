// 判断参数是否是其中之一
export const oneOf = (value: string, validList: Array<string>): boolean => {
    return validList.includes(value);
};
// ui库前缀
export const prefix = "Ins";

/**
 * 合并所有的slot
 * @param slots 组件的slots
 */
export function mergeSlots(slots: Record<string, any>) {
    const values = Object.values(slots);
    return values.reduce(<T>(previous: T[], current: () => any) => {
        return previous.push(...current());
    }, []);
}
