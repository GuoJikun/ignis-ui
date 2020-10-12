<template>
    <div
        :class="['ins-switch', { 'is-checked': isChecked }, { 'is-disabled': disabled }]"
        @click="switchs"
    >
        <input :value="curValue" :name="name" type="text" hidden />
        <span class="ins-switch__core" :style="switchWidth">
            <span v-if="activeText || inactiveText">{{ showText }}</span>
        </span>
    </div>
</template>

<script lang="ts">
import { prefix } from "@/utils/assist";
import { defineComponent, onMounted, reactive, toRefs } from "vue";

export default defineComponent({
    name: `${prefix}Switch`,
    props: {
        value: {
            type: [Number, String, Boolean],
            default: false,
        },
        activeValue: {
            type: [String, String, Boolean],
            default: true,
        },
        inactiveValue: {
            type: [String, String, Boolean],
            default: false,
        },
        activeText: String,
        inactiveText: String,
        disabled: {
            type: Boolean,
            default: false,
        },
        width: {
            type: [Number, String],
            default: "44",
        },
        name: String,
    },
    setup(props) {
        const data: { curValue: any } = reactive({
            curValue: false,
        });
        onMounted(() => {
            data.curValue = props.value;
        });
        return { ...toRefs(data) };
    },
    methods: {
        switchs() {
            if (this.disabled) {
                return;
            }
            this.curValue =
                this.curValue == this.activeValue ? this.inactiveValue : this.activeValue;
            this.$emit("change", this.curValue);
            this.$emit("update:value", this.curValue);
            // this.dispatch("foxFormItem", "on-form-change", this.curValue);
        },
    },
    computed: {
        switchWidth(): Record<string, string> {
            return {
                width: this.width + "px",
            };
        },
        showText(): any {
            return this.curValue == this.activeValue ? this.activeText : this.inactiveText;
        },
        isChecked(): boolean {
            return this.curValue == this.activeValue;
        },
    },
    watch: {
        value(val) {
            this.curValue = val;
        },
    },
});
</script>

<style lang="scss">
@import "@/style/switch.scss";
</style>
