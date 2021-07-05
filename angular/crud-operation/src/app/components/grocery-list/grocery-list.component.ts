import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { GroceryListCrudService } from 'src/app/services/grocery-list-crud.service';
import { Grocery } from 'src/app/models/Grocery';
import { tap } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray,transferArrayItem,CdkDrag } from '@angular/cdk/drag-drop';
import { MatList } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  groceries$!: Observable<Grocery[]>
  constructor( private groceryListCrudService: GroceryListCrudService) { }

  ngOnInit(): void {
    this.groceries$=this.fetchAll();
  }
  fetchAll(): Observable<Grocery[]>{
    return this.groceryListCrudService.fetchAll()
  }
  post(groceryItem: Partial<Grocery>): void {
    // const item = (<string>groceryItem).trim()
    // if(!item) return;

    this.groceries$=this.groceryListCrudService
      .post(groceryItem)
      .pipe(tap(() => this.groceries$=this.fetchAll()));
  }
  update(id: number,newItem: string, newQuan: string): void{

    const newGrocery: Grocery={
      "id":id,
      "item":newItem,
      "quantity": newQuan
    };

    this.groceries$=this.groceryListCrudService
      .update( newGrocery )
      .pipe(tap(() => this.groceries$=this.fetchAll()));
  }
  delete(id: number):void{
    this.groceries$=this.groceryListCrudService
      .delete(id)
      .pipe(tap(() => (this.groceries$=this.fetchAll())));
  }

  grocery=[];
  onDrop(event:CdkDragDrop<string[]> ){
    moveItemInArray(this.grocery, event.previousIndex, 
      event.currentIndex);
  }
  // onDrop(event:CdkDragDrop<string[]> ){
  //   if(event.previousContainer===event.container){
  //     moveItemInArray(event.container.data, event.previousIndex, 
  //       event.currentIndex);
  //   }else{
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,event.currentIndex);
  //   }
  // }
}
