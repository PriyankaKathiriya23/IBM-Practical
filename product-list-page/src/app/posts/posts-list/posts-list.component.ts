import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostService } from '../post.service';
import { ViewChild } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts$: Observable<Post[]> ;
 @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;
  productsPerPage:number = 4;
  
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getAll();
    this.dataSource= new MatTableDataSource<Post>
  }
  changePageSize(event:Event){

  }
 
}

