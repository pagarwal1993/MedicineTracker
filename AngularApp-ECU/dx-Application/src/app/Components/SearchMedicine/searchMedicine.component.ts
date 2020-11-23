import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/Data.service';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from '../../Models/Medicine.Model';

@Component({
  selector: 'search-medicine',
  templateUrl: 'searchMedicine.component.html',
  styleUrls: ['searchMedicine.component.css'],
  providers: [DataService]
})

export class SearchMedicineComponent implements OnInit {
  dataSource: Medicine[];
  pageHeader: string = "Search Medicine";
  service: DataService;
  medicneName: string;
  medicineData: Medicine[];

  constructor(service: DataService, private route: ActivatedRoute) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getMedicines().subscribe(data => {
      this.medicineData = data
      if (this.route.snapshot.paramMap.get("isCallbackRequest") === "true") {
        this.displayAddedMedicine();
      };
    });
  }

  getMedicines() {
    this.dataSource = this.medicineData.filter(t => t.name === this.medicneName);
  }

  onContentReady(e) {
    var header = e.element.getElementsByClassName("dx-header-row")[0];
    header.style.color = 'black';
    header.style.backgroundColor = '#f5f5f5';
    header.style.fontWeight = 500;
  }

  onInitNewRow(e) {
    if (e.rowType == "data") {
      if (e.key["quantity"] < 10)
        e.rowElement.style.backgroundColor = "yellow";
      if (e.key["isExpiryThresholdReached"])
        e.rowElement.style.backgroundColor = "red";
    }
  }

  displayAddedMedicine() {

    var record = new Medicine();
    record.name = this.route.snapshot.paramMap.get("name");
    record.brand = this.route.snapshot.paramMap.get("brand");
    record.notes = this.route.snapshot.paramMap.get("notes");
    record.expiryDate = this.route.snapshot.paramMap.get("expiryDate") as unknown as Date;
    record.price = this.route.snapshot.paramMap.get("price");
    record.quantity = this.route.snapshot.paramMap.get("quantity") as unknown as number;

    if (this.medicineData.filter(t => t.name === record.name).length > 0) {
      this.medicineData.filter(t => t.name === record.name)[0].notes = record.notes;
    }
    else
      this.medicineData.push(record);

    this.medicneName = record.name;
    this.getMedicines();
  }
}
