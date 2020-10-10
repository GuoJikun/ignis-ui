export const isServer = false;

const trim = (string: string) => {
    return (string || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};
/* 添加事件绑定 */
export const on = (() => {
    if (!isServer && document.addEventListener) {
        return (element: HTMLElement | HTMLDocument, event: string, handler: any) => {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };
    } else {
        return (element: any, event: string, handler: () => void) => {
            if (element && event && handler) {
                element.attachEvent("on" + event, handler);
            }
        };
    }
})();

/* 移除事件绑定 */
export const off = (() => {
    if (!isServer && document.removeEventListener) {
        return (element: HTMLElement | HTMLDocument, event: string, handler: () => void) => {
            if (element && event) {
                element.removeEventListener(event, handler, false);
            }
        };
    } else {
        return (element: any, event: string, handler: () => void) => {
            if (element && event) {
                element.detachEvent("on" + event, handler);
            }
        };
    }
})();

export const once = (el: HTMLElement, event: string, fn: Function) => {
    const listener = function(this: any, ...args: any[]) {
        if (fn) {
            fn.apply(this, args);
        }
        off(el, event, listener);
    };
    on(el, event, listener);
};

export function hasClass(el: HTMLElement, cls: string) {
    if (!el || !cls) return false;
    if (cls.indexOf(" ") !== -1) throw new Error("className should not contain space.");
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (" " + el.className + " ").indexOf(" " + cls + " ") > -1;
    }
}
/**
 *
 * @param {*} el 元素
 * @param {*} cls 类名
 */
export function addClass(el: HTMLElement, cls: string) {
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || "").split(" ");

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else if (!hasClass(el, clsName)) {
            curClass += " " + clsName;
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

/**
 *
 * @param {*} el 元素
 * @param {*} cls 类名
 */
export function removeClass(el: HTMLElement, cls: string) {
    if (!el || !cls) return;
    const classes = cls.split(" ");
    let curClass = " " + el.className + " ";

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else if (hasClass(el, clsName)) {
            curClass = curClass.replace(" " + clsName + " ", " ");
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}
