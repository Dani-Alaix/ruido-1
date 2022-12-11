import { Component, OnInit } from '@angular/core';
import { MediaService } from '../core/services/media.service';
//import { UserMedia } from '../core/models/user-media.ts';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserMedia } from '../core/models/user-media';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    addPhoto: boolean = false;
    allUserGallery: UserMedia[];

    public photoForm: FormGroup;
    public nameUser: FormControl;
    public descriptionUser: FormControl;

    public imageUser: string | ArrayBuffer;

    constructor(private mediaService: MediaService) { }

    ngOnInit() {
        this.nameUser = new FormControl("", Validators.required);
        this.descriptionUser = new FormControl();
        this.photoForm = new FormGroup({
            nameUser: this.nameUser,
            descriptionUser: this.descriptionUser
        });

        this.getUsersPhotos();
    }

    getUsersPhotos() {
        this.mediaService.getUsersGallery().subscribe(
            res => {
                console.log("response gallery: ", res);
                this.allUserGallery = res;
            },
            err => {
                console.log("error gallery: ", err);
            }
        );
    }

    onChangeFiles(event: any) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            this.imageUser = reader.result as string;
        }
    }

    savePhoto() {
        let data = {
            name: this.nameUser.value,
            description: this.descriptionUser.value,
            photo: this.imageUser,
        }
        console.log(data);
        this.mediaService.newUserMedia(data);
        this.addPhoto = false;
    }
}