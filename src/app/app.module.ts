import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { SalesComponent } from './components/sales/sales.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';
import { ClientService } from './services/client/client.service';
import { InventoryService } from './services/inventory/inventory.service';
import { SaleService } from './services/sale/sale.service';
import { UsersService } from './services/users.service';
import { CreateComponent } from './components/sales/create/create.component';
import { ListComponent } from './components/sales/list/list.component';
import { HttpClientModule }       from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';


var roots = [
  { path: 'sales', component: SalesComponent, canActivate : [AuthenticationGuard] },
  { path: 'clients', component: ClientsComponent, canActivate : [AuthenticationGuard] },
  { path: 'inventory', component: InventoryComponent, canActivate : [AuthenticationGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    InventoryComponent,
    SalesComponent,
    FilterPipe,
    CreateComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(roots),
    HttpClientModule,
  ],
  providers: [
    ClientService,
    InventoryService,
    SaleService,
    UsersService,
    AuthenticationGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
