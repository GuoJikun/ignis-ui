import { ComponentOptions } from "vue";
import RadioGroup from "./src/index.vue";

RadioGroup.install = ({ component }: ComponentOptions): void => {
    component(RadioGroup.name, RadioGroup);
};

export default RadioGroup;
