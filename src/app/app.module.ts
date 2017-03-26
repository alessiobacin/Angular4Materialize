import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RestrictedAreaComponent } from './components/restrictedarea/restrictedarea.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomerSupportChatComponent } from './components/customer-support-chat/customer-support-chat.component';
import { SupportPageComponent } from './components/support-page/support-page.component';
import { AttendantSupportChatComponent } from './components/attendant-support-chat/attendant-support-chat.component';
import { ServicesComponent } from './components/services/services.component';
import { HaccpComponent } from './components/haccp/haccp.component';
import { WorkSecurityComponent } from './components/work-security/work-security.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { FireSecurityComponent } from './components/fire-security/fire-security.component';

//materialize
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import 'hammerjs';

//services
import { QuerydbService } from './services/querydb.service';
import { AuthGuard } from './services/app.authguard';
import { InfosFromIpService } from './services/infos-from-ip.service';

//pipes
import { FilterPipe } from './pipes/filter.pipe';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { FooterComponent } from './components/footer/footer.component';
export const firebaseConfig = {
    apiKey: "AIzaSyAUVaQbDZzQUE4x8Kz3qNcSp6fddVS9lcs",
    authDomain: "newproject-e1b95.firebaseapp.com",
    databaseURL: "https://newproject-e1b95.firebaseio.com",
    storageBucket: "newproject-e1b95.appspot.com",
    messagingSenderId: "525749201321"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RestrictedAreaComponent,
    HomeComponent,
    FilterPipe,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    ContactsComponent,
    CustomerSupportChatComponent,
    SupportPageComponent,
    AttendantSupportChatComponent,
    HaccpComponent,
    WorkSecurityComponent,
    MedicineComponent,
    FireSecurityComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDXqB6vK_9CUYmqMfXAMhdRNSRXeSEDdlA'})
  ],
  providers: [AuthGuard, QuerydbService, InfosFromIpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
