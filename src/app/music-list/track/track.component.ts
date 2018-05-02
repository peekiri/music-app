import { Component, OnInit, OnDestroy } from '@angular/core';
import { MusicService } from '../music.service';
import { Track } from '../../models/track.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit, OnDestroy {
  tracks : Track[];
  subscription : Subscription;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.musicService.getMusicAlbumList();
    this.subscription = this.musicService.musicTrackListChange
      .subscribe(
          ()=>{
            this.tracks = this.musicService.getTrackList();
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
