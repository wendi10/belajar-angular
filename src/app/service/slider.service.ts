import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  loanAmount : number = 2000000;
  loanPeriod : number = 6;
  total : number = this.loanAmount / this.loanPeriod * 0.04 
  constructor() { }

  setTotal (Amount, period) {
    this.loanAmount = Amount;
    this.loanPeriod = period
    this.total = Amount / period * 0.04 
  }

  getAmount(){
    return this.loanAmount;
  }

  getPeriod () {
    return this.loanPeriod;
  }

  getTotal () {
    return this.total
  }
  
}
