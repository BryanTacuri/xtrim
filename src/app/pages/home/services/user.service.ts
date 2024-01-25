import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ResponseDate } from '../../../interfaces/Response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:5000';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<ResponseDate> {
    const path = this.url + '/user';
    return this.http.get<ResponseDate>(path);
  }
}
