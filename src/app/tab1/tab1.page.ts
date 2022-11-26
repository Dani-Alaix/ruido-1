import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  infoUser =
    {
      name:"Daniela Cubides Alaix",
      email:"dani_6352@hotmail.com",
      phone: 3185568209
    }

  constructor() {}

}
