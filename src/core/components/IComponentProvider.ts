﻿module jasper.core {
    export interface IComponentProvider {
        register(component: IHtmlComponentDefinition);
    }

    export class ComponentProvider implements IComponentProvider, ng.IServiceProvider {

        static $inject = ['$compileProvider'];

        private componentRegistar: IHtmlRegistrar<IHtmlComponentDefinition>;

        constructor($compileProvider: ng.ICompileProvider) {
            this.componentRegistar = new core.HtmlComponentRegistrar($compileProvider);
        }

        register(component: IHtmlComponentDefinition) {
            this.componentRegistar.register(component);
        }

        $get() {
            return this.componentRegistar;
        }
    }
}