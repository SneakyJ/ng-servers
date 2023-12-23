import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent {
  @Input('serverElement') element: {type: string, name: string, content: string };

  constructor(){}

  ngOnInit(){}
}
