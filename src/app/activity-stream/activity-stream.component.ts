import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
@Component({
  selector: 'app-activity-stream',
  templateUrl: './activity-stream.component.html',
  styleUrls: ['./activity-stream.component.scss']
})
export class ActivityStreamComponent implements OnInit {
currentURL='';
constructor(private router: Router,) { 
  this.currentURL = router.url;
  console.log('HK'+ this.currentURL);
}

  ngOnInit() {
  }

}
