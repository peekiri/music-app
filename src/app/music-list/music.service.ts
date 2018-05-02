import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Subject } from "rxjs/Subject";
import 'rxjs/Rx';

import { Album } from "../models/album.model";
import { Track } from "../models/track.model";

@Injectable()
export class MusicService {
    private trackList : Track[];
    
    musicAlbumListChange = new Subject<Album[]>();
    musicTrackListChange = new Subject<Track[]>();

    constructor(private http : Http){};

    getMusicAlbumList (){
        this.http.get("../../assets/songs.json")
            .map(
                (response: Response) => {
                    const tracks : Track[] = response.json();
                    return tracks;
                }).subscribe(
                    (tracks: Track[]) => {
                        this.setTrackList(tracks["track"]);
                    }
                );
    }

    setTrackList(tracks: Track[]){
        this.trackList = tracks;
        this.musicTrackListChange.next(this.trackList);
    }

    getTrackList(){
        console.log("register is clicked");
        return this.trackList.slice();
    }

}