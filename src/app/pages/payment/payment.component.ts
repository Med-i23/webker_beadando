import {Component, OnInit} from '@angular/core';
import {PaymentService} from "../../shared/services/payment.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ThankYouComponent} from "../thank-you/thank-you.component";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {TicketService} from "../../shared/services/ticket.service";
import {Ticket} from "../../shared/models/Ticket";
import { NgControl } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit{

  loggedInUser = JSON.parse(localStorage.getItem("user") as string);
  paymentForm = new FormGroup({
    cardNumber: new FormControl(''),
    expirationDate: new FormControl(''),
    cvv: new FormControl(''),
    nameOnCard: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl('')
  });

  constructor(private dialogRef: MatDialogRef<PaymentComponent>,
              private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private paymentService: PaymentService,
              private ticketService: TicketService) {}


  ngOnInit(): void {

  }
  cancel(): void {
    this.dialogRef.close();
  }

  pay(): void {
    console.log(this.paymentService.title);
    const ticket: Ticket = {
      id: '',
      buyer: this.loggedInUser.uid,
      date: new Date().toISOString(),
      concert: this.paymentService.title
    };
    this.ticketService.create(ticket)
      .then(() => {
        this.dialogRef.close();
        const dialogRef = this.dialog.open(ThankYouComponent, {
          width: '400px',
          disableClose: true
        });
      })
      .catch(error => {
        console.error('Error creating ticket:', error);
      });
  }

  onSubmit(){
  }

}
