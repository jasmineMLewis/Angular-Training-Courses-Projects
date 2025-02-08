import { Component, output, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';
//import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  // standalone: true,
  // imports: [
  //   FormsModule
  // ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //Using Signals
 // calculate = output<InvestmentInput>();

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  //Without Signals
  //@Output() calculate = new EventEmitter<InvestmentInput>();
  // enteredInitialInvestment = '0';
  // enteredAnnualInvestment = '0';
  // enteredExpectedReturn = '5';
  // enteredDuration = '10';
  
  //With Service
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });

    //Reset to Initial Values
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }

  //With Signals
  //onSubmit() {
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment(),
    //   duration: +this.enteredDuration(),
    //   expectedReturn: +this.enteredExpectedReturn(),
    //   annualInvestment: +this.enteredAnnualInvestment(),
    // });

    //Reset to Initial Values
    // this.enteredInitialInvestment.set('0');
    // this.enteredAnnualInvestment.set('0');
    // this.enteredExpectedReturn.set('5');
    // this.enteredDuration.set('10');
  //}

  //Without Signals
  //onSubmit() {
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment,
    //   duration: +this.enteredDuration,
    //   expectedReturn: +this.enteredExpectedReturn,
    //   annualInvestment: +this.enteredAnnualInvestment,
    // });
  //}

}