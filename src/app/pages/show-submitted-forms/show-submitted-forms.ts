import { Component } from '@angular/core';
import { SubmittedForms } from '../../Models/SubmittedForms';
import { FormsService } from '../../services/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-show-submitted-forms',
  imports: [  CommonModule,
    RouterModule,
    MatCardModule],
  templateUrl: './show-submitted-forms.html',
  styleUrl: './show-submitted-forms.css',
})
export class ShowSubmittedForms {
    forms:SubmittedForms[] = [];
    constructor(private formsService: FormsService) {}
    ngOnInit() {
      this.formsService
          .getSubmittedForms()
          .subscribe((data: SubmittedForms[]) => {
            debugger;
              this.forms = data;
          });
    }
}
