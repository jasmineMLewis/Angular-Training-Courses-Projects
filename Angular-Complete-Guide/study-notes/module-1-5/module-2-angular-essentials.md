# Study Notes Details

### Author
Jasmine Monique Lewis

### Originally Written


### Last Modified

# Table of Contents 


1. [Typescript Advantages](#typescript-advantages)
2. [Component](#component)
3. [Input Decorator](#input-decorator)
4. [Signal](#signal)
5. [Output Decorator](#output-decorator)
6. [String Interpolation](#string-interpolation)
7. [Property Binding](#property-binding)
8. [Type Alias](#type-alias)
9. [Interface](#interface)
10. [For Loop](#for-loop)
11. [IfElse](#if-else)
12. [Structural Directives](#structural-directives)
13. [Two Way Binding](#two-way-binding)
14. [Ng Content](#ng-content)
15. [Pipes](#pipes)
16. [Service](#service)
17. [Dependency Injection](#dependency-injection)
18. [Local Storage](#local-storage)
 
# Module Two Angular Essentials
I have documented my study notes for Module 2: Angular Essentials – Components, Templates, Services, & More. I am enrolled in UDemy's software course by Maximilian Schwarzmüller's Angular: The Complete Guide.

Below are a list of topics within the module:
1. Typescript Advantages
2. Component
3. Input Decorator
4. Signal
5. Output Decorator
6. String Interpolation
7. Property Binding
8. Type Alias
9. Interface
10. For Loop
11. If/Else
12. Structural Directives
13. Two Way Binding
14. Ng Content
15. Pipes
16. Service
17. Dependency Injection
18. Local Storage 

# Typescript Advantages
Typescript enforces strong and static typing. You have to be clear about which value goes where.

# Component 
Components are directives! Directives with templates. 

## Component Selector
Component Selector is a CSS selector that determines how the component is used. The component selector can be used in HTML of other components. 

``` 
@Component({ 
  selector: 'app-new-task', 
  ... 
}) 
```

To use the component in a HTML file, you call the component by its selector. 

``` 
@if(isAddingTask) { 
    <app-new-task></app-new-task> 
} 
``` 

To use the component in another component, it must be imported. 

``` 
@Component({ 
  selector: 'app-tasks', 
  standalone: true, 
  imports: [ 
    TaskComponent, 
    NewTaskComponent 
  ], 
  templateUrl: './tasks.component.html', 
  styleUrl: './tasks.component.css', 
}) 
```


# Input Decorator
When defining Input decorator, use "required: true" to signal to Angular that an input is required.
By doing this, Angular will notify you there is an error, if the item is not set.

```
@Input({required: true}) avatar!: string;
@Input({required: true}) name!: string;
``` 

Angular will give an error in the HTML file.

``` 
<app-user [avatar]="users[2].avatar" />
``` 

If you are unsure if the input will be a specific type can use the pipe "|" symbol, followed by undefined. 

``` 
@Input() name: string | undefined;
```

# Signal
Signal indicates when a change occur, then sets it. Signals are used in state management and are trackable data containers. A signal is an object that stores a value (any type of value, including nested objects). 


You can use the Signal property in place of the Input property. Signal is a function. When using a Signal, to notify TypeScript you are using a string, place angle brackets or chevrons, '<>' , before the input. The input function can be used with a variety of types.

```
import { input } from '@angular/core';
```

```
avatar = input.required<string>();
name = input.required<string>();
``` 

Change property binding and String Interpolation to a function. We used a computed function with signal. 

``` 
<img [src]="imagePath()" [alt]="name()" />
<span>{{ name() }}</span>
```

# Output Decorator
## EventEmitter
To create a custom event, use Output decorator. When defining Output decorator, include the name of output and set to EventEmitter().

```
@Output() select = new EventEmitter();
```

With Typescript you can denote the type of data with EventEmitter, by specifying the type. 

```
@Output() select = new EventEmitter<string>(); 
``` 

To emit the custom event, use the name of the output and emit.

```
this.select.emit(this.id);
```

To inform Angular that you want to pass information from the child component to the parent, you must use a special variable called "$event". Use the "$event" to access the emit variable. The "$event" special variable is available for both custom events and built-int events, such as (like "click".) 

```
  onSelectUser(id: string) {
    console.log('Selected user with name ' + id);
  }
``` 

```
<app-user
    [id]="users[0].id" 
    [avatar]="users[0].avatar"
    [name]="users[0].name"
    (select)="onSelectUser($event)" />
``` 

You are not required to add a type to EventEmitter, but it does add a level of protection for type safety. If you input something that is not the correct type, TypeScript will detect an error. The "this.select.emit(2)" will detect an error of integer.
 
```
@Output() select = new EventEmitter<string>();

onSelectUser(id: string)

this.select.emit(2);
```

# String Interpolation
String Interpolation is when you use double brackets on both left and right side of variable to display a string variable in HTML.

```
<h2>{{ name }}</h2>
```

# Property Binding
Property Binding is when you use square brackets to display data in HTML for a DOM (document object model) object.


```
<img [src]="imagePath" [alt]="name" />
```

# Type Alias
Type Aliases allow you to define a type with custom name, also known as an Alias.

```
type User = {
  id: string;
  avatar: string;
  name: string;
} 
```
 
# Interface
Interface is another of defining an object. Typically in Angular projects, interface is used more than type.
 
```
interface User {
  id: string;
  avatar: string;
  name: string;
} 
```

To use it when a class, you must import it. You can import class definitions. 

``` 
import { User } from './user.model'; 
``` 

You are not required to add "type" to the class definition, but you want to know you are importing a type. 
 
``` 
import { type User } from './user.model'; 
``` 
 
# For Loop
To dynamically list items, such as the DUMMY_USERS, use "@for()" and include "track" to specify what you are cycling through.
Initially we used the followed code to hard code users:

```
    <li>
        <app-user
            [user]="users[0]"
            (select)="onSelectUser($event)" />
    </li>
```

Now we use the following code to dynamically return users using their id. The first word after @for can be named anything (example: 'u'),  but the word following of must be the name of the item you are cycling through (example: 'users').

``` 
    @for(u of users; track u.id) {
        <li> 
            <app-user  
                [user]="u" 
                (select)="onSelectUser($event)" />
        </li> 
    }
```

# IfElse
The If statement elevates a condition and executes the code if the condition is true. The else code block displays when the is statement is false. 

```
    @if(selectedUser) {
        <app-tasks [name]="selectedUser.name"></app-tasks> 
    } @else { 
        <p id="fallback">Select a user to see their tasks!</p>
    }
```

# Structural Directives
Structural directives include "*ngFor" and "*ngIf". These are use in older versions of Angular.

```
<li *ngFor="let user of users"> 
    <app-user  
        [user]="user" 
        (select)="onSelectUser($event)" /> 
</li> 
```


# Two Way Binding 
Two-Way Binding, combination of property and event binding, is a way to bind templates to data for form input and form submissions. 

## Directives 
Directives, unlike components, don’t have a template! 

## Directive | NgModel 

To update the input values and listen to changes use ngModel directive. It is an "element enhancement" that helps with extracting (or changing) use input values. NgModel is used with input or text area, or other form-related elements. 

Two-Way Binding Syntax 

``` 
 [(ngModel)]="property" 
``` 

To use the directive, you must register it, by including "FormsModule" in the imports for your component. 

``` 
@Component({
  selector: 'app-new-task', 
  standalone: true,
  imports: [
    FormsModule
  ], 
  templateUrl: './new-task.component.html', 
  styleUrl: './new-task.component.css' 
}) 
```

# Ng Content
Ng Content acts an placeholder for the wrapped markup.

```
<div>
  <ng-content></ng-content>
</div>
```
 
# Pipes 
Pipes are output transformers. Angular has some built in pipes and you can create custom pipes. 

Using a date pipe:

```
<time>{{ task.dueDate | date: 'fullDate' }} </time>
```

Import the date pipe:

```
import { DatePipe  } from '@angular/common';

@Component({
  imports: [
    DatePipe
  ]
})
```

# Service
You want to keep your code lean.
To generate a service and exclude tests, use the following command:

```
ng generate service <service-name>  --skip-tests
```

```
ng g s <service-name> --skip-tests
```

## Dependency Injection
A powerful tool used in conjunction with services is dependency injection. You don't create an instance on your own, instead you tell Angular you need an instance, and it will create it. Angular creates the instance once and you can use it in different components. 

### Constructor
To inform Angular you need this type of instance,  use the constructor method. Angular will create the instance once, and you can use it in different components. When the class is used, It is automatically instantiated.

```
constructor() {}
```

To add a service and instantiate it. 

``` 
constructor(private tasksService: TasksService) {}
```

To register a class as injectable:

```
@Injectable({
  providedIn: 'root',
})
```

### Inject
You can use the "inject" method in another component after you instantiate the service in another component. "Inject" is an alternative to using the constructor to instantiate a service.

The "inject" method must be imported from '@angular/core'.

```
import { inject } from '@angular/core';
```

It injects a dependency and provides it as a value for the property.

```
  private tasksService = inject(TasksService);
```

# Local Storage
You can store items on your local browser. Typically, you connect to a server to store your data. This is not an Angular feature. 

In your TaskService, use "localStorage" in a constructor.

```
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
``` 