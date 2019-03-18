import { Component } from '@angular/core';
import { RutasService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public rutasService: RutasService) {}
}
