import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../../shared/services/concert.service';
import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {PaymentService} from "../../shared/services/payment.service";
import { NgControl } from '@angular/forms';
@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.scss']
})
export class ConcertComponent implements OnInit {

  cloudImages: Array<any> = [];
  cloudImagesValue: Array<any> = [];
  concerts$!: Observable<any[]>;
  combinedData$!: Observable<any[]>;

  constructor(private concertService: ConcertService, private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.concerts$ = this.concertService.getConcerts();
    this.combinedData$ = combineLatest([this.concerts$]).pipe(
      map(([concerts]) => {
        return concerts.map((concert: any, index: number) => ({
          ...concert
        }));
      })
    );
    this.combinedData$.subscribe(value => {
      this.cloudImagesValue = value;
      for (let i = 0; i < this.cloudImagesValue.length; i++) {
        this.concertService.loadImage(value[i].image).subscribe(value => {
          this.cloudImages.push(value);
        });
      }

    });
  }

  openPaymentDialog(title: string): void {
    this.paymentService.openPaymentDialog(title);
  }
}
