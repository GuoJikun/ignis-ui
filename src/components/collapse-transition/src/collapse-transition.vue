<template>
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
    >
        <slot></slot>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { addClass, removeClass } from "@/utils/dom";
import { prefix } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}CollapseTransition`,
    methods: {
        beforeEnter(el: any) {
            console.log(1);
            addClass(el, "collapse-transition");
            if (!el.dataset) el.dataset = {};
            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.style.height = "0";
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
            console.log(el.dataset, "el.dataset");
        },

        enter(el: any) {
            console.log(2);
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

        afterEnter(el: any) {
            console.log(3);
            // for safari: remove class then reset height is necessary
            removeClass(el, "collapse-transition");
            el.style.height = "";
            el.style.overflow = el.dataset.oldOverflow;
        },

        beforeLeave(el: any) {
            if (!el.dataset) el.dataset = {};
            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.dataset.oldOverflow = el.style.overflow;

            el.style.height = el.scrollHeight + "px";
            el.style.overflow = "hidden";
        },

        leave(el: any) {
            console.log(4);
            if (el.scrollHeight !== 0) {
                // for safari: add class after set height, or it will jump to zero height suddenly, weired
                addClass(el, "collapse-transition");
                el.style.height = 0;
                el.style.paddingTop = 0;
                el.style.paddingBottom = 0;
            }
        },

        afterLeave(el: any) {
            console.log(5);
            removeClass(el, "collapse-transition");
            el.style.height = "";
            el.style.overflow = el.dataset.oldOverflow;
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        },
    },
});
</script>
