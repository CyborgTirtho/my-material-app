import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule

@Component({
  standalone: true,
  selector: 'app-popup-window',
  imports: [
    NgStyle,
    NgIf,
    NgFor,
    MatTableModule,
        MatCheckboxModule,

    
  ],
  templateUrl: './popup-window.component.html',
  styleUrl: './popup-window.component.css'
})
export class PopupWindowComponent {
toggleSelectAll($event: Event) {
throw new Error('Method not implemented.');
}
checkIfAllSelected() {
throw new Error('Method not implemented.');
}
  @Input() show = false;
  @Input() jsonData :any;  
  @Output() closePopupEvent = new EventEmitter<boolean>();

  top = 100;
  left = 100;
  dragging = false;
  offsetX = 0;
  offsetY = 0;

  allSelected: any;
  displayedColumns: string[] = [ 'Task'];
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
  toggleSelection(row: any) {
  row.selected = !row.selected;
}
}
