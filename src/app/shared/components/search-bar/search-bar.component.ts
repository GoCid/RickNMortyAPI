import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  template: `
  <div class="ms-5 flex w-[100%] items-center justify-between">
    <input
        #inputSearch
        type="search"
        autofocus
        type="text"
        class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-surface placeholder-white transition duration-300 ease-in-out focus:border-primary focus:text-gray-50 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
        (keyup)="search(inputSearch.value)"
    />
  </div>`,
})
export class SearchBarComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit(): void {}

  search(value: string) {
    if (value && value.length >= 3) {
      this.router.navigate(['/character-ls'], { queryParams: { q: value } });
    }
  }
}
