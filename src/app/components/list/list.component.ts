import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Character } from 'src/app/models/detail.interface';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  characters: Character[] = [];
  isGridView: boolean = false;

  constructor(private rickandmortyService: RickandmortyService) {}

  ngOnInit(): void {
    this.rickandmortyService.getAllCharacter()
    .pipe(delay(500))
    .subscribe((characters) => this.characters = characters);
  }

  switchToTable() {
    this.isGridView = false;
  }

  switchToGrid() {
    this.isGridView = true;
  }
}
