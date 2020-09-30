import FormItem from "../form/src/form-item.vue";

FormItem.install = vue => {
    vue.component(FormItem.name, FormItem);
};

export default FormItem;
