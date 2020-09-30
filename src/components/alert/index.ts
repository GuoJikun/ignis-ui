import Alert from "./src/alert.vue";

Alert.install = (app: any): void => {
    app.component(Alert.name, Alert);
};

export default Alert;
