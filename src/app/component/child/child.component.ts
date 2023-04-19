import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() propFromDad: any;
  @Output() gift: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    console.log(this.propFromDad);
  }
  passGiftParent() {
    // const giftData = [{}];
    this.gift.emit('gift from child');
  }
}
