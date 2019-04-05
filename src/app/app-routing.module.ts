import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { DemographicsPageComponent } from './demographics-page/demographics-page.component';
import { ConsentPageComponent } from './consent-page/consent-page.component';

const routes: Routes = [
	{ path: 'demographics', component: DemographicsPageComponent},
	{ path: 'survey', component: SurveyPageComponent},
	{ path: '', component: ConsentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
