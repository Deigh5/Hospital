import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../Service/hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctorz
  did

  constructor(public hospitalService:HospitalService, public route:ActivatedRoute) 
  { 
    this.doctorz = this.hospitalService.getAppointment()
    // this.doctorz = this.hospitalService.viewAppointment(this.did)
  }

  addDoctor(DID, Dname, Dsurname, Dspecialization)
  {
    this.hospitalService.addDoctor(DID, Dname, Dsurname, Dspecialization)
    this.doctorz = this.hospitalService.viewDoctor(this.did)
  }

  deleteDoctor(doctor)
  {
    this.hospitalService.deleteDoctor(doctor)
    this.doctorz = this.hospitalService.deleteDoctor(doctor)
  }

  editDoctor(doctor)
  {
    this.hospitalService.editDoctor(doctor)
  } 

  ngOnInit() 
  {
    this.route.paramMap.subscribe(params => {this.did = params.get('did')
    this.doctorz = this.hospitalService.viewDoctor(this.did)
  })
  }
}
