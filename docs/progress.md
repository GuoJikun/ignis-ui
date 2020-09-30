<div class="page-item">
    <div>
        <h1 class="page-title">Progress 进度条</h1>
        <p class="page-dec">
            用于展示操作进度，告知用户当前状态和预期。
        </p>
    </div>
</div>
<div class="page-item">
    <div>
        <h1 class="page-item-title">线形进度条 — 百分比外显</h1>
    </div>
    <div class="page-item-content">
        <div>
            <ins-progress :percentage="0"></ins-progress>
            <ins-progress class="mt-20" :percentage="50"></ins-progress>
            <ins-progress
                class="mt-20"
                :percentage="80"
                color="pink"
            ></ins-progress>
            <ins-progress
                class="mt-20"
                :percentage="100"
                status="success"
            ></ins-progress>
            <ins-progress
                class="mt-20"
                :percentage="100"
                status="danger"
            ></ins-progress>
        </div>
    </div>
</div>
<div class="page-item">
    <div>
        <h1 class="page-item-title">⾃线形进度条 — 百分比内显</h1>
        <p class="page-item-dec">
            百分比不占用额外控件，适用于文件上传等场景。
        </p>
    </div>
    <div class="page-item-content">
        <div>
            <ins-progress
                :percentage="0"
                text-ins-ide
                :stroke-width="18"
            ></ins-progress>
            <ins-progress
                class="mt-20"
                :percentage="70"
                text-ins-ide
                :stroke-width="18"
            ></ins-progress>
            <ins-progress
                class="mt-20"
                :percentage="80"
                color="pink"
                text-ins-ide
                :stroke-width="18"
            ></ins-progress>
            <ins-progress
                class="mt-20"
                :percentage="100"
                status="success"
                text-ins-ide
                :stroke-width="18"
            ></ins-progress>
            <ins-progress
                class="mt-20"
                :percentage="50"
                status="danger"
                text-ins-ide
                :stroke-width="18"
            ></ins-progress>
            <p slot="description">
                可通过
                <code class="code">stroke-width</code>
                属性更改进度条的高度，并可通过
                <code class="code">text-ins-ide</code>
                属性来将进度条描述置于进度条内部。
            </p>
        </div>
    </div>
</div>
<div class="page-item">
    <div>
        <h1 class="page-item-title">环形进度条</h1>
        <p class="page-item-dec">
            可通过
            <code class="code">type</code>
            属性来指定使用环形进度条，在环形进度条中，还可以通过
            <code class="code">width</code>
            属性来设置其大小。
        </p>
    </div>
    <div class="page-item-content">
        <div>
            <ins-progress type="circle" :percentage="0"></ins-progress>
            <ins-progress
                class="ml-20"
                type="circle"
                :percentage="25"
            ></ins-progress>
            <ins-progress
                class="ml-20"
                type="circle"
                :percentage="80"
                color="#8e71c7"
            ></ins-progress>
            <ins-progress
                class="ml-20"
                type="circle"
                :percentage="100"
                status="success"
            ></ins-progress>
            <ins-progress
                class="ml-20"
                type="circle"
                :percentage="100"
                status="danger"
            ></ins-progress>
        </div>
    </div>
</div>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    parameter: 'percentage',
                    explain: '百分比（必填）',
                    type: 'number',
                    optionalValue: '0-100',
                    defaultValue: '0',
                },
                {
                    parameter: 'type',
                    explain: '进度条类型',
                    type: 'string',
                    optionalValue: 'line / circle',
                    defaultValue: 'line',
                },
                {
                    parameter: 'stroke-width',
                    explain: '进度条的宽度，单位 px',
                    type: 'number',
                    optionalValue: '-',
                    defaultValue: '6',
                },
                {
                    parameter: 'status',
                    explain: '进度条当前状态',
                    type: '	string',
                    optionalValue: 'success / danger',
                    defaultValue: '-',
                },
                {
                    parameter: 'color',
                    explain: '进度条背景色（会覆盖 status 状态颜色）',
                    type: '	string',
                    optionalValue: '-',
                    defaultValue: '-',
                },
                {
                    parameter: 'width',
                    explain: '环形进度条画布宽度（只在type为circle时可用）',
                    type: '	number',
                    optionalValue: '-',
                    defaultValue: '126',
                },
                {
                    parameter: 'show-text',
                    explain: '是否显示进度条文字内容',
                    type: 'boolean',
                    optionalValue: '-',
                    defaultValue: 'true',
                },
            ],
            code1: `
<ins-progress :percentage="0"></ins-progress>
<ins-progress class="mt-20" :percentage="50"></ins-progress>
<ins-progress class="mt-20" :percentage="80" color="pink"></ins-progress>
<ins-progress class="mt-20" :percentage="100" status="success"></ins-progress>
<ins-progress class="mt-20" :percentage="100" status="danger"></ins-progress>
            `,
            code2: `
<ins-progress
    :percentage="0"
    text-ins-ide
    :stroke-width="18"
></ins-progress>
<ins-progress
    class="mt-20"
    :percentage="70"
    text-ins-ide
    :stroke-width="18"
></ins-progress>
<ins-progress
    class="mt-20"
    :percentage="80"
    color="pink"
    text-ins-ide
    :stroke-width="18"
></ins-progress>
<ins-progress
    class="mt-20"
    :percentage="100"
    status="success"
    text-ins-ide
    :stroke-width="18"
></ins-progress>
<ins-progress
    class="mt-20"
    :percentage="50"
    status="danger"
    text-ins-ide
    :stroke-width="18"
></ins-progress>
            `,
            code3: `
<ins-progress type="circle" :percentage="0"></ins-progress>
<ins-progress class="ml-20" type="circle" :percentage="25"></ins-progress>
<ins-progress class="ml-20" type="circle" :percentage="80" color="#8e71c7"></ins-progress>
<ins-progress class="ml-20" type="circle" :percentage="100" status="success">Done</ins-progress>
<ins-progress class="ml-20" type="circle" :percentage="100" status="danger">Done</ins-progress>
            `,
        };
    },
};
</script>

<style lang="scss" scoped>
.progress-item + .progress-item {
    margin-top: 20px;
}
</style>
