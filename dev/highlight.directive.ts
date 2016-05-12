import {Directive} from 'angular2/core';
import {ElementRef} from "angular2/core";
import {OnInit} from "angular2/core";
import {Renderer} from "angular2/core";

@Directive ({
      selector: '[myHighlight]',
      inputs: ['highlightColor:myHighlight'],
      host: {
          '(mouseenter)': 'onMouseEnter()',
          '(mouseleave)': 'onMouseLeave()',
      }
})


export class HighlightDirective {
    private _defaultColor = 'green';
    highlightColor: string;

    constructor(private _elRef: ElementRef, private _renderer: Renderer) {}

    // ngOnInit():any {
    //     this._elRef.nativeElement.style.backgroundColor = this.highlightColor || this._defaultColor;
    //      //this._renderer.setElementStyle(this._elRef, 'background-color', this.highlightColor || this._defaultColor);
    // }
    onMouseEnter(){
          this.highlight(this.highlightColor || this._defaultColor);
    }

    onMouseLeave(){
      this._elRef.nativeElement.style.backgroundColor = null;
      // this._renderer.setElementStyle(this._elRef,'background-color', null);
    }

    private highlight(color: string) {
      this._elRef.nativeElement.style.backgroundColor = color;
      // this._renderer.setElementStyle(this._elRef, 'background-color', color);
    }
}
