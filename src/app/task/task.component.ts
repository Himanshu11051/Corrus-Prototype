import { Component, OnInit} from '@angular/core';
declare var initializeSlider : any;
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
constructor() {
}
  ngOnInit() {
  }
  ngAfterViewInit(){
    this.initializeBx();
  } 
  currentTab = 'TASKDETAILS';
  switchTab(currentTab){
    this.currentTab = currentTab;
    this.initializeBx();
  };
  initializeBx(){
    new initializeSlider();
  }
}
