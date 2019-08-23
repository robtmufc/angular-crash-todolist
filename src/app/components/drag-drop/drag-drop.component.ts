import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {
  artists = [
    'Artist I - Davido',
    'Artist II - Wizkid',
    'Artist III - Burna Boy',
    'Artist IV - Kiss Daniel',
    'Artist V - Mayorkun',
    'Artist VI - Mr. Eazi',
    'Artist VII - Tiwa Savage',
    'Artist VIII - Blaqbonez',
    'Artist IX - Banky W',
    'Artist X - Yemi Alade',
    'Artist XI - Perruzi',
    'Artist XII - Seyi Shay',
    'Artist XIII - Teni'
  ];

  alteArtists = [
    'Artist 1 - Odunsi',
    'Artist 2 - Nonso',
    'Artist 3 - Wavy the creator',
    'Artist 4 - Dwin',
    'Artist 5 - SDC',
    'Artist 6 - Teni'
  ];
  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}

