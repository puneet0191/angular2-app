/**
 * Created by puneet on 27/4/17.
 */
import {Injectable} from 'angular2/core'

@Injectable()

export class CourseService{
    getCourses() : string[] {
        return ["First Course", "Course two ", "Course Three"];

    }
}