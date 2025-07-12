import { Component } from '@angular/core';
import { NoteListComponent } from './note-list.component';
import { AddNoteComponent } from './add-note.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NoteListComponent, AddNoteComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
