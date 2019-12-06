import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  links = [
    // { id: "home", name: "Home" },
    { id: "sellers", name: "Sellers" },
    { id: "products", name: "Products" },
    { id: "users", name: "Users" },
    { id: "orders", name: "Orders" }
    // { id: "exceptions", name: "Exceptions" }
  ];

  constructor() {}

  ngOnInit() {}
}
