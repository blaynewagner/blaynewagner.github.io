import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'things-i-love-view',
  templateUrl: './things-i-love-view.component.html',
  styleUrls: ['./things-i-love-view.component.css']
})
export class ThingsILoveViewComponent implements OnInit {

  currentQuote: string = '';

  possibleQuotes: string[] = [
    'you have such a contagious smile and your teeth are perfect',
    'you are close to your family',
    'you care for me',
    'you make me laugh',
    'you are goofy',
    'you are good at home stuff',
    'your eyes are a beautiful color',
    'your side profile',
    'your bobs',
    'you are a great cook',
    'you like to box',
    'you like to paint',
    'you are creative',
    'you get excited about your planning',
    'you get excited about fun party things',
    'your lil hands',
    'we get along well',
    'you hike with me',
    'you watch the show with me',
    'your lil nose is so cute',
    'you are caring',
    'you are considerate',
    'you get excited about gifts',
    'you like disney',
    'we travel together',
    'you like the plants',
    'i like how you dance',
    'you are a good kisser'
  ];

  constructor() { }

  generateNewQuote() {
    this.currentQuote = this.possibleQuotes[Math.floor((Math.random() * (this.possibleQuotes.length-1)))];
  }

  ngOnInit(): void {
  }

}
