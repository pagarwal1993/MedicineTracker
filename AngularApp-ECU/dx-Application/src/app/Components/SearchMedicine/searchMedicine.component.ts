import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/Data.service';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from '../../Models/Medicine.Model';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'search-medicine',
  templateUrl: 'searchMedicine.component.html',
  styleUrls: ['searchMedicine.component.css'],
  providers: [DataService, NotifierService]
})

export class SearchMedicineComponent implements OnInit {
  dataSource: Medicine[];
  pageHeader: string = "Search Medicine";
  service: DataService;
  medicneName: string;
  medicineData: Medicine[];
  private notifier: NotifierService;

  constructor(service: DataService, private route: ActivatedRoute, notifier: NotifierService) {
    this.service = service;
    this.notifier = notifier;
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
    this.dataSource = this.medicineData.filter(t => t.name.toLowerCase() === this.medicneName.toLowerCase());
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
      var validationMessages = JSON.parse(this.route.snapshot.paramMap.get("validationMessages"));
      var errors = validationMessages.filter(x => x.type == "Error")
      if (errors.length > 0) {
        this.showNotification("error", errors[0].message);
        return;
    }
    var warninngs = validationMessages.filter(x => x.type == "Warning");
      if (warninngs.length > 0) {
        console.log(warninngs);
        this.showNotification("warning", warninngs[0].message);
      }

    this.medicneName = this.route.snapshot.paramMap.get("name");
    this.getMedicines();
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }
}
