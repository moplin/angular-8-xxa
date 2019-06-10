import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'mop-wooba-looba',
  templateUrl: './wooba-looba.component.html',
  styleUrls: ['./wooba-looba.component.css']
})
export class WoobaLoobaComponent implements OnInit {
  constructor(private logger: NGXLogger) { }
  ngOnInit() {
    this.logger.info('Wooba looba dub dub');
    // this.logger.error('Now we got a problem');
  }
}