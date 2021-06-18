import { BuiltinMethod } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-interpolation',
  templateUrl: './hello-world-interpolation.component.html',
  
})
export class HelloWorldInterpolationComponent implements OnInit {
  fontColor = 'red';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';
  sayMessage() {
    alert(this.message);
  }

  ngOnInit(): void {
  }

}
