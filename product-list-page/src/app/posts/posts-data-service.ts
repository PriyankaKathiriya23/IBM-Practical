import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PostsDataService extends DefaultDataService<Post> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Post', http, httpUrlGenerator);
  }
  override getAll(): Observable<Post[]> {
    return this.http
      .get(`https://random-data-api.com/api/cannabis/random_cannabis?size=30`)
      .pipe(
        map((data) => {
          const posts: Post[] = [];
          for (let key in data) {
            posts.push({ ...data[key], id: key });
          }
          return posts;
        })
      );
  }
}