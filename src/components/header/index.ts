import Header from "./src/header.vue";

Header.install = (app: any): void => {
    app.component(Header.name, Header);
};

export default Header;
