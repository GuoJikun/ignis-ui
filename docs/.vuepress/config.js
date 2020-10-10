const navbar = require("./config/navbar.js");
const sidebar = require("./config/sidebar.js");
const plugins = require("./config/sidebar.js");

module.exports = {
    title: "ins-design",
    description: "vue通用组件库ins-design",
    themeConfig: {
        nav: navbar,
        sidebar: sidebar,
    },
    plugins,
    extraWatchFiles: [
        "./conf/sidebar.js", // 使用相对路径
        "./conf/navbar.js", // 使用绝对路径
        "./conf/plugins-.js", // 使用绝对路径
        "./enhanceApp.js", // 使用绝对路径
    ],
};
