import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProductoDisplay]'
})
export class ProductoDisplayDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Cambiar el estilo del elemento donde se aplicó la directiva
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #ccc');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'margin', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
  }
}
