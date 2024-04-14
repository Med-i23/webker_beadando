import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.scss'
})
export class ThankYouComponent {

  constructor(private dialogRef: MatDialogRef<ThankYouComponent>) {}

  close(): void {
    // Close the dialog
    this.dialogRef.close();
  }
}
