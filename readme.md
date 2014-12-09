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

Licence
===

The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.