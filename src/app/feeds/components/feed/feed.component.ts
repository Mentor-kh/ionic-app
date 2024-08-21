import { Component, Input } from '@angular/core';
import { Feed } from './feed.interface';
import { CommonModule } from '@angular/common';
import { IonAvatar, IonImg, IonIcon, IonButton } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { heart, chatboxEllipsesOutline, shareSocialOutline } from 'ionicons/icons';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [IonButton, IonIcon, IonImg, IonAvatar, CommonModule],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  @Input() public feed?: Feed;

  public constructor() {
    addIcons({ heart, chatboxEllipsesOutline, shareSocialOutline });
  }
}
