import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-creation',
  templateUrl: './case-creation.component.html',
  styleUrls: ['./case-creation.component.scss']
})
export class CaseCreationComponent implements OnInit {
  
  constructor(private router: Router,) { 
  }

  ngOnInit() {
    var windowHeight = window.innerHeight;
    
  }

  currentStep = 1;
  switchWizardStep(currentStep){
    this.currentStep = currentStep;
  }
  proceedNext(){
    if(this.currentStep != 4){
      this.currentStep = this.currentStep + 1;
      this.switchWizardStep(this.currentStep);
    }
  }
  gotoDashboard(){
    this.router.navigateByUrl('/');
  };
  gotoCaseFile(){
    this.router.navigateByUrl('casefile');
  };
}
