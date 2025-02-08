import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // standalone: true, REMOVE to add to a module
  templateUrl: './app.component.html',
  //imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  // Using Signal
  // resultsData = signal<{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[] | undefined>(undefined);


  //Not Using Signal
  // resultsData?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  // onCalculateInvestmentResults(data: InvestmentInput) {
  //   const { initialInvestment, annualInvestment, expectedReturn, duration } = data; //Deconstruct data

  //   const annualData = [];
  //   let investmentValue = initialInvestment;

  //   for (let i = 0; i < duration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
  //     investmentValue += interestEarnedInYear + annualInvestment;
  //     const totalInterest =
  //       investmentValue - annualInvestment * year - initialInvestment;
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: annualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: initialInvestment + annualInvestment * year,
  //     });
  //   }

  //   //this.resultsData = annualData; //Not Using Signal
  //   this.resultsData.set(annualData);
  // }
}
