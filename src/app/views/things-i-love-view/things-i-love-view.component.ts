import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'things-i-love-view',
  templateUrl: './things-i-love-view.component.html',
  styleUrls: ['./things-i-love-view.component.css']
})
export class ThingsILoveViewComponent implements OnInit {

  currentQuote: string = 'love u';

  possibleQuotes: string[] = [
    'you have such a contagious smile and your teeth are perfect'
  ];

  constructor() { }

  generateNewQuote() {

  }

  ngOnInit(): void {
  }

}
