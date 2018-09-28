import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Ticket } from '../../data/ticket.interface';
import Tickets from '../../data/dummyTickets';
import { TicketDetailPage } from '../TicketDetail/ticketdetail';
import { ticket1Page } from '../TicketDetail/ticketCode/ticket1';
import { ticket2Page } from '../TicketDetail/ticketCode/ticket2';
import { ticket3Page } from '../TicketDetail/ticketCode/ticket3';
import { ticket4Page } from '../TicketDetail/ticketCode/ticket4';
import { ticket5Page } from '../TicketDetail/ticketCode/ticket5';

@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html'
})

export class TicketsPage implements OnInit {
  ticketCollection: {category: string, tickets: Ticket[]}[];
  constructor(private navCtrl: NavController){};
  ticketdetailsPage = TicketDetailPage;
    
 ngOnInit() {
   this.ticketCollection = Tickets; 
  
}

  onGoToTicket1() {
    this.navCtrl.push(ticket1Page);
  }

  onGoToTicket2() {
    this.navCtrl.push(ticket2Page);
  }

  onGoToTicket3() {
    this.navCtrl.push(ticket3Page);
  }

  onGoToTicket4() {
    this.navCtrl.push(ticket4Page);
  }

  onGoToTicket5() {
    this.navCtrl.push(ticket5Page);
  }

  onGoRoot() {
    this.navCtrl.popToRoot();
  }
}


