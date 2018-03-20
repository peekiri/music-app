import { Track } from "./track.model";

export class Album {
    private albumName: string;
    private singerName: string;
    private year: number;
    private tracks: Track[];
    private imagePath: string;

    constructor(albumName: string, singerName: string, year: number, tracks: Track[], imagePath: string) {
        this.albumName = albumName;
        this.singerName = singerName;
        this.year = year;
        this.tracks = tracks;
        this.imagePath = imagePath;
    }
}