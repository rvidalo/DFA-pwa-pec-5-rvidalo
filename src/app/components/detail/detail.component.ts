import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/detail.interface';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  character!: Character;

  constructor(
    private rickandmortyService: RickandmortyService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier: string | null = this.activatedRoute.snapshot.paramMap.get('id') ?? "";
    console.log('Identifier -->', identifier);

    this.rickandmortyService.getCharacterById(identifier).subscribe((character) =>{
      if(!character){
        return this.router.navigateByUrl('/');
      }
      this.character = character;
      console.log('Character --> ', this.character);
      return;
    });
  }

}