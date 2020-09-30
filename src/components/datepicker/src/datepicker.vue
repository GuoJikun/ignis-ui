<template>
    <div class="ins-date-picker" v-clickoutside="handClose">
        <ins-input v-model="getCurrDateLabel" subfix="calendar-day" :placeholder="placeholder" @click.native="handClick"></ins-input>
        <transition name="ins-zoom-in-top">
            <div v-show="visiable" class="ins-transfer">
                <div class="ins-date-picker-header ins-date-picker-wrap">
                    <div>
                        <ins-icon name="chevron-left"></ins-icon>
                        <ins-icon name="chevron-double-left"></ins-icon>
                    </div>
                    <div>
                        <span>{{ getYear }}年</span>
                        <span>{{ getMonth }}月</span>
                    </div>
                    <div>
                        <ins-icon name="chevron-right"></ins-icon>
                        <ins-icon name="chevron-double-right"></ins-icon>
                    </div>
                </div>
                <ul ref="scrollbar" class="ins-date-picker-day">
                    <template v-for="(item, i) in dayList">
                        <li :key="i" :class="['ins-date-picker-day-item', { 'ins-date-picker-day-item-other': item.type === 'other' }]">
                            <span>{{ item.value }}</span>
                        </li>
                    </template>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import { prefix } from "@/utils/assist.js";
import dayjs from "dayjs";
import Clickoutside from "@/directives/clickoutside.js";
export default {
    name: `${prefix}DatePicker`,
    directives: { Clickoutside },
    model: {
        event: "change",
        prop: "value",
    },
    props: {
        value: [String, Date],
        format: String,
        valueFormat: String,
        placeholder: {
            type: String,
            default: "请选择",
        },
        disabled: Boolean,
    },
    data() {
        return {
            month: "",
            day: "",
            year: "",
            curVal: "",
            label: "",
            visiable: "",
            dayList: [],
        };
    },
    mounted() {
        console.log(this.renderDayPane(2020, 8));
        this.init();
    },
    methods: {
        handClose() {
            this.visiable = false;
        },
        handClick() {
            if (this.disabled) return;
            this.visiable = true;
        },
        init() {
            const year = this.getYear;
            const month = this.getMonth;
            this.dayList = this.renderDayPane(year, month);
        },
        isLeapYear(year) {
            return year % 4 === 0 && year % 100 !== 0;
        },
        getDayCountByMonth(isLeapYear, month = 1) {
            if (month === 4 || month === 6 || month === 9 || month === 11) {
                return 30;
            } else if (month === 2) {
                if (isLeapYear) {
                    return 29;
                }
                return 28;
            } else {
                return 31;
            }
        },
        prevMouth(month = 1) {
            if (month === 1) {
                this.year -= 1;
                this.month = 12;
            }
            this.month = month - 1;
        },

        nextMouth(month = 1) {
            if (month === 12) {
                this.year += 1;
                this.month = 12;
            }
            this.month = month + 1;
        },
        renderDayPane(year, month) {
            const isLeapYear = this.isLeapYear(year);
            const day = this.getDayCountByMonth(isLeapYear, month);
            const prevDay = this.getDayCountByMonth(isLeapYear, month - 1);
            const week = new Date(`${year}-${month}`).getDay();
            const prevDayList = [];
            const dayList = [];
            const nextDayList = [];
            for (let i = prevDay - week; i < prevDay; i++) {
                prevDayList.push({
                    type: "other",
                    value: i,
                });
            }
            for (let i = 0; i < day; i++) {
                dayList.push({
                    type: "curr",
                    value: i + 1,
                });
            }
            const len = 42 - dayList.length - prevDayList.length;
            for (let i = 0; i < len; i++) {
                nextDayList.push({
                    type: "other",
                    value: i + 1,
                });
            }
            return [...prevDayList, ...dayList, ...nextDayList];
        },
        curDate(t) {
            if (t === undefined) {
                return new Date();
            } else {
                return new Date(t);
            }
        },
        isFalse(val) {
            return val === undefined || val === "" || val === false || val === null;
        },
    },
    computed: {
        getCurrDateLabel() {
            if (!this.isFalse(this.value)) {
                // eslint-disable-next-line no-unreachable
                console.log(this.value === "", typeof this.value);
                if (this.format) {
                    return dayjs(this.value).format(this.format);
                } else {
                    return new Date(this.value);
                }
            }
            console.log(this.value, typeof this.value, 2);
            return "";
        },
        getYear() {
            return this.getCurrDateLabel === "" ? dayjs().format("YYYY") : dayjs(this.getCurrDateLabel).format("YYYY");
        },
        getMonth() {
            return this.getCurrDateLabel === "" ? dayjs().format("MM") : dayjs(this.getCurrDateLabel).format("MM");
        },
    },
};
</script>

<style lang="scss">
.ins-date-picker {
    display: inline-block;
    position: relative;
    &-header {
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
    }
    &-wrap {
        padding-top: 10px;
    }
    &-day {
        margin: 0 10px 10px;
        padding: 0;
        &-item {
            display: inline-block;
            width: 28px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            font-size: 13px;
            cursor: pointer;
            user-select: none;
            &:hover {
                background-color: #c0c4cc;
            }
            &-other {
                color: #c0c4cc;
                &:hover {
                    background-color: #fff;
                }
            }
        }
    }
}
.ins-transfer {
    position: absolute;
    left: 0;
    top: 36px;
    background-color: #fff;
    width: 220px;
    height: 220px;
    z-index: 1000;
    box-sizing: border-box;
    border: 1px solid #efefef;
    border-radius: 4px;
    overflow: hidden;
}
</style>
