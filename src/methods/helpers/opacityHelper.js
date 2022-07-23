import chroma from "chroma-js";

import * as settings from "../config/colorGroups.js";

import {pintGetUpdate, updateMultiple} from "./storageHelper.js";

// may god have mercy if you are working with this spaghetti code.
// can someone please help me find a way of implementing this better because
// this looks like shit. it's like this because of the goddamn chrome extension
// limitation PLEASE FILE AN ISSUE OR PR IF YOU HAVE A WAY TO MAKE THIS HANDLE
// BETTER BECAUSE GOD I AM DYING LOOKING AND MAINTAINING THIS SPAGHETTI CODE

function setCG1(value) {
  updateMultiple(settings.cg1a_19, chroma(value).alpha(0.1).hex());
}

function setCG3(value) {
  updateMultiple(settings.cg3a_4c, chroma(value).alpha(0.3).hex());
  updateMultiple(settings.cg3a_cc, chroma(value).alpha(0.8).hex());
}

function setCG8(value) {
  updateMultiple(settings.cg8a_00, chroma(value).alpha(0).hex());
  updateMultiple(settings.cg8a_f2, chroma(value).alpha(0.95).hex());
}

function setCG13(value) {
  updateMultiple(settings.cg13a_00, chroma(value).alpha(0).hex());
}

function setCG15(value) {
  updateMultiple(settings.cg15a_0f, chroma(value).alpha(0.06).hex());
}

function setCG16(value) {
  updateMultiple(settings.cg16a_0c, chroma(value).alpha(0.05).hex());
  updateMultiple(settings.cg16a_19, chroma(value).alpha(0.1).hex());
  updateMultiple(settings.cg16a_59, chroma(value).alpha(0.35).hex());
  updateMultiple(settings.cg16a_7f, chroma(value).alpha(0.5).hex());
  updateMultiple(settings.cg16a_a5, chroma(value).alpha(0.65).hex());
}

function setCG18(value) {
  updateMultiple(settings.cg18a_99, chroma(value).alpha(0.6).hex());
}

function setCG21(value) {
  updateMultiple(settings.cg21a_26, chroma(value).alpha(0.15).hex());
  updateMultiple(settings.cg21a_66, chroma(value).alpha(0.4).hex());
}

function setCG22(value) {
  updateMultiple(settings.cg22a_80, chroma(value).alpha(0.5).hex());
}

function setCG24(value) {
  updateMultiple(settings.cg24a_26, chroma(value).alpha(0.15).hex());
  updateMultiple(settings.cg24a_66, chroma(value).alpha(0.4).hex());
}

function setCG29(value) {
  updateMultiple(settings.cg29a_4d, chroma(value).alpha(0.16).hex());
}

function setCG38(value) {
  updateMultiple(settings.cg38a_80, chroma(value).alpha(0.5).hex());
}

function setCG46(value) {
  updateMultiple(settings.cg46a_00, chroma(value).alpha(0).hex());
  updateMultiple(settings.cg46a_19, chroma(value).alpha(0.1).hex());
  updateMultiple(settings.cg46a_66, chroma(value).alpha(0.4).hex());
}

function setCG60(value) {
  updateMultiple(settings.cg60a_26, chroma(value).alpha(0.15).hex());
  updateMultiple(settings.cg60a_66, chroma(value).alpha(0.4).hex());
}

function setCG64(value) {
  updateMultiple(settings.cg64a_14, chroma(value).alpha(0.08).hex());
  updateMultiple(settings.cg64a_1e, chroma(value).alpha(0.12).hex());
  updateMultiple(settings.cg64a_33, chroma(value).alpha(0.2).hex());
}

function setCG67(value) {
  updateMultiple(settings.cg67a_26, chroma(value).alpha(0.15).hex());
  updateMultiple(settings.cg67a_66, chroma(value).alpha(0.4).hex());
}

function setCG74(value) {
  updateMultiple(settings.cg74a_66, chroma(value).alpha(0.4).hex());
}

function setCG76(value) {
  updateMultiple(settings.cg76a_0c, chroma(value).alpha(0.05).hex());
  updateMultiple(settings.cg76a_19, chroma(value).alpha(0.1).hex());
}

function setCG77(value) {
  updateMultiple(settings.cg77a_26, chroma(value).alpha(0.15).hex());
  updateMultiple(settings.cg77a_66, chroma(value).alpha(0.4).hex());
}

function setCG78(value) {
  updateMultiple(settings.cg78a_26, chroma(value).alpha(0.15).hex());
  updateMultiple(settings.cg78a_66, chroma(value).alpha(0.4).hex());
}

function setCG84(value) {
  updateMultiple(settings.cg84a_19, chroma(value).alpha(0.1).hex());
}

function setCG89(value) {
  updateMultiple(settings.cg89a_26, chroma(value).alpha(0.15).hex());
  updateMultiple(settings.cg89a_28, chroma(value).alpha(0.16).hex());
  updateMultiple(settings.cg89a_3d, chroma(value).alpha(0.24).hex());
  updateMultiple(settings.cg89a_4c, chroma(value).alpha(0.3).hex());
  updateMultiple(settings.cg89a_66, chroma(value).alpha(0.4).hex());
  updateMultiple(settings.cg89a_7f, chroma(value).alpha(0.5).hex());
}

function setCG106(value) {
  updateMultiple(settings.cg106a_0c, chroma(value).alpha(0.05).hex());
  updateMultiple(settings.cg106a_19, chroma(value).alpha(0.1).hex());
  updateMultiple(settings.cg106a_33, chroma(value).alpha(0.2).hex());
  updateMultiple(settings.cg106a_7f, chroma(value).alpha(0.5).hex());
  updateMultiple(settings.cg106a_b2, chroma(value).alpha(0.7).hex());
}

export function updateOpacity() {
  pintGetUpdate(settings.cg1_000000[0], setCG1);
  pintGetUpdate(settings.cg3_010409[0], setCG3);
  pintGetUpdate(settings.cg8_0d1117[0], setCG8);
  pintGetUpdate(settings.cg13_161b22[0], setCG13);
  pintGetUpdate(settings.cg15_1b1f230a[0], setCG15);
  pintGetUpdate(settings.cg16_1f6feb[0], setCG16);
  pintGetUpdate(settings.cg18_238636[0], setCG18);
  pintGetUpdate(settings.cg21_2ea043[0], setCG21);
  pintGetUpdate(settings.cg22_30363d[0], setCG22);
  pintGetUpdate(settings.cg24_388bfd[0], setCG24);
  pintGetUpdate(settings.cg29_3fb950[0], setCG29);
  pintGetUpdate(settings.cg38_58a6ff[0], setCG38);
  pintGetUpdate(settings.cg46_6e7681[0], setCG46);
  pintGetUpdate(settings.cg60_a371f7[0], setCG60);
  pintGetUpdate(settings.cg64_b1bac4[0], setCG64);
  pintGetUpdate(settings.cg67_bb8009[0], setCG67);
  pintGetUpdate(settings.cg74_d29922[0], setCG74);
  pintGetUpdate(settings.cg76_da3633[0], setCG76);
  pintGetUpdate(settings.cg77_db61a2[0], setCG77);
  pintGetUpdate(settings.cg78_db6d28[0], setCG78);
  pintGetUpdate(settings.cg84_f0f6fc[0], setCG84);
  pintGetUpdate(settings.cg89_f85149[0], setCG89);
  pintGetUpdate(settings.cg106_ffffff[0], setCG106);
}
