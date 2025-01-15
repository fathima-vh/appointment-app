import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {

  appointments: Appointment[] =[];

  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  addAppointment(){
    if(this.newAppointmentTitle.length && this.newAppointmentDate){
      let newAppointment : Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);
    }
    this.newAppointmentTitle = '';
    this.newAppointmentDate = new Date();
  }
  deleteAppointment(index:number){
    
  }
}
