import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../Service/hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointmentz
  id

  constructor(public hosService:HospitalService, public route:ActivatedRoute) 
  {
  
    // this.appointmentz=hosService.getAppointment()
  }

  addAppointment(PID, Adate, Areason, Adoctor)
  {
    this.hosService.addAppointment(PID, Adate, Areason, Adoctor)
    this.appointmentz = this.hosService.viewAppointment(this.id)
  }

  deleteAppointment(appointment)
  {
    this.hosService.deleteAppointment(appointment)
    this.appointmentz = this.hosService.deleteAppointment(appointment)
  }

  editAppointment(appointment)
  {
    this.hosService.editAppointment(appointment)
    // this.appointmentz = this.hosService.editAppointment(appointment)
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => { this.id = params.get('id')
    this.appointmentz = this.hosService.viewAppointment(this.id)
    // console.log( this.hosService.getAppointment());
    
  })
}



}
  