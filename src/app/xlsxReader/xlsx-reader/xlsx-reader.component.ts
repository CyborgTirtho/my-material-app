import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  standalone: true,
  selector: 'app-xlsx-reader',
  imports: [],
  templateUrl: './xlsx-reader.component.html',
  styleUrl: './xlsx-reader.component.css'
})
export class XlsxReaderComponent {

  handleFile(event: any) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e: any) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });

    const firstSheet = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheet];

    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    console.log(jsonData); // JSON array of rows
  };

  reader.readAsArrayBuffer(file);
}

}
