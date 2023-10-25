import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Output() modalClosed: EventEmitter<void> = new EventEmitter<void>();

  closeModal(): void {
    this.modalClosed.emit();
  }

  attach(): void {
    // Handle the attach action
  }
}
