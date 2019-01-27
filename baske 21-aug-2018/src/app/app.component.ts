import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemData = [
    {typeItem: 'vegi', priceItem: 10, nameItem: 'orenge'}
  ];
  constructor() { }

  addFood(vegiData: {vegiType: string, vegiName: string, vegiPrice: number}) {
   this.itemData.push({
     typeItem : vegiData.vegiType,
     nameItem : vegiData.vegiName,
     priceItem : vegiData.vegiPrice
   });
  }

  addFruit(fruitData: {fruitType: string, fruitName: string, fruitPrice: number}){
  this.itemData.push({
    typeItem : fruitData.fruitType,
    nameItem : fruitData.fruitName,
    priceItem : fruitData.fruitPrice
  });

}
}
