import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';
import { SharedPageHeaderComponent } from './Components/Shared/shared.pageHeader.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchMedicineComponent } from './Components/SearchMedicine/searchMedicine.component';
import { MedicineDetailsComponent } from './Components/medicine-details/medicine-details.component';
import { AddMedicineComponent } from './Components/add-medicine/add-medicine.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DxDataGridModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
  ],
  declarations: [AppComponent, SearchMedicineComponent, SharedPageHeaderComponent, MedicineDetailsComponent, AddMedicineComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule { }
