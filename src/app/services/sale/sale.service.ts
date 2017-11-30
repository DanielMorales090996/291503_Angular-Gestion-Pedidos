import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SaleService {

  sales: any = [];
  sale: any = {
    client: {name: "", lastName: "", email: ""},
    address: {street:"", city: "", zip: ""},
    items: [],
  };

  constructor(private http:HttpClient) { }

  find(){
    return this.http.get('/api/sales');
  }

  insertOne(obj){
    return this.http.post('/api/sales', obj);
  }

  updateOne(obj){
    return this.http.put('/api/sales', obj);
  }

  deleteOne(id){
    return this.http.delete('/api/sales/' + id);
}

}
