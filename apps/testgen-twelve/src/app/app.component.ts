import { Component } from '@angular/core';

@Component({
  selector: 'testgen-twelve-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'testgen-twelve';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
