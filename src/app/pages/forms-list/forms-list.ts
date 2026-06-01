import { Component } from '@angular/core';
import { Form } from '../../Models/Form';
import { FormsService } from '../../services/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-forms-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule
  ],
  templateUrl: './forms-list.html',
  styleUrl: './forms-list.css',
})
export class FormsList {
forms:Form[] = [];
constructor(private formsService: FormsService) {}
ngOnInit() {
  this.formsService
      .getForms()
      .subscribe(data => {

          this.forms = data;
      });
}
}
