import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors() {
    return ["Herodotus", "Thucydides", "Socrates", "Plato", "Aristotle"];
  }


  constructor() { }
}
