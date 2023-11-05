import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Colors, Period } from '../constants/enums';

@Directive({
  selector: '[appStatusColor]',
  standalone: true,
})
export class StatusColorDirective implements OnInit {
  @Input() appStatusColor!: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    if (this.elementRef) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        this.setStatusColor(),
      );
    }
  }

  private setStatusColor(): string {
    const timeDifference = Date.now() - Date.parse(this.appStatusColor);

    if (timeDifference < Period.week) return Colors.blue;
    if (timeDifference < Period.month) return Colors.green;
    if (timeDifference < Period.halfYear) return Colors.yellow;
    return Colors.red;
  }
}
