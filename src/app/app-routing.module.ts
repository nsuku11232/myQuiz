import { ResultComponent } from './result/result.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const Myroutes: Routes = [
  {path:'register', component: RegisterComponent},
  {path:'quiz', component: QuizComponent},
  {path:'result', component: ResultComponent},
  {path:'', redirectTo:'/register', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(Myroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
