import { DefineComponent } from "vue";

function broadcast(componentName: string, eventName: string, params: any) {
    this.$children.forEach(
        (child: {
            $options: { name: any };
            $emit: { apply: (arg0: any, arg1: string[]) => void };
        }) => {
            const name = child.$options.name;
            if (name === componentName) {
                child.$emit.apply(child, [eventName].concat(params));
            } else {
                broadcast.apply(child, [componentName, eventName, params]);
            }
        }
    );
}

export default {
    methods: {
        dispatch(componentName: string, eventName: string, params: any) {
            let parent: any = this.$parent || this.$root;
            let name = parent.$options.name;
            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;
                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast(componentName: string, eventName: string, params: any) {
            broadcast.call(this, componentName, eventName, params);
        },
    },
};
