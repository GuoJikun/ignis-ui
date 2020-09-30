<template>
    <div class="ins-table">
        <table
            :class="[
                'ins-table--inner',
                {
                    'ins-table--border': border,
                },
            ]"
        >
            <colgroup>
                <col v-for="(th, index) in columns" :key="index" :width="th.minWidth" />
            </colgroup>
            <tbody class="ins-table__head">
                <tr class="ins-table-tr">
                    <td v-for="(th, index) in columns" :key="index" class="ins-table-td ins-table-th">
                        <div>{{ th.title }}</div>
                    </td>
                </tr>
            </tbody>
        </table>
        <table
            :class="[
                'ins-table--inner',
                {
                    'ins-table--border': border,
                },
            ]"
        >
            <colgroup>
                <col v-for="(th, index) in columns" :key="index" :width="th.minWidth" />
            </colgroup>

            <tbody class="ins-table__body">
                <tr v-for="(item, i) in data" :key="i" class="ins-table-tr">
                    <td v-for="(th, index) in columns" :key="index" class="ins-table-td">
                        <div>{{ item[th.key] }}</div>
                    </td>
                </tr>
            </tbody>
        </table>
        <table :class="['ins-table--inner', { 'ins-table--border': border }]" v-if="showSummary">
            <colgroup>
                <col v-for="(th, index) in columns" :key="index" :width="th.minWidth" />
            </colgroup>
            <tbody class="ins-table__head">
                <tr class="ins-table-tr">
                    <td v-for="(th, index) in columns" :key="index" class="ins-table-td" style="border-bottom: none;">
                        <div>{{ th.title }}</div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div hidden>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { prefix } from "@/utils/assist.js";
export default {
    name: `${prefix}Table`,
    provide() {
        return {
            tableRoot: this,
        };
    },
    props: {
        data: {
            type: Array,
            required: true,
        },
        columns: {
            type: Array,
            default() {
                return [];
            },
        },
        border: {
            type: Boolean,
            default: false,
        },
        showSummary: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            cells: [],
            store: null,
            summaryData: [],
        };
    },
    methods: {
        setCell(item) {
            this.cells.push(item);
        },
        setSummaryData() {
            this.data.map();
        },
    },
    computed: {
        isNull() {
            return this.data ? true : false;
        },
    },
};
</script>
<style lang="scss">
@import "@/style/common/var.scss";
.ins-table {
    box-sizing: border-box;
    border-spacing: 0;
    font-size: 14px;
    overflow: auto;
    border-collapse: collapse;
    &--inner {
        border-collapse: collapse;
        border-spacing: 0;
        table-layout: fixed;
        width: 100%;
    }
    &__head {
        box-sizing: inherit;
        width: 100%;
        background-color: #f8f8f9;
    }
    &__body {
        box-sizing: inherit;
        width: 100%;
        & > .ins-table-tr {
            &:hover {
                background-color: #eef7ff;
            }
        }
    }
    &-tr {
        box-sizing: inherit;
        line-height: 1.4em;
        width: 100%;
    }
    &-td {
        box-sizing: inherit;
        padding: 10px 0;
        color: $ins--body-font-color;
        border-bottom: 1px solid $ins--border-color;
        border-spacing: 0;
        & > div {
            padding: 0 10px;
        }
    }
    &-th {
        border-bottom: none;
    }
    &--border {
        .ins-table-td {
            border: 1px solid $ins--border-color;
            border-collapse: collapse;
        }
    }
}
</style>
