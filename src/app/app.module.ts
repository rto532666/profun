import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2OdometerModule } from 'ng2-odometer';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgwWowModule } from 'ngx-wow';

import {  ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IconsModule } from './icons/icons.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { FunfactComponent } from './funfact/funfact.component';
import { WorksComponent } from './home/works/works.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { PartnerComponent } from './partner/partner.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturesDetailsComponent } from './features-details/features-details.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ServicesComponent } from './services/services.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { HomeTeamComponent } from './home/home-team/home-team.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DevelopersComponent } from './developers/developers.component';
import { WebHostingComponent } from './web-hosting/web-hosting.component';
import { CustomerFeedbackComponent } from './web-hosting/customer-feedback/customer-feedback.component';
import { RepairComponent } from './repair/repair.component';
import { RepairPartnerComponent } from './repair/repair-partner/repair-partner.component';
import { IotComponent } from './iot/iot.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';
import { MachineLearningHome2Component } from './machine-learning-home2/machine-learning-home2.component';
import { DigitalAgencyComponent } from './digital-agency/digital-agency.component';
import { HeaderStyleTwoComponent } from './header-style-two/header-style-two.component';
import { HeaderStyleThreeComponent } from './header-style-three/header-style-three.component';
import { TensorboardComponent } from './tensorboard/tensorboard.component';
import { TbComponent } from './tb/tb.component';
import { Tensorboard3Component } from './tensorboard3/tensorboard3.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TeamComponent,
    FunfactComponent,
    WorksComponent,
    FeedbackComponent,
    PartnerComponent,
    AboutComponent,
    FeaturesComponent,
    FeaturesDetailsComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    HomeTeamComponent,
    BlogComponent,
    BlogDetailsComponent,
    ContactComponent,
    PricingComponent,
    FaqComponent,
    ComingSoonComponent,
    NotFoundComponent,
    DevelopersComponent,
    WebHostingComponent,
    CustomerFeedbackComponent,
    RepairComponent,
    RepairPartnerComponent,
    IotComponent,
    MachineLearningComponent,
    MachineLearningHome2Component,
    DigitalAgencyComponent,
    HeaderStyleTwoComponent,
    HeaderStyleThreeComponent,
    TensorboardComponent,
    TbComponent,
    Tensorboard3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    BrowserAnimationsModule,
    CarouselModule,
    Ng2OdometerModule.forRoot(),
    SlickCarouselModule, NgwWowModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
