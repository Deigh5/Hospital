import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HospitalService } from '../Service/hospital.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {

  did
  appointmentszzz

  constructor(public route: ActivatedRoute, public hospiService:HospitalService) 
  { 
    this.appointmentszzz = hospiService.getAppointment()
  }

  addAppointment(PID, Adate, Areason, did)
  {
    this.appointmentszzz = this.hospiService.addAppointment(PID, Adate, Areason, did)
  }

  // deleteAppointment(appointment)  
  // {
  //   this.hospiService.deleteAppointment(appointment)
  // }

  editAppointment(appointment)  {
    this.hospiService.editAppointment(appointment)
  }

  viewAppointment(did)
  {
    this.hospiService.viewAppointment(did)
  }

  ngOnInit() 
  {
    this.route.paramMap.subscribe(params => { this.did = params.get('did')
    this.appointmentszzz = this.hospiService.viewAppointment(this.did)
  })
  }

}
