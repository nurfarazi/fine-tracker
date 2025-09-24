import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <header>
      <nav>
        <ul>
          <li><a routerLink="/users">Users</a></li>
          <li><a routerLink="/rules">Rules</a></li>
          <li><a routerLink="/fines">Fines</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    header {
      background-color: #333;
      color: white;
      padding: 1rem;
    }
    nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
    }
    nav li {
      margin-right: 1rem;
    }
    nav a {
      color: white;
      text-decoration: none;
    }
    main {
      padding: 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
