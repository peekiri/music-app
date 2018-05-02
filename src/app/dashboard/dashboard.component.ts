import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music-list/music.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hideButton: boolean = false;

  constructor(private musicService: MusicService,private router: Router, 
      private route: ActivatedRoute) { 
        console.log(this.route.snapshot.url[0].path);
      }

  ngOnInit() {
  }

  navigateToDashboard() {
    this.hideButton = true;
    this.router.navigate(['album'], {relativeTo: this.route});
  }

}
