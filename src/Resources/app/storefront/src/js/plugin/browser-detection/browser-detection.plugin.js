import Plugin from 'src/plugin-system/plugin.class';

export default class BrowserDetectionPlugin extends Plugin {
    static options = {
        browsers: [
            { name: 'chrome',   test: () => !!window.chrome },
            { name: 'firefox',  test: () => typeof InstallTrigger !== 'undefined' },
            { name: 'safari',   test: () => /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)) },
            { name: 'opera',    test: () => (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0 },
            { name: 'edge',     test: () => !document.documentMode && !!window.StyleMedia },
            { name: 'ie',       test: () => !!document.documentMode }
        ]
    };

    init() {
        this.detectBrowser();
    }

    detectBrowser() {
        const detectedBrowser = this.options.browsers.find(browser => browser.test());
        
        if (detectedBrowser) {
            document.body.classList.add(`is-${detectedBrowser.name}`);
        }
    }
}