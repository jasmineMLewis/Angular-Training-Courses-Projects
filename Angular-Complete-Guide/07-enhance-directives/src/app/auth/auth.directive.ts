import { AuthService } from './auth.service';
import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'});

  //Inject Services into Directives
  private authService = inject(AuthService);

  //When injecting a TemplateRef, you tell Angular that this directive will be used on a ng-template element and use that template. 
  private templateRef = inject(TemplateRef);

  //You must also inject a view container ref; This is a reference to the place in the DOM where this template is being used.
  private viewContainerRef = inject(ViewContainerRef);

  //You need both templateRef and viewContainerRef to render the ng-template with the Structural Directive

  constructor() {
    //run some code anything a signal value changes
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        //console.log('SHOW ELEMENT');

        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        //should not show because we have a user that is not of that type
        //console.log('DO NOT SHOW ELEMENT');

        //clear the rendered content
        this.viewContainerRef.clear();
      }
    });
  }

}
