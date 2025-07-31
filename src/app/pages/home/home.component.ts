import { Component } from '@angular/core';
import { XlsxReaderComponent } from '../../xlsxReader/xlsx-reader/xlsx-reader.component';
import { PopupWindowComponent } from '../../popupWindow/popup-window/popup-window.component';
@Component({
  selector: 'app-home',
  imports: [XlsxReaderComponent, PopupWindowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  popupVisible = false;

  openPopup() {
    this.popupVisible = true;
  }
  onPopUpclosed(event: any) {
    console.log('Popup closed:', event);
    this.popupVisible = false;
  }
}
