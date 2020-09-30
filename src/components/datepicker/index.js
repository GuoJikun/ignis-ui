import DatePicker from "./src/datepicker.vue";

DatePicker.install = (app: any): void => {
    app.component(DatePicker.name, DatePicker);
};

export default DatePicker;
