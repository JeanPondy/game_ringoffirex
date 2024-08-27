import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-start-creen',
  standalone: true,
  imports: [],
  templateUrl: './start-creen.component.html',
  styleUrl: './start-creen.component.scss'
})
export class StartCreenComponent {

  constructor(private router: Router) { }

  newGame() {
    // start game
    this.router.navigateByUrl('/game');
  }
}
