import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './home/slider/slider.component';
import { HomeComponent } from './home/home/home.component';
import { AboutusComponent } from './company/aboutus/aboutus.component';
import { MissionvisionComponent } from './company/missionvision/missionvision.component';
import { WhychooseusComponent } from './company/whychooseus/whychooseus.component';
import { FreightforwardingComponent } from './services/freightforwarding/freightforwarding.component';
import { CustomsclearanceComponent } from './services/customsclearance/customsclearance.component';
import { FcllcldeliveryComponent } from './services/fcllcldelivery/fcllcldelivery.component';
import { WarehousingComponent } from './services/warehousing/warehousing.component';
import { InterstatetransportationComponent } from './services/interstatetransportation/interstatetransportation.component';
import { ContainermodificationsComponent } from './services/containermodifications/containermodifications.component';
import { ContainersalesComponent } from './services/containersales/containersales.component';
import { IntlcontainertradingComponent } from './services/intlcontainertrading/intlcontainertrading.component';
import { ConsultingComponent } from './services/consulting/consulting.component';
import { UsefullinksComponent } from './services/usefullinks/usefullinks.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { ServicesComponent } from './services/services/services.component';
import { CompanyComponent } from './company/company.component';
import { MartComponent } from './mart/mart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    AboutusComponent,
    MissionvisionComponent,
    WhychooseusComponent,
    FreightforwardingComponent,
    CustomsclearanceComponent,
    FcllcldeliveryComponent,
    WarehousingComponent,
    InterstatetransportationComponent,
    ContainermodificationsComponent,
    ContainersalesComponent,
    IntlcontainertradingComponent,
    ConsultingComponent,
    UsefullinksComponent,
    ContactComponent,
    BookingComponent,
    ServicesComponent,
    CompanyComponent,
    MartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
