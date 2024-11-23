# Table of Contents 
1. [Destructing Data](#destructing-data)
2. [Transform String to Number](#transform-string-to-number)
3. [Required or Optional Item](#required-or-optional-item)


# Module Four Essentials Practice
I have documented my study notes for Module 4: Essentials – Practice. I am enrolled in UDemy's software course by Maximilian Schwarzmüller's Angular: The Complete Guide.

Below are a list of topics within the module:
1. Destructing Data
2. Transform String to Number

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
 