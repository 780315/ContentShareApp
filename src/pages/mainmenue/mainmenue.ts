import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import { TicketsPage } from '../tickets/tickets';
import { TasksPage } from '../tasks/tasks';
import { UploadPage } from '../upload/upload';
import { ChatPage } from '../chat/chat';
import { ContactsPage } from '../contacts/contacts';
import { NewTicketPage } from '../new-ticket/new-ticket';
import { NewTaskPage } from '../new-task/new-task';

@IonicPage()
@Component({
  selector: 'page-mainmenue',
  templateUrl: 'mainmenue.html',
})
export class MainmenuePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToTickets() { 
    this.navCtrl.push(TicketsPage);
    

  }

  onGoToTasks() {
    this.navCtrl.push(TasksPage);
  }

  onGoToUpload(){
  this.navCtrl.push(UploadPage);
  }

  onGoToChat(){
    this.navCtrl.push(ChatPage);
  }

  onGoToContacts(){
    this.navCtrl.push(ContactsPage);
  }
  onGoToNewTicket(slidingItem:ItemSliding) {    
    this.navCtrl.push(NewTicketPage);    
  } 

  onGoToNewTask(){
    this.navCtrl.push(NewTaskPage);
  }
}


