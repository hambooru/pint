##### 💔 Pint is now retired. It's sad to see one of my own projects to go to the history books, but maybe it's our memories with Pint that never goes away. Thank you for all the support of this project and the friends we've made along the way.

# <a  href="https://projects.fuwa.sh/pint/"><img align="left" height="100" src="/docs/assets/pint-logo.png"/></a> **Pint** for GitHub

![pint-status](https://img.shields.io/badge/pint%20src-2.0-green)
![chrome-web-store-version](https://img.shields.io/chrome-web-store/v/mjhmdkcefcklflcmmokoahfdodcpeobg)
![chrome-web-store-users](https://img.shields.io/chrome-web-store/users/mjhmdkcefcklflcmmokoahfdodcpeobg)

<hr>

[pint](https://projects.fuwa.sh/pint/) is a theming engine that allows you to theme your github experience.


### project features
- Complete control of personalisation of every element.
- With the right settings, you can also achieve light theme too.
- Quickly paint groups of colors with the Group Painter.
- Quickly paint the entire site with the Update All button.
- Individual control of every possible element (change the color of any individual element without affecting the rest)
- Suggest colors that match the color you picked.
- Custom CSS to modify each button to each div just the way you like it.
- Free and Open-source and will always be.

## installation

you can install this extension via the chrome web store or manually.

### chrome web store installation
<a href="https://chrome.google.com/webstore/detail/gitccentify/mjhmdkcefcklflcmmokoahfdodcpeobg"><img src="https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/UV4C4ybeBTsZt43U4xis.png" /></a>

### precompiled installation (.crx)
1. grab the latest release [here](https://github.com/fuwaa/pint/releases)
2. open it using chrome

### precompiled installation (.zip)
1. grab the latest release [here](https://github.com/fuwaa/pint/releases)
2. unzip into a directory
3. turn on developer mode
4. load unpacked extension
5. load the build folder

### source installation

1. clone this repository
2. run `yarn build`
3. open extension settings in chrome/brave/chromium
4. turn on developer mode
5. load unpacked extension
6. load the build folder

## roadmap

please check [issues](https://github.com/fuwaa/pint/issues) for planned additions, feature requests, bugs and more information.

alternatively, you can also open a [new issue](https://github.com/fuwaa/pint/issues/new) to add to it!

## limitations

> 💡 I am still looking for ways to better implement this! if you have any idea, please open an issue or create a pull request [here](https://github.com/fuwaa/pint/issues/new/choose)

The old implementation used a `setTimeout()` function, however the delay makes the project look like garbage as you can see the original colors before seeing your palette applied. The new implementation simply throws the entire css of github and unsets it while hiding the entire html making github look like an empty page until your palette gets loaded. Slight issue though, a flicker comes from time to time but it isn't noticable.

## documentation

Documentation is planned to debut on [fuwadocs](https://docs.fuwa.sh/pint/), however it is still in progress and is quite low on the priority queue.

## contributing

contributions are welcome ❤️. however, please do keep in mind that this is a very early project and things are bound to be [messy](https://github.com/fuwaa/pint/issues/37). while code quality is my top priority, i'm implementing it as i go (which is a bit slow since I'm porting this myself to typescript) and would appreciate help regarding it so we could learn more from it too.

## project structure
[![Structure](https://images.repography.com/27896465/fuwaa/pint/structure/a993ba4f490beac88c1084429e54e710_table.svg)](https://github.com/fuwaa/pint)

###### This extension is licensed under the GPLv3 License.

###### This project is not affiliated, associated, endorsed by, or in any way officially connected with GitHub, Inc. and Git, or any of its subsidiaries or its affiliates.

