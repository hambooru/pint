/*global chrome*/

export function pintSet( setting, value ) {
    var pintKey = {};
    pintKey[`${setting}`] = value;
    var settingVar = setting.replace(/_/g, "-");
    chrome.storage.local.set(pintKey);
    chrome.tabs.reload();
}

export function pintSetNoReload( setting, value ) {
  var pintKey = {};
  pintKey[`${setting}`] = value;
  var settingVar = setting.replace(/_/g, "-");
  chrome.storage.local.set(pintKey);
}


export function pintGet(setting, cb) {
  var output = "";
  chrome.storage.local.get([`${setting}`], function (result) {
    output = result[`${setting}`]
    cb(output);
  })
}

export function pintGetUpdate(setting, func) {
  chrome.storage.local.get([`${setting}`], function (result) {
    func(result[`${setting}`]);
  })
}

export function updateMultiple(array, color) {
  for (var i = 0; i < array.length; i++) {
    pintSetNoReload(array[i], color);
  }
}
// export function pintGet(setting) {
//   pintGetInner(setting, finalReturn);
//   alert(`returned value: ${value}`);
//   return value;
// }

// export function (setting, callback) {
//        callback(result[setting]);
//     });
// };

// function finalReturn(finalValue) {
//   alert(`result is: ${finalValue}`);
//   value = finalValue
// }