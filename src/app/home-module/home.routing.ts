import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AttendanceSheetComponent } from './attendance-sheet/attendance-sheet.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'attendance-sheet', component: AttendanceSheetComponent }
];

export const HomeRoutes = RouterModule.forChild(routes);
