import { Component, OnInit } from '@angular/core';
import {Heroes} from '../../heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Heroes = {
    id: 1,
    name:'Windstorm'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
