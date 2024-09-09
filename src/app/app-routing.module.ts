import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './company/aboutus/aboutus.component';
import { MissionvisionComponent } from './company/missionvision/missionvision.component';
import { WhychooseusComponent } from './company/whychooseus/whychooseus.component';
import { CustomsclearanceComponent } from './services/customsclearance/customsclearance.component';
import { FcllcldeliveryComponent } from './services/fcllcldelivery/fcllcldelivery.component';
import { WarehousingComponent } from './services/warehousing/warehousing.component';
import { InterstatetransportationComponent } from './services/interstatetransportation/interstatetransportation.component';
import { ContainermodificationsComponent } from './services/containermodifications/containermodifications.component';
import { ContainersalesComponent } from './services/containersales/containersales.component';
import { IntlcontainertradingComponent } from './services/intlcontainertrading/intlcontainertrading.component';
import { ConsultingComponent } from './services/consulting/consulting.component';
import { UsefullinksComponent } from './services/usefullinks/usefullinks.component';
import { FreightforwardingComponent } from './services/freightforwarding/freightforwarding.component';
import { BookingComponent } from './booking/booking.component';
import { ServicesComponent } from './services/services/services.component';
import { CompanyComponent } from './company/company.component';
import { MartComponent } from './mart/mart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'company',
    component: CompanyComponent,
    children: [
      { path: 'about-us', component: AboutusComponent },
      { path: 'mission-vision', component: MissionvisionComponent },
      { path: 'why-choose-us', component: WhychooseusComponent },
    ]
  },
  {
    path: 'services',
    component: ServicesComponent,
    children: [
      { path: 'freight-forwarding', component: FreightforwardingComponent },
      { path: 'customs-clearance', component: CustomsclearanceComponent },
      { path: 'fcl-lcl-delivery', component: FcllcldeliveryComponent },
      { path: 'warehousing', component: WarehousingComponent },
      { path: 'interstate-transportation', component: InterstatetransportationComponent },
      { path: 'container-modifications', component: ContainermodificationsComponent },
      { path: 'container-sales', component: ContainersalesComponent },
      { path: 'intl-container-trading', component: IntlcontainertradingComponent },
      { path: 'consulting', component: ConsultingComponent },
      { path: 'usefullinks', component: UsefullinksComponent }
    ]
  },
  { path: 'booking', component: BookingComponent },
  { path: 'mart', component: MartComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
