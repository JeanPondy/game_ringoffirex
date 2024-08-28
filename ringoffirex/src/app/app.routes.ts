import { Routes, RouterModule } from '@angular/router';
import { StartCreenComponent } from './start-creen/start-creen.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
    { path: '', component: StartCreenComponent },
    { path: 'game', component: GameComponent },
   
];
