module.exports = [
    ["/", "快速开始"],
    ["/changelog", "更新日志"],
    {
        title: "组件", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
            {
                title: "基础组件", // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    ["/transition", "Transition 动画"],
                    ["/icon", "Icon 图标"],
                    ["/button", "Button 按钮"],
                ],
            },
            {
                title: "布局", // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    ["/grid", "Grid 栅格"],
                    ["/layout", "Layout 布局"],
                    ["/card", "Card 卡片"],
                    ["/divider", "Divider 分隔线"],
                    ["/collapse", "Collapse 折叠面板"],
                    ["/cell", "Cell 单元格"],
                ],
            },
            {
                title: "表单", // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    ["/input", "Input 输入框"],
                    ["/inputnumber", "InputNumber 输入框"],
                    ["/select", "Select 选择器"],
                    ["/radio", "Radio 单选框"],
                    ["/checkbox", "Checkbox 复选框"],
                    ["/rate", "Rate 评分"],
                    ["/switch", "Switch 开关"],
                    ["/datepicker", "DatePicker 日期选择器"],
                    ["/form", "Form 表单"],
                ],
            },
            {
                title: "数据", // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    ["/tag", "Tag 标签"],
                    ["/progress", "Progress 进度条"],
                    ["/alert", "Alert 警告"],
                ],
            },
            {
                title: "视图", // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    ["/tooltip", "Tooltip 文字提示"],
                    // ["/button", "Button 按钮"],
                ],
            },
            {
                title: "导航", // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    ["/breadcrumb", "Breadcrumb 面包屑"],
                    ["/steps", "Steps 步骤条"],
                ],
            },
            {
                title: "其它", // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    ["/timeline", "Timeline 时间线"],
                    // ["/button", "Button 按钮"],
                ],
            },
        ],
    },
];
