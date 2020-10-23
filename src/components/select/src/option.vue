<template>
    <li :class="['ins-option', { 'is-disabled': disabled }]" @click="handClick">
        <slot>
            <span>{{ currentLabel }}</span>
        </slot>
    </li>
</template>

<script lang="ts">
import { prefix, typeOf } from "@/utils/assist";
import { computed, defineComponent, inject, onMounted } from "vue";

export default defineComponent({
    name: `${prefix}Option`,
    props: {
        value: [String, Number],
        label: String,
        disabled: Boolean,
    },
    setup(props) {
        const parent: any = inject("parent");

        const isObject = computed(() => {
            return typeOf(props.value) === "string";
        });

        const currentValue = computed(() => {
            return props.value || props.label || "";
        });

        const currentLabel = computed(() => {
            return props.label || (isObject.value ? "" : props.value);
        });

        const handClick = () => {
            const parentInstance: any = parent;
            parentInstance.visiable = false;
            parentInstance.handChange(currentValue, currentLabel);
        };

        onMounted(() => {
            const parentInstance = parent;
            const value = parentInstance.modelValue;
            if (currentValue.value === value) {
                parent.handChange(currentValue.value, currentLabel.value);
            }
        });

        return { parent, currentValue, currentLabel, handClick };
    },
});
</script>

<style lang="scss">
.ins-option {
    line-height: 30px;
    height: 30px;
    box-sizing: border-box;
    padding: 0 15px;
    cursor: pointer;
    font-size: 13px;
    &:hover {
        background-color: #f3f3f3;
    }
    &.is-disabled {
        cursor: not-allowed;
        color: #c0c4cc;
        &:hover {
            background-color: #fff;
        }
    }
}
</style>
