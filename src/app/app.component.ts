import { Component } from '@angular/core';

interface Room {
  type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public splash = false;
  public rooms: Room[] = [
    { type: 'neutral' },
    { type: 'neutral' },
    { type: 'neutral' },
    { type: 'neutral' },
    { type: 'neutral' },

    { type: 'neutral' },
    { type: 'neutral' },
    { type: 'neutral' },
    { type: 'neutral' },
    { type: 'neutral' },

    { type: 'neutral' },
    { type: 'neutral' },
    { type: 'entrance' },
    { type: 'neutral' },
    { type: 'neutral' },

    { type: 'neutral' },
    { type: 'neutral' },
    { type: 'neutral' },
    { type: 'neutral' },
    { type: 'neutral' },

    { type: 'neutral' },
    { type: 'neutral' },
    { type: 'neutral' },
    { type: 'neutral' },
    { type: 'neutral' },
  ];
}
