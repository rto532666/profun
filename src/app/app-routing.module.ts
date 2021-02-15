import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturesDetailsComponent } from './features-details/features-details.component';
import { ServicesComponent } from './services/services.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DevelopersComponent } from './developers/developers.component';
import { WebHostingComponent } from './web-hosting/web-hosting.component';
import { RepairComponent } from './repair/repair.component';
import { IotComponent } from './iot/iot.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';
import { MachineLearningHome2Component } from './machine-learning-home2/machine-learning-home2.component';
import { DigitalAgencyComponent } from './digital-agency/digital-agency.component';
import { TensorboardComponent } from './tensorboard/tensorboard.component';
import { TbComponent } from './tb/tb.component';
import { Tensorboard3Component  } from './tensorboard3/tensorboard3.component';

import {CustomerFeedbackComponent}  from './web-hosting/customer-feedback/customer-feedback.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // for defaault redirecting
  { path: '', component: HomeComponent },
  { path: 'startup', component: HomeComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'web-hosting', component: WebHostingComponent },
  { path: 'repair', component: RepairComponent },
  { path: 'iot', component: IotComponent },
  { path: 'machine-learning', component: MachineLearningComponent },
  { path: 'machine-learning-2', component: MachineLearningHome2Component },
  { path: 'digital-agency', component: DigitalAgencyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'features-details', component: FeaturesDetailsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services-details', component: ServicesDetailsComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'project-details', component: ProjectDetailsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-details', component: BlogDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'tensorboard', component: TensorboardComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'tb', component: TbComponent },
  { path: 'tensorboard3', component: Tensorboard3Component },
  { path:'customer', component: CustomerFeedbackComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
