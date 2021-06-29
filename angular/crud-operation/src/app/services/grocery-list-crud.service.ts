import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Grocery } from 'src/app/models/Grocery';
import { Observable } from 'rxjs';
import {catchError , tap} from 'rxjs/operators';
import { ErrorHandlerService } from '../services/error-handler.service';
import { CdkDragDrop, moveItemInArray,transferArrayItem,CdkDrag } from '@angular/cdk/drag-drop';
@Injectable({
  providedIn: "root",
})
export class GroceryListCrudService{
  private url="http://localhost:3001/groceries";
  //this is a private url from which we gonna take the data
  httpOptions: {headers: HttpHeaders}={
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  }
  
  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
  ) { }

 
  fetchAll(): Observable<Grocery[]>{
    return this.http
      .get<Grocery[]>(this.url, {responseType:"json"})
      .pipe(catchError(this.errorHandlerService.handleError<Grocery[]>("operation" , [])));
  }
  post(item: Partial<Grocery> ): Observable<any>{
    return this.http
    .post<Partial<Grocery>>(this.url,item,this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handleError<any>("operation")));
  } 
  update(grocery:Grocery): Observable<any>{
    return this.http
    .put<Grocery>(this.url,grocery,this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handleError<any>("operation")));
  } 
  delete(id:number):Observable<any>{
    
    const url=`http://localhost:3001/groceries/${id}`;
    return this.http
    .delete<Grocery>(url,this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handleError<any>("operation")));
  }
  // onDrop( event: Observable<Grocery[]>){
  //   return this.http
  //     .get<Grocery[]>(this.url, {responseType:"json"})
  //     .pipe(catchError(this.errorHandlerService.handleError<Grocery[]>("operation" , [])));
  // }
}