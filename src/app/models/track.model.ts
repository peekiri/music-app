export class Track {
    private songName: string;
    private genre: string;
    private imagePath: string;

    constructor(songName: string, genre: string, imagePath: string) {
        this.songName = songName;
        this.genre = genre;
        this.imagePath = imagePath;
    }
}