import { Component, OnInit , Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() heroe!: Heroe;

  constructor() { }

  ngOnInit(): void {
  }

}
