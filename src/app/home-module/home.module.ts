import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeRoutes } from './home.routing';
import { HomeService } from './home.service';
import { MenubarComponent } from './menubar/menubar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterStudentModalComponent } from './register-student-modal/register-student-modal.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AttendanceSheetComponent } from './attendance-sheet/attendance-sheet.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenubarComponent,
    RegisterStudentModalComponent,
    AttendanceSheetComponent
  ],
  imports: [
    CommonModule,
    HomeRoutes,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule,
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
