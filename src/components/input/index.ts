import Input from "./src/input.vue";

Input.install = ({ component }: any) => {
    component(Input.name, Input);
};

export default Input;
