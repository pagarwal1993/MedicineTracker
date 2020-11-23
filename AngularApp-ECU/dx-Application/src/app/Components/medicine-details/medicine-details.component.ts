import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../../Models/Medicine.Model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataService } from '../../Services/Data.service';

@Component({
  selector: 'medicine-details',
  templateUrl: './medicine-details.component.html',
  providers: [DataService]
})
export class MedicineDetailsComponent implements OnInit {
  pageHeader: string = "Medicine Details";
  medicine: Medicine = new Medicine();
  modalRef: BsModalRef;
  constructor(private route: ActivatedRoute,
    private modalService: BsModalService,
    private service: DataService, private router: Router) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get("name")) {
      this.medicine.name = this.route.snapshot.paramMap.get("name");
      this.medicine.brand = this.route.snapshot.paramMap.get("brand");
      this.medicine.notes = this.route.snapshot.paramMap.get("notes");
      this.medicine.expiryDate = this.route.snapshot.paramMap.get("expiryDate") as unknown as Date;
      this.medicine.price = this.route.snapshot.paramMap.get("price");
      this.medicine.quantity = this.route.snapshot.paramMap.get("quantity") as unknown as number;
    }
  }

  onEdit(template: TemplateRef<any>) {
   this.modalRef = this.modalService.show(template);
  }

  updateNotes() {
    this.service.updateNotes(this.medicine).subscribe(data => {
      this.modalRef.hide();
      this.medicine.isCallbackRequest = true;
      this.router.navigate(['/search-medicine', this.medicine]);
    });
  }

  cancelUpdate() {
    this.modalRef.hide();
    this.medicine.isCallbackRequest = true;
    this.router.navigate(['/search-medicine', this.medicine]);
  }
}
