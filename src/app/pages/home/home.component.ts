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
  jsonData:any
  openPopup() {
    this.popupVisible = true;
  }
  onPopUpclosed(event: any) {
    console.log('Popup closed:', event);
    this.popupVisible = false;
  }

  uploadeData(data: any) {
    console.log('Received from child:', data); // Each element has ID & task
    this.jsonData = data;
    // You can now use this.jsonData as needed
    if (data) {
      // Process the data as needed
      console.log('Data received:', data);
      this.openPopup(); // Assuming you want to open the popup after data upload
    } else {
      console.error('No valid data received');
    }
  }
}
