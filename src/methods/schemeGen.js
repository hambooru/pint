/*global chrome*/
import chroma from "chroma-js";

import { pintSetNoReload, updateMultiple } from "./helper.js";
import * as qs from "./quickScheme.js";
import * as settings from "./colorGroups.js";

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

export function rgba2hex(orig) {
  var a,
    rgb = orig
      .replace(/\s/g, "")
      .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = ((rgb && rgb[4]) || "").trim(),
    hex = rgb
      ? (rgb[1] | (1 << 8)).toString(16).slice(1) +
        (rgb[2] | (1 << 8)).toString(16).slice(1) +
        (rgb[3] | (1 << 8)).toString(16).slice(1)
      : orig;

  if (alpha !== "") {
    a = alpha;
  } else {
    a = 1;
  }
  // multiply before convert to HEX
  a = ((a * 255) | (1 << 8)).toString(16).slice(1);
  hex = hex + a;

  return hex;
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
  pintSetNoReload("__color_calendar_graph_day_L4_bg", `${gradient[0]}ff`);
  pintSetNoReload("__color_calendar_graph_day_L3_bg", `${gradient[0]}c5`);
  pintSetNoReload("__color_calendar_graph_day_L2_bg", `${gradient[0]}8a`);
  pintSetNoReload("__color_calendar_graph_day_L1_bg", `${gradient[0]}54`);
  pintSetNoReload("__color_accent_emphasis", gradient[4]);
  pintSetNoReload("__color_btn_primary_bg", gradient[5]);
  pintSetNoReload("__color_btn_primary_hover_bg", gradient[4]);
  pintSetNoReload("__color_btn_primary_active_bg", gradient[4]);
  pintSetNoReload("__color_btn_primary_focus_bg", gradient[4]);
  pintSetNoReload("__color_btn_primary_disabled_bg", gradient[4]);
  chrome.tabs.reload();
}

export function bgGen(color) {
  updateMultiple(settings.cg3_010409, chroma(color).darken().hex());
  updateMultiple(settings.cg8_0d1117, chroma(color).hex());
  updateMultiple(settings.cg13_161b22, chroma(color).brighten(0.3).hex());
  updateMultiple(settings.cg18_238636, chroma(color).brighten(0.6).hex());
  updateMultiple(settings.cg22_30363d, chroma(color).brighten(0.9).hex());
  updateMultiple(settings.cg32_484f58, chroma(color).brighten(1.2).hex());
  updateMultiple(settings.cg46_6e7681, chroma(color).brighten(1.5).hex());
  updateMultiple(settings.cg55_8b949e, chroma(color).brighten(1.8).hex());
  updateMultiple(settings.cg64_b1bac4, chroma(color).brighten(2.1).hex());
  updateMultiple(settings.cg71_c9d1d9, chroma(color).brighten(2.4).hex());
  updateMultiple(settings.cg84_f0f6fc, chroma(color).brighten(2.7).hex());
  chrome.tabs.reload();
}

export function updateText(color) {
  updateMultiple(qs.TextColor, color);
  chrome.tabs.reload();
}

export function accentGen(color) {}
