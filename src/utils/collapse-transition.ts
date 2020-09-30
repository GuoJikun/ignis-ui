import { addClass, removeClass } from "./dom";
import { prefix } from "./assist";

function Transition() {
    return {
        beforeEnter(el: any): void {
            addClass(el, "collapse-transition");
            if (!el.dataset) el.dataset = {};

            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.style.height = "0";
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        },

        enter(el: any): void {
            el.dataset.oldOverflow = el.style.overflow;
            if (el.scrollHeight !== 0) {
                el.style.height = el.scrollHeight + "px";
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
            } else {
                el.style.height = "";
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
            }

            el.style.overflow = "hidden";
        },

        afterEnter(el: any): void {
            // for safari: remove class then reset height is necessary
            removeClass(el, "collapse-transition");
            el.style.height = "";
            el.style.overflow = el.dataset.oldOverflow;
        },

        beforeLeave(el: any): void {
            if (!el.dataset) el.dataset = {};
            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.dataset.oldOverflow = el.style.overflow;

            el.style.height = el.scrollHeight + "px";
            el.style.overflow = "hidden";
        },

        leave(el: any): void {
            if (el.scrollHeight !== 0) {
                // for safari: add class after set height, or it will jump to zero height suddenly, weired
                addClass(el, "collapse-transition");
                el.style.height = 0;
                el.style.paddingTop = 0;
                el.style.paddingBottom = 0;
            }
        },

        afterLeave(el: any): void {
            removeClass(el, "collapse-transition");
            el.style.height = "";
            el.style.overflow = el.dataset.oldOverflow;
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        },
    };
}

export default {
    name: `${prefix}CollapseTransition`,
    functional: true,
    render(h: any, ctx: { children: any }) {
        let transition = new (Transition as any)();
        const data = {
            on: transition,
        };
        return h("transition", data, ctx.children);
    },
};
