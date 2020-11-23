import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineDetailsComponent } from './Components/medicine-details/medicine-details.component';
import { SearchMedicineComponent } from './Components/SearchMedicine/searchMedicine.component';
import { AddMedicineComponent } from './Components/add-medicine/add-medicine.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/search-medicine', pathMatch: 'full' },
  { path: 'search-medicine', component: SearchMedicineComponent },
  { path: 'medicine-details', component: MedicineDetailsComponent },
  { path: 'add-medicine', component: AddMedicineComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
