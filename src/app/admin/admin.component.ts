import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../Service/hospital.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  patientszzz

  constructor( public hospService:HospitalService) 
  { 
    this.patientszzz = this.hospService.getInfo()
  }

  addPatient(PID, Pname, Psurname, Pgender, Pnumber, Paddress, Pcity, Pstate, Precord)
  {
    this.hospService.addPatient(PID, Pname, Psurname, Pgender, Pnumber, Paddress, Pcity, Pstate, Precord)
  }

  deletePatient(patient)
  {
    this.hospService.deletePatient(patient)
  }

  editPatient(patient)
  {
    this.hospService.editPatient(patient)
  }

  // viewPatient(id)
  // {
  //   this.hospService.viewPatient(id)
  // }

  ngOnInit() {
  }

}
