import { DefineComponent } from "vue";
import { mergeSlots } from "@/utils/assist";

/*
 *向上找到最近的指定组件
 */
export const findComponentUpward = (content: DefineComponent, componentName: string) => {
    let parent = content.$parent;
    let name = parent.$options.name;

    while (parent && (!name || [componentName].indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) {
            name = parent.$options.name;
        }
    }
    return parent;
};
/*
 *向上找到所有的指定组件
 */
export const findComponentsUpward = (
    content: DefineComponent,
    componentName: string
): DefineComponent[] => {
    const parents = [];
    const parent = content.$parent;

    if (parent) {
        if (parent.$options.name === componentName) {
            parents.push(parent);
        }
        return parents.concat(findComponentsUpward(parent, componentName));
    } else {
        return [];
    }
};

/*
 *向下找到最近的指定组件
 */
export const findComponentDownward = (
    content: DefineComponent,
    componentName: string
): DefineComponent => {
    const childrens = content.$children;
    let children = null;

    if (childrens.length) {
        for (const child of childrens) {
            const name = child.$options.name;

            if (name === componentName) {
                children = child;
                break;
            } else {
                children = findComponentDownward(child, componentName);
                if (children) break;
            }
        }
    }
    return children;
};

/*
 *向下找到所有的指定组件
 */
export const findComponentsDownward = (
    content: DefineComponent,
    componentName: string
): DefineComponent[] => {
    const children = content.$children;
    return children.reduce((components: any[], child: DefineComponent) => {
        if (child.$options.name === componentName) {
            components.push(child);
        }
        const foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
};

/**
 * 找到指定组件的兄弟组件
 * @param content 当前组件的实例
 * @param componentName 要查找的组件名称
 * @param scope 查找范围 all | slots name
 * @param exceptMe // 是否包含自身
 */
export const findBrothersComponents = (
    content: any,
    componentName: string,
    scope = "all",
    exceptMe = true
) => {
    console.log(content.$parent, "content.$parent");
    const slots = content.$parent.$slots;
    let res: any = [];
    if (scope === "all") {
        res = mergeSlots(slots);
    } else {
        res = slots[scope]();
    }

    res = res.filter((item: any) => {
        return item.type.name === componentName;
    });
    const index = res.findIndex((item: { _uid: any }) => item._uid === content._uid);
    if (exceptMe) res.splice(index, 1);
    return res;
};
