import { Component } from '@angular/core';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrl: './concert.component.scss'
})
export class ConcertComponent {
    analog: string = '../../assets/analog_balaton.jpg';
    krubi: string = '../../assets/krubi.jpg';
    carson: string = '../../assets/carson_coma.jpg';
    harminc_y: string = '../../assets/30y.jpg';

  concerts = [
    {
      title: 'Analog Balaton',
      image: this.analog,
      alt: 'analog_balaton',
      date: '2024-07-12',
      location: 'Budapest - Akvárium Klubb'
    },
    {
      title: 'Krubi',
      image: this.krubi,
      alt: 'krubi',
      date: '2024-05-1',
      location: 'Szeged - IH Rendezvényközpont'
    },
    {
      title: 'Carson Coma',
      image: this.carson,
      alt: 'carson_coma',
      date: '2024-08-22',
      location: 'Budapest- Budapest Park'
    },
    {
      title: '30y',
      image: this.harminc_y,
      alt: '30y',
      date: '2024-07-17',
      location: 'Budapest - Kobuci'
    }
  ];

}
