import {Component} from 'angular2/core';
import {UnlessDirective} from './unless.directive';


@Component ({
  selector: 'my-structural-directives',
  template: `
        <h1>Structural Directives </h1>
        <section class="directive">
              <br>
              <h2>*ngIf</h2>
              <div>
                  Enter a number higher then 10
                  <br>
                  <input type="text" #number (keyup)="0">
              </div>
              <div *ngIf="number.value > 10">
                  <br>
                   Number is greater then 10
              </div>
        </section>
        <section class="directive">
              <br>
              <h2>*ngFor</h2>
              <div>
                  <ul>
                      <li *ngFor="#item of list, #i = index">{{item}} {{i}}</li>
                  </ul>
              </div>
        </section>
        <section class="directive">
              <br>
              <h2>[ngSwitch]</h2>
              <div>
                  Enter red, blue or green
                  <br>
                  <input type="text" #color (keyup)="0">
              </div>
              <div [ngSwitch]="color.value">
                  <template [ngSwitchWhen]="'red'"><span style="color:red"><br>Color is red</span></template>
                  <template [ngSwitchWhen]="'blue'"><span style="color:blue"><br>Color is blue</span></template>
                  <template [ngSwitchWhen]="'green'"><span style="color:green"><br>Color is green</span></template>
                  <template ngSwitchDefault><span><br>Don't know that color.</span></template>
              </div>
        </section>

        <section class="directive">
        <br>
        <h2>Custom made Directive: *myUnless</h2>
        <div>
            Enter true or false
            <br>
            <input type="text" #condition (keyup)="0">
        </div>
        <div *myUnless="condition.value != 'false'">
            <br>
            Only shown if 'false' was entered!
        </div>
        </section>
  `,
  directives: [UnlessDirective]
})

export class StructuralDirectives {
    list = ['Apple', 'Milk','Bread'];
}
