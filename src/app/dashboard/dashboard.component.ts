import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music-list/music.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    // this.musicService.getMusicAlbumList();
  }

}
