import { Component, OnInit } from '@angular/core';
import { SliderService } from '../service/slider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loanPeriod: number = 6;
  public loanAmount: number = 2000000;
  public total: number;

  constructor(
    private sliderService: SliderService
  ) { }

  ngOnInit(): void {
    
  }

  returnTotal () {
    this.total = this.sliderService.getTotal();
    return this.total;
  }
}

