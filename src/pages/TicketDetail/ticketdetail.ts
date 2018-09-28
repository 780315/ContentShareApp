import { Component, OnInit } from '@angular/core';
import { IonicPage,NavParams } from 'ionic-angular';

import { Ticket } from '../../data/ticket.interface';


@Component({
    selector: 'page-detail',
    templateUrl: 'ticketdetail.html'
})
export class TicketDetailPage implements OnInit{
    ticketGroup: {category: string ,tickets: Ticket[]}[];  
    constructor(private navParams: NavParams) {}
    


    ngOnInit() {
        this.ticketGroup = this.navParams.data;

     
    }


   
}
