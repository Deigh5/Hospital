import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';

const routes: Routes = [
  {path:'Admin', component:AdminComponent},
  {path: 'Appointment/:id', component:AppointmentComponent},
  {path:'Doctor/:did', component:DoctorComponent},
  {path:'Patient', component:PatientComponent},
  {path: 'PatientDetails/:id', component:PatientDetailsComponent},
  {path: 'AppointmentDetails/:did', component:AppointmentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
