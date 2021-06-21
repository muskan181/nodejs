import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray,transferArrayItem,CdkDrag } from '@angular/cdk/drag-drop';
// import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  backgroundColor= "aqua";
  
  share(){
    window.alert('The product has been shared!');
  }
  // onNotify(){
    // window.alert('You will be notified when the product goes on sale');
  // }
  products=[
    {
      name:'Phone XL',
      description:'A large phone with one of the best screens',
      price: 799
    },
    {
      name:'Phone Mini',
      description:'A great phone with one of the best cameras',
      price: 999
    },
    {
      name:'Phone Standard',
      price: 1299
    }
  ];
  onDrop(event: CdkDragDrop<string[]>){
    moveItemInArray(this.products, event.previousIndex, 
      event.currentIndex);
  }
}
