/**
 * Created by puneet on 30/4/17.
 */
import {Component} from 'angular2/core'
import {TweetServices} from './tweet.service'
import {HeartComponent} from './heart.component'
import {PipeSummary} from './summary.pipe'

@Component({
    selector: 'tweet',
    template: `
        <div *ngFor="#tweet of tweetInfo">
            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <img class="media-object" src="{{tweet.tweetImage}}">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading"><span>{{tweet.authorName}}</span>{{tweet.tweetHandle}}</h4>
                    {{tweet.tweetContent | summary:20 }}
                    <heart [isHeart]="tweet.isLiked" (changeCount)="onLikeChange($event, tweet)"></heart>
                    {{tweet.totalLikes}}
                </div>
            </div>
        </div>
        <br/>
    `,
    providers: [TweetServices],
    directives: [HeartComponent],
    pipes:[PipeSummary]

})
export class TweetComponent{
    tweetInfo;

    constructor(tweetServies: TweetServices){
        this.tweetInfo = tweetServies.getTweetInfo();
    }

    onLikeChange($event, tweet){

        if($event.heart) {
            tweet.totalLikes += 1;
        }
        else {
            tweet.totalLikes -= 1;
        }
    }
}