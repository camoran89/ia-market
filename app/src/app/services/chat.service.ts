import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../features/common/chat/types/message.type';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = '/api/chat'; // Adjust if your API endpoint is different

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, { message });
  }
}
