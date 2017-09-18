import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
  ) { }
  showUserProfileDropdownFlag = false;

  gotoDashboard(){
    this.router.navigateByUrl('/');
  };
  gotoCaseCreation(){
    this.router.navigateByUrl('/createcase');
  }
  sampleChildData : string;
}
