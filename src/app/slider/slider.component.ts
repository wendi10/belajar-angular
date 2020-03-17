import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SliderService } from '../service/slider.service'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  loanAAmount : number = 2000000;
  loanPeriod : number = 6;
  @Output() loanEvent = new EventEmitter<Number>() ;
  
  constructor( 
      private sliderService: SliderService
    ) { }

  ngOnInit(): void {
    // this.total = this.sliderService.getTotal()
  }

  
  setLoanAAmount ($event) {
    this.loanAAmount = $event.value
    this.sliderService.setTotal(this.loanAAmount, this.loanPeriod)
  }

  setLoanPeriod ($event) {
    this.loanPeriod = $event.value
    this.sliderService.setTotal(this.loanAAmount, this.loanPeriod)
  }

  formatPrice(price){
    return price / 1000000
  }
}
