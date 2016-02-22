#Optimizely Toggle Chrome

##What is it?

A Chrome extension which can disable Optimizely for your current tab.

##How do I use it?

Once the [extension](https://chrome.google.com/webstore/detail/optimizely-toggle-for-chr/eaoflpgigmnhpmdgnphpomomaflfglmj?authuser=1) is installed on your browser, you can toggle a simple switch to disable or enable Optimizely experiments on the current page (see screenshots).

![enabled](/src/img/screenshots/plugin-screenshot-enabled.png?raw=true)

Optimizely is enabled by default and can be disabled by clicking the switch. An example of this is shown in the screenshot below:

![disabled](/src/img/screenshots/plugin-screenshot-disabled.png?raw=true)

##How do I contribute to this project?

This is an Open Source project, and all feedback is welcome and pull requests encouraged.

```
git clone https://github.com/opentable/optimizely-toggle-chrome.git
cd optimizely-toggle-chrome
```

To test changes to the extension locally simply install your edited version locally to Chrome. Type chrome://extensions/ on a tab, then select 'Load unpacked extensions...'. It will install your own version of Optimizely Toggle.

![install](/src/img/screenshots/chrome-installation.jpg?raw=true)

## Release History
- **v1.0.0** (2016-01-20)
    - initial release.
- **v1.0.1** (2016-01-20)
    - basic UI changes.
- **v1.0.2** (2016-01-20)
    - added visual alert to the page when the toggle is disabling Optimizely.
- **v1.0.3** (2016-02-11)
    - refactored HTML alert injection.
- **v1.0.4** (2016-02-22)
    - styling and UI fixes by [@ajcw](https://github.com/ajcw).    