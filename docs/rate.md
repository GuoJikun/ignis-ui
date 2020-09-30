# Rate 评分

## 基本用法

<div class="mt-20"></div>
<ins-rate v-model="value"></ins-rate>

```html
<ins-rate v-model="value"></ins-rate>
```

## click 选择

<div class="mt-20"></div>
<ins-rate v-model="value1" tigger="click"></ins-rate>

```html
<ins-rate v-model="value1" tigger="click"></ins-rate>
```

## 自定义 icon</h1>

<div class="mt-20"></div>
<ins-rate v-model="value1" tigger="click" icon="heart" active-icon="heart-fill"> </ins-rate>

```html
<ins-rate v-model="value1" tigger="click" icon="heart" active-icon="heart-fill"> </ins-rate>
```

## 只读

<div class="mt-20"></div>
<ins-rate v-model="value2" disabled></ins-rate>

```html
<ins-rate v-model="value2" disabled></ins-rate>
```

<script>
export default {
    data() {
        return {
            value: 1,
            value1: 2,
            value2: 2,
            tableData: [
                {
                    parameter: 'value',
                    explain: '绑定值',
                    type: 'Number',
                    optionalValue: '—',
                    defaultValue: '0',
                },
                {
                    parameter: 'disabled',
                    explain: '是否为只读',
                    type: 'Boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'allow-half',
                    explain: '是否允许半选',
                    type: 'Boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'tigger',
                    explain: '选择方式',
                    type: 'String',
                    optionalValue: 'click,hover',
                    defaultValue: 'hover',
                },
            ],
        };
    },
};
</script>
