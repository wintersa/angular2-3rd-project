import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component ({
    selector: 'my-attributes-directives',
    template: `
          <div myHighLight>
              Highlight me
          </div>
          <br><br>
          
          <div myHighLight>
              Another Highlight
          </div>
    `,
    directives: [HighlightDirective]
})

export class AttributeDirectives{

}
