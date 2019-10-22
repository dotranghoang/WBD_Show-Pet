import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName = 'puppie';
  petImage = 'https://thehappypuppysite.com/wp-content/uploads/2017/12/pictures-of-huskies.jpg';

  constructor() {}

  updateName(name){
      this.petName = name;
  }

  updateImage(image){
    this.petImage = image;
  }

  ngOnInit() {
  }

}
