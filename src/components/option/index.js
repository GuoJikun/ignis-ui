import Option from "@/components/select/src/option.vue";

Option.install = (app: any): void => {
    app.component(Option.name, Option);
};

export default Option;
