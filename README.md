# hackathon-2021.twitter-bot.base-template

This repository was created to be used during the [SheSharp Hackathon 2021](https://www.shesharp.co/2021-hackathon/) as a boilerplate for one of the challenges proposed.

In a sense it uses [github actions](https://github.com/features/actions) with a [node.js](https://nodejs.org/en/) script to trigger messages events on [Twitter](https://twitter.com/?lang=en).

## Requirements 

To be able to develop an Twitter bot using GitHub actions and node.js you will need:

1. A github account and repository
1. Node.js installed on your machine
1. A Twitter account
1. A Twitter DEV account

# How do I create a developer account on Twitter?

First thing first, you need to log in to [Twitter Developer's portal](https://developer.twitter.com/) with the Twitter account you want the bot to tweet from.

Once you do that, go [here](https://developer.twitter.com/en/portal/apps/new) to create a new app. You can also find this under:

Projects & Apps > Overview > Create App.

You will be asked to enter information like the name of the app, description of the app, and what you will be using the app for. 

Once you're done, you'll be shown a set of keys. We will need this keys to be able to trigger our Bot, but don't be scared... you can regenerate this keys anytime. One important thing to highlight is that this keys that you see right now **doesn't have the write permission** by default, so if you want to updated the permission of your App you **must regenerate your keys**🚨

Scroll down and click on App Settings.
When you go to your app's dashboard, click on the Settings tab, then scroll down to App permissions. You will see that it says Read. We need to change that to Read and Write if we're going to be tweeting, so click on the edit button and choose Read + Write from the list, then click Save.

![App permissions settings](./docs/images/permission.png?raw=true "App permissions settings")

As we updated the permissions, and we meantioned it before, you need to regenerate your app keys, make sure to save them as you can't see them later unless you regenerate again.

We need the following keys on our .env file to be able to trigger our Twitter bot:

```
TWITTER_API_KEY=
TWITTER_API_SECRET=
TWITTER_ACCESS_TOKEN=
TWITTER_ACCESS_TOKEN_SECRET=
```

# How to create a Twitter bot script?

We have different ways to creating a slackbot! Literally tones of libraries around the internet that might help you out on this 😉

On this example we are using "twitter-api-client" library, which is a easy and quick way to have your Bot up and running with a few lines of code as it has tones of functions available for each action you would like to execute on your Twitter. 

Please check index.js to see how can we easily update the status of your twitter by using the library.

# How can I update my twitter status by time to time? Do I always need to run the script?

On this applicaton, to update the status of your twitter account we need to run the node.js script everytime... But we don't have to run it manually! We can use [GitHub Actions](https://github.com/features/actions) to make it run after a certain amount of time or after an specific trigger!😉

As the goal of our Bot is to **update twitter status after an amount of time**, we don't need a script listening to actions but just **triggering the action**.

So based on that GHA fits perfectly 🚀

## Notes:

1. This approach will not work with "reaction actions" as if you want your Bot to react in interactions made to it. Thats because to do so your Bot script needs to be running all the time to be able to listen to this actions and this approach **we trigger the bot once in a while**, if you would like your bot to be more **interactive** you need to place it up and running in a server
1. As we are using GHA to run the script, make sure to finish the process at the end of the desired action otherwise your GHA will fail because of **timeout** or it will not **stop running**.