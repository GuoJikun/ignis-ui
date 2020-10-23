import Option from "@/components/select/src/option.vue";
import { App } from "vue";

Option.install = (app: App): void => {
    app.component(Option.name, Option);
};

export default Option;
