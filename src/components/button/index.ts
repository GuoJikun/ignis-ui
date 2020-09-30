import Button from "./src/button.vue";

Button.install = (app: any): void => {
    app.component(Button.name, Button);
};

export default Button;
