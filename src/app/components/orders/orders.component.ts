import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material";

var ELEMENT_DATA = [
  [
    {
      name: "asdad",
      quantity: 12,
      address: "asmdpamdamd",
      pin: 222222,
      seller: "kandewal"
    },
    {
      name: "asdad",
      quantity: 12,
      address: "asmdpamdamd",
      pin: 222222,
      seller: "kandewal"
    },
    {
      name: "asdad",
      quantity: 12,
      address: "asmdpamdamd",
      pin: 222222,
      seller: "kandewal"
    },
    {
      name: "asdad",
      quantity: 12,
      address: "asmdpamdamd",
      pin: 222222,
      seller: "kandewal"
    }
  ],
  [
    {
      name: "asdad",
      quantity: 12,
      address: "asmdpamdamd",
      pin: 222222,
      seller: "kandewal"
    },
    {
      name: "asdad",
      quantity: 12,
      address: "asmdpamdamd",
      pin: 222222,
      seller: "kandewal"
    },
    {
      name: "asdad",
      quantity: 12,
      address: "asmdpamdamd",
      pin: 222222,
      seller: "kandewal"
    }
  ],
  [
    {
      name: "asdad",
      quantity: 12,
      address: "asmdpamdamd",
      pin: 222222,
      seller: "kandewal"
    },
    {
      name: "asdad",
      quantity: 12,
      address: "asmdpamdamd",
      pin: 222222,
      seller: "kandewal"
    },
    {
      name: "asdad",
      quantity: 12,
      address: "asmdpamdamd",
      pin: 222222,
      seller: "kandewal"
    },
    {
      name: "asdad",
      quantity: 12,
      address: "asmdpamdamd",
      pin: 222222,
      seller: "kandewal"
    },
    {
      name: "asdad",
      quantity: 12,
      address: "asmdpamdamd",
      pin: 222222,
      seller: "kandewal"
    }
  ]
];

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})
export class OrdersComponent implements OnInit {
  @ViewChild("tableOngoing", { static: true }) tableOngoing;
  @ViewChild("tableApprove", { static: true }) tableApprove;
  @ViewChild("tableDispatch", { static: true }) tableDispatch;

  displayedColumns: string[] = ["name", "quantity", "address", "pin"];
  displayedColumns2: string[] = [
    "name",
    "quantity",
    "address",
    "pin",
    "seller"
  ];
  displayedColumns1: string[] = [
    "name",
    "quantity",
    "address",
    "pin",
    "seller"
  ];
  dataSource = [];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 3; i++) {
      this.dataSource[i] = new MatTableDataSource(ELEMENT_DATA[i]);
    }
  }
}
