import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

const data = [
  {
      "enable"  : 0,
      "header" : "FREE",
      "price" : 0,
      "data": {
          "Single User" : 1,
"5GB Storage" : 1,
"Unlimited Public Projects" : 1,
"Community Access" : 1,
"Unlimited Private Projects" : 0,
"Dedicated Phone Support" : 0,
"Free Subdomain" : 0,
"Monthly Status Reports" : 0
      }
  },
  {
      "enable"  : 1,
      "header" : "PLUS",
      "price" : 9,
      "data": {
          "5 Users" : 1,
"50GB Storage" : 1,
"Unlimited Public Projects" : 1,
"Community Access" : 1,
"Unlimited Private Projects" : 1,
"Dedicated Phone Support" : 1,
"Free Subdomain" : 1,
"Monthly Status Reports" : 0
      }
  },
  {
      "enable"  : 1,
      "header" : "PRO",
      "price" : 49,
      "data": {
          "Unlimited Users" : 1,
"50GB Storage" : 1,
"Unlimited Public Projects" : 1,
"Community Access" : 1,
"Unlimited Private Projects" : 1,
"Dedicated Phone Support" : 1,
"Free Subdomain" : 1,
"Monthly Status Reports" : 1
      }
  }
]


interface content{
  enable: number,
  header: string,
  price: number,
  data: {},

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'basicUI';
  active = 0;
  lengthItems = 0;
  list: HTMLElement = undefined!;
  items: NodeListOf<Element> = undefined!;
  dots: NodeListOf<Element> = undefined!;
  prev: HTMLElement = undefined!;
  next: HTMLElement = undefined!;
  data: content[] = data;
  
  @ViewChild("list", { static: false }) listElement!: ElementRef;
  @ViewChild('list') itemsElement!: ElementRef;
  @ViewChild('dots') dotsElement!: ElementRef;
  @ViewChild('prev') prevElement!: ElementRef;
  @ViewChild('next') nextElement!: ElementRef;
  
  
  ngAfterViewInit() {
    console.log(this.itemsElement);
    this.list = this.listElement.nativeElement;
    this.items = this.itemsElement.nativeElement.querySelectorAll('div');
    this.dots = this.dotsElement.nativeElement.querySelectorAll('li');
    this.prev = this.prevElement.nativeElement;
    this.next = this.nextElement.nativeElement;
    this.lengthItems = this.items.length;
    console.log(this.items);
    console.log(this.dots);
    this.reloadSlider();

  }
  
  reloadSlider() {
    let activeItem = this.items[this.active];
    let checkLeft = (activeItem as HTMLElement).offsetLeft;
    this.list.style.left = -checkLeft + 'px';
  
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    (lastActiveDot as HTMLElement).classList.remove('active');
    this.dots[this.active].classList.add('active');
  }
  
  nextFunc() {
    console.log("next");
    if (this.active + 1 > this.lengthItems) {
      this.active = 0;
    } else {
      this.active += 1;
    }
    this.reloadSlider();
  }

  prevFunc() {
    if (this.active - 1 < 0) {
      this.active = this.lengthItems;
    } else {
      this.active = this.active - 1;
    }
    this.reloadSlider();
  }
}