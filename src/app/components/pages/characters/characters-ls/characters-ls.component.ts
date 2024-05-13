import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Character } from '@app/shared/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { take } from 'rxjs/operators';

type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-characters-ls',
  templateUrl: './characters-ls.component.html',
  styleUrls: ['./characters-ls.component.scss']
})
export class CharactersLsComponent {
  characters: Character[] = [];

  info: RequestInfo = {
    next: '',
  };

  private page = 1;
  private query: string = '';
  private hideScroll = 200;
  private showScroll = 500;
  
  constructor(
    private characterSvc: CharacterService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
    this.getCharactersQuery();
  }

  //get the query from the search-bar component
  private getCharactersQuery(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.characters = [];
      this.query = params.get('q') || '';
      this.getData();
    });
  }

  private getData(): void {

    this.characterSvc.searchCharacter(this.query,this.page)
    .pipe(
      take(1)
    ).subscribe((res: any) => {
      if (res?.results?.length) {
        const { info, results } = res;
        this.characters = [...this.characters, ...results];
        this.info = info;
      }else{
        this.characters = [];
      }
    });
  }
}
