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

<script>
export default {
    data(){
        return {
            value: ''
        }
    }
}
</script>
