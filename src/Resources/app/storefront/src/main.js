const PluginManager = window.PluginManager;

import BrowserDetectionPlugin from "./js/plugin/browser-detection/browser-detection.plugin";

PluginManager.register('BrowserDetectionPlugin', BrowserDetectionPlugin, 'body');