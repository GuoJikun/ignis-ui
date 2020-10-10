import FormItem from "../form/src/form-item.vue";

FormItem.install = ({ component }: any) => {
    component(FormItem.name, FormItem);
};

export default FormItem;
