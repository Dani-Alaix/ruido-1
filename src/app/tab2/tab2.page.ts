import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  newComment: boolean = false;
  public commentForm: FormGroup;
  public nameUser: FormControl;
  public commentUser: FormControl;
  
  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.getMedia();

    this.nameUser = new FormControl("", Validators.required);
    this.commentUser = new FormControl("", Validators.required);
    this.commentForm = new FormGroup({
        nameUser: this.nameUser,
        commentUser: this.commentUser
    });

  }

  selectMedia(file: any) {
    console.log("select media:", file);
    console.log("id media:", file.id);
    this.currentMedia = file;
  }

  liked(comment: any) {
    comment.like = !comment.like;
    if (comment.like) comment.likes++;
    else if (!comment.like) comment.likes--;
  }

  getMedia() {
    this.mediaService.getGallery().subscribe(
      res => {
        //console.log("response gallery: ", res);
        this.allMedia = res;
      },
      err => {
        console.log("error gallery: ", err);
      }
    );
  }


  sendComment(){
    let newUserComment = {
      user: this.nameUser.value,
      comment: this.commentUser.value,
      date: new Date().toString(),
    }

    this.mediaService.newComment(this.currentMedia.id, newUserComment);
    console.log("nuevo comentario:", newUserComment);
    this.newComment = false;
    this.currentMedia=this.currentMedia;
  }

}
