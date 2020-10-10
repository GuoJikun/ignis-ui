import Icon from "./components/icon/index";
import Button from "./components/button/index";

// 布局组件
import Layout from "./components/layout/index";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Aside from "./components/aside/index";
import Main from "./components/main/index";
import Row from "./components/row/index";
import Col from "./components/col/index";
import Card from "./components/card/index";
import Divider from "./components/divider/index";
// import CellGroup from "./components/cell-group/index";
// import Cell from "./components/cell/index";
import Collapse from "./components/collapse/index";
import CollapseItem from "./components/collapse-item/index";
// 数据组件
// import Table from "./components/table/index";
import Tag from "./components/tag/index";
import Progress from "./components/progress/index";
import Alert from "./components/alert/index";
// form组件
// import Form from "./components/form/index";
// import FormItem from "./components/form-item/index";
// import Input from "./components/input/index";
// import InputNumber from "./components/input-number/index";
// import Radio from "./components/radio/index";
// import RadioGroup from "./components/radio-group/index";
// import Checkbox from "./components/checkbox/index";
// import CheckboxGroup from "./components/checkbox-group/index";
// import Select from "./components/select/index";
// import Option from "./components/option/index";
// import Switch from "./components/switch/index";
// import DatePicker from "./components/datepicker/index";
// import Rate from "./components/rate/index";
// nav组件
import Breadcrumb from "./components/breadcrumb/index";
import BreadcrumbItem from "./components/breadcrumb-item/index";
import Steps from "./components/steps/index";
import Step from "./components/step/index";
// 其它组件
import Timeline from "./components/timeline/index";
import TimelineItem from "./components/timeline-item/index";
// import Tooltip from "./components/tooltip/index";
import Modal from "./components/modal/index";

import CollapseTransition from "./components/collapse-transition/index";

const components = [
    Icon,
    Button,
    Layout,
    Header,
    Footer,
    Aside,
    Main,
    Card,
    Divider,
    Row,
    Col,
    // CellGroup,
    // Cell,
    Collapse,
    CollapseItem,
    CollapseTransition,

    // Form,
    // FormItem,
    // Input,
    // InputNumber,
    // Radio,
    // RadioGroup,
    // Checkbox,
    // CheckboxGroup,
    // Select,
    // Option,
    // Switch,
    // DatePicker,
    // Rate,

    // Table,
    Tag,
    Progress,
    Alert,
    Breadcrumb,
    BreadcrumbItem,

    Steps,
    Step,

    Timeline,
    TimelineItem,
    // Tooltip,
    Modal,
];
// 定义 install 方法，接收 Vue 作为参数
function install(app: any): void {
    // 遍历注册所有组件
    components.map(component => app.component(component.name, component));
    // 下面这个写法也可以
    // components.map(component => Vue.use(component));
}

export default {
    install,
    // 所有组件，必须具有 install，才能使用 Vue.use()
    ...components,
};

export const s = {
    ...components,
};
