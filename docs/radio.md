# Radio 单选框

在一组备选项中进行单选

## 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

<div>
    <ins-radio v-model="value" label="1">选项一</ins-radio>
    <ins-radio v-model="value" label="2">选项二</ins-radio>
</div>

## 禁用状态

单选框不可用的状态。

<div>
    <ins-radio v-model="value1" label="1" disabled>
        选项一
    </ins-radio>
    <ins-radio v-model="value1" label="2" disabled>
        选项二
    </ins-radio>
</div>

## 单选框组

适用于在多个互斥的选项中选择的场景

<ins-radio-group v-model="value2">
<ins-radio label="1">选项一</ins-radio>
<ins-radio label="2">选项二</ins-radio>
<ins-radio label="3">选项三</ins-radio>
</ins-radio-group>

<script>
export default {
    data() {
        return {
            value: '2',
            value1: '1',
            value2: '1',
            pcData: [
                {
                    parameter: 'value/v-model',
                    explain: '绑定值',
                    type: 'string / number / boolean',
                    optionalValue: '-',
                    defaultValue: '-',
                },
                {
                    parameter: 'label',
                    explain: 'Radio 的 value',
                    type: 'string / number / boolean',
                    optionalValue: '-',
                    defaultValue: '-',
                },
                {
                    parameter: 'disabled',
                    explain: '是否禁用',
                    type: 'boolean',
                    optionalValue: '-',
                    defaultValue: 'false',
                },
                {
                    parameter: 'name',
                    explain: '原生 name 属性',
                    type: 'string',
                    optionalValue: '-',
                    defaultValue: '-',
                },
            ],
            ecData: [
                {
                    name: 'change',
                    explain: '绑定值变化时触发的事件',
                    args: '选中的 Radio label 值',
                },
            ],
            pcgData: [
                {
                    parameter: 'value/v-model',
                    explain: '绑定值',
                    type: 'string / number / boolean',
                    optionalValue: '-',
                    defaultValue: '-',
                },
                {
                    parameter: 'disabled',
                    explain: '是否禁用',
                    type: 'boolean',
                    optionalValue: '-',
                    defaultValue: 'false',
                },
            ],
        };
    },
};
</script>
