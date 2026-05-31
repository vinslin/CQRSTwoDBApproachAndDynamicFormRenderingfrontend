import { Routes } from '@angular/router';
import { FormsList } from './pages/forms-list/forms-list';
import { DynamicForm } from './pages/dynamic-form/dynamic-form';
import { SubmissionSuccess } from './pages/submission-success/submission-success';
export const routes: Routes = [

  {
    path: '',
    component: FormsList
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