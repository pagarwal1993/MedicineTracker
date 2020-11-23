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
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'middle',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 2
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DxDataGridModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    NotifierModule.withConfig(customNotifierOptions)
  ],
  declarations: [AppComponent, SearchMedicineComponent, SharedPageHeaderComponent, MedicineDetailsComponent, AddMedicineComponent, NotFoundComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule { }

