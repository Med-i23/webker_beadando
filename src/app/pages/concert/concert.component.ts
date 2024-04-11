import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../../shared/services/concert.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.scss']
})
export class ConcertComponent implements OnInit {
  concerts$!: Observable<any[]>;

  constructor(private concertService: ConcertService) {}

  ngOnInit() {
    this.concerts$ = this.concertService.getConcerts();
  }

  loadImage(imageUrl: string): Observable<string> {
    return this.concertService.loadImage(imageUrl);
  }
}


/*
import { Component } from '@angular/core';
import { ConcertService } from '../../shared/services/concert.service';
import { Image } from '../../shared/models/Image';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrl: './concert.component.scss'
})
export class ConcertComponent {
  constructor(private concertService: ConcertService) {
  }

  chosenImage?: Image;

  analog: string = 'images/analog_balaton.jpg';
  krubi: string = 'images/krubi.jpg';
  carson: string = 'images/carson_coma.jpg';
  harminc_y: string = 'images/30y.jpg';

  concerts = [
    {
      title: 'Analog Balaton',
      image: this.concertService.loadImage(this.analog),
      alt: 'analog_balaton',
      date: '2024-07-12',
      location: 'Budapest - Akvárium Klubb'
    },
    {
      title: 'Krubi',
      image: this.concertService.loadImage(this.krubi),
      alt: 'krubi',
      date: '2024-05-1',
      location: 'Szeged - IH Rendezvényközpont'
    },
    {
      title: 'Carson Coma',
      image: this.concertService.loadImage(this.carson),
      alt: 'carson_coma',
      date: '2024-08-22',
      location: 'Budapest- Budapest Park'
    },
    {
      title: '30y',
      image: this.concertService.loadImage(this.harminc_y),
      alt: '30y',
      date: '2024-07-17',
      location: 'Budapest - Kobuci'
    }
  ];
}
*/
