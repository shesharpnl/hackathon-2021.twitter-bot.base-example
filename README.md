# hackathon-2021.twitter-bot.base-template

This repository was created to be used during the [SheSharp Hackathon 2021](https://www.shesharp.co/2021-hackathon/) as a boilerplate for one of the challenges proposed.

In a sense it uses [github actions](https://github.com/features/actions) with a [node.js](https://nodejs.org/en/) script to trigger messages events on [Twitter](https://twitter.com/?lang=en).

## Requirements 

To be able to develop an Twitter bot using GitHub actions and node.js you will need:

1. A github account and repository
1. Node.js installed on your machine
1. A Twitter account
1. A Twitter DEV account

# Where do I store my app keys/passwords? 🤔

When developing an app we **NEVER** expose keys or passwords on our application! That's because of security reasons... for example if you write down your database credentials on your code, **ANYONE** can have access to your database making it easy to change data and access personal information.

On our case, we are not working with databases - phewww 😉 

But we still have sensitive keys that we need on our app like our **TWITTER_API_SECRET**, which is **one** of the secrets generated on twitter when you create your bot app! For more information about it, check the next section.

We can't hard code it's value on the codebase, so we need to create a **.env** file! 

A **.env** file is where we place all our Enviroment Variables, like credentials, passwords, environment settings... You can read more about it [here](https://dev.to/aadilraza339/what-is-env-file-in-node-js-3h6c)

So now you know that you should store your app sensitive data into an .env file, but don't forget to add it into your **.gitignore** file so it won't be commited on your repository. If you push your .env filled with information to your repository it would be the same as not having a .env at all, am I right? 
🤓

## But how github actions will have access to the environment variables without the .env file? 🤨

Well these version-controlled source code and file hosting platforms like GitHub, BitBucket, GitLab and etc, have an special place for that.

On our case (GitHub) on your repository you can find a navbar.

![Repository Navbar](./docs/images/repositoryNavbar.png?raw=true "Repository Navbar")

You should click on Settings. On this page you can find all the settings related with your repository, including branches, access, webhooks... everything!

![Settings Menu](./docs/images/settingsMenu.png?raw=true "Settings Menu")

If look close to the end of the side bar you should find the secrets button, on that page is where we store the secrets that we need on our application to run, on this case the **twitter secrets**.

After navigating to the secrets on the menu item, you should be able to see different sections of secrets... On this application we will need to click on the new repository secret button on the top.

![Repository Secrets](./docs/images/repositorySecrets.png?raw=true "Repository Secrets")

There you should be able to add your secret 😉. Make sure to add the name as the **same** as you have written on your code!

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

We have different ways to creating a twitter bot! Literally tones of libraries around the internet that might help you out on this 😉

On this example we are using "twitter-api-client" library, which is a easy and quick way to have your Bot up and running with a few lines of code as it has tones of functions available for each action you would like to execute on your Twitter. 

Please check index.js to see how can we easily update the status of your twitter by using the library.

# How can I update my twitter status by time to time? Do I always need to run the script?

On this applicaton, to update the status of your twitter account we need to run the node.js script everytime... But we don't have to run it manually! We can use [GitHub Actions](https://github.com/features/actions) to make it run after a certain amount of time or after an specific trigger!😉

As the goal of our Bot is to **update twitter status after an amount of time**, we don't need a script listening to actions but just **triggering the action**.

So based on that GHA fits perfectly 🚀

# How do I create a GitHub Action workflow? And how do I schedule it to run by time?

Github Actions enables you to create custom software development lifecycle workflows directly in your Github repository. These workflows are made out of different tasks so-called actions that can be run automatically on certain events.

This enables you to include Continues Integration (CI) and continuous deployment (CD) capabilities and many other features directly in your repository.

To start your first **Workflow** you first need to create a directory on the root of your project called **".github"** . Then inside of this directory you create another one called **"workflows"**. These second folder will hold all the workflows of your application! 

Notice that this folders are not only a matter of **organizing** your repo, but is also the **"syntax"** of github actions. The folders needs to have this exact name and this hierarchy so github can read it 🤖.

Then, inside of your workflows folder, you can create your <insert_here_workflow_name>.yml file. The name of the workflow is up to you! The best practice is to name it as it represents or on when it is triggered. For example, on this repo I called it "every-one-hour.yml"... So then without even opening the file you already know that "something is done by this workflow every one hour".

Now inside the file we have **default key words** that are used to define our workflow for that I would recomend you to read [this article about Github actions](https://medium.com/intelligentmachines/github-actions-basics-40a4d9b417f8) or/and [this other article about Github actions](https://gabrieltanner.org/blog/an-introduction-to-github-actions) 📚 They are not very long, but it explains how the file works and its core key words 😉.

After this, you might understand the workflow implemented on this example 🎉

If you still wonder how our event trigger works on the workflow file I recomend you to check [this part of the docs](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows#schedule) 😉 and for deeply understanding on the subject you can check the [GitHub documentation](https://docs.github.com/en/actions)

## Notes:

1. This approach will not work with "reaction actions" as if you want your Bot to react in interactions made to it. Thats because to do so your Bot script needs to be running all the time to be able to listen to this actions and this approach **we trigger the bot once in a while**, if you would like your bot to be more **interactive** you need to place it up and running in a server
1. As we are using GHA to run the script, make sure to finish the process at the end of the desired action otherwise your GHA will fail because of **timeout** or it will not **stop running**.