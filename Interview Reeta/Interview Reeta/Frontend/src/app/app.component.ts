import { Component } from '@angular/core';
import { NewsService } from './news.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpSer: NewsService){}
  newsList: any
  submitted:boolean = false
  searchNews(text,source){
    const param1 = text.value
    const param2 = source.value
    this.httpSer.getAll(param1,param2)
    .subscribe(
      data => {
        if(data.hits){
          this.newsList = data.hits
          this.submitted = true
        }else{
          this.newsList = ''
          this.submitted = true
        }
      },
      error => {
        console.log(error);
      });
  }

  selectedList(news){

  }
}
