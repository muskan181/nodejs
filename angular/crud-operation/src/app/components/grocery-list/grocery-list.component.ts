import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroceryListCrudService } from 'src/app/services/grocery-list-crud.service';
import { Grocery } from 'src/app/models/Grocery';
import { tap } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray,transferArrayItem,CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  groceries$ : Observable<Grocery[]> | undefined 
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
  update(id: number,newItem: string, newQuan: number): void{

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
  // onDrop(event: Observable<Grocery[]>){
  //   this.groceries$=this.groceryListCrudService
  //     .onDrop(this.fetchAll())
  //     .pipe(tap(() => (this.groceries$=this.fetchAll())));
  // }
  
}
