import {Component} from 'angular2/core';
import {AttributeDirectives} from './attributes-directives.component';

@Component({
    selector: 'my-app',
    template: `
        <my-attributes-directives></my-attributes-directives>

    `,
    directives: [AttributeDirectives]
})
export class AppComponent {

}
