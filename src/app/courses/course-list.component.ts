import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'

})

export class CourseListComponent implements OnInit{
  courses: Course[] = [];


  ngOnInit(): void{
    this.courses = [
      {
      id: 1,
      name: 'Angular: Forms',
      imgUrl: '',
      price: 99.99,
      code: 'XPS',
      duration: 120,
      rating: 4.4,
      releaseDate: 'December, 2, 2020'
      },
      {
        id: 2,
        name: 'Mysql',
        imgUrl: '',
        price: 79.99,
        code: 'XHP',
        duration: 150,
        rating: 4.0,
        releaseDate: 'November, 15, 2019'
        }

  ]
  }
}
