import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import { Ticket } from "../models/Ticket";
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private afs: AngularFirestore) { }

  getTicketsById(id: string) {
    return this.afs.collection<Ticket>('Tickets').doc(id).valueChanges();
  }

  getTickets(): Observable<any[]> {
    return this.afs.collection('Tickets').valueChanges();
  }

}
