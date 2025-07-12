import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note.model';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NoteService {
  private baseUrl = 'https://app-notes-fullstack.onrender.com/api/notes';

  notes = signal<Note[]>([]);
  loading = signal(false);

  constructor(private http: HttpClient) {}

  fetchNotes() {
    this.loading.set(true);
    this.http.get<Note[]>(this.baseUrl).subscribe({
      next: (data) => this.notes.set(data),
      error: (err) => console.error('Fetch failed', err),
      complete: () => this.loading.set(false)
    });
  }

  addNote(note: Note) {
    this.loading.set(true);
    this.http.post<Note>(this.baseUrl, note).subscribe({
      next: (created) => {
        this.notes.update((existing) => [...existing, created]);
      },
      error: (err) => console.error('Add failed', err),
      complete: () => this.loading.set(false)
    });
  }
}
