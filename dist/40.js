"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, album_title, num_tracks) {
    let album = {
        artist: artist,
        album_title: album_title,
    };
    if (num_tracks !== undefined) {
        album.num_tracks = num_tracks;
    }
    return album;
}
// Making three dictionaries representing different albums
let album1 = make_album("Taylor Swift", "Fearless");
let album2 = make_album("Ed Sheeran", "Divide", 16); // Album with number of tracks
let album3 = make_album("Beyonce", "Lemonade");
// Printing each return value to show the album information stored correctly
console.log(album1);
console.log(album2);
console.log(album3);
