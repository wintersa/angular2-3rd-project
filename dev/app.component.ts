import {Component} from 'angular2/core';
import {AttributeDirectives} from './attributes-directives.component';
import {StructuralDirectives} from './structural-directives.component';

@Component({
    selector: 'my-app',
    template: `
        <my-attribute-directives></my-attribute-directives>
        <my-structural-directives></my-structural-directives>
    `,
    directives: [AttributeDirectives, StructuralDirectives]
})
export class AppComponent {

}
