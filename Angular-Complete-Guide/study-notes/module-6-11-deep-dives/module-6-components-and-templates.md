# Module Six Components and Templates Deep Dive

# Study Notes Details
### Author
Jasmine Monique Lewis

### Originally Written
February 10, 2024

### Last Modified
February 26, 2024

# Table of Contents
1. [Split Component into Multiple Components](#split-component-into-multiple-components)
2. [Create a Component in a Folder](#create-a-component-in-a-folder)
3. [Reusable Components](#reusable-components)
4. [NgContent](#ngcontent)
5. [Attribute Selector](#attribute-selector)
6. [Host Element](#host-element)
7. [Component Lifecycle](#component-lifecycle)
8. [Memory Leak](#memory-leak)

# Module Six Components and Templates Deep Dive
I have documented my study notes for Module 6: Components & Templates – Deep Dive. I am enrolled in UDemy's software course by Maximilian Schwarzmüller's Angular: The Complete Guide.

Below are a list of topics within the module:
1. Split a Component into Multiple Components
2. Create a Component in a Folder
3. Reusable Components
4. NgContent
5. Attribute Selector
6. Host Element
7. Component Lifecycle
8. Memory Leak

# Split a Component into Multiple Components
## Separation of Concerns Principle
1. Every component should only do "***one thing***"
2. Create granular, small components and work with many components.

***Example***
In the image below, it is a single page, but it has four different functions and can be separated into four components based on the application's complexity.

![Image - Module 6: Separation of Concerns Principle](https://github.com/jasmineMLewis/Angular-Training-Courses-Projects/blob/Production/Angular-Complete-Guide/study-notes/module-6-8/assets/module-6-separation-of-concerns-principle.png)

## Simplicity and Code Colocation
1. It allows for a simpler application without using multiple components.
2. It is not always a good idea to only work with one or two components as your application becomes more complex.
 
## Determination to use Separation of Concerns Principle vs Simplicity and Code Colocation
1. Try to identify the main thing a component does or the main things that are currently happening in one of your components.
2. Then split those main things into separate components.

***Example***
In the above depiction with it would be more feasible to separate each component into separate components due to different functionality, therefore using Separation of Concerns Principle.

# Create a Component in a Folder

```
ng g c  <folder-name>/<component-name>
```

## Abbreviation

```
ng g c  dashboard/server-status
```
 

***Example*** 

ng g c  dashboard/server-status 

# Reusable Components
Components are not only used to break up complex functionality, but you can build reusable building blocks. When you have code duplication, either logic duplication in the Component TypeScript files or markup duplication, there is an opportunity to create another shared component.

***Example***
You can create a wrapper for items that have similar HTML.

*app.component.html*

```
    <div class="dashboard-item">
      <app-server-status></app-server-status>
    </div>
```

*tickets.component.html*

```
<article>
    <header>
      <img src="list.png" alt="A list of items" />
      <h2>Support Tickets</h2>
    </header>
  </article>
```

*dashboard-item.component.html*

The items that need to be configurable are image source and alternate text, and header two. To make values configurable, use input.

***Reminders***
There are two ways of registering inputs in Angular. You can use the Input Decorator or input signal.
1. @Input() and input allows a child component a way to communicate with its parent component.
2. The input signal is a newer way to access data in > Angular 17.1. 
3. To indicate input is required, put a ".required" after the word "input".

***Example***

```
  image = input.required<{
    src: string;
    alt: string;
  }>();
```

To indicate input type, use "<>" angle brackets and place details in between angle brackets.

```
title = input.required<string>();
```

*dashboard-item.component.html*

First set, property binding to make the image source and alternate configurable.

```
<img [src]="" [alt]="" />
```

Secondly, it is an ***input signal***, therefore, you have to access image as a function.

```
 <img [src]="image().src" [alt]="image().alt" />
```

Thirdly, to access the input signal for header two's title, use ***String Interpolation***.

```
<h2>{{ title() }}</h2>
```

*app.component.html*

```
    <app-dashboard-item [image]="{ src: 'status.png', alt: 'A signal symbol' }" title="Server Status">
      <app-server-status></app-server-status>
    </app-dashboard-item>
```

# NgContent
## Content Projection
***Content Projection***, a nonstandard HTML element that is a placeholder for your templates to indicate to Angular that it should render any wrapped content in that place.

***Example***

*dashboard-item.component.html*
 
```
<div class="dashboard-item">
    <article>
        <header>
            <img [src]="image().src" [alt]="image().alt" />
            <h2>{{ title() }}</h2>
        </header>
        <ng-content></ng-content>
    </article>
</div>
```

## Attributes
When using multiple NgContent and you want to specify where functionality should be located you can use the "select" attribute:

### Select

***Example***

*button.component.html*

```
<span>
    <ng-content></ng-content>
</span>
<ng-content select=".icon"></ng-content>
```

*header.component.html*

```
<button appButton>
    Logout
   <span class="icon"> → </span>
</button>
```

## View Encapsulation
***View Encapsulation*** allows you to easier control styles.

### ngProjectAs
***NgProjectAs*** can be added to any element anywhere you are using content projection. It allows you to define a selector that can be matched from inside the component where you're trying tp project specific content into.

***Example***

*button.component.html*

```
<span>
    <ng-content></ng-content>
</span>
<span class="icon">
    <ng-content select="icon"></ng-content>
</span>
```

*header.component.html*

```
<button appButton>
   Logout
   <span class="icon"> → </span>
</button>
```

### Fallback content
If you do not include content where content is supposed to be such as the icon above you can setup *Fallback Content*.

***Example***

*button.component.html*

```
<span>
    <ng-content></ng-content>
</span>
<span class="icon">
    <ng-content select="icon">
        ? <!-- Fallback Cotent -->
    </ng-content>
</span>
```


# Attribute Selector
An Attribute Selector is defined by using square brackets. You can combine the attribute selector with other selectors. It is typically used if you would like to extend a built-in element.

***Example***

*Attribute Selector*

```
  selector: '[appButton]',
```

*Attribute Selector with another selector*

```
selector: 'button[appButton]',
```


# Host Element
Every Angular component has a *Host Element*. There are two ways to access the *Host Element*.

***Example***
A component with a selector of "app-header" targets an <app-header> element which is rendered into the real DOM. For the button component, the *Host Element* is the "button" with the attribute "appButton".

*button.component.html* 

```
selector: 'button[appButton]',
```

To target that host we will make the following changes in the style sheet. The ":host" in Angular allow you to directly apply styles to the rendered *Host Element*. The component *Host Element* is NOT considered a part of the component template, but will be affected by the (scoped) component styles via :host.


Original CSS

*button.component.css*

```
button {
  display: inline-block;
  padding: 0.65rem 1.35rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  background-color: #691ebe;
  color: white;
  border: none;
}

button:hover {
  background-color: #551b98;
}

.icon {
  display: inline-block;
  margin-left: 0.5rem;
  transition: transform 0.2s ease-in-out;
}

button:hover .icon {
  transform: translateX(4px);
}
```

Modified CSS with ":host"
 
```
:host {
  display: inline-block;
  padding: 0.65rem 1.35rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  background-color: #691ebe;
  color: white;
  border: none;
}

:host:hover {
  background-color: #551b98;
}

.icon {
  display: inline-block;
  margin-left: 0.5rem;
  transition: transform 0.2s ease-in-out;
}

:host:hover .icon {
  transform: translateX(4px);
}
```

*Important*: The elements targeted by your component selectors *do NOT* act as placeholders and *are NOT* replaced when the page is rendered!

Instead, the selected elements are *preserved* and simply *"enhanced" taken over* by you component login and markup!

***Example***
Within the Component you can use the another form of host with encapsulation. 

*dashboard-item.component.ts*

```
@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  encapsulation: ViewEncapsulation.None, //Disables style scoping for form fields; typically will not need to disable
  host: { //Host wants an object as a value, and that object takes any key value pairs of yoru choice. It will add the key value pairs and add as properties on your host element.
    class: 'dashboard-item'
  } 
})
```

## Host Binding
When it comes to adding properties to the *Host Element*,  another way is to add a property to your component class with *Host Binding*. It will look the variable and set the value as the property.

***Example***
*contol.component.html*

*Host Binding*

```
export class ControlComponent {
 @HostBinding('class') className = 'contorl';
}
```

## Host Listener
Similar to *Host Binding*, *Host Listener* decorator  allows you  to bind a method to an event.

***Example***
*contol.component.html*

*Host function: (click in) in Component Decorator*

```
@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
 onClick() {
  console.log('Clicked!');
 }
}
```

***Example***
*contol.component.html*

*HostListener in Component class*

```
@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
 @HostListener('click') onClick() {
  console.log('Clicked!');
 }
 label = input.required<string>();
}
```

Sometimes, would you need to access *Host Element*programmatically in your Typescript code. However, if necessary you can inject a special value into your component, a value that will be provided by Angular, and you can inject eeither with the constructor or with help of that inject function.

ElementRef, an Angular class, which defines a reference to some element that’s rendered to the page. But by injecting it to the page, Angular will give you access to the host element of that component.

```
@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control'
  }
})

export class ControlComponent {
 label = input.required<string>();
 private el = inject(ElementRef);
 onClick() {
    console.log('Clicked!');
    console.log(this.el);
   }
}
```

# Component Lifecycle
Developers may access crucial points in a component or directive's lifespan, from creation to destruction, by using angular lifecycle hooks. Resources can be initialized, updated, and cleaned up with the help of these hooks.

## Lifecycle Execution Order
The following diagrams show the execution order of Angular's lifecycle hooks.

![Image – Module 6: Angular Lifecycle Execution Order During Initialization]()
 
<br/>

![Image - module-6 Angular Lifecycle Execution Order Subsequent Updates]()

***Reference*** | Angular Documentation | [Lifecycle Hooks ](https://angular.dev/guide/components/lifecycle#execution-order) | Web Page: Components | Topic: Execution Order | Date Retrieved: February 24, 2025

### ngOnIt
After Angular has set the initial values for each component's inputs, the *ngOnInit* method is executed. The ngOnInit method of a component executes precisely once. This phase takes place prior to the initialization of the component's own template. This implies that you can use the component's initial input values to change its state.

***Example***
*server-status.component.ts*

```
constructor() {}

ngOnInit() {
    //SetInterval is a JavaScript function
    setInterval(() => {
      const rnd = Math.random(); //0 - 0.9999
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000); //5 seconds, but 5000 milliseconds
  }
```

To ensure you do not misspell lifecycle hooks' name, you should implement the TypeScript interface on the class name.

***Example***
*server-status.component.ts*

```
@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  ngOnInit() {}
```

<ins>***#### Angular Best Practices Tip***</ins> or <ins>***#### Angular Best Practices Tip***</ins>
Using *ngOnIt* for initialization tasks, such as establishing an interval, keeping the constructor lean, and utilizing it exclusively to carry out simple class initialization is an Angular Best Practice.  Initial class property values and other related tasks should be assigned via a constructor.

### ngOnChanges
After any component inputs have changed, the *ngOnChanges* method is executed. This step takes place prior to checking the component's own template. This implies that you can use the component's initial input values to change its state. The first *ngOnChanges* executes before ngOnInit during initialization.

### ngDoCheck
Before Angular evaluates a component's template for changes, the *ngDoCheck* method is executed.  This lifecycle hook allows you to manually update the component's state and check for state changes outside of Angular's standard change detection. This technique is used a lot and can have a big effect on how well your website performs. If at all possible, avoid defining this hook; only use it when you have no other option.

### ngAfterContentInit
After all of the children nested inside the component (its content) have been initialized, the *ngAfterContentInit* method executes once. This lifecycle hook allows you to view the output of content queries, for example contentChild and contentChildren. Although the initialized state of these queries is accessible, an ExpressionChangedAfterItHasBeenCheckedError is raised if you try to modify any state using this method.

### ngAfterContentChecked
The *ngAfterContentChecked* method is executed each time the children that are nested inside the component (its content) are examined for modifications. This technique can have a significant impact on how well your page performs and is used quite frequently. This hook should only be used when there's no other option; avoid defining it whenever you can. Although the content queries, for example contentChild and contentChildren, updated states are accessible here, trying to modify any of the states in this method yields an ExpressionChangedAfterItHasBeenCheckedError.

### ngAfterViewInit
Once all of the children in the component's template (its view) have been initialized, the *ngAfterViewInit* method is called. The viewChild and viewChildren functions are examples of view queries whose results can be read using this lifecycle hook.

### ngAfterViewChecked
Every time the children in the component's template (its view) are examined for modifications, the *ngAfterViewChecked* method is called. This technique is used a lot and can have a big effect on how well your website performs. If at all possible, avoid defining this hook; only use it when you have no other option. Although the updated state of view queries is accessible here, this method returns an ExpressionChangedAfterItHasBeenCheckedError if you try to modify any state.

### ngOnDestroy
When a component or directive is destroyed, the Angular lifecycle hook *ngOnDestroy* method is triggered. In order to stop memory leaks, it is mostly utilized for cleanup operations. The logic of the component determines if you need to use it.


# Memory Leak
A *Memory Leak*  can have a negative impact on the performance of your application.

## Using Intervals
When using intervals and the component is removed, it is a good idea to clean up. If you have an interval that continues to run behind the scenes, even though the component is gone, you have a memory leak in your application.

# Forms
To use forms, import FormsModule and use ngSumbit with the form.

***Example***
*new-ticket.component.ts*

```
@Component({
...  
imports: [FormsModule],
})
```

*new-ticket.component.html*

```
<form (ngSubmit)="onSubmit(titleInput)">
</form>
```

## Template Variable
You can store form elements in a *template variable* by adding a special attribute to that element that starts with an hashtag and any name of your choice. It is stored in that variable and it is available anywhere in that template.

### Alternate To Retrieve Form Values

***Example***
*new-ticket.component.ts*

```
  public onSubmit(title:string, ticketText: string) {
    console.log(title);
    console.log(ticketText);
  }
```

The syntax yielded to the console is vanilla JavaScript's standard browser input DOM object.

*new-ticket.component.html*

```
<form (ngSubmit)="onSubmit(titleInput.value, ticketInput.value)">
    <app-control label="Title">
        <input name="title" id="title" #titleInput />
    </app-control>
    <app-control label="Request">
        <textarea name="request" id="request" rows="3" #ticketInput></textarea>
    </app-control>
    <p>
        <button appButton>
            Submit
            <span ngProjectAs="icon"> ⌲ </span>
        </button>
    </p>
</form>
```

*Important Note about Template Variable*
*Template Variables* do not always give you access to the DOM element. They access HTMLElements.
If you place a component variable on a form element and attempt to use the template variable it will not work because the it convert to an Angular instance. By default you access the DOM element, but if you put the template variable on one of your components, then you get access to the component instance instead.

***Example***
*new-ticket.component.html*

![Image – Module 6 Form Button Component Instance]()