/**
 * Created by puneet on 30/4/17.
 */
import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({
    name: 'summary'
})

export class PipeSummary implements PipeTransform{

    transform(value: string, args: string[]){

       var limit = (args && args[0]) ? parseInt(args[0]) : 50;

       if(value){
           return value.substr(0, limit) + "...";
       }
    }
}