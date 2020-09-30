# cell 单元格

在一组备选项中进行单选

## 基础用法

包含各类用法的综合示例。

<ins-card style="width: 400px;">
<div slot="name">选项</div>
<ins-cell-group>
<ins-cell title="只显示标题"></ins-cell>
<ins-cell title="显示label" label="label的内容"></ins-cell>
<ins-cell title="显示extra" extra="extra"></ins-cell>
<ins-cell title="显示向右的icon" is-link name="link"></ins-cell>
<ins-cell
title="链接"
is-link
name="link"
to="/layout"
@click="handleClick"
extra="详细信息" ></ins-cell>
<ins-cell
title="新窗口打开"
is-link
name="link"
to="/layout"
@click="handleClick"
target="\_blank" ></ins-cell>
<ins-cell title="禁用" disabled></ins-cell>
<ins-cell title="选中" selected></ins-cell>
<!-- <ins-cell title="开关">
            <ins-switch
                slot="extra"
                v-model="status"
            ></ins-switch>
        </ins-cell> -->
</ins-cell-group>
</ins-card>

## 是否显示 border

给 cell 加上边框

<ins-card style="width: 400px;">
<ins-cell-group border>
<ins-cell title="只显示标题"></ins-cell>
<ins-cell
            title="显示label"
            label="label的内容"
        ></ins-cell>
<ins-cell title="显示extra" extra="extra"></ins-cell>
<ins-cell
            title="显示向右的icon"
            is-link
            name="link"
        ></ins-cell>
<ins-cell
title="链接"
is-link
name="link"
to="/layout"
@click="handleClick"
extra="详细信息" ></ins-cell>
<ins-cell
title="新窗口打开"
is-link
name="link"
to="/layout"
@click="handleClick"
target="\_blank" ></ins-cell>
<ins-cell title="禁用" disabled></ins-cell>
<ins-cell title="选中" selected></ins-cell>
<!-- <ins-cell title="开关">
            <ins-switch
                slot="extra"
                v-model="status"
            ></ins-switch>
        </ins-cell> -->
</ins-cell-group>
</ins-card>

<script>
    export default {
        methods: {
            handleClick(val){}
        }
    }
</script>
