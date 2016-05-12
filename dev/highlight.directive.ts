import {Directive} from 'angular2/core';
import {ElementRef} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Renderer} from 'angular2/core';

@Directive ({
      selector: '[myHighLight]'
})


export class HighlightDirective implements OnInit {
    private _defaultColor = 'green';

    constructor(private _elRef: ElementRef, private _renderer: Renderer) {}

    ngOnInit():any {
        this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
        // this._renderer.setElementStyle(this._elRef, 'background-color', this._defaultColor); // not working
    }
}
