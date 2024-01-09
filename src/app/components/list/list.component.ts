import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/detail.interface';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  characters: Character[] = [];

  constructor(private rickandmortyService: RickandmortyService) {}

  ngOnInit(): void {
    this.rickandmortyService.getAllCharacter().subscribe((characters) => this.characters = characters);
  }
}
