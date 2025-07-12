import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from './note.service';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './note-list.component.html'
})
export class NoteListComponent {
  constructor(public noteService: NoteService) {}

  ngOnInit() {
    this.noteService.fetchNotes();
  }
}
