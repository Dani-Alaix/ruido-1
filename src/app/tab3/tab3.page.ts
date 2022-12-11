import { Component, OnInit } from '@angular/core';
import { MediaService } from '../core/services/media.service';
//import { UserMedia } from '../core/models/user-media.ts';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    addPhoto:boolean= false;
    usersMedia: any;

    public photoForm: FormGroup;
    public nameUser: FormControl;
    public descriptionUser: FormControl;
    public imgUser: FormControl;

    constructor(private mediaService: MediaService) { }

    ngOnInit() {
        this.nameUser = new FormControl("", Validators.required);
        this.descriptionUser = new FormControl();
        this.imgUser = new FormControl("", Validators.required);
        this.photoForm = new FormGroup({
            nameUser: this.nameUser,
            descriptionUser: this.descriptionUser,
            imgUser: this.nameUser
        });
    }

    getUsersPhotos(){}

    newPhoto() {
        //let x = this.mediaService.newUserMedia();
    }
    
    savePhoto() {
        let data = {
            name: this.nameUser.value,
            description: this.descriptionUser.value,
            photo: this.imgUser.value,
        }
        console.log(data);
    }
}