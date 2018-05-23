import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public toastCtrl: ToastController) {

  }

  presentToast(tab) {
    let message: string;

    if(tab === 'cervejas') {
      message = 'As melhores cervejas'
    }
    if(tab === 'petiscos') {
      message = 'Os melhores petiscos'
    }
    if(tab === 'favoritos') {
      message = 'Lugares Favoritos'
    }
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
