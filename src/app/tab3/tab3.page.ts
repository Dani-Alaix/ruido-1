import { Component } from '@angular/core';
import { MediaService } from '../core/services/media.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private mediaService: MediaService) {}

  newPhoto() {
    //this.gallery.testFunction();
    let x = this.mediaService.newUserMedia();
  }


}
