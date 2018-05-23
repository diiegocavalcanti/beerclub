import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = new Array(10);

  constructor(public navCtrl: NavController) {

  }

  viewDetails(id) {
    this.navCtrl.push(DetalhesPage, id);
  }

}
