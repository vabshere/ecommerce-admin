import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  SellersComponent,
  AddSellersDialog,
  ViewSellersDialog
} from "./components/sellers/sellers.component";
import { HomeComponent } from "./components/home/home.component";
import {
  ProductsComponent,
  AddProductsDialog
} from "./components/products/products.component";
import { UsersComponent } from "./components/users/users.component";
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatListModule,
  MatDialogModule,
  MatDividerModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule
} from "@angular/material";
import { MatSidenavModule } from "@angular/material/sidenav";
import { FormsModule } from "@angular/forms";
import { DataService } from "./services/data.service";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./components/login/login.component";
import { LocalUserGuard, AuthGuard } from "./guards/login.guard";
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    SellersComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    AddSellersDialog,
    AddProductsDialog,
    ViewSellersDialog,
    LoginComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDividerModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [DataService, LocalUserGuard, AuthGuard],
  entryComponents: [AddSellersDialog, AddProductsDialog, ViewSellersDialog],
  bootstrap: [AppComponent]
})
export class AppModule {}
