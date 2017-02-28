import { Component, ViewEncapsulation } from '@angular/core';

var template = `<div class="container">
  <div class="nested">
    <p>{{ name }}</p>
    </div></div>`;

var overlapStyle = `:host-context(.theme) .nested p { color: purple; }`;

@Component({
  selector: 'native',
  template: template,
  encapsulation: ViewEncapsulation.Native,
  styles: [overlapStyle, `
  .container { padding: 10px; }
	p {
	  color: red;
	}
	`]
})
export class NativeComponent { name = 'Native';}

@Component({
  selector: 'emulated',
  template: template,
  encapsulation: ViewEncapsulation.Emulated,
  styles: [overlapStyle, `
  :host .nested { padding: 10px; }
  :host /deep/ p {
	  font-size: 20px;
	}
	`]
})
export class EmulatedComponent { name = 'emulated (default)';}

@Component({
  selector: 'none',
  template: template,
  encapsulation: ViewEncapsulation.None,
  styles: [overlapStyle,
    `.container .nested { color: blue; }`
  ]
})
export class NoneComponent { name = 'None'; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  private setTheme: Boolean = false;
}
