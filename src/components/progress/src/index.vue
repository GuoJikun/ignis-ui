<template>
    <div
        class="ins-progress"
        :class="[
            status ? `is-${status}` : '',
            {
                'ins-progress--circle': type === 'circle',
            },
        ]"
    >
        <div :class="['ins-progress-bar', { 'is-text-nside': textinside }]" v-if="type === 'line'">
            <div class="ins-progress-bar__outer" :style="getHeight">
                <div class="ins-progress-bar__inner" :style="[widths]">
                    <span v-if="textins - ide && showText" class="ins-progress-bar__inner-text"> {{ percentage }}% </span>
                </div>
            </div>
        </div>
        <div v-else class="ins-progress-circle" :style="circleWidth">
            <svg viewBox="0 0 100 100">
                <path :d="getPath" stroke="#e5e9f2" :stroke-width="getCircleWidth" fill="none" class="ins-progress-circle__track"></path>
                <path
                    :d="getPath"
                    stroke-linecap="round"
                    :stroke="getColor"
                    :stroke-width="getCircleWidth"
                    fill="none"
                    class="ins-progress-circle__path"
                    :style="gets"
                ></path>
            </svg>
        </div>
        <div class="ins-progress__text" v-if="!textins - ide && showText" v-html="text"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { prefix, oneOf } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Progress`,
    props: {
        type: {
            type: String,
            default: "line",
            validator(value: string) {
                return oneOf(value, ["line", "circle"]);
            },
        },
        percentage: {
            type: Number,
            required: true,
        },
        showText: {
            type: Boolean,
            default: true,
        },
        textinside: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String,
            validator(value: string) {
                return oneOf(value, ["success", "danger"]);
            },
        },
        color: String,
        strokeWidth: {
            type: Number,
            default: 6,
        },
        width: {
            type: Number as PropType<number>,
            default: 126,
        },
    },

    computed: {
        getCircleWidth() {
            const multiple: number = this.width / 100;
            const r: number = this.strokeWidth / multiple;
            return r.toFixed(2);
        },
        getPath() {
            const r: number = 50 - Number(this.getCircleWidth);
            const s = ["M", 50, 50, "m", 0, -r, "a", r, r, 0, 1, 1, 0, 2 * r, "a", r, r, 0, 1, 1, 0, -2 * r];
            return s.join(" ");
        },
        gets() {
            const cr: number = 50 - Number(this.getCircleWidth);
            const circle = 2 * 3.14 * cr;
            const s: number = (this.percentage * circle) / 100;
            const t: string = (circle - s).toFixed(2);
            return {
                strokeDasharray: `${circle}px, ${circle}px`,
                strokeDashoffset: `${t}px`,
                transition: "stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease 0s",
            };
        },
        circleWidth(): { width: string; height: string } {
            return {
                width: `${this.width}px`,
                height: `${this.width}px`,
            };
        },
        getColor(): string {
            if (this.color) {
                return this.color;
            } else {
                if (this.status === "success") {
                    return "#67C23A";
                } else if (this.status === "danger") {
                    return "#F56C6C";
                } else {
                    return "#409eff";
                }
            }
        },
        getHeight(): { height: string } {
            return {
                height: `${this.strokeWidth}px`,
            };
        },
        widths() {
            const styles: { width: string; backgroundColor?: string } = {
                width: `${this.percentage}%`,
            };
            if (this.color) {
                styles["backgroundColor"] = this.color;
            }
            return styles;
        },
        text(): string {
            if (this.status === "success") {
                return `<i class="ins-icon-md-checkmark" />`;
            } else if (this.status === "danger") {
                return `<i class="ins-icon-md-close" />`;
            } else {
                return `${this.percentage}%`;
            }
        },
    },
});
</script>
<style lang="scss">
@import "@/style/common/var.scss";
.ins-progress {
    overflow: hidden;
    line-height: 1;
    box-sizing: border-box;
    position: relative;
    &-bar {
        padding-right: 50px;
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        margin-right: -55px;
        box-sizing: border-box;
        &.is-text-nside {
            padding-right: 0;
        }
        &__outer {
            height: 6px;
            border-radius: 100px;
            background-color: #ebeef5;
            overflow: hidden;
            position: relative;
            vertical-align: middle;
        }
        &__inner {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            background-color: #409eff;
            text-align: right;
            border-radius: 100px;
            line-height: 1;
            white-space: nowrap;
            transition: width 0.6s ease;
            &-text {
                display: inline-block;
                vertical-align: text-bottom;
                color: #fff;
                font-size: 12px;
                margin: 0 5px;
            }
        }
    }
    &__text {
        font-size: 14px;
        color: #606266;
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
        line-height: 1;
        box-sizing: border-box;
    }
}
.ins-progress.is-success {
    .ins-progress-bar__inner {
        background-color: $ins--color-success;
    }
    .ins-progress__text {
        background-color: $ins--color-success;
        border-radius: 50%;
        color: $ins--color-white;
        [class^="ins-icon-"] {
            transform: scale(0.8);
        }
    }
}
.ins-progress.is-danger {
    .ins-progress-bar__inner {
        background-color: $ins--color-danger;
    }
    .ins-progress__text {
        background-color: $ins--color-danger;
        border-radius: 50%;
        color: $ins--color-white;
        [class^="ins-icon-"] {
            transform: scale(0.8);
        }
    }
}
.ins-progress--circle.is-success {
    .ins-progress-bar__inner {
        background-color: $ins--color-success;
    }
    .ins-progress__text {
        background-color: transparent;
        border-radius: 0;
        color: $ins--color-success;
        [class^="ins-icon-"] {
            transform: scale(1.2);
        }
    }
}
.ins-progress--circle.is-danger {
    .ins-progress-bar__inner {
        background-color: $ins--color-danger;
    }
    .ins-progress__text {
        background-color: transparent;
        border-radius: 0;
        color: $ins--color-danger;
        [class^="ins-icon-"] {
            transform: scale(1.2);
        }
    }
}
.ins-progress--circle {
    display: inline-block;
    .ins-progress__text {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        text-align: center;
        margin: 0;
        transform: translateY(-50%);
    }
}
</style>
