/**
 * Created by puneet on 27/4/17.
 */
import {Injectable} from 'angular2/core'

@Injectable()

export class CourseService{
    courseInfo = [
        {courseName: "First Course", isLiked: false, totalLikes: 10},
        {courseName: "Second Course", isLiked: false, totalLikes: 20},
        {courseName: "Third Course", isLiked: true, totalLikes: 23}
    ];

    getCourses(){
        return this.courseInfo;
    }
}