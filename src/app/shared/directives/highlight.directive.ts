import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(false);
  }

  private highlight(state: boolean) {
    const card = this.el.nativeElement.closest('.artwork-card');
    if (card) {
      if (state) {
        this.renderer.addClass(card, 'highlighted');
      } else {
        this.renderer.removeClass(card, 'highlighted');
      }
    }
  }
}
