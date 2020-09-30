# InputNumber 计数器

仅允许输入标准的数字值，可定义范围

## 基本用法

<div class="mt-10">
    <ins-input-number v-model="num1" :max="9" :min="-3" @change="handleChange"></ins-input-number>
</div>

## 禁用状态

<div class="mt-10">
    <ins-input-number v-model="num2" :step="2" :max="9" :min="-3" disabled></ins-input-number>
</div>

## 设置步长

允许定义递增递减的步数控制

<div class="mt-10">
    <ins-input-number v-model="num3" :step="2"></ins-input-number>
</div>

## 精度

设置 _`precision`_ 属性可以控制数值精度，接收一个 _`Number`_。

_`precision`_ 的值必须是一个非负整数，并且不能小于 step 的小数位数。

<div class="mt-10">
    <ins-input-number v-model="num4" :step="0.1" :precision="2"></ins-input-number>
</div>

<script>
export default {
    data(){
        return {
            num1: 1,
            num2: 1,
            num3: 1,
            num4: 1,
            num5: 5,
        }
    },
    methods: {
        handleChange(val){
            console.log(val)
        },
        ok1(){
            this.value = false;
        },
        cancel1(){
            this.value = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.page-modal{
    font-size: 14px;
    background-color: #fff;
}
.page-modal-item{
    padding: 20px;
}
h1{
    font-weight: 500;
    font-size: 1.7em;
}
.page-modal-item-content{
    padding: 20px;
    border: 1px solid #eeeeee;
}
</style>
