import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: '<p>warning! Something went wrong!</p>',
  styles: [`
  p {
      color: red;
  }`]
})

export class WarningComponent {
}