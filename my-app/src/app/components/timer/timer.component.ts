import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  minutes: number = 24;
  seconds: number = 59;
  isPaused: boolean = true;
  buttonLabelReset: string = 'Reset';
  buttonLabelResume: string = 'Resume';
  buttonLabelPause: string = 'Pause';

  private interval: NodeJS.Timer | undefined;

  constructor() {}

  ngOnInit(): void {}

  resume(): void {
    if (this.isPaused) {
      this.interval = setInterval(() => {
        this.tick();
      }, 1000);
      this.isPaused = false;
    }
  }

  reset(): void {
    this.pause();
    this.minutes = 24;
    this.seconds = 59;
  }

  tick(): void {
    if (--this.seconds < 0) {
      this.seconds = 59;
      if (--this.minutes < 0) this.reset();
    }
  }

  pause(): void {
    if (!this.isPaused) {
      clearInterval(this.interval);
      this.isPaused = true;
    }
  }
}
