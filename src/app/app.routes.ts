import { Routes } from '@angular/router';
import { FormsList } from './pages/forms-list/forms-list';
import { DynamicForm } from './pages/dynamic-form/dynamic-form';
import { SubmissionSuccess } from './pages/submission-success/submission-success';
import { ShowSubmittedForms } from './pages/show-submitted-forms/show-submitted-forms';
export const routes: Routes = [

  {
    path: '',
    component: FormsList
  },

  
  {
    path: 'submittedforms',
    component: ShowSubmittedForms
  },

  {
    path: 'form/:id',
    component: DynamicForm
  },

  {
    path: 'success',
    component: SubmissionSuccess
  }
];