import { Component,ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController} from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import {FavoritesPage} from '../pages/favorites/favorites';
import { timer } from 'rxjs/observable/timer';
import { VideoPlayer } from '@ionic-native/video-player';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  showSplash = true;
  @ViewChild(Nav) nav: Nav;


  constructor(platform: Platform, 
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
      timer(2500).subscribe(()=> this.showSplash = false)
    });
  }

  onGoToSettings(Page) {
  this.nav.setRoot(SettingsPage);
  }

  onGoToFavorites() {
    this.nav.setRoot(FavoritesPage);
  }
}
