import { HttpClient } from '@angular/common/http';
import { Injectable, signal, Signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.js';
import { SearchResponse } from './types/search-response.type.js';

@Injectable({ providedIn: 'root' })
export class AppService {
  private readonly _message = signal('Servicio de frontend preparado.');

  readonly message: Signal<string> = this._message;

  constructor(private readonly http: HttpClient) {}

  updateMessage(value: string) {
    this._message.set(value);
  }

  loadApiHealth() {
    this.http.get<{ status: string }>(`${environment.apiUrl}/health`).subscribe(result => {
      this._message.set(result.status);
    });
  }

  search(query: string) {
    return lastValueFrom(
      this.http.post<SearchResponse>(`${environment.apiUrl}/search`, {
        query
      })
    );
  }

  registerVendorSubscription(vendorId: string, plan: string) {
    return lastValueFrom(this.http.post(`${environment.apiUrl}/vendor/${vendorId}/subscription`, { plan }));
  }
}
