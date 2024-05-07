import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import { Ticket } from "../models/Ticket";
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  collectionName = "Tickets";
  constructor(private afs: AngularFirestore) { }

  getTicketsById(id: string) {
    return this.afs.collection('Tickets', ref => ref.where('buyer', '==', id)).valueChanges();
  }

  getTickets(): Observable<any[]> {
    return this.afs.collection('Tickets').valueChanges();
  }

  create(ticket: Ticket) {
    ticket.id = this.afs.createId();
    return this.afs.collection<Ticket>(this.collectionName).doc(ticket.id).set(ticket);
  }


}
