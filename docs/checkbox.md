# Checkbox 多选框

一组备选项中进行多选

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<ins-checkbox v-model="value">选项一</ins-checkbox>
<ins-checkbox v-model="value1" true-label="1" false-label="0" @change="changes">选项二</ins-checkbox>

## 禁用状态

单选框不可用的状态。

<ins-checkbox v-model="value" disabled>选项一</ins-checkbox>
<ins-checkbox v-model="value1" disabled>选项二</ins-checkbox>

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

<ins-checkbox-group v-model="value2" @change="handleWitch">
<ins-checkbox label="1">选项一</ins-checkbox>
<ins-checkbox label="2">选项二</ins-checkbox>
<ins-checkbox label="3">选项三</ins-checkbox>
<ins-checkbox label="4" disabled>禁用</ins-checkbox>
<ins-checkbox label="5" disabled>选中且禁用</ins-checkbox>
</ins-checkbox-group>

## indeterminate 状态

<code class="code">indeterminate</code>属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果

<ins-checkbox class="mb-20" v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</ins-checkbox>
<ins-checkbox-group v-model="value3" @change="handleCheckedCitiesChange">
<ins-checkbox label="1">选项一</ins-checkbox>
<ins-checkbox label="2">选项二</ins-checkbox>
<ins-checkbox label="3">选项三</ins-checkbox>
<ins-checkbox label="4">禁用</ins-checkbox>
<ins-checkbox label="5">选中且禁用</ins-checkbox>
</ins-checkbox-group>

<script>
const cityOptions = ['1', '2', '3', '4', '5'];
export default {
    data() {
        return {
            value: true,
            value1: '0',
            value2: ['1', '5'],
            value3: ['1', '4'],
            checkAll: false,
            isIndeterminate: true,
        };
    },
    methods: {
        handleWitch(val) {
            console.log(val, 'v-model');
        },
        changes(val) {
            console.log(val, this.value1);
        },
        handleCheckAllChange(val) {
            this.value3 = val ? [...cityOptions] : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            const checkedCount = value.length;
            this.checkAll = checkedCount === cityOptions.length;
            this.isIndeterminate =
                checkedCount > 0 && checkedCount < cityOptions.length;
        },
    },
}
</script>
