import { Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent {

  djs = [
     'Motor City Drum Ensemble',
     'Shanti Celeste',
     'The Black Madonna'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.djs, event.previousIndex, event.currentIndex);
  }

}
