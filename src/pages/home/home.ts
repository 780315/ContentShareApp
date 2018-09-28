import { Component, ViewChild } from '@angular/core';
import { NavController,Nav} from 'ionic-angular';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title:string, component: string}>;

  constructor(public navCtrl: NavController) {
    this.pages = [
         { title: 'Settings' , component:'SettingsPage'},
      { title: 'Favorites', component: 'FavoritesPage' }
    ];
  }

  openPage(page){
    this.nav.setRoot(page.component)
  }

  onGoToServers() {
    this.navCtrl.setRoot(LoginPage);
  }
}
  

