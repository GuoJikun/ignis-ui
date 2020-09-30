import Layout from "./src/layout.vue";

Layout.install = (app: any): void => {
    app.component(Layout.name, Layout);
};

export default Layout;
