import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AppComponent } from './app.component';
import { RestrictedAreaComponent } from './components/restrictedarea/restrictedarea.component';
import { SupportPageComponent } from './components/support-page/support-page.component';
import { AuthGuard } from './services/app.authguard';
import { HaccpComponent } from './components/haccp/haccp.component';
import { WorkSecurityComponent } from './components/work-security/work-security.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { FireSecurityComponent } from './components/fire-security/fire-security.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'haccp', component: HaccpComponent },
    { path: 'worksecurity', component: WorkSecurityComponent },
    { path: 'medicine', component: MedicineComponent },
    { path: 'firesecurity', component: FireSecurityComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'restrictedarea', component: RestrictedAreaComponent , canActivate: [AuthGuard]},
    { path: 'supportpage', component: SupportPageComponent , canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
