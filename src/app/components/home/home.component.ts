import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';
import { InventoryService } from '../../services/inventory/inventory.service';
import { SaleService } from '../../services/sale/sale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Array<any>;
  user: {name: "", lastName: "", email: ""};
  items: Array<any>;
  item: {name: "", brand: "", provider: "", quantity: "",  price: ""};
  sales: Array<any>;
  sale: any = {
    client: {name: "", lastName: "", email: ""},
    address: {street:"", city: "", zip: ""},
    items: [],
  };
  isLoading = false;

  constructor(private clientService: ClientService, private inventoryService: InventoryService, private SaleService: SaleService) { }

  ngOnInit() {
    this.onFindC();
    this.onFindI();
    this.onFindP();
  }

  onFindC() {
    this.clientService.find().subscribe((res: any) => {
      this.users = res.body;
    });
  }

  onFindI(){
    this.inventoryService.find().subscribe((res:any) => {
      console.log(res.body);
    this.items = res.body;
  });
  }

  onFindP(){
   this.isLoading= true;
   this.SaleService.find().subscribe((res:any) => {
     this.sales = res.body;
     this.isLoading= false;
   });
 }

}
