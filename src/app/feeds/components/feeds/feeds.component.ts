import { Component, OnDestroy, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { Subscription } from 'rxjs';
import { Feed } from '../feed/feed.interface';
import { FeedComponent } from '../feed/feed.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feeds',
  standalone: true,
  imports: [FeedComponent, CommonModule],
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit, OnDestroy {
  public feeds?: Feed[];

  private subscription: Subscription = new Subscription();

  constructor(private feedService: FeedService) { }

  public ngOnInit(): void {
    this.subscription = this.feedService.getFeeds().subscribe({
      next: (res: Feed[]) => this.feeds = res,
      error: (err: Error) => console.error(err),
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
