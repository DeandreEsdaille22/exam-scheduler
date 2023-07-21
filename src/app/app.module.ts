import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';

//Start angular material components
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NotificationsComponent } from './notifications/notifications.component';
//End angular material components

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent,
    ScheduleComponent,
    AssessmentComponent,
    DashboardComponent,
    StudentComponent,
    LecturerComponent,
    AdminComponent,
    MenuComponent,
    NotificationsComponent
  ],
  imports: [
    MatCheckboxModule,
    MatListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }