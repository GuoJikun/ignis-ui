<template>
    <div class="layout">
        <img alt="Vue logo" src="./assets/logo.png" />
        <div class="layout-item">
            <p class="title">Icon 图标</p>
            <ins-icon name="share"></ins-icon>
        </div>
        <div class="layout-item">
            <p class="title">Card 卡片</p>
            <div class="layout-item-body">
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
        <div class="layout-item">
            <p class="title">Grid 栅格</p>
            <div class="layout-item-body">
                <ins-row>
                    <ins-col :span="12">12</ins-col>
                    <ins-col :span="12">12</ins-col>
                </ins-row>
                <ins-row>
                    <ins-col :span="8">8</ins-col>
                    <ins-col :span="8">8</ins-col>
                    <ins-col :span="8">8</ins-col>
                </ins-row>
            </div>
        </div>
        <div class="layout-item">
            <p class="title">Divider 分割线</p>
            <div class="layout-item-body">
                <p>
                    Phoronix Test Suite是一个知名的测试和基准测试平台，可用于Linux、Solaris、macOS、Windows 和 BSD
                    系统的测试，套件内包含多种维度的测试组件。上个月刚发布了v10.0 Milestone 1版本，现在根据官网信息，近期有600
                    个不同的基准测试配置文件引入该套件中。
                </p>
                <ins-divider>分割线在中间的样式</ins-divider>
                <p>
                    2018年，蚂蚁集团开始全面转型云原生架构。2020
                    年，该集团又提出了“可信原生（Trust-Native）”的理念，将可信任性渗透到云原生架构的各层之中，打造全栈可信赖的云计算基础设施。
                    而作为保护应用的运行安全的技术，机密计算理念以及可信执行环境TEE (Trusted Execution Environment)
                    也被蚂蚁引入并积极实践，形成了 SOFAEnclave 机密计算技术栈。
                </p>
                <ins-divider placement="left">分割线在左侧的样式</ins-divider>
            </div>
        </div>
        <div class="layout-item">
            <p class="title">Tag 标签</p>
            <div class="layout-item-body">
                <ins-tag>标签一</ins-tag>
            </div>
        </div>
        <div class="layout-item">
            <p class="title">Breadcrumb 面包屑</p>
            <div class="layout-item-body">
                <ins-breadcrumb>
                    <ins-breadcrumb-item>首页</ins-breadcrumb-item>
                    <ins-breadcrumb-item>组件</ins-breadcrumb-item>
                    <ins-breadcrumb-item>Breadcrumb组件</ins-breadcrumb-item>
                </ins-breadcrumb>
            </div>
        </div>
        <div class="layout-item">
            <p class="title">Alert 警告</p>
            <div class="layout-item-body">
                <ins-alert>
                    <div>这是提示信息</div>
                    <div>用来让人注意的提示文字</div>
                </ins-alert>
            </div>
        </div>
        <div class="layout-item">
            <p class="title">Progress 进度条</p>
            <div class="layout-item-body">
                <ins-progress :percentage="50"></ins-progress>
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
        margin-top: 20px;
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
