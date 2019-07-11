import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../Service/hospital.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientsz

  PID
  constructor(public hospitalService: HospitalService)
  {
    this.patientsz = this.hospitalService.getInfo()
    
  }

  // addPatient(PID, Pname, Psurname, Pgender, Pnumber, Paddress, Pcity, Pstate, Precord)
  // {
  //   this.hospitalService.addPatient(PID, Pname, Psurname, Pgender, Pnumber, Paddress, Pcity, Pstate, Precord)
  // }

  ngOnInit() {
    
  }

}
