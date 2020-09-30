# Input 输入框

通过鼠标或键盘输入字符

## 基本用法

<div class="mt-10"></div>
<ins-input placeholder="请输入内容" style="width: 200px;"></ins-input>

## 禁用状态

<div class="mt-10"></div>
<ins-input placeholder="请输入内容" disabled style="width: 200px;"></ins-input>

## 可清除</h1>

<div class="mt-10"></div>
<ins-input v-model="value" placeholder="请输入内容" style="width: 200px;" clearable @change="handleClose"></ins-input>

## 带 icon 的输入框

带有图标标记输入类型

<div class="mt-10"></div>
<ins-input style="width: 200px;" suffix-icon="ins-icon-calendar" placeholder="请输入内容" disabled> </ins-input>

## 不同尺寸

Input 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<div class="mt-10"></div>
<ins-input size="large" placeholder="请输入内容" style="width: 180px;">大型标签</ins-input>
<ins-input placeholder="请输入内容" style="width: 180px;">中型标签</ins-input>
<ins-input size="small" placeholder="请输入内容" style="width: 180px;">小型标签</ins-input>
<ins-input size="mini" placeholder="请输入内容" style="width: 180px;">超小标签</ins-input>

<script>
export default {
    data(){
        return {
            value: ''
        }
    },
    methods: {
        handleClose(val){
            console.log(val, this.value)
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
