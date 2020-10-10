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
            <p class="title">Button 按钮</p>
            <div class="layout-item-body">
                <ins-button>
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
                    Phoronix Test
                    Suite是一个知名的测试和基准测试平台，可用于Linux、Solaris、macOS、Windows 和 BSD
                    系统的测试，套件内包含多种维度的测试组件。上个月刚发布了v10.0 Milestone
                    1版本，现在根据官网信息，近期有600 个不同的基准测试配置文件引入该套件中。
                </p>
                <ins-divider>分割线在中间的样式</ins-divider>
                <p>
                    2018年，蚂蚁集团开始全面转型云原生架构。2020
                    年，该集团又提出了“可信原生（Trust-Native）”的理念，将可信任性渗透到云原生架构的各层之中，打造全栈可信赖的云计算基础设施。
                    而作为保护应用的运行安全的技术，机密计算理念以及可信执行环境TEE (Trusted
                    Execution Environment) 也被蚂蚁引入并积极实践，形成了 SOFAEnclave
                    机密计算技术栈。
                </p>
                <ins-divider placement="left">分割线在左侧的样式</ins-divider>
                <p>
                    2018年，蚂蚁集团开始全面转型云原生架构。2020
                    年，该集团又提出了“可信原生（Trust-Native）”的理念，将可信任性渗透到云原生架构的各层之中，打造全栈可信赖的云计算基础设施。
                    而作为保护应用的运行安全的技术，机密计算理念以及可信执行环境TEE (Trusted
                    Execution Environment) 也被蚂蚁引入并积极实践，形成了 SOFAEnclave
                    机密计算技术栈。
                </p>
                <ins-divider placement="right">分割线在右侧的样式</ins-divider>
                <p>
                    2018年，蚂蚁集团开始全面转型云原生架构。2020
                    年，该集团又提出了“可信原生（Trust-Native）”的理念，将可信任性渗透到云原生架构的各层之中，打造全栈可信赖的云计算基础设施。
                    而作为保护应用的运行安全的技术，机密计算理念以及可信执行环境TEE (Trusted
                    Execution Environment) 也被蚂蚁引入并积极实践，形成了 SOFAEnclave
                    机密计算技术栈。
                </p>
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
        <div class="layout-item">
            <p class="title">Collapse 折叠面板</p>
            <div class="layout-item-body">
                <ins-collapse v-model:value="value" @change="collapseChange">
                    <ins-collapse-item title="史蒂夫·乔布斯">
                        <div>
                            史蒂夫·乔布斯（Steve Jobs），1955 年 2 月 24
                            日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                        </div>
                    </ins-collapse-item>
                    <ins-collapse-item title="盖瑞·沃兹尼亚克">
                        <div>
                            斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987 年）。
                        </div>
                    </ins-collapse-item>
                    <ins-collapse-item title="乔纳森·伊夫">
                        <div>
                            乔纳森·伊夫是一位工业设计师，现任 Apple
                            公司设计师兼资深副总裁，英国爵士。他曾参与设计了
                            iPod，iMac，iPhone，iPad
                            等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                        </div>
                    </ins-collapse-item>
                </ins-collapse>
            </div>
        </div>
        <div class="layout-item">
            <p class="title">Layout 布局</p>
            <div class="layout-item-body">
                <ins-layout>
                    <ins-header
                        style="background-color: #b3c0d1;text-align:center;line-height: 60px;"
                    >
                        Header
                    </ins-header>
                    <ins-layout>
                        <ins-aside
                            width="200px"
                            style="background-color: #d3dce6;height: 200px;line-height: 200px;text-align: center;"
                        >
                            Aside
                        </ins-aside>
                        <ins-main
                            style="background-color: #e9eef3;
                                    color: #333;
                                    text-align: center;
                                    line-height: 160px;"
                        >
                            Main
                        </ins-main>
                    </ins-layout>
                    <ins-footer
                        style="background-color: #b3c0d1;text-align:center;line-height: 60px;"
                    >
                        Footer
                    </ins-footer>
                </ins-layout>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "App",
    data() {
        return {
            test: true,
            value: [],
            value2: [],
        };
    },
    methods: {
        collapseChange(val: any) {
            console.log(val, this.value);
        },
        showHide() {
            console.log("test", this.test, 2);
            if (this.test === true) {
                this.test = false;
            } else {
                this.test = true;
            }
        },
    },
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
