# Module Seven Enhancing Elements with Directives – Deep Dive

# Study Notes Details
### Author
Jasmine Monique Lewis

### Originally Written
October 18, 2025

### Last Modified
November 10, 2025

# Table of Contents
1. [What are Directives](#what-are-directives)
2. [Built-in Attribute Directive](#built-in-attribute-directive)
3. [Built-in Structural Directive](#built-in-structural-directive)
4. [Custom Attribute Directive](#custom-attribute-directive)
5. [Custom Structural Directive](#custom-structural-directive)

# Module Seven Enhancing Elements with Directives – Deep Dive
I have documented my study notes for Module 7: Enhancing with Directives – Deep Dive. I am enrolled in UDemy's software course by Maximilian Schwarzmüller's Angular: The Complete Guide. In this module, he discussed the differences between directives and components, the different types of directives, attribute, structural, built-in, and custom directives.

Below are a list of topics within the module: 
1. What are Directives
2. Built-in Attribute Directive
3. Built-in Structural Directive
4. Custom Attribute Directive
5. Custom Structural Directive


# What are Directives
Directives are "enhancements" for elements being used in your template (standard built-in HTML or components). Enhanced with extra behaviors or settings can be added to those elements.

***Example***
For example, you can use the built-in directive "ng-model".

```
<input name="title" ngModel  />
```

They can change the configuration (properties, attributes), styling or behavior of elements.
Unlike Components, Directives have no template!
*In other words: Components are Directives with a template!*

# Built-in Attribute Directive
Attribute directives modify the behavior or appearance of a DOM element, component, or another directive by applying them as attributes on a host element.

# Built-in Structural Directive
Structural directives shape or reshape the Document Object Model (DOM) layout.

# Custom Attribute Directive
You need to set  the "selector" option because you need to tell Angular which elements this directive should be added or when this directive should become active. You typically use the attribute selector so it can be added like an attribute on the element you want to enhance.

```
@Directive({
    selector: 'a[appSafeLink]',
    standalone: true
}
```

If you were building a Directive for a NgModule-based Angular application, you'd set "standalone" to "false" and add the directive to the "declarations" array of an NgModule (like a component).

## To List to a Click
You can use the "host" option with the Directive.

Alternatively, you could also use the "@HostListener" decorator as explained in the "Components Deep DIve" section. As mentioned there, this is not recommended though.

## Directive Decorator
Directive Decorator allows us to add attributes or event listeners to the host element that is controlled or enhanced by this directive.

```
@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': ''
    }
})
```

## Type Casting
Type Casting is explicitly telling the TypeScript compiler the specific type of a value when the compiler cannot automatically infer it.


```
    if(wantsToLeave){ 
        const address = (event.target as HTMLAnchorElement).href;
        return;
    }
```

## Directives Usage
Directives are a key Angular feature, but will not be used all the time. The main feature are components.

# Custom Structural Directive
## Ng-Template
Anything you place in a ng-template will not be rendered on the screen initially. It allows you to eventually show markup, but you can control when it is viewed.

```
<ng-template appAuth="admin">
  <p>Only admins should see this!</p>
</ng-template>
```

Structural Directives always need such a template.

## TemplateRef
When injecting a TemplateRef, you tell Angular that this directive will be used on a ng-template element and use that template.