import { Injectable } from '@angular/core';
//import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MediaService {

    private collection: AngularFirestoreCollection;

    constructor(private fireStore: AngularFirestore) {
        this.collection = fireStore.collection<any>('test');
    }


    public guessImageBase64MimeType(imageBase64: string) {
        var initChar = imageBase64.charAt(0);
        switch (initChar) {
            case "/":
                return "image/jpg";
            case "i":
                return "image/png";
            case "R":
                return "image/gif";
            case "U":
                return "image/webp";
            case "T":
                return "image/tif";
            default:
                return "image/png";
        }
    }
    public guessAudioBase64MimeType(imageBase64: string) {
        var initChar = imageBase64.charAt(0);
        switch (initChar) {
            /* case "S":
              return "audio/mp4"; */
            /* case "S":
            return "audio/mpeg"; */
            case "/":
                return "audio/mp3";
            case "U":
                return "audio/wav"
            default:
                return "audio/ogg";
        }
    }


    newUserMedia() {
        this.fireStore.collection('test5').add({ 'asdf': 'Oliver y Lola' });
    }
    newComment() {
        //this.fireStore.collection('test5').add({ 'asdf': 'perrisa' });
    }

}
