import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() header : String = "defaultHeader";
  @Input()  span1 : string = "text1";
  @Input()  span2 : string = "text2";
  @Input() span3 : string = "text3";
  @Input() span4 : string = "text4";
  @Input() buttonText : string = "Click me!";
  @Input() price : string = "0";
  @Input() buttonType : string = "0";
  @Input() cardType : string = "0";

  card : object = {
     header : "defaultHeader",
    "span1" : "text1",
    "span2" : "text2",
    "span3" : "text3",
    "span4" : "text4",
    "buttonText" : "Click me!",
    "price" : "0",
    "buttonType" : "0",
    "cardType" : "0"
  }


  @Output()
  alertFunc(){
    alert("Clicked!");
  }
}

 