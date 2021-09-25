import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  constructor(private http:HttpClient) { }
  
  messageservice (a:any){
    let url="https://api.halfpricebazar.com/v1/contact-uses"
    return this.http.post<any>(url,a)
  }
}
