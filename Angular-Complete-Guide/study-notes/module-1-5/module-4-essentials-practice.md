# Module Four Essentials Practice

# Study Notes Details
### Author
Jasmine Monique Lewis

### Originally Written


### Last Modified


# Table of Contents 
1. [Destructing Data](#destructing-data)
2. [Communicate to Child Component](#communicate-to-child-component)
3. [Transform String to Number](#transform-string-to-number)
4. [Input Decorator](#input-decorator)
5. [Required or Optional Item](#required-or-optional-item)
6. [Signals](#signals)


# Module Four Essentials Practice
I have documented my study notes for Module 4: Essentials – Practice. I am enrolled in UDemy's software course by Maximilian Schwarzmüller's Angular: The Complete Guide.

Below are a list of topics within the module:
1. Destructing Data
2. Communicate to Child Component
3. Transform String to Number
4. Input Decorator
5. Required or Optional Item
6. Signals


# Destructing Data
Destructing data allow you to extract properties from an object or elements from an array into separate variables.

```
data: {
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }
```

```
const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
```

# Communicate to Child Component
To communicate with a child Component, a custom event can be created. 

Communicate from AppComponent to UserInputComponent (Child Component)

```
<app-user-input (calculate)="onCalculateInvestmentResults($event)"></app-user-input>
```

```
export class AppComponent {
  onCalculateInvestmentResults(data: {
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }) {
    ...
  }
}
```

```
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }>();

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    });
  }
}
```


# Transform String to Number
To transform a string value to a number, add the "+" plus sign in front of value.

```
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    });
  }
```  

# Input Decorator
When you want to receive data into the child component, create a bindable property that exposes the child to a parent component.  It allows the parent component to pass data to the child component.  

```
export class InvestmentResultsComponent {
  @Input() results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
}
```

```
<app-investment-results [results]=""></app-investment-results>
```

# Required or Optional Item 
For Typescript, an exclamation point "!"  behind a variable indicated it is required. However, a question mark "?" Behind a variable indicates optional. 


<ins>**Optional**</ins>

```
  @Input() results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }
```

<ins>**Required**</ins>

```
  @Input() results!: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }
```

# Signals
With Signals, Angular will be able to determine exactly what parts of the page need to be updated and update only those and nothing more. 

```
 enteredInitialInvestment = signal('0');
```

```
<app-investment-results [results]="resultsData()"></app-investment-results>
```

## ReadOnly Version of Signals
AsReadOnly(), an Angular method, allows you to call signals as read only version that cannot be manipulated.

```
 results = this.investmentService.resultData.asReadonly();
```