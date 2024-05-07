import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[appCustomDirective]'
})

export class CustomDirectiveComponent {
    constructor(e: ElementRef){
        e.nativeElement.style.color = 'green'
    }
}