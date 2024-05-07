import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})


export class DirectivesComponent {

  movies = [
    {
      id : 1,
      movieName: "The Shawshank Redemption",
      rating: 9.2,
      
    },
    {
      id : 2,
      movieName: "The Godfather",
      rating: 9.2,
    },
    {
      id : 3,
      movieName: "The Dark Knight",
      rating: 9,
    },
    {
      id : 4,
      movieName: "Pulp Fiction",
      rating: 8.9,
    },
    {
      id : 5,
      movieName: "The Lord of the Rings: The Return of the King",
      rating: 9,
    },
    {
      id : 6,
      movieName: "The Good, the Bad and the Ugly",
      rating: 8.8,
    },
    {
      id : 7,
      movieName: "Fight Club",
      rating: 8.8,
    },
    {
      id : 8,
      movieName: "The Lord of the Rings: The Fellowship of the Ring",
      rating: 8.8,
    },
    {
      id : 9,
      movieName: "Forrest Gump",
      rating: 8.8,
    },
    {
      id : 10,
      movieName: "Inception",
      rating: 8.8,
    }
  ]
  

  showText = false;
  occupation = 'student';

  inputText = ''
  serverCreated = false;
  serverStatus = 'No server was created!'

  createdServer(){
    this.serverCreated = true;
    this.serverStatus = `New server was created, server name is` + this.inputText;
  }

}
