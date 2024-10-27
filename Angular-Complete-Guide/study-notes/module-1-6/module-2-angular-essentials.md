# Table of Contents 
1. [Typescript Advantages](#typescript-advantages)
2. [Input Decorator](#input-decorator)
3. [Signal](#signal)
4. [Output Decorator](#output-decorator)
5. [String Interpolation](#string-interpolation)
6. [Property Binding](#property-binding)
7. [Type Alias](#type-alias)
8. [Interface](#interface)
9. [For Loop](#for-loop)
10. [IfElse](#if-else)
11. [Structural Directives](#structural-directives)
 

# Module Two Angular Essentials(#module-two-angular-essentials)
I have documented my study notes for Module 2: Angular Essentials – Components, Templates, Services, & More. The course I am taking is UDemy's Sofware course by Maximilian Schwarzmüller's Angular: The Complete Guide.


# Typescript Advantages(#typescript-advantages)
Typescript enforces strong and static typing. You have to be clear about which value goes where.
 

# Input Decorator(#input-decorator)
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
 

# Signal(#signal)
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

# Output Decorator(#output-decorator)
## EventEmitter
To create a custom event, use Output decorator. When defining Output decorator, include the name of output and set to EventEmitter().

```
@Output() select = new EventEmitter();
```

To emit the custom event, use the name of the output and emit.

```
this.select.emit(this.id);
```

On the HTML, use  the "$event" variable to access the emit variable. The "$event" variable is available for both custom events and built-int events, such as (like "click".)

AppCompoent

```
  onSelectUser(id: string) {
    console.log('Selected user with name ' + id);
  }
``` 

HTML 

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

# String Interpolation(#string-interpolation)
String Interpolation is when you use double brackets on both left and right side of variable to display a string variable in HTML.

```
<h2>{{ name }}</h2>
```


# Property Binding(#property-binding)
Property Binding is when you use square brackets to display data in HTML for a DOM (document object model) object.


```
<img [src]="imagePath" [alt]="name" />
```

# Type Alias(#type-alias)
Type Aliases allow you to define a type with custom name, also known as an Alias.

```
type User = {
  id: string;
  avatar: string;
  name: string;
} 
```
 

# Interface(#interface)
Interface is another of defining an object. Typically in Angular projects, interface is used more than type.
 
```
interface User {
  id: string;
  avatar: string;
  name: string;
} 
```
 

# For Loop(#for-loop)
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

# IfElse (#if-else)
The If statement elevates a condition and executes the code if the condition is true. The else code block displays when the is statement is false. 

```
    @if(selectedUser) {
        <app-tasks [name]="selectedUser.name"></app-tasks> 
    } @else { 
        <p id="fallback">Select a user to see their tasks!</p>
    }
```

# Structural Directives(#structural-directives)
Structural directives include "*ngFor" and "*ngIf". These are use in older versions of Angular.

```
<li *ngFor="let user of users"> 
    <app-user  
        [user]="user" 
        (select)="onSelectUser($event)" /> 
</li> 
```