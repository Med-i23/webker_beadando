import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../../shared/services/concert.service';
import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Image } from '../../shared/models/Image';
import {PaymentService} from "../../shared/services/payment.service";

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.scss']
})
export class ConcertComponent implements OnInit {
  analog: string = '/assets/analog_balaton.jpg';
  krubi: string = '/assets/krubi.jpg';
  carson: string = '/assets/carson_coma.jpg';
  harminc_y: string = '/assets/30y.jpg';

  localImages = [
    { src: this.krubi, alt: 'Krubi' },
    { src: this.analog, alt: 'Analog Balaton' },
    { src: this.carson, alt: 'Carson Coma' },
    { src: this.harminc_y, alt: 'Harminc Y' }
  ];

  concerts$!: Observable<any[]>;
  combinedData$!: Observable<any[]>;

  constructor(private concertService: ConcertService, private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.concerts$ = this.concertService.getConcerts();
    this.combinedData$ = combineLatest([this.concerts$, of(this.localImages)]).pipe(
      map(([concerts, localImages]) => {
        localImages = localImages || [];
        return concerts.map((concert: any, index: number) => ({
          ...concert,
          image: concert.image || (localImages[index] ? localImages[index].src : ''), // Use local image if concert image is not available
          alt: concert.alt || (localImages[index] ? localImages[index].alt : '') // Use local alt text if concert alt is not available
        }));
      })
    );
  }


  openPaymentDialog(): void {
    this.paymentService.openPaymentDialog();
  }



}
