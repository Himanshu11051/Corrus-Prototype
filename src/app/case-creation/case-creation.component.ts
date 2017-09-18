import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-creation',
  templateUrl: './case-creation.component.html',
  styleUrls: ['./case-creation.component.scss']
})
export class CaseCreationComponent implements OnInit {
  
  constructor() { 
  }

  ngOnInit() {
  }

  currentStep = 1;
  switchWizardStep(currentStep){
    this.currentStep = currentStep;
  }
}
