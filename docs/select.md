# Select 选择器

## 基础用法

适用广泛的基础单选

<ins-select v-model="value">
<ins-option value="1" label="蛋糕"></ins-option>
<ins-option value="年糕"></ins-option>
<ins-option label="雪糕"></ins-option>
</ins-select>

```vue
<template>
    <ins-select v-model="value">
        <ins-option value="1" label="蛋糕"></ins-option>
        <ins-option value="年糕"></ins-option>
        <ins-option label="雪糕"></ins-option>
    </ins-select>
</template>
<script>
export default {
    data() {
        return {
            value: "",
        };
    },
};
</script>
```

## 有禁用选项

<ins-select v-model="value1">
<ins-option value="1" label="蛋糕"></ins-option>
<ins-option value="年糕" disabled></ins-option>
<ins-option label="雪糕"></ins-option>
</ins-select>

```vue
<template>
    <ins-select v-model="value1">
        <ins-option value="1" label="蛋糕"></ins-option>
        <ins-option value="年糕" disabled></ins-option>
        <ins-option label="雪糕"></ins-option>
    </ins-select>
</template>
<script>
export default {
    data() {
        return {
            value1: "",
        };
    },
};
</script>
```

## 禁用状态

选择器不可用状态

<ins-select v-model="value1" disabled>
<ins-option value="1" label="蛋糕"></ins-option>
<ins-option value="年糕"></ins-option>
<ins-option label="雪糕"></ins-option>
</ins-select>

```vue
<template>
    <ins-select v-model="value1" disabled>
        <ins-option value="1" label="蛋糕"></ins-option>
        <ins-option value="年糕"></ins-option>
        <ins-option label="雪糕"></ins-option>
    </ins-select>
</template>
<script>
export default {
    data() {
        return {
            value1: "",
        };
    },
};
</script>
```

## Select Props

| 属性          | 说明     | 类型            | 可选值 | 默认值 |
| ------------- | -------- | --------------- | ------ | ------ |
| value/v-model | 绑定值   | string / number | -      | -      |
| disabled      | 是否禁用 | boolean         | -      | false  |

## Select Events

| 属性   | 说明                 | 回调参数     |
| ------ | -------------------- | ------------ |
| change | 选中值发生变化时触发 | 目前的选中值 |

## Select Props

| 属性     | 说明                                    | 类型            | 可选值 | 默认值 |
| -------- | --------------------------------------- | --------------- | ------ | ------ |
| value    | 选项的值                                | string / number | -      | -      |
| label    | 选项的标签，若不设置则默认与 value 相同 | string / number | -      | -      |
| disabled | 是否禁用该选项                          | boolean         | -      | false  |

<script>
export default {
    data(){
        return {
            value: '',
            value1: ""
        }
    }
}
</script>
