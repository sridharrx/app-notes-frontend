import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteService } from './note.service';
import { Note } from './note.model';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-note.component.html'
})
export class AddNoteComponent {
  title = '';
  body = '';

  constructor(private noteService: NoteService) {}

  addNote() {
    if (this.title.trim() && this.body.trim()) {
      const newNote: Note = { title: this.title, body: this.body };
      this.noteService.addNote(newNote);
      this.title = '';
      this.body = '';
    }
  }
}
