import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormsService } from '../../services/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
   selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css',
})
export class DynamicForm implements OnInit {

  formGuid = '';
  userGuid = '';
  schema: any;
  dynamicForm!: FormGroup;

  constructor(
    private formsService: FormsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.formsService.getForm(id).subscribe(response => {
      this.formGuid = response.formGuid;
      this.userGuid = response.userGuid;
      this.schema = JSON.parse(response.formSchema);

      this.buildForm();
    });
  }

buildForm() {

    let group:any = {};

    this.schema.fields
        .forEach((field:any)=>{

          group[field.id] =
            new FormControl('');
    });

    this.dynamicForm =
          new FormGroup(group);
}

submit() {

 const answers =
    Object.keys(
      this.dynamicForm.value)
      .map(key => {

        return {

          fieldId:key,

          answer:
            this.dynamicForm.value[key]
        };
      });

 const payload = {

    formGuid:this.formGuid,

    answers:answers
 };

 this.formsService
     .submitForm(payload)
     .subscribe(()=>{

        this.router.navigate(
            ['/success']);
     });
}
}