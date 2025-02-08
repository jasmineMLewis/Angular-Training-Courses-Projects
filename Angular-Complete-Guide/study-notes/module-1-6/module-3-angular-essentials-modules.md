# Table of Contents 
1. [Modules](#modules)


# Module Three Angular Essentials
I have documented my study notes for Module 3: Angular Essentials – Working with Modules. I am enrolled in UDemy's software course by Maximilian Schwarzmüller's Angular: The Complete Guide. 

Below are a list of topics within the module: 
1.  Modules

# Modules
Modules are containers that allow you to organize an application.

Today, Standalone Components are the recommended way of building components. But you can still use "Module-based Components" with Angular Modules. You can mix and match standalone and modules.

## Generate Module with CLI

```
ng generate module module-name
```

Generate module without folder

```
ng generate module module-name --flat
```

## Using a Module
In the file "app.module.ts", components added cannot be a standalone if included in the structural directive "NgModule". 
If using standalone components, do not include them in a modules' declarations, instead import them. "Declarations" are for non-standalone components. Modules can be imported into other modules.

Always include "BrowserModule" because it include important features Angular use.

```
import { BrowserModule } from "@angular/platform-browser";
```

```
@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HeaderComponent,
        UserComponent,
        TasksComponent
    ],
  })
```


## Export a Component in a Module 
When you export a component in a module, it becomes available for usage in the application when you the module. 

```
@NgModule({
  declarations: [
    CardComponent
 ],
  exports: [
    CardComponent
  ]
})
export class SharedModule { }
```