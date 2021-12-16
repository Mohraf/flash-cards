import { Component, OnInit } from '@angular/core';
import { FlashCard } from '../flash-card';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent implements OnInit {
  flashCards: FlashCard[] = [
    new FlashCard(1, "Loops in Js", "There are several Loops in Js in cluding forEach',' for loop',' map and reuce"),
    new FlashCard(2, "", "")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
