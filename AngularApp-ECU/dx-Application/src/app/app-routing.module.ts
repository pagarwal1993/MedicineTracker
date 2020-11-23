import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineDetailsComponent } from './Components/medicine-details/medicine-details.component';
import { SearchMedicineComponent } from './Components/SearchMedicine/searchMedicine.component';
import { AddMedicineComponent } from './Components/add-medicine/add-medicine.component';

const routes: Routes = [
  { path: '', redirectTo: '/search-medicine', pathMatch: 'full' },
  { path: 'search-medicine', component: SearchMedicineComponent },
  { path: 'medicine-details', component: MedicineDetailsComponent },
  { path: 'add-medicine', component: AddMedicineComponent },
  { path: 'default', component: AddMedicineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
