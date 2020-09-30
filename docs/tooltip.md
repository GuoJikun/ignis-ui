<div class="page-item">
    <div>
        <h1 class="page-title">Tooltip 文字提示</h1>
        <p class="page-dec">常用于展示鼠标 hover 时的提示信息。</p>
    </div>
</div>
<div class="page-item">
    <div>
        <h1 class="page-item-title">基础用法</h1>
        <p class="page-item-dec">
            在这里我们提供9种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。
        </p>
    </div>
    <div class="page-item-content">
        <div>
            <div style="width: 400px;">
                <div class="text-center">
                    <ins-tooltip
                        content="Top Left 提示文字"
                        placement="top-start"
                    >
                        <ins-button>上左</ins-button>
                    </ins-tooltip>
                    <ins-tooltip
                        class="ml-10"
                        content="Top Center 提示文字"
                        placement="top"
                    >
                        <ins-button>上边</ins-button>
                    </ins-tooltip>
                    <ins-tooltip
                        class="ml-10"
                        content="Top Right 提示文字"
                        placement="top-end"
                    >
                        <ins-button>上右</ins-button>
                    </ins-tooltip>
                </div>
                <div class="flex-between">
                    <div style="width: 70px;">
                        <ins-tooltip
                            class="mt-20"
                            content="Left Top 提示文字"
                            placement="left-start"
                        >
                            <ins-button>左上</ins-button>
                        </ins-tooltip>
                        <ins-tooltip
                            class="mt-20"
                            content="Left Center 提示文字"
                            placement="left"
                        >
                            <ins-button>左边</ins-button>
                        </ins-tooltip>
                        <ins-tooltip
                            class="mt-20"
                            content="Left Bottom 提示文字"
                            placement="left-end"
                        >
                            <ins-button>左下</ins-button>
                        </ins-tooltip>
                    </div>
                    <div style="width: 70px;">
                        <ins-tooltip
                            class="mt-20"
                            content="Right Top 提示文字"
                            placement="right-start"
                        >
                            <ins-button>右上</ins-button>
                        </ins-tooltip>
                        <ins-tooltip
                            class="mt-20"
                            content="Right Center 提示文字"
                            placement="right"
                        >
                            <ins-button>右边</ins-button>
                        </ins-tooltip>
                        <ins-tooltip
                            class="mt-20"
                            content="Right Bottom 提示文字"
                            placement="right-end"
                        >
                            <ins-button>右下</ins-button>
                        </ins-tooltip>
                    </div>
                </div>
                <div class="text-center">
                    <ins-tooltip
                        class="ml-10"
                        content="Bottom Left 提示文字"
                        placement="bottom-start"
                    >
                        <ins-button>下左</ins-button>
                    </ins-tooltip>
                    <ins-tooltip
                        class="ml-10"
                        content="Bottom Center 提示文字"
                        placement="bottom"
                    >
                        <ins-button>下边</ins-button>
                    </ins-tooltip>
                    <ins-tooltip
                        class="ml-10"
                        content="Bottom Right 提示文字"
                        placement="bottom-end"
                    >
                        <ins-button>下右</ins-button>
                    </ins-tooltip>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="page-item">
    <div>
        <h1 class="page-item-title">主题</h1>
        <p class="page-item-dec">
            Tooltip 组件提供了两个不同的主题：dark和light。
        </p>
    </div>
    <div class="page-item-content">
        <div>
            <ins-tooltip
                content="Bottom Left 提示文字"
                placement="bottom-start"
            >
                <ins-button>dart(default)</ins-button>
            </ins-tooltip>
            <ins-tooltip
                class="ml-20"
                content="Bottom Center 提示文字"
                theme="light"
            >
                <ins-button>light</ins-button>
            </ins-tooltip>
        </div>
    </div>
</div>
<div class="page-item">
    <div>
        <h1 class="page-item-title">更多 Content</h1>
        <p class="page-item-dec">
            展示多行文本或者是设置文本内容的格式
        </p>
    </div>
    <div class="page-item-content">
        <div>
            <ins-tooltip placement="top">
                <ins-button>slot content</ins-button>
                <template v-slot:content>
                    多行信息
                    <br />
                    第二行信息
                </template>
            </ins-tooltip>
        </div>
    </div>
</div>

<script>
export default {
    data() {
        return {};
    },
};
</script>
<style>
.flex-between {
    display: flex;
    justify-content: space-between;
}
.text-center {
    text-align: center;
}
.ml-0 {
    margin-left: 0;
    margin-top: 10px;
}
</style>
