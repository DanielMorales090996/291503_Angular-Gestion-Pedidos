import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../../services/sale/sale.service';


@Component({
  selector: 'app-sales-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
sales: Array<any>;
sale: {
    order:"",date:"",total:"", client:{name:"", lastname:"", email:""}, address:{
        street:"",city:"",zip:""}, items:{id:"",name:"",brand:"",provider:"",quantity:""}
};
isLoading = false;




  constructor(private SaleService: SaleService) {}

  ngOnInit() {
    this.onFind();
  }

  onFind(){
   this.isLoading= true;
   this.SaleService.find().subscribe((res:any) => {
     this.sales = res.body;
     this.isLoading= false;
   });
 }

 onDelete(id){
   this.SaleService.deleteOne(id).subscribe((res:any) => {
     console.log(res);
     this.onFind();
   });
 }
}
