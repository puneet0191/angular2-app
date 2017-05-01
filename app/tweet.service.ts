/**
 * Created by puneet on 30/4/17.
 */
import {Injectable} from 'angular2/core'

@Injectable()

export class TweetServices{

    getTweetInfo(){

        return [{tweetContent: "This is my First Tweet, but I don't really like the way things are going on in my life at the moment", tweetImage:'http://lorempixel.com/100/100/people/?1', authorName: 'Somme One', tweetHandle:'@someone', isLiked: true, totalLikes: 2},
            {tweetContent: "This is my First Tweet", tweetImage:'http://lorempixel.com/100/100/people/?2', authorName: 'Anny One', tweetHandle:'@anyone', isLiked: false, totalLikes: 40},
            {tweetContent: "This is my First Tweet", tweetImage:'http://lorempixel.com/100/100/people/?3', authorName: 'Yourr Self', tweetHandle:'@yourself', isLiked: true, totalLikes: 20}]
    }
}