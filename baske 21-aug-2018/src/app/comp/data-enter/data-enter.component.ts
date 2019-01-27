import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-enter',
  templateUrl: './data-enter.component.html',
  styleUrls: ['./data-enter.component.css']
})
export class DataEnterComponent implements OnInit {
 @Output() onvegiAdd =  new EventEmitter<{vegiType: string, vegiName: string, vegiPrice: number}>();
 @Output() onfruitAdd =  new EventEmitter<{fruitType: string, fruitName: string, fruitPrice: number}>();
  types = ['fruit' , 'vegi'];

 typeItem = '';
 nameItem = '';
 priceItem = null;



  ngOnInit() {
  }

  onAddVegi() {
this.onvegiAdd.emit({
  vegiType : this.typeItem,
  vegiPrice : this.priceItem,
  vegiName : this.nameItem
});
  }

  onAddFruit() {
    this.onfruitAdd.emit({
      fruitType : this.typeItem,
      fruitName : this.nameItem,
      fruitPrice : this.priceItem
     
    });
     }
}
