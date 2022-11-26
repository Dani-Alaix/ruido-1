import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }


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
  
}
