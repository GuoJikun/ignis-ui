# Card 卡片

将信息聚合在卡片容器中展示。

## 卡片的基础用法

包含标题，内容和操作

<ins-card>
<div slot="header" style="display: flex;justify-content: space-between;align-items: center;">
    <span>卡片名称</span>
    <ins-button type="text">操作按钮</ins-button>
</div>
<p>列表内容 1</p>
<p>列表内容 2</p>
<p>列表内容 3</p>
</ins-card>

## 卡片的简单用法

<ins-card>
<p>列表内容 1</p>
<p>列表内容 2</p>
<p>列表内容 3</p>
</ins-card>

## 卡片阴影

可对阴影的显示进行配置。

<div style="display: inline-block;width: 30%;">
    <ins-card>
        <p>总是显示</p>
    </ins-card>
</div>
<div style="display: inline-block;width: 30%;margin: 0 2%;">
    <ins-card shadow="hover">
        <p>Hover 显示</p>
    </ins-card>
</div>
<div style="display: inline-block;width: 30%;">
    <ins-card shadow="never">
        <p>永不显示</p>
    </ins-card>
</div>
