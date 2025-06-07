import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// pages
import { HomePage } from './pages/home-page/home-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Felipe_Hunter_Angular';
}
