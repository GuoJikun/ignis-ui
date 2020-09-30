import Footer from "./src/footer.vue";

Footer.install = (app: any): void => {
    app.component(Footer.name, Footer);
};

export default Footer;
