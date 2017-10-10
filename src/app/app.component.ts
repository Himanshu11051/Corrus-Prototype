import { Component, Input } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
currentURL='';
  constructor(
    private router: Router,
  ) { 
  router.events.subscribe(event => {
    if (event instanceof NavigationEnd ) {
      console.log("current url",event.url); 
      this.currentURL= event.url;
    }
  });
}
  showUserProfileDropdownFlag = false;
  showWorkspaceDropdown = false;
  hideAllDropdowns(){
    this.showUserProfileDropdownFlag = false;
    this.showWorkspaceDropdown = false;
  }
  gotoDashboard(){
    this.router.navigateByUrl('/');
  };
  gotoCaseCreation(){
    this.router.navigateByUrl('/createcase');
  }
  backToCaseFileDashboard(){
    this.router.navigateByUrl('/casefile');
  }
  
}
