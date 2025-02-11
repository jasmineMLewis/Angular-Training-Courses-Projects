# Study Notes Details
### Author
Jasmine Monique Lewis

### Originally Written
February 10, 2024

### Last Modified
February 10, 2024

# Table of Contents
1. [When to Split a Component into Multiple Components](#when-to-split-a-component-into-multiple-components) 
2. [Create a Component in a Folder](#create-a-component-in-a-folder)
3. [Reusable Components](#reusable-components)

# Module Six Components and Templates Deep Dive
I have documented my study notes for Module 6: Components & Templates – Deep Dive. I am enrolled in UDemy's software course by Maximilian Schwarzmüller's Angular: The Complete Guide.

Below are a list of topics within the module:
1. When to Split a Component into Multiple Components
2. Create a Component in a Folder
3. Reusable Components

# When to Split a Component into Multiple Components 

## Separation of Concerns Principle
1. Every component should only do "***one thing***"
2. Create granular, small components and work with many components.

***Example***
In the image below, it is a single page, but it has four different functions and can be separated into four components based on the application's complexity.

![Image - module-6-separation-of-concerns-principle.png](https://github.com/jasmineMLewis/Angular-Training-Courses-Projects/blob/Production/Angular-Complete-Guide/study-notes/module-6-8/assets/module-6-separation-of-concerns-principle.png)

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