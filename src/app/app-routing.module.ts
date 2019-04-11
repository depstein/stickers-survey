import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { DemographicsPageComponent } from './demographics-page/demographics-page.component';
import { ConsentPageComponent } from './consent-page/consent-page.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';
import { SorryPageComponent } from './sorry-page/sorry-page.component';
import { InstructionsPageComponent } from './instructions-page/instructions-page.component';

const routes: Routes = [
	{ path: 'demographics', component: DemographicsPageComponent},
	{ path: 'survey', component: SurveyPageComponent},
	{ path: 'thanks', component: ThanksPageComponent},
	{ path: 'sorry', component: SorryPageComponent},
	{ path: 'instructions', component: InstructionsPageComponent},
	{ path: '', component: ConsentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
