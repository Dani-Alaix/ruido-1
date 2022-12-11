import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Media } from '../models/media';
import { UserMedia } from '../models/user-media';

import * as firebase from "firebase/app";
import { arrayUnion } from '@angular/fire/firestore'


@Injectable({
    providedIn: 'root'
})
export class MediaService {

    private collection: AngularFirestoreCollection;
    private usersCollection: AngularFirestoreCollection;

    private document: AngularFirestoreDocument;

    constructor(private fireStore: AngularFirestore) {
        this.collection = fireStore.collection<any>('test');
        this.usersCollection = fireStore.collection<any>('userGallery');
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


    newUserMedia(data: UserMedia) {
        this.fireStore.collection('userGallery').add(data);
    }
    getUsersGallery(): Observable<any> {
        return this.usersCollection.snapshotChanges().pipe(
            map(document => document.map(dca => {
                const data = dca.payload.doc.data() as Media;
                return { ...data };
            }))
        );
    }

    newComment(id: any, data: any) {
        this.document = this.fireStore.doc<any>(`test/${id}`);
        this.document.update({
            comments: arrayUnion(data)
        });
    }

    getGallery(): Observable<any> {
        return this.collection.snapshotChanges().pipe(
            map(document => document.map(dca => {
                const data = dca.payload.doc.data() as Media;
                const id = dca.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

}
