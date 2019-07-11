// import {PatientDetails} from '../patient-details/patient-details.component'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  patients = []
  appointments = []
  doctors = [{did:"01", dname:"Thando",dsurname: "Mkula", dspecialization: "Dermatology"},
             {did:"02", dname:"Thabo",dsurname: "Ramasia", dspecialization: "Gynecology"}]


  //listPatient
  blank = true

  PID: string
  Pname: string
  Psurname: string
  Pgender: string
  Pnumber: string
  Paddress: string
  Pcity: string 
  Pstate: string
  Precord: string

  Adate
  Areason: string
  //Adoctor: string
  DID: string

  Dname: string
  Dsurname: string
  Dspecialization: string


  constructor() { }

  addPatient(PID, Pname, Psurname, Pgender, Pnumber, Paddress, Pcity, Pstate, Precord)
  {
    this.patients.push({id:PID, name:Pname, surname:Psurname, gender:Pgender, number:Pnumber, address:Paddress, city:Pcity, state:Pstate, record:Precord})
  }

  addAppointment(PID, Adate, Areason, DID)
  {
    this.appointments.push({id:PID, date:Adate, reason:Areason, did:DID})
  }

  addDoctor(DID, Dname, Dsurname, Dspecialization)
  {
    this.doctors.push({did:DID, dname:Dname, dsurname:Dsurname, dspecialization:Dspecialization})
  }

  deletePatient(patient)
  {
    let index = this.patients.indexOf(patient)
    this.patients.splice(index,1)

    if(this.patients.length <= 0)
    {

    }
  }

  deleteAppointment(appointment)
  {
    let index = this.appointments.indexOf(appointment)
    this.appointments.splice(index,1)

    if(this.appointments.length <= 0)
    {
      this.blank = true
    }
  }

  deleteDoctor(doctor)
  {
    let index = this.doctors.indexOf(doctor)
    this.doctors.splice(index,1)

    if(this.doctors.length <= 0)
    {
      
    }
  }

  editPatient(patient)
  {
    let index = this.patients.indexOf(patient)
    let nPID = prompt("Edit ID:", patient.id)
    //let nPname = prompt("Edit Name:", patient.name) 
    let nPsurname = prompt("Edit Surname:", patient.surname) 
    let nPgender = prompt("Edit Gender:", patient.gender)
    let nPnumber = prompt("Edit Phone Number:", patient.number) 
    let nPaddress = prompt("Edit Address:", patient.address) 
    let nPcity = prompt("Edit City:", patient.city) 
    let nPstate = prompt("Edit State:", patient.state)
    let nPrecord = prompt("Edit Record:", patient.record)

    if(nPID != null  || nPsurname != null || nPgender != null  || nPnumber != null || nPaddress != null || nPcity != null || nPstate != null || nPrecord != null)
    {
      this.patients[index].id = nPID
      //this.patients[index].name = nPname
      this.patients[index].surname = nPsurname
      this.patients[index].gender = nPgender
      this.patients[index].number = nPnumber
      this.patients[index].address = nPaddress
      this.patients[index].city = nPcity
      this.patients[index].state = nPstate
      this.patients[index].record = nPrecord
    }
  }

  editAppointment(appointment)
  {
    let index = this.appointments.indexOf(appointment)
    let nAdate = prompt("Edit Date:", appointment.date)

    if(nAdate != null)
    {
      this.appointments[index].date = nAdate
    }
  }

  editDoctor(doctor)
  {
    let index = this.doctors.indexOf(doctor)
    let nDsurname = prompt("Edit Surname:", doctor.dsurname)
    let nDspecialization = prompt("Edit Specialization:", doctor.dspecialization)

    if(nDsurname != null || nDspecialization != null)
    {
      this.doctors[index].dsurname = nDsurname
      this.doctors[index].dspecialization = nDspecialization
    }
  }

  viewPatient(id)
  {
    let selectedPatient = []

    this.patients.forEach(patient => 
      {
        if(patient.id == id)
        {
          selectedPatient = patient
        }
      })

      return selectedPatient
  }

  viewAppointment(id)
  {
   
   let selectedAppointment = []
    this.appointments.forEach(appointment =>
      {
        if(appointment.id == id)
        {
          selectedAppointment.push(appointment)
        }
      })

      return selectedAppointment

  }


  viewDoctor(did)
  {
    let selectedDoctor = []
    this.doctors.forEach(doctor =>
      {
        if(doctor.did == did)
        {
          selectedDoctor.push(doctor)
        }
      })

      return selectedDoctor
  }

  getInfo()
  {
    return this.patients
  }

  getAppointment()
  {
    return this.appointments
  }

  getDoctor()
  {
    return this.doctors
  }
}
