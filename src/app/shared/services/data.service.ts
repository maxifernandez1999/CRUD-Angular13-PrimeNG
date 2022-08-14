//@angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//classes
import { Data } from 'src/app/core/models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>('../../../../assets/json/data.json')
  }
}
