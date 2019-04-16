import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

// Angular Animations
import { animate, state, style, transition, trigger } from '@angular/animations';

type PaneType = 'first' | 'second';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('first', style({ transform: 'translateX(0)' })),
      state('second', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class MainSliderComponent implements OnInit {

  @Input() activePane: PaneType = 'first';

  constructor() { }

  ngOnInit() {
  }

}
