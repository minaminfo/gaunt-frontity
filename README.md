# Frontity project w/ `gaunt-theme`

This repository contains a Frontity project using the `gaunt-theme` developed by [@minaminfo](https://github.com/minaminfo)

## About Frontity _themes_ structure

In Frontity, _themes_ are packages that can be published in NPM so they can be installed and used in any other Frontity project

> You can find all the Frontity themes looking for the tag [`frontity-theme`](https://www.npmjs.com/search?q=keywords:frontity-theme) at npm

The suggested structure for developing new themes that works with frontity is the following one, where the theme we're developing is a local dependency of our main `package.json`

```
"dependencies": {
    "gaunt-theme": "file:packages/gaunt-theme"
  }
```

> This type of dependency is automatically define if we create the package (theme) w/ the frontity command `npx frontity create-package gaunt-theme`

This structure implies having a main Frontity project (root `package.json`) and some packages (each one with its own `package.json`) under the `packages` folder

```text
/my-frontity-project
|__ frontity.settings.js
|__ package.json
|__ /node_modules
|__ /packages
    |__ /my-theme
    |__ /my-custom-extension-1
    |__ /my-custom-extension-2
```

### [The Project](https://docs.frontity.org/learning-frontity/project)

These files in the root represents the Frontity project that can be launched and that will allow us to see the _theme_ (or any other package) in action

In the *root folder* you'll find the following:

##### `frontity.setting.js`

A [`frontity.setting.js`](https://docs.frontity.org/learning-frontity/project#the-frontity-setting-js-file) file containing the settings for your project (among other settings you'll usually define the use of this theme)

For example: 
```
...
"packages": [
    {
      "name": "gaunt-theme"
    },
...
```

##### `node_modules`

A  [`/node_modules/`](https://docs.frontity.org/learning-frontity/project#the-node_modules-folder) folder, where the dependencies of the project are installed

##### `packages`

A [`packages`](https://docs.frontity.org/learning-frontity/project#the-packages-folder) folder where your local packages live

##### `package.json`

And a [`package.json`](https://docs.frontity.org/learning-frontity/project#the-package-json-file) with the configuration & dependencies for the Frontity project. 

This `package.json` is used when you publish a package in NPM, but this Frontity project is not meant to be published

Notice the

```
"private": true`
````
preventing this package (the main Frontity project defined in the root) being published

### The Theme

So, with this structure we can develop our theme as a package inside the `packages` folder. Each one of these _packages_ will have its own `package.json` and these packages are the ones meant to be published (`npm publish`)

> In frontity we can create a new package by doing `npx frontity  create-package <my package name>` (from the root of the Frontity project)

### Why this structure?

This structure allows to:
- Launch the project using the theme locally
- Publish the theme independently 

So any developer can clone this project, launch the Frontity project locally, have a look at how the theme looks like & behave and make contributions (pull requests) to your repository (that can be eventually merged into the main repo).

With all of this, the owner of the theme still can publish those new updates independently (from the theme folder, `packages/gaunt-theme` in this case)

## Installing

So, after these explanations... what do I need to do before launching locally this project using this theme?

From the root

```
npm install
```

This command will install the dependencies of the Frontity project and the dependencies of its dependencies, just as any other npm package

So, as our theme is also one of our dependencies ([a local dependency](https://www.viget.com/articles/how-to-use-local-unpublished-node-packages-as-project-dependencies/)) is: 

```
"dependencies": {
   ...
    "gaunt-theme": "file:packages/gaunt-theme"
  }
```

All needed dependencies are installed (the ones defined for the frontity project and the ones defined for the theme)

>  More info about this → npm install <folder>: https://docs.npmjs.com/cli/install

## Launching

Once we have all the dependencies installed we can do (from the root)

```
npx frontity dev
```

This will launch the Frontity project using this theme

## Publishing the theme

Just do:

```
cd packages/gaunt-theme
npm publish
```