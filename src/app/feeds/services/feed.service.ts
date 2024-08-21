import { Injectable } from '@angular/core';
import { Feed } from '../components/feed/feed.interface';
import { MockFeeds } from '../components/feed/mock-feeds';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    // private apiService: ApiService,
  ) { }

  public getFeeds(): Observable<Feed[]> {
    // return this.apiService().getFeeds();
    return of(MockFeeds)
  }
}
