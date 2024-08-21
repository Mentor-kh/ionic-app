import { Component, Input } from '@angular/core';
import { Feed } from './feed.interface';
import { CommonModule } from '@angular/common';
import { IonAvatar, IonImg, IonIcon, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [IonButton, IonIcon, IonImg, IonAvatar, CommonModule],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  @Input() public feed?: Feed;
}
