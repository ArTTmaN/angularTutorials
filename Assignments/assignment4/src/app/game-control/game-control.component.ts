import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() cyclePassed = new EventEmitter<number>();
  lastNumber: number = 1;
  interval;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.cyclePassed.emit(this.lastNumber++);
    }, 1000)
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
