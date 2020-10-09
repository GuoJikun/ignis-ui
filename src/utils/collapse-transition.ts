import { h, defineComponent } from "vue";
import { addClass, removeClass } from "./dom";
import { prefix } from "./assist";

// function Transition() {
//     return {
//         onBeforeEnter(el: any): void {
//             addClass(el, "collapse-transition");
//             if (!el.dataset) el.dataset = {};

//             el.dataset.oldPaddingTop = el.style.paddingTop;
//             el.dataset.oldPaddingBottom = el.style.paddingBottom;
//             el.style.height = "0";
//             el.style.paddingTop = 0;
//             el.style.paddingBottom = 0;
//         },

//         onEnter(el: any): void {
//             el.dataset.oldOverflow = el.style.overflow;
//             if (el.scrollHeight !== 0) {
//                 el.style.height = el.scrollHeight + "px";
//                 el.style.paddingTop = el.dataset.oldPaddingTop;
//                 el.style.paddingBottom = el.dataset.oldPaddingBottom;
//             } else {
//                 el.style.height = "";
//                 el.style.paddingTop = el.dataset.oldPaddingTop;
//                 el.style.paddingBottom = el.dataset.oldPaddingBottom;
//             }

//             el.style.overflow = "hidden";
//         },

//         onAfterEnter(el: any): void {
//             // for safari: remove class then reset height is necessary
//             removeClass(el, "collapse-transition");
//             el.style.height = "";
//             el.style.overflow = el.dataset.oldOverflow;
//         },

//         onBeforeLeave(el: any): void {
//             if (!el.dataset) el.dataset = {};
//             el.dataset.oldPaddingTop = el.style.paddingTop;
//             el.dataset.oldPaddingBottom = el.style.paddingBottom;
//             el.dataset.oldOverflow = el.style.overflow;

//             el.style.height = el.scrollHeight + "px";
//             el.style.overflow = "hidden";
//         },

//         onLeave(el: any): void {
//             if (el.scrollHeight !== 0) {
//                 // for safari: add class after set height, or it will jump to zero height suddenly, weired
//                 addClass(el, "collapse-transition");
//                 el.style.height = 0;
//                 el.style.paddingTop = 0;
//                 el.style.paddingBottom = 0;
//             }
//         },

//         onAfterLeave(el: any): void {
//             removeClass(el, "collapse-transition");
//             el.style.height = "";
//             el.style.overflow = el.dataset.oldOverflow;
//             el.style.paddingTop = el.dataset.oldPaddingTop;
//             el.style.paddingBottom = el.dataset.oldPaddingBottom;
//         },
//     };
// }

export default defineComponent({
    name: `${prefix}CollapseTransition`,
    functional: true,
    render: ({ $slots }: any) => {
        // const transition = new (Transition as any)();
        const data = {
            onBeforeEnter(el: any) {
                console.log(el, "el", "onBeforeEnter");
                addClass(el, "collapse-transition");
                if (!el.dataset) el.dataset = {};

                el.dataset.oldPaddingTop = el.style.paddingTop;
                el.dataset.oldPaddingBottom = el.style.paddingBottom;
                el.style.height = "0";
                el.style.paddingTop = 0;
                el.style.paddingBottom = 0;
            },

            onEnter(el: any): void {
                console.log(el, "el", "onEnter");
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

            onAfterEnter(el: any): void {
                // for safari: remove class then reset height is necessary
                removeClass(el, "collapse-transition");
                el.style.height = "";
                el.style.overflow = el.dataset.oldOverflow;
            },

            onBeforeLeave(el: any): void {
                if (!el.dataset) el.dataset = {};
                el.dataset.oldPaddingTop = el.style.paddingTop;
                el.dataset.oldPaddingBottom = el.style.paddingBottom;
                el.dataset.oldOverflow = el.style.overflow;

                el.style.height = el.scrollHeight + "px";
                el.style.overflow = "hidden";
            },

            onLeave(el: any): void {
                if (el.scrollHeight !== 0) {
                    // for safari: add class after set height, or it will jump to zero height suddenly, weired
                    addClass(el, "collapse-transition");
                    el.style.height = 0;
                    el.style.paddingTop = 0;
                    el.style.paddingBottom = 0;
                }
            },

            onAfterLeave(el: any): void {
                removeClass(el, "collapse-transition");
                el.style.height = "";
                el.style.overflow = el.dataset.oldOverflow;
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
            },
        };
        return h("transition", data, $slots.default());
    },
});
