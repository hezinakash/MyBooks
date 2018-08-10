import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonFileService {

  constructor(private http: Http) { }

  readJsonFile(path: string) {
   return this.http.get(path)
              .pipe(take(1));
  }
}
