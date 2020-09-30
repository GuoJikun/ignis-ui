<div class="page-switch-item">
    <div>
        <h1>Switch 开关</h1>
        <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
    </div>
</div>
<div class="page-switch-item">
    <div>
        <h1>基本用法</h1>
    </div>
    <div class="page-switch-item-content">
        <ins-switch v-model="value1" @change="handleWitch"></ins-switch>
    </div>
</div>
<div class="page-switch-item">
    <div>
        <h1>文字描述</h1>
    </div>
    <div class="page-switch-item-content">
        <ins-switch active-text="开启" inactive-text="关闭" :width="56"></ins-switch>
    </div>
</div>
<div class="page-switch-item">
    <div>
        <h1>禁用状态</h1>
    </div>
    <div class="page-switch-item-content">
        <ins-switch :disabled="status"></ins-switch>
        <ins-button @click="changeStatus">tigger status</ins-button>
    </div>
</div>

<script>
export default {
    data(){
        return {
            value1: true,
            status: true
        }
    },
    methods: {
        handleWitch(val){
            console.log(val);
            console.log(this.value1)
        },
        changeStatus(){
            this.status = !this.status;
        },
        cancel1(){
            this.value = false;
        }
    }
}
</script>

<style>
.page-switch-item{
    padding: 20px;
}
h1{
    font-weight: 500;
    font-size: 1.7em;
}
.page-switch-item-content{
    padding: 20px;
    border: 1px solid #eeeeee;
}
.progress-item+.progress-item{
    margin-top: 20px;
}
</style>
