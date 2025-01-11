import { Component } from '@angular/core';
import { DevlyIconComponent } from '../devly-icon/devly-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DevlyIconComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styles: `
  li{
    a{
      @apply block rounded-md py-1 px-2 transition-all hover:scale-105 hover:text-cyan-500 hover:bg-neutral-400/10 active:scale-90;
    }
  }
`,
})
export class NavbarComponent {}
