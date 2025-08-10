import { Component, EventEmitter, Output } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  standalone: true,
  selector: 'app-xlsx-reader',
  imports: [],
  templateUrl: './xlsx-reader.component.html',
  styleUrl: './xlsx-reader.component.css',
})

export class XlsxReaderComponent {
   @Output() onUpload = new EventEmitter<any>();

  handleFile(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (!file) {
      alert('No file selected');
      return;
    } 
      // Check if the file is an XLSX file
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        const firstSheet = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheet]; //returns the boxes as an object
         const jsonData = XLSX.utils.sheet_to_json(worksheet);
        // JSON array of rows
         if(jsonData?.length > 0&& jsonData.every(
      (row: any) => row.hasOwnProperty('ID') && row.hasOwnProperty('Task')
      )) {
        this.onUpload.emit(jsonData);
      }
      else {
        this.onUpload.emit(false);
        alert('Invalid data format. Each row must have "ID" and "Task" columns.');
        return;
      }
      };
     

    reader.readAsArrayBuffer(file);

      event.target.value = ''; // Reset the file input value

  }




}
