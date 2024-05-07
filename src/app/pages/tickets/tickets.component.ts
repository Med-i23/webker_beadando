import {Component, OnInit} from '@angular/core';
import { TicketService } from "../../shared/services/ticket.service";
import {AuthService} from "../../shared/services/auth.service";
import {Ticket} from "../../shared/models/Ticket";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl:  './tickets.component.scss'
})
export class TicketsComponent implements OnInit{
  tickets$!: Observable<Ticket[]>;

  loggedInUser = JSON.parse(localStorage.getItem("user") as string);

  constructor(private authService: AuthService, private ticketservice: TicketService) {
  }

  ngOnInit(): void {
    this.tickets$ = this.ticketservice.getTicketsById(this.loggedInUser.uid) as Observable<Ticket[]>;
  }

}
