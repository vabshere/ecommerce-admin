import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { MatPaginator } from "@angular/material";
import { DataService } from "src/app/services/data.service";

var ELEMENT_DATA: any = [
  {
    name: "",
    phone: "",
    address: ""
  }
];

@Component({
  selector: "app-sellers",
  templateUrl: "./sellers.component.html",
  styleUrls: ["./sellers.component.css"]
})
export class SellersComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ["name", "phone", "address", "view"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog, private data: DataService) {}

  ngOnInit() {
    this.data.get("getSellers").subscribe(res => {
      ELEMENT_DATA = res;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    });
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addSales() {
    const dialogRef = this.dialog.open(AddSellersDialog, {
      data: {
        name: "",
        phone: "",
        address: "",
        email: "",
        gstin: "",
        pan: "",
        product_category: "",
        attr1: "",
        attr2: "",
        attr3: "",
        gst_img: "",
        pan_img: ""
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data.post("addSeller", result).subscribe(
          res => {
            ELEMENT_DATA.push(result);
            this.dataSource = new MatTableDataSource(ELEMENT_DATA);
          },
          err => {
            alert("Failed adding seller.");
          }
        );
      }
    });
  }

  openView(element) {
    const dialogRef = this.dialog.open(ViewSellersDialog, {
      data: element
    });
  }

  ngOnChanges() {
    this.dataSource ? (this.dataSource.paginator = this.paginator) : "";
  }
}

@Component({
  selector: "add-sellers-dialog",
  templateUrl: "add-sellers-dialog.html"
})
export class AddSellersDialog {
  gst_img = "";
  pan_img = "";

  constructor(
    public dialogRef: MatDialogRef<AddSellersDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileChangeGst(evt: any) {
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error("Cannot use multiple files");
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      this.gst_img = e.target.result;
      this.data.gst_img = this.gst_img;
    };
    reader.readAsDataURL(evt.target.files[0]);
  }

  onFileChangePan(evt: any) {
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error("Cannot use multiple files");
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      this.pan_img = e.target.result;
      this.data.pan_img = this.pan_img;
    };
    reader.readAsDataURL(evt.target.files[0]);
  }
}

@Component({
  selector: "view-sellers-dialog",
  templateUrl: "view-sellers-dialog.html"
})
export class ViewSellersDialog {
  constructor(
    public dialogRef: MatDialogRef<AddSellersDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onClick(): void {
    this.dialogRef.close();
  }
}
