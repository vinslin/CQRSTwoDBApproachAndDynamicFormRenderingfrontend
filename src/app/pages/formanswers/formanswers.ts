import { Component } from '@angular/core';

@Component({
  selector: 'app-formanswers',
  imports: [],
  templateUrl: './formanswers.html',
  styleUrl: './formanswers.css',
})
export class Formanswers {
   forms:SubmittedForms[] = [];
    constructor(private formsService: FormsService) {}
    ngOnInit() {
      this.formsService
          .submittedForms()
          .subscribe((data: SubmittedForms[]) => {
            debugger;
              this.forms = data;
          });
    }
}
