<template>
    <div class="ins-step">
        <div class="ins-step__line">
            <div
                :class="[
                    'ins-step__line-status',
                    isFinish ? `ins-step__line-status-${getCurrStatus}` : '',
                ]"
            ></div>
        </div>
        <div class="ins-step__icon">
            <div :class="['ins-step__icon-inner', `ins-step__icon-inner-${getCurrStatus}`]">
                <ins-icon name="check2" size="16" v-if="getCurrStatus === 'finish'"></ins-icon>
                <ins-icon name="x" size="16" v-else-if="getCurrStatus === 'error'"></ins-icon>
                <span v-else>{{ index }}</span>
            </div>
        </div>
        <div class="ins-step__main">
            <div :class="['ins-step__main-title', `ins-step__main-title-${getCurrStatus}`]">
                <slot>{{ title }}</slot>
            </div>
            <div class="ins-step__main-desc">
                <slot>{{ description }}</slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { prefix } from "@/utils/assist";
import { defineComponent, inject, reactive, toRefs } from "vue";

export default defineComponent({
    name: `${prefix}Step`,
    props: {
        title: String,
        status: {
            type: String,
            validator(val: string) {
                const types = ["wait", "process", "finish", "error", "success"];
                return types.includes(val);
            },
        },
        description: String,
    },
    setup() {
        const timeline: any = inject("parent");
        const data = reactive({
            index: 0,
            state: "wait",
        });
        const updateIndex = (i: number) => {
            data.index = i;
        };
        return { ...toRefs(data), updateIndex, timeline };
    },
    mounted() {
        this.timeline.appendChild(this);
    },
    computed: {
        getCurrIndex() {
            const parent = this.timeline;
            let active = 0;
            if (parent) {
                active = parent.active;
            }
            return active;
        },
        getCurrStatus() {
            const parent = this.timeline;
            let state = "wait";
            if (this.getCurrIndex > this.index) {
                state = parent.finishStatus;
            } else if (this.getCurrIndex === this.index) {
                state = this.status || parent.status;
            } else {
                state = "wait";
            }

            return state;
        },
        isFinish(): boolean {
            const flag = this.getCurrIndex > this.index;
            return flag;
        },
    },
    watch: {
        getCurrIndex(val, val1) {
            console.log(val, val1, "watch");
        },
    },
});
</script>

<style lang="scss">
@import "@/style/common/var.scss";
.ins-step {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    flex: 1;
    overflow: hidden;
    &:last-child {
        flex: none;
        .ins-step__line {
            display: none;
        }
    }
    &__line {
        width: 100%;
        padding: 0 10px;
        position: absolute;
        left: 0;
        top: 13px;
        &-status {
            display: inline-block;
            width: 100%;
            height: 1px;
            vertical-align: top;
            background: #e8eaec;
            border-radius: 1px;
            position: relative;
        }
    }
    &__icon {
        display: inline-block;
        margin-left: -10px;
        padding-left: 10px;
        position: relative;
        vertical-align: top;
        background-color: #fff;
        &-inner {
            display: inline-block;
            width: 26px;
            height: 26px;
            line-height: 26px;
            margin-right: 8px;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 50%;
            font-size: 14px;
            transition: background-color 0.2s ease-in-out;
            &-process {
                border-color: $ins--color-primary;
                background-color: $ins--color-primary;
                color: $ins--color-white;
            }
            &-finish {
                border-color: $ins--color-primary;
                color: $ins--color-primary;
            }
            &-success {
                border-color: $ins--color-success;
                color: $ins--color-success;
            }
            &-error {
                border-color: $ins--color-danger;
                color: $ins--color-danger;
            }
        }
    }
    &__main {
        display: inline;
        background-color: #fff;
        vertical-align: top;
        position: relative;
        &-title {
            display: inline-block;
            margin-bottom: 4px;
            padding-right: 10px;
            font-size: 14px;
            font-weight: 700;
            color: #999;
            background-color: #fff;
            &-process {
                color: $ins--color-text-regular;
            }
            &-finish {
                color: $ins--color-primary;
            }
            &-success {
                color: $ins--color-success;
            }
            &-error {
                color: $ins--color-danger;
            }
        }
        &-desc {
            padding-left: 35px;
            color: #999;
            font-size: 12px;
        }
    }
}
.ins-steps-horizontal {
    .ins-step__line {
        box-sizing: border-box;
        display: inline-block;
        width: 100%;
        padding: 0 10px;
        position: absolute;
        left: 0;
        top: 13px;
        height: 1px;
        &-status {
            display: inline-block;
            width: 100%;
            height: 1px;
            vertical-align: top;
            background: #e8eaec;
            border-radius: 1px;
            position: relative;
            &::after {
                content: "";
                width: 0;
                height: 100%;
                background: #e8eaec;
                opacity: 0;
                position: absolute;
                top: 0;
            }
            &-wait,
            &-process {
                &::after {
                    width: 100%;
                    transition: all 0.2s ease-in-out;
                    opacity: 1;
                    background-color: #e8eaec;
                }
            }
            &-finish {
                &::after {
                    width: 100%;
                    transition: all 0.2s ease-in-out;
                    opacity: 1;
                    background-color: $ins--color-primary;
                }
            }
            &-success {
                &::after {
                    width: 100%;
                    transition: all 0.2s ease-in-out;
                    opacity: 1;
                    background-color: $ins--color-success;
                }
            }
            &-error {
                &::after {
                    width: 100%;
                    transition: all 0.2s ease-in-out;
                    opacity: 1;
                    background-color: $ins--color-danger;
                }
            }
        }
    }
}
.ins-steps-vertical {
    .ins-step {
        display: block;
        overflow: visible;
        &__line {
            position: absolute;
            left: 13px;
            top: 0;
            height: 100%;
            width: 1px;
            padding: 30px 0 4px;
            &-status {
                height: 100%;
                width: 1px;
                &::after {
                    content: "";
                    width: 0;
                    height: 100%;
                    background-color: #e8eaec;
                    opacity: 0;
                    position: absolute;
                    top: 0;
                }
                &-wait,
                &-process {
                    &::after {
                        width: 100%;
                        transition: all 0.2s ease-in-out;
                        opacity: 1;
                        background-color: #e8eaec;
                    }
                }
                &-finish {
                    &::after {
                        width: 100%;
                        transition: all 0.2s ease-in-out;
                        opacity: 1;
                        background-color: $ins--color-primary;
                    }
                }
                &-success {
                    &::after {
                        width: 100%;
                        transition: all 0.2s ease-in-out;
                        opacity: 1;
                        background-color: $ins--color-success;
                    }
                }
                &-error {
                    &::after {
                        width: 100%;
                        transition: all 0.2s ease-in-out;
                        opacity: 1;
                        background-color: $ins--color-danger;
                    }
                }
            }
        }
        &__main {
            &-desc {
                margin-bottom: 14px;
            }
        }
    }
}
</style>
