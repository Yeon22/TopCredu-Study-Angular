import { Component, OnInit } from '@angular/core';
import { CounterBridgeService } from '../counter.service';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit {
  count = 0;

  constructor(private counterBridgeService: CounterBridgeService) { }

  ngOnInit() {
    this.counterBridgeService.getObservable().subscribe(
      message => {
        if (message.type === 'incremnet') {
          this.count++;
        } else {
          this.count--;
        }
      }
    );
  }

}
