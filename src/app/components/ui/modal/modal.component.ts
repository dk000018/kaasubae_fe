import { NgIf } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  imports: [NgIf],
})
export class ModalComponent implements OnChanges {
  @Input() isOpen = false;

  showModal = false; // Controls if the modal exists in the DOM
  animateOpen = false; // Controls the animation state

  ngOnChanges() {
    if (this.isOpen) {
      this.showModal = true;
      setTimeout(() => {
        this.animateOpen = true; // Delay adding animation class
      }, 10); // Small delay to allow DOM to render first
    } else {
      this.animateOpen = false;
      setTimeout(() => {
        this.showModal = false;
      }, 300); // Matches transition duration
    }
  }
}
