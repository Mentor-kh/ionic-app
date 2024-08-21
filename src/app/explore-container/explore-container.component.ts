import { Component, Input } from '@angular/core';
import { FeedsComponent } from '../feeds/components/feeds/feeds.component';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  imports: [FeedsComponent]
})
export class ExploreContainerComponent {
  @Input() name?: string;
}
