/*global chrome*/

import * as opacity from "./opacityGroup.js";
import chroma from "chroma-js";
import { pintGetUpdate, updateMultiple } from "./helper.js";
import * as settings from "./colorGroups.js";

// may god have mercy if you are working with this spaghetti code.
// can someone please help me find a way of implementing this better because this looks like shit.
// it's like this because of the goddamn chrome extension limitation
// PLEASE FILE AN ISSUE OR PR IF YOU HAVE A WAY TO MAKE THIS HANDLE BETTER BECAUSE GOD
// I AM DYING LOOKING AND MAINTAINING THIS SPAGHETTI CODE

export function updateOpacity() {
  var cg1 = "";
  var cg3 = "";
  var cg8 = "";
  var cg13 = "";
  var cg15 = "";
  var cg16 = "";
  var cg18 = "";
  var cg21 = "";
  var cg22 = "";
  var cg24 = "";
  var cg29 = "";
  var cg38 = "";
  var cg46 = "";
  var cg60 = "";
  var cg64 = "";
  var cg67 = "";
  var cg74 = "";
  var cg76 = "";
  var cg77 = "";
  var cg78 = "";
  var cg84 = "";
  var cg89 = "";
  var cg106 = "";

  function setCG1(value) {
    cg1 = value;
  }
  function setCG3(value) {
    cg3 = value;
  }
  function setCG8(value) {
    cg8 = value;
  }
  function setCG13(value) {
    cg13 = value;
  }
  function setCG15(value) {
    cg15 = value;
  }
  function setCG16(value) {
    cg16 = value;
  }
  function setCG18(value) {
    cg18 = value;
  }
  function setCG21(value) {
    cg21 = value;
  }
  function setCG22(value) {
    cg22 = value;
  }
  function setCG24(value) {
    cg24 = value;
  }
  function setCG29(value) {
    cg29 = value;
  }
  function setCG38(value) {
    cg38 = value;
  }
  function setCG46(value) {
    cg46 = value;
  }
  function setCG60(value) {
    cg60 = value;
  }
  function setCG64(value) {
    cg64 = value;
  }
  function setCG67(value) {
    cg67 = value;
  }
  function setCG74(value) {
    cg74 = value;
  }
  function setCG76(value) {
    cg76 = value;
  }
  function setCG77(value) {
    cg77 = value;
  }
  function setCG78(value) {
    cg78 = value;
  }
  function setCG84(value) {
    cg84 = value;
  }
  function setCG89(value) {
    cg89 = value;
  }
  function setCG106(value) {
    cg106 = value;
  }

  pintGetUpdate(settings.cg1_000000[0], setCG1);
  opacity.cg1.forEach((element) => {
    updateMultiple(element, chroma(cg1).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg3_010409[0], setCG3);
  opacity.cg3.forEach((element) => {
    updateMultiple(element, chroma(cg3).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg8_0d1117[0], setCG8);
  opacity.cg8.forEach((element) => {
    updateMultiple(element, chroma(cg8).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg13_161b22[0], setCG13);
  opacity.cg13.forEach((element) => {
    updateMultiple(element, chroma(cg13).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg15_1b1f230a[0], setCG15);
  opacity.cg15.forEach((element) => {
    updateMultiple(element, chroma(cg15).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg16_1f6feb[0], setCG16);
  opacity.cg16.forEach((element) => {
    updateMultiple(element, chroma(cg16).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg18_238636[0], setCG18);
  opacity.cg18.forEach((element) => {
    updateMultiple(element, chroma(cg18).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg21_2ea043[0], setCG21);
  opacity.cg21.forEach((element) => {
    updateMultiple(element, chroma(cg21).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg22_30363d[0], setCG22);
  opacity.cg22.forEach((element) => {
    updateMultiple(element, chroma(cg22).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg24_388bfd[0], setCG24);
  opacity.cg24.forEach((element) => {
    updateMultiple(element, chroma(cg24).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg29_3fb950[0], setCG29);
  opacity.cg29.forEach((element) => {
    updateMultiple(element, chroma(cg29).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg38_58a6ff[0], setCG38);
  opacity.cg38.forEach((element) => {
    updateMultiple(element, chroma(cg38).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg46_6e7681[0], setCG46);
  opacity.cg46.forEach((element) => {
    updateMultiple(element, chroma(cg46).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg60_a371f7[0], setCG60);
  opacity.cg60.forEach((element) => {
    updateMultiple(element, chroma(cg60).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg64_b1bac4[0], setCG64);
  opacity.cg64.forEach((element) => {
    updateMultiple(element, chroma(cg64).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg67_bb8009[0], setCG67);
  opacity.cg67.forEach((element) => {
    updateMultiple(element, chroma(cg67).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg74_d29922[0], setCG74);
  opacity.cg74.forEach((element) => {
    updateMultiple(element, chroma(cg74).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg76_da3633[0], setCG76);
  opacity.cg76.forEach((element) => {
    updateMultiple(element, chroma(cg76).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg77_db61a2[0], setCG77);
  opacity.cg77.forEach((element) => {
    updateMultiple(element, chroma(cg77).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg78_db6d28[0], setCG78);
  opacity.cg78.forEach((element) => {
    updateMultiple(element, chroma(cg78).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg84_f0f6fc[0], setCG84);
  opacity.cg84.forEach((element) => {
    updateMultiple(element, chroma(cg84).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg89_f85149[0], setCG89);
  opacity.cg89.forEach((element) => {
    updateMultiple(element, chroma(cg89).hex() + element.slice(-2));
  });

  pintGetUpdate(settings.cg106_ffffff[0], setCG106);
  opacity.cg106.forEach((element) => {
    updateMultiple(element, chroma(cg106).hex() + element.slice(-2));
  });

  chrome.tabs.reload();
}
