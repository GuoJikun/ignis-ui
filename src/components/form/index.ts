import Form from "./src/form.vue";

Form.install = ({ component }: any) => {
    component(Form.name, Form);
};

export default Form;
