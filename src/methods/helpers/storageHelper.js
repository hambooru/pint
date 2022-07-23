/*global chrome*/

/**
 *  Set a key and autoreload
 *  @param {string} setting - setting to update
 */
export function pintSet(setting, value) {
  var pintKey = {};
  pintKey[`${setting}`] = value;
  chrome.storage.local.set(pintKey);
  chrome.tabs.reload();
}

/**
 *  Set a key without reloading
 *  @param {string} setting - setting to update
 *  @param {string} value - Color to replace the current color with
 */
export function pintSetNoReload(setting, value) {
  var pintKey = {};
  pintKey[`${setting}`] = value;
  chrome.storage.local.set(pintKey);
}

/**
 *  Gets a setting and calls it back (normally used for react useState)
 *  @param {string} setting - get this setting
 */
export function pintGetUpdate(setting, func) {
  chrome.storage.local.get([`${setting}`], function (result) {
    func(result[`${setting}`]);
  });
}

/**
 *  Updates multiple settings at once
 *  @param {array} settings - settings of settings to update
 *  @param {string} color - Color to replace the current color with
 */
export function updateMultiple(settings, color) {
  for (var i = 0; i < settings.length; i++) {
    pintSetNoReload(settings[i], color);
  }
}
