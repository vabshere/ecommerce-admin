import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { MatPaginator } from "@angular/material";
import { DataService } from "src/app/services/data.service";

var ELEMENT_DATA: any = [{ name: "", brief: "", image: "" }];

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ["name", "brief", "image"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog, private data: DataService) {}

  ngOnInit() {
    this.data.get("getProductCategories").subscribe(res => {
      ELEMENT_DATA = res;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    });
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addSales() {
    const dialogRef = this.dialog.open(AddProductsDialog, {
      data: { name: "", brief: "", image: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data.post("addProductCategories", result).subscribe(
          res => {
            ELEMENT_DATA.push(result);
            this.dataSource = new MatTableDataSource(ELEMENT_DATA);
          },
          err => {
            alert("Failed adding product category.");
          }
        );
      }
    });
  }

  ngOnChanges() {
    this.dataSource ? (this.dataSource.paginator = this.paginator) : "";
  }
}

@Component({
  selector: "add-products-dialog",
  templateUrl: "add-products-dialog.html"
})
export class AddProductsDialog {
  img;

  constructor(
    public dialogRef: MatDialogRef<AddProductsDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error("Cannot use multiple files");
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      this.img = e.target.result;
      this.data.image = this.img;
    };
    reader.readAsDataURL(evt.target.files[0]);
  }
}
