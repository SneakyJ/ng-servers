import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  newName = '';
  newContent = '';

  constructor(){}

  ngOnInit(){}

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newName, 
      serverContent: this.newContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.newName,
      blueprintContent: this.newContent
    });
  }
}
