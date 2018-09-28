import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainmenuePage } from '../mainmenue/mainmenue';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController,
              private navParams: NavParams) {

  }
 onGoToMainmenue() {
   this.navCtrl.setRoot(MainmenuePage);
   
 }

 onGoRoot() {
   this.navCtrl.popToRoot();
 }

 servers = [
  'Server 1',
  'Server 2',
  'Server 3'
];


}
