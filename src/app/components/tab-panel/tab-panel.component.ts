import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css'],
})
export class TabPanelComponent {
  @Input() title: any;

  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();
  
  selectItem(): void {
    this.itemSelected.emit({
      title: this.title,
      content: 'This is the content of ' + this.title,
    });
  }

}
