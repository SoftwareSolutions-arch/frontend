import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // Updated import
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    
  }
  // Calendar Configuration
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'Present', date: '2023-09-15', color: '#28a745' },
      { title: 'Absent', date: '2023-09-16', color: '#dc3545' },
      { title: 'Late', date: '2023-09-17', color: '#ffc107' }
    ]
  };

  // Sample Data
  months = ['January', 'February', 'March', 'April', 'May', 'June', 
           'July', 'August', 'September', 'October', 'November', 'December'];
  classes = ['Class 1', 'Class 2', 'Class 3'];
  students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' }
  ];
  
  selectedMonth = 'September';
  selectedClass = 'Class 1';
  selectedStudent = 1;
  selectedDate: Date = new Date();
  
  presentCount = 25;
  absentCount = 2;
  lateCount = 3;

  handleDateClick(arg: any) {
    // this.selectedDate = arg.date;
    // const modal = new bootstrap.Modal(document.getElementById('attendanceModal'));
    // modal.show();
  }
}
