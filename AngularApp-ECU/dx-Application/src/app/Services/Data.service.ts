import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Medicine } from '../Models/Medicine.Model';

@Injectable()
export class DataService {
  baseUrl: string;
  http: HttpClient;
  Medicines: Medicine[];
  constructor(http: HttpClient, @Inject(DOCUMENT) document: Document) {
    this.baseUrl = document.location.origin;
    this.http = http;
  }

  getMedicines(): any {
    this.baseUrl = this.baseUrl + '/api/Medicine/GetMedicines';
    return this.http.get<Medicine[]>(this.baseUrl);
  }

  addMedicines(data: Medicine): any {
    this.baseUrl = this.baseUrl + '/api/Medicine/AddMedicine';
    return this.http.post<Medicine>(this.baseUrl, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  updateNotes(data: Medicine): any {
    this.baseUrl = this.baseUrl + '/api/Medicine/UpdateNotes';
    return this.http.put<Medicine>(this.baseUrl, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
}
