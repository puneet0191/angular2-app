/**
 * Created by puneet on 26/4/17.
 */
import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
import {HeartComponent} from './heart.component'

@Component({
    selector:'courses',
    template:`
        <h2>Courses</h2>
        {{ title }}
        <input type="text" autoGrow/>
            
        <ul>
            <li *ngFor="#course of courses">
               {{ course.courseName }}<heart [isHeart]="course.isLiked" (changeCount)="onHeartClick($event, course)"></heart>
                {{course.totalLikes}}
            </li>
        </ul>
        `,
    providers: [CourseService],
    directives:[AutoGrowDirective, HeartComponent]
})
export class CoursesComponent {
    title = "These are my courses";
    courses;
    constructor(courseServices: CourseService){
        this.courses = courseServices.getCourses();
    }

    onHeartClick($event, course){

        if($event.heart) {
            course.totalLikes += 1;
        }
        else {
            course.totalLikes -= 1;
        }
    }

}