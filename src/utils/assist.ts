// 判断参数是否是其中之一
export const oneOf = (value: string, validList: Array<string>): boolean => {
    return validList.includes(value);
};
// ui库前缀
export const prefix = "ins";
