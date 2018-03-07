import { IComponentOptions } from "angular";
declare function require(params:string): any;

export const mainComponent: IComponentOptions = {
    template: require('./main.template.html')
}