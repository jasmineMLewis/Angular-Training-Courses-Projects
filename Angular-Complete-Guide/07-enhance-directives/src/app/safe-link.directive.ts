import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)',
    },
    hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
    //queryParam = input('myapp');
    queryParam = input('myapp', {alias: 'appSafeLink'});

    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor() {
        console.log('SafeLinkDirective is active!');
    }

    onConfirmLeavePage(event: MouseEvent){
       const wantsToLeave = window.confirm('Do you want to leave the app?');

       if(wantsToLeave){
            //get the address the user is about to navigate to; Also, we use Type Casting (as) to tell Angular the type of value
            //we are dealing with
            //const address = (event.target as HTMLAnchorElement).href;
             const address = this.hostElementRef.nativeElement.href;

            //Now we can change that address to be what we want
           // (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
            this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam();
            return;
       }

       event.preventDefault();
    }
}