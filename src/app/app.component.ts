import { Component } from '@angular/core';
import { UtilsService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(util: UtilsService) { }
}
