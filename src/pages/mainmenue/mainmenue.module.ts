import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainmenuePage } from './mainmenue';

@NgModule({
  declarations: [
    MainmenuePage,
  ],
  imports: [
    IonicPageModule.forChild(MainmenuePage),
  ],
})
export class MainmenuePageModule {}
