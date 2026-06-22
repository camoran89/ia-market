import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service.js';
import { environment } from '../environments/environment.js';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    const httpClient = TestBed.inject(HttpClient);
    service = new AppService(httpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should call search endpoint', async () => {
    const promise = service.search('test');

    const request = httpMock.expectOne(`${environment.apiUrl}/search`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual({ query: 'test' });

    request.flush({ query: 'test', results: [], metadata: { source: 'local', query: 'test', location: null } });

    await expect(promise).resolves.toEqual({ query: 'test', results: [], metadata: { source: 'local', query: 'test', location: null } });
  });
});
