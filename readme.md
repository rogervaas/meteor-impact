How to run it?
---

#### On the command line run:

Run:

```
$ node server
```

You will create a server with a port :3000 (default one). Go to a browser, open localhost:3000

Click to start the game. After starting it, from your mobile phone open ip:3000/mobile (where ip is your machine
local IP. You should be on the same network for this to work).

You can also upload it on cloud service like Heroku, and replace the localhost, and ip with your domain. But you
might have some latency issues if your internet connection is not fast enough.

#### How to install and edit stuff?

Run:

```
$ npm install
```

```
$ gulp build
```

```
$ node server
```

Every time you make any changes, please run gulp build. This will build the script.