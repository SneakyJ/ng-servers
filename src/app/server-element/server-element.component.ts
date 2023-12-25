import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, AfterViewInit{
  @Input('serverElement') element: {type: string, name: string, content: string };
  @ViewChild('heading') header: ElementRef;

  constructor(){}

  ngOnInit(){
    console.log('NgOnInit');
    console.log('Header content ' + this.header.nativeElement.textContent);
  }

  ngAfterViewInit(){
    console.log('AfterViewInit');
    console.log('Header content ' + this.header.nativeElement.textContent);
  }
}
