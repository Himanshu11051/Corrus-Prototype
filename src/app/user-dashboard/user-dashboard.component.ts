import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  @Output('childData') outgoingData= new EventEmitter<string>();
  childSampleData :string = "Some child Data";

  constructor(
    private router: Router,
  ) { 

  }
	public sendData(data:any){
		this.outgoingData.emit(data);
	}
  ngOnInit() {
    
  }
  // title = "Welcome to your Dashboard - All your cases will be displayed here search"
  // headerTitle = localStorage.headerTitle;
  gotoCaseCreation(){
    this.router.navigateByUrl('/createcase');
  }
}
