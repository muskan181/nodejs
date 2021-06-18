import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  //giving template inside the component only 
  template:`       
  <h2>Hello World</h2>
  <p> This is my first component!</p>
  `,
  
})
export class HelloWorldComponent implements OnInit {
  // The code in this class drives the component's behavior.
  constructor() { }

  ngOnInit(): void {
  }

}
