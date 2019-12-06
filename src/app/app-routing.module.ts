import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";
import { SellersComponent } from "./components/sellers/sellers.component";
import { UsersComponent } from "./components/users/users.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { LocalUserGuard, AuthGuard } from "./guards/login.guard";
import { OrdersComponent } from "./components/orders/orders.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "prefix" },
  { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [LocalUserGuard],
    children: [
      { path: "", redirectTo: "sellers", pathMatch: "prefix" },
      { path: "sellers", component: SellersComponent },
      { path: "products", component: ProductsComponent },
      { path: "users", component: UsersComponent },
      { path: "orders", component: OrdersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
