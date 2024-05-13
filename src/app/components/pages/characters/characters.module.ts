import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharactersDetailsComponent } from '@characters/characters-details/characters-details.component';
import { CharactersLsComponent } from '@characters/characters-ls/characters-ls.component';

const Components = [
  CharactersDetailsComponent , 
  CharactersLsComponent, 
];


@NgModule({
  declarations: [
    ...Components
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...Components
  ]
})
export class CharactersModule { }
