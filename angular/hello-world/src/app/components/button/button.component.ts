import { Component, OnInit , Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()
  color!: string;   //we can take input from this variable
  
  @Input()
  text!: string;    //we can take input from this variable

  @Output() btnClick=new EventEmitter();  //we can give output using button click

  

  
  constructor() { }

  ngOnInit(): void {
    
  }
  onClick(){
    this.btnClick.emit();
  }

}
