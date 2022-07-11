/*global chrome*/
import { pintGet, pintSet, pintGetUpdate, pintSetNoReload, updateMultiple } from './helper.js';
import * as qs from './quickScheme.js';

// function to convert hex to rgb
export function hexToRgb(hex) {
  var takenResult = hex;
  var result = takenResult.replace(/#/g, "").match(/.{1,2}/g);
  return result
    ? {
        r: parseInt(result[0], 16),
        g: parseInt(result[1], 16),
        b: parseInt(result[2], 16),
      }
    : null;
}

// function to convert rgb to hex
export function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// generate array of hex color gradients given a single hex color
export function generateHexGradients(hex) {
  var rgb = hexToRgb(hex);
  var hexGradients = [];
  for (var i = 0; i < 6; i++) {
    var r = rgb.r - i * 10;
    var g = rgb.g - i * 10;
    var b = rgb.b - i * 10;
    hexGradients.push(rgbToHex(r, g, b));
  }
  return hexGradients;
}

export function generateAccent(hex, modifier) {
  var rgb = hexToRgb(hex);
  var r = rgb.r - modifier;
  var b = rgb.b - modifier;
  var g = rgb.g - modifier;
  return rgbToHex(r, g, b);
}

export function updateViaQuickScheme(color) {
  var gradient = generateHexGradients(color);
  pintSetNoReload("__color_calendar_graph_day_L4_bg", `${gradient[0]}` + "ff");
  pintSetNoReload("__color_calendar_graph_day_L3_bg", `${gradient[0]}` + "c5");
  pintSetNoReload("__color_calendar_graph_day_L2_bg", `${gradient[0]}` + "8a");
  pintSetNoReload("__color_calendar_graph_day_L1_bg", `${gradient[0]}` + "54");
  pintSetNoReload("__color_accent_emphasis", gradient[4]);
  pintSetNoReload("__color_btn_primary_bg", gradient[5]);
  pintSetNoReload("__color_btn_primary_hover_bg", gradient[4]);
  pintSetNoReload("__color_btn_primary_active_bg", gradient[4]);
  pintSetNoReload("__color_btn_primary_focus_bg", gradient[4]);
  pintSetNoReload("__color_btn_primary_disabled_bg", gradient[4]);
  chrome.tabs.reload();
}

export function bgGen(color) {
  updateMultiple(qs.BG9, color);
  updateMultiple(qs.ScaleBlack, generateAccent(color, 10))
  updateMultiple(qs.BG8, generateAccent(color, -10))
  updateMultiple(qs.BG7, generateAccent(color, -20))
  updateMultiple(qs.BG6, generateAccent(color, -30))
  updateMultiple(qs.BG5, generateAccent(color, -50))
  updateMultiple(qs.BG4, generateAccent(color, -70))
  updateMultiple(qs.BG3, generateAccent(color, -90))
  updateMultiple(qs.BG2, generateAccent(color, -110))
  updateMultiple(qs.BG1, generateAccent("#ffffff", 0))
  updateMultiple(qs.BG0, generateAccent(color, -130))
  chrome.tabs.reload();
}

export function accentGen(color)  {

}