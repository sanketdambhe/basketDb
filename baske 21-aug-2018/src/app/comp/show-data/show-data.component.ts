import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
 @Input() item: {typeItem: string, priceItem: number, nameItem: string} ;

  constructor() { }

  ngOnInit() {
  }

}
