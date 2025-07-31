import { NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-popup-window',
  imports: [
    NgStyle,
    NgIf
  ],
  templateUrl: './popup-window.component.html',
  styleUrl: './popup-window.component.css'
})
export class PopupWindowComponent {
  @Input() show = false;
  @Output() closePopupEvent = new EventEmitter<boolean>();

  top = 100;
  left = 100;
  dragging = false;
  offsetX = 0;
  offsetY = 0;

  startDrag(event: MouseEvent) {
    this.dragging = true;
    this.offsetX = event.clientX - this.left;
    this.offsetY = event.clientY - this.top;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.dragging) {
      this.left = event.clientX - this.offsetX;
      this.top = event.clientY - this.offsetY;
    }
  }

  @HostListener('document:mouseup')
  stopDrag() {
    this.dragging = false;
  }

  closePopup() {
    this.show = false;
    this.closePopupEvent.emit(true);
  }
}
