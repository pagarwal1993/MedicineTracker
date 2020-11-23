import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { DataService } from '../../Services/Data.service';
import { Medicine } from '../../Models/Medicine.Model';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'add-medicine',
  templateUrl: './add-medicine.component.html',
  providers: [DataService]
})
export class AddMedicineComponent {
  medicineName: string;
  brand: string;
  notes: string;
  quantity: number;
  price: string;
  expiryDate: Date;
  pageHeader: string = "Add Medicine";

  constructor(private router: Router, private service: DataService) { }

  processForm() {
    var medicine = new Medicine();
    medicine.name = this.medicineName;
    medicine.brand = this.brand;
    medicine.price = this.price;
    medicine.quantity = this.quantity;
    medicine.notes = this.notes;
    medicine.expiryDate = this.expiryDate;
    medicine.isCallbackRequest = true;
    this.service.addMedicines(medicine).subscribe(
      response => {
       this.router.navigate(['/search-medicine', medicine]);
      } ,
      (error: Response) => {
        alert(error.text());
      });
  }
}
