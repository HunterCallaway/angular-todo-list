import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.css']
})
export class TodoComponent {

	//Define the to-do variable.
	todo = {
		name: '',
		id: 0
	};
	//Define the to-dos variable to hold the to-dos entered.
	todos = [];

	//This method will handle submitting new to-do entries.
	onClick() {
		//Check the id to see if this entry already exists or is new.
		if(this.todo.id === 0) {
			//If the entry is new, add it to the list of to-dos
			//and give it a unique timestamp.
			this.todos.push({id: (new Date()).getTime(), name: this.todo.name});
		}
		//Reset the to-do variable and clear the input field.
		this.todo = {
			name: '',
			id: 0
		};
	}

	//This method allows the user to edit entries.
	onEdit(item) {
		//Clicking the Edit button triggers a dialog box.
		alert("Once you finish editing the entry in the input field, click the OK button to save changes.");
		//Set the to-do variable to the passed-in item.
		this.todo = item;
	}

	//This function will play Homer Simpson's saying "Woohoo!" when a user comfirms
	//he/she/they has/have completed a task.
	playAudio() {
		const woohoo = new Audio();
		woohoo.src = "../../../assets/audio/woohoo.wav";
		woohoo.load();
		woohoo.play();
	}

	//This method allows the user to delete an entry.
	onDelete(item) {
		//Iterate over the list of to-dos.
		for (let i = 0; i < this.todos.length; i++) {
			//Check the to-do item list against the clicked item id.
			if(item.id === this.todos[i].id) {
				//If it matches the item in the to-dos list,
				//remove the item using the splice method, call the playAudio method, and stop.
				this.todos.splice(i, 1);
				this.playAudio();
				break;
			}
		}
	}

	//This Drag and Drop method is taken from Angular Material's documentation.
	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
	}

}
