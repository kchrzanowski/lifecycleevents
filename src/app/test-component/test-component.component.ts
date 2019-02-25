import {Component, OnDestroy, OnInit} from '@angular/core';
import {LifecycleEvents} from '../decorators/lifecycle-events';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
@LifecycleEvents
export class TestComponentComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
