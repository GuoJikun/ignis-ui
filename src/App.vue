<template>
    <div class="layout">
        <img alt="Vue logo" src="./assets/logo.png" />
        <div class="layout-item">
            <p class="title">Icon 图标</p>
            <ins-icon name="share"></ins-icon>
        </div>
        <div class="layout-item">
            <p class="title">Card 卡片</p>
            <div>
                <ins-card title="这是卡片标题">
                    <p>这是卡片内容</p>
                    <p>这是卡片内容</p>
                    <p>这是卡片内容</p>
                </ins-card>
            </div>
        </div>
        <div class="layout-item">
            <p class="title">Card 卡片</p>
            <div class="layout-item-body">
                <ins-button title="这是卡片标题">
                    默认按钮
                </ins-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "App",
});
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    line-height: 1.6;
    font-size: 14px;
}
body,
p {
    margin: 0;
    padding: 0;
}
.layout {
    width: 800px;
    margin: 0 auto;
}
.layout-item {
    & + & {
        margin-top: 10px;
    }
    &-body {
        margin-top: 10px;
    }
}
.title {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.6;
    margin: 0;
}
</style>
