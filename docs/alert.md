# Alert 警告

用于页面中展示重要的提示信息。

## 基本用法

页面中的非浮层元素，不会自动消失。

<ins-alert>
<div>这是提示信息</div>
<div>用来让人注意的提示文字</div>
</ins-alert>

## 类型

有状态的提示信息

<ins-alert type="success">
<div>这是提示信息</div>
<div>用来让人注意的提示文字</div>
</ins-alert>
<ins-alert type="danger">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</ins-alert>
<ins-alert type="warning">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</ins-alert>
<ins-alert type="info">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</ins-alert>

## 自定义颜色

通过 props 中的 color 来自定义颜色

<ins-alert type="success" :color="{background: 'pink',line: 'red',font: 'white'}">
<div>这是提示信息</div>
<div>用来让人注意的提示文字</div>
</ins-alert>
<ins-alert type="danger" :color="{ font: 'white', background: 'black' }">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</ins-alert>
<ins-alert type="warning">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</ins-alert>
<ins-alert type="info">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</ins-alert>
