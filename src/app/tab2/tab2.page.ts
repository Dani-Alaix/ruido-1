import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Media } from '../../app/core/models/media'
import { MediaService } from '../core/services/media.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild('slider') slider: IonSlides;
  //@ViewChild('figAudio') figAudio: ElementRef; // audio tag reference

  slideOpts = {
    slidesPerView: "auto"
  }

  public allMedia: Media[];
  public currentMedia: Media;
  playAudio = [];

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.getMedia();
  }

  selectMedia(file: any) {
    console.log("select media:", file);
    this.currentMedia = file;
  }

  liked(comment: any) {
    comment.like = !comment.like;
    if (comment.like) comment.likes++;
    else if (!comment.like) comment.likes--;
  }

  getMedia(){
    this.mediaService.getGallery().subscribe(
      res=> {
        console.log("response gallery: ", res);
        this.allMedia = res;
      },
      err => {
        console.log("error gallery: ", err);
      }
    );

    this.mediaService.getGallery()
  }

}
