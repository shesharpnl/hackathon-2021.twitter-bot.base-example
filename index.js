const { TwitterClient } = require('twitter-api-client');
const phrases = require('./phrases.json');


const getRandomIndexFromArray = (array) => {
    return Math.floor( Math.random() * phrases.positive.length );
}

const tweet = phrases.positive[getRandomIndexFromArray(phrases.positive)];


const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_API_KEY,
    apiSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

twitterClient.tweets.statusesUpdate({ status: tweet })
    .then(response => {
        console.log("Tweeted!", response);
        process.exit();
    }).catch(err => {
        console.error(err);
        process.exit();
    });