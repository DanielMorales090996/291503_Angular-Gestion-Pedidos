import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../services/sale/sale.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})

export class SalesComponent implements OnInit {

  sale: any = {
    client: {name: "", lastName: "", email: ""},
    address: {street:"", city: "", zip: ""},
    items: [],
  };

  sales: Array<any>;

  constructor(private saleService: SaleService) { }

  ngOnInit() {
    this.sales = this.saleService.sales
  }

}
