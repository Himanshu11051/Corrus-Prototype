import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CaseCreationComponent } from './case-creation/case-creation.component';
import { CaseFileComponent } from './case-file/case-file.component';
import { ActivityStreamComponent } from './activity-stream/activity-stream.component';
import { TaskComponent } from './task/task.component';
import { CaseFileDashboardComponent } from './case-file-dashboard/case-file-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    CaseCreationComponent,
    CaseFileComponent,
    ActivityStreamComponent,
    TaskComponent,
    CaseFileDashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: UserDashboardComponent
      },
      {
        path: 'dashboard',
        component: UserDashboardComponent
      },
      {
        path: 'createcase',
        component: CaseCreationComponent
      },
      {
        path: 'casefile',
        component: CaseFileComponent,
        children:[
          {
            path: '',
            pathMatch: 'full',
            component: CaseFileDashboardComponent
          },
          { path: 'task',
            component: TaskComponent
          }
        ]
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
