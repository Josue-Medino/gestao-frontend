import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-header',
  templateUrl: './action-header.component.html',
  styleUrls: ['./action-header.component.scss']
})
export class ActionHeaderComponent {
  @Input() action:string;
  @Input() title:string;

  adicionar(){
    
  }

  constructor(){
    this.action = 'Ação';
    this.title = 'Titulo'
  }
}
