import { JokesService } from './jokes.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jokeaday';
  hasJoke = false;
  joke;

  constructor(private http: HttpClient, private jokesService: JokesService) {}

  onFetchJoke() {
    this.jokesService.fetchJokes().subscribe(joke => {
      this.joke = joke;
      console.log(joke);
      this.hasJoke = true;
    });
  }

  ngOnInit() {
    this.onFetchJoke();
  }
}
