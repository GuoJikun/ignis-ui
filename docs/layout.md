# Layout 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

ins-container：外层容器。当子元素中包含 ins-header 或
ins-footer 时，全部子元素会垂直上下排列，否则会水平左右排列。

ins-header：顶栏容器。<br />ins-aside：侧边栏容器。<br />ins-main：主要区域容器。<br />ins-footer：底栏容器。

## 常见页面布局

<ins-layout class="page-layout-item">
<ins-header class="page-layout-hf">Header</ins-header>
<ins-main class="page-layout-main">Main</ins-main>
</ins-layout>

<ins-layout class="page-layout-item">
<ins-header class="page-layout-hf">Header</ins-header>
<ins-main class="page-layout-main">Main</ins-main>
<ins-footer class="page-layout-hf">Footer</ins-footer>
</ins-layout>

<ins-layout class="page-layout-item">
<ins-aside class="page-layout-hf" width="200px">Aside</ins-aside>
<ins-main class="page-layout-main">Main</ins-main>
</ins-layout>

<ins-layout class="page-layout-item">
<ins-header class="page-layout-hf">Header</ins-header>
<ins-layout>
<ins-aside class="page-layout-hf" width="200px">Aside</ins-aside>
<ins-main class="page-layout-main">Main</ins-main>
</ins-layout>
</ins-layout>
<ins-layout class="page-layout-item">
<ins-header class="page-layout-hf">Header</ins-header>
<ins-layout>
<ins-aside class="page-layout-hf" width="200px">Aside</ins-aside>
<ins-layout>
    <ins-main class="page-layout-main">Main</ins-main>
    <ins-footer class="page-layout-hf">Footer</ins-footer>
</ins-layout>
</ins-layout>
</ins-layout>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style scoped>
.page-layout {
    background-color: #ffffff;
    font-size: 14px;
}
p {
    margin: 10px 0;
    line-height: 1.5em;
}
h1 {
    font-weight: 500;
    font-size: 1.7em;
}
.page-layout-item + .page-layout-item {
    margin-top: 20px;
}
.page-layout-hf {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}
.page-layout-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
</style>
