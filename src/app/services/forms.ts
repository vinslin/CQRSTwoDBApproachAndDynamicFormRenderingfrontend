import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '../Models/Form';
import { OpenFormResponse } from '../Models/open-form-response';
import { SubmittedForms } from '../Models/SubmittedForms';

@Injectable({
  providedIn:'root'
})
export class FormsService {

  private api =
    'https://localhost:7014/api/forms';

  constructor(private http:HttpClient){}

  getForms() {
      return this.http.get<Form[]>(this.api);
  }

  getSubmittedForms(){
    return this.http.get<SubmittedForms[]>(`${this.api}/getsubmitted`);
  }

  submittedForms(formGuid:string){
    return this.http.get<SubmittedForms[]>(`${this.api}/submitted/${formGuid}`);
  }

  

  getForm(id:number) {
      return this.http.get<OpenFormResponse>(
        `${this.api}/${id}`);
  }

  submitForm(payload:any) {
      return this.http.post(
          `${this.api}/submit`,
          payload);
  }
}
