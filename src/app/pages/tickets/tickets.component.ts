import {Component, OnInit} from '@angular/core';
import { TicketService } from "../../shared/services/ticket.service";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent implements OnInit{

  constructor(private authService: AuthService, private ticketservice: TicketService) { }

  ngOnInit(): void {
    let tickets = this.ticketservice.getTickets();
  }

}
