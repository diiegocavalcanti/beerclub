import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';
import { ProvidersFirebaseProvider } from '../../providers/providers-firebase/providers-firebase';
import { Observable } from '@firebase/util';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  public items: any[];

  constructor(public navCtrl: NavController, public service: ProvidersFirebaseProvider) {

  }

  public ngOnInit() {
    this.getItems();
  }

  public getItems() {
    this.service.getShares('/beerplace').subscribe( (data)=> {
      this.items = data;
      console.log(data);
    });;
  }

  viewDetails(id) {
    this.navCtrl.push(DetalhesPage, id);
  }



}
