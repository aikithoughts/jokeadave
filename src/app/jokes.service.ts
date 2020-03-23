import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Joke } from './joke.module';

@Injectable({providedIn: 'root'})
export class JokesService {

    constructor(private http: HttpClient) {}

    fetchJokes() {
        return this.http
        .get<Joke>(
            'https://icanhazdadjoke.com/',
            {
                headers: new HttpHeaders({'Accept': 'application/json',
                'User-Agent': 'jokeadave (https://github.com/aikidave/jokeadave)'})
            }
        )
        .pipe(
            map(responseData => {
                let joke: Joke;
                joke = responseData;
                // for (const key in responseData) {
                //   if (responseData.hasOwnProperty(key)) {
                //     joke = { ...responseData[key]};
                //   }
                // }
                return joke;
            })
        );
    }
}
