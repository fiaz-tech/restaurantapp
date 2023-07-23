import { Directive, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseOverProduct]'
})
export class MouseOverProductDirective {

  constructor() { }
  @Output() onMouseOver: EventEmitter<boolean> = new EventEmitter();

  @HostListener("mouseenter", ["$event"])
  public onListenerTriggered(event: any): void {
      this.onMouseOver.emit(true);
  }

}
