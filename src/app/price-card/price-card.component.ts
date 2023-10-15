import { Component,Input } from '@angular/core';


interface content{
  enable: number,
  header: string,
  price: number,
  data: {},
}

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent {
  
  @Input()
  content : content = {
    enable: 1,
    header: "string",
    price: 100,
    data: {}
  };

}
