import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  selectedTab: string = "inbox";
  selectedItem: any;

  mailListInbox = [
    {
      id: 1,
      title: 'نامه اول',
      content: '1محتوای نامه ',
    },
    {
      id: 2,
      title: 'نامه دوم',
      content: '2محتوای نامه ',
    },
  ];

  mailListOutbox = [
    {
      id: 1,
      title: 'نامه ارسالی اول',
      content: '3محتوای نامه ',
    },
    {
      id: 2,
      title: 'نامه ارسالی دوم',
      content: '4محتوای نامه ',
    },
  ];

  notes = [
    {
      id: 1,
      title: 'یادداشت  اول',
      content: 'محتوای یادداشت 1 ',
    },
    {
      id: 2,
      title: ' یادداشت دوم',
      content: 'محتوای یادداشت 2 ',
    },
  ];

  selectTab(tabNumber: string): void {
    this.selectedTab = tabNumber;
    this.selectedItem = null; 
  }

  selectItem(item: any): void {
    this.selectedItem = item;
    console.log(item);
    
  }

  
  reply(): void {
    // Handle the reply action, e.g., open a reply dialog
  }

  forward(): void {
    // Handle the forward action, e.g., open a forward dialog
  }

 

  isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
    console.log(this.isModalOpen);
    
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
