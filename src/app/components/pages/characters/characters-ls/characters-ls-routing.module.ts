import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersLsComponent } from './characters-ls.component';

const routes: Routes = [{ path: '', component: CharactersLsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersLsRoutingModule { }
