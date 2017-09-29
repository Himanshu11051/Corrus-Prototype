import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-file',
  templateUrl: './case-file.component.html',
  styleUrls: ['./case-file.component.scss']
})
export class CaseFileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  currentTab = 'OVERVIEW';
  switchTab(currentTab){
    this.currentTab = currentTab;
  };
  showComposer = true;
  showTaskList = false;
  composerToggleText = 'Hide Composer';
  composerToggleBtnIcon = 'remove';
  toggelTaskComposer(){
    this.showComposer = ! this.showComposer;
    if(this.showComposer){
      this.composerToggleText = 'Hide Composer';
      this.composerToggleBtnIcon = 'remove';
    }
    else{
      this.composerToggleText = 'Show Composer';
      this.composerToggleBtnIcon = 'add';
    }
  };
}
