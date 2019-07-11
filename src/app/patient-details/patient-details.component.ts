import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HospitalService } from '../Service/hospital.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  id
  patientszzz

  constructor(public route: ActivatedRoute, public hosService:HospitalService) 
  { 
    this.patientszzz = this.hosService.getInfo()
  }

  deletePatient(patient)
  {
    this.hosService.deletePatient(patient)
  }

  editPatient(patient)
  {
    this.hosService.editPatient(patient)
  }

  viewPatient(id)
  {
    this.hosService.viewPatient(id)
  }

  ngOnInit() 
  {
    this.route.paramMap.subscribe(params => { this.id = params.get('id')
    this.patientszzz = this.hosService.viewPatient(this.id)
  })
  }

}
