import { Component, OnInit } from '@angular/core';

import { SliderService } from '../service/slider.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private sliderService: SliderService
  ) { }

  ngOnInit(): void {
  }

  returnLoanAmount () {
     return this.sliderService.getAmount() / 1000000;
  }

  returnLoanPeriod () {
    return this.sliderService.getPeriod();
  }

  returnLoanTotal () {
    return Math.round( this.sliderService.getTotal()); 
  }


}
