/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2024 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */

/**
 * pdfjsVersion = 6.0.374
 * pdfjsBuild = fdeed2af5
 */

;// ./src/shared/util.js
const isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
const BBOX_INIT = [Infinity, Infinity, -Infinity, -Infinity];
const F32_BBOX_INIT = new Float32Array(BBOX_INIT);
const FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
const LINE_FACTOR = 1.35;
const LINE_DESCENT_FACTOR = 0.35;
const BASELINE_FACTOR = LINE_DESCENT_FACTOR / LINE_FACTOR;
const SVG_NS = "http://www.w3.org/2000/svg";
const RenderingIntentFlag = {
  ANY: 0x01,
  DISPLAY: 0x02,
  PRINT: 0x04,
  SAVE: 0x08,
  ANNOTATIONS_FORMS: 0x10,
  ANNOTATIONS_STORAGE: 0x20,
  ANNOTATIONS_DISABLE: 0x40,
  IS_EDITING: 0x80,
  OPLIST: 0x100
};
const AnnotationMode = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
};
const AnnotationPrefix = "pdfjs_internal_id_";
const AnnotationEditorPrefix = "pdfjs_internal_editor_";
const AnnotationEditorType = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  POPUP: 16,
  SIGNATURE: 101,
  COMMENT: 102
};
const AnnotationEditorParamsType = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  INK_COLOR_AND_OPACITY: 24,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_THICKNESS: 32,
  HIGHLIGHT_FREE: 33,
  HIGHLIGHT_SHOW_ALL: 34,
  DRAW_STEP: 41
};
const PermissionFlag = {
  PRINT: 0x04,
  MODIFY_CONTENTS: 0x08,
  COPY: 0x10,
  MODIFY_ANNOTATIONS: 0x20,
  FILL_INTERACTIVE_FORMS: 0x100,
  COPY_FOR_ACCESSIBILITY: 0x200,
  ASSEMBLE: 0x400,
  PRINT_HIGH_QUALITY: 0x800
};
const MeshFigureType = (/* unused pure expression or super */ null && ({
  TRIANGLES: 1,
  LATTICE: 2,
  PATCH: 3
}));
const TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
const ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
const AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
const AnnotationReplyType = (/* unused pure expression or super */ null && ({
  GROUP: "Group",
  REPLY: "R"
}));
const AnnotationFlag = (/* unused pure expression or super */ null && ({
  INVISIBLE: 0x01,
  HIDDEN: 0x02,
  PRINT: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NOVIEW: 0x20,
  READONLY: 0x40,
  LOCKED: 0x80,
  TOGGLENOVIEW: 0x100,
  LOCKEDCONTENTS: 0x200
}));
const AnnotationFieldFlag = (/* unused pure expression or super */ null && ({
  READONLY: 0x0000001,
  REQUIRED: 0x0000002,
  NOEXPORT: 0x0000004,
  MULTILINE: 0x0001000,
  PASSWORD: 0x0002000,
  NOTOGGLETOOFF: 0x0004000,
  RADIO: 0x0008000,
  PUSHBUTTON: 0x0010000,
  COMBO: 0x0020000,
  EDIT: 0x0040000,
  SORT: 0x0080000,
  FILESELECT: 0x0100000,
  MULTISELECT: 0x0200000,
  DONOTSPELLCHECK: 0x0400000,
  DONOTSCROLL: 0x0800000,
  COMB: 0x1000000,
  RICHTEXT: 0x2000000,
  RADIOSINUNISON: 0x2000000,
  COMMITONSELCHANGE: 0x4000000
}));
const AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
const AnnotationActionEventType = (/* unused pure expression or super */ null && ({
  E: "Mouse Enter",
  X: "Mouse Exit",
  D: "Mouse Down",
  U: "Mouse Up",
  Fo: "Focus",
  Bl: "Blur",
  PO: "PageOpen",
  PC: "PageClose",
  PV: "PageVisible",
  PI: "PageInvisible",
  K: "Keystroke",
  F: "Format",
  V: "Validate",
  C: "Calculate"
}));
const DocumentActionEventType = (/* unused pure expression or super */ null && ({
  WC: "WillClose",
  WS: "WillSave",
  DS: "DidSave",
  WP: "WillPrint",
  DP: "DidPrint"
}));
const PageActionEventType = (/* unused pure expression or super */ null && ({
  O: "PageOpen",
  C: "PageClose"
}));
const VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
const OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93,
  rawFillPath: 94
};
const DrawOPS = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  quadraticCurveTo: 3,
  closePath: 4
};
const PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let verbosity = VerbosityLevel.WARNINGS;
function setVerbosityLevel(level) {
  if (Number.isInteger(level)) {
    verbosity = level;
  }
}
function getVerbosityLevel() {
  return verbosity;
}
function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.info(`Info: ${msg}`);
  }
}
function warn(msg) {
  if (verbosity >= VerbosityLevel.WARNINGS) {
    console.warn(`Warning: ${msg}`);
  }
}
function unreachable(msg) {
  throw new Error(msg);
}
function assert(cond, msg) {
  if (!cond) {
    unreachable(msg);
  }
}
function _isValidProtocol(url) {
  switch (url?.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return true;
    default:
      return false;
  }
}
function createValidAbsoluteUrl(url, baseUrl = null, options = null) {
  if (!url) {
    return null;
  }
  if (options && typeof url === "string") {
    if (options.addDefaultProtocol && url.startsWith("www.")) {
      const dots = url.match(/\./g);
      if (dots?.length >= 2) {
        url = `http://${url}`;
      }
    }
    if (options.tryConvertEncoding) {
      try {
        url = stringToUTF8String(url);
      } catch {}
    }
  }
  const absoluteUrl = baseUrl ? URL.parse(url, baseUrl) : URL.parse(url);
  return _isValidProtocol(absoluteUrl) ? absoluteUrl : null;
}
function updateUrlHash(url, hash, allowRel = false) {
  const res = URL.parse(url);
  if (res) {
    res.hash = hash;
    return res.href;
  }
  if (allowRel && createValidAbsoluteUrl(url, "http://example.com")) {
    return url.split("#", 1)[0] + `${hash ? `#${hash}` : ""}`;
  }
  return "";
}
function stripPath(str) {
  return str.substring(str.lastIndexOf("/") + 1);
}
function shadow(obj, prop, value, nonSerializable = false) {
  Object.defineProperty(obj, prop, {
    value,
    enumerable: !nonSerializable,
    configurable: true,
    writable: false
  });
  return value;
}
const BaseException = function BaseExceptionClosure() {
  function BaseException(message, name) {
    this.message = message;
    this.name = name;
  }
  BaseException.prototype = new Error();
  BaseException.constructor = BaseException;
  return BaseException;
}();
class PasswordException extends BaseException {
  constructor(msg, code) {
    super(msg, "PasswordException");
    this.code = code;
  }
}
class UnknownErrorException extends BaseException {
  constructor(msg, details) {
    super(msg, "UnknownErrorException");
    this.details = details;
  }
}
class InvalidPDFException extends BaseException {
  constructor(msg) {
    super(msg, "InvalidPDFException");
  }
}
class ResponseException extends BaseException {
  constructor(msg, status, missing) {
    super(msg, "ResponseException");
    this.status = status;
    this.missing = missing;
  }
}
class FormatError extends BaseException {
  constructor(msg) {
    super(msg, "FormatError");
  }
}
class AbortException extends BaseException {
  constructor(msg) {
    super(msg, "AbortException");
  }
}
function bytesToString(bytes) {
  if (typeof bytes !== "object" || bytes?.length === undefined) {
    unreachable("Invalid argument for bytesToString");
  }
  const length = bytes.length;
  const MAX_ARGUMENT_COUNT = 8192;
  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }
  const strBuf = [];
  for (let i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    const chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  return strBuf.join("");
}
function stringToBytes(str) {
  if (typeof str !== "string") {
    unreachable("Invalid argument for stringToBytes");
  }
  const length = str.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 0xff;
  }
  return bytes;
}
function objectSize(obj) {
  return Object.keys(obj).length;
}
class FeatureTest {
  static get isLittleEndian() {
    const buffer8 = new Uint8Array(4);
    buffer8[0] = 1;
    const view32 = new Uint32Array(buffer8.buffer, 0, 1);
    return shadow(this, "isLittleEndian", view32[0] === 1);
  }
  static get isOffscreenCanvasSupported() {
    return shadow(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas !== "undefined");
  }
  static get isImageDecoderSupported() {
    return shadow(this, "isImageDecoderSupported", typeof ImageDecoder !== "undefined");
  }
  static get isFloat16ArraySupported() {
    return shadow(this, "isFloat16ArraySupported", typeof Float16Array !== "undefined");
  }
  static get isSanitizerSupported() {
    return shadow(this, "isSanitizerSupported", typeof Sanitizer !== "undefined");
  }
  static get platform() {
    const {
      platform,
      userAgent
    } = navigator;
    return shadow(this, "platform", {
      isAndroid: userAgent.includes("Android"),
      isLinux: platform.includes("Linux"),
      isMac: platform.includes("Mac"),
      isWindows: platform.includes("Win"),
      isFirefox: userAgent.includes("Firefox")
    });
  }
  static get isCanvasFilterSupported() {
    let ctx;
    if (this.isOffscreenCanvasSupported) {
      ctx = new OffscreenCanvas(1, 1).getContext("2d");
    } else if (typeof document !== "undefined") {
      ctx = document.createElement("canvas").getContext("2d");
    }
    return shadow(this, "isCanvasFilterSupported", ctx?.filter !== undefined);
  }
  static get isAlphaColorInputSupported() {
    if (typeof document === "undefined") {
      return shadow(this, "isAlphaColorInputSupported", false);
    }
    const input = document.createElement("input");
    input.type = "color";
    input.setAttribute("alpha", "");
    input.value = "#ff000080";
    return shadow(this, "isAlphaColorInputSupported", input.value !== "#ff0000");
  }
}
class Util {
  static get hexNums() {
    return shadow(this, "hexNums", Array.from(Array(256).keys(), n => n.toString(16).padStart(2, "0")));
  }
  static makeHexColor(r, g, b) {
    return `#${this.hexNums[r]}${this.hexNums[g]}${this.hexNums[b]}`;
  }
  static transform(m1, m2) {
    return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
  }
  static multiplyByDOMMatrix(m, md) {
    return [m[0] * md.a + m[2] * md.b, m[1] * md.a + m[3] * md.b, m[0] * md.c + m[2] * md.d, m[1] * md.c + m[3] * md.d, m[0] * md.e + m[2] * md.f + m[4], m[1] * md.e + m[3] * md.f + m[5]];
  }
  static applyTransform(p, m, pos = 0) {
    const p0 = p[pos];
    const p1 = p[pos + 1];
    p[pos] = p0 * m[0] + p1 * m[2] + m[4];
    p[pos + 1] = p0 * m[1] + p1 * m[3] + m[5];
  }
  static applyTransformToBezier(p, transform, pos = 0) {
    const m0 = transform[0];
    const m1 = transform[1];
    const m2 = transform[2];
    const m3 = transform[3];
    const m4 = transform[4];
    const m5 = transform[5];
    for (let i = 0; i < 6; i += 2) {
      const pI = p[pos + i];
      const pI1 = p[pos + i + 1];
      p[pos + i] = pI * m0 + pI1 * m2 + m4;
      p[pos + i + 1] = pI * m1 + pI1 * m3 + m5;
    }
  }
  static applyInverseTransform(p, m) {
    const p0 = p[0];
    const p1 = p[1];
    const d = m[0] * m[3] - m[1] * m[2];
    p[0] = (p0 * m[3] - p1 * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
    p[1] = (-p0 * m[1] + p1 * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
  }
  static axialAlignedBoundingBox(rect, transform, output) {
    const m0 = transform[0];
    const m1 = transform[1];
    const m2 = transform[2];
    const m3 = transform[3];
    const m4 = transform[4];
    const m5 = transform[5];
    const r0 = rect[0];
    const r1 = rect[1];
    const r2 = rect[2];
    const r3 = rect[3];
    let a0 = m0 * r0 + m4;
    let a2 = a0;
    let a1 = m0 * r2 + m4;
    let a3 = a1;
    let b0 = m3 * r1 + m5;
    let b2 = b0;
    let b1 = m3 * r3 + m5;
    let b3 = b1;
    if (m1 !== 0 || m2 !== 0) {
      const m1r0 = m1 * r0;
      const m1r2 = m1 * r2;
      const m2r1 = m2 * r1;
      const m2r3 = m2 * r3;
      a0 += m2r1;
      a3 += m2r1;
      a1 += m2r3;
      a2 += m2r3;
      b0 += m1r0;
      b3 += m1r0;
      b1 += m1r2;
      b2 += m1r2;
    }
    output[0] = Math.min(output[0], a0, a1, a2, a3);
    output[1] = Math.min(output[1], b0, b1, b2, b3);
    output[2] = Math.max(output[2], a0, a1, a2, a3);
    output[3] = Math.max(output[3], b0, b1, b2, b3);
  }
  static inverseTransform(m) {
    const d = m[0] * m[3] - m[1] * m[2];
    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
  }
  static singularValueDecompose2dScale(matrix, output) {
    const m0 = matrix[0];
    const m1 = matrix[1];
    const m2 = matrix[2];
    const m3 = matrix[3];
    const a = m0 ** 2 + m1 ** 2;
    const b = m0 * m2 + m1 * m3;
    const c = m2 ** 2 + m3 ** 2;
    const first = (a + c) / 2;
    const second = Math.sqrt(first ** 2 - (a * c - b ** 2));
    output[0] = Math.sqrt(first + second || 1);
    output[1] = Math.sqrt(first - second || 1);
  }
  static normalizeRect(rect) {
    const r = rect.slice(0);
    if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
    }
    if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
    }
    return r;
  }
  static intersect(rect1, rect2) {
    const xLow = Math.max(Math.min(rect1[0], rect1[2]), Math.min(rect2[0], rect2[2]));
    const xHigh = Math.min(Math.max(rect1[0], rect1[2]), Math.max(rect2[0], rect2[2]));
    if (xLow > xHigh) {
      return null;
    }
    const yLow = Math.max(Math.min(rect1[1], rect1[3]), Math.min(rect2[1], rect2[3]));
    const yHigh = Math.min(Math.max(rect1[1], rect1[3]), Math.max(rect2[1], rect2[3]));
    if (yLow > yHigh) {
      return null;
    }
    return [xLow, yLow, xHigh, yHigh];
  }
  static pointBoundingBox(x, y, minMax) {
    minMax[0] = Math.min(minMax[0], x);
    minMax[1] = Math.min(minMax[1], y);
    minMax[2] = Math.max(minMax[2], x);
    minMax[3] = Math.max(minMax[3], y);
  }
  static rectBoundingBox(x0, y0, x1, y1, minMax) {
    minMax[0] = Math.min(minMax[0], x0, x1);
    minMax[1] = Math.min(minMax[1], y0, y1);
    minMax[2] = Math.max(minMax[2], x0, x1);
    minMax[3] = Math.max(minMax[3], y0, y1);
  }
  static #getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, t, minMax) {
    if (t <= 0 || t >= 1) {
      return;
    }
    const mt = 1 - t;
    const tt = t * t;
    const ttt = tt * t;
    const x = mt * (mt * (mt * x0 + 3 * t * x1) + 3 * tt * x2) + ttt * x3;
    const y = mt * (mt * (mt * y0 + 3 * t * y1) + 3 * tt * y2) + ttt * y3;
    minMax[0] = Math.min(minMax[0], x);
    minMax[1] = Math.min(minMax[1], y);
    minMax[2] = Math.max(minMax[2], x);
    minMax[3] = Math.max(minMax[3], y);
  }
  static #getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, a, b, c, minMax) {
    if (Math.abs(a) < 1e-12) {
      if (Math.abs(b) >= 1e-12) {
        this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, -c / b, minMax);
      }
      return;
    }
    const delta = b ** 2 - 4 * c * a;
    if (delta < 0) {
      return;
    }
    const sqrtDelta = Math.sqrt(delta);
    const a2 = 2 * a;
    this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, (-b + sqrtDelta) / a2, minMax);
    this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, (-b - sqrtDelta) / a2, minMax);
  }
  static bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3, minMax) {
    minMax[0] = Math.min(minMax[0], x0, x3);
    minMax[1] = Math.min(minMax[1], y0, y3);
    minMax[2] = Math.max(minMax[2], x0, x3);
    minMax[3] = Math.max(minMax[3], y0, y3);
    this.#getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-x0 + 3 * (x1 - x2) + x3), 6 * (x0 - 2 * x1 + x2), 3 * (x1 - x0), minMax);
    this.#getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-y0 + 3 * (y1 - y2) + y3), 6 * (y0 - 2 * y1 + y2), 3 * (y1 - y0), minMax);
  }
}
function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}
function utf8StringToString(str) {
  return unescape(encodeURIComponent(str));
}
function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0, ii = arr1.length; i < ii; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
let NormalizeRegex = null;
let NormalizationMap = null;
function normalizeUnicode(str) {
  if (!NormalizeRegex) {
    NormalizeRegex = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
    NormalizationMap = new Map([["ﬅ", "ſt"]]);
  }
  return str.replaceAll(NormalizeRegex, (_, p1, p2) => p1 ? p1.normalize("NFKC") : NormalizationMap.get(p2));
}
function getUuid() {
  if (typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const buf = new Uint8Array(32);
  crypto.getRandomValues(buf);
  return bytesToString(buf);
}
function _isValidExplicitDest(validRef, validName, dest) {
  if (!Array.isArray(dest) || dest.length < 2) {
    return false;
  }
  const [page, zoom, ...args] = dest;
  if (!validRef(page) && !Number.isInteger(page)) {
    return false;
  }
  if (!validName(zoom)) {
    return false;
  }
  const argsLen = args.length;
  let allowNull = true;
  switch (zoom.name) {
    case "XYZ":
      if (argsLen < 2 || argsLen > 3) {
        return false;
      }
      break;
    case "Fit":
    case "FitB":
      return argsLen === 0;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (argsLen > 1) {
        return false;
      }
      break;
    case "FitR":
      if (argsLen !== 4) {
        return false;
      }
      allowNull = false;
      break;
    default:
      return false;
  }
  for (const arg of args) {
    if (typeof arg === "number" || allowNull && arg === null) {
      continue;
    }
    return false;
  }
  return true;
}
const makeArr = () => [];
const makeMap = () => new Map();
const makeObj = () => Object.create(null);

;// ./src/shared/math_clamp.js
function MathClamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

;// ./src/display/page_viewport.js

class PageViewport {
  constructor({
    viewBox,
    userUnit,
    scale,
    rotation,
    offsetX = 0,
    offsetY = 0,
    dontFlip = false
  }) {
    this.viewBox = viewBox;
    this.userUnit = userUnit;
    this.scale = scale;
    this.rotation = rotation;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    scale *= userUnit;
    const centerX = (viewBox[2] + viewBox[0]) / 2;
    const centerY = (viewBox[3] + viewBox[1]) / 2;
    let rotateA, rotateB, rotateC, rotateD;
    rotation %= 360;
    if (rotation < 0) {
      rotation += 360;
    }
    switch (rotation) {
      case 180:
        rotateA = -1;
        rotateB = 0;
        rotateC = 0;
        rotateD = 1;
        break;
      case 90:
        rotateA = 0;
        rotateB = 1;
        rotateC = 1;
        rotateD = 0;
        break;
      case 270:
        rotateA = 0;
        rotateB = -1;
        rotateC = -1;
        rotateD = 0;
        break;
      case 0:
        rotateA = 1;
        rotateB = 0;
        rotateC = 0;
        rotateD = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    if (dontFlip) {
      rotateC = -rotateC;
      rotateD = -rotateD;
    }
    let offsetCanvasX, offsetCanvasY;
    let width, height;
    if (rotateA === 0) {
      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
      width = (viewBox[3] - viewBox[1]) * scale;
      height = (viewBox[2] - viewBox[0]) * scale;
    } else {
      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
      width = (viewBox[2] - viewBox[0]) * scale;
      height = (viewBox[3] - viewBox[1]) * scale;
    }
    this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
    this.width = width;
    this.height = height;
  }
  get rawDims() {
    const dims = this.viewBox;
    return shadow(this, "rawDims", {
      pageWidth: dims[2] - dims[0],
      pageHeight: dims[3] - dims[1],
      pageX: dims[0],
      pageY: dims[1]
    });
  }
  clone({
    scale = this.scale,
    rotation = this.rotation,
    offsetX = this.offsetX,
    offsetY = this.offsetY,
    dontFlip = false
  } = {}) {
    return new PageViewport({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale,
      rotation,
      offsetX,
      offsetY,
      dontFlip
    });
  }
  convertToViewportPoint(x, y) {
    const p = [x, y];
    Util.applyTransform(p, this.transform);
    return p;
  }
  convertToPdfPoint(x, y) {
    const p = [x, y];
    Util.applyInverseTransform(p, this.transform);
    return p;
  }
}

;// ./src/display/xfa_text.js
class XfaText {
  static textContent(xfa) {
    const items = [];
    const output = {
      items,
      styles: Object.create(null)
    };
    function walk(node) {
      if (!node) {
        return;
      }
      let str = null;
      const name = node.name;
      if (name === "#text") {
        str = node.value;
      } else if (!XfaText.shouldBuildText(name)) {
        return;
      } else if (node?.attributes?.textContent) {
        str = node.attributes.textContent;
      } else if (node.value) {
        str = node.value;
      }
      if (str !== null) {
        items.push({
          str
        });
      }
      if (!node.children) {
        return;
      }
      for (const child of node.children) {
        walk(child);
      }
    }
    walk(xfa);
    return output;
  }
  static shouldBuildText(name) {
    return !(name === "textarea" || name === "input" || name === "option" || name === "select");
  }
}

;// ./src/display/xfa_layer.js


class XfaLayer {
  static setupStorage(html, id, element, storage, intent) {
    const storedData = storage.getValue(id, {
      value: null
    });
    switch (element.name) {
      case "textarea":
        if (storedData.value !== null) {
          html.textContent = storedData.value;
        }
        if (intent === "print") {
          break;
        }
        html.addEventListener("input", event => {
          storage.setValue(id, {
            value: event.target.value
          });
        });
        break;
      case "input":
        if (element.attributes.type === "radio" || element.attributes.type === "checkbox") {
          if (storedData.value === element.attributes.xfaOn) {
            html.setAttribute("checked", true);
          } else if (storedData.value === element.attributes.xfaOff) {
            html.removeAttribute("checked");
          }
          if (intent === "print") {
            break;
          }
          html.addEventListener("change", event => {
            storage.setValue(id, {
              value: event.target.checked ? event.target.getAttribute("xfaOn") : event.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (storedData.value !== null) {
            html.setAttribute("value", storedData.value);
          }
          if (intent === "print") {
            break;
          }
          html.addEventListener("input", event => {
            storage.setValue(id, {
              value: event.target.value
            });
          });
        }
        break;
      case "select":
        if (storedData.value !== null) {
          html.setAttribute("value", storedData.value);
          for (const option of element.children) {
            if (option.attributes.value === storedData.value) {
              option.attributes.selected = true;
            } else if (Object.hasOwn(option.attributes, "selected")) {
              delete option.attributes.selected;
            }
          }
        }
        html.addEventListener("input", event => {
          const options = event.target.options;
          const value = options.selectedIndex === -1 ? "" : options[options.selectedIndex].value;
          storage.setValue(id, {
            value
          });
        });
        break;
    }
  }
  static setAttributes({
    html,
    element,
    storage = null,
    intent,
    linkService
  }) {
    const {
      attributes
    } = element;
    const isHTMLAnchorElement = html instanceof HTMLAnchorElement;
    if (attributes.type === "radio") {
      attributes.name = `${attributes.name}-${intent}`;
    }
    for (const [key, value] of Object.entries(attributes)) {
      if (value === null || value === undefined) {
        continue;
      }
      switch (key) {
        case "class":
          if (value.length) {
            html.setAttribute(key, value.join(" "));
          }
          break;
        case "dataId":
          break;
        case "id":
          html.setAttribute("data-element-id", value);
          break;
        case "style":
          Object.assign(html.style, value);
          break;
        case "textContent":
          html.textContent = value;
          break;
        default:
          if (!isHTMLAnchorElement || key !== "href" && key !== "newWindow") {
            html.setAttribute(key, value);
          }
      }
    }
    if (isHTMLAnchorElement) {
      linkService.addLinkAttributes(html, attributes.href, attributes.newWindow);
    }
    if (storage && attributes.dataId) {
      this.setupStorage(html, attributes.dataId, element, storage);
    }
  }
  static render(parameters) {
    const storage = parameters.annotationStorage;
    const linkService = parameters.linkService;
    const root = parameters.xfaHtml;
    const intent = parameters.intent || "display";
    const rootHtml = document.createElement(root.name);
    if (root.attributes) {
      this.setAttributes({
        html: rootHtml,
        element: root,
        intent,
        linkService
      });
    }
    const isNotForRichText = intent !== "richText";
    const rootDiv = parameters.div;
    rootDiv.append(rootHtml);
    if (parameters.viewport) {
      const transform = `matrix(${parameters.viewport.transform.join(",")})`;
      rootDiv.style.transform = transform;
    }
    if (isNotForRichText) {
      rootDiv.setAttribute("class", "xfaLayer xfaFont");
    }
    const textDivs = [];
    if (root.children.length === 0) {
      if (root.value) {
        const node = document.createTextNode(root.value);
        rootHtml.append(node);
        if (isNotForRichText && XfaText.shouldBuildText(root.name)) {
          textDivs.push(node);
        }
      }
      return {
        textDivs
      };
    }
    const stack = [[root, -1, rootHtml]];
    while (stack.length > 0) {
      const [parent, i, html] = stack.at(-1);
      if (i + 1 === parent.children.length) {
        stack.pop();
        continue;
      }
      const child = parent.children[++stack.at(-1)[1]];
      if (child === null) {
        continue;
      }
      const {
        name
      } = child;
      if (name === "#text") {
        const node = document.createTextNode(child.value);
        textDivs.push(node);
        html.append(node);
        continue;
      }
      const childHtml = child?.attributes?.xmlns ? document.createElementNS(child.attributes.xmlns, name) : document.createElement(name);
      html.append(childHtml);
      if (child.attributes) {
        this.setAttributes({
          html: childHtml,
          element: child,
          storage,
          intent,
          linkService
        });
      }
      if (child.children?.length > 0) {
        stack.push([child, -1, childHtml]);
      } else if (child.value) {
        const node = document.createTextNode(child.value);
        if (isNotForRichText && XfaText.shouldBuildText(name)) {
          textDivs.push(node);
        }
        childHtml.append(node);
      }
    }
    for (const el of rootDiv.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) {
      el.setAttribute("readOnly", true);
    }
    return {
      textDivs
    };
  }
  static update(parameters) {
    const transform = `matrix(${parameters.viewport.transform.join(",")})`;
    parameters.div.style.transform = transform;
    parameters.div.hidden = false;
  }
  static getPageViewport(xfaPage, {
    scale = 1,
    rotation = 0
  }) {
    const {
      width,
      height
    } = xfaPage.attributes.style;
    return new PageViewport({
      viewBox: [0, 0, parseInt(width, 10), parseInt(height, 10)],
      userUnit: 1,
      scale,
      rotation
    });
  }
}

;// ./src/display/display_utils.js




class PixelsPerInch {
  static CSS = 96.0;
  static PDF = 72.0;
  static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
}
async function fetchData(url, type = "text") {
  if (isValidFetchUrl(url, document.baseURI)) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    switch (type) {
      case "blob":
        return response.blob();
      case "bytes":
        return response.bytes();
      case "json":
        return response.json();
    }
    return response.text();
  }
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = type === "bytes" ? "arraybuffer" : type;
    request.onreadystatechange = () => {
      if (request.readyState !== XMLHttpRequest.DONE) {
        return;
      }
      if (request.status === 200 || request.status === 0) {
        switch (type) {
          case "bytes":
            resolve(new Uint8Array(request.response));
            return;
          case "blob":
          case "json":
            resolve(request.response);
            return;
        }
        resolve(request.responseText);
        return;
      }
      reject(new Error(request.statusText));
    };
    request.send(null);
  });
}
class RenderingCancelledException extends BaseException {
  constructor(msg, extraDelay = 0) {
    super(msg, "RenderingCancelledException");
    this.extraDelay = extraDelay;
  }
}
function isDataScheme(url) {
  const ii = url.length;
  let i = 0;
  while (i < ii && url[i].trim() === "") {
    i++;
  }
  return url.substring(i, i + 5).toLowerCase() === "data:";
}
function isPdfFile(filename) {
  return typeof filename === "string" && /\.pdf$/i.test(filename);
}
function getFilenameFromUrl(url) {
  [url] = url.split(/[#?]/, 1);
  return stripPath(url);
}
function getPdfFilenameFromUrl(url, defaultFilename = "document.pdf") {
  if (typeof url !== "string") {
    return defaultFilename;
  }
  if (isDataScheme(url)) {
    warn('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
    return defaultFilename;
  }
  const getURL = urlString => {
    try {
      return new URL(urlString);
    } catch {}
    try {
      return new URL(decodeURIComponent(urlString));
    } catch {}
    try {
      return new URL(urlString, "https://foo.bar");
    } catch {}
    try {
      return new URL(decodeURIComponent(urlString), "https://foo.bar");
    } catch {}
    return null;
  };
  const newURL = getURL(url);
  if (!newURL) {
    return defaultFilename;
  }
  const decode = name => {
    try {
      let decoded = decodeURIComponent(name);
      if (decoded.includes("/")) {
        decoded = stripPath(decoded);
        if (decoded.length === 4 && pdfRegex.test(decoded)) {
          return name;
        }
      }
      return decoded;
    } catch {
      return name;
    }
  };
  const pdfRegex = /\.pdf$/i;
  const filename = stripPath(newURL.pathname);
  if (pdfRegex.test(filename)) {
    return decode(filename);
  }
  if (newURL.searchParams.size > 0) {
    const getLast = iterator => [...iterator].findLast(v => pdfRegex.test(v));
    const name = getLast(newURL.searchParams.values()) ?? getLast(newURL.searchParams.keys());
    if (name) {
      return decode(name);
    }
  }
  if (newURL.hash) {
    const reFilename = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
    const hashFilename = reFilename.exec(newURL.hash);
    if (hashFilename) {
      return decode(hashFilename[0]);
    }
  }
  return defaultFilename;
}
class StatTimer {
  #started = new Map();
  times = [];
  time(name) {
    if (this.#started.has(name)) {
      warn(`Timer is already running for ${name}`);
    }
    this.#started.set(name, Date.now());
  }
  timeEnd(name) {
    if (!this.#started.has(name)) {
      warn(`Timer has not been started for ${name}`);
    }
    this.times.push({
      name,
      start: this.#started.get(name),
      end: Date.now()
    });
    this.#started.delete(name);
  }
  toString() {
    const longest = Math.max(...this.times.map(t => t.name.length));
    return this.times.map(t => `${t.name.padEnd(longest)} ${t.end - t.start}ms\n`).join("");
  }
}
function isValidFetchUrl(url, baseUrl) {
  const res = baseUrl ? URL.parse(url, baseUrl) : URL.parse(url);
  return /https?:/.test(res?.protocol ?? "");
}
function noContextMenu(e) {
  e.preventDefault();
}
function stopEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}
function deprecated(details) {
  console.log("Deprecated API usage: " + details);
}
class PDFDateString {
  static #regex;
  static toDateObject(input) {
    if (input instanceof Date) {
      return input;
    }
    if (!input || typeof input !== "string") {
      return null;
    }
    this.#regex ||= new RegExp("^D:" + "(\\d{4})" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "([Z|+\\-])?" + "(\\d{2})?" + "'?" + "(\\d{2})?" + "'?");
    const matches = this.#regex.exec(input);
    if (!matches) {
      return null;
    }
    const year = parseInt(matches[1], 10);
    let month = parseInt(matches[2], 10);
    month = month >= 1 && month <= 12 ? month - 1 : 0;
    let day = parseInt(matches[3], 10);
    day = day >= 1 && day <= 31 ? day : 1;
    let hour = parseInt(matches[4], 10);
    hour = hour >= 0 && hour <= 23 ? hour : 0;
    let minute = parseInt(matches[5], 10);
    minute = minute >= 0 && minute <= 59 ? minute : 0;
    let second = parseInt(matches[6], 10);
    second = second >= 0 && second <= 59 ? second : 0;
    const universalTimeRelation = matches[7] || "Z";
    let offsetHour = parseInt(matches[8], 10);
    offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
    let offsetMinute = parseInt(matches[9], 10) || 0;
    offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
    if (universalTimeRelation === "-") {
      hour += offsetHour;
      minute += offsetMinute;
    } else if (universalTimeRelation === "+") {
      hour -= offsetHour;
      minute -= offsetMinute;
    }
    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }
}
function getRGBA(color) {
  if (color.startsWith("#")) {
    const hex = color.slice(1);
    return [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16), hex.length >= 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1];
  }
  if (color.startsWith("rgb(")) {
    const [r, g, b] = color.slice(4, -1).split(",").map(x => parseInt(x, 10));
    return [r, g, b, 1];
  }
  if (color.startsWith("rgba(")) {
    const parts = color.slice(5, -1).split(",");
    return [parseInt(parts[0], 10), parseInt(parts[1], 10), parseInt(parts[2], 10), parseFloat(parts[3])];
  }
  const m = color.match(/^color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+|none))?\)$/);
  if (m) {
    return [Math.round(parseFloat(m[1]) * 255), Math.round(parseFloat(m[2]) * 255), Math.round(parseFloat(m[3]) * 255), m[4] !== undefined && m[4] !== "none" ? parseFloat(m[4]) : 1];
  }
  return null;
}
function getRGB(color) {
  const rgba = getRGBA(color);
  if (!rgba) {
    warn(`Not a valid color format: "${color}"`);
    return [0, 0, 0];
  }
  return rgba.slice(0, 3);
}
function getColorValues(colors) {
  const span = document.createElement("span");
  span.style.visibility = "hidden";
  span.style.colorScheme = "only light";
  document.body.append(span);
  for (const name of colors.keys()) {
    span.style.color = name;
    const computedColor = window.getComputedStyle(span).color;
    colors.set(name, getRGB(computedColor));
  }
  span.remove();
}
function getCurrentTransform(ctx) {
  const {
    a,
    b,
    c,
    d,
    e,
    f
  } = ctx.getTransform();
  return [a, b, c, d, e, f];
}
function getCurrentTransformInverse(ctx) {
  const {
    a,
    b,
    c,
    d,
    e,
    f
  } = ctx.getTransform().invertSelf();
  return [a, b, c, d, e, f];
}
function setLayerDimensions(div, viewport, mustFlip = false, mustRotate = true) {
  if (viewport instanceof PageViewport) {
    const {
      pageWidth,
      pageHeight
    } = viewport.rawDims;
    const {
      style
    } = div;
    const widthStr = `round(down, var(--total-scale-factor) * ${pageWidth}px, var(--scale-round-x))`,
      heightStr = `round(down, var(--total-scale-factor) * ${pageHeight}px, var(--scale-round-y))`;
    if (!mustFlip || viewport.rotation % 180 === 0) {
      style.width = widthStr;
      style.height = heightStr;
    } else {
      style.width = heightStr;
      style.height = widthStr;
    }
  }
  if (mustRotate) {
    div.setAttribute("data-main-rotation", viewport.rotation);
  }
}
class OutputScale {
  constructor() {
    const {
      pixelRatio
    } = OutputScale;
    this.sx = pixelRatio;
    this.sy = pixelRatio;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
  limitCanvas(width, height, maxPixels, maxDim, capAreaFactor = -1) {
    let maxAreaScale = Infinity,
      maxWidthScale = Infinity,
      maxHeightScale = Infinity;
    maxPixels = OutputScale.capPixels(maxPixels, capAreaFactor);
    if (maxPixels > 0) {
      maxAreaScale = Math.sqrt(maxPixels / (width * height));
    }
    if (maxDim !== -1) {
      maxWidthScale = maxDim / width;
      maxHeightScale = maxDim / height;
    }
    const maxScale = Math.min(maxAreaScale, maxWidthScale, maxHeightScale);
    if (this.sx > maxScale || this.sy > maxScale) {
      this.sx = maxScale;
      this.sy = maxScale;
      return true;
    }
    return false;
  }
  static get pixelRatio() {
    return globalThis.devicePixelRatio || 1;
  }
  static capPixels(maxPixels, capAreaFactor) {
    if (capAreaFactor >= 0) {
      const winPixels = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + capAreaFactor / 100));
      return maxPixels > 0 ? Math.min(maxPixels, winPixels) : winPixels;
    }
    return maxPixels;
  }
}
const SupportedImageMimeTypes = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
class ColorScheme {
  static get isDarkMode() {
    return shadow(this, "isDarkMode", !!window?.matchMedia?.("(prefers-color-scheme: dark)").matches);
  }
}
class CSSConstants {
  static get commentForegroundColor() {
    const element = document.createElement("span");
    element.classList.add("comment", "sidebar");
    const {
      style
    } = element;
    style.width = style.height = "0";
    style.display = "none";
    style.color = "var(--comment-fg-color)";
    document.body.append(element);
    const {
      color
    } = window.getComputedStyle(element);
    element.remove();
    return shadow(this, "commentForegroundColor", getRGB(color));
  }
}
function applyOpacity(color, opacity) {
  opacity = MathClamp(opacity ?? 1, 0, 1);
  const white = 255 * (1 - opacity);
  return color.map(c => Math.round(c * opacity + white));
}
function RGBToHSL(rgb, output) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) {
    output[0] = output[1] = 0;
  } else {
    const d = max - min;
    output[1] = l < 0.5 ? d / (max + min) : d / (2 - max - min);
    switch (max) {
      case r:
        output[0] = ((g - b) / d + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        output[0] = ((b - r) / d + 2) * 60;
        break;
      case b:
        output[0] = ((r - g) / d + 4) * 60;
        break;
    }
  }
  output[2] = l;
}
function HSLToRGB(hsl, output) {
  const h = hsl[0];
  const s = hsl[1];
  const l = hsl[2];
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(h / 60 % 2 - 1));
  const m = l - c / 2;
  switch (Math.floor(h / 60)) {
    case 0:
      output[0] = c + m;
      output[1] = x + m;
      output[2] = m;
      break;
    case 1:
      output[0] = x + m;
      output[1] = c + m;
      output[2] = m;
      break;
    case 2:
      output[0] = m;
      output[1] = c + m;
      output[2] = x + m;
      break;
    case 3:
      output[0] = m;
      output[1] = x + m;
      output[2] = c + m;
      break;
    case 4:
      output[0] = x + m;
      output[1] = m;
      output[2] = c + m;
      break;
    case 5:
    case 6:
      output[0] = c + m;
      output[1] = m;
      output[2] = x + m;
      break;
  }
}
function computeLuminance(x) {
  return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
}
function contrastRatio(hsl1, hsl2, output) {
  HSLToRGB(hsl1, output);
  output.map(computeLuminance);
  const lum1 = 0.2126 * output[0] + 0.7152 * output[1] + 0.0722 * output[2];
  HSLToRGB(hsl2, output);
  output.map(computeLuminance);
  const lum2 = 0.2126 * output[0] + 0.7152 * output[1] + 0.0722 * output[2];
  return lum1 > lum2 ? (lum1 + 0.05) / (lum2 + 0.05) : (lum2 + 0.05) / (lum1 + 0.05);
}
const contrastCache = new Map();
function findContrastColor(baseColor, fixedColor) {
  const key = baseColor[0] + baseColor[1] * 0x100 + baseColor[2] * 0x10000 + fixedColor[0] * 0x1000000 + fixedColor[1] * 0x100000000 + fixedColor[2] * 0x10000000000;
  let cachedValue = contrastCache.get(key);
  if (cachedValue) {
    return cachedValue;
  }
  const array = new Float32Array(9);
  const output = array.subarray(0, 3);
  const baseHSL = array.subarray(3, 6);
  RGBToHSL(baseColor, baseHSL);
  const fixedHSL = array.subarray(6, 9);
  RGBToHSL(fixedColor, fixedHSL);
  const isFixedColorDark = fixedHSL[2] < 0.5;
  const minContrast = isFixedColorDark ? 12 : 4.5;
  baseHSL[2] = isFixedColorDark ? Math.sqrt(baseHSL[2]) : 1 - Math.sqrt(1 - baseHSL[2]);
  if (contrastRatio(baseHSL, fixedHSL, output) < minContrast) {
    let start, end;
    if (isFixedColorDark) {
      start = baseHSL[2];
      end = 1;
    } else {
      start = 0;
      end = baseHSL[2];
    }
    const PRECISION = 0.005;
    while (end - start > PRECISION) {
      const mid = baseHSL[2] = (start + end) / 2;
      if (isFixedColorDark === contrastRatio(baseHSL, fixedHSL, output) < minContrast) {
        start = mid;
      } else {
        end = mid;
      }
    }
    baseHSL[2] = isFixedColorDark ? end : start;
  }
  HSLToRGB(baseHSL, output);
  cachedValue = Util.makeHexColor(Math.round(output[0] * 255), Math.round(output[1] * 255), Math.round(output[2] * 255));
  contrastCache.set(key, cachedValue);
  return cachedValue;
}
function renderRichText({
  html,
  dir,
  className
}, container) {
  const fragment = document.createDocumentFragment();
  if (typeof html === "string") {
    const p = document.createElement("p");
    p.dir = dir || "auto";
    const lines = html.split(/\r\n?|\n/);
    for (let i = 0, ii = lines.length; i < ii; ++i) {
      const line = lines[i];
      p.append(document.createTextNode(line));
      if (i < ii - 1) {
        p.append(document.createElement("br"));
      }
    }
    fragment.append(p);
  } else {
    XfaLayer.render({
      xfaHtml: html,
      div: fragment,
      intent: "richText"
    });
  }
  fragment.firstElementChild.classList.add("richText", className);
  container.append(fragment);
}
function makePathFromDrawOPS(data) {
  const path = new Path2D();
  if (!data) {
    return path;
  }
  for (let i = 0, ii = data.length; i < ii;) {
    switch (data[i++]) {
      case DrawOPS.moveTo:
        path.moveTo(data[i++], data[i++]);
        break;
      case DrawOPS.lineTo:
        path.lineTo(data[i++], data[i++]);
        break;
      case DrawOPS.curveTo:
        path.bezierCurveTo(data[i++], data[i++], data[i++], data[i++], data[i++], data[i++]);
        break;
      case DrawOPS.quadraticCurveTo:
        path.quadraticCurveTo(data[i++], data[i++], data[i++], data[i++]);
        break;
      case DrawOPS.closePath:
        path.closePath();
        break;
      default:
        warn(`Unrecognized drawing path operator: ${data[i - 1]}`);
        break;
    }
  }
  return path;
}

;// ./src/display/editor/toolbar.js

class EditorToolbar {
  #toolbar = null;
  #colorPicker = null;
  #editor;
  #buttons = null;
  #altText = null;
  #comment = null;
  #commentButtonDivider = null;
  #signatureDescriptionButton = null;
  static #l10nRemove = null;
  constructor(editor) {
    this.#editor = editor;
    EditorToolbar.#l10nRemove ||= Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
      signature: "pdfjs-editor-remove-signature-button"
    });
  }
  render() {
    const editToolbar = this.#toolbar = document.createElement("div");
    editToolbar.classList.add("editToolbar", "hidden");
    editToolbar.setAttribute("role", "toolbar");
    const signal = this.#editor._uiManager._signal;
    if (signal instanceof AbortSignal && !signal.aborted) {
      editToolbar.addEventListener("contextmenu", noContextMenu, {
        signal
      });
      editToolbar.addEventListener("pointerdown", EditorToolbar.#pointerDown, {
        signal
      });
    }
    const buttons = this.#buttons = document.createElement("div");
    buttons.className = "buttons";
    editToolbar.append(buttons);
    const position = this.#editor.toolbarPosition;
    if (position) {
      const {
        style
      } = editToolbar;
      const x = this.#editor._uiManager.direction === "ltr" ? 1 - position[0] : position[0];
      style.insetInlineEnd = `${100 * x}%`;
      style.top = `calc(${100 * position[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return editToolbar;
  }
  get div() {
    return this.#toolbar;
  }
  static #pointerDown(e) {
    e.stopPropagation();
  }
  #focusIn(e) {
    this.#editor._focusEventsAllowed = false;
    stopEvent(e);
  }
  #focusOut(e) {
    this.#editor._focusEventsAllowed = true;
    stopEvent(e);
  }
  #addListenersToElement(element) {
    const signal = this.#editor._uiManager._signal;
    if (!(signal instanceof AbortSignal) || signal.aborted) {
      return false;
    }
    element.addEventListener("focusin", this.#focusIn.bind(this), {
      capture: true,
      signal
    });
    element.addEventListener("focusout", this.#focusOut.bind(this), {
      capture: true,
      signal
    });
    element.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    return true;
  }
  hide() {
    this.#toolbar.classList.add("hidden");
    this.#colorPicker?.hideDropdown();
  }
  show() {
    this.#toolbar.classList.remove("hidden");
    this.#altText?.shown();
    this.#comment?.shown();
  }
  addDeleteButton() {
    const {
      editorType,
      _uiManager
    } = this.#editor;
    const button = document.createElement("button");
    button.classList.add("basic", "deleteButton");
    button.tabIndex = 0;
    button.setAttribute("data-l10n-id", EditorToolbar.#l10nRemove[editorType]);
    if (this.#addListenersToElement(button)) {
      button.addEventListener("click", e => {
        _uiManager.delete();
      }, {
        signal: _uiManager._signal
      });
    }
    this.#buttons.append(button);
  }
  get #divider() {
    const divider = document.createElement("div");
    divider.className = "divider";
    return divider;
  }
  async addAltText(altText) {
    const button = await altText.render();
    this.#addListenersToElement(button);
    this.#buttons.append(button, this.#divider);
    this.#altText = altText;
  }
  addComment(comment, beforeElement = null) {
    if (this.#comment) {
      return;
    }
    const button = comment.renderForToolbar();
    if (!button) {
      return;
    }
    this.#addListenersToElement(button);
    const divider = this.#commentButtonDivider = this.#divider;
    if (!beforeElement) {
      this.#buttons.append(button, divider);
    } else {
      this.#buttons.insertBefore(button, beforeElement);
      this.#buttons.insertBefore(divider, beforeElement);
    }
    this.#comment = comment;
    comment.toolbar = this;
  }
  addColorPicker(colorPicker) {
    if (this.#colorPicker) {
      return;
    }
    this.#colorPicker = colorPicker;
    const button = colorPicker.renderButton();
    this.#addListenersToElement(button);
    this.#buttons.append(button, this.#divider);
  }
  async addEditSignatureButton(signatureManager) {
    const button = this.#signatureDescriptionButton = await signatureManager.renderEditButton(this.#editor);
    this.#addListenersToElement(button);
    this.#buttons.append(button, this.#divider);
  }
  removeButton(name) {
    switch (name) {
      case "comment":
        this.#comment?.removeToolbarCommentButton();
        this.#comment = null;
        this.#commentButtonDivider?.remove();
        this.#commentButtonDivider = null;
        break;
    }
  }
  async addButton(name, tool) {
    switch (name) {
      case "colorPicker":
        if (tool) {
          this.addColorPicker(tool);
        }
        break;
      case "altText":
        if (tool) {
          await this.addAltText(tool);
        }
        break;
      case "editSignature":
        if (tool) {
          await this.addEditSignatureButton(tool);
        }
        break;
      case "delete":
        this.addDeleteButton();
        break;
      case "comment":
        if (tool) {
          this.addComment(tool);
        }
        break;
    }
  }
  async addButtonBefore(name, tool, beforeSelector) {
    if (!tool && name === "comment") {
      return;
    }
    const beforeElement = this.#buttons.querySelector(beforeSelector);
    if (!beforeElement) {
      return;
    }
    if (name === "comment") {
      this.addComment(tool, beforeElement);
    }
  }
  updateEditSignatureButton(description) {
    if (this.#signatureDescriptionButton) {
      this.#signatureDescriptionButton.title = description;
    }
  }
  remove() {
    this.#toolbar.remove();
    this.#colorPicker?.destroy();
    this.#colorPicker = null;
  }
}
class FloatingToolbar {
  #buttons = null;
  #toolbar = null;
  #uiManager;
  constructor(uiManager) {
    this.#uiManager = uiManager;
  }
  #render() {
    const editToolbar = this.#toolbar = document.createElement("div");
    editToolbar.className = "editToolbar";
    editToolbar.setAttribute("role", "toolbar");
    const signal = this.#uiManager._signal;
    if (signal instanceof AbortSignal && !signal.aborted) {
      editToolbar.addEventListener("contextmenu", noContextMenu, {
        signal
      });
    }
    const buttons = this.#buttons = document.createElement("div");
    buttons.className = "buttons";
    editToolbar.append(buttons);
    if (this.#uiManager.hasCommentManager()) {
      this.#makeButton("commentButton", `pdfjs-comment-floating-button`, "pdfjs-comment-floating-button-label", () => {
        this.#uiManager.commentSelection("floating_button");
      });
    }
    this.#makeButton("highlightButton", `pdfjs-highlight-floating-button1`, "pdfjs-highlight-floating-button-label", () => {
      this.#uiManager.highlightSelection("floating_button");
    });
    return editToolbar;
  }
  #getLastPoint(boxes, isLTR) {
    let lastY = 0;
    let lastX = 0;
    for (const box of boxes) {
      const y = box.y + box.height;
      if (y < lastY) {
        continue;
      }
      const x = box.x + (isLTR ? box.width : 0);
      if (y > lastY) {
        lastX = x;
        lastY = y;
        continue;
      }
      if (isLTR) {
        if (x > lastX) {
          lastX = x;
        }
      } else if (x < lastX) {
        lastX = x;
      }
    }
    return [isLTR ? 1 - lastX : lastX, lastY];
  }
  show(parent, boxes, isLTR) {
    const [x, y] = this.#getLastPoint(boxes, isLTR);
    const {
      style
    } = this.#toolbar ||= this.#render();
    parent.append(this.#toolbar);
    style.insetInlineEnd = `${100 * x}%`;
    style.top = `calc(${100 * y}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    this.#toolbar.remove();
  }
  #makeButton(buttonClass, l10nId, labelL10nId, clickHandler) {
    const button = document.createElement("button");
    button.classList.add("basic", buttonClass);
    button.tabIndex = 0;
    button.setAttribute("data-l10n-id", l10nId);
    const span = document.createElement("span");
    button.append(span);
    span.className = "visuallyHidden";
    span.setAttribute("data-l10n-id", labelL10nId);
    const signal = this.#uiManager._signal;
    if (signal instanceof AbortSignal && !signal.aborted) {
      button.addEventListener("contextmenu", noContextMenu, {
        signal
      });
      button.addEventListener("click", clickHandler, {
        signal
      });
    }
    this.#buttons.append(button);
  }
}

;// ./src/shared/internal_evt.js
const INTERNAL_EVT = "624b6d74-6dcb-4a6c-9095-fdf49d04e946";
const internalOpt = Object.freeze({
  internal: INTERNAL_EVT
});

;// ./src/display/editor/tools.js




function bindEvents(obj, element, names) {
  for (const name of names) {
    element.addEventListener(name, obj[name].bind(obj));
  }
}
class CurrentPointers {
  static #pointerId = NaN;
  static #pointerIds = null;
  static #moveTimestamp = NaN;
  static #pointerType = null;
  static initializeAndAddPointerId(pointerId) {
    (CurrentPointers.#pointerIds ||= new Set()).add(pointerId);
  }
  static setPointer(pointerType, pointerId) {
    CurrentPointers.#pointerId ||= pointerId;
    CurrentPointers.#pointerType ??= pointerType;
  }
  static setTimeStamp(timeStamp) {
    CurrentPointers.#moveTimestamp = timeStamp;
  }
  static isSamePointerId(pointerId) {
    return CurrentPointers.#pointerId === pointerId;
  }
  static isSamePointerIdOrRemove(pointerId) {
    if (CurrentPointers.#pointerId === pointerId) {
      return true;
    }
    CurrentPointers.#pointerIds?.delete(pointerId);
    return false;
  }
  static isSamePointerType(pointerType) {
    return CurrentPointers.#pointerType === pointerType;
  }
  static isInitializedAndDifferentPointerType(pointerType) {
    return CurrentPointers.#pointerType !== null && !CurrentPointers.isSamePointerType(pointerType);
  }
  static isSameTimeStamp(timeStamp) {
    return CurrentPointers.#moveTimestamp === timeStamp;
  }
  static isUsingMultiplePointers() {
    return CurrentPointers.#pointerIds?.size >= 1;
  }
  static clearPointerType() {
    CurrentPointers.#pointerType = null;
  }
  static clearPointerIds() {
    CurrentPointers.#pointerId = NaN;
    CurrentPointers.#pointerIds = null;
  }
  static clearTimeStamp() {
    CurrentPointers.#moveTimestamp = NaN;
  }
}
class IdManager {
  #id = 0;
  get id() {
    return `${AnnotationEditorPrefix}${this.#id++}`;
  }
}
class ImageManager {
  #baseId = getUuid();
  #id = 0;
  #cache = null;
  static get _isSVGFittingCanvas() {
    const svg = `data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="${SVG_NS}"><rect width="1" height="1" style="fill:red;"/></svg>`;
    const canvas = new OffscreenCanvas(1, 3);
    const ctx = canvas.getContext("2d", {
      willReadFrequently: true
    });
    const image = new Image();
    image.src = svg;
    const promise = image.decode().then(() => {
      ctx.drawImage(image, 0, 0, 1, 1, 0, 0, 1, 3);
      return new Uint32Array(ctx.getImageData(0, 0, 1, 1).data.buffer)[0] === 0;
    });
    return shadow(this, "_isSVGFittingCanvas", promise);
  }
  async #get(key, rawData) {
    this.#cache ||= new Map();
    let data = this.#cache.get(key);
    if (data === null) {
      return null;
    }
    if (data?.bitmap) {
      data.refCounter += 1;
      return data;
    }
    try {
      data ||= {
        bitmap: null,
        id: `image_${this.#baseId}_${this.#id++}`,
        refCounter: 0,
        isSvg: false
      };
      let image;
      if (typeof rawData === "string") {
        data.url = rawData;
        image = await fetchData(rawData, "blob");
      } else if (rawData instanceof File) {
        image = data.file = rawData;
      } else if (rawData instanceof Blob) {
        image = rawData;
      }
      if (image.type === "image/svg+xml") {
        const mustRemoveAspectRatioPromise = ImageManager._isSVGFittingCanvas;
        const fileReader = new FileReader();
        const imageElement = new Image();
        const imagePromise = new Promise((resolve, reject) => {
          imageElement.onload = () => {
            data.bitmap = imageElement;
            data.isSvg = true;
            resolve();
          };
          fileReader.onload = async () => {
            const url = data.svgUrl = fileReader.result;
            imageElement.src = (await mustRemoveAspectRatioPromise) ? `${url}#svgView(preserveAspectRatio(none))` : url;
          };
          imageElement.onerror = fileReader.onerror = reject;
        });
        fileReader.readAsDataURL(image);
        await imagePromise;
      } else {
        data.bitmap = await createImageBitmap(image);
      }
      data.refCounter = 1;
    } catch (e) {
      warn(e);
      data = null;
    }
    this.#cache.set(key, data);
    if (data) {
      this.#cache.set(data.id, data);
    }
    return data;
  }
  async getFromFile(file) {
    const {
      lastModified,
      name,
      size,
      type
    } = file;
    return this.#get(`${lastModified}_${name}_${size}_${type}`, file);
  }
  async getFromUrl(url) {
    return this.#get(url, url);
  }
  async getFromBlob(id, blobPromise) {
    const blob = await blobPromise;
    return this.#get(id, blob);
  }
  async getFromId(id) {
    this.#cache ||= new Map();
    const data = this.#cache.get(id);
    if (!data) {
      return null;
    }
    if (data.bitmap) {
      data.refCounter += 1;
      return data;
    }
    if (data.file) {
      return this.getFromFile(data.file);
    }
    if (data.blobPromise) {
      const {
        blobPromise
      } = data;
      delete data.blobPromise;
      return this.getFromBlob(data.id, blobPromise);
    }
    return this.getFromUrl(data.url);
  }
  getFromCanvas(id, canvas) {
    this.#cache ||= new Map();
    let data = this.#cache.get(id);
    if (data?.bitmap) {
      data.refCounter += 1;
      return data;
    }
    const offscreen = new OffscreenCanvas(canvas.width, canvas.height);
    const ctx = offscreen.getContext("2d");
    ctx.drawImage(canvas, 0, 0);
    data = {
      bitmap: offscreen.transferToImageBitmap(),
      id: `image_${this.#baseId}_${this.#id++}`,
      refCounter: 1,
      isSvg: false
    };
    this.#cache.set(id, data);
    this.#cache.set(data.id, data);
    return data;
  }
  getSvgUrl(id) {
    const data = this.#cache.get(id);
    if (!data?.isSvg) {
      return null;
    }
    return data.svgUrl;
  }
  deleteId(id) {
    this.#cache ||= new Map();
    const data = this.#cache.get(id);
    if (!data) {
      return;
    }
    data.refCounter -= 1;
    if (data.refCounter !== 0) {
      return;
    }
    const {
      bitmap
    } = data;
    if (!data.url && !data.file) {
      const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
      const ctx = canvas.getContext("bitmaprenderer");
      ctx.transferFromImageBitmap(bitmap);
      data.blobPromise = canvas.convertToBlob();
    }
    bitmap.close?.();
    data.bitmap = null;
  }
  isValidId(id) {
    return id.startsWith(`image_${this.#baseId}_`);
  }
}
class CommandManager {
  #commands = [];
  #locked = false;
  #maxSize;
  #position = -1;
  constructor(maxSize = 128) {
    this.#maxSize = maxSize;
  }
  add({
    cmd,
    undo,
    post,
    mustExec,
    type = NaN,
    overwriteIfSameType = false,
    keepUndo = false
  }) {
    if (mustExec) {
      cmd();
    }
    if (this.#locked) {
      return;
    }
    const save = {
      cmd,
      undo,
      post,
      type
    };
    if (this.#position === -1) {
      if (this.#commands.length > 0) {
        this.#commands.length = 0;
      }
      this.#position = 0;
      this.#commands.push(save);
      return;
    }
    if (overwriteIfSameType && this.#commands[this.#position].type === type) {
      if (keepUndo) {
        save.undo = this.#commands[this.#position].undo;
      }
      this.#commands[this.#position] = save;
      return;
    }
    const next = this.#position + 1;
    if (next === this.#maxSize) {
      this.#commands.splice(0, 1);
    } else {
      this.#position = next;
      if (next < this.#commands.length) {
        this.#commands.splice(next);
      }
    }
    this.#commands.push(save);
  }
  undo() {
    if (this.#position === -1) {
      return;
    }
    this.#locked = true;
    const {
      undo,
      post
    } = this.#commands[this.#position];
    undo();
    post?.();
    this.#locked = false;
    this.#position -= 1;
  }
  redo() {
    if (this.#position < this.#commands.length - 1) {
      this.#position += 1;
      this.#locked = true;
      const {
        cmd,
        post
      } = this.#commands[this.#position];
      cmd();
      post?.();
      this.#locked = false;
    }
  }
  hasSomethingToUndo() {
    return this.#position !== -1;
  }
  hasSomethingToRedo() {
    return this.#position < this.#commands.length - 1;
  }
  cleanType(type) {
    if (this.#position === -1) {
      return;
    }
    for (let i = this.#position; i >= 0; i--) {
      if (this.#commands[i].type !== type) {
        this.#commands.splice(i + 1, this.#position - i);
        this.#position = i;
        return;
      }
    }
    this.#commands.length = 0;
    this.#position = -1;
  }
  destroy() {
    this.#commands = null;
  }
}
class KeyboardManager {
  static ALT = 0x1;
  static CTRL = 0x2;
  static META = 0x4;
  static SHIFT = 0x8;
  constructor(callbacks) {
    this.callbacks = new Map();
    const {
      isMac
    } = FeatureTest.platform;
    for (const [keys, callback, options = {}] of callbacks) {
      const hasMacOverride = keys.some(k => k.startsWith("mac+"));
      for (const key of keys) {
        let shortcut = key;
        if (hasMacOverride) {
          const isMacKey = key.startsWith("mac+");
          if (isMac !== isMacKey) {
            continue;
          }
          if (isMacKey) {
            shortcut = key.slice(4);
          }
        }
        const [keyName, modifiers] = KeyboardManager.#parseShortcut(shortcut);
        if (keyName === null) {
          continue;
        }
        this.callbacks.getOrInsertComputed(keyName, makeArr).push({
          callback,
          options,
          modifiers
        });
      }
    }
  }
  static #parseShortcut(value) {
    let keyPart = null;
    let modifiers = 0;
    for (let part of value.split("+")) {
      part = part.trim();
      if (!part) {
        continue;
      }
      const upper = part.toUpperCase();
      const modifier = KeyboardManager[upper];
      if (modifier) {
        modifiers |= modifier;
        continue;
      }
      if (keyPart !== null) {
        warn(`KeyboardManager: multiple keys in shortcut "${value}"`);
        break;
      }
      keyPart = upper === "SPACE" ? " " : part;
    }
    if (keyPart === null) {
      warn(`KeyboardManager: no key found in shortcut "${value}"`);
    }
    return [keyPart, modifiers];
  }
  static #codeToKey(code) {
    const match = /^(?:Key([A-Z])|(?:Digit|Numpad)(\d))$/.exec(code);
    if (!match) {
      return null;
    }
    return match[1]?.toLowerCase() ?? match[2];
  }
  exec(self, event) {
    let shortcuts = this.callbacks.get(event.key);
    if (!shortcuts) {
      if (/^[a-z]$/i.test(event.key)) {
        return;
      }
      const fallback = KeyboardManager.#codeToKey(event.code);
      if (fallback === null || fallback === event.key) {
        return;
      }
      shortcuts = this.callbacks.get(fallback);
      if (!shortcuts) {
        return;
      }
    }
    const eventModifiers = (event.altKey ? KeyboardManager.ALT : 0) | (event.ctrlKey ? KeyboardManager.CTRL : 0) | (event.metaKey ? KeyboardManager.META : 0) | (event.shiftKey ? KeyboardManager.SHIFT : 0);
    const info = shortcuts.find(shortcut => shortcut.modifiers === eventModifiers);
    if (!info) {
      return;
    }
    const {
      callback,
      options: {
        bubbles = false,
        args = [],
        checker = null
      }
    } = info;
    if (checker && !checker(self, event)) {
      return;
    }
    callback.bind(self, ...args, event)();
    if (!bubbles) {
      stopEvent(event);
    }
  }
}
class ColorManager {
  static _colorsMapping = new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
  get _colors() {
    const colors = new Map([["CanvasText", null], ["Canvas", null]]);
    getColorValues(colors);
    return shadow(this, "_colors", colors);
  }
  convert(color) {
    const rgb = getRGB(color);
    if (!window.matchMedia("(forced-colors: active)").matches) {
      return rgb;
    }
    for (const [name, RGB] of this._colors) {
      if (RGB.every((x, i) => x === rgb[i])) {
        return ColorManager._colorsMapping.get(name);
      }
    }
    return rgb;
  }
  getHexCode(name) {
    const rgb = this._colors.get(name);
    if (!rgb) {
      return name;
    }
    return Util.makeHexColor(...rgb);
  }
}
class AnnotationEditorUIManager {
  #abortController = new AbortController();
  #activeEditor = null;
  #allEditableAnnotations = null;
  #allEditors = new Map();
  #allLayers = new Map();
  #savedAllLayers = null;
  #altTextManager = null;
  #annotationStorage = null;
  #changedExistingAnnotations = null;
  #commandManager = new CommandManager();
  #commentManager = null;
  #copyPasteAC = null;
  #currentDrawingSession = null;
  #currentPageIndex = 0;
  #deletedAnnotationsElementIds = new Set();
  #draggingEditors = null;
  #editorTypes = null;
  #editorsToRescale = new Set();
  _editorUndoBar = null;
  #enableHighlightFloatingButton = false;
  #enableUpdatedAddImage = false;
  #enableNewAltTextWhenAddingImage = false;
  #filterFactory = null;
  #focusMainContainerTimeoutId = null;
  #focusManagerAC = null;
  #highlightColors = null;
  #highlightWhenShiftUp = false;
  #floatingToolbar = null;
  #idManager = new IdManager();
  #isEnabled = false;
  #isPointerDown = false;
  #isWaiting = false;
  #keyboardManagerAC = null;
  #lastActiveElement = null;
  #mainHighlightColorPicker = null;
  #missingCanvases = null;
  #mlManager = null;
  #mode = AnnotationEditorType.NONE;
  #selectedEditors = new Set();
  #selectedTextNode = null;
  #signatureManager = null;
  #pageColors = null;
  #showAllStates = null;
  #pdfDocument = null;
  #previousStates = {
    isEditing: false,
    isEmpty: true,
    hasSomethingToUndo: false,
    hasSomethingToRedo: false,
    hasSelectedEditor: false,
    hasSelectedText: false
  };
  #translation = [0, 0];
  #translationTimeoutId = null;
  #container = null;
  #viewer = null;
  #viewerAlert = null;
  #updateModeCapability = null;
  static TRANSLATE_SMALL = 1;
  static TRANSLATE_BIG = 10;
  static get _keyboardManager() {
    const proto = AnnotationEditorUIManager.prototype;
    const arrowChecker = self => self.#container.contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && self.hasSomethingToControl();
    const textInputChecker = (_self, {
      target: el
    }) => {
      if (el instanceof HTMLInputElement) {
        const {
          type
        } = el;
        return type !== "text" && type !== "number";
      }
      return true;
    };
    const small = this.TRANSLATE_SMALL;
    const big = this.TRANSLATE_BIG;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+a", "mac+meta+a"], proto.selectAll, {
      checker: textInputChecker
    }], [["ctrl+z", "mac+meta+z"], proto.undo, {
      checker: textInputChecker
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], proto.redo, {
      checker: textInputChecker
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], proto.delete, {
      checker: textInputChecker
    }], [["Enter"], proto.addNewEditorFromKeyboard, {
      checker: (self, {
        target: el
      }) => !(el instanceof HTMLButtonElement) && self.#container.contains(el) && !self.isEnterHandled
    }], [["Space"], proto.addNewEditorFromKeyboard, {
      checker: (self, {
        target: el
      }) => !(el instanceof HTMLButtonElement) && self.#container.contains(document.activeElement)
    }], [["Escape"], proto.unselectAll], [["ArrowLeft"], proto.translateSelectedEditors, {
      args: [-small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], proto.translateSelectedEditors, {
      args: [-big, 0],
      checker: arrowChecker
    }], [["ArrowRight"], proto.translateSelectedEditors, {
      args: [small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], proto.translateSelectedEditors, {
      args: [big, 0],
      checker: arrowChecker
    }], [["ArrowUp"], proto.translateSelectedEditors, {
      args: [0, -small],
      checker: arrowChecker
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], proto.translateSelectedEditors, {
      args: [0, -big],
      checker: arrowChecker
    }], [["ArrowDown"], proto.translateSelectedEditors, {
      args: [0, small],
      checker: arrowChecker
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], proto.translateSelectedEditors, {
      args: [0, big],
      checker: arrowChecker
    }]]));
  }
  constructor(container, viewer, viewerAlert, altTextManager, commentManager, signatureManager, eventBus, pdfDocument, pageColors, highlightColors, enableHighlightFloatingButton, enableUpdatedAddImage, enableNewAltTextWhenAddingImage, mlManager, editorUndoBar, supportsPinchToZoom) {
    const signal = this._signal = this.#abortController.signal;
    this.#container = container;
    this.#viewer = viewer;
    this.#viewerAlert = viewerAlert;
    this.#altTextManager = altTextManager;
    this.#commentManager = commentManager;
    this.#signatureManager = signatureManager;
    this.#pdfDocument = pdfDocument;
    this._eventBus = eventBus;
    const evtOpts = {
      signal,
      ...internalOpt
    };
    eventBus.on("editingaction", this.onEditingAction.bind(this), evtOpts);
    eventBus.on("pagechanging", this.onPageChanging.bind(this), evtOpts);
    eventBus.on("scalechanging", this.onScaleChanging.bind(this), evtOpts);
    eventBus.on("rotationchanging", this.onRotationChanging.bind(this), evtOpts);
    eventBus.on("setpreference", this.onSetPreference.bind(this), evtOpts);
    eventBus.on("switchannotationeditorparams", evt => this.updateParams(evt.type, evt.value), evtOpts);
    window.addEventListener("pointerdown", () => {
      this.#isPointerDown = true;
    }, {
      capture: true,
      signal
    });
    window.addEventListener("pointerup", () => {
      this.#isPointerDown = false;
    }, {
      capture: true,
      signal
    });
    window.addEventListener("beforeunload", this.#beforeUnload.bind(this), {
      capture: true,
      signal
    });
    this.#addSelectionListener();
    this.#addDragAndDropListeners();
    this.#addKeyboardManager();
    this.#annotationStorage = pdfDocument.annotationStorage;
    this.#filterFactory = pdfDocument.filterFactory;
    this.#pageColors = pageColors;
    this.#highlightColors = highlightColors || null;
    this.#enableHighlightFloatingButton = enableHighlightFloatingButton;
    this.#enableUpdatedAddImage = enableUpdatedAddImage;
    this.#enableNewAltTextWhenAddingImage = enableNewAltTextWhenAddingImage;
    this.#mlManager = mlManager || null;
    this.viewParameters = {
      realScale: PixelsPerInch.PDF_TO_CSS_UNITS,
      rotation: 0
    };
    this.isShiftKeyDown = false;
    this._editorUndoBar = editorUndoBar || null;
    this._supportsPinchToZoom = supportsPinchToZoom !== false;
    commentManager?.setSidebarUiManager(this);
  }
  destroy() {
    this.#updateModeCapability?.resolve();
    this.#updateModeCapability = null;
    this.#abortController?.abort();
    this.#abortController = null;
    this._signal = null;
    for (const layer of this.#allLayers.values()) {
      layer.destroy();
    }
    this.#allLayers.clear();
    this.#allEditors.clear();
    this.#editorsToRescale.clear();
    this.#missingCanvases?.clear();
    this.#activeEditor = null;
    this.#selectedEditors.clear();
    this.#commandManager.destroy();
    this.#altTextManager?.destroy();
    this.#commentManager?.destroy();
    this.#signatureManager?.destroy();
    this.#floatingToolbar?.hide();
    this.#floatingToolbar = null;
    this.#mainHighlightColorPicker?.destroy();
    this.#mainHighlightColorPicker = null;
    this.#allEditableAnnotations = null;
    if (this.#focusMainContainerTimeoutId) {
      clearTimeout(this.#focusMainContainerTimeoutId);
      this.#focusMainContainerTimeoutId = null;
    }
    if (this.#translationTimeoutId) {
      clearTimeout(this.#translationTimeoutId);
      this.#translationTimeoutId = null;
    }
    this._editorUndoBar?.destroy();
    this.#pdfDocument = null;
  }
  combinedSignal(ac) {
    return AbortSignal.any([this._signal, ac.signal]);
  }
  get mlManager() {
    return this.#mlManager;
  }
  get useNewAltTextFlow() {
    return this.#enableUpdatedAddImage;
  }
  get useNewAltTextWhenAddingImage() {
    return this.#enableNewAltTextWhenAddingImage;
  }
  get hcmFilter() {
    return shadow(this, "hcmFilter", this.#pageColors ? this.#filterFactory.addHCMFilter(this.#pageColors.foreground, this.#pageColors.background) : "none");
  }
  get direction() {
    return shadow(this, "direction", getComputedStyle(this.#container).direction);
  }
  get _highlightColors() {
    return shadow(this, "_highlightColors", this.#highlightColors ? new Map(this.#highlightColors.split(",").map(pair => {
      pair = pair.split("=").map(x => x.trim());
      pair[1] = pair[1].toUpperCase();
      return pair;
    })) : null);
  }
  get highlightColors() {
    const {
      _highlightColors
    } = this;
    if (!_highlightColors) {
      return shadow(this, "highlightColors", null);
    }
    const map = new Map();
    const hasHCM = !!this.#pageColors;
    for (const [name, color] of _highlightColors) {
      const isNameForHCM = name.endsWith("_HCM");
      if (hasHCM && isNameForHCM) {
        map.set(name.replace("_HCM", ""), color);
        continue;
      }
      if (!hasHCM && !isNameForHCM) {
        map.set(name, color);
      }
    }
    return shadow(this, "highlightColors", map);
  }
  get highlightColorNames() {
    return shadow(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, e => e.reverse())) : null);
  }
  getNonHCMColor(color) {
    if (!this._highlightColors) {
      return color;
    }
    const colorName = this.highlightColorNames.get(color);
    return this._highlightColors.get(colorName) || color;
  }
  getNonHCMColorName(color) {
    return this.highlightColorNames.get(color) || color;
  }
  setCurrentDrawingSession(layer) {
    if (layer) {
      this.unselectAll();
      this.disableUserSelect(true);
    } else {
      this.disableUserSelect(false);
    }
    this.#currentDrawingSession = layer;
  }
  setMainHighlightColorPicker(colorPicker) {
    this.#mainHighlightColorPicker = colorPicker;
  }
  editAltText(editor, firstTime = false) {
    this.#altTextManager?.editAltText(this, editor, firstTime);
  }
  hasCommentManager() {
    return !!this.#commentManager;
  }
  editComment(editor, posX, posY, options) {
    this.#commentManager?.showDialog(this, editor, posX, posY, options);
  }
  selectComment(pageIndex, uid) {
    const layer = this.#allLayers.get(pageIndex);
    const editor = layer?.getEditorByUID(uid);
    editor?.toggleComment(true, true);
  }
  updateComment(editor) {
    this.#commentManager?.updateComment(editor.getData());
  }
  updatePopupColor(editor) {
    this.#commentManager?.updatePopupColor(editor);
  }
  removeComment(editor) {
    this.#commentManager?.removeComments([editor.uid]);
  }
  deleteComment(editor, savedData) {
    const undo = () => {
      editor.comment = savedData;
    };
    const cmd = () => {
      this._editorUndoBar?.show(undo, "comment");
      this.toggleComment(null);
      editor.comment = null;
    };
    this.addCommands({
      cmd,
      undo,
      mustExec: true
    });
  }
  toggleComment(editor, isSelected, visibility = undefined) {
    this.#commentManager?.toggleCommentPopup(editor, isSelected, visibility);
  }
  makeCommentColor(color, opacity) {
    return color && this.#commentManager?.makeCommentColor(color, opacity) || null;
  }
  getCommentDialogElement() {
    return this.#commentManager?.dialogElement || null;
  }
  async waitForEditorsRendered(pageNumber) {
    if (this.#allLayers.has(pageNumber - 1)) {
      return;
    }
    const {
      resolve,
      promise
    } = Promise.withResolvers();
    const onEditorsRendered = evt => {
      if (evt.pageNumber === pageNumber) {
        this._eventBus.off("editorsrendered", onEditorsRendered);
        resolve();
      }
    };
    this._eventBus.on("editorsrendered", onEditorsRendered, internalOpt);
    await promise;
  }
  getSignature(editor) {
    this.#signatureManager?.getSignature({
      uiManager: this,
      editor
    });
  }
  get signatureManager() {
    return this.#signatureManager;
  }
  switchToMode(mode, callback) {
    this._eventBus.on("annotationeditormodechanged", callback, {
      once: true,
      signal: this._signal,
      ...internalOpt
    });
    this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode
    });
  }
  setPreference(name, value) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name,
      value
    });
  }
  onSetPreference({
    name,
    value
  }) {
    switch (name) {
      case "enableNewAltTextWhenAddingImage":
        this.#enableNewAltTextWhenAddingImage = value;
        break;
    }
  }
  onPageChanging({
    pageNumber
  }) {
    this.#currentPageIndex = pageNumber - 1;
  }
  deletePage(id) {
    for (const editor of this.getEditors(id)) {
      editor.remove();
    }
    this.#allLayers.delete(id);
    if (this.#currentPageIndex === id) {
      this.#currentPageIndex = 0;
    }
  }
  focusMainContainer() {
    this.#container.focus();
  }
  findParent(x, y) {
    for (const layer of this.#allLayers.values()) {
      const {
        x: layerX,
        y: layerY,
        width,
        height
      } = layer.div.getBoundingClientRect();
      if (x >= layerX && x <= layerX + width && y >= layerY && y <= layerY + height) {
        return layer;
      }
    }
    return null;
  }
  disableUserSelect(value = false) {
    this.#viewer.classList.toggle("noUserSelect", value);
  }
  addShouldRescale(editor) {
    this.#editorsToRescale.add(editor);
  }
  removeShouldRescale(editor) {
    this.#editorsToRescale.delete(editor);
  }
  onScaleChanging({
    scale
  }) {
    this.commitOrRemove();
    this.viewParameters.realScale = scale * PixelsPerInch.PDF_TO_CSS_UNITS;
    for (const editor of this.#editorsToRescale) {
      editor.onScaleChanging();
    }
    this.#currentDrawingSession?.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation
  }) {
    this.commitOrRemove();
    this.viewParameters.rotation = pagesRotation;
  }
  #getAnchorElementForSelection({
    anchorNode
  }) {
    return anchorNode.nodeType === Node.TEXT_NODE ? anchorNode.parentElement : anchorNode;
  }
  #getLayerForTextLayer(textLayer) {
    const {
      currentLayer
    } = this;
    if (currentLayer.hasTextLayer(textLayer)) {
      return currentLayer;
    }
    for (const layer of this.#allLayers.values()) {
      if (layer.hasTextLayer(textLayer)) {
        return layer;
      }
    }
    return null;
  }
  highlightSelection(methodOfCreation = "", comment = false) {
    const selection = document.getSelection();
    if (!selection || selection.isCollapsed) {
      return;
    }
    const {
      anchorNode,
      anchorOffset,
      focusNode,
      focusOffset
    } = selection;
    const text = selection.toString();
    const anchorElement = this.#getAnchorElementForSelection(selection);
    const textLayer = anchorElement.closest(".textLayer");
    const boxes = this.getSelectionBoxes(textLayer);
    if (!boxes) {
      return;
    }
    selection.empty();
    const layer = this.#getLayerForTextLayer(textLayer);
    const isNoneMode = this.#mode === AnnotationEditorType.NONE;
    const callback = () => {
      const editor = layer?.createAndAddNewEditor({
        x: 0,
        y: 0
      }, false, {
        methodOfCreation,
        boxes,
        anchorNode,
        anchorOffset,
        focusNode,
        focusOffset,
        text
      });
      if (isNoneMode) {
        this.showAllEditors("highlight", true, true);
      }
      if (comment) {
        editor?.editComment();
      }
    };
    if (isNoneMode) {
      this.switchToMode(AnnotationEditorType.HIGHLIGHT, callback);
      return;
    }
    callback();
  }
  commentSelection(methodOfCreation = "") {
    this.highlightSelection(methodOfCreation, true);
  }
  #beforeUnload(e) {
    this.commitOrRemove();
    this.currentLayer?.endDrawingSession(false);
  }
  #displayFloatingToolbar() {
    const selection = document.getSelection();
    if (!selection || selection.isCollapsed) {
      return;
    }
    const anchorElement = this.#getAnchorElementForSelection(selection);
    const textLayer = anchorElement.closest(".textLayer");
    const boxes = this.getSelectionBoxes(textLayer);
    if (!boxes) {
      return;
    }
    this.#floatingToolbar ||= new FloatingToolbar(this);
    this.#floatingToolbar.show(textLayer, boxes, this.direction === "ltr");
  }
  getAndRemoveDataFromAnnotationStorage(annotationId) {
    if (!this.#annotationStorage) {
      return null;
    }
    const key = `${AnnotationEditorPrefix}${annotationId}`;
    const storedValue = this.#annotationStorage.getRawValue(key);
    if (storedValue) {
      this.#annotationStorage.remove(key);
    }
    return storedValue;
  }
  addToAnnotationStorage(editor) {
    if (!editor.isEmpty() && this.#annotationStorage && !this.#annotationStorage.has(editor.id)) {
      this.#annotationStorage.setValue(editor.id, editor);
    }
  }
  a11yAlert(messageId, args = null) {
    const viewerAlert = this.#viewerAlert;
    if (!viewerAlert) {
      return;
    }
    viewerAlert.setAttribute("data-l10n-id", messageId);
    if (args) {
      viewerAlert.setAttribute("data-l10n-args", JSON.stringify(args));
    } else {
      viewerAlert.removeAttribute("data-l10n-args");
    }
  }
  #selectionChange() {
    const selection = document.getSelection();
    if (!selection || selection.isCollapsed) {
      if (this.#selectedTextNode) {
        this.#floatingToolbar?.hide();
        this.#selectedTextNode = null;
        this.#dispatchUpdateStates({
          hasSelectedText: false
        });
      }
      return;
    }
    const {
      anchorNode
    } = selection;
    if (anchorNode === this.#selectedTextNode) {
      return;
    }
    const anchorElement = this.#getAnchorElementForSelection(selection);
    const textLayer = anchorElement.closest(".textLayer");
    if (!textLayer) {
      if (this.#selectedTextNode) {
        this.#floatingToolbar?.hide();
        this.#selectedTextNode = null;
        this.#dispatchUpdateStates({
          hasSelectedText: false
        });
      }
      return;
    }
    this.#floatingToolbar?.hide();
    this.#selectedTextNode = anchorNode;
    this.#dispatchUpdateStates({
      hasSelectedText: true
    });
    if (this.#mode !== AnnotationEditorType.HIGHLIGHT && this.#mode !== AnnotationEditorType.NONE) {
      return;
    }
    if (this.#mode === AnnotationEditorType.HIGHLIGHT) {
      this.showAllEditors("highlight", true, true);
    }
    this.#highlightWhenShiftUp = this.isShiftKeyDown;
    if (!this.isShiftKeyDown) {
      const activeLayer = this.#mode === AnnotationEditorType.HIGHLIGHT ? this.#getLayerForTextLayer(textLayer) : null;
      activeLayer?.toggleDrawing();
      if (this.#isPointerDown) {
        const ac = new AbortController();
        const signal = this.combinedSignal(ac);
        const pointerup = e => {
          if (e.type === "pointerup" && e.button !== 0) {
            return;
          }
          ac.abort();
          activeLayer?.toggleDrawing(true);
          if (e.type === "pointerup") {
            this.#onSelectEnd("main_toolbar");
          }
        };
        window.addEventListener("pointerup", pointerup, {
          signal
        });
        window.addEventListener("blur", pointerup, {
          signal
        });
      } else {
        activeLayer?.toggleDrawing(true);
        this.#onSelectEnd("main_toolbar");
      }
    }
  }
  #onSelectEnd(methodOfCreation = "") {
    if (this.#mode === AnnotationEditorType.HIGHLIGHT) {
      this.highlightSelection(methodOfCreation);
    } else if (this.#enableHighlightFloatingButton) {
      this.#displayFloatingToolbar();
    }
  }
  #addSelectionListener() {
    document.addEventListener("selectionchange", this.#selectionChange.bind(this), {
      signal: this._signal
    });
  }
  #addFocusManager() {
    if (this.#focusManagerAC) {
      return;
    }
    this.#focusManagerAC = new AbortController();
    const signal = this.combinedSignal(this.#focusManagerAC);
    window.addEventListener("focus", this.focus.bind(this), {
      signal
    });
    window.addEventListener("blur", this.blur.bind(this), {
      signal
    });
  }
  #removeFocusManager() {
    this.#focusManagerAC?.abort();
    this.#focusManagerAC = null;
  }
  blur() {
    this.isShiftKeyDown = false;
    if (this.#highlightWhenShiftUp) {
      this.#highlightWhenShiftUp = false;
      this.#onSelectEnd("main_toolbar");
    }
    if (!this.hasSelection) {
      return;
    }
    const {
      activeElement
    } = document;
    for (const editor of this.#selectedEditors) {
      if (editor.div.contains(activeElement)) {
        this.#lastActiveElement = [editor, activeElement];
        editor._focusEventsAllowed = false;
        break;
      }
    }
  }
  focus() {
    if (!this.#lastActiveElement) {
      return;
    }
    const [lastEditor, lastActiveElement] = this.#lastActiveElement;
    this.#lastActiveElement = null;
    lastActiveElement.addEventListener("focusin", () => {
      lastEditor._focusEventsAllowed = true;
    }, {
      once: true,
      signal: this._signal
    });
    lastActiveElement.focus();
  }
  #addKeyboardManager() {
    if (this.#keyboardManagerAC) {
      return;
    }
    this.#keyboardManagerAC = new AbortController();
    const signal = this.combinedSignal(this.#keyboardManagerAC);
    window.addEventListener("keydown", this.keydown.bind(this), {
      signal
    });
    window.addEventListener("keyup", this.keyup.bind(this), {
      signal
    });
  }
  #removeKeyboardManager() {
    this.#keyboardManagerAC?.abort();
    this.#keyboardManagerAC = null;
  }
  #addCopyPasteListeners() {
    if (this.#copyPasteAC) {
      return;
    }
    this.#copyPasteAC = new AbortController();
    const signal = this.combinedSignal(this.#copyPasteAC);
    document.addEventListener("copy", this.copy.bind(this), {
      signal
    });
    document.addEventListener("cut", this.cut.bind(this), {
      signal
    });
    document.addEventListener("paste", this.paste.bind(this), {
      signal
    });
  }
  #removeCopyPasteListeners() {
    this.#copyPasteAC?.abort();
    this.#copyPasteAC = null;
  }
  #addDragAndDropListeners() {
    const signal = this._signal;
    document.addEventListener("dragover", this.dragOver.bind(this), {
      signal
    });
    document.addEventListener("drop", this.drop.bind(this), {
      signal
    });
  }
  addEditListeners() {
    this.#addKeyboardManager();
    this.setEditingState(true);
  }
  removeEditListeners() {
    this.#removeKeyboardManager();
    this.setEditingState(false);
  }
  dragOver(event) {
    for (const {
      type
    } of event.dataTransfer.items) {
      for (const editorType of this.#editorTypes) {
        if (editorType.isHandlingMimeForPasting(type)) {
          event.dataTransfer.dropEffect = "copy";
          event.preventDefault();
          return;
        }
      }
    }
  }
  drop(event) {
    for (const item of event.dataTransfer.items) {
      for (const editorType of this.#editorTypes) {
        if (editorType.isHandlingMimeForPasting(item.type)) {
          editorType.paste(item, this.currentLayer);
          event.preventDefault();
          return;
        }
      }
    }
  }
  copy(event) {
    event.preventDefault();
    this.#activeEditor?.commitOrRemove();
    if (!this.hasSelection) {
      return;
    }
    const editors = [];
    for (const editor of this.#selectedEditors) {
      const serialized = editor.serialize(true);
      if (serialized) {
        editors.push(serialized);
      }
    }
    if (editors.length === 0) {
      return;
    }
    event.clipboardData.setData("application/pdfjs", JSON.stringify(editors));
  }
  cut(event) {
    this.copy(event);
    this.delete();
  }
  async paste(event) {
    event.preventDefault();
    const {
      clipboardData
    } = event;
    for (const item of clipboardData.items) {
      for (const editorType of this.#editorTypes) {
        if (editorType.isHandlingMimeForPasting(item.type)) {
          editorType.paste(item, this.currentLayer);
          return;
        }
      }
    }
    let data = clipboardData.getData("application/pdfjs");
    if (!data) {
      return;
    }
    try {
      data = JSON.parse(data);
    } catch (ex) {
      warn(`paste: "${ex.message}".`);
      return;
    }
    if (!Array.isArray(data)) {
      return;
    }
    this.unselectAll();
    const layer = this.currentLayer;
    try {
      const newEditors = [];
      for (const editor of data) {
        const deserializedEditor = await layer.deserialize(editor);
        if (!deserializedEditor) {
          return;
        }
        newEditors.push(deserializedEditor);
      }
      const cmd = () => {
        for (const editor of newEditors) {
          this.#addEditorToLayer(editor);
        }
        this.#selectEditors(newEditors);
      };
      const undo = () => {
        for (const editor of newEditors) {
          editor.remove();
        }
      };
      this.addCommands({
        cmd,
        undo,
        mustExec: true
      });
    } catch (ex) {
      warn(`paste: "${ex.message}".`);
    }
  }
  keydown(event) {
    if (!this.isShiftKeyDown && event.key === "Shift") {
      this.isShiftKeyDown = true;
    }
    if (this.#mode !== AnnotationEditorType.NONE && !this.isEditorHandlingKeyboard) {
      AnnotationEditorUIManager._keyboardManager.exec(this, event);
    }
  }
  keyup(event) {
    if (this.isShiftKeyDown && event.key === "Shift") {
      this.isShiftKeyDown = false;
      if (this.#highlightWhenShiftUp) {
        this.#highlightWhenShiftUp = false;
        this.#onSelectEnd("main_toolbar");
      }
    }
  }
  onEditingAction({
    name
  }) {
    switch (name) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[name]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
      case "commentSelection":
        this.commentSelection("context_menu");
        break;
    }
  }
  updatePageIndex(oldPageIndex, newPageIndex) {
    for (const editor of this.getEditors(oldPageIndex)) {
      editor.pageIndex = newPageIndex;
    }
    const layer = this.#savedAllLayers.get(oldPageIndex);
    if (layer) {
      layer.pageIndex = newPageIndex;
      this.#allLayers.set(newPageIndex, layer);
      if (this.#isEnabled) {
        layer.enable();
      } else {
        layer.disable();
      }
    }
  }
  startUpdatePages() {
    this.#savedAllLayers = new Map(this.#allLayers);
    this.#allLayers.clear();
  }
  endUpdatePages() {
    this.#savedAllLayers = null;
  }
  clonePage(pageIndex, newPageIndex) {
    for (const editor of this.getEditors(pageIndex)) {
      const serialized = editor.serialize(editor.mode !== AnnotationEditorType.HIGHLIGHT);
      if (!serialized) {
        continue;
      }
      serialized.pageIndex = newPageIndex;
      serialized.id = this.getId();
      serialized.isClone = true;
      delete serialized.popupRef;
      this.#annotationStorage.setValue(serialized.id, serialized);
    }
  }
  findClonesForPage(layer) {
    const promises = [];
    const {
      pageIndex
    } = layer;
    for (const [id, editor] of this.#annotationStorage) {
      if (editor.pageIndex === pageIndex && editor.isClone) {
        this.#annotationStorage.remove(id);
        promises.push(layer.deserialize(editor).then(deserializedEditor => {
          if (deserializedEditor) {
            deserializedEditor.isClone = true;
            layer.addOrRebuild(deserializedEditor);
          }
        }));
      }
    }
    return Promise.all(promises);
  }
  #dispatchUpdateStates(details) {
    const hasChanged = Object.entries(details).some(([key, value]) => this.#previousStates[key] !== value);
    if (hasChanged) {
      this._eventBus.dispatch("editingstateschanged", {
        source: this,
        details: Object.assign(this.#previousStates, details)
      });
      if (this.#mode === AnnotationEditorType.HIGHLIGHT && details.hasSelectedEditor === false) {
        this.#dispatchUpdateUI([[AnnotationEditorParamsType.HIGHLIGHT_FREE, true]]);
      }
    }
  }
  #dispatchUpdateUI(details) {
    this._eventBus.dispatch("annotationeditorparamschanged", {
      source: this,
      details
    });
  }
  setEditingState(isEditing) {
    if (isEditing) {
      this.#addFocusManager();
      this.#addCopyPasteListeners();
      this.#dispatchUpdateStates({
        isEditing: this.#mode !== AnnotationEditorType.NONE,
        isEmpty: this.#isEmpty(),
        hasSomethingToUndo: this.#commandManager.hasSomethingToUndo(),
        hasSomethingToRedo: this.#commandManager.hasSomethingToRedo(),
        hasSelectedEditor: false
      });
    } else {
      this.#removeFocusManager();
      this.#removeCopyPasteListeners();
      this.#dispatchUpdateStates({
        isEditing: false
      });
      this.disableUserSelect(false);
    }
  }
  registerEditorTypes(types) {
    if (this.#editorTypes) {
      return;
    }
    this.#editorTypes = types;
    for (const editorType of this.#editorTypes) {
      this.#dispatchUpdateUI(editorType.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return this.#idManager.id;
  }
  get currentLayer() {
    return this.#allLayers.get(this.#currentPageIndex);
  }
  getLayer(pageIndex) {
    return this.#allLayers.get(pageIndex);
  }
  get currentPageIndex() {
    return this.#currentPageIndex;
  }
  addLayer(layer) {
    this.#allLayers.set(layer.pageIndex, layer);
    if (this.#isEnabled) {
      layer.enable();
    } else {
      layer.disable();
    }
  }
  removeLayer(layer) {
    this.#allLayers.delete(layer.pageIndex);
  }
  async updateMode(mode, editId = null, isFromUser = false, isFromKeyboard = false, mustEnterInEditMode = false, editComment = false) {
    if (this.#mode === mode) {
      return;
    }
    if (this.#updateModeCapability) {
      await this.#updateModeCapability.promise;
      if (!this.#updateModeCapability) {
        return;
      }
    }
    this.#updateModeCapability = Promise.withResolvers();
    this.#currentDrawingSession?.commitOrRemove();
    if (this.#mode === AnnotationEditorType.POPUP) {
      this.#commentManager?.hideSidebar();
    }
    this.#commentManager?.destroyPopup();
    this.#mode = mode;
    if (mode === AnnotationEditorType.NONE) {
      this.setEditingState(false);
      this.#disableAll();
      for (const editor of this.#allEditors.values()) {
        editor.hideStandaloneCommentButton();
      }
      this._editorUndoBar?.hide();
      this.toggleComment(null);
      this.#updateModeCapability.resolve();
      return;
    }
    for (const editor of this.#allEditors.values()) {
      editor.addStandaloneCommentButton();
    }
    if (mode === AnnotationEditorType.SIGNATURE) {
      await this.#signatureManager?.loadSignatures();
    }
    if (isFromUser) {
      CurrentPointers.clearPointerType();
    }
    this.setEditingState(true);
    await this.#enableAll();
    this.unselectAll();
    for (const layer of this.#allLayers.values()) {
      layer.updateMode(mode);
    }
    if (mode === AnnotationEditorType.POPUP) {
      this.#allEditableAnnotations ||= await this.#pdfDocument.getAnnotationsByType(new Set(this.#editorTypes.map(editorClass => editorClass._editorType)));
      const elementIds = new Set();
      const allComments = [];
      for (const editor of this.#allEditors.values()) {
        const {
          annotationElementId,
          hasComment,
          deleted
        } = editor;
        if (annotationElementId) {
          elementIds.add(annotationElementId);
        }
        if (hasComment && !deleted) {
          allComments.push(editor.getData());
        }
      }
      for (const annotation of this.#allEditableAnnotations) {
        const {
          id,
          popupRef,
          contentsObj
        } = annotation;
        if (popupRef && contentsObj?.str && !elementIds.has(id) && !this.#deletedAnnotationsElementIds.has(id)) {
          allComments.push(annotation);
        }
      }
      this.#commentManager?.showSidebar(allComments);
    }
    if (!editId) {
      if (isFromKeyboard) {
        this.addNewEditorFromKeyboard();
      }
      this.#updateModeCapability.resolve();
      return;
    }
    for (const editor of this.#allEditors.values()) {
      if (editor.uid === editId) {
        this.setSelected(editor);
        if (editComment) {
          editor.editComment();
        } else if (mustEnterInEditMode) {
          editor.enterInEditMode();
        } else {
          editor.focus();
        }
      } else {
        editor.unselect();
      }
    }
    this.#updateModeCapability.resolve();
  }
  addNewEditorFromKeyboard() {
    if (this.currentLayer.canCreateNewEmptyEditor()) {
      this.currentLayer.addNewEditor();
    }
  }
  updateToolbar(options) {
    if (options.mode === this.#mode) {
      return;
    }
    this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      ...options
    });
  }
  updateParams(type, value) {
    if (!this.#editorTypes) {
      return;
    }
    switch (type) {
      case AnnotationEditorParamsType.CREATE:
        this.currentLayer.addNewEditor(value);
        return;
      case AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL:
        this._eventBus.dispatch("reporttelemetry", {
          source: this,
          details: {
            type: "editing",
            data: {
              type: "highlight",
              action: "toggle_visibility"
            }
          }
        });
        (this.#showAllStates ||= new Map()).set(type, value);
        this.showAllEditors("highlight", value);
        break;
    }
    if (this.hasSelection) {
      for (const editor of this.#selectedEditors) {
        editor.updateParams(type, value);
      }
    } else {
      for (const editorType of this.#editorTypes) {
        editorType.updateDefaultParams(type, value);
      }
    }
  }
  showAllEditors(type, visible, updateButton = false) {
    for (const editor of this.#allEditors.values()) {
      if (editor.editorType === type) {
        editor.show(visible);
      }
    }
    const state = this.#showAllStates?.get(AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL) ?? true;
    if (state !== visible) {
      this.#dispatchUpdateUI([[AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL, visible]]);
    }
  }
  enableWaiting(mustWait = false) {
    if (this.#isWaiting === mustWait) {
      return;
    }
    this.#isWaiting = mustWait;
    for (const layer of this.#allLayers.values()) {
      if (mustWait) {
        layer.disableClick();
      } else {
        layer.enableClick();
      }
      layer.div.classList.toggle("waiting", mustWait);
    }
  }
  async #enableAll() {
    if (!this.#isEnabled) {
      this.#isEnabled = true;
      const promises = [];
      for (const layer of this.#allLayers.values()) {
        promises.push(layer.enable());
      }
      await Promise.all(promises);
      for (const editor of this.#allEditors.values()) {
        editor.enable();
      }
    }
  }
  #disableAll() {
    this.unselectAll();
    if (this.#isEnabled) {
      this.#isEnabled = false;
      for (const layer of this.#allLayers.values()) {
        layer.disable();
      }
      for (const editor of this.#allEditors.values()) {
        editor.disable();
      }
    }
  }
  *getEditors(pageIndex) {
    for (const editor of this.#allEditors.values()) {
      if (editor.pageIndex === pageIndex) {
        yield editor;
      }
    }
  }
  getEditor(id) {
    return this.#allEditors.get(id);
  }
  addEditor(editor) {
    this.#allEditors.set(editor.id, editor);
  }
  removeEditor(editor) {
    if (editor.div.contains(document.activeElement)) {
      if (this.#focusMainContainerTimeoutId) {
        clearTimeout(this.#focusMainContainerTimeoutId);
      }
      this.#focusMainContainerTimeoutId = setTimeout(() => {
        this.focusMainContainer();
        this.#focusMainContainerTimeoutId = null;
      }, 0);
    }
    this.#allEditors.delete(editor.id);
    if (editor.annotationElementId) {
      this.#missingCanvases?.delete(editor.annotationElementId);
    }
    this.unselect(editor);
    if (!editor.annotationElementId || !this.#deletedAnnotationsElementIds.has(editor.annotationElementId)) {
      this.#annotationStorage?.remove(editor.id);
    }
  }
  addDeletedAnnotationElement(editor) {
    this.#deletedAnnotationsElementIds.add(editor.annotationElementId);
    this.addChangedExistingAnnotation(editor);
    editor.deleted = true;
  }
  isDeletedAnnotationElement(annotationElementId) {
    return this.#deletedAnnotationsElementIds.has(annotationElementId);
  }
  removeDeletedAnnotationElement(editor) {
    this.#deletedAnnotationsElementIds.delete(editor.annotationElementId);
    this.removeChangedExistingAnnotation(editor);
    editor.deleted = false;
  }
  #addEditorToLayer(editor) {
    const layer = this.#allLayers.get(editor.pageIndex);
    if (layer) {
      layer.addOrRebuild(editor);
    } else {
      this.addEditor(editor);
      this.addToAnnotationStorage(editor);
    }
  }
  setActiveEditor(editor) {
    if (this.#activeEditor === editor) {
      return;
    }
    this.#activeEditor = editor;
    if (editor) {
      this.#dispatchUpdateUI(editor.propertiesToUpdate);
    }
  }
  get #lastSelectedEditor() {
    let ed = null;
    for (ed of this.#selectedEditors) {}
    return ed;
  }
  updateUI(editor) {
    if (this.#lastSelectedEditor === editor) {
      this.#dispatchUpdateUI(editor.propertiesToUpdate);
    }
  }
  updateUIForDefaultProperties(editorType) {
    this.#dispatchUpdateUI(editorType.defaultPropertiesToUpdate);
  }
  toggleSelected(editor) {
    if (this.#selectedEditors.has(editor)) {
      this.#selectedEditors.delete(editor);
      editor.unselect();
      this.#dispatchUpdateStates({
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    this.#selectedEditors.add(editor);
    editor.select();
    this.#dispatchUpdateUI(editor.propertiesToUpdate);
    this.#dispatchUpdateStates({
      hasSelectedEditor: true
    });
  }
  setSelected(editor) {
    this.updateToolbar({
      mode: editor.mode,
      editId: editor.uid
    });
    this.#currentDrawingSession?.commitOrRemove();
    for (const ed of this.#selectedEditors) {
      if (ed !== editor) {
        ed.unselect();
      }
    }
    this.#commentManager?.destroyPopup();
    this.#selectedEditors.clear();
    this.#selectedEditors.add(editor);
    editor.select();
    this.#dispatchUpdateUI(editor.propertiesToUpdate);
    this.#dispatchUpdateStates({
      hasSelectedEditor: true
    });
  }
  isSelected(editor) {
    return this.#selectedEditors.has(editor);
  }
  get firstSelectedEditor() {
    return this.#selectedEditors.values().next().value;
  }
  unselect(editor) {
    editor.unselect();
    this.#selectedEditors.delete(editor);
    this.#dispatchUpdateStates({
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return this.#selectedEditors.size !== 0;
  }
  get isEnterHandled() {
    return this.#selectedEditors.size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    this.#commandManager.undo();
    this.#dispatchUpdateStates({
      hasSomethingToUndo: this.#commandManager.hasSomethingToUndo(),
      hasSomethingToRedo: true,
      isEmpty: this.#isEmpty()
    });
    this._editorUndoBar?.hide();
  }
  redo() {
    this.#commandManager.redo();
    this.#dispatchUpdateStates({
      hasSomethingToUndo: true,
      hasSomethingToRedo: this.#commandManager.hasSomethingToRedo(),
      isEmpty: this.#isEmpty()
    });
  }
  addCommands(params) {
    this.#commandManager.add(params);
    this.#dispatchUpdateStates({
      hasSomethingToUndo: true,
      hasSomethingToRedo: false,
      isEmpty: this.#isEmpty()
    });
  }
  cleanUndoStack(type) {
    this.#commandManager.cleanType(type);
  }
  #isEmpty() {
    if (this.#allEditors.size === 0) {
      return true;
    }
    if (this.#allEditors.size === 1) {
      for (const editor of this.#allEditors.values()) {
        return editor.isEmpty();
      }
    }
    return false;
  }
  delete() {
    this.commitOrRemove();
    const drawingEditor = this.currentLayer?.endDrawingSession(true);
    if (!this.hasSelection && !drawingEditor) {
      return;
    }
    const editors = drawingEditor ? [drawingEditor] : [...this.#selectedEditors];
    const cmd = () => {
      this._editorUndoBar?.show(undo, editors.length === 1 ? editors[0].editorType : editors.length);
      for (const editor of editors) {
        editor.remove();
      }
    };
    const undo = () => {
      for (const editor of editors) {
        this.#addEditorToLayer(editor);
      }
    };
    this.addCommands({
      cmd,
      undo,
      mustExec: true
    });
  }
  commitOrRemove() {
    this.#activeEditor?.commitOrRemove();
  }
  hasSomethingToControl() {
    return this.#activeEditor || this.hasSelection;
  }
  #selectEditors(editors) {
    for (const editor of this.#selectedEditors) {
      editor.unselect();
    }
    this.#selectedEditors.clear();
    for (const editor of editors) {
      if (editor.isEmpty()) {
        continue;
      }
      this.#selectedEditors.add(editor);
      editor.select();
    }
    this.#dispatchUpdateStates({
      hasSelectedEditor: this.hasSelection
    });
  }
  selectAll() {
    for (const editor of this.#selectedEditors) {
      editor.commit();
    }
    this.#selectEditors(this.#allEditors.values());
  }
  unselectAll() {
    if (this.#activeEditor) {
      this.#activeEditor.commitOrRemove();
      if (this.#mode !== AnnotationEditorType.NONE) {
        return;
      }
    }
    if (this.#currentDrawingSession?.commitOrRemove()) {
      return;
    }
    this.#commentManager?.destroyPopup();
    if (!this.hasSelection) {
      return;
    }
    for (const editor of this.#selectedEditors) {
      editor.unselect();
    }
    this.#selectedEditors.clear();
    this.#dispatchUpdateStates({
      hasSelectedEditor: false
    });
  }
  translateSelectedEditors(x, y, noCommit = false) {
    if (!noCommit) {
      this.commitOrRemove();
    }
    if (!this.hasSelection) {
      return;
    }
    this.#translation[0] += x;
    this.#translation[1] += y;
    const [totalX, totalY] = this.#translation;
    const editors = [...this.#selectedEditors];
    const TIME_TO_WAIT = 1000;
    if (this.#translationTimeoutId) {
      clearTimeout(this.#translationTimeoutId);
    }
    this.#translationTimeoutId = setTimeout(() => {
      this.#translationTimeoutId = null;
      this.#translation[0] = this.#translation[1] = 0;
      this.addCommands({
        cmd: () => {
          for (const editor of editors) {
            if (this.#allEditors.has(editor.id)) {
              editor.translateInPage(totalX, totalY);
              editor.translationDone();
            }
          }
        },
        undo: () => {
          for (const editor of editors) {
            if (this.#allEditors.has(editor.id)) {
              editor.translateInPage(-totalX, -totalY);
              editor.translationDone();
            }
          }
        },
        mustExec: false
      });
    }, TIME_TO_WAIT);
    for (const editor of editors) {
      editor.translateInPage(x, y);
      editor.translationDone();
    }
  }
  setUpDragSession() {
    if (!this.hasSelection) {
      return;
    }
    this.disableUserSelect(true);
    this.#draggingEditors = new Map();
    for (const editor of this.#selectedEditors) {
      this.#draggingEditors.set(editor, {
        savedX: editor.x,
        savedY: editor.y,
        savedPageIndex: editor.pageIndex,
        newX: 0,
        newY: 0,
        newPageIndex: -1
      });
    }
  }
  endDragSession() {
    if (!this.#draggingEditors) {
      return false;
    }
    this.disableUserSelect(false);
    const map = this.#draggingEditors;
    this.#draggingEditors = null;
    let mustBeAddedInUndoStack = false;
    for (const [{
      x,
      y,
      pageIndex
    }, value] of map) {
      value.newX = x;
      value.newY = y;
      value.newPageIndex = pageIndex;
      mustBeAddedInUndoStack ||= x !== value.savedX || y !== value.savedY || pageIndex !== value.savedPageIndex;
    }
    if (!mustBeAddedInUndoStack) {
      return false;
    }
    const move = (editor, x, y, pageIndex) => {
      if (this.#allEditors.has(editor.id)) {
        const parent = this.#allLayers.get(pageIndex);
        if (parent) {
          editor._setParentAndPosition(parent, x, y);
        } else {
          editor.pageIndex = pageIndex;
          editor.x = x;
          editor.y = y;
        }
      }
    };
    this.addCommands({
      cmd: () => {
        for (const [editor, {
          newX,
          newY,
          newPageIndex
        }] of map) {
          move(editor, newX, newY, newPageIndex);
        }
      },
      undo: () => {
        for (const [editor, {
          savedX,
          savedY,
          savedPageIndex
        }] of map) {
          move(editor, savedX, savedY, savedPageIndex);
        }
      },
      mustExec: true
    });
    return true;
  }
  dragSelectedEditors(tx, ty) {
    if (!this.#draggingEditors) {
      return;
    }
    for (const editor of this.#draggingEditors.keys()) {
      editor.drag(tx, ty);
    }
  }
  rebuild(editor) {
    if (editor.parent === null) {
      const parent = this.getLayer(editor.pageIndex);
      if (parent) {
        parent.changeParent(editor);
        parent.addOrRebuild(editor);
      } else {
        this.addEditor(editor);
        this.addToAnnotationStorage(editor);
        editor.rebuild();
      }
    } else {
      editor.parent.addOrRebuild(editor);
    }
  }
  get isEditorHandlingKeyboard() {
    return this.getActive()?.shouldGetKeyboardEvents() || this.#selectedEditors.size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(editor) {
    return this.#activeEditor === editor;
  }
  getActive() {
    return this.#activeEditor;
  }
  getMode() {
    return this.#mode;
  }
  isEditingMode() {
    return this.#mode !== AnnotationEditorType.NONE;
  }
  get imageManager() {
    return shadow(this, "imageManager", new ImageManager());
  }
  getSelectionBoxes(textLayer) {
    if (!textLayer) {
      return null;
    }
    const selection = document.getSelection();
    for (let i = 0, ii = selection.rangeCount; i < ii; i++) {
      if (!textLayer.contains(selection.getRangeAt(i).commonAncestorContainer)) {
        return null;
      }
    }
    const {
      x: layerX,
      y: layerY,
      width: parentWidth,
      height: parentHeight
    } = textLayer.getBoundingClientRect();
    let rotator;
    switch (textLayer.getAttribute("data-main-rotation")) {
      case "90":
        rotator = (x, y, w, h) => ({
          x: (y - layerY) / parentHeight,
          y: 1 - (x + w - layerX) / parentWidth,
          width: h / parentHeight,
          height: w / parentWidth
        });
        break;
      case "180":
        rotator = (x, y, w, h) => ({
          x: 1 - (x + w - layerX) / parentWidth,
          y: 1 - (y + h - layerY) / parentHeight,
          width: w / parentWidth,
          height: h / parentHeight
        });
        break;
      case "270":
        rotator = (x, y, w, h) => ({
          x: 1 - (y + h - layerY) / parentHeight,
          y: (x - layerX) / parentWidth,
          width: h / parentHeight,
          height: w / parentWidth
        });
        break;
      default:
        rotator = (x, y, w, h) => ({
          x: (x - layerX) / parentWidth,
          y: (y - layerY) / parentHeight,
          width: w / parentWidth,
          height: h / parentHeight
        });
        break;
    }
    const boxes = [];
    for (let i = 0, ii = selection.rangeCount; i < ii; i++) {
      const range = selection.getRangeAt(i);
      if (range.collapsed) {
        continue;
      }
      for (const {
        x,
        y,
        width,
        height
      } of range.getClientRects()) {
        if (width === 0 || height === 0) {
          continue;
        }
        boxes.push(rotator(x, y, width, height));
      }
    }
    return boxes.length === 0 ? null : boxes;
  }
  addChangedExistingAnnotation({
    annotationElementId,
    id
  }) {
    (this.#changedExistingAnnotations ||= new Map()).set(annotationElementId, id);
  }
  removeChangedExistingAnnotation({
    annotationElementId
  }) {
    this.#changedExistingAnnotations?.delete(annotationElementId);
  }
  renderAnnotationElement(annotation) {
    const editorId = this.#changedExistingAnnotations?.get(annotation.data.id);
    if (!editorId) {
      return;
    }
    const editor = this.#annotationStorage.getRawValue(editorId);
    if (!editor) {
      return;
    }
    if (this.#mode === AnnotationEditorType.NONE && !editor.hasBeenModified) {
      return;
    }
    editor.renderAnnotationElement(annotation);
  }
  setMissingCanvas(annotationId, annotationElementId, canvas) {
    const editor = this.#missingCanvases?.get(annotationId);
    if (!editor) {
      return;
    }
    editor.setCanvas(annotationElementId, canvas);
    this.#missingCanvases.delete(annotationId);
  }
  addMissingCanvas(annotationId, editor) {
    (this.#missingCanvases ||= new Map()).set(annotationId, editor);
  }
}

;// ./src/display/editor/alt_text.js

class AltText {
  #altText = null;
  #altTextDecorative = false;
  #altTextButton = null;
  #altTextButtonLabel = null;
  #altTextTooltip = null;
  #altTextTooltipTimeout = null;
  #altTextWasFromKeyBoard = false;
  #badge = null;
  #editor = null;
  #guessedText = null;
  #textWithDisclaimer = null;
  #useNewAltTextFlow = false;
  static #l10nNewButton = null;
  static _l10n = null;
  constructor(editor) {
    this.#editor = editor;
    this.#useNewAltTextFlow = editor._uiManager.useNewAltTextFlow;
    AltText.#l10nNewButton ||= Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    });
  }
  static initialize(l10n) {
    AltText._l10n ??= l10n;
  }
  async render() {
    const altText = this.#altTextButton = document.createElement("button");
    altText.className = "altText";
    altText.tabIndex = "0";
    const label = this.#altTextButtonLabel = document.createElement("span");
    altText.append(label);
    if (this.#useNewAltTextFlow) {
      altText.classList.add("new");
      altText.setAttribute("data-l10n-id", AltText.#l10nNewButton.missing);
      label.setAttribute("data-l10n-id", AltText.#l10nNewButton["missing-label"]);
    } else {
      altText.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button");
      label.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label");
    }
    const signal = this.#editor._uiManager._signal;
    altText.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    altText.addEventListener("pointerdown", event => event.stopPropagation(), {
      signal
    });
    const onClick = event => {
      event.preventDefault();
      this.#editor._uiManager.editAltText(this.#editor);
      if (this.#useNewAltTextFlow) {
        this.#editor._reportTelemetry({
          action: "pdfjs.image.alt_text.image_status_label_clicked",
          data: {
            label: this.#label
          }
        });
      }
    };
    altText.addEventListener("click", onClick, {
      capture: true,
      signal
    });
    altText.addEventListener("keydown", event => {
      if (event.target === altText && event.key === "Enter") {
        this.#altTextWasFromKeyBoard = true;
        onClick(event);
      }
    }, {
      signal
    });
    await this.#setState();
    return altText;
  }
  get #label() {
    return this.#altText && "added" || this.#altText === null && this.guessedText && "review" || "missing";
  }
  finish() {
    if (!this.#altTextButton) {
      return;
    }
    this.#altTextButton.focus({
      focusVisible: this.#altTextWasFromKeyBoard
    });
    this.#altTextWasFromKeyBoard = false;
  }
  isEmpty() {
    if (this.#useNewAltTextFlow) {
      return this.#altText === null;
    }
    return !this.#altText && !this.#altTextDecorative;
  }
  hasData() {
    if (this.#useNewAltTextFlow) {
      return this.#altText !== null || !!this.#guessedText;
    }
    return this.isEmpty();
  }
  get guessedText() {
    return this.#guessedText;
  }
  async setGuessedText(guessedText) {
    if (this.#altText !== null) {
      return;
    }
    this.#guessedText = guessedText;
    this.#textWithDisclaimer = await AltText._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: guessedText
    });
    this.#setState();
  }
  toggleAltTextBadge(visibility = false) {
    if (!this.#useNewAltTextFlow || this.#altText) {
      this.#badge?.remove();
      this.#badge = null;
      return;
    }
    if (!this.#badge) {
      const badge = this.#badge = document.createElement("div");
      badge.className = "noAltTextBadge";
      this.#editor.div.append(badge);
    }
    this.#badge.classList.toggle("hidden", !visibility);
  }
  serialize(isForCopying) {
    let altText = this.#altText;
    if (!isForCopying && this.#guessedText === altText) {
      altText = this.#textWithDisclaimer;
    }
    return {
      altText,
      decorative: this.#altTextDecorative,
      guessedText: this.#guessedText,
      textWithDisclaimer: this.#textWithDisclaimer
    };
  }
  get data() {
    return {
      altText: this.#altText,
      decorative: this.#altTextDecorative
    };
  }
  set data({
    altText,
    decorative,
    guessedText,
    textWithDisclaimer,
    cancel = false
  }) {
    if (guessedText) {
      this.#guessedText = guessedText;
      this.#textWithDisclaimer = textWithDisclaimer;
    }
    if (this.#altText === altText && this.#altTextDecorative === decorative) {
      return;
    }
    if (!cancel) {
      this.#altText = altText;
      this.#altTextDecorative = decorative;
    }
    this.#setState();
  }
  toggle(enabled = false) {
    if (!this.#altTextButton) {
      return;
    }
    if (!enabled && this.#altTextTooltipTimeout) {
      clearTimeout(this.#altTextTooltipTimeout);
      this.#altTextTooltipTimeout = null;
    }
    this.#altTextButton.disabled = !enabled;
  }
  shown() {
    this.#editor._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: this.#label
      }
    });
  }
  destroy() {
    this.#altTextButton?.remove();
    this.#altTextButton = null;
    this.#altTextButtonLabel = null;
    this.#altTextTooltip = null;
    this.#badge?.remove();
    this.#badge = null;
  }
  async #setState() {
    const button = this.#altTextButton;
    if (!button) {
      return;
    }
    if (this.#useNewAltTextFlow) {
      button.classList.toggle("done", !!this.#altText);
      button.setAttribute("data-l10n-id", AltText.#l10nNewButton[this.#label]);
      this.#altTextButtonLabel?.setAttribute("data-l10n-id", AltText.#l10nNewButton[`${this.#label}-label`]);
      if (!this.#altText) {
        this.#altTextTooltip?.remove();
        return;
      }
    } else {
      if (!this.#altText && !this.#altTextDecorative) {
        button.classList.remove("done");
        this.#altTextTooltip?.remove();
        return;
      }
      button.classList.add("done");
      button.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
    }
    let tooltip = this.#altTextTooltip;
    if (!tooltip) {
      this.#altTextTooltip = tooltip = document.createElement("span");
      tooltip.className = "tooltip";
      tooltip.setAttribute("role", "tooltip");
      tooltip.id = `alt-text-tooltip-${this.#editor.id}`;
      const DELAY_TO_SHOW_TOOLTIP = 100;
      const signal = this.#editor._uiManager._signal;
      signal.addEventListener("abort", () => {
        clearTimeout(this.#altTextTooltipTimeout);
        this.#altTextTooltipTimeout = null;
      }, {
        once: true
      });
      button.addEventListener("mouseenter", () => {
        this.#altTextTooltipTimeout = setTimeout(() => {
          this.#altTextTooltipTimeout = null;
          this.#altTextTooltip.classList.add("show");
          this.#editor._reportTelemetry({
            action: "alt_text_tooltip"
          });
        }, DELAY_TO_SHOW_TOOLTIP);
      }, {
        signal
      });
      button.addEventListener("mouseleave", () => {
        if (this.#altTextTooltipTimeout) {
          clearTimeout(this.#altTextTooltipTimeout);
          this.#altTextTooltipTimeout = null;
        }
        this.#altTextTooltip?.classList.remove("show");
      }, {
        signal
      });
    }
    if (this.#altTextDecorative) {
      tooltip.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip");
    } else {
      tooltip.removeAttribute("data-l10n-id");
      tooltip.textContent = this.#altText;
    }
    if (!tooltip.parentNode) {
      button.append(tooltip);
    }
    const element = this.#editor.getElementForAltText();
    element?.setAttribute("aria-describedby", tooltip.id);
  }
}

;// ./src/display/editor/comment.js

class Comment {
  #commentStandaloneButton = null;
  #commentToolbarButton = null;
  #commentWasFromKeyBoard = false;
  #editor = null;
  #initialText = null;
  #richText = null;
  #text = null;
  #date = null;
  #deleted = false;
  #popupPosition = null;
  constructor(editor) {
    this.#editor = editor;
  }
  renderForToolbar() {
    const button = this.#commentToolbarButton = document.createElement("button");
    button.className = "comment";
    return this.#render(button, false);
  }
  renderForStandalone() {
    const button = this.#commentStandaloneButton = document.createElement("button");
    button.className = "annotationCommentButton";
    const position = this.#editor.commentButtonPosition;
    if (position) {
      const {
        style
      } = button;
      style.insetInlineEnd = `calc(${100 * (this.#editor._uiManager.direction === "ltr" ? 1 - position[0] : position[0])}% - var(--comment-button-dim))`;
      style.top = `calc(${100 * position[1]}% - var(--comment-button-dim))`;
      const color = this.#editor.commentButtonColor;
      if (color) {
        style.backgroundColor = color;
      }
    }
    return this.#render(button, true);
  }
  focusButton() {
    setTimeout(() => {
      (this.#commentStandaloneButton ?? this.#commentToolbarButton)?.focus();
    }, 0);
  }
  onUpdatedColor() {
    if (!this.#commentStandaloneButton) {
      return;
    }
    const color = this.#editor.commentButtonColor;
    if (color) {
      this.#commentStandaloneButton.style.backgroundColor = color;
    }
    this.#editor._uiManager.updatePopupColor(this.#editor);
  }
  get commentButtonWidth() {
    return (this.#commentStandaloneButton?.getBoundingClientRect().width ?? 0) / this.#editor.parent.boundingClientRect.width;
  }
  get commentPopupPositionInLayer() {
    if (this.#popupPosition) {
      return this.#popupPosition;
    }
    if (!this.#commentStandaloneButton) {
      return null;
    }
    const {
      x,
      y,
      height
    } = this.#commentStandaloneButton.getBoundingClientRect();
    const {
      x: parentX,
      y: parentY,
      width: parentWidth,
      height: parentHeight
    } = this.#editor.parent.boundingClientRect;
    return [(x - parentX) / parentWidth, (y + height - parentY) / parentHeight];
  }
  set commentPopupPositionInLayer(pos) {
    this.#popupPosition = pos;
  }
  hasDefaultPopupPosition() {
    return this.#popupPosition === null;
  }
  removeStandaloneCommentButton() {
    this.#commentStandaloneButton?.remove();
    this.#commentStandaloneButton = null;
  }
  removeToolbarCommentButton() {
    this.#commentToolbarButton?.remove();
    this.#commentToolbarButton = null;
  }
  setCommentButtonStates({
    selected,
    hasPopup
  }) {
    if (!this.#commentStandaloneButton) {
      return;
    }
    this.#commentStandaloneButton.classList.toggle("selected", selected);
    this.#commentStandaloneButton.ariaExpanded = hasPopup;
  }
  #render(comment, isStandalone) {
    if (!this.#editor._uiManager.hasCommentManager()) {
      return null;
    }
    comment.tabIndex = "0";
    comment.ariaHasPopup = "dialog";
    if (isStandalone) {
      comment.ariaControls = "commentPopup";
      comment.setAttribute("data-l10n-id", "pdfjs-show-comment-button");
    } else {
      comment.ariaControlsElements = [this.#editor._uiManager.getCommentDialogElement()];
      comment.setAttribute("data-l10n-id", "pdfjs-editor-add-comment-button");
    }
    const signal = this.#editor._uiManager._signal;
    if (!(signal instanceof AbortSignal) || signal.aborted) {
      return comment;
    }
    comment.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    if (isStandalone) {
      comment.addEventListener("focusin", e => {
        this.#editor._focusEventsAllowed = false;
        stopEvent(e);
      }, {
        capture: true,
        signal
      });
      comment.addEventListener("focusout", e => {
        this.#editor._focusEventsAllowed = true;
        stopEvent(e);
      }, {
        capture: true,
        signal
      });
    }
    comment.addEventListener("pointerdown", event => event.stopPropagation(), {
      signal
    });
    const onClick = event => {
      event.preventDefault();
      if (comment === this.#commentToolbarButton) {
        this.edit();
      } else {
        this.#editor.toggleComment(true);
      }
    };
    comment.addEventListener("click", onClick, {
      capture: true,
      signal
    });
    comment.addEventListener("keydown", event => {
      if (event.target === comment && event.key === "Enter") {
        this.#commentWasFromKeyBoard = true;
        onClick(event);
      }
    }, {
      signal
    });
    comment.addEventListener("pointerenter", () => {
      this.#editor.toggleComment(false, true);
    }, {
      signal
    });
    comment.addEventListener("pointerleave", () => {
      this.#editor.toggleComment(false, false);
    }, {
      signal
    });
    return comment;
  }
  edit(options) {
    const position = this.commentPopupPositionInLayer;
    let posX, posY;
    if (position) {
      [posX, posY] = position;
    } else {
      [posX, posY] = this.#editor.commentButtonPosition;
      const {
        width,
        height,
        x,
        y
      } = this.#editor;
      posX = x + posX * width;
      posY = y + posY * height;
    }
    const parentDimensions = this.#editor.parent.boundingClientRect;
    const {
      x: parentX,
      y: parentY,
      width: parentWidth,
      height: parentHeight
    } = parentDimensions;
    this.#editor._uiManager.editComment(this.#editor, parentX + posX * parentWidth, parentY + posY * parentHeight, {
      ...options,
      parentDimensions
    });
  }
  finish() {
    if (!this.#commentToolbarButton) {
      return;
    }
    this.#commentToolbarButton.focus({
      focusVisible: this.#commentWasFromKeyBoard
    });
    this.#commentWasFromKeyBoard = false;
  }
  isDeleted() {
    return this.#deleted || this.#text === "";
  }
  isEmpty() {
    return this.#text === null;
  }
  hasBeenEdited() {
    return this.isDeleted() || this.#text !== this.#initialText;
  }
  serialize() {
    return this.data;
  }
  get data() {
    return {
      text: this.#text,
      richText: this.#richText,
      date: this.#date,
      deleted: this.isDeleted()
    };
  }
  set data(text) {
    if (text !== this.#text) {
      this.#richText = null;
    }
    if (text === null) {
      this.#text = "";
      this.#deleted = true;
      return;
    }
    this.#text = text;
    this.#date = new Date();
    this.#deleted = false;
  }
  restoreData({
    text,
    richText,
    date
  }) {
    this.#text = text;
    this.#richText = richText;
    this.#date = date;
    this.#deleted = false;
  }
  setInitialText(text, richText = null) {
    this.#initialText = text;
    this.data = text;
    this.#date = null;
    this.#richText = richText;
  }
  shown() {}
  destroy() {
    this.#commentToolbarButton?.remove();
    this.#commentToolbarButton = null;
    this.#commentStandaloneButton?.remove();
    this.#commentStandaloneButton = null;
    this.#text = "";
    this.#richText = null;
    this.#date = null;
    this.#editor = null;
    this.#commentWasFromKeyBoard = false;
    this.#deleted = false;
  }
}

;// ./src/display/touch_manager.js

class TouchManager {
  #container;
  #isPinching = false;
  #isPinchingStopped = null;
  #isPinchingDisabled;
  #onPinchStart;
  #onPinching;
  #onPinchEnd;
  #pointerDownAC = null;
  #signal;
  #touchInfo = null;
  #touchManagerAC;
  #touchMoveAC = null;
  constructor({
    container,
    isPinchingDisabled = null,
    isPinchingStopped = null,
    onPinchStart = null,
    onPinching = null,
    onPinchEnd = null,
    signal
  }) {
    this.#container = container;
    this.#isPinchingStopped = isPinchingStopped;
    this.#isPinchingDisabled = isPinchingDisabled;
    this.#onPinchStart = onPinchStart;
    this.#onPinching = onPinching;
    this.#onPinchEnd = onPinchEnd;
    this.#touchManagerAC = new AbortController();
    this.#signal = AbortSignal.any([signal, this.#touchManagerAC.signal]);
    container.addEventListener("touchstart", this.#onTouchStart.bind(this), {
      passive: false,
      signal: this.#signal
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / OutputScale.pixelRatio;
  }
  #onTouchStart(evt) {
    if (this.#isPinchingDisabled?.()) {
      return;
    }
    if (evt.touches.length === 1) {
      if (this.#pointerDownAC) {
        return;
      }
      const pointerDownAC = this.#pointerDownAC = new AbortController();
      const signal = AbortSignal.any([this.#signal, pointerDownAC.signal]);
      const container = this.#container;
      const opts = {
        capture: true,
        signal,
        passive: false
      };
      const cancelPointerDown = e => {
        if (e.pointerType === "touch") {
          this.#pointerDownAC?.abort();
          this.#pointerDownAC = null;
        }
      };
      container.addEventListener("pointerdown", e => {
        if (e.pointerType === "touch") {
          stopEvent(e);
          cancelPointerDown(e);
        }
      }, opts);
      container.addEventListener("pointerup", cancelPointerDown, opts);
      container.addEventListener("pointercancel", cancelPointerDown, opts);
      return;
    }
    if (!this.#touchMoveAC) {
      this.#touchMoveAC = new AbortController();
      const signal = AbortSignal.any([this.#signal, this.#touchMoveAC.signal]);
      const container = this.#container;
      const opt = {
        signal,
        capture: false,
        passive: false
      };
      container.addEventListener("touchmove", this.#onTouchMove.bind(this), opt);
      const onTouchEnd = this.#onTouchEnd.bind(this);
      container.addEventListener("touchend", onTouchEnd, opt);
      container.addEventListener("touchcancel", onTouchEnd, opt);
      opt.capture = true;
      container.addEventListener("pointerdown", stopEvent, opt);
      container.addEventListener("pointermove", stopEvent, opt);
      container.addEventListener("pointercancel", stopEvent, opt);
      container.addEventListener("pointerup", stopEvent, opt);
      this.#onPinchStart?.();
    }
    stopEvent(evt);
    if (evt.touches.length !== 2 || this.#isPinchingStopped?.()) {
      this.#touchInfo = null;
      return;
    }
    let [touch0, touch1] = evt.touches;
    if (touch0.identifier > touch1.identifier) {
      [touch0, touch1] = [touch1, touch0];
    }
    this.#touchInfo = {
      touch0X: touch0.screenX,
      touch0Y: touch0.screenY,
      touch1X: touch1.screenX,
      touch1Y: touch1.screenY
    };
  }
  #onTouchMove(evt) {
    if (!this.#touchInfo || evt.touches.length !== 2) {
      return;
    }
    stopEvent(evt);
    let [touch0, touch1] = evt.touches;
    if (touch0.identifier > touch1.identifier) {
      [touch0, touch1] = [touch1, touch0];
    }
    const {
      screenX: screen0X,
      screenY: screen0Y
    } = touch0;
    const {
      screenX: screen1X,
      screenY: screen1Y
    } = touch1;
    const touchInfo = this.#touchInfo;
    const {
      touch0X: pTouch0X,
      touch0Y: pTouch0Y,
      touch1X: pTouch1X,
      touch1Y: pTouch1Y
    } = touchInfo;
    const prevGapX = pTouch1X - pTouch0X;
    const prevGapY = pTouch1Y - pTouch0Y;
    const currGapX = screen1X - screen0X;
    const currGapY = screen1Y - screen0Y;
    const distance = Math.hypot(currGapX, currGapY) || 1;
    const pDistance = Math.hypot(prevGapX, prevGapY) || 1;
    if (!this.#isPinching && Math.abs(pDistance - distance) <= TouchManager.MIN_TOUCH_DISTANCE_TO_PINCH) {
      return;
    }
    touchInfo.touch0X = screen0X;
    touchInfo.touch0Y = screen0Y;
    touchInfo.touch1X = screen1X;
    touchInfo.touch1Y = screen1Y;
    if (!this.#isPinching) {
      this.#isPinching = true;
      return;
    }
    const origin = [(screen0X + screen1X) / 2, (screen0Y + screen1Y) / 2];
    this.#onPinching?.(origin, pDistance, distance);
  }
  #onTouchEnd(evt) {
    if (evt.touches.length >= 2) {
      return;
    }
    if (this.#touchMoveAC) {
      this.#touchMoveAC.abort();
      this.#touchMoveAC = null;
      this.#onPinchEnd?.();
    }
    if (!this.#touchInfo) {
      return;
    }
    stopEvent(evt);
    this.#touchInfo = null;
    this.#isPinching = false;
  }
  destroy() {
    this.#touchManagerAC?.abort();
    this.#touchManagerAC = null;
    this.#pointerDownAC?.abort();
    this.#pointerDownAC = null;
  }
}

;// ./src/display/editor/editor.js








class AnnotationEditor {
  #accessibilityData = null;
  #allResizerDivs = null;
  #altText = null;
  #comment = null;
  #commentStandaloneButton = null;
  #disabled = false;
  #dragPointerId = null;
  #dragPointerType = "";
  #resizersDiv = null;
  #lastPointerCoords = null;
  #savedDimensions = null;
  #fakeAnnotation = null;
  #focusAC = null;
  #focusedResizerName = "";
  #hasBeenClicked = false;
  #initialRect = null;
  #isEditing = false;
  #isInEditMode = false;
  #isResizerEnabledForKeyboard = false;
  #moveInDOMTimeout = null;
  #prevDragX = 0;
  #prevDragY = 0;
  #telemetryTimeouts = null;
  #touchManager = null;
  isSelected = false;
  _isCopy = false;
  _editToolbar = null;
  _initialOptions = Object.create(null);
  _initialData = null;
  _isVisible = true;
  _uiManager = null;
  _focusEventsAllowed = true;
  static _l10n = null;
  static _l10nAlert = null;
  static _l10nResizer = null;
  #isDraggable = false;
  #zIndex = AnnotationEditor._zIndex++;
  static _borderLineWidth = -1;
  static _colorManager = new ColorManager();
  static _zIndex = 1;
  static _telemetryTimeout = 1000;
  static get _resizerKeyboardManager() {
    const resize = AnnotationEditor.prototype._resizeWithKeyboard;
    const small = AnnotationEditorUIManager.TRANSLATE_SMALL;
    const big = AnnotationEditorUIManager.TRANSLATE_BIG;
    return shadow(this, "_resizerKeyboardManager", new KeyboardManager([[["ArrowLeft"], resize, {
      args: [-small, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], resize, {
      args: [-big, 0]
    }], [["ArrowRight"], resize, {
      args: [small, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], resize, {
      args: [big, 0]
    }], [["ArrowUp"], resize, {
      args: [0, -small]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], resize, {
      args: [0, -big]
    }], [["ArrowDown"], resize, {
      args: [0, small]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], resize, {
      args: [0, big]
    }], [["Escape"], AnnotationEditor.prototype._stopResizingWithKeyboard]]));
  }
  constructor(parameters) {
    this.parent = parameters.parent;
    this.id = parameters.id;
    this.width = this.height = null;
    this.pageIndex = parameters.parent.pageIndex;
    this.name = parameters.name;
    this.div = null;
    this._uiManager = parameters.uiManager;
    this.annotationElementId = null;
    this._willKeepAspectRatio = false;
    this._initialOptions.isCentered = parameters.isCentered;
    this._structTreeParentId = null;
    this.annotationElementId = parameters.annotationElementId || null;
    this.creationDate = parameters.creationDate || new Date();
    this.modificationDate = parameters.modificationDate || null;
    this.canAddComment = true;
    const {
      rotation,
      rawDims: {
        pageWidth,
        pageHeight,
        pageX,
        pageY
      }
    } = this.parent.viewport;
    this.rotation = rotation;
    this.pageRotation = (360 + rotation - this._uiManager.viewParameters.rotation) % 360;
    this.pageDimensions = [pageWidth, pageHeight];
    this.pageTranslation = [pageX, pageY];
    const [width, height] = this.parentDimensions;
    this.x = parameters.x / width;
    this.y = parameters.y / height;
    this.isAttachedToDOM = false;
    this.deleted = false;
  }
  updatePageIndex(newPageIndex) {
    this.pageIndex = newPageIndex;
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  get mode() {
    return Object.getPrototypeOf(this).constructor._editorType;
  }
  static get isDrawer() {
    return false;
  }
  static get _defaultLineColor() {
    return shadow(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(editor) {
    const fakeEditor = new FakeEditor({
      id: editor._uiManager.getId(),
      parent: editor.parent,
      uiManager: editor._uiManager
    });
    fakeEditor.annotationElementId = editor.annotationElementId;
    fakeEditor.deleted = true;
    fakeEditor._uiManager.addToAnnotationStorage(fakeEditor);
  }
  static initialize(l10n, _uiManager) {
    AnnotationEditor._l10n ??= l10n;
    AnnotationEditor._l10nAlert ??= Object.freeze({
      highlight: "pdfjs-editor-highlight-added-alert",
      freetext: "pdfjs-editor-freetext-added-alert",
      ink: "pdfjs-editor-ink-added-alert",
      stamp: "pdfjs-editor-stamp-added-alert",
      signature: "pdfjs-editor-signature-added-alert"
    });
    AnnotationEditor._l10nResizer ??= Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    });
    if (AnnotationEditor._borderLineWidth !== -1) {
      return;
    }
    const style = getComputedStyle(document.documentElement);
    AnnotationEditor._borderLineWidth = parseFloat(style.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(_type, _value) {}
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(mime) {
    return false;
  }
  static paste(item, parent) {
    unreachable("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return this.#isDraggable;
  }
  set _isDraggable(value) {
    this.#isDraggable = value;
    this.div?.classList.toggle("draggable", value);
  }
  get uid() {
    return this.annotationElementId || this.id;
  }
  get isEnterHandled() {
    return true;
  }
  center() {
    const [pageWidth, pageHeight] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * pageHeight / (pageWidth * 2);
        this.y += this.width * pageWidth / (pageHeight * 2);
        break;
      case 180:
        this.x += this.width / 2;
        this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * pageHeight / (pageWidth * 2);
        this.y -= this.width * pageWidth / (pageHeight * 2);
        break;
      default:
        this.x -= this.width / 2;
        this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(params) {
    this._uiManager.addCommands(params);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = this.#zIndex;
  }
  setParent(parent) {
    if (parent !== null) {
      this.pageIndex = parent.pageIndex;
      this.pageDimensions = parent.pageDimensions;
    } else {
      this.#stopResizing();
      this.#fakeAnnotation?.remove();
      this.#fakeAnnotation = null;
    }
    this.parent = parent;
  }
  focusin(event) {
    if (!this._focusEventsAllowed) {
      return;
    }
    if (!this.#hasBeenClicked) {
      this.parent.setSelected(this);
    } else {
      this.#hasBeenClicked = false;
    }
  }
  focusout(event) {
    if (!this._focusEventsAllowed) {
      return;
    }
    if (!this.isAttachedToDOM) {
      return;
    }
    const target = event.relatedTarget;
    if (target?.closest(`#${this.id}`)) {
      return;
    }
    event.preventDefault();
    if (!this.parent?.isMultipleSelection) {
      this.commitOrRemove();
    }
  }
  commitOrRemove() {
    if (this.isEmpty()) {
      this.remove();
    } else {
      this.commit();
    }
  }
  commit() {
    if (!this.isInEditMode()) {
      return;
    }
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(x, y, tx, ty) {
    const [width, height] = this.parentDimensions;
    [tx, ty] = this.screenToPageTranslation(tx, ty);
    this.x = (x + tx) / width;
    this.y = (y + ty) / height;
    this.fixAndSetPosition();
  }
  _moveAfterPaste(baseX, baseY) {
    if (this.isClone) {
      delete this.isClone;
      return;
    }
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.setAt(baseX * parentWidth, baseY * parentHeight, this.width * parentWidth, this.height * parentHeight);
    this._onTranslated();
  }
  #translate([width, height], x, y) {
    [x, y] = this.screenToPageTranslation(x, y);
    this.x += x / width;
    this.y += y / height;
    this._onTranslating(this.x, this.y);
    this.fixAndSetPosition();
  }
  translate(x, y) {
    this.#translate(this.parentDimensions, x, y);
  }
  translateInPage(x, y) {
    this.#initialRect ||= [this.x, this.y, this.width, this.height];
    this.#translate(this.pageDimensions, x, y);
    this.div.scrollIntoView({
      block: "nearest"
    });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(tx, ty) {
    this.#initialRect ||= [this.x, this.y, this.width, this.height];
    const {
      div,
      parentDimensions: [parentWidth, parentHeight]
    } = this;
    this.x += tx / parentWidth;
    this.y += ty / parentHeight;
    if (this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x,
        y
      } = this.div.getBoundingClientRect();
      if (this.parent.findNewParent(this, x, y)) {
        this.x -= Math.floor(this.x);
        this.y -= Math.floor(this.y);
      }
    }
    let {
      x,
      y
    } = this;
    const [bx, by] = this.getBaseTranslation();
    x += bx;
    y += by;
    const {
      style
    } = div;
    style.left = `${(100 * x).toFixed(2)}%`;
    style.top = `${(100 * y).toFixed(2)}%`;
    this._onTranslating(x, y);
    div.scrollIntoView({
      block: "nearest"
    });
  }
  _onTranslating(x, y) {}
  _onTranslated(x, y) {}
  get _hasBeenMoved() {
    return !!this.#initialRect && (this.#initialRect[0] !== this.x || this.#initialRect[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!this.#initialRect && (this.#initialRect[2] !== this.width || this.#initialRect[3] !== this.height);
  }
  getBaseTranslation() {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const {
      _borderLineWidth
    } = AnnotationEditor;
    const x = _borderLineWidth / parentWidth;
    const y = _borderLineWidth / parentHeight;
    switch (this.rotation) {
      case 90:
        return [-x, y];
      case 180:
        return [x, y];
      case 270:
        return [x, -y];
      default:
        return [-x, -y];
    }
  }
  get _mustFixPosition() {
    return true;
  }
  fixAndSetPosition(rotation = this.rotation) {
    const {
      div: {
        style
      },
      pageDimensions: [pageWidth, pageHeight]
    } = this;
    let {
      x,
      y,
      width,
      height
    } = this;
    width *= pageWidth;
    height *= pageHeight;
    x *= pageWidth;
    y *= pageHeight;
    if (this._mustFixPosition) {
      switch (rotation) {
        case 0:
          x = MathClamp(x, 0, pageWidth - width);
          y = MathClamp(y, 0, pageHeight - height);
          break;
        case 90:
          x = MathClamp(x, 0, pageWidth - height);
          y = MathClamp(y, width, pageHeight);
          break;
        case 180:
          x = MathClamp(x, width, pageWidth);
          y = MathClamp(y, height, pageHeight);
          break;
        case 270:
          x = MathClamp(x, height, pageWidth);
          y = MathClamp(y, 0, pageHeight - width);
          break;
      }
    }
    this.x = x /= pageWidth;
    this.y = y /= pageHeight;
    const [bx, by] = this.getBaseTranslation();
    x += bx;
    y += by;
    style.left = `${(100 * x).toFixed(2)}%`;
    style.top = `${(100 * y).toFixed(2)}%`;
    this.moveInDOM();
  }
  static #rotatePoint(x, y, angle) {
    switch (angle) {
      case 90:
        return [y, -x];
      case 180:
        return [-x, -y];
      case 270:
        return [-y, x];
      default:
        return [x, y];
    }
  }
  screenToPageTranslation(x, y) {
    return AnnotationEditor.#rotatePoint(x, y, this.parentRotation);
  }
  pageTranslationToScreen(x, y) {
    return AnnotationEditor.#rotatePoint(x, y, 360 - this.parentRotation);
  }
  #getRotationMatrix(rotation) {
    switch (rotation) {
      case 90:
        {
          const [pageWidth, pageHeight] = this.pageDimensions;
          return [0, -pageWidth / pageHeight, pageHeight / pageWidth, 0];
        }
      case 180:
        return [-1, 0, 0, -1];
      case 270:
        {
          const [pageWidth, pageHeight] = this.pageDimensions;
          return [0, pageWidth / pageHeight, -pageHeight / pageWidth, 0];
        }
      default:
        return [1, 0, 0, 1];
    }
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale,
      pageDimensions: [pageWidth, pageHeight]
    } = this;
    return [pageWidth * parentScale, pageHeight * parentScale];
  }
  setDims() {
    const {
      div: {
        style
      },
      width,
      height
    } = this;
    style.width = `${(100 * width).toFixed(2)}%`;
    style.height = `${(100 * height).toFixed(2)}%`;
  }
  getInitialTranslation() {
    return [0, 0];
  }
  #createResizers() {
    if (this.#resizersDiv) {
      return;
    }
    this.#resizersDiv = document.createElement("div");
    this.#resizersDiv.classList.add("resizers");
    const classes = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"];
    const signal = this._uiManager._signal;
    for (const name of classes) {
      const div = document.createElement("div");
      this.#resizersDiv.append(div);
      div.classList.add("resizer", name);
      div.setAttribute("data-resizer-name", name);
      div.addEventListener("pointerdown", this.#resizerPointerdown.bind(this, name), {
        signal
      });
      div.addEventListener("contextmenu", noContextMenu, {
        signal
      });
      div.tabIndex = -1;
    }
    this.div.prepend(this.#resizersDiv);
  }
  #resizerPointerdown(name, event) {
    event.preventDefault();
    const {
      isMac
    } = FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      return;
    }
    this.#altText?.toggle(false);
    const savedDraggable = this._isDraggable;
    this._isDraggable = false;
    this.#lastPointerCoords = [event.screenX, event.screenY];
    const ac = new AbortController();
    const signal = this._uiManager.combinedSignal(ac);
    this.parent.togglePointerEvents(false);
    window.addEventListener("pointermove", this.#resizerPointermove.bind(this, name), {
      passive: true,
      capture: true,
      signal
    });
    window.addEventListener("touchmove", stopEvent, {
      passive: false,
      signal
    });
    window.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    this.#savedDimensions = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    };
    const savedParentCursor = this.parent.div.style.cursor;
    const savedCursor = this.div.style.cursor;
    this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(event.target).cursor;
    const pointerUpCallback = () => {
      ac.abort();
      this.parent.togglePointerEvents(true);
      this.#altText?.toggle(true);
      this._isDraggable = savedDraggable;
      this.parent.div.style.cursor = savedParentCursor;
      this.div.style.cursor = savedCursor;
      this.#addResizeToUndoStack();
    };
    window.addEventListener("pointerup", pointerUpCallback, {
      signal
    });
    window.addEventListener("blur", pointerUpCallback, {
      signal
    });
  }
  #resize(x, y, width, height) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.setDims();
    this.fixAndSetPosition();
    this._onResized();
  }
  _onResized() {}
  #addResizeToUndoStack() {
    if (!this.#savedDimensions) {
      return;
    }
    const {
      savedX,
      savedY,
      savedWidth,
      savedHeight
    } = this.#savedDimensions;
    this.#savedDimensions = null;
    const newX = this.x;
    const newY = this.y;
    const newWidth = this.width;
    const newHeight = this.height;
    if (newX === savedX && newY === savedY && newWidth === savedWidth && newHeight === savedHeight) {
      return;
    }
    this.addCommands({
      cmd: this.#resize.bind(this, newX, newY, newWidth, newHeight),
      undo: this.#resize.bind(this, savedX, savedY, savedWidth, savedHeight),
      mustExec: true
    });
  }
  static _round(x) {
    return Math.round(x * 10000) / 10000;
  }
  #resizerPointermove(name, event) {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const savedX = this.x;
    const savedY = this.y;
    const savedWidth = this.width;
    const savedHeight = this.height;
    const minWidth = AnnotationEditor.MIN_SIZE / parentWidth;
    const minHeight = AnnotationEditor.MIN_SIZE / parentHeight;
    const rotationMatrix = this.#getRotationMatrix(this.rotation);
    const transf = (x, y) => [rotationMatrix[0] * x + rotationMatrix[2] * y, rotationMatrix[1] * x + rotationMatrix[3] * y];
    const invRotationMatrix = this.#getRotationMatrix(360 - this.rotation);
    const invTransf = (x, y) => [invRotationMatrix[0] * x + invRotationMatrix[2] * y, invRotationMatrix[1] * x + invRotationMatrix[3] * y];
    let getPoint;
    let getOpposite;
    let isDiagonal = false;
    let isHorizontal = false;
    switch (name) {
      case "topLeft":
        isDiagonal = true;
        getPoint = (w, h) => [0, 0];
        getOpposite = (w, h) => [w, h];
        break;
      case "topMiddle":
        getPoint = (w, h) => [w / 2, 0];
        getOpposite = (w, h) => [w / 2, h];
        break;
      case "topRight":
        isDiagonal = true;
        getPoint = (w, h) => [w, 0];
        getOpposite = (w, h) => [0, h];
        break;
      case "middleRight":
        isHorizontal = true;
        getPoint = (w, h) => [w, h / 2];
        getOpposite = (w, h) => [0, h / 2];
        break;
      case "bottomRight":
        isDiagonal = true;
        getPoint = (w, h) => [w, h];
        getOpposite = (w, h) => [0, 0];
        break;
      case "bottomMiddle":
        getPoint = (w, h) => [w / 2, h];
        getOpposite = (w, h) => [w / 2, 0];
        break;
      case "bottomLeft":
        isDiagonal = true;
        getPoint = (w, h) => [0, h];
        getOpposite = (w, h) => [w, 0];
        break;
      case "middleLeft":
        isHorizontal = true;
        getPoint = (w, h) => [0, h / 2];
        getOpposite = (w, h) => [w, h / 2];
        break;
    }
    const point = getPoint(savedWidth, savedHeight);
    const oppositePoint = getOpposite(savedWidth, savedHeight);
    let transfOppositePoint = transf(...oppositePoint);
    const oppositeX = AnnotationEditor._round(savedX + transfOppositePoint[0]);
    const oppositeY = AnnotationEditor._round(savedY + transfOppositePoint[1]);
    let ratioX = 1;
    let ratioY = 1;
    let deltaX, deltaY;
    if (!event.fromKeyboard) {
      const {
        screenX,
        screenY
      } = event;
      const [lastScreenX, lastScreenY] = this.#lastPointerCoords;
      [deltaX, deltaY] = this.screenToPageTranslation(screenX - lastScreenX, screenY - lastScreenY);
      this.#lastPointerCoords[0] = screenX;
      this.#lastPointerCoords[1] = screenY;
    } else {
      ({
        deltaX,
        deltaY
      } = event);
    }
    [deltaX, deltaY] = invTransf(deltaX / parentWidth, deltaY / parentHeight);
    if (isDiagonal) {
      const oldDiag = Math.hypot(savedWidth, savedHeight);
      ratioX = ratioY = Math.max(Math.min(Math.hypot(oppositePoint[0] - point[0] - deltaX, oppositePoint[1] - point[1] - deltaY) / oldDiag, 1 / savedWidth, 1 / savedHeight), minWidth / savedWidth, minHeight / savedHeight);
    } else if (isHorizontal) {
      ratioX = MathClamp(Math.abs(oppositePoint[0] - point[0] - deltaX), minWidth, 1) / savedWidth;
    } else {
      ratioY = MathClamp(Math.abs(oppositePoint[1] - point[1] - deltaY), minHeight, 1) / savedHeight;
    }
    const newWidth = AnnotationEditor._round(savedWidth * ratioX);
    const newHeight = AnnotationEditor._round(savedHeight * ratioY);
    transfOppositePoint = transf(...getOpposite(newWidth, newHeight));
    const newX = oppositeX - transfOppositePoint[0];
    const newY = oppositeY - transfOppositePoint[1];
    this.#initialRect ||= [this.x, this.y, this.width, this.height];
    this.width = newWidth;
    this.height = newHeight;
    this.x = newX;
    this.y = newY;
    this.setDims();
    this.fixAndSetPosition();
    this._onResizing();
  }
  _onResizing() {}
  altTextFinish() {
    this.#altText?.finish();
  }
  get toolbarButtons() {
    return null;
  }
  async addEditToolbar() {
    if (this._editToolbar || this.#isInEditMode) {
      return this._editToolbar;
    }
    this._editToolbar = new EditorToolbar(this);
    this.div.append(this._editToolbar.render());
    const {
      toolbarButtons
    } = this;
    if (toolbarButtons) {
      for (const [name, tool] of toolbarButtons) {
        await this._editToolbar.addButton(name, tool);
      }
    }
    if (!this.hasComment) {
      this._editToolbar.addButton("comment", this.addCommentButton());
    }
    this._editToolbar.addButton("delete");
    return this._editToolbar;
  }
  addCommentButtonInToolbar() {
    this._editToolbar?.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
  }
  removeCommentButtonFromToolbar() {
    this._editToolbar?.removeButton("comment");
  }
  removeEditToolbar() {
    this._editToolbar?.remove();
    this._editToolbar = null;
    this.#altText?.destroy();
  }
  addContainer(container) {
    const editToolbarDiv = this._editToolbar?.div;
    if (editToolbarDiv) {
      editToolbarDiv.before(container);
    } else {
      this.div.append(container);
    }
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  createAltText() {
    if (!this.#altText) {
      AltText.initialize(AnnotationEditor._l10n);
      this.#altText = new AltText(this);
      if (this.#accessibilityData) {
        this.#altText.data = this.#accessibilityData;
        this.#accessibilityData = null;
      }
    }
    return this.#altText;
  }
  get altTextData() {
    return this.#altText?.data;
  }
  set altTextData(data) {
    if (!this.#altText) {
      return;
    }
    this.#altText.data = data;
  }
  get guessedAltText() {
    return this.#altText?.guessedText;
  }
  async setGuessedAltText(text) {
    await this.#altText?.setGuessedText(text);
  }
  serializeAltText(isForCopying) {
    return this.#altText?.serialize(isForCopying);
  }
  hasAltText() {
    return !!this.#altText && !this.#altText.isEmpty();
  }
  hasAltTextData() {
    return this.#altText?.hasData() ?? false;
  }
  focusCommentButton() {
    this.#comment?.focusButton();
  }
  addCommentButton() {
    return this.canAddComment ? this.#comment ||= new Comment(this) : null;
  }
  addStandaloneCommentButton() {
    if (!this._uiManager.hasCommentManager()) {
      return;
    }
    if (this.#commentStandaloneButton) {
      if (this._uiManager.isEditingMode()) {
        this.#commentStandaloneButton.classList.remove("hidden");
      }
      return;
    }
    if (!this.hasComment) {
      return;
    }
    this.#commentStandaloneButton = this.#comment.renderForStandalone();
    this.div.append(this.#commentStandaloneButton);
  }
  removeStandaloneCommentButton() {
    this.#comment.removeStandaloneCommentButton();
    this.#commentStandaloneButton = null;
  }
  hideStandaloneCommentButton() {
    this.#commentStandaloneButton?.classList.add("hidden");
  }
  get comment() {
    if (!this.#comment) {
      return null;
    }
    const {
      data: {
        richText,
        text,
        date,
        deleted
      }
    } = this.#comment;
    return {
      text,
      richText,
      date,
      deleted,
      color: this.getNonHCMColor(),
      opacity: this.opacity ?? 1
    };
  }
  set comment(value) {
    this.#comment ||= new Comment(this);
    if (typeof value === "object" && value !== null) {
      this.#comment.restoreData(value);
    } else {
      this.#comment.data = value;
    }
    if (this.hasComment) {
      this.removeCommentButtonFromToolbar();
      this.addStandaloneCommentButton();
      this._uiManager.updateComment(this);
    } else {
      this.addCommentButtonInToolbar();
      this.removeStandaloneCommentButton();
      this._uiManager.removeComment(this);
    }
  }
  setCommentData({
    comment,
    popupRef,
    richText
  }) {
    if (!popupRef) {
      return;
    }
    this.#comment ||= new Comment(this);
    this.#comment.setInitialText(comment, richText);
    if (!this.annotationElementId) {
      return;
    }
    const storedData = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    if (storedData) {
      this.updateFromAnnotationLayer(storedData);
    }
  }
  get hasEditedComment() {
    return this.#comment?.hasBeenEdited();
  }
  get hasDeletedComment() {
    return this.#comment?.isDeleted();
  }
  get hasComment() {
    return !!this.#comment && !this.#comment.isEmpty() && !this.#comment.isDeleted();
  }
  async editComment(options) {
    this.#comment ||= new Comment(this);
    this.#comment.edit(options);
  }
  toggleComment(isSelected, visibility = undefined) {
    if (this.hasComment) {
      this._uiManager.toggleComment(this, isSelected, visibility);
    }
  }
  setSelectedCommentButton(selected) {
    this.#comment.setSelectedButton(selected);
  }
  addComment(serialized) {
    if (this.hasEditedComment) {
      const DEFAULT_POPUP_WIDTH = 180;
      const DEFAULT_POPUP_HEIGHT = 100;
      const [,,, trY] = serialized.rect;
      const [pageWidth] = this.pageDimensions;
      const [pageX] = this.pageTranslation;
      const blX = pageX + pageWidth + 1;
      const blY = trY - DEFAULT_POPUP_HEIGHT;
      const trX = blX + DEFAULT_POPUP_WIDTH;
      serialized.popup = {
        contents: this.comment.text,
        deleted: this.comment.deleted,
        rect: [blX, blY, trX, trY]
      };
    }
  }
  updateFromAnnotationLayer({
    popup: {
      contents,
      deleted
    }
  }) {
    this.#comment.data = deleted ? null : contents;
  }
  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }
  render() {
    const div = this.div = document.createElement("div");
    div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
    div.className = this.name;
    div.setAttribute("id", this.id);
    div.tabIndex = this.#disabled ? -1 : 0;
    div.setAttribute("role", "application");
    if (this.defaultL10nId) {
      div.setAttribute("data-l10n-id", this.defaultL10nId);
    }
    if (!this._isVisible) {
      div.classList.add("hidden");
    }
    this.setInForeground();
    this.#addFocusListeners();
    const [parentWidth, parentHeight] = this.parentDimensions;
    if (this.parentRotation % 180 !== 0) {
      div.style.maxWidth = `${(100 * parentHeight / parentWidth).toFixed(2)}%`;
      div.style.maxHeight = `${(100 * parentWidth / parentHeight).toFixed(2)}%`;
    }
    const [tx, ty] = this.getInitialTranslation();
    this.translate(tx, ty);
    bindEvents(this, div, ["keydown", "pointerdown", "dblclick"]);
    if (this.isResizable && this._uiManager._supportsPinchToZoom) {
      this.#touchManager ||= new TouchManager({
        container: div,
        isPinchingDisabled: () => !this.isSelected,
        onPinchStart: this.#touchPinchStartCallback.bind(this),
        onPinching: this.#touchPinchCallback.bind(this),
        onPinchEnd: this.#touchPinchEndCallback.bind(this),
        signal: this._uiManager._signal
      });
    }
    this.addStandaloneCommentButton();
    this._uiManager._editorUndoBar?.hide();
    return div;
  }
  #touchPinchStartCallback() {
    this.#savedDimensions = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    };
    this.#altText?.toggle(false);
    this.parent.togglePointerEvents(false);
  }
  #touchPinchCallback(_origin, prevDistance, distance) {
    const slowDownFactor = 0.7;
    let factor = slowDownFactor * (distance / prevDistance) + 1 - slowDownFactor;
    if (factor === 1) {
      return;
    }
    const rotationMatrix = this.#getRotationMatrix(this.rotation);
    const transf = (x, y) => [rotationMatrix[0] * x + rotationMatrix[2] * y, rotationMatrix[1] * x + rotationMatrix[3] * y];
    const [parentWidth, parentHeight] = this.parentDimensions;
    const savedX = this.x;
    const savedY = this.y;
    const savedWidth = this.width;
    const savedHeight = this.height;
    const minWidth = AnnotationEditor.MIN_SIZE / parentWidth;
    const minHeight = AnnotationEditor.MIN_SIZE / parentHeight;
    factor = Math.max(Math.min(factor, 1 / savedWidth, 1 / savedHeight), minWidth / savedWidth, minHeight / savedHeight);
    const newWidth = AnnotationEditor._round(savedWidth * factor);
    const newHeight = AnnotationEditor._round(savedHeight * factor);
    if (newWidth === savedWidth && newHeight === savedHeight) {
      return;
    }
    this.#initialRect ||= [savedX, savedY, savedWidth, savedHeight];
    const transfCenterPoint = transf(savedWidth / 2, savedHeight / 2);
    const centerX = AnnotationEditor._round(savedX + transfCenterPoint[0]);
    const centerY = AnnotationEditor._round(savedY + transfCenterPoint[1]);
    const newTransfCenterPoint = transf(newWidth / 2, newHeight / 2);
    this.x = centerX - newTransfCenterPoint[0];
    this.y = centerY - newTransfCenterPoint[1];
    this.width = newWidth;
    this.height = newHeight;
    this.setDims();
    this.fixAndSetPosition();
    this._onResizing();
  }
  #touchPinchEndCallback() {
    this.#altText?.toggle(true);
    this.parent.togglePointerEvents(true);
    this.#addResizeToUndoStack();
  }
  pointerdown(event) {
    const {
      isMac
    } = FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      event.preventDefault();
      return;
    }
    this.#hasBeenClicked = true;
    if (this._isDraggable) {
      this.#setUpDragSession(event);
      return;
    }
    this.#selectOnPointerEvent(event);
  }
  #selectOnPointerEvent(event) {
    const {
      isMac
    } = FeatureTest.platform;
    if (event.ctrlKey && !isMac || event.shiftKey || event.metaKey && isMac) {
      this.parent.toggleSelected(this);
    } else {
      this.parent.setSelected(this);
    }
  }
  #setUpDragSession(event) {
    const {
      isSelected
    } = this;
    this._uiManager.setUpDragSession();
    let hasDraggingStarted = false;
    const ac = new AbortController();
    const signal = this._uiManager.combinedSignal(ac);
    const opts = {
      capture: true,
      passive: false,
      signal
    };
    const cancelDrag = e => {
      ac.abort();
      this.#dragPointerId = null;
      this.#hasBeenClicked = false;
      if (!this._uiManager.endDragSession()) {
        this.#selectOnPointerEvent(e);
      }
      if (hasDraggingStarted) {
        this._onStopDragging();
      }
    };
    if (isSelected) {
      this.#prevDragX = event.clientX;
      this.#prevDragY = event.clientY;
      this.#dragPointerId = event.pointerId;
      this.#dragPointerType = event.pointerType;
      window.addEventListener("pointermove", e => {
        if (!hasDraggingStarted) {
          hasDraggingStarted = true;
          this._uiManager.toggleComment(this, true, false);
          this._onStartDragging();
        }
        const {
          clientX: x,
          clientY: y,
          pointerId
        } = e;
        if (pointerId !== this.#dragPointerId) {
          stopEvent(e);
          return;
        }
        const [tx, ty] = this.screenToPageTranslation(x - this.#prevDragX, y - this.#prevDragY);
        this.#prevDragX = x;
        this.#prevDragY = y;
        this._uiManager.dragSelectedEditors(tx, ty);
      }, opts);
      window.addEventListener("touchmove", stopEvent, opts);
      window.addEventListener("pointerdown", e => {
        if (e.pointerType === this.#dragPointerType) {
          if (this.#touchManager || e.isPrimary) {
            cancelDrag(e);
          }
        }
        stopEvent(e);
      }, opts);
    }
    const pointerUpCallback = e => {
      if (!this.#dragPointerId || this.#dragPointerId === e.pointerId) {
        cancelDrag(e);
        return;
      }
      stopEvent(e);
    };
    window.addEventListener("pointerup", pointerUpCallback, {
      signal
    });
    window.addEventListener("blur", pointerUpCallback, {
      signal
    });
  }
  _onStartDragging() {}
  _onStopDragging() {}
  moveInDOM() {
    if (this.#moveInDOMTimeout) {
      clearTimeout(this.#moveInDOMTimeout);
    }
    this.#moveInDOMTimeout = setTimeout(() => {
      this.#moveInDOMTimeout = null;
      this.parent?.moveEditorInDOM(this);
    }, 0);
  }
  _setParentAndPosition(parent, x, y) {
    parent.changeParent(this);
    this.x = x;
    this.y = y;
    this.fixAndSetPosition();
    this._onTranslated();
  }
  getRect(tx, ty, rotation = this.rotation) {
    const scale = this.parentScale;
    const [pageWidth, pageHeight] = this.pageDimensions;
    const [pageX, pageY] = this.pageTranslation;
    const shiftX = tx / scale;
    const shiftY = ty / scale;
    const x = this.x * pageWidth;
    const y = this.y * pageHeight;
    const width = this.width * pageWidth;
    const height = this.height * pageHeight;
    switch (rotation) {
      case 0:
        return [x + shiftX + pageX, pageHeight - y - shiftY - height + pageY, x + shiftX + width + pageX, pageHeight - y - shiftY + pageY];
      case 90:
        return [x + shiftY + pageX, pageHeight - y + shiftX + pageY, x + shiftY + height + pageX, pageHeight - y + shiftX + width + pageY];
      case 180:
        return [x - shiftX - width + pageX, pageHeight - y + shiftY + pageY, x - shiftX + pageX, pageHeight - y + shiftY + height + pageY];
      case 270:
        return [x - shiftY - height + pageX, pageHeight - y - shiftX - width + pageY, x - shiftY + pageX, pageHeight - y - shiftX + pageY];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(rect, pageHeight) {
    const [x1, y1, x2, y2] = rect;
    const width = x2 - x1;
    const height = y2 - y1;
    switch (this.rotation) {
      case 0:
        return [x1, pageHeight - y2, width, height];
      case 90:
        return [x1, pageHeight - y1, height, width];
      case 180:
        return [x2, pageHeight - y1, width, height];
      case 270:
        return [x2, pageHeight - y2, height, width];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getPDFRect() {
    return this.getRect(0, 0);
  }
  getNonHCMColor() {
    return this.color && AnnotationEditor._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
  }
  onUpdatedColor() {
    this.#comment?.onUpdatedColor();
  }
  getData() {
    const {
      comment: {
        text: str,
        color,
        date,
        opacity,
        deleted,
        richText
      },
      uid: id,
      pageIndex,
      creationDate,
      modificationDate
    } = this;
    return {
      id,
      pageIndex,
      rect: this.getPDFRect(),
      richText,
      contentsObj: {
        str
      },
      creationDate,
      modificationDate: date || modificationDate,
      popupRef: !deleted,
      color,
      opacity
    };
  }
  onceAdded(focus) {}
  isEmpty() {
    return false;
  }
  enableEditMode() {
    if (this.isInEditMode()) {
      return false;
    }
    this.parent.setEditingState(false);
    this.#isInEditMode = true;
    return true;
  }
  disableEditMode() {
    if (!this.isInEditMode()) {
      return false;
    }
    this.parent.setEditingState(true);
    this.#isInEditMode = false;
    return true;
  }
  isInEditMode() {
    return this.#isInEditMode;
  }
  shouldGetKeyboardEvents() {
    return this.#isResizerEnabledForKeyboard;
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top,
      left,
      bottom,
      right
    } = this.getClientDimensions();
    const {
      innerHeight,
      innerWidth
    } = window;
    return left < innerWidth && right > 0 && top < innerHeight && bottom > 0;
  }
  #addFocusListeners() {
    if (this.#focusAC || !this.div) {
      return;
    }
    this.#focusAC = new AbortController();
    const signal = this._uiManager.combinedSignal(this.#focusAC);
    this.div.addEventListener("focusin", this.focusin.bind(this), {
      signal
    });
    this.div.addEventListener("focusout", this.focusout.bind(this), {
      signal
    });
  }
  rebuild() {
    this.#addFocusListeners();
  }
  rotate(_angle) {}
  resize() {}
  serializeDeleted() {
    return {
      id: this.annotationElementId,
      deleted: true,
      pageIndex: this.pageIndex,
      popupRef: this._initialData?.popupRef || ""
    };
  }
  serialize(isForCopying = false, context = null) {
    return {
      annotationType: this.mode,
      pageIndex: this.pageIndex,
      rect: this.getPDFRect(),
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId,
      popupRef: this._initialData?.popupRef || ""
    };
  }
  static async deserialize(data, parent, uiManager) {
    const editor = new this.prototype.constructor({
      parent,
      id: uiManager.getId(),
      uiManager,
      annotationElementId: data.annotationElementId,
      creationDate: data.creationDate,
      modificationDate: data.modificationDate
    });
    editor.rotation = data.rotation;
    editor.#accessibilityData = data.accessibilityData;
    editor._isCopy = data.isCopy || false;
    const [pageWidth, pageHeight] = editor.pageDimensions;
    const [x, y, width, height] = editor.getRectInCurrentCoords(data.rect, pageHeight);
    editor.x = x / pageWidth;
    editor.y = y / pageHeight;
    editor.width = width / pageWidth;
    editor.height = height / pageHeight;
    return editor;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    this.#focusAC?.abort();
    this.#focusAC = null;
    if (!this.isEmpty()) {
      this.commit();
    }
    if (this.parent) {
      this.parent.remove(this);
    } else {
      this._uiManager.removeEditor(this);
    }
    this.hideCommentPopup();
    if (this.#moveInDOMTimeout) {
      clearTimeout(this.#moveInDOMTimeout);
      this.#moveInDOMTimeout = null;
    }
    this.#stopResizing();
    this.removeEditToolbar();
    if (this.#telemetryTimeouts) {
      for (const timeout of this.#telemetryTimeouts.values()) {
        clearTimeout(timeout);
      }
      this.#telemetryTimeouts = null;
    }
    this.parent = null;
    this.#touchManager?.destroy();
    this.#touchManager = null;
    this.#fakeAnnotation?.remove();
    this.#fakeAnnotation = null;
  }
  get isResizable() {
    return false;
  }
  makeResizable() {
    if (this.isResizable) {
      this.#createResizers();
      this.#resizersDiv.classList.remove("hidden");
    }
  }
  get toolbarPosition() {
    return null;
  }
  get commentButtonPosition() {
    return this._uiManager.direction === "ltr" ? [1, 0] : [0, 0];
  }
  get commentButtonPositionInPage() {
    const {
      commentButtonPosition: [posX, posY]
    } = this;
    const [blX, blY, trX, trY] = this.getPDFRect();
    return [AnnotationEditor._round(blX + (trX - blX) * posX), AnnotationEditor._round(blY + (trY - blY) * (1 - posY))];
  }
  get commentButtonColor() {
    return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
  }
  get commentPopupPosition() {
    return this.#comment.commentPopupPositionInLayer;
  }
  set commentPopupPosition(pos) {
    this.#comment.commentPopupPositionInLayer = pos;
  }
  hasDefaultPopupPosition() {
    return this.#comment.hasDefaultPopupPosition();
  }
  get commentButtonWidth() {
    return this.#comment.commentButtonWidth;
  }
  get elementBeforePopup() {
    return this.div;
  }
  setCommentButtonStates(options) {
    this.#comment?.setCommentButtonStates(options);
  }
  keydown(event) {
    if (!this.isResizable || event.target !== this.div || event.key !== "Enter") {
      return;
    }
    this._uiManager.setSelected(this);
    this.#savedDimensions = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    };
    const children = this.#resizersDiv.children;
    if (!this.#allResizerDivs) {
      this.#allResizerDivs = Array.from(children);
      const boundResizerKeydown = this.#resizerKeydown.bind(this);
      const boundResizerBlur = this.#resizerBlur.bind(this);
      const signal = this._uiManager._signal;
      for (const div of this.#allResizerDivs) {
        const name = div.getAttribute("data-resizer-name");
        div.setAttribute("role", "spinbutton");
        div.addEventListener("keydown", boundResizerKeydown, {
          signal
        });
        div.addEventListener("blur", boundResizerBlur, {
          signal
        });
        div.addEventListener("focus", this.#resizerFocus.bind(this, name), {
          signal
        });
        div.setAttribute("data-l10n-id", AnnotationEditor._l10nResizer[name]);
      }
    }
    const first = this.#allResizerDivs[0];
    let firstPosition = 0;
    for (const div of children) {
      if (div === first) {
        break;
      }
      firstPosition++;
    }
    const nextFirstPosition = (360 - this.rotation + this.parentRotation) % 360 / 90 * (this.#allResizerDivs.length / 4);
    if (nextFirstPosition !== firstPosition) {
      if (nextFirstPosition < firstPosition) {
        for (let i = 0; i < firstPosition - nextFirstPosition; i++) {
          this.#resizersDiv.append(this.#resizersDiv.firstElementChild);
        }
      } else if (nextFirstPosition > firstPosition) {
        for (let i = 0; i < nextFirstPosition - firstPosition; i++) {
          this.#resizersDiv.firstElementChild.before(this.#resizersDiv.lastElementChild);
        }
      }
      let i = 0;
      for (const child of children) {
        const div = this.#allResizerDivs[i++];
        const name = div.getAttribute("data-resizer-name");
        child.setAttribute("data-l10n-id", AnnotationEditor._l10nResizer[name]);
      }
    }
    this.#setResizerTabIndex(0);
    this.#isResizerEnabledForKeyboard = true;
    this.#resizersDiv.firstElementChild.focus({
      focusVisible: true
    });
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  #resizerKeydown(event) {
    AnnotationEditor._resizerKeyboardManager.exec(this, event);
  }
  #resizerBlur(event) {
    if (this.#isResizerEnabledForKeyboard && event.relatedTarget?.parentNode !== this.#resizersDiv) {
      this.#stopResizing();
    }
  }
  #resizerFocus(name) {
    this.#focusedResizerName = this.#isResizerEnabledForKeyboard ? name : "";
  }
  #setResizerTabIndex(value) {
    if (!this.#allResizerDivs) {
      return;
    }
    for (const div of this.#allResizerDivs) {
      div.tabIndex = value;
    }
  }
  _resizeWithKeyboard(x, y) {
    if (!this.#isResizerEnabledForKeyboard) {
      return;
    }
    this.#resizerPointermove(this.#focusedResizerName, {
      deltaX: x,
      deltaY: y,
      fromKeyboard: true
    });
  }
  #stopResizing() {
    this.#isResizerEnabledForKeyboard = false;
    this.#setResizerTabIndex(-1);
    this.#addResizeToUndoStack();
  }
  _stopResizingWithKeyboard() {
    this.#stopResizing();
    this.div.focus();
  }
  select() {
    if (this.isSelected && this._editToolbar) {
      this._editToolbar.show();
      return;
    }
    this.isSelected = true;
    this.makeResizable();
    this.div?.classList.add("selectedEditor");
    if (!this._editToolbar) {
      this.addEditToolbar().then(() => {
        if (this.div?.classList.contains("selectedEditor")) {
          this._editToolbar?.show();
        }
      });
      return;
    }
    this._editToolbar?.show();
    this.#altText?.toggleAltTextBadge(false);
  }
  focus() {
    if (this.div && !this.div.contains(document.activeElement)) {
      setTimeout(() => this.div?.focus({
        preventScroll: true
      }), 0);
    }
  }
  unselect() {
    if (!this.isSelected) {
      return;
    }
    this.isSelected = false;
    this.#resizersDiv?.classList.add("hidden");
    this.div?.classList.remove("selectedEditor");
    if (this.div?.contains(document.activeElement)) {
      this._uiManager.currentLayer.div.focus({
        preventScroll: true
      });
    }
    this._editToolbar?.hide();
    this.#altText?.toggleAltTextBadge(true);
    this.hideCommentPopup();
  }
  hideCommentPopup() {
    if (this.hasComment) {
      this._uiManager.toggleComment(null);
    }
  }
  updateParams(type, value) {}
  disableEditing() {}
  enableEditing() {}
  get canChangeContent() {
    return false;
  }
  enterInEditMode() {
    if (!this.canChangeContent) {
      return;
    }
    this.enableEditMode();
    this.div.focus();
  }
  dblclick(event) {
    if (event.target.nodeName === "BUTTON") {
      return;
    }
    this.enterInEditMode();
    this.parent.updateToolbar({
      mode: this.constructor._editorType,
      editId: this.uid
    });
  }
  getElementForAltText() {
    return this.div;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return this.#isEditing;
  }
  set isEditing(value) {
    this.#isEditing = value;
    if (!this.parent) {
      return;
    }
    if (value) {
      this.parent.setSelected(this);
      this.parent.setActiveEditor(this);
    } else {
      this.parent.setActiveEditor(null);
    }
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return true;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(data, mustWait = false) {
    if (mustWait) {
      this.#telemetryTimeouts ||= new Map();
      const {
        action
      } = data;
      let timeout = this.#telemetryTimeouts.get(action);
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        this._reportTelemetry(data);
        this.#telemetryTimeouts.delete(action);
        if (this.#telemetryTimeouts.size === 0) {
          this.#telemetryTimeouts = null;
        }
      }, AnnotationEditor._telemetryTimeout);
      this.#telemetryTimeouts.set(action, timeout);
      return;
    }
    data.type ||= this.editorType;
    this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data
      }
    });
  }
  show(visible = this._isVisible) {
    this.div.classList.toggle("hidden", !visible);
    this._isVisible = visible;
  }
  enable() {
    if (this.div) {
      this.div.tabIndex = 0;
    }
    this.#disabled = false;
  }
  disable() {
    if (this.div) {
      this.div.tabIndex = -1;
    }
    this.#disabled = true;
  }
  updateFakeAnnotationElement(annotationLayer) {
    if (!this.#fakeAnnotation && !this.deleted) {
      this.#fakeAnnotation = annotationLayer.addFakeAnnotation(this);
      return;
    }
    if (this.deleted) {
      this.#fakeAnnotation.remove();
      this.#fakeAnnotation = null;
      return;
    }
    if (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) {
      this.#fakeAnnotation.updateEdited({
        rect: this.getPDFRect(),
        popup: this.comment
      });
    }
  }
  renderAnnotationElement(annotation) {
    if (this.deleted) {
      annotation.hide();
      return null;
    }
    let content = annotation.container.querySelector(".annotationContent");
    if (!content) {
      content = document.createElement("div");
      content.classList.add("annotationContent", this.editorType);
      annotation.container.prepend(content);
    } else if (content.nodeName === "CANVAS") {
      const canvas = content;
      content = document.createElement("div");
      content.classList.add("annotationContent", this.editorType);
      canvas.before(content);
    }
    return content;
  }
  resetAnnotationElement(annotation) {
    const {
      firstElementChild
    } = annotation.container;
    if (firstElementChild?.nodeName === "DIV" && firstElementChild.classList.contains("annotationContent")) {
      firstElementChild.remove();
    }
  }
}
class FakeEditor extends AnnotationEditor {
  constructor(params) {
    super(params);
    this.annotationElementId = params.annotationElementId;
    this.deleted = true;
  }
  serialize() {
    return this.serializeDeleted();
  }
}

;// ./src/shared/murmurhash3.js
const SEED = 0xc3d2e1f0;
const MASK_HIGH = 0xffff0000;
const MASK_LOW = 0xffff;
class MurmurHash3_64 {
  constructor(seed) {
    this.h1 = seed ? seed & 0xffffffff : SEED;
    this.h2 = seed ? seed & 0xffffffff : SEED;
  }
  update(input) {
    let data, length;
    if (typeof input === "string") {
      data = new Uint8Array(input.length * 2);
      length = 0;
      for (let i = 0, ii = input.length; i < ii; i++) {
        const code = input.charCodeAt(i);
        if (code <= 0xff) {
          data[length++] = code;
        } else {
          data[length++] = code >>> 8;
          data[length++] = code & 0xff;
        }
      }
    } else if (ArrayBuffer.isView(input)) {
      data = input.slice();
      length = data.byteLength;
    } else {
      throw new Error("Invalid data format, must be a string or TypedArray.");
    }
    const blockCounts = length >> 2;
    const tailLength = length - blockCounts * 4;
    const dataUint32 = new Uint32Array(data.buffer, 0, blockCounts);
    let k1 = 0,
      k2 = 0;
    let h1 = this.h1,
      h2 = this.h2;
    const C1 = 0xcc9e2d51,
      C2 = 0x1b873593;
    const C1_LOW = C1 & MASK_LOW,
      C2_LOW = C2 & MASK_LOW;
    for (let i = 0; i < blockCounts; i++) {
      if (i & 1) {
        k1 = dataUint32[i];
        k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
        h1 ^= k1;
        h1 = h1 << 13 | h1 >>> 19;
        h1 = h1 * 5 + 0xe6546b64;
      } else {
        k2 = dataUint32[i];
        k2 = k2 * C1 & MASK_HIGH | k2 * C1_LOW & MASK_LOW;
        k2 = k2 << 15 | k2 >>> 17;
        k2 = k2 * C2 & MASK_HIGH | k2 * C2_LOW & MASK_LOW;
        h2 ^= k2;
        h2 = h2 << 13 | h2 >>> 19;
        h2 = h2 * 5 + 0xe6546b64;
      }
    }
    k1 = 0;
    switch (tailLength) {
      case 3:
        k1 ^= data[blockCounts * 4 + 2] << 16;
      case 2:
        k1 ^= data[blockCounts * 4 + 1] << 8;
      case 1:
        k1 ^= data[blockCounts * 4];
        k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
        if (blockCounts & 1) {
          h1 ^= k1;
        } else {
          h2 ^= k1;
        }
    }
    this.h1 = h1;
    this.h2 = h2;
  }
  hexdigest() {
    let h1 = this.h1,
      h2 = this.h2;
    h1 ^= h2 >>> 1;
    h1 = h1 * 0xed558ccd & MASK_HIGH | h1 * 0x8ccd & MASK_LOW;
    h2 = h2 * 0xff51afd7 & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 0xafd7ed55 & MASK_HIGH) >>> 16;
    h1 ^= h2 >>> 1;
    h1 = h1 * 0x1a85ec53 & MASK_HIGH | h1 * 0xec53 & MASK_LOW;
    h2 = h2 * 0xc4ceb9fe & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 0xb9fe1a85 & MASK_HIGH) >>> 16;
    h1 ^= h2 >>> 1;
    return (h1 >>> 0).toString(16).padStart(8, "0") + (h2 >>> 0).toString(16).padStart(8, "0");
  }
}

;// ./src/display/annotation_storage.js



const SerializableEmpty = Object.freeze({
  map: null,
  hash: "",
  transfer: undefined
});
class AnnotationStorage {
  #modified = false;
  #modifiedIds = null;
  #editorsMap = null;
  #storage = new Map();
  onSetModified = null;
  onResetModified = null;
  onAnnotationEditor = null;
  getValue(key, defaultValue) {
    const value = this.#storage.get(key);
    if (value === undefined) {
      return defaultValue;
    }
    return Object.assign(defaultValue, value);
  }
  getRawValue(key) {
    return this.#storage.get(key);
  }
  remove(key) {
    const storedValue = this.#storage.get(key);
    if (storedValue === undefined) {
      return;
    }
    if (storedValue instanceof AnnotationEditor) {
      this.#editorsMap.delete(storedValue.annotationElementId);
    }
    this.#storage.delete(key);
    if (this.#storage.size === 0) {
      this.resetModified();
    }
    if (this.#storage.values().some(v => v instanceof AnnotationEditor)) {
      return;
    }
    this.onAnnotationEditor?.(null);
  }
  setValue(key, value) {
    const obj = this.#storage.get(key);
    let modified = false;
    if (obj !== undefined) {
      for (const [entry, val] of Object.entries(value)) {
        if (obj[entry] !== val) {
          modified = true;
          obj[entry] = val;
        }
      }
    } else {
      modified = true;
      this.#storage.set(key, value);
    }
    if (modified) {
      this.#setModified();
    }
    if (value instanceof AnnotationEditor) {
      (this.#editorsMap ||= new Map()).set(value.annotationElementId, value);
      this.onAnnotationEditor?.(value.constructor._type);
    }
  }
  has(key) {
    return this.#storage.has(key);
  }
  get size() {
    return this.#storage.size;
  }
  #setModified() {
    if (!this.#modified) {
      this.#modified = true;
      this.onSetModified?.();
    }
  }
  resetModified() {
    if (this.#modified) {
      this.#modified = false;
      this.onResetModified?.();
    }
  }
  get print() {
    return new PrintAnnotationStorage(this);
  }
  get serializable() {
    if (this.#storage.size === 0) {
      return SerializableEmpty;
    }
    const map = new Map(),
      hash = new MurmurHash3_64(),
      transfer = [];
    const context = Object.create(null);
    let hasBitmap = false;
    for (const [key, val] of this.#storage) {
      const serialized = val instanceof AnnotationEditor ? val.serialize(false, context) : val;
      if (val.page) {
        val.pageIndex = val.page._pageIndex;
        delete val.page;
      }
      if (serialized) {
        map.set(key, serialized);
        hash.update(`${key}:${JSON.stringify(serialized)}`);
        hasBitmap ||= !!serialized.bitmap;
      }
    }
    if (hasBitmap) {
      for (const value of map.values()) {
        if (value.bitmap) {
          transfer.push(value.bitmap);
        }
      }
    }
    return map.size > 0 ? {
      map,
      hash: hash.hexdigest(),
      transfer
    } : SerializableEmpty;
  }
  get editorStats() {
    let stats = null;
    const typeToEditor = new Map();
    let numberOfEditedComments = 0;
    let numberOfDeletedComments = 0;
    for (const value of this.#storage.values()) {
      if (!(value instanceof AnnotationEditor)) {
        if (value.popup) {
          if (value.popup.deleted) {
            numberOfDeletedComments += 1;
          } else {
            numberOfEditedComments += 1;
          }
        }
        continue;
      }
      if (value.isCommentDeleted) {
        numberOfDeletedComments += 1;
      } else if (value.hasEditedComment) {
        numberOfEditedComments += 1;
      }
      const editorStats = value.telemetryFinalData;
      if (!editorStats) {
        continue;
      }
      const {
        type
      } = editorStats;
      typeToEditor.getOrInsertComputed(type, () => Object.getPrototypeOf(value).constructor);
      stats ||= Object.create(null);
      const map = stats[type] ||= new Map();
      for (const [key, val] of Object.entries(editorStats)) {
        if (key === "type") {
          continue;
        }
        const counters = map.getOrInsertComputed(key, makeMap);
        counters.set(val, (counters.get(val) ?? 0) + 1);
      }
    }
    if (numberOfDeletedComments > 0 || numberOfEditedComments > 0) {
      stats ||= Object.create(null);
      stats.comments = {
        deleted: numberOfDeletedComments,
        edited: numberOfEditedComments
      };
    }
    if (!stats) {
      return null;
    }
    for (const [type, editor] of typeToEditor) {
      stats[type] = editor.computeTelemetryFinalData(stats[type]);
    }
    return stats;
  }
  resetModifiedIds() {
    this.#modifiedIds = null;
  }
  updateEditor(annotationId, data) {
    const value = this.#editorsMap?.get(annotationId);
    if (value) {
      value.updateFromAnnotationLayer(data);
      return true;
    }
    return false;
  }
  getEditor(annotationId) {
    return this.#editorsMap?.get(annotationId) || null;
  }
  get modifiedIds() {
    if (this.#modifiedIds) {
      return this.#modifiedIds;
    }
    const ids = [];
    if (this.#editorsMap) {
      for (const value of this.#editorsMap.values()) {
        if (!value.serialize()) {
          continue;
        }
        ids.push(value.annotationElementId);
      }
    }
    let hash = "";
    if (ids.length) {
      const h = new MurmurHash3_64();
      h.update(ids.join(","));
      hash = h.hexdigest();
    }
    return this.#modifiedIds = {
      ids: new Set(ids),
      hash
    };
  }
  [Symbol.iterator]() {
    return this.#storage.entries();
  }
}
class PrintAnnotationStorage extends AnnotationStorage {
  #serializable = SerializableEmpty;
  constructor(parent) {
    super();
    const {
      serializable
    } = parent;
    if (serializable === SerializableEmpty) {
      return;
    }
    const {
      map,
      hash,
      transfer
    } = serializable;
    const clone = structuredClone(map, transfer ? {
      transfer
    } : null);
    this.#serializable = {
      map: clone,
      hash,
      transfer: []
    };
  }
  get print() {
    unreachable("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return this.#serializable;
  }
  get modifiedIds() {
    return shadow(this, "modifiedIds", {
      ids: new Set(),
      hash: ""
    });
  }
}

;// ./src/display/canvas_dependency_tracker.js



const FORCED_DEPENDENCY_LABEL = "__forcedDependency";
const {
  floor,
  ceil
} = Math;
function expandBBox(array, index, minX, minY, maxX, maxY) {
  array[index * 4 + 0] = Math.min(array[index * 4 + 0], minX);
  array[index * 4 + 1] = Math.min(array[index * 4 + 1], minY);
  array[index * 4 + 2] = Math.max(array[index * 4 + 2], maxX);
  array[index * 4 + 3] = Math.max(array[index * 4 + 3], maxY);
}
function scaleCharBBox(scaleX, scaleY, x, y, bbox) {
  let temp;
  if (scaleX) {
    if (scaleX < 0) {
      temp = bbox[0];
      bbox[0] = bbox[2];
      bbox[2] = temp;
    }
    bbox[0] *= scaleX;
    bbox[2] *= scaleX;
    if (scaleY < 0) {
      temp = bbox[1];
      bbox[1] = bbox[3];
      bbox[3] = temp;
    }
    bbox[1] *= scaleY;
    bbox[3] *= scaleY;
  } else {
    bbox.fill(0);
  }
  bbox[0] += x;
  bbox[1] += y;
  bbox[2] += x;
  bbox[3] += y;
}
const EMPTY_BBOX = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
class BBoxReader {
  #bboxes;
  #coords;
  constructor(bboxes, coords) {
    this.#bboxes = bboxes;
    this.#coords = coords;
  }
  get length() {
    return this.#bboxes.length;
  }
  isEmpty(i) {
    return this.#bboxes[i] === EMPTY_BBOX;
  }
  minX(i) {
    return this.#coords[i * 4 + 0] / 256;
  }
  minY(i) {
    return this.#coords[i * 4 + 1] / 256;
  }
  maxX(i) {
    return (this.#coords[i * 4 + 2] + 1) / 256;
  }
  maxY(i) {
    return (this.#coords[i * 4 + 3] + 1) / 256;
  }
}
const ensureDebugMetadata = (map, key) => map?.getOrInsertComputed(key, () => ({
  dependencies: new Set(),
  isRenderingOperation: false
}));
class CanvasBBoxTracker {
  #baseTransformStack = [[1, 0, 0, 1, 0, 0]];
  #clipBox = [-Infinity, -Infinity, Infinity, Infinity];
  #pendingBBox = new Float64Array(BBOX_INIT);
  _pendingBBoxIdx = -1;
  #canvasWidth;
  #canvasHeight;
  #bboxesCoords;
  #bboxes;
  _savesStack = [];
  _markedContentStack = [];
  constructor(canvas, operationsCount) {
    this.#canvasWidth = canvas.width;
    this.#canvasHeight = canvas.height;
    this.#initializeBBoxes(operationsCount);
  }
  growOperationsCount(operationsCount) {
    if (operationsCount >= this.#bboxes.length) {
      this.#initializeBBoxes(operationsCount, this.#bboxes);
    }
  }
  #initializeBBoxes(operationsCount, oldBBoxes) {
    const buffer = new ArrayBuffer(operationsCount * 4);
    this.#bboxesCoords = new Uint8ClampedArray(buffer);
    this.#bboxes = new Uint32Array(buffer);
    if (oldBBoxes && oldBBoxes.length > 0) {
      this.#bboxes.set(oldBBoxes);
      this.#bboxes.fill(EMPTY_BBOX, oldBBoxes.length);
    } else {
      this.#bboxes.fill(EMPTY_BBOX);
    }
  }
  get clipBox() {
    return this.#clipBox;
  }
  save(opIdx) {
    this.#clipBox = {
      __proto__: this.#clipBox
    };
    this._savesStack.push(opIdx);
    return this;
  }
  restore(opIdx, onSavePopped) {
    const previous = Object.getPrototypeOf(this.#clipBox);
    if (previous === null) {
      return this;
    }
    this.#clipBox = previous;
    const lastSave = this._savesStack.pop();
    if (lastSave !== undefined) {
      onSavePopped?.(lastSave, opIdx);
      this.#bboxes[opIdx] = this.#bboxes[lastSave];
    }
    return this;
  }
  recordOpenMarker(idx) {
    this._savesStack.push(idx);
    return this;
  }
  getOpenMarker() {
    if (this._savesStack.length === 0) {
      return null;
    }
    return this._savesStack.at(-1);
  }
  recordCloseMarker(opIdx, onSavePopped) {
    const lastSave = this._savesStack.pop();
    if (lastSave !== undefined) {
      onSavePopped?.(lastSave, opIdx);
      this.#bboxes[opIdx] = this.#bboxes[lastSave];
    }
    return this;
  }
  beginMarkedContent(opIdx) {
    this._markedContentStack.push(opIdx);
    return this;
  }
  endMarkedContent(opIdx, onSavePopped) {
    const lastSave = this._markedContentStack.pop();
    if (lastSave !== undefined) {
      onSavePopped?.(lastSave, opIdx);
      this.#bboxes[opIdx] = this.#bboxes[lastSave];
    }
    return this;
  }
  pushBaseTransform(ctx) {
    this.#baseTransformStack.push(Util.multiplyByDOMMatrix(this.#baseTransformStack.at(-1), ctx.getTransform()));
    return this;
  }
  popBaseTransform() {
    if (this.#baseTransformStack.length > 1) {
      this.#baseTransformStack.pop();
    }
    return this;
  }
  resetBBox(idx) {
    if (this._pendingBBoxIdx !== idx) {
      this._pendingBBoxIdx = idx;
      this.#pendingBBox.set(BBOX_INIT, 0);
    }
    return this;
  }
  recordClipBox(idx, ctx, minX, maxX, minY, maxY) {
    const transform = Util.multiplyByDOMMatrix(this.#baseTransformStack.at(-1), ctx.getTransform());
    const clipBox = BBOX_INIT.slice();
    Util.axialAlignedBoundingBox([minX, minY, maxX, maxY], transform, clipBox);
    const intersection = Util.intersect(this.#clipBox, clipBox);
    if (intersection) {
      this.#clipBox[0] = intersection[0];
      this.#clipBox[1] = intersection[1];
      this.#clipBox[2] = intersection[2];
      this.#clipBox[3] = intersection[3];
    } else {
      this.#clipBox[0] = this.#clipBox[1] = Infinity;
      this.#clipBox[2] = this.#clipBox[3] = -Infinity;
    }
    return this;
  }
  recordBBox(idx, ctx, minX, maxX, minY, maxY) {
    const clipBox = this.#clipBox;
    if (clipBox[0] === Infinity) {
      return this;
    }
    const transform = Util.multiplyByDOMMatrix(this.#baseTransformStack.at(-1), ctx.getTransform());
    if (clipBox[0] === -Infinity) {
      Util.axialAlignedBoundingBox([minX, minY, maxX, maxY], transform, this.#pendingBBox);
      return this;
    }
    const bbox = BBOX_INIT.slice();
    Util.axialAlignedBoundingBox([minX, minY, maxX, maxY], transform, bbox);
    this.#pendingBBox[0] = MathClamp(bbox[0], clipBox[0], this.#pendingBBox[0]);
    this.#pendingBBox[1] = MathClamp(bbox[1], clipBox[1], this.#pendingBBox[1]);
    this.#pendingBBox[2] = MathClamp(bbox[2], this.#pendingBBox[2], clipBox[2]);
    this.#pendingBBox[3] = MathClamp(bbox[3], this.#pendingBBox[3], clipBox[3]);
    return this;
  }
  recordFullPageBBox(idx) {
    this.#pendingBBox[0] = Math.max(0, this.#clipBox[0]);
    this.#pendingBBox[1] = Math.max(0, this.#clipBox[1]);
    this.#pendingBBox[2] = Math.min(this.#canvasWidth, this.#clipBox[2]);
    this.#pendingBBox[3] = Math.min(this.#canvasHeight, this.#clipBox[3]);
    return this;
  }
  recordOperation(idx, preserve = false, dependencyLists) {
    if (this._pendingBBoxIdx !== idx) {
      return this;
    }
    const minX = floor(this.#pendingBBox[0] * 256 / this.#canvasWidth);
    const minY = floor(this.#pendingBBox[1] * 256 / this.#canvasHeight);
    const maxX = ceil(this.#pendingBBox[2] * 256 / this.#canvasWidth);
    const maxY = ceil(this.#pendingBBox[3] * 256 / this.#canvasHeight);
    expandBBox(this.#bboxesCoords, idx, minX, minY, maxX, maxY);
    if (dependencyLists) {
      for (const dependencies of dependencyLists) {
        for (const depIdx of dependencies) {
          if (depIdx !== idx) {
            expandBBox(this.#bboxesCoords, depIdx, minX, minY, maxX, maxY);
          }
        }
      }
    }
    if (!preserve) {
      this._pendingBBoxIdx = -1;
    }
    return this;
  }
  bboxToClipBoxDropOperation(idx) {
    if (this._pendingBBoxIdx === idx) {
      this._pendingBBoxIdx = -1;
      this.#clipBox[0] = Math.max(this.#clipBox[0], this.#pendingBBox[0]);
      this.#clipBox[1] = Math.max(this.#clipBox[1], this.#pendingBBox[1]);
      this.#clipBox[2] = Math.min(this.#clipBox[2], this.#pendingBBox[2]);
      this.#clipBox[3] = Math.min(this.#clipBox[3], this.#pendingBBox[3]);
    }
    return this;
  }
  take() {
    return new BBoxReader(this.#bboxes, this.#bboxesCoords);
  }
  takeDebugMetadata() {
    throw new Error("Unreachable");
  }
  recordSimpleData(name, idx) {
    return this;
  }
  recordIncrementalData(name, idx) {
    return this;
  }
  resetIncrementalData(name, idx) {
    return this;
  }
  recordNamedData(name, idx) {
    return this;
  }
  recordSimpleDataFromNamed(name, depName, fallbackIdx) {
    return this;
  }
  recordFutureForcedDependency(name, idx) {
    return this;
  }
  inheritSimpleDataAsFutureForcedDependencies(names) {
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    return this;
  }
  recordCharacterBBox(idx, ctx, font, scale = 1, x = 0, y = 0, getMeasure) {
    return this;
  }
  getSimpleIndex(dependencyName) {
    return undefined;
  }
  recordDependencies(idx, dependencyNames) {
    return this;
  }
  recordNamedDependency(idx, name) {
    return this;
  }
  recordShowTextOperation(idx, preserve = false) {
    return this;
  }
}
class CanvasDependencyTracker {
  #simple = {
    __proto__: null
  };
  #incremental = {
    __proto__: null,
    transform: [],
    moveText: [],
    sameLineText: [],
    [FORCED_DEPENDENCY_LABEL]: []
  };
  #namedDependencies = new Map();
  #pendingDependencies = new Set();
  #fontBBoxTrustworthy = new Map();
  #debugMetadata;
  #recordDebugMetadataDepenencyAfterRestore;
  #bboxTracker;
  constructor(bboxTracker, recordDebugMetadata = false) {
    this.#bboxTracker = bboxTracker;
    if (recordDebugMetadata) {
      this.#debugMetadata = new Map();
      this.#recordDebugMetadataDepenencyAfterRestore = (lastSave, opIdx) => {
        ensureDebugMetadata(this.#debugMetadata, opIdx).dependencies.add(lastSave);
      };
    }
  }
  get clipBox() {
    return this.#bboxTracker.clipBox;
  }
  growOperationsCount(operationsCount) {
    this.#bboxTracker.growOperationsCount(operationsCount);
  }
  save(opIdx) {
    this.#simple = {
      __proto__: this.#simple
    };
    this.#incremental = {
      __proto__: this.#incremental,
      transform: {
        __proto__: this.#incremental.transform
      },
      moveText: {
        __proto__: this.#incremental.moveText
      },
      sameLineText: {
        __proto__: this.#incremental.sameLineText
      },
      [FORCED_DEPENDENCY_LABEL]: {
        __proto__: this.#incremental[FORCED_DEPENDENCY_LABEL]
      }
    };
    this.#bboxTracker.save(opIdx);
    return this;
  }
  restore(opIdx) {
    this.#bboxTracker.restore(opIdx, this.#recordDebugMetadataDepenencyAfterRestore);
    const previous = Object.getPrototypeOf(this.#simple);
    if (previous === null) {
      return this;
    }
    this.#simple = previous;
    this.#incremental = Object.getPrototypeOf(this.#incremental);
    return this;
  }
  recordOpenMarker(opIdx) {
    this.#bboxTracker.recordOpenMarker(opIdx, this.#recordDebugMetadataDepenencyAfterRestore);
    return this;
  }
  getOpenMarker() {
    return this.#bboxTracker.getOpenMarker();
  }
  recordCloseMarker(opIdx) {
    this.#bboxTracker.recordCloseMarker(opIdx, this.#recordDebugMetadataDepenencyAfterRestore);
    return this;
  }
  beginMarkedContent(opIdx) {
    this.#bboxTracker.beginMarkedContent(opIdx);
    return this;
  }
  endMarkedContent(opIdx) {
    this.#bboxTracker.endMarkedContent(opIdx, this.#recordDebugMetadataDepenencyAfterRestore);
    return this;
  }
  pushBaseTransform(ctx) {
    this.#bboxTracker.pushBaseTransform(ctx);
    return this;
  }
  popBaseTransform() {
    this.#bboxTracker.popBaseTransform();
    return this;
  }
  recordSimpleData(name, idx) {
    this.#simple[name] = idx;
    return this;
  }
  recordIncrementalData(name, idx) {
    this.#incremental[name].push(idx);
    return this;
  }
  resetIncrementalData(name, idx) {
    this.#incremental[name].length = 0;
    return this;
  }
  recordNamedData(name, idx) {
    this.#namedDependencies.set(name, idx);
    return this;
  }
  recordSimpleDataFromNamed(name, depName, fallbackIdx) {
    this.#simple[name] = this.#namedDependencies.get(depName) ?? fallbackIdx;
  }
  recordFutureForcedDependency(name, idx) {
    this.recordIncrementalData(FORCED_DEPENDENCY_LABEL, idx);
    return this;
  }
  inheritSimpleDataAsFutureForcedDependencies(names) {
    for (const name of names) {
      if (name in this.#simple) {
        this.recordFutureForcedDependency(name, this.#simple[name]);
      }
    }
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const dep of this.#pendingDependencies) {
      this.recordFutureForcedDependency(FORCED_DEPENDENCY_LABEL, dep);
    }
    return this;
  }
  resetBBox(idx) {
    this.#bboxTracker.resetBBox(idx);
    return this;
  }
  recordClipBox(idx, ctx, minX, maxX, minY, maxY) {
    this.#bboxTracker.recordClipBox(idx, ctx, minX, maxX, minY, maxY);
    return this;
  }
  recordBBox(idx, ctx, minX, maxX, minY, maxY) {
    this.#bboxTracker.recordBBox(idx, ctx, minX, maxX, minY, maxY);
    return this;
  }
  recordCharacterBBox(idx, ctx, font, scale = 1, x = 0, y = 0, getMeasure) {
    const fontBBox = font.bbox;
    let isBBoxTrustworthy;
    let computedBBox;
    if (fontBBox) {
      isBBoxTrustworthy = fontBBox[2] !== fontBBox[0] && fontBBox[3] !== fontBBox[1] && this.#fontBBoxTrustworthy.get(font);
      if (isBBoxTrustworthy !== false) {
        computedBBox = [0, 0, 0, 0];
        Util.axialAlignedBoundingBox(fontBBox, font.fontMatrix, computedBBox);
        if (scale !== 1 || x !== 0 || y !== 0) {
          scaleCharBBox(scale, -scale, x, y, computedBBox);
        }
        if (isBBoxTrustworthy) {
          return this.recordBBox(idx, ctx, computedBBox[0], computedBBox[2], computedBBox[1], computedBBox[3]);
        }
      }
    }
    if (!getMeasure) {
      return this.recordFullPageBBox(idx);
    }
    const measure = getMeasure();
    if (fontBBox && computedBBox && isBBoxTrustworthy === undefined) {
      isBBoxTrustworthy = computedBBox[0] <= x - measure.actualBoundingBoxLeft && computedBBox[2] >= x + measure.actualBoundingBoxRight && computedBBox[1] <= y - measure.actualBoundingBoxAscent && computedBBox[3] >= y + measure.actualBoundingBoxDescent;
      this.#fontBBoxTrustworthy.set(font, isBBoxTrustworthy);
      if (isBBoxTrustworthy) {
        return this.recordBBox(idx, ctx, computedBBox[0], computedBBox[2], computedBBox[1], computedBBox[3]);
      }
    }
    return this.recordBBox(idx, ctx, x - measure.actualBoundingBoxLeft, x + measure.actualBoundingBoxRight, y - measure.actualBoundingBoxAscent, y + measure.actualBoundingBoxDescent);
  }
  recordFullPageBBox(idx) {
    this.#bboxTracker.recordFullPageBBox(idx);
    return this;
  }
  getSimpleIndex(dependencyName) {
    return this.#simple[dependencyName];
  }
  recordDependencies(idx, dependencyNames) {
    const pendingDependencies = this.#pendingDependencies;
    const simple = this.#simple;
    const incremental = this.#incremental;
    for (const name of dependencyNames) {
      if (name in this.#simple) {
        pendingDependencies.add(simple[name]);
      } else if (name in incremental) {
        incremental[name].forEach(pendingDependencies.add, pendingDependencies);
      }
    }
    return this;
  }
  recordNamedDependency(idx, name) {
    if (this.#namedDependencies.has(name)) {
      this.#pendingDependencies.add(this.#namedDependencies.get(name));
    }
    return this;
  }
  recordOperation(idx, preserve = false) {
    this.recordDependencies(idx, [FORCED_DEPENDENCY_LABEL]);
    if (this.#debugMetadata) {
      const metadata = ensureDebugMetadata(this.#debugMetadata, idx);
      const {
        dependencies
      } = metadata;
      this.#pendingDependencies.forEach(dependencies.add, dependencies);
      this.#bboxTracker._savesStack.forEach(dependencies.add, dependencies);
      this.#bboxTracker._markedContentStack.forEach(dependencies.add, dependencies);
      dependencies.delete(idx);
      metadata.isRenderingOperation = true;
    }
    const needsCleanup = !preserve && idx === this.#bboxTracker._pendingBBoxIdx;
    this.#bboxTracker.recordOperation(idx, preserve, [this.#pendingDependencies, this.#bboxTracker._savesStack, this.#bboxTracker._markedContentStack]);
    if (needsCleanup) {
      this.#pendingDependencies.clear();
    }
    return this;
  }
  recordShowTextOperation(idx, preserve = false) {
    const deps = Array.from(this.#pendingDependencies);
    this.recordOperation(idx, preserve);
    this.recordIncrementalData("sameLineText", idx);
    for (const dep of deps) {
      this.recordIncrementalData("sameLineText", dep);
    }
    return this;
  }
  bboxToClipBoxDropOperation(idx, preserve = false) {
    const needsCleanup = !preserve && idx === this.#bboxTracker._pendingBBoxIdx;
    this.#bboxTracker.bboxToClipBoxDropOperation(idx);
    if (needsCleanup) {
      this.#pendingDependencies.clear();
    }
    return this;
  }
  take() {
    this.#fontBBoxTrustworthy.clear();
    return this.#bboxTracker.take();
  }
  takeDebugMetadata() {
    return this.#debugMetadata;
  }
}
class CanvasNestedDependencyTracker {
  #dependencyTracker;
  #opIdx;
  #ignoreBBoxes;
  #nestingLevel = 0;
  #savesLevel = 0;
  constructor(dependencyTracker, opIdx, ignoreBBoxes) {
    if (dependencyTracker instanceof CanvasNestedDependencyTracker && dependencyTracker.#ignoreBBoxes === !!ignoreBBoxes) {
      return dependencyTracker;
    }
    this.#dependencyTracker = dependencyTracker;
    this.#opIdx = opIdx;
    this.#ignoreBBoxes = !!ignoreBBoxes;
  }
  get clipBox() {
    return this.#dependencyTracker.clipBox;
  }
  growOperationsCount() {
    throw new Error("Unreachable");
  }
  save(opIdx) {
    this.#savesLevel++;
    this.#dependencyTracker.save(this.#opIdx);
    return this;
  }
  restore(opIdx) {
    if (this.#savesLevel > 0) {
      this.#dependencyTracker.restore(this.#opIdx);
      this.#savesLevel--;
    }
    return this;
  }
  recordOpenMarker(idx) {
    this.#nestingLevel++;
    return this;
  }
  getOpenMarker() {
    return this.#nestingLevel > 0 ? this.#opIdx : this.#dependencyTracker.getOpenMarker();
  }
  recordCloseMarker(idx) {
    this.#nestingLevel--;
    return this;
  }
  beginMarkedContent(opIdx) {
    return this;
  }
  endMarkedContent(opIdx) {
    return this;
  }
  pushBaseTransform(ctx) {
    this.#dependencyTracker.pushBaseTransform(ctx);
    return this;
  }
  popBaseTransform() {
    this.#dependencyTracker.popBaseTransform();
    return this;
  }
  recordSimpleData(name, idx) {
    this.#dependencyTracker.recordSimpleData(name, this.#opIdx);
    return this;
  }
  recordIncrementalData(name, idx) {
    this.#dependencyTracker.recordIncrementalData(name, this.#opIdx);
    return this;
  }
  resetIncrementalData(name, idx) {
    this.#dependencyTracker.resetIncrementalData(name, this.#opIdx);
    return this;
  }
  recordNamedData(name, idx) {
    return this;
  }
  recordSimpleDataFromNamed(name, depName, fallbackIdx) {
    this.#dependencyTracker.recordSimpleDataFromNamed(name, depName, this.#opIdx);
    return this;
  }
  recordFutureForcedDependency(name, idx) {
    this.#dependencyTracker.recordFutureForcedDependency(name, this.#opIdx);
    return this;
  }
  inheritSimpleDataAsFutureForcedDependencies(names) {
    this.#dependencyTracker.inheritSimpleDataAsFutureForcedDependencies(names);
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    this.#dependencyTracker.inheritPendingDependenciesAsFutureForcedDependencies();
    return this;
  }
  resetBBox(idx) {
    if (!this.#ignoreBBoxes) {
      this.#dependencyTracker.resetBBox(this.#opIdx);
    }
    return this;
  }
  recordClipBox(idx, ctx, minX, maxX, minY, maxY) {
    if (!this.#ignoreBBoxes) {
      this.#dependencyTracker.recordClipBox(this.#opIdx, ctx, minX, maxX, minY, maxY);
    }
    return this;
  }
  recordBBox(idx, ctx, minX, maxX, minY, maxY) {
    if (!this.#ignoreBBoxes) {
      this.#dependencyTracker.recordBBox(this.#opIdx, ctx, minX, maxX, minY, maxY);
    }
    return this;
  }
  recordCharacterBBox(idx, ctx, font, scale, x, y, getMeasure) {
    if (!this.#ignoreBBoxes) {
      this.#dependencyTracker.recordCharacterBBox(this.#opIdx, ctx, font, scale, x, y, getMeasure);
    }
    return this;
  }
  recordFullPageBBox(idx) {
    if (!this.#ignoreBBoxes) {
      this.#dependencyTracker.recordFullPageBBox(this.#opIdx);
    }
    return this;
  }
  getSimpleIndex(dependencyName) {
    return this.#dependencyTracker.getSimpleIndex(dependencyName);
  }
  recordDependencies(idx, dependencyNames) {
    this.#dependencyTracker.recordDependencies(this.#opIdx, dependencyNames);
    return this;
  }
  recordNamedDependency(idx, name) {
    this.#dependencyTracker.recordNamedDependency(this.#opIdx, name);
    return this;
  }
  recordOperation(idx) {
    this.#dependencyTracker.recordOperation(this.#opIdx, true);
    return this;
  }
  recordShowTextOperation(idx) {
    this.#dependencyTracker.recordShowTextOperation(this.#opIdx, true);
    return this;
  }
  bboxToClipBoxDropOperation(idx) {
    if (!this.#ignoreBBoxes) {
      this.#dependencyTracker.bboxToClipBoxDropOperation(this.#opIdx, true);
    }
    return this;
  }
  take() {
    throw new Error("Unreachable");
  }
  takeDebugMetadata() {
    throw new Error("Unreachable");
  }
}
const Dependencies = {
  stroke: ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"],
  fill: ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"],
  imageXObject: ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"],
  rawFillPath: ["filter", "fillColor", "fillAlpha"],
  showText: ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"],
  transform: ["transform"],
  transformAndFill: ["transform", "fillColor"]
};
class CanvasImagesTracker {
  #canvasWidth;
  #canvasHeight;
  #capacity = 4;
  #count = 0;
  #coords = new CanvasImagesTracker.#CoordsArray(this.#capacity * 6);
  static #CoordsArray = FeatureTest.isFloat16ArraySupported ? Float16Array : Float32Array;
  constructor(canvas) {
    this.#canvasWidth = canvas.width;
    this.#canvasHeight = canvas.height;
  }
  record(ctx, width, height, clipBox) {
    if (this.#count === this.#capacity) {
      this.#capacity *= 2;
      const newCoords = new CanvasImagesTracker.#CoordsArray(this.#capacity * 6);
      newCoords.set(this.#coords);
      this.#coords = newCoords;
    }
    const transform = getCurrentTransform(ctx);
    let coords;
    if (clipBox[0] !== Infinity) {
      const bbox = BBOX_INIT.slice();
      Util.axialAlignedBoundingBox([0, -height, width, 0], transform, bbox);
      const finalBBox = Util.intersect(clipBox, bbox);
      if (!finalBBox) {
        return;
      }
      const [minX, minY, maxX, maxY] = finalBBox;
      if (minX !== bbox[0] || minY !== bbox[1] || maxX !== bbox[2] || maxY !== bbox[3]) {
        const rotationAngle = Math.atan2(transform[1], transform[0]);
        const sin = Math.abs(Math.sin(rotationAngle));
        const cos = Math.abs(Math.cos(rotationAngle));
        if (sin < 1e-6 || cos < 1e-6 || Math.abs(sin - cos) < 1e-6) {
          coords = [minX, minY, minX, maxY, maxX, minY];
        } else {
          const finalBBoxWidth = maxX - minX;
          const finalBBoxHeight = maxY - minY;
          const sin2 = sin * sin;
          const cos2 = cos * cos;
          const cosSin = cos * sin;
          const denom = cos2 - sin2;
          const a = (finalBBoxHeight * cos2 - finalBBoxWidth * cosSin) / denom;
          const b = (finalBBoxHeight * cosSin - finalBBoxWidth * sin2) / denom;
          coords = [minX + b, minY, minX, minY + a, maxX, maxY - a];
        }
      }
    }
    if (!coords) {
      coords = [0, -height, 0, 0, width, -height];
      Util.applyTransform(coords, transform, 0);
      Util.applyTransform(coords, transform, 2);
      Util.applyTransform(coords, transform, 4);
    }
    coords[0] /= this.#canvasWidth;
    coords[1] /= this.#canvasHeight;
    coords[2] /= this.#canvasWidth;
    coords[3] /= this.#canvasHeight;
    coords[4] /= this.#canvasWidth;
    coords[5] /= this.#canvasHeight;
    this.#coords.set(coords, this.#count * 6);
    this.#count++;
  }
  take() {
    return this.#coords.subarray(0, this.#count * 6);
  }
}

;// ./src/display/font_loader.js


class FontLoader {
  #systemFonts = new Set();
  #styleSheet = null;
  constructor({
    ownerDocument = globalThis.document,
    styleElement = null
  }) {
    this._document = ownerDocument;
    this.nativeFontFaces = new Set();
    this.styleElement = null;
    this.loadingRequests = [];
    this.loadTestFontId = 0;
  }
  addNativeFontFace(nativeFontFace) {
    this.nativeFontFaces.add(nativeFontFace);
    this._document.fonts.add(nativeFontFace);
  }
  removeNativeFontFace(nativeFontFace) {
    this.nativeFontFaces.delete(nativeFontFace);
    this._document.fonts.delete(nativeFontFace);
  }
  insertRule(rule) {
    const styleSheet = this.#getStyleSheet();
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
  }
  #getStyleSheet() {
    if (this.#styleSheet) {
      return this.#styleSheet;
    }
    const StyleSheet = this._document.defaultView?.CSSStyleSheet || globalThis.CSSStyleSheet;
    if (!this.styleElement && StyleSheet) {
      const {
        adoptedStyleSheets
      } = this._document;
      if (adoptedStyleSheets) {
        const styleSheet = new StyleSheet();
        adoptedStyleSheets.push(styleSheet);
        return this.#styleSheet = styleSheet;
      }
    }
    if (!this.styleElement) {
      this.styleElement = this._document.createElement("style");
      this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
    }
    return this.#styleSheet = this.styleElement.sheet;
  }
  clear() {
    for (const nativeFontFace of this.nativeFontFaces) {
      this._document.fonts.delete(nativeFontFace);
    }
    this.nativeFontFaces.clear();
    this.#systemFonts.clear();
    if (this.#styleSheet) {
      const {
        adoptedStyleSheets
      } = this._document;
      if (adoptedStyleSheets?.includes(this.#styleSheet)) {
        this._document.adoptedStyleSheets = adoptedStyleSheets.filter(styleSheet => styleSheet !== this.#styleSheet);
      }
      this.#styleSheet = null;
    }
    if (this.styleElement) {
      this.styleElement.remove();
      this.styleElement = null;
    }
  }
  async loadSystemFont({
    systemFontInfo: info,
    disableFontFace,
    _inspectFont
  }) {
    if (!info || this.#systemFonts.has(info.loadedName)) {
      return;
    }
    assert(!disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set.");
    if (this.isFontLoadingAPISupported) {
      const {
        loadedName,
        src,
        style
      } = info;
      const fontFace = new FontFace(loadedName, src, style);
      this.addNativeFontFace(fontFace);
      try {
        await fontFace.load();
        this.#systemFonts.add(loadedName);
        _inspectFont?.(info);
      } catch {
        warn(`Cannot load system font: ${info.baseFontName}, installing it could help to improve PDF rendering.`);
        this.removeNativeFontFace(fontFace);
      }
      return;
    }
    unreachable("Not implemented: loadSystemFont without the Font Loading API.");
  }
  async bind(font) {
    if (font.attached || font.missingFile && !font.systemFontInfo) {
      return;
    }
    font.attached = true;
    if (font.systemFontInfo) {
      await this.loadSystemFont(font);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const nativeFontFace = font.createNativeFontFace();
      if (nativeFontFace) {
        this.addNativeFontFace(nativeFontFace);
        try {
          await nativeFontFace.loaded;
        } catch (ex) {
          warn(`Failed to load font '${nativeFontFace.family}': '${ex}'.`);
          font.disableFontFace = true;
          throw ex;
        }
      }
      return;
    }
    const rule = font.createFontFaceRule();
    if (rule) {
      this.insertRule(rule);
      if (this.isSyncFontLoadingSupported) {
        return;
      }
      await new Promise(resolve => {
        const request = this._queueLoadingCallback(resolve);
        this._prepareFontLoadEvent(font, request);
      });
    }
  }
  get isFontLoadingAPISupported() {
    const hasFonts = !!this._document?.fonts;
    return shadow(this, "isFontLoadingAPISupported", hasFonts);
  }
  get isSyncFontLoadingSupported() {
    return shadow(this, "isSyncFontLoadingSupported", isNodeJS || FeatureTest.platform.isFirefox);
  }
  _queueLoadingCallback(callback) {
    function completeRequest() {
      assert(!request.done, "completeRequest() cannot be called twice.");
      request.done = true;
      while (loadingRequests.length > 0 && loadingRequests[0].done) {
        const otherRequest = loadingRequests.shift();
        setTimeout(otherRequest.callback, 0);
      }
    }
    const {
      loadingRequests
    } = this;
    const request = {
      done: false,
      complete: completeRequest,
      callback
    };
    loadingRequests.push(request);
    return request;
  }
  get _loadTestFont() {
    const testFont = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA" + "FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA" + "ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgA" + "AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1" + "AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD" + "6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM" + "AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D" + "IP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAA" + "AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUA" + "AQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB" + "AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY" + "AAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAA" + "AC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAA" + "AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC" + "AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3" + "Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTj" + "FQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return shadow(this, "_loadTestFont", testFont);
  }
  _prepareFontLoadEvent(font, request) {
    function int32(data, offset) {
      return data.charCodeAt(offset) << 24 | data.charCodeAt(offset + 1) << 16 | data.charCodeAt(offset + 2) << 8 | data.charCodeAt(offset + 3) & 0xff;
    }
    function string32(value) {
      return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
    }
    function spliceString(s, offset, remove, insert) {
      const chunk1 = s.substring(0, offset);
      const chunk2 = s.substring(offset + remove);
      return chunk1 + insert + chunk2;
    }
    let i, ii;
    const canvas = this._document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    let called = 0;
    function isFontReady(name, callback) {
      if (++called > 30) {
        warn("Load test font never loaded.");
        callback();
        return;
      }
      ctx.font = "30px " + name;
      ctx.fillText(".", 0, 20);
      const imageData = ctx.getImageData(0, 0, 1, 1);
      if (imageData.data[3] > 0) {
        callback();
        return;
      }
      setTimeout(isFontReady.bind(null, name, callback));
    }
    const loadTestFontId = `lt${Date.now()}${this.loadTestFontId++}`;
    let data = this._loadTestFont;
    const COMMENT_OFFSET = 976;
    data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
    const CFF_CHECKSUM_OFFSET = 16;
    const XXXX_VALUE = 0x58585858;
    let checksum = int32(data, CFF_CHECKSUM_OFFSET);
    for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
      checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
    }
    if (i < loadTestFontId.length) {
      checksum = checksum - XXXX_VALUE + int32(loadTestFontId + "XXX", i) | 0;
    }
    data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, string32(checksum));
    const url = `url(data:font/opentype;base64,${btoa(data)});`;
    const rule = `@font-face {font-family:"${loadTestFontId}";src:${url}}`;
    this.insertRule(rule);
    const div = this._document.createElement("div");
    div.style.visibility = "hidden";
    div.style.width = div.style.height = "10px";
    div.style.position = "absolute";
    div.style.top = div.style.left = "0px";
    for (const name of [font.loadedName, loadTestFontId]) {
      const span = this._document.createElement("span");
      span.textContent = "Hi";
      span.style.fontFamily = name;
      div.append(span);
    }
    this._document.body.append(div);
    isFontReady(loadTestFontId, () => {
      div.remove();
      request.complete();
    });
  }
}
class FontFaceObject {
  compiledGlyphs = Object.create(null);
  #fontData;
  constructor(translatedData, inspectFont = null, charProcOperatorList, extra) {
    this.#fontData = translatedData;
    this._inspectFont = inspectFont;
    if (charProcOperatorList) {
      this.charProcOperatorList = charProcOperatorList;
    }
    if (extra) {
      Object.assign(this, extra);
    }
  }
  createNativeFontFace() {
    if (!this.data || this.disableFontFace) {
      return null;
    }
    let nativeFontFace;
    if (!this.cssFontInfo) {
      nativeFontFace = new FontFace(this.loadedName, this.data, {});
    } else {
      const css = {
        weight: this.cssFontInfo.fontWeight
      };
      if (this.cssFontInfo.italicAngle) {
        css.style = `oblique ${this.cssFontInfo.italicAngle}deg`;
      }
      nativeFontFace = new FontFace(this.cssFontInfo.fontFamily, this.data, css);
    }
    this._inspectFont?.(this);
    return nativeFontFace;
  }
  createFontFaceRule() {
    if (!this.data || this.disableFontFace) {
      return null;
    }
    const url = `url(data:${this.mimetype};base64,${this.data.toBase64()});`;
    let rule;
    if (!this.cssFontInfo) {
      rule = `@font-face {font-family:"${this.loadedName}";src:${url}}`;
    } else {
      let css = `font-weight: ${this.cssFontInfo.fontWeight};`;
      if (this.cssFontInfo.italicAngle) {
        css += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`;
      }
      rule = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${css}src:${url}}`;
    }
    this._inspectFont?.(this, url);
    return rule;
  }
  getPathGenerator(objs, character) {
    if (this.compiledGlyphs[character] !== undefined) {
      return this.compiledGlyphs[character];
    }
    const objId = this.loadedName + "_path_" + character;
    let cmds;
    try {
      cmds = objs.get(objId);
    } catch (ex) {
      warn(`getPathGenerator - ignoring character: "${ex}".`);
    }
    const path = makePathFromDrawOPS(cmds?.path);
    if (!this.fontExtraProperties) {
      objs.delete(objId);
    }
    return this.compiledGlyphs[character] = path;
  }
  get black() {
    return this.#fontData.black;
  }
  get bold() {
    return this.#fontData.bold;
  }
  get disableFontFace() {
    return this.#fontData.disableFontFace;
  }
  set disableFontFace(value) {
    shadow(this, "disableFontFace", !!value);
  }
  get fontExtraProperties() {
    return this.#fontData.fontExtraProperties;
  }
  get isInvalidPDFjsFont() {
    return this.#fontData.isInvalidPDFjsFont;
  }
  get isType3Font() {
    return this.#fontData.isType3Font;
  }
  get italic() {
    return this.#fontData.italic;
  }
  get missingFile() {
    return this.#fontData.missingFile;
  }
  get remeasure() {
    return this.#fontData.remeasure;
  }
  get vertical() {
    return this.#fontData.vertical;
  }
  get ascent() {
    return this.#fontData.ascent;
  }
  get defaultWidth() {
    return this.#fontData.defaultWidth;
  }
  get descent() {
    return this.#fontData.descent;
  }
  get bbox() {
    return this.#fontData.bbox;
  }
  get fontMatrix() {
    return this.#fontData.fontMatrix;
  }
  get fallbackName() {
    return this.#fontData.fallbackName;
  }
  get loadedName() {
    return this.#fontData.loadedName;
  }
  get mimetype() {
    return this.#fontData.mimetype;
  }
  get name() {
    return this.#fontData.name;
  }
  get data() {
    return this.#fontData.data;
  }
  clearData() {
    this.#fontData.clearData();
  }
  get cssFontInfo() {
    return this.#fontData.cssFontInfo;
  }
  get systemFontInfo() {
    return this.#fontData.systemFontInfo;
  }
  get defaultVMetrics() {
    return this.#fontData.defaultVMetrics;
  }
}

;// ./src/shared/obj_bin_transform_utils.js
class CSS_FONT_INFO {
  static strings = ["fontFamily", "fontWeight", "italicAngle"];
}
class SYSTEM_FONT_INFO {
  static strings = ["css", "loadedName", "baseFontName", "src"];
}
class FONT_INFO {
  static bools = ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"];
  static numbers = ["ascent", "defaultWidth", "descent"];
  static strings = ["fallbackName", "loadedName", "mimetype", "name"];
  static OFFSET_NUMBERS = Math.ceil(this.bools.length * 2 / 8);
  static OFFSET_BBOX = this.OFFSET_NUMBERS + this.numbers.length * 8;
  static OFFSET_FONT_MATRIX = this.OFFSET_BBOX + 1 + 2 * 4;
  static OFFSET_DEFAULT_VMETRICS = this.OFFSET_FONT_MATRIX + 1 + 8 * 6;
  static OFFSET_STRINGS = this.OFFSET_DEFAULT_VMETRICS + 1 + 2 * 3;
}
class PATTERN_INFO {
  static KIND = 0;
  static HAS_BBOX = 1;
  static HAS_BACKGROUND = 2;
  static SHADING_TYPE = 3;
  static N_COORD = 4;
  static N_COLOR = 8;
  static N_STOP = 12;
  static N_FIGURES = 16;
}

;// ./src/display/obj_bin_transform_display.js


class CssFontInfo {
  #buffer;
  #decoder = new TextDecoder();
  #view;
  constructor(buffer) {
    this.#buffer = buffer;
    this.#view = new DataView(buffer);
  }
  #readString(index) {
    assert(index < CSS_FONT_INFO.strings.length, "Invalid string index");
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += this.#view.getUint32(offset) + 4;
    }
    const length = this.#view.getUint32(offset);
    return this.#decoder.decode(new Uint8Array(this.#buffer, offset + 4, length));
  }
  get fontFamily() {
    return this.#readString(0);
  }
  get fontWeight() {
    return this.#readString(1);
  }
  get italicAngle() {
    return this.#readString(2);
  }
}
class SystemFontInfo {
  #buffer;
  #decoder = new TextDecoder();
  #view;
  constructor(buffer) {
    this.#buffer = buffer;
    this.#view = new DataView(buffer);
  }
  get guessFallback() {
    return this.#view.getUint8(0) !== 0;
  }
  #readString(index) {
    assert(index < SYSTEM_FONT_INFO.strings.length, "Invalid string index");
    let offset = 5;
    for (let i = 0; i < index; i++) {
      offset += this.#view.getUint32(offset) + 4;
    }
    const length = this.#view.getUint32(offset);
    return this.#decoder.decode(new Uint8Array(this.#buffer, offset + 4, length));
  }
  get css() {
    return this.#readString(0);
  }
  get loadedName() {
    return this.#readString(1);
  }
  get baseFontName() {
    return this.#readString(2);
  }
  get src() {
    return this.#readString(3);
  }
  get style() {
    let offset = 1;
    offset += 4 + this.#view.getUint32(offset);
    const styleLength = this.#view.getUint32(offset);
    const style = this.#decoder.decode(new Uint8Array(this.#buffer, offset + 4, styleLength));
    offset += 4 + styleLength;
    const weightLength = this.#view.getUint32(offset);
    const weight = this.#decoder.decode(new Uint8Array(this.#buffer, offset + 4, weightLength));
    return {
      style,
      weight
    };
  }
}
class FontInfo {
  #buffer;
  #decoder = new TextDecoder();
  #view;
  constructor({
    buffer,
    extra
  }) {
    this.#buffer = buffer;
    this.#view = new DataView(buffer);
    if (extra) {
      Object.assign(this, extra);
    }
  }
  #readBoolean(index) {
    assert(index < FONT_INFO.bools.length, "Invalid boolean index");
    const byteOffset = Math.floor(index / 4);
    const bitOffset = index * 2 % 8;
    const value = this.#view.getUint8(byteOffset) >> bitOffset & 0x03;
    return value === 0x00 ? undefined : value === 0x02;
  }
  get black() {
    return this.#readBoolean(0);
  }
  get bold() {
    return this.#readBoolean(1);
  }
  get disableFontFace() {
    return this.#readBoolean(2);
  }
  get fontExtraProperties() {
    return this.#readBoolean(3);
  }
  get isInvalidPDFjsFont() {
    return this.#readBoolean(4);
  }
  get isType3Font() {
    return this.#readBoolean(5);
  }
  get italic() {
    return this.#readBoolean(6);
  }
  get missingFile() {
    return this.#readBoolean(7);
  }
  get remeasure() {
    return this.#readBoolean(8);
  }
  get vertical() {
    return this.#readBoolean(9);
  }
  #readNumber(index) {
    assert(index < FONT_INFO.numbers.length, "Invalid number index");
    return this.#view.getFloat64(FONT_INFO.OFFSET_NUMBERS + index * 8);
  }
  get ascent() {
    return this.#readNumber(0);
  }
  get defaultWidth() {
    return this.#readNumber(1);
  }
  get descent() {
    return this.#readNumber(2);
  }
  #readArray(offset, arrLen, lookupName, increment) {
    const len = this.#view.getUint8(offset);
    if (len === 0) {
      return undefined;
    }
    assert(len === arrLen, "Invalid array length.");
    offset += 1;
    const arr = new Array(len);
    for (let i = 0; i < len; i++) {
      arr[i] = this.#view[lookupName](offset, true);
      offset += increment;
    }
    return arr;
  }
  get bbox() {
    return this.#readArray(FONT_INFO.OFFSET_BBOX, 4, "getInt16", 2);
  }
  get fontMatrix() {
    return this.#readArray(FONT_INFO.OFFSET_FONT_MATRIX, 6, "getFloat64", 8);
  }
  get defaultVMetrics() {
    return this.#readArray(FONT_INFO.OFFSET_DEFAULT_VMETRICS, 3, "getInt16", 2);
  }
  #readString(index) {
    assert(index < FONT_INFO.strings.length, "Invalid string index");
    let offset = FONT_INFO.OFFSET_STRINGS + 4;
    for (let i = 0; i < index; i++) {
      offset += this.#view.getUint32(offset) + 4;
    }
    const length = this.#view.getUint32(offset);
    return this.#decoder.decode(new Uint8Array(this.#buffer, offset + 4, length));
  }
  get fallbackName() {
    return this.#readString(0);
  }
  get loadedName() {
    return this.#readString(1);
  }
  get mimetype() {
    return this.#readString(2);
  }
  get name() {
    return this.#readString(3);
  }
  #getDataOffsets() {
    let offset = FONT_INFO.OFFSET_STRINGS;
    const stringsLength = this.#view.getUint32(offset);
    offset += 4 + stringsLength;
    const systemFontInfoLength = this.#view.getUint32(offset);
    offset += 4 + systemFontInfoLength;
    const cssFontInfoLength = this.#view.getUint32(offset);
    offset += 4 + cssFontInfoLength;
    const length = this.#view.getUint32(offset);
    return {
      offset,
      length
    };
  }
  get data() {
    const {
      offset,
      length
    } = this.#getDataOffsets();
    return length === 0 ? undefined : new Uint8Array(this.#buffer, offset + 4, length);
  }
  clearData() {
    const {
      offset,
      length
    } = this.#getDataOffsets();
    if (length === 0) {
      return;
    }
    this.#view.setUint32(offset, 0);
    this.#buffer = new Uint8Array(this.#buffer, 0, offset + 4).slice().buffer;
    this.#view = new DataView(this.#buffer);
  }
  get cssFontInfo() {
    let offset = FONT_INFO.OFFSET_STRINGS;
    const stringsLength = this.#view.getUint32(offset);
    offset += 4 + stringsLength;
    const systemFontInfoLength = this.#view.getUint32(offset);
    offset += 4 + systemFontInfoLength;
    const cssFontInfoLength = this.#view.getUint32(offset);
    if (cssFontInfoLength === 0) {
      return null;
    }
    const cssFontInfoData = new Uint8Array(cssFontInfoLength);
    cssFontInfoData.set(new Uint8Array(this.#buffer, offset + 4, cssFontInfoLength));
    return new CssFontInfo(cssFontInfoData.buffer);
  }
  get systemFontInfo() {
    let offset = FONT_INFO.OFFSET_STRINGS;
    const stringsLength = this.#view.getUint32(offset);
    offset += 4 + stringsLength;
    const systemFontInfoLength = this.#view.getUint32(offset);
    if (systemFontInfoLength === 0) {
      return null;
    }
    const systemFontInfoData = new Uint8Array(systemFontInfoLength);
    systemFontInfoData.set(new Uint8Array(this.#buffer, offset + 4, systemFontInfoLength));
    return new SystemFontInfo(systemFontInfoData.buffer);
  }
}
class PatternInfo {
  constructor(buffer) {
    this.buffer = buffer;
    this.view = new DataView(buffer);
    this.data = new Uint8Array(buffer);
  }
  getIR() {
    const dataView = this.view;
    const kind = this.data[PATTERN_INFO.KIND];
    const hasBBox = !!this.data[PATTERN_INFO.HAS_BBOX];
    const hasBackground = !!this.data[PATTERN_INFO.HAS_BACKGROUND];
    const nCoord = dataView.getUint32(PATTERN_INFO.N_COORD, true);
    const nColor = dataView.getUint32(PATTERN_INFO.N_COLOR, true);
    const nStop = dataView.getUint32(PATTERN_INFO.N_STOP, true);
    let offset = 20;
    const coords = new Float32Array(this.buffer, offset, nCoord * 2);
    offset += nCoord * 8;
    const colors = new Uint8Array(this.buffer, offset, nColor * 4);
    offset += nColor * 4;
    const stops = [];
    for (let i = 0; i < nStop; ++i) {
      const p = dataView.getFloat32(offset, true);
      offset += 4;
      const rgb = dataView.getUint32(offset, true);
      offset += 4;
      stops.push([p, `#${rgb.toString(16).padStart(6, "0")}`]);
    }
    let bbox = null;
    if (hasBBox) {
      bbox = [];
      for (let i = 0; i < 4; ++i) {
        bbox.push(dataView.getFloat32(offset, true));
        offset += 4;
      }
    }
    let background = null;
    if (hasBackground) {
      background = new Uint8Array(this.buffer, offset, 3);
      offset += 3;
    }
    if (kind === 1) {
      return ["RadialAxial", "axial", bbox, stops, Array.from(coords.slice(0, 2)), Array.from(coords.slice(2, 4)), null, null];
    }
    if (kind === 2) {
      return ["RadialAxial", "radial", bbox, stops, [coords[0], coords[1]], [coords[3], coords[4]], coords[2], coords[5]];
    }
    if (kind === 3) {
      const shadingType = this.data[PATTERN_INFO.SHADING_TYPE];
      let bounds = null;
      if (coords.length > 0) {
        bounds = BBOX_INIT.slice();
        for (let i = 0, ii = coords.length; i < ii; i += 2) {
          Util.pointBoundingBox(coords[i], coords[i + 1], bounds);
        }
      }
      return ["Mesh", shadingType, coords, colors, nCoord, bounds, bbox, background];
    }
    throw new Error(`Unsupported pattern kind: ${kind}`);
  }
}
class FontPathInfo {
  #buffer;
  constructor(buffer) {
    this.#buffer = buffer;
  }
  get path() {
    if (FeatureTest.isFloat16ArraySupported) {
      return new Float16Array(this.#buffer);
    }
    return new Float32Array(this.#buffer);
  }
}

;// ./src/display/api_utils.js

function getUrlProp(val) {
  if (val instanceof URL) {
    return val;
  }
  if (typeof val === "string") {
    if (isNodeJS) {
      if (/^[a-z][a-z0-9\-+.]+:/i.test(val)) {
        return new URL(val);
      }
      const url = process.getBuiltinModule("url");
      return new URL(url.pathToFileURL(val));
    }
    const url = URL.parse(val, window.location);
    if (url) {
      return url;
    }
  }
  throw new Error("Invalid PDF url data: " + "either string or URL-object is expected in the url property.");
}
function getDataProp(val) {
  if (isNodeJS && typeof Buffer !== "undefined" && val instanceof Buffer) {
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  }
  if (val instanceof Uint8Array && val.byteLength === val.buffer.byteLength) {
    return val;
  }
  if (typeof val === "string") {
    return stringToBytes(val);
  }
  if (val instanceof ArrayBuffer || ArrayBuffer.isView(val) || typeof val === "object" && !isNaN(val?.length)) {
    return new Uint8Array(val);
  }
  throw new Error("Invalid PDF binary data: either TypedArray, " + "string, or array-like object is expected in the data property.");
}
function getFactoryUrlProp(val) {
  if (typeof val !== "string") {
    return null;
  }
  if (val.endsWith("/")) {
    return val;
  }
  throw new Error(`Invalid factory url: "${val}" must include trailing slash.`);
}
const isRefProxy = v => typeof v === "object" && Number.isInteger(v?.num) && v.num >= 0 && Number.isInteger(v?.gen) && v.gen >= 0;
const isNameProxy = v => typeof v === "object" && typeof v?.name === "string";
const isValidExplicitDest = _isValidExplicitDest.bind(null, isRefProxy, isNameProxy);
class LoopbackPort {
  #listeners = new Map();
  #deferred = Promise.resolve();
  postMessage(obj, transfer) {
    const event = {
      data: structuredClone(obj, transfer ? {
        transfer
      } : null)
    };
    this.#deferred.then(() => {
      for (const [listener] of this.#listeners) {
        listener.call(this, event);
      }
    });
  }
  addEventListener(name, listener, options = null) {
    let rmAbort = null;
    if (options?.signal instanceof AbortSignal) {
      const {
        signal
      } = options;
      if (signal.aborted) {
        warn("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const onAbort = () => this.removeEventListener(name, listener);
      rmAbort = () => signal.removeEventListener("abort", onAbort);
      signal.addEventListener("abort", onAbort);
    }
    this.#listeners.set(listener, rmAbort);
  }
  removeEventListener(name, listener) {
    const rmAbort = this.#listeners.get(listener);
    rmAbort?.();
    this.#listeners.delete(listener);
  }
  terminate() {
    for (const [, rmAbort] of this.#listeners) {
      rmAbort?.();
    }
    this.#listeners.clear();
  }
}

;// ./src/shared/message_handler.js

const CallbackKind = {
  DATA: 1,
  ERROR: 2
};
const StreamKind = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function onFn() {}
function wrapReason(ex) {
  if (ex instanceof AbortException || ex instanceof InvalidPDFException || ex instanceof PasswordException || ex instanceof ResponseException || ex instanceof UnknownErrorException) {
    return ex;
  }
  if (!(ex instanceof Error || typeof ex === "object" && ex !== null)) {
    unreachable('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
  }
  switch (ex.name) {
    case "AbortException":
      return new AbortException(ex.message);
    case "InvalidPDFException":
      return new InvalidPDFException(ex.message);
    case "PasswordException":
      return new PasswordException(ex.message, ex.code);
    case "ResponseException":
      return new ResponseException(ex.message, ex.status, ex.missing);
    case "UnknownErrorException":
      return new UnknownErrorException(ex.message, ex.details);
  }
  return new UnknownErrorException(ex.message, ex.toString());
}
class MessageHandler {
  #messageAC = new AbortController();
  constructor(sourceName, targetName, comObj) {
    this.sourceName = sourceName;
    this.targetName = targetName;
    this.comObj = comObj;
    this.callbackId = 1;
    this.streamId = 1;
    this.streamSinks = Object.create(null);
    this.streamControllers = Object.create(null);
    this.callbackCapabilities = Object.create(null);
    this.actionHandler = Object.create(null);
    comObj.addEventListener("message", this.#onMessage.bind(this), {
      signal: this.#messageAC.signal
    });
  }
  #onMessage({
    data
  }) {
    if (data.targetName !== this.sourceName) {
      return;
    }
    if (data.stream) {
      this.#processStreamMessage(data);
      return;
    }
    if (data.callback) {
      const callbackId = data.callbackId;
      const capability = this.callbackCapabilities[callbackId];
      if (!capability) {
        throw new Error(`Cannot resolve callback ${callbackId}`);
      }
      delete this.callbackCapabilities[callbackId];
      if (data.callback === CallbackKind.DATA) {
        capability.resolve(data.data);
      } else if (data.callback === CallbackKind.ERROR) {
        capability.reject(wrapReason(data.reason));
      } else {
        throw new Error("Unexpected callback case");
      }
      return;
    }
    const action = this.actionHandler[data.action];
    if (!action) {
      throw new Error(`Unknown action from worker: ${data.action}`);
    }
    if (data.callbackId) {
      const sourceName = this.sourceName,
        targetName = data.sourceName,
        comObj = this.comObj;
      Promise.try(action, data.data).then(function (result) {
        comObj.postMessage({
          sourceName,
          targetName,
          callback: CallbackKind.DATA,
          callbackId: data.callbackId,
          data: result
        });
      }, function (reason) {
        comObj.postMessage({
          sourceName,
          targetName,
          callback: CallbackKind.ERROR,
          callbackId: data.callbackId,
          reason: wrapReason(reason)
        });
      });
      return;
    }
    if (data.streamId) {
      this.#createStreamSink(data);
      return;
    }
    action(data.data);
  }
  on(actionName, handler) {
    const ah = this.actionHandler;
    if (ah[actionName]) {
      throw new Error(`There is already an actionName called "${actionName}"`);
    }
    ah[actionName] = handler;
  }
  send(actionName, data, transfers) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data
    }, transfers);
  }
  sendWithPromise(actionName, data, transfers) {
    const callbackId = this.callbackId++;
    const capability = Promise.withResolvers();
    this.callbackCapabilities[callbackId] = capability;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: actionName,
        callbackId,
        data
      }, transfers);
    } catch (ex) {
      capability.reject(ex);
    }
    return capability.promise;
  }
  sendWithStream(actionName, data, queueingStrategy, transfers) {
    const streamId = this.streamId++,
      sourceName = this.sourceName,
      targetName = this.targetName,
      comObj = this.comObj;
    return new ReadableStream({
      start: controller => {
        const startCapability = Promise.withResolvers();
        this.streamControllers[streamId] = {
          controller,
          startCall: startCapability,
          pullCall: null,
          cancelCall: null,
          isClosed: false
        };
        comObj.postMessage({
          sourceName,
          targetName,
          action: actionName,
          streamId,
          data,
          desiredSize: controller.desiredSize
        }, transfers);
        return startCapability.promise;
      },
      pull: controller => {
        const pullCapability = Promise.withResolvers();
        this.streamControllers[streamId].pullCall = pullCapability;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.PULL,
          streamId,
          desiredSize: controller.desiredSize
        });
        return pullCapability.promise;
      },
      cancel: reason => {
        assert(reason instanceof Error, "cancel must have a valid reason");
        const cancelCapability = Promise.withResolvers();
        this.streamControllers[streamId].cancelCall = cancelCapability;
        this.streamControllers[streamId].isClosed = true;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.CANCEL,
          streamId,
          reason: wrapReason(reason)
        });
        return cancelCapability.promise;
      }
    }, queueingStrategy);
  }
  #createStreamSink(data) {
    const streamId = data.streamId,
      sourceName = this.sourceName,
      targetName = data.sourceName,
      comObj = this.comObj;
    const self = this,
      action = this.actionHandler[data.action];
    const streamSink = {
      enqueue(chunk, size = 1, transfers) {
        if (this.isCancelled) {
          return;
        }
        const lastDesiredSize = this.desiredSize;
        this.desiredSize -= size;
        if (lastDesiredSize > 0 && this.desiredSize <= 0) {
          this.sinkCapability = Promise.withResolvers();
          this.ready = this.sinkCapability.promise;
        }
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.ENQUEUE,
          streamId,
          chunk
        }, transfers);
      },
      close() {
        if (this.isCancelled) {
          return;
        }
        this.isCancelled = true;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.CLOSE,
          streamId
        });
        delete self.streamSinks[streamId];
      },
      error(reason) {
        assert(reason instanceof Error, "error must have a valid reason");
        if (this.isCancelled) {
          return;
        }
        this.isCancelled = true;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.ERROR,
          streamId,
          reason: wrapReason(reason)
        });
      },
      sinkCapability: Promise.withResolvers(),
      onPull: null,
      onCancel: null,
      isCancelled: false,
      desiredSize: data.desiredSize,
      ready: null
    };
    streamSink.sinkCapability.resolve();
    streamSink.ready = streamSink.sinkCapability.promise;
    this.streamSinks[streamId] = streamSink;
    Promise.try(action, data.data, streamSink).then(function () {
      comObj.postMessage({
        sourceName,
        targetName,
        stream: StreamKind.START_COMPLETE,
        streamId,
        success: true
      });
    }, function (reason) {
      comObj.postMessage({
        sourceName,
        targetName,
        stream: StreamKind.START_COMPLETE,
        streamId,
        reason: wrapReason(reason)
      });
    });
  }
  #processStreamMessage(data) {
    const streamId = data.streamId,
      sourceName = this.sourceName,
      targetName = data.sourceName,
      comObj = this.comObj;
    const streamController = this.streamControllers[streamId],
      streamSink = this.streamSinks[streamId];
    switch (data.stream) {
      case StreamKind.START_COMPLETE:
        if (data.success) {
          streamController.startCall.resolve();
        } else {
          streamController.startCall.reject(wrapReason(data.reason));
        }
        break;
      case StreamKind.PULL_COMPLETE:
        if (data.success) {
          streamController.pullCall.resolve();
        } else {
          streamController.pullCall.reject(wrapReason(data.reason));
        }
        break;
      case StreamKind.PULL:
        if (!streamSink) {
          comObj.postMessage({
            sourceName,
            targetName,
            stream: StreamKind.PULL_COMPLETE,
            streamId,
            success: true
          });
          break;
        }
        if (streamSink.desiredSize <= 0 && data.desiredSize > 0) {
          streamSink.sinkCapability.resolve();
        }
        streamSink.desiredSize = data.desiredSize;
        Promise.try(streamSink.onPull || onFn).then(function () {
          comObj.postMessage({
            sourceName,
            targetName,
            stream: StreamKind.PULL_COMPLETE,
            streamId,
            success: true
          });
        }, function (reason) {
          comObj.postMessage({
            sourceName,
            targetName,
            stream: StreamKind.PULL_COMPLETE,
            streamId,
            reason: wrapReason(reason)
          });
        });
        break;
      case StreamKind.ENQUEUE:
        assert(streamController, "enqueue should have stream controller");
        if (streamController.isClosed) {
          break;
        }
        streamController.controller.enqueue(data.chunk);
        break;
      case StreamKind.CLOSE:
        assert(streamController, "close should have stream controller");
        if (streamController.isClosed) {
          break;
        }
        streamController.isClosed = true;
        streamController.controller.close();
        this.#deleteStreamController(streamController, streamId);
        break;
      case StreamKind.ERROR:
        assert(streamController, "error should have stream controller");
        streamController.controller.error(wrapReason(data.reason));
        this.#deleteStreamController(streamController, streamId);
        break;
      case StreamKind.CANCEL_COMPLETE:
        if (data.success) {
          streamController.cancelCall.resolve();
        } else {
          streamController.cancelCall.reject(wrapReason(data.reason));
        }
        this.#deleteStreamController(streamController, streamId);
        break;
      case StreamKind.CANCEL:
        if (!streamSink) {
          break;
        }
        const dataReason = wrapReason(data.reason);
        Promise.try(streamSink.onCancel || onFn, dataReason).then(function () {
          comObj.postMessage({
            sourceName,
            targetName,
            stream: StreamKind.CANCEL_COMPLETE,
            streamId,
            success: true
          });
        }, function (reason) {
          comObj.postMessage({
            sourceName,
            targetName,
            stream: StreamKind.CANCEL_COMPLETE,
            streamId,
            reason: wrapReason(reason)
          });
        });
        streamSink.sinkCapability.reject(dataReason);
        streamSink.isCancelled = true;
        delete this.streamSinks[streamId];
        break;
      default:
        throw new Error("Unexpected stream case");
    }
  }
  async #deleteStreamController(streamController, streamId) {
    await Promise.allSettled([streamController.startCall?.promise, streamController.pullCall?.promise, streamController.cancelCall?.promise]);
    delete this.streamControllers[streamId];
  }
  destroy() {
    this.#messageAC?.abort();
    this.#messageAC = null;
  }
}

;// ./src/display/binary_data_factory.js


class BaseBinaryDataFactory {
  #errorStr = Object.freeze({
    cMapUrl: "CMap",
    standardFontDataUrl: "font",
    wasmUrl: "wasm"
  });
  constructor({
    cMapUrl = null,
    standardFontDataUrl = null,
    wasmUrl = null
  }) {
    this.cMapUrl = cMapUrl;
    this.standardFontDataUrl = standardFontDataUrl;
    this.wasmUrl = wasmUrl;
  }
  async fetch({
    kind,
    filename
  }) {
    switch (kind) {
      case "cMapUrl":
      case "standardFontDataUrl":
      case "wasmUrl":
        break;
      default:
        unreachable(`Not implemented: ${kind}`);
    }
    const baseUrl = this[kind];
    if (!baseUrl) {
      throw new Error(`Ensure that the \`${kind}\` API parameter is provided.`);
    }
    const url = `${baseUrl}${filename}`;
    return this._fetch(url, kind).catch(reason => {
      throw new Error(`Unable to load ${this.#errorStr[kind]} data at: ${url}`);
    });
  }
  async _fetch(url, kind) {
    unreachable("Abstract method `_fetch` called.");
  }
}
class DOMBinaryDataFactory extends BaseBinaryDataFactory {
  async _fetch(url, kind) {
    const type = kind === "cMapUrl" && !url.endsWith(".bcmap") ? "text" : "bytes";
    const data = await fetchData(url, type);
    return data instanceof Uint8Array ? data : stringToBytes(data);
  }
}

;// ./src/display/canvas_factory.js

class BaseCanvasFactory {
  #enableHWA = false;
  constructor({
    enableHWA = false
  }) {
    this.#enableHWA = enableHWA;
  }
  create(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Invalid canvas size");
    }
    const canvas = this._createCanvas(width, height);
    return {
      canvas,
      context: canvas.getContext("2d", {
        willReadFrequently: !this.#enableHWA
      })
    };
  }
  reset({
    canvas
  }, width, height) {
    if (!canvas) {
      throw new Error("Canvas is not specified");
    }
    if (width <= 0 || height <= 0) {
      throw new Error("Invalid canvas size");
    }
    canvas.width = width;
    canvas.height = height;
  }
  destroy(canvasAndContext) {
    const {
      canvas
    } = canvasAndContext;
    if (!canvas) {
      throw new Error("Canvas is not specified");
    }
    canvas.width = canvas.height = 0;
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  }
  _createCanvas(width, height) {
    unreachable("Abstract method `_createCanvas` called.");
  }
}
class DOMCanvasFactory extends BaseCanvasFactory {
  constructor({
    ownerDocument = globalThis.document,
    enableHWA = false
  }) {
    super({
      enableHWA
    });
    this._document = ownerDocument;
  }
  _createCanvas(width, height) {
    const canvas = this._document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
}

;// ./src/display/filter_factory.js


class BaseFilterFactory {
  addFilter(maps) {
    return "none";
  }
  addHCMFilter(fgColor, bgColor) {
    return "none";
  }
  addAlphaFilter(map) {
    return "none";
  }
  addLuminosityFilter(map) {
    return "none";
  }
  addKnockoutFilter(alpha = 0) {
    return "none";
  }
  addHighlightHCMFilter(filterName, fgColor, bgColor, newFgColor, newBgColor) {
    return "none";
  }
  addSelectionHCMFilter(fgColor, bgColor) {
    return "none";
  }
  addSelectionFilter() {
    return "none";
  }
  createSelectionStyle(pageColors = null) {
    return null;
  }
  destroy(keepHCM = false) {}
}
class DOMFilterFactory extends BaseFilterFactory {
  #baseUrl;
  #_cache;
  #_defs;
  #docId;
  #document;
  #_hcmCache;
  #id = 0;
  constructor({
    docId,
    ownerDocument = globalThis.document
  }) {
    super();
    this.#docId = docId;
    this.#document = ownerDocument;
  }
  get #cache() {
    return this.#_cache ||= new Map();
  }
  get #hcmCache() {
    return this.#_hcmCache ||= new Map();
  }
  get #defs() {
    if (!this.#_defs) {
      const div = this.#document.createElement("div");
      const {
        style
      } = div;
      style.colorScheme = "only light";
      style.visibility = "hidden";
      style.contain = "strict";
      style.width = style.height = 0;
      style.position = "absolute";
      style.top = style.left = 0;
      style.zIndex = -1;
      const svg = this.#document.createElementNS(SVG_NS, "svg");
      svg.setAttribute("width", 0);
      svg.setAttribute("height", 0);
      this.#_defs = this.#document.createElementNS(SVG_NS, "defs");
      div.append(svg);
      svg.append(this.#_defs);
      this.#document.body.append(div);
    }
    return this.#_defs;
  }
  #createTables(maps) {
    if (maps.length === 1) {
      const mapR = maps[0];
      const buffer = new Array(256);
      for (let i = 0; i < 256; i++) {
        buffer[i] = mapR[i] / 255;
      }
      const table = buffer.join(",");
      return [table, table, table];
    }
    const [mapR, mapG, mapB] = maps;
    const bufferR = new Array(256);
    const bufferG = new Array(256);
    const bufferB = new Array(256);
    for (let i = 0; i < 256; i++) {
      bufferR[i] = mapR[i] / 255;
      bufferG[i] = mapG[i] / 255;
      bufferB[i] = mapB[i] / 255;
    }
    return [bufferR.join(","), bufferG.join(","), bufferB.join(",")];
  }
  #createUrl(id) {
    if (this.#baseUrl === undefined) {
      this.#baseUrl = "";
      const url = this.#document.URL;
      if (url !== this.#document.baseURI) {
        if (isDataScheme(url)) {
          warn('#createUrl: ignore "data:"-URL for performance reasons.');
        } else {
          this.#baseUrl = updateUrlHash(url, "");
        }
      }
    }
    return `url(${this.#baseUrl}#${id})`;
  }
  addFilter(maps) {
    if (!maps) {
      return "none";
    }
    let value = this.#cache.get(maps);
    if (value) {
      return value;
    }
    const [tableR, tableG, tableB] = this.#createTables(maps);
    const key = maps.length === 1 ? tableR : `${tableR}${tableG}${tableB}`;
    value = this.#cache.get(key);
    if (value) {
      this.#cache.set(maps, value);
      return value;
    }
    const id = `g_${this.#docId}_transfer_map_${this.#id++}`;
    const url = this.#createUrl(id);
    this.#cache.set(maps, url);
    this.#cache.set(key, url);
    const filter = this.#createFilter(id);
    this.#addTransferMapConversion(tableR, tableG, tableB, filter);
    return url;
  }
  addHCMFilter(fgColor, bgColor) {
    const key = `${fgColor}-${bgColor}`;
    const filterName = "base";
    let info = this.#hcmCache.get(filterName);
    if (info?.key === key) {
      return info.url;
    }
    if (info) {
      info.filter?.remove();
      info.key = key;
      info.url = "none";
      info.filter = null;
    } else {
      info = {
        key,
        url: "none",
        filter: null
      };
      this.#hcmCache.set(filterName, info);
    }
    if (!fgColor || !bgColor) {
      return info.url;
    }
    const fgRGB = this.#getRGB(fgColor);
    fgColor = Util.makeHexColor(...fgRGB);
    const bgRGB = this.#getRGB(bgColor);
    bgColor = Util.makeHexColor(...bgRGB);
    this.#defs.style.color = "";
    if (fgColor === "#000000" && bgColor === "#ffffff" || fgColor === bgColor) {
      return info.url;
    }
    const map = new Array(256);
    for (let i = 0; i <= 255; i++) {
      const x = i / 255;
      map[i] = x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
    }
    const table = map.join(",");
    const id = `g_${this.#docId}_hcm_filter`;
    const filter = info.filter = this.#createFilter(id);
    this.#addTransferMapConversion(table, table, table, filter);
    this.#addGrayConversion(filter);
    const getSteps = (c, n) => {
      const start = fgRGB[c] / 255;
      const end = bgRGB[c] / 255;
      const arr = new Array(n + 1);
      for (let i = 0; i <= n; i++) {
        arr[i] = start + i / n * (end - start);
      }
      return arr.join(",");
    };
    this.#addTransferMapConversion(getSteps(0, 5), getSteps(1, 5), getSteps(2, 5), filter);
    info.url = this.#createUrl(id);
    return info.url;
  }
  addSelectionHCMFilter(fgColor, bgColor) {
    return this.addHighlightHCMFilter("selection", fgColor, bgColor, "HighlightText", "Highlight");
  }
  addSelectionFilter() {
    return this.addHighlightHCMFilter("selection_default", "black", "white", "HighlightText", "Highlight");
  }
  createSelectionStyle(pageColors = null) {
    const filter = pageColors ? this.addSelectionHCMFilter(pageColors.foreground, pageColors.background) : this.addSelectionFilter();
    if (filter === "none" || !FeatureTest.platform.isFirefox) {
      return null;
    }
    return {
      "backdrop-filter": filter,
      "background-color": "transparent"
    };
  }
  addAlphaFilter(map) {
    let value = this.#cache.get(map);
    if (value) {
      return value;
    }
    const [tableA] = this.#createTables([map]);
    const key = `alpha_${tableA}`;
    value = this.#cache.get(key);
    if (value) {
      this.#cache.set(map, value);
      return value;
    }
    const id = `g_${this.#docId}_alpha_map_${this.#id++}`;
    const url = this.#createUrl(id);
    this.#cache.set(map, url);
    this.#cache.set(key, url);
    const filter = this.#createFilter(id);
    this.#addTransferMapAlphaConversion(tableA, filter);
    return url;
  }
  addLuminosityFilter(map) {
    let value = this.#cache.get(map || "luminosity");
    if (value) {
      return value;
    }
    let tableA, key;
    if (map) {
      [tableA] = this.#createTables([map]);
      key = `luminosity_${tableA}`;
    } else {
      key = "luminosity";
    }
    value = this.#cache.get(key);
    if (value) {
      this.#cache.set(map, value);
      return value;
    }
    const id = `g_${this.#docId}_luminosity_map_${this.#id++}`;
    const url = this.#createUrl(id);
    this.#cache.set(map, url);
    this.#cache.set(key, url);
    const filter = this.#createFilter(id);
    this.#addLuminosityConversion(filter);
    if (map) {
      this.#addTransferMapAlphaConversion(tableA, filter);
    }
    return url;
  }
  addKnockoutFilter(alpha = 0) {
    const slope = alpha > 0 ? Math.min(1 / alpha, 1e6) : 1e6;
    const key = `knockout_${slope}`;
    const value = this.#cache.get(key);
    if (value) {
      return value;
    }
    const id = `g_${this.#docId}_knockout_filter_${this.#id++}`;
    const url = this.#createUrl(id);
    this.#cache.set(key, url);
    const filter = this.#createFilter(id);
    const feComponentTransfer = this.#document.createElementNS(SVG_NS, "feComponentTransfer");
    filter.append(feComponentTransfer);
    const feFuncA = this.#document.createElementNS(SVG_NS, "feFuncA");
    feFuncA.setAttribute("type", "linear");
    feFuncA.setAttribute("slope", `${slope}`);
    feFuncA.setAttribute("intercept", "0");
    feComponentTransfer.append(feFuncA);
    return url;
  }
  addHighlightHCMFilter(filterName, fgColor, bgColor, newFgColor, newBgColor) {
    const key = `${fgColor}-${bgColor}-${newFgColor}-${newBgColor}`;
    let info = this.#hcmCache.get(filterName);
    if (info?.key === key) {
      return info.url;
    }
    if (info) {
      info.filter?.remove();
      info.key = key;
      info.url = "none";
      info.filter = null;
    } else {
      info = {
        key,
        url: "none",
        filter: null
      };
      this.#hcmCache.set(filterName, info);
    }
    if (!fgColor || !bgColor) {
      return info.url;
    }
    const [fgRGB, bgRGB] = [fgColor, bgColor].map(this.#getRGB.bind(this));
    let fgGray = Math.round(0.2126 * fgRGB[0] + 0.7152 * fgRGB[1] + 0.0722 * fgRGB[2]);
    let bgGray = Math.round(0.2126 * bgRGB[0] + 0.7152 * bgRGB[1] + 0.0722 * bgRGB[2]);
    let [newFgRGB, newBgRGB] = [newFgColor, newBgColor].map(this.#getOpaqueTextColor.bind(this));
    if (bgGray < fgGray) {
      [fgGray, bgGray, newFgRGB, newBgRGB] = [bgGray, fgGray, newBgRGB, newFgRGB];
    }
    this.#defs.style.color = "";
    const getSteps = (fg, bg, n) => {
      const arr = new Array(256);
      const step = (bgGray - fgGray) / n;
      const newStart = fg / 255;
      const newStep = (bg - fg) / (255 * n);
      let prev = 0;
      for (let i = 0; i <= n; i++) {
        const k = Math.round(fgGray + i * step);
        const value = newStart + i * newStep;
        for (let j = prev; j <= k; j++) {
          arr[j] = value;
        }
        prev = k + 1;
      }
      for (let i = prev; i < 256; i++) {
        arr[i] = arr[prev - 1];
      }
      return arr.join(",");
    };
    const id = `g_${this.#docId}_hcm_${filterName}_filter`;
    const filter = info.filter = this.#createFilter(id);
    this.#addGrayConversion(filter);
    this.#addTransferMapConversion(getSteps(newFgRGB[0], newBgRGB[0], 5), getSteps(newFgRGB[1], newBgRGB[1], 5), getSteps(newFgRGB[2], newBgRGB[2], 5), filter);
    info.url = this.#createUrl(id);
    return info.url;
  }
  destroy(keepHCM = false) {
    if (keepHCM && this.#_hcmCache?.size) {
      return;
    }
    this.#_defs?.parentNode.parentNode.remove();
    this.#_defs = null;
    this.#_cache?.clear();
    this.#_cache = null;
    this.#_hcmCache?.clear();
    this.#_hcmCache = null;
    this.#id = 0;
  }
  #addLuminosityConversion(filter) {
    const feColorMatrix = this.#document.createElementNS(SVG_NS, "feColorMatrix");
    feColorMatrix.setAttribute("type", "matrix");
    feColorMatrix.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0");
    filter.append(feColorMatrix);
  }
  #addGrayConversion(filter) {
    const feColorMatrix = this.#document.createElementNS(SVG_NS, "feColorMatrix");
    feColorMatrix.setAttribute("type", "matrix");
    feColorMatrix.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0");
    filter.append(feColorMatrix);
  }
  #createFilter(id) {
    const filter = this.#document.createElementNS(SVG_NS, "filter");
    filter.setAttribute("color-interpolation-filters", "sRGB");
    filter.setAttribute("id", id);
    this.#defs.append(filter);
    return filter;
  }
  #appendFeFunc(feComponentTransfer, func, table) {
    const feFunc = this.#document.createElementNS(SVG_NS, func);
    feFunc.setAttribute("type", "discrete");
    feFunc.setAttribute("tableValues", table);
    feComponentTransfer.append(feFunc);
  }
  #addTransferMapConversion(rTable, gTable, bTable, filter) {
    const feComponentTransfer = this.#document.createElementNS(SVG_NS, "feComponentTransfer");
    filter.append(feComponentTransfer);
    this.#appendFeFunc(feComponentTransfer, "feFuncR", rTable);
    this.#appendFeFunc(feComponentTransfer, "feFuncG", gTable);
    this.#appendFeFunc(feComponentTransfer, "feFuncB", bTable);
  }
  #addTransferMapAlphaConversion(aTable, filter) {
    const feComponentTransfer = this.#document.createElementNS(SVG_NS, "feComponentTransfer");
    filter.append(feComponentTransfer);
    this.#appendFeFunc(feComponentTransfer, "feFuncA", aTable);
  }
  #getRGB(color) {
    this.#defs.style.color = color;
    return getRGB(getComputedStyle(this.#defs).getPropertyValue("color"));
  }
  #getRGBA(color) {
    this.#defs.style.color = color;
    return getRGBA(getComputedStyle(this.#defs).getPropertyValue("color"));
  }
  #getOpaqueTextColor(color) {
    const [r, g, b, alpha] = this.#getRGBA(color);
    if (alpha === 1) {
      return [r, g, b];
    }
    const [canvasR, canvasG, canvasB] = this.#getRGB("Canvas");
    return [blend(r, canvasR, alpha), blend(g, canvasG, alpha), blend(b, canvasB, alpha)];
  }
}
function blend(fg, bg, alpha) {
  return Math.round(alpha * fg + (1 - alpha) * bg);
}

;// ./src/display/node_utils.js




if (isNodeJS) {
  warn("Please use the `legacy` build in Node.js environments.");
}
async function node_utils_fetchData(url) {
  const fs = process.getBuiltinModule("fs/promises");
  const data = await fs.readFile(url);
  return new Uint8Array(data);
}
class NodeFilterFactory extends BaseFilterFactory {}
class NodeCanvasFactory extends BaseCanvasFactory {
  _createCanvas(width, height) {
    const require = process.getBuiltinModule("module").createRequire(import.meta.url);
    const canvas = require("@napi-rs/canvas");
    return canvas.createCanvas(width, height);
  }
}
class NodeBinaryDataFactory extends BaseBinaryDataFactory {
  async _fetch(url, kind) {
    return node_utils_fetchData(url);
  }
}

;// ./src/shared/image_utils.js
/* unused harmony import specifier */ var image_utils_ImageKind;
/* unused harmony import specifier */ var image_utils_FeatureTest;

function convertToRGBA(params) {
  switch (params.kind) {
    case image_utils_ImageKind.GRAYSCALE_1BPP:
      return convertBlackAndWhiteToRGBA(params);
    case image_utils_ImageKind.RGB_24BPP:
      return convertRGBToRGBA(params);
  }
  return null;
}
function convertBlackAndWhiteToRGBA({
  src,
  srcPos = 0,
  dest,
  width,
  height,
  nonBlackColor = 0xffffffff,
  inverseDecode = false
}) {
  const black = FeatureTest.isLittleEndian ? 0xff000000 : 0x000000ff;
  const [zeroMapping, oneMapping] = inverseDecode ? [nonBlackColor, black] : [black, nonBlackColor];
  const widthInSource = width >> 3;
  const widthRemainder = width & 7;
  const xorMask = zeroMapping ^ oneMapping;
  const srcLength = src.length;
  dest = new Uint32Array(dest.buffer);
  let destPos = 0;
  for (let i = 0; i < height; ++i) {
    for (const max = srcPos + widthInSource; srcPos < max; ++srcPos, destPos += 8) {
      const elem = src[srcPos];
      dest[destPos] = zeroMapping ^ -(elem >> 7 & 1) & xorMask;
      dest[destPos + 1] = zeroMapping ^ -(elem >> 6 & 1) & xorMask;
      dest[destPos + 2] = zeroMapping ^ -(elem >> 5 & 1) & xorMask;
      dest[destPos + 3] = zeroMapping ^ -(elem >> 4 & 1) & xorMask;
      dest[destPos + 4] = zeroMapping ^ -(elem >> 3 & 1) & xorMask;
      dest[destPos + 5] = zeroMapping ^ -(elem >> 2 & 1) & xorMask;
      dest[destPos + 6] = zeroMapping ^ -(elem >> 1 & 1) & xorMask;
      dest[destPos + 7] = zeroMapping ^ -(elem & 1) & xorMask;
    }
    if (widthRemainder === 0) {
      continue;
    }
    const elem = srcPos < srcLength ? src[srcPos++] : 255;
    for (let j = 0; j < widthRemainder; ++j, ++destPos) {
      dest[destPos] = zeroMapping ^ -(elem >> 7 - j & 1) & xorMask;
    }
  }
  return {
    srcPos,
    destPos
  };
}
function convertRGBToRGBA({
  src,
  srcPos = 0,
  dest,
  destPos = 0,
  width,
  height
}) {
  let i = 0;
  const len = width * height * 3;
  const len32 = len >> 2;
  const src32 = new Uint32Array(src.buffer, srcPos, len32);
  const alphaMask = FeatureTest.isLittleEndian ? 0xff000000 : 0xff;
  if (FeatureTest.isLittleEndian) {
    for (; i < len32 - 2; i += 3, destPos += 4) {
      const s1 = src32[i],
        s2 = src32[i + 1],
        s3 = src32[i + 2];
      dest[destPos] = s1 | alphaMask;
      dest[destPos + 1] = s1 >>> 24 | s2 << 8 | alphaMask;
      dest[destPos + 2] = s2 >>> 16 | s3 << 16 | alphaMask;
      dest[destPos + 3] = s3 >>> 8 | alphaMask;
    }
    for (let j = i * 4, jj = srcPos + len; j < jj; j += 3) {
      dest[destPos++] = src[j] | src[j + 1] << 8 | src[j + 2] << 16 | alphaMask;
    }
  } else {
    for (; i < len32 - 2; i += 3, destPos += 4) {
      const s1 = src32[i],
        s2 = src32[i + 1],
        s3 = src32[i + 2];
      dest[destPos] = s1 | alphaMask;
      dest[destPos + 1] = s1 << 24 | s2 >>> 8 | alphaMask;
      dest[destPos + 2] = s2 << 16 | s3 >>> 16 | alphaMask;
      dest[destPos + 3] = s3 << 8 | alphaMask;
    }
    for (let j = i * 4, jj = srcPos + len; j < jj; j += 3) {
      dest[destPos++] = src[j] << 24 | src[j + 1] << 16 | src[j + 2] << 8 | alphaMask;
    }
  }
  return {
    srcPos: srcPos + len,
    destPos
  };
}
function grayToRGBA(src, dest) {
  if (image_utils_FeatureTest.isLittleEndian) {
    for (let i = 0, ii = src.length; i < ii; i++) {
      dest[i] = src[i] * 0x10101 | 0xff000000;
    }
  } else {
    for (let i = 0, ii = src.length; i < ii; i++) {
      dest[i] = src[i] * 0x1010100 | 0x000000ff;
    }
  }
}

;// ./src/display/webgpu.js
const MESH_WGSL = `
struct Uniforms {
  offsetX      : f32,
  offsetY      : f32,
  scaleX       : f32,
  scaleY       : f32,
  paddedWidth  : f32,
  paddedHeight : f32,
  borderSize   : f32,
  _pad         : f32,
};

@group(0) @binding(0) var<uniform> u : Uniforms;

struct VertexInput {
  @location(0) position : vec2<f32>,
  @location(1) color    : vec4<f32>,
};

struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0)       color    : vec3<f32>,
};

@vertex
fn vs_main(in : VertexInput) -> VertexOutput {
  var out : VertexOutput;
  let cx = (in.position.x + u.offsetX) * u.scaleX;
  let cy = (in.position.y + u.offsetY) * u.scaleY;
  out.position = vec4<f32>(
    ((cx + u.borderSize) / u.paddedWidth) * 2.0 - 1.0,
    1.0 - ((cy + u.borderSize) / u.paddedHeight) * 2.0,
    0.0,
    1.0
  );
  out.color = in.color.rgb;
  return out;
}

@fragment
fn fs_main(in : VertexOutput) -> @location(0) vec4<f32> {
  return vec4<f32>(in.color, 1.0);
}
`;
class WebGPU {
  #initPromise = null;
  #device = null;
  #meshPipeline = null;
  #preferredFormat = null;
  async #initGPU() {
    if (!globalThis.navigator?.gpu) {
      return false;
    }
    try {
      const adapter = await navigator.gpu.requestAdapter();
      if (!adapter) {
        return false;
      }
      this.#preferredFormat = navigator.gpu.getPreferredCanvasFormat();
      this.#device = await adapter.requestDevice();
      return true;
    } catch {
      return false;
    }
  }
  init() {
    return this.#initPromise ||= this.#initGPU();
  }
  get isReady() {
    return this.#device !== null;
  }
  loadMeshShader() {
    if (!this.#device || this.#meshPipeline) {
      return;
    }
    const shaderModule = this.#device.createShaderModule({
      code: MESH_WGSL
    });
    this.#meshPipeline = this.#device.createRenderPipeline({
      layout: "auto",
      vertex: {
        module: shaderModule,
        entryPoint: "vs_main",
        buffers: [{
          arrayStride: 2 * 4,
          attributes: [{
            shaderLocation: 0,
            offset: 0,
            format: "float32x2"
          }]
        }, {
          arrayStride: 4,
          attributes: [{
            shaderLocation: 1,
            offset: 0,
            format: "unorm8x4"
          }]
        }]
      },
      fragment: {
        module: shaderModule,
        entryPoint: "fs_main",
        targets: [{
          format: this.#preferredFormat
        }]
      },
      primitive: {
        topology: "triangle-list"
      }
    });
  }
  draw(posData, colData, vertexCount, context, backgroundColor, paddedWidth, paddedHeight, borderSize) {
    this.loadMeshShader();
    const device = this.#device;
    const {
      offsetX,
      offsetY,
      scaleX,
      scaleY
    } = context;
    const posBuffer = device.createBuffer({
      size: Math.max(posData.byteLength, 4),
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });
    if (posData.byteLength > 0) {
      device.queue.writeBuffer(posBuffer, 0, posData);
    }
    const colBuffer = device.createBuffer({
      size: Math.max(colData.byteLength, 4),
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });
    if (colData.byteLength > 0) {
      device.queue.writeBuffer(colBuffer, 0, colData);
    }
    const uniformBuffer = device.createBuffer({
      size: 8 * 4,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });
    device.queue.writeBuffer(uniformBuffer, 0, new Float32Array([offsetX, offsetY, scaleX, scaleY, paddedWidth, paddedHeight, borderSize, 0]));
    const bindGroup = device.createBindGroup({
      layout: this.#meshPipeline.getBindGroupLayout(0),
      entries: [{
        binding: 0,
        resource: {
          buffer: uniformBuffer
        }
      }]
    });
    const offscreen = new OffscreenCanvas(paddedWidth, paddedHeight);
    const gpuCtx = offscreen.getContext("webgpu");
    gpuCtx.configure({
      device,
      format: this.#preferredFormat,
      alphaMode: backgroundColor ? "opaque" : "premultiplied"
    });
    const clearValue = backgroundColor ? {
      r: backgroundColor[0] / 255,
      g: backgroundColor[1] / 255,
      b: backgroundColor[2] / 255,
      a: 1
    } : {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    };
    const commandEncoder = device.createCommandEncoder();
    const renderPass = commandEncoder.beginRenderPass({
      colorAttachments: [{
        view: gpuCtx.getCurrentTexture().createView(),
        clearValue,
        loadOp: "clear",
        storeOp: "store"
      }]
    });
    if (vertexCount > 0) {
      renderPass.setPipeline(this.#meshPipeline);
      renderPass.setBindGroup(0, bindGroup);
      renderPass.setVertexBuffer(0, posBuffer);
      renderPass.setVertexBuffer(1, colBuffer);
      renderPass.draw(vertexCount);
    }
    renderPass.end();
    device.queue.submit([commandEncoder.finish()]);
    posBuffer.destroy();
    colBuffer.destroy();
    uniformBuffer.destroy();
    return offscreen.transferToImageBitmap();
  }
}
const _webGPU = new WebGPU();
function initGPU() {
  return _webGPU.init();
}
function isGPUReady() {
  return _webGPU.isReady;
}
function loadMeshShader() {
  _webGPU.loadMeshShader();
}
function drawMeshWithGPU(posData, colData, vertexCount, context, backgroundColor, paddedWidth, paddedHeight, borderSize) {
  return _webGPU.draw(posData, colData, vertexCount, context, backgroundColor, paddedWidth, paddedHeight, borderSize);
}

;// ./src/display/pattern_helper.js




const PathType = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function applyBoundingBox(ctx, bbox) {
  if (!bbox) {
    return;
  }
  const width = bbox[2] - bbox[0];
  const height = bbox[3] - bbox[1];
  const region = new Path2D();
  region.rect(bbox[0], bbox[1], width, height);
  ctx.clip(region);
}
class BaseShadingPattern {
  isModifyingCurrentTransform() {
    return false;
  }
  getPattern() {
    unreachable("Abstract method `getPattern` called.");
  }
}
class RadialAxialShadingPattern extends BaseShadingPattern {
  constructor(IR) {
    super();
    this._type = IR[1];
    this._bbox = IR[2];
    this._colorStops = IR[3];
    this._p0 = IR[4];
    this._p1 = IR[5];
    this._r0 = IR[6];
    this._r1 = IR[7];
    this.matrix = null;
  }
  isOriginBased() {
    return this._p0[0] === 0 && this._p0[1] === 0 && (!this.isRadial() || this._p1[0] === 0 && this._p1[1] === 0);
  }
  isRadial() {
    return this._type === "radial";
  }
  areConic() {
    if (!this.isRadial()) {
      return false;
    }
    const dist = Math.hypot(this._p0[0] - this._p1[0], this._p0[1] - this._p1[1]);
    return dist + this._r1 > this._r0 && dist + this._r0 > this._r1;
  }
  _createGradient(ctx, transform = null) {
    let grad;
    let firstPoint = this._p0;
    let secondPoint = this._p1;
    if (transform) {
      firstPoint = firstPoint.slice();
      secondPoint = secondPoint.slice();
      Util.applyTransform(firstPoint, transform);
      Util.applyTransform(secondPoint, transform);
    }
    if (this._type === "axial") {
      grad = ctx.createLinearGradient(firstPoint[0], firstPoint[1], secondPoint[0], secondPoint[1]);
    } else if (this._type === "radial") {
      let r0 = this._r0;
      let r1 = this._r1;
      if (transform) {
        const scale = new Float32Array(2);
        Util.singularValueDecompose2dScale(transform, scale);
        r0 *= scale[0];
        r1 *= scale[0];
      }
      grad = ctx.createRadialGradient(firstPoint[0], firstPoint[1], r0, secondPoint[0], secondPoint[1], r1);
    }
    for (const colorStop of this._colorStops) {
      grad.addColorStop(colorStop[0], colorStop[1]);
    }
    return grad;
  }
  _createReversedGradient(ctx, transform = null) {
    let firstPoint = this._p1;
    let secondPoint = this._p0;
    if (transform) {
      firstPoint = firstPoint.slice();
      secondPoint = secondPoint.slice();
      Util.applyTransform(firstPoint, transform);
      Util.applyTransform(secondPoint, transform);
    }
    let r0 = this._r1;
    let r1 = this._r0;
    if (transform) {
      const scale = new Float32Array(2);
      Util.singularValueDecompose2dScale(transform, scale);
      r0 *= scale[0];
      r1 *= scale[0];
    }
    const grad = ctx.createRadialGradient(firstPoint[0], firstPoint[1], r0, secondPoint[0], secondPoint[1], r1);
    const reversedStops = this._colorStops.map(([t, c]) => [1 - t, c]).reverse();
    for (const [t, c] of reversedStops) {
      grad.addColorStop(t, c);
    }
    return grad;
  }
  getPattern(ctx, owner, inverse, pathType) {
    let pattern;
    if (pathType === PathType.STROKE || pathType === PathType.FILL) {
      if (this.isOriginBased()) {
        let transf = Util.transform(inverse, owner.baseTransform);
        if (this.matrix) {
          transf = Util.transform(transf, this.matrix);
        }
        const precision = 1e-3;
        const n1 = Math.hypot(transf[0], transf[1]);
        const n2 = Math.hypot(transf[2], transf[3]);
        const ps = (transf[0] * transf[2] + transf[1] * transf[3]) / (n1 * n2);
        if (Math.abs(ps) < precision) {
          if (this.isRadial()) {
            if (Math.abs(n1 - n2) < precision) {
              return this._createGradient(ctx, transf);
            }
          } else {
            return this._createGradient(ctx, transf);
          }
        }
      }
      const ownerBBox = owner.current.getClippedPathBoundingBox(pathType, getCurrentTransform(ctx)) || [0, 0, 0, 0];
      const width = Math.ceil(ownerBBox[2] - ownerBBox[0]) || 1;
      const height = Math.ceil(ownerBBox[3] - ownerBBox[1]) || 1;
      const tmpCanvas = owner.canvasFactory.create(width, height);
      const tmpCtx = tmpCanvas.context;
      tmpCtx.clearRect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
      tmpCtx.beginPath();
      tmpCtx.rect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
      tmpCtx.translate(-ownerBBox[0], -ownerBBox[1]);
      inverse = Util.transform(inverse, [1, 0, 0, 1, ownerBBox[0], ownerBBox[1]]);
      tmpCtx.transform(...owner.baseTransform);
      if (this.matrix) {
        tmpCtx.transform(...this.matrix);
      }
      applyBoundingBox(tmpCtx, this._bbox);
      if (this.areConic()) {
        tmpCtx.fillStyle = this._createReversedGradient(tmpCtx);
        tmpCtx.fill();
      }
      tmpCtx.fillStyle = this._createGradient(tmpCtx);
      tmpCtx.fill();
      pattern = ctx.createPattern(tmpCanvas.canvas, "no-repeat");
      owner.canvasFactory.destroy(tmpCanvas);
      const domMatrix = new DOMMatrix(inverse);
      pattern.setTransform(domMatrix);
    } else {
      if (this.areConic()) {
        ctx.save();
        applyBoundingBox(ctx, this._bbox);
        ctx.fillStyle = this._createReversedGradient(ctx);
        ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
        ctx.restore();
      }
      applyBoundingBox(ctx, this._bbox);
      pattern = this._createGradient(ctx);
    }
    return pattern;
  }
}
function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
  const coords = context.coords,
    colors = context.colors;
  const bytes = data.data,
    rowSize = data.width * 4;
  let tmp;
  if (coords[p1 * 2 + 1] > coords[p2 * 2 + 1]) {
    tmp = p1;
    p1 = p2;
    p2 = tmp;
    tmp = c1;
    c1 = c2;
    c2 = tmp;
  }
  if (coords[p2 * 2 + 1] > coords[p3 * 2 + 1]) {
    tmp = p2;
    p2 = p3;
    p3 = tmp;
    tmp = c2;
    c2 = c3;
    c3 = tmp;
  }
  if (coords[p1 * 2 + 1] > coords[p2 * 2 + 1]) {
    tmp = p1;
    p1 = p2;
    p2 = tmp;
    tmp = c1;
    c1 = c2;
    c2 = tmp;
  }
  const x1 = (coords[p1 * 2] + context.offsetX) * context.scaleX;
  const y1 = (coords[p1 * 2 + 1] + context.offsetY) * context.scaleY;
  const x2 = (coords[p2 * 2] + context.offsetX) * context.scaleX;
  const y2 = (coords[p2 * 2 + 1] + context.offsetY) * context.scaleY;
  const x3 = (coords[p3 * 2] + context.offsetX) * context.scaleX;
  const y3 = (coords[p3 * 2 + 1] + context.offsetY) * context.scaleY;
  if (y1 >= y3) {
    return;
  }
  const c1r = colors[c1 * 4],
    c1g = colors[c1 * 4 + 1],
    c1b = colors[c1 * 4 + 2];
  const c2r = colors[c2 * 4],
    c2g = colors[c2 * 4 + 1],
    c2b = colors[c2 * 4 + 2];
  const c3r = colors[c3 * 4],
    c3g = colors[c3 * 4 + 1],
    c3b = colors[c3 * 4 + 2];
  const minY = Math.round(y1),
    maxY = Math.round(y3);
  let xa, car, cag, cab;
  let xb, cbr, cbg, cbb;
  for (let y = minY; y <= maxY; y++) {
    if (y < y2) {
      const k = y < y1 ? 0 : (y1 - y) / (y1 - y2);
      xa = x1 - (x1 - x2) * k;
      car = c1r - (c1r - c2r) * k;
      cag = c1g - (c1g - c2g) * k;
      cab = c1b - (c1b - c2b) * k;
    } else {
      let k;
      if (y > y3) {
        k = 1;
      } else if (y2 === y3) {
        k = 0;
      } else {
        k = (y2 - y) / (y2 - y3);
      }
      xa = x2 - (x2 - x3) * k;
      car = c2r - (c2r - c3r) * k;
      cag = c2g - (c2g - c3g) * k;
      cab = c2b - (c2b - c3b) * k;
    }
    let k;
    if (y < y1) {
      k = 0;
    } else if (y > y3) {
      k = 1;
    } else {
      k = (y1 - y) / (y1 - y3);
    }
    xb = x1 - (x1 - x3) * k;
    cbr = c1r - (c1r - c3r) * k;
    cbg = c1g - (c1g - c3g) * k;
    cbb = c1b - (c1b - c3b) * k;
    const x1_ = Math.round(Math.min(xa, xb));
    const x2_ = Math.round(Math.max(xa, xb));
    let j = rowSize * y + x1_ * 4;
    for (let x = x1_; x <= x2_; x++) {
      k = (xa - x) / (xa - xb);
      if (k < 0) {
        k = 0;
      } else if (k > 1) {
        k = 1;
      }
      bytes[j++] = car - (car - cbr) * k | 0;
      bytes[j++] = cag - (cag - cbg) * k | 0;
      bytes[j++] = cab - (cab - cbb) * k | 0;
      bytes[j++] = 255;
    }
  }
}
class MeshShadingPattern extends BaseShadingPattern {
  constructor(IR) {
    super();
    this._posData = IR[2];
    this._colData = IR[3];
    this._vertexCount = IR[4];
    this._bounds = IR[5];
    this._bbox = IR[6];
    this._background = IR[7];
    this.matrix = null;
    loadMeshShader();
  }
  _createMeshCanvas(combinedScale, backgroundColor, canvasFactory) {
    const EXPECTED_SCALE = 1.1;
    const MAX_PATTERN_SIZE = 3000;
    const BORDER_SIZE = 2;
    const offsetX = Math.floor(this._bounds[0]);
    const offsetY = Math.floor(this._bounds[1]);
    const boundsWidth = Math.ceil(this._bounds[2]) - offsetX;
    const boundsHeight = Math.ceil(this._bounds[3]) - offsetY;
    const width = Math.min(Math.ceil(Math.abs(boundsWidth * combinedScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE) || 1;
    const height = Math.min(Math.ceil(Math.abs(boundsHeight * combinedScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE) || 1;
    const scaleX = boundsWidth ? boundsWidth / width : 1;
    const scaleY = boundsHeight ? boundsHeight / height : 1;
    const context = {
      coords: this._posData,
      colors: this._colData,
      offsetX: -offsetX,
      offsetY: -offsetY,
      scaleX: 1 / scaleX,
      scaleY: 1 / scaleY
    };
    const paddedWidth = width + BORDER_SIZE * 2;
    const paddedHeight = height + BORDER_SIZE * 2;
    const tmpCanvas = canvasFactory.create(paddedWidth, paddedHeight);
    if (isGPUReady() && this._vertexCount > 48) {
      tmpCanvas.context.drawImage(drawMeshWithGPU(this._posData, this._colData, this._vertexCount, context, backgroundColor, paddedWidth, paddedHeight, BORDER_SIZE), 0, 0);
    } else {
      const data = tmpCanvas.context.createImageData(width, height);
      if (backgroundColor) {
        const bytes = data.data;
        for (let i = 0, ii = bytes.length; i < ii; i += 4) {
          bytes[i] = backgroundColor[0];
          bytes[i + 1] = backgroundColor[1];
          bytes[i + 2] = backgroundColor[2];
          bytes[i + 3] = 255;
        }
      }
      for (let i = 0, ii = this._vertexCount; i < ii; i += 3) {
        drawTriangle(data, context, i, i + 1, i + 2, i, i + 1, i + 2);
      }
      tmpCanvas.context.putImageData(data, BORDER_SIZE, BORDER_SIZE);
    }
    return {
      canvas: tmpCanvas.canvas,
      offsetX: offsetX - BORDER_SIZE * scaleX,
      offsetY: offsetY - BORDER_SIZE * scaleY,
      scaleX,
      scaleY
    };
  }
  isModifyingCurrentTransform() {
    return true;
  }
  getPattern(ctx, owner, inverse, pathType) {
    applyBoundingBox(ctx, this._bbox);
    const scale = new Float32Array(2);
    if (pathType === PathType.SHADING) {
      Util.singularValueDecompose2dScale(getCurrentTransform(ctx), scale);
    } else if (this.matrix) {
      Util.singularValueDecompose2dScale(this.matrix, scale);
      const [matrixScaleX, matrixScaleY] = scale;
      Util.singularValueDecompose2dScale(owner.baseTransform, scale);
      scale[0] *= matrixScaleX;
      scale[1] *= matrixScaleY;
    } else {
      Util.singularValueDecompose2dScale(owner.baseTransform, scale);
    }
    const temporaryPatternCanvas = this._createMeshCanvas(scale, pathType === PathType.SHADING ? null : this._background, owner.canvasFactory);
    if (pathType !== PathType.SHADING) {
      ctx.setTransform(...owner.baseTransform);
      if (this.matrix) {
        ctx.transform(...this.matrix);
      }
    }
    ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
    ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
    const pattern = ctx.createPattern(temporaryPatternCanvas.canvas, "no-repeat");
    owner.canvasFactory.destroy(temporaryPatternCanvas);
    return pattern;
  }
}
class DummyShadingPattern extends BaseShadingPattern {
  getPattern() {
    return "hotpink";
  }
}
function getShadingPattern(IR) {
  switch (IR[0]) {
    case "RadialAxial":
      return new RadialAxialShadingPattern(IR);
    case "Mesh":
      return new MeshShadingPattern(IR);
    case "Dummy":
      return new DummyShadingPattern();
  }
  throw new Error(`Unknown IR type: ${IR[0]}`);
}
const PaintType = {
  COLORED: 1,
  UNCOLORED: 2
};
class TilingPattern {
  static MAX_PATTERN_SIZE = 3000;
  constructor(IR, ctx, canvasGraphicsFactory, baseTransform) {
    this.color = IR[1];
    this.operatorList = IR[2];
    this.matrix = IR[3];
    this.bbox = IR[4];
    this.xstep = IR[5];
    this.ystep = IR[6];
    this.paintType = IR[7];
    this.tilingType = IR[8];
    this.needsIsolation = IR[9] ?? true;
    this.ctx = ctx;
    this.canvasGraphicsFactory = canvasGraphicsFactory;
    this.baseTransform = baseTransform;
    this.patternBaseMatrix = this.matrix ? Util.transform(baseTransform, this.matrix) : baseTransform;
  }
  canSkipPatternCanvas([width, height, offsetX, offsetY]) {
    const [x0, y0, x1, y1] = this.bbox;
    const absXStep = Math.abs(this.xstep);
    const absYStep = Math.abs(this.ystep);
    if (width > absXStep + 1e-6 || height > absYStep + 1e-6) {
      return null;
    }
    const nXFirst = Math.floor((offsetX - x1) / absXStep) + 1;
    const nXLast = Math.ceil((offsetX + width - x0) / absXStep) - 1;
    const nYFirst = Math.floor((offsetY - y1) / absYStep) + 1;
    const nYLast = Math.ceil((offsetY + height - y0) / absYStep) - 1;
    return nXLast <= nXFirst && nYLast <= nYFirst ? [nXFirst, nYFirst] : null;
  }
  updatePatternDims(clippedBBox, dims) {
    const inv = Util.inverseTransform(this.patternBaseMatrix);
    const c1 = [clippedBBox[0], clippedBBox[1]];
    const c2 = [clippedBBox[2], clippedBBox[3]];
    Util.applyTransform(c1, inv);
    Util.applyTransform(c2, inv);
    dims[0] = Math.abs(c2[0] - c1[0]);
    dims[1] = Math.abs(c2[1] - c1[1]);
    dims[2] = Math.min(c1[0], c2[0]);
    dims[3] = Math.min(c1[1], c2[1]);
  }
  _renderTileCanvas(owner, opIdx, dimx, dimy) {
    const [x0, y0, x1, y1] = this.bbox;
    const tmpCanvas = owner.canvasFactory.create(dimx.size, dimy.size);
    const tmpCtx = tmpCanvas.context;
    const graphics = this.canvasGraphicsFactory.createCanvasGraphics(tmpCtx, opIdx);
    graphics.groupLevel = owner.groupLevel;
    this.setFillAndStrokeStyleToContext(graphics, this.paintType, this.color);
    tmpCtx.translate(-dimx.scale * x0, -dimy.scale * y0);
    graphics.transform(0, dimx.scale, 0, 0, dimy.scale, 0, 0);
    tmpCtx.save();
    graphics.dependencyTracker?.save();
    this.clipBbox(graphics, x0, y0, x1, y1);
    graphics.baseTransform = getCurrentTransform(graphics.ctx);
    graphics.executeOperatorList(this.operatorList);
    graphics.endDrawing();
    graphics.dependencyTracker?.restore();
    tmpCtx.restore();
    return tmpCanvas;
  }
  _getCombinedScales() {
    const scale = new Float32Array(2);
    Util.singularValueDecompose2dScale(this.matrix, scale);
    const [matrixScaleX, matrixScaleY] = scale;
    Util.singularValueDecompose2dScale(this.baseTransform, scale);
    return [matrixScaleX * scale[0], matrixScaleY * scale[1]];
  }
  drawPattern(owner, path, useEOFill = false, [n, m], opIdx) {
    const [x0, y0, x1, y1] = this.bbox;
    const dependencyTracker = owner.dependencyTracker;
    if (dependencyTracker) {
      owner.dependencyTracker = new CanvasNestedDependencyTracker(dependencyTracker, opIdx);
    }
    owner.save();
    if (useEOFill) {
      owner.ctx.clip(path, "evenodd");
    } else {
      owner.ctx.clip(path);
    }
    owner.ctx.setTransform(...this.patternBaseMatrix);
    owner.ctx.translate(n * this.xstep, m * this.ystep);
    if (this.needsIsolation || owner.ctx.globalAlpha !== 1 || owner.ctx.globalCompositeOperation !== "source-over" || owner.inSMaskMode) {
      const bboxWidth = x1 - x0;
      const bboxHeight = y1 - y0;
      const [combinedScaleX, combinedScaleY] = this._getCombinedScales();
      const dimx = this.getSizeAndScale(bboxWidth, this.ctx.canvas.width, combinedScaleX);
      const dimy = this.getSizeAndScale(bboxHeight, this.ctx.canvas.height, combinedScaleY);
      const tmpCanvas = this._renderTileCanvas(owner, opIdx, dimx, dimy);
      owner.ctx.drawImage(tmpCanvas.canvas, x0, y0, bboxWidth, bboxHeight);
      owner.canvasFactory.destroy(tmpCanvas);
    } else {
      this.setFillAndStrokeStyleToContext(owner, this.paintType, this.color);
      this.clipBbox(owner, x0, y0, x1, y1);
      owner.baseTransformStack.push(owner.baseTransform);
      owner.baseTransform = getCurrentTransform(owner.ctx);
      owner.executeOperatorList(this.operatorList);
      owner.baseTransform = owner.baseTransformStack.pop();
    }
    owner.restore();
    if (dependencyTracker) {
      owner.dependencyTracker = dependencyTracker;
    }
  }
  createPatternCanvas(owner, opIdx) {
    const [x0, y0, x1, y1] = this.bbox;
    const width = x1 - x0;
    const height = y1 - y0;
    let {
      xstep,
      ystep
    } = this;
    xstep = Math.abs(xstep);
    ystep = Math.abs(ystep);
    info("TilingType: " + this.tilingType);
    const [combinedScaleX, combinedScaleY] = this._getCombinedScales();
    let canvasWidth = width,
      canvasHeight = height,
      redrawHorizontally = false,
      redrawVertically = false;
    if (Math.ceil(xstep * combinedScaleX) >= Math.ceil(width * combinedScaleX)) {
      canvasWidth = xstep;
    } else {
      redrawHorizontally = true;
    }
    if (Math.ceil(ystep * combinedScaleY) >= Math.ceil(height * combinedScaleY)) {
      canvasHeight = ystep;
    } else {
      redrawVertically = true;
    }
    const dimx = this.getSizeAndScale(canvasWidth, this.ctx.canvas.width, combinedScaleX);
    const dimy = this.getSizeAndScale(canvasHeight, this.ctx.canvas.height, combinedScaleY);
    const tmpCanvas = this._renderTileCanvas(owner, opIdx, dimx, dimy);
    if (redrawHorizontally || redrawVertically) {
      const image = tmpCanvas.canvas;
      if (redrawHorizontally) {
        canvasWidth = xstep;
      }
      if (redrawVertically) {
        canvasHeight = ystep;
      }
      const dimx2 = this.getSizeAndScale(canvasWidth, this.ctx.canvas.width, combinedScaleX);
      const dimy2 = this.getSizeAndScale(canvasHeight, this.ctx.canvas.height, combinedScaleY);
      const xSize = dimx2.size;
      const ySize = dimy2.size;
      const tmpCanvas2 = owner.canvasFactory.create(xSize, ySize);
      const tmpCtx2 = tmpCanvas2.context;
      const ii = redrawHorizontally ? Math.floor(width / xstep) : 0;
      const jj = redrawVertically ? Math.floor(height / ystep) : 0;
      for (let i = 0; i <= ii; i++) {
        for (let j = 0; j <= jj; j++) {
          tmpCtx2.drawImage(image, xSize * i, ySize * j, xSize, ySize, 0, 0, xSize, ySize);
        }
      }
      owner.canvasFactory.destroy(tmpCanvas);
      return {
        canvas: tmpCanvas2.canvas,
        canvasEntry: tmpCanvas2,
        scaleX: dimx2.scale,
        scaleY: dimy2.scale,
        offsetX: x0,
        offsetY: y0
      };
    }
    return {
      canvas: tmpCanvas.canvas,
      canvasEntry: tmpCanvas,
      scaleX: dimx.scale,
      scaleY: dimy.scale,
      offsetX: x0,
      offsetY: y0
    };
  }
  getSizeAndScale(step, realOutputSize, scale) {
    const maxSize = Math.max(TilingPattern.MAX_PATTERN_SIZE, realOutputSize);
    let size = Math.ceil(step * scale);
    if (size >= maxSize) {
      size = maxSize;
    } else {
      scale = size / step;
    }
    return {
      scale,
      size
    };
  }
  clipBbox(graphics, x0, y0, x1, y1) {
    const bboxWidth = x1 - x0;
    const bboxHeight = y1 - y0;
    const clip = new Path2D();
    clip.rect(x0, y0, bboxWidth, bboxHeight);
    Util.axialAlignedBoundingBox([x0, y0, x1, y1], getCurrentTransform(graphics.ctx), graphics.current.minMax);
    graphics.ctx.clip(clip);
    graphics.current.updateClipFromPath();
  }
  setFillAndStrokeStyleToContext(graphics, paintType, color) {
    const context = graphics.ctx,
      current = graphics.current;
    current.patternFill = current.patternStroke = false;
    switch (paintType) {
      case PaintType.COLORED:
        const {
          fillStyle,
          strokeStyle
        } = this.ctx;
        context.fillStyle = current.fillColor = fillStyle;
        context.strokeStyle = current.strokeColor = strokeStyle;
        break;
      case PaintType.UNCOLORED:
        context.fillStyle = context.strokeStyle = color;
        current.fillColor = current.strokeColor = color;
        break;
      default:
        throw new FormatError(`Unsupported paint type: ${paintType}`);
    }
  }
  isModifyingCurrentTransform() {
    return false;
  }
  getPattern(ctx, owner, inverse, pathType, opIdx) {
    const matrix = pathType !== PathType.SHADING ? Util.transform(inverse, this.patternBaseMatrix) : inverse;
    const temporaryPatternCanvas = this.createPatternCanvas(owner, opIdx);
    let domMatrix = new DOMMatrix(matrix);
    domMatrix = domMatrix.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
    domMatrix = domMatrix.scale(1 / temporaryPatternCanvas.scaleX, 1 / temporaryPatternCanvas.scaleY);
    const pattern = ctx.createPattern(temporaryPatternCanvas.canvas, "repeat");
    owner.canvasFactory.destroy(temporaryPatternCanvas.canvasEntry);
    pattern.setTransform(domMatrix);
    return pattern;
  }
}

;// ./src/display/canvas.js






const MIN_FONT_SIZE = 16;
const MAX_FONT_SIZE = 100;
const EXECUTION_TIME = 15;
const EXECUTION_STEPS = 10;
const FULL_CHUNK_HEIGHT = 16;
const SCALE_MATRIX = new DOMMatrix();
const XY = new Float32Array(2);
function mirrorContextOperations(ctx, destCtx) {
  if (ctx._removeMirroring) {
    throw new Error("Context is already forwarding operations.");
  }
  const originalMethods = new Map();
  for (const name of ["save", "restore", "rotate", "scale", "translate", "transform", "setTransform", "resetTransform", "clip", "moveTo", "lineTo", "bezierCurveTo", "quadraticCurveTo", "arc", "arcTo", "ellipse", "rect", "roundRect", "closePath", "beginPath"]) {
    const original = ctx[name];
    if (typeof original !== "function" || typeof destCtx[name] !== "function") {
      continue;
    }
    originalMethods.set(name, original);
    ctx[name] = function (...args) {
      destCtx[name](...args);
      return original.apply(this, args);
    };
  }
  ctx._removeMirroring = () => {
    for (const [name, original] of originalMethods) {
      ctx[name] = original;
    }
    delete ctx._removeMirroring;
  };
}
function drawImageAtIntegerCoords(ctx, srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH) {
  const [a, b, c, d, tx, ty] = getCurrentTransform(ctx);
  if (b === 0 && c === 0) {
    const tlX = destX * a + tx;
    const rTlX = Math.round(tlX);
    const tlY = destY * d + ty;
    const rTlY = Math.round(tlY);
    const brX = (destX + destW) * a + tx;
    const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
    const brY = (destY + destH) * d + ty;
    const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
    ctx.setTransform(Math.sign(a), 0, 0, Math.sign(d), rTlX, rTlY);
    ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rWidth, rHeight);
    ctx.setTransform(a, b, c, d, tx, ty);
    return [rWidth, rHeight];
  }
  if (a === 0 && d === 0) {
    const tlX = destY * c + tx;
    const rTlX = Math.round(tlX);
    const tlY = destX * b + ty;
    const rTlY = Math.round(tlY);
    const brX = (destY + destH) * c + tx;
    const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
    const brY = (destX + destW) * b + ty;
    const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
    ctx.setTransform(0, Math.sign(b), Math.sign(c), 0, rTlX, rTlY);
    ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rHeight, rWidth);
    ctx.setTransform(a, b, c, d, tx, ty);
    return [rHeight, rWidth];
  }
  ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
  const scaleX = Math.hypot(a, b);
  const scaleY = Math.hypot(c, d);
  return [scaleX * destW, scaleY * destH];
}
class CanvasExtraState {
  alphaIsShape = false;
  fontSize = 0;
  fontSizeScale = 1;
  textMatrix = null;
  textMatrixScale = 1;
  fontMatrix = FONT_IDENTITY_MATRIX;
  leading = 0;
  x = 0;
  y = 0;
  lineX = 0;
  lineY = 0;
  charSpacing = 0;
  wordSpacing = 0;
  textHScale = 1;
  textRenderingMode = TextRenderingMode.FILL;
  textRise = 0;
  fillColor = "#000000";
  strokeColor = "#000000";
  tilingPatternDims = null;
  patternFill = false;
  patternStroke = false;
  fillAlpha = 1;
  strokeAlpha = 1;
  lineWidth = 1;
  activeSMask = null;
  transferMaps = "none";
  minMax = F32_BBOX_INIT.slice();
  constructor(width, height) {
    this.clipBox = new Float32Array([0, 0, width, height]);
  }
  clone() {
    const clone = Object.create(this);
    clone.clipBox = this.clipBox.slice();
    clone.minMax = this.minMax.slice();
    clone.tilingPatternDims = this.tilingPatternDims?.slice();
    return clone;
  }
  getPathBoundingBox(pathType = PathType.FILL, transform = null) {
    const box = this.minMax.slice();
    if (pathType === PathType.STROKE) {
      if (!transform) {
        unreachable("Stroke bounding box must include transform.");
      }
      Util.singularValueDecompose2dScale(transform, XY);
      const xStrokePad = XY[0] * this.lineWidth / 2;
      const yStrokePad = XY[1] * this.lineWidth / 2;
      box[0] -= xStrokePad;
      box[1] -= yStrokePad;
      box[2] += xStrokePad;
      box[3] += yStrokePad;
    }
    return box;
  }
  updateClipFromPath() {
    const intersect = Util.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(intersect || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minMax[0] === Infinity;
  }
  startNewPathAndClipBox(box) {
    this.clipBox.set(box, 0);
    this.minMax.set(F32_BBOX_INIT, 0);
  }
  getClippedPathBoundingBox(pathType = PathType.FILL, transform = null) {
    return Util.intersect(this.clipBox, this.getPathBoundingBox(pathType, transform));
  }
}
function putBinaryImageData(ctx, imgData) {
  if (imgData instanceof ImageData) {
    ctx.putImageData(imgData, 0, 0);
    return;
  }
  const {
    width,
    height,
    kind
  } = imgData;
  const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
  const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
  const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
  const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
  let srcPos = 0;
  const src = imgData.data;
  const dest = chunkImgData.data;
  let i;
  if (kind === ImageKind.GRAYSCALE_1BPP) {
    for (i = 0; i < totalChunks; i++) {
      ({
        srcPos
      } = convertBlackAndWhiteToRGBA({
        src,
        srcPos,
        dest,
        width,
        height: i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight
      }));
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  } else if (kind === ImageKind.RGBA_32BPP) {
    let j = 0;
    let elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
    for (i = 0; i < fullChunks; i++) {
      dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
      srcPos += elemsInThisChunk;
      ctx.putImageData(chunkImgData, 0, j);
      j += FULL_CHUNK_HEIGHT;
    }
    if (i < totalChunks) {
      elemsInThisChunk = width * partialChunkHeight * 4;
      dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
      ctx.putImageData(chunkImgData, 0, j);
    }
  } else if (kind === ImageKind.RGB_24BPP) {
    for (i = 0; i < totalChunks; i++) {
      ({
        srcPos
      } = convertRGBToRGBA({
        src,
        srcPos,
        dest: new Uint32Array(dest.buffer),
        width,
        height: i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight
      }));
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  } else {
    throw new Error(`bad image kind: ${kind}`);
  }
}
function putBinaryImageMask(ctx, imgData) {
  if (imgData.bitmap) {
    ctx.drawImage(imgData.bitmap, 0, 0);
    return;
  }
  const {
    width,
    height
  } = imgData;
  const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
  const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
  const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
  const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
  let srcPos = 0;
  const src = imgData.data;
  const dest = chunkImgData.data;
  for (let i = 0; i < totalChunks; i++) {
    ({
      srcPos
    } = convertBlackAndWhiteToRGBA({
      src,
      srcPos,
      dest,
      width,
      height: i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight,
      nonBlackColor: 0
    }));
    ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
  }
}
function copyCtxState(sourceCtx, destCtx) {
  const properties = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const property of properties) {
    if (sourceCtx[property] !== undefined) {
      destCtx[property] = sourceCtx[property];
    }
  }
  if (sourceCtx.setLineDash !== undefined) {
    destCtx.setLineDash(sourceCtx.getLineDash());
    destCtx.lineDashOffset = sourceCtx.lineDashOffset;
  }
}
function resetCtxToDefault(ctx) {
  ctx.strokeStyle = ctx.fillStyle = "#000000";
  ctx.fillRule = "nonzero";
  ctx.globalAlpha = 1;
  ctx.lineWidth = 1;
  ctx.lineCap = "butt";
  ctx.lineJoin = "miter";
  ctx.miterLimit = 10;
  ctx.globalCompositeOperation = "source-over";
  ctx.font = "10px sans-serif";
  if (ctx.setLineDash !== undefined) {
    ctx.setLineDash([]);
    ctx.lineDashOffset = 0;
  }
  const {
    filter
  } = ctx;
  if (filter !== "none" && filter !== "") {
    ctx.filter = "none";
  }
}
function getImageSmoothingEnabled(transform, interpolate) {
  if (interpolate) {
    return true;
  }
  Util.singularValueDecompose2dScale(transform, XY);
  const actualScale = Math.fround(OutputScale.pixelRatio * PixelsPerInch.PDF_TO_CSS_UNITS);
  return XY[0] <= actualScale && XY[1] <= actualScale;
}
const LINE_CAP_STYLES = ["butt", "round", "square"];
const LINE_JOIN_STYLES = ["miter", "round", "bevel"];
const NORMAL_CLIP = {};
const EO_CLIP = {};
class CanvasGraphics {
  #knockoutGroupLevel = 0;
  #knockoutElementDepth = 0;
  #knockoutTempCanvasEntry = null;
  #knockoutSavedCtx = null;
  #knockoutSavedSMaskCtx = null;
  #knockoutSavedGCO = null;
  #knockoutElementAlpha = 1;
  #knockoutFilterCache;
  #knockoutElementGroupMeta = null;
  #groupStackMeta = [];
  constructor(canvasCtx, commonObjs, objs, canvasFactory, filterFactory, {
    optionalContentConfig,
    markedContentStack = null
  }, annotationCanvasMap, pageColors, dependencyTracker, imagesTracker) {
    this.ctx = canvasCtx;
    this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
    this.stateStack = [];
    this.pendingClip = null;
    this.pendingEOFill = false;
    this.commonObjs = commonObjs;
    this.objs = objs;
    this.canvasFactory = canvasFactory;
    this.filterFactory = filterFactory;
    this.groupStack = [];
    this.baseTransform = null;
    this.baseTransformStack = [];
    this.groupLevel = 0;
    this.smaskStack = [];
    this.tempSMask = null;
    this.smaskGroupCanvases = [];
    this.smaskPreparedEntry = null;
    this.smaskPreparedFor = null;
    this.smaskPreparedOffsetX = 0;
    this.smaskPreparedOffsetY = 0;
    this.smaskPreparedOOBAlpha = null;
    this.suspendedCtx = null;
    this.contentVisible = true;
    this.markedContentStack = markedContentStack || [];
    this.optionalContentConfig = optionalContentConfig;
    this.cachedPatterns = new Map();
    this.annotationCanvasMap = annotationCanvasMap;
    this.viewportScale = 1;
    this.outputScaleX = 1;
    this.outputScaleY = 1;
    this.pageColors = pageColors;
    this._cachedScaleForStroking = [-1, 0];
    this._cachedGetSinglePixelWidth = null;
    this._cachedBitmapsMap = new Map();
    this.dependencyTracker = dependencyTracker ?? null;
    this.imagesTracker = imagesTracker ?? null;
  }
  getObject(opIdx, data, fallback = null) {
    if (typeof data === "string") {
      this.dependencyTracker?.recordNamedDependency(opIdx, data);
      return data.startsWith("g_") ? this.commonObjs.get(data) : this.objs.get(data);
    }
    return fallback;
  }
  beginDrawing({
    transform,
    viewport,
    transparency = false,
    background = null
  }) {
    const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height;
    const savedFillStyle = this.ctx.fillStyle;
    this.ctx.fillStyle = background || "#ffffff";
    this.ctx.fillRect(0, 0, width, height);
    this.ctx.fillStyle = savedFillStyle;
    if (transparency) {
      const transparentCanvas = this.transparentCanvasEntry = this.canvasFactory.create(width, height);
      this.compositeCtx = this.ctx;
      ({
        canvas: this.transparentCanvas,
        context: this.ctx
      } = transparentCanvas);
      this.ctx.save();
      this.ctx.transform(...getCurrentTransform(this.compositeCtx));
    }
    this.ctx.save();
    resetCtxToDefault(this.ctx);
    if (transform) {
      this.ctx.transform(...transform);
      this.outputScaleX = transform[0];
      this.outputScaleY = transform[3];
    }
    this.ctx.transform(...viewport.transform);
    this.viewportScale = viewport.scale;
    this.baseTransform = getCurrentTransform(this.ctx);
  }
  executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper, operationsFilter) {
    const argsArray = operatorList.argsArray;
    const fnArray = operatorList.fnArray;
    let i = executionStartIdx || 0;
    const argsArrayLen = argsArray.length;
    if (argsArrayLen === i) {
      return i;
    }
    const chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === "function";
    const endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
    let steps = 0;
    const commonObjs = this.commonObjs;
    const objs = this.objs;
    let fnId, fnArgs;
    while (true) {
      if (stepper !== undefined) {
        if (i === stepper.nextBreakPoint) {
          stepper.breakIt(i, continueCallback);
          return i;
        }
        if (stepper.shouldSkip(i)) {
          if (++i === argsArrayLen) {
            return i;
          }
          continue;
        }
      }
      if (!operationsFilter || operationsFilter(i)) {
        fnId = fnArray[i];
        fnArgs = argsArray[i] ?? null;
        if (fnId !== OPS.dependency) {
          if (fnArgs === null) {
            this[fnId](i);
          } else {
            this[fnId](i, ...fnArgs);
          }
        } else {
          for (const depObjId of fnArgs) {
            this.dependencyTracker?.recordNamedData(depObjId, i);
            const objsPool = depObjId.startsWith("g_") ? commonObjs : objs;
            if (!objsPool.has(depObjId)) {
              objsPool.get(depObjId, continueCallback);
              return i;
            }
          }
        }
      }
      i++;
      if (i === argsArrayLen) {
        return i;
      }
      if (chunkOperations && ++steps > EXECUTION_STEPS) {
        if (Date.now() > endTime) {
          continueCallback();
          return i;
        }
        steps = 0;
      }
    }
  }
  #restoreInitialState() {
    while (this.stateStack.length || this.inSMaskMode) {
      this.restore();
    }
    this.current.activeSMask = null;
    this.ctx.restore();
    if (this.transparentCanvas) {
      this.ctx = this.compositeCtx;
      this.ctx.save();
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.drawImage(this.transparentCanvas, 0, 0);
      this.ctx.restore();
      this.canvasFactory.destroy(this.transparentCanvasEntry);
      this.transparentCanvas = null;
      this.transparentCanvasEntry = null;
    }
  }
  endDrawing() {
    this.#restoreInitialState();
    for (const canvas of this.smaskGroupCanvases) {
      this.canvasFactory.destroy(canvas);
    }
    this.smaskGroupCanvases.length = 0;
    this._clearPreparedSMask();
    this.tempSMask = null;
    this.smaskStack.length = 0;
    for (const meta of this.#groupStackMeta) {
      this.#destroyKnockoutPools(meta);
    }
    this.#groupStackMeta.length = 0;
    this.#knockoutTempCanvasEntry = null;
    this.#knockoutSavedCtx = null;
    this.#knockoutSavedSMaskCtx = null;
    this.#knockoutSavedGCO = null;
    this.#knockoutElementAlpha = 1;
    this.#knockoutElementGroupMeta = null;
    this.#knockoutElementDepth = 0;
    this.#knockoutGroupLevel = 0;
    this.cachedPatterns.clear();
    for (const cache of this._cachedBitmapsMap.values()) {
      for (const canvas of cache.values()) {
        if (typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement) {
          canvas.width = canvas.height = 0;
        }
      }
      cache.clear();
    }
    this._cachedBitmapsMap.clear();
    this.#drawFilter();
  }
  #drawFilter() {
    if (this.pageColors) {
      const hcmFilterId = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
      if (hcmFilterId !== "none") {
        const savedFilter = this.ctx.filter;
        this.ctx.filter = hcmFilterId;
        this.ctx.drawImage(this.ctx.canvas, 0, 0);
        this.ctx.filter = savedFilter;
      }
    }
  }
  _scaleImage(img, inverseTransform) {
    const width = img.width ?? img.displayWidth;
    const height = img.height ?? img.displayHeight;
    const widthScale = Math.max(Math.hypot(inverseTransform[0], inverseTransform[1]), 1);
    const heightScale = Math.max(Math.hypot(inverseTransform[2], inverseTransform[3]), 1);
    const scaleSteps = [];
    let ws = widthScale,
      hs = heightScale,
      pw = width,
      ph = height;
    while (ws > 2 && pw > 1 || hs > 2 && ph > 1) {
      let nw = pw,
        nh = ph;
      if (ws > 2 && pw > 1) {
        nw = Math.ceil(pw / 2);
        ws /= pw / nw;
      }
      if (hs > 2 && ph > 1) {
        nh = Math.ceil(ph / 2);
        hs /= ph / nh;
      }
      scaleSteps.push({
        newWidth: nw,
        newHeight: nh
      });
      pw = nw;
      ph = nh;
    }
    if (scaleSteps.length === 0) {
      return {
        img,
        paintWidth: width,
        paintHeight: height,
        tmpCanvas: null
      };
    }
    if (scaleSteps.length === 1) {
      const {
        newWidth,
        newHeight
      } = scaleSteps[0];
      const tmpCanvas = this.canvasFactory.create(newWidth, newHeight);
      tmpCanvas.context.drawImage(img, 0, 0, width, height, 0, 0, newWidth, newHeight);
      return {
        img: tmpCanvas.canvas,
        paintWidth: newWidth,
        paintHeight: newHeight,
        tmpCanvas
      };
    }
    let readEntry = this.canvasFactory.create(1, 1);
    let writeEntry = this.canvasFactory.create(1, 1);
    let paintWidth = width,
      paintHeight = height;
    let source = img;
    for (const {
      newWidth,
      newHeight
    } of scaleSteps) {
      this.canvasFactory.reset(writeEntry, newWidth, newHeight);
      writeEntry.context.drawImage(source, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
      [readEntry, writeEntry] = [writeEntry, readEntry];
      source = readEntry.canvas;
      paintWidth = newWidth;
      paintHeight = newHeight;
    }
    this.canvasFactory.destroy(writeEntry);
    return {
      img: readEntry.canvas,
      paintWidth,
      paintHeight,
      tmpCanvas: readEntry
    };
  }
  _createMaskCanvas(opIdx, img) {
    const ctx = this.ctx;
    const {
      width,
      height
    } = img;
    const fillColor = this.current.fillColor;
    const isPatternFill = this.current.patternFill;
    const currentTransform = getCurrentTransform(ctx);
    let cache, cacheKey, scaled, maskCanvas;
    if ((img.bitmap || img.data) && img.count > 1) {
      const mainKey = img.bitmap || img.data.buffer;
      cacheKey = JSON.stringify(isPatternFill ? currentTransform : [currentTransform.slice(0, 4), fillColor]);
      cache = this._cachedBitmapsMap.getOrInsertComputed(mainKey, makeMap);
      const cachedImage = cache.get(cacheKey);
      if (cachedImage && !isPatternFill) {
        const offsetX = Math.round(Math.min(currentTransform[0], currentTransform[2]) + currentTransform[4]);
        const offsetY = Math.round(Math.min(currentTransform[1], currentTransform[3]) + currentTransform[5]);
        this.dependencyTracker?.recordDependencies(opIdx, Dependencies.transformAndFill);
        return {
          canvas: cachedImage,
          offsetX,
          offsetY
        };
      }
      scaled = cachedImage;
    }
    if (!scaled) {
      maskCanvas = this.canvasFactory.create(width, height);
      putBinaryImageMask(maskCanvas.context, img);
    }
    let maskToCanvas = Util.transform(currentTransform, [1 / width, 0, 0, -1 / height, 0, 0]);
    maskToCanvas = Util.transform(maskToCanvas, [1, 0, 0, 1, 0, -height]);
    const minMax = F32_BBOX_INIT.slice();
    Util.axialAlignedBoundingBox([0, 0, width, height], maskToCanvas, minMax);
    const [minX, minY, maxX, maxY] = minMax;
    const drawnWidth = Math.round(maxX - minX) || 1;
    const drawnHeight = Math.round(maxY - minY) || 1;
    const fillCanvas = this.canvasFactory.create(drawnWidth, drawnHeight);
    const fillCtx = fillCanvas.context;
    const offsetX = minX;
    const offsetY = minY;
    fillCtx.translate(-offsetX, -offsetY);
    fillCtx.transform(...maskToCanvas);
    let scaledEntry = null;
    if (!scaled) {
      const scaleResult = this._scaleImage(maskCanvas.canvas, getCurrentTransformInverse(fillCtx));
      scaled = scaleResult.img;
      scaledEntry = scaleResult.tmpCanvas;
      if (scaled !== maskCanvas.canvas) {
        this.canvasFactory.destroy(maskCanvas);
        maskCanvas = null;
      }
      if (cache && isPatternFill) {
        cache.set(cacheKey, scaled);
        scaledEntry = null;
        maskCanvas = null;
      }
    }
    fillCtx.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(fillCtx), img.interpolate);
    drawImageAtIntegerCoords(fillCtx, scaled, 0, 0, scaled.width, scaled.height, 0, 0, width, height);
    if (scaledEntry) {
      this.canvasFactory.destroy(scaledEntry);
    }
    if (maskCanvas) {
      this.canvasFactory.destroy(maskCanvas);
    }
    fillCtx.globalCompositeOperation = "source-in";
    const inverse = Util.transform(getCurrentTransformInverse(fillCtx), [1, 0, 0, 1, -offsetX, -offsetY]);
    fillCtx.fillStyle = isPatternFill ? fillColor.getPattern(ctx, this, inverse, PathType.FILL, opIdx) : fillColor;
    fillCtx.fillRect(0, 0, width, height);
    if (cache && !isPatternFill) {
      cache.set(cacheKey, fillCanvas.canvas);
    }
    this.dependencyTracker?.recordDependencies(opIdx, Dependencies.transformAndFill);
    return {
      canvas: fillCanvas.canvas,
      canvasEntry: cache && !isPatternFill ? null : fillCanvas,
      offsetX: Math.round(offsetX),
      offsetY: Math.round(offsetY)
    };
  }
  setLineWidth(opIdx, width) {
    this.dependencyTracker?.recordSimpleData("lineWidth", opIdx);
    if (width !== this.current.lineWidth) {
      this._cachedScaleForStroking[0] = -1;
    }
    this.current.lineWidth = width;
    this.ctx.lineWidth = width;
  }
  setLineCap(opIdx, style) {
    this.dependencyTracker?.recordSimpleData("lineCap", opIdx);
    this.ctx.lineCap = LINE_CAP_STYLES[style];
  }
  setLineJoin(opIdx, style) {
    this.dependencyTracker?.recordSimpleData("lineJoin", opIdx);
    this.ctx.lineJoin = LINE_JOIN_STYLES[style];
  }
  setMiterLimit(opIdx, limit) {
    this.dependencyTracker?.recordSimpleData("miterLimit", opIdx);
    this.ctx.miterLimit = limit;
  }
  setDash(opIdx, dashArray, dashPhase) {
    this.dependencyTracker?.recordSimpleData("dash", opIdx);
    const ctx = this.ctx;
    if (ctx.setLineDash !== undefined) {
      ctx.setLineDash(dashArray);
      ctx.lineDashOffset = dashPhase;
    }
  }
  setRenderingIntent(opIdx, intent) {}
  setFlatness(opIdx, flatness) {}
  setGState(opIdx, states) {
    for (const [key, value] of states) {
      switch (key) {
        case "LW":
          this.setLineWidth(opIdx, value);
          break;
        case "LC":
          this.setLineCap(opIdx, value);
          break;
        case "LJ":
          this.setLineJoin(opIdx, value);
          break;
        case "ML":
          this.setMiterLimit(opIdx, value);
          break;
        case "D":
          this.setDash(opIdx, value[0], value[1]);
          break;
        case "RI":
          this.setRenderingIntent(opIdx, value);
          break;
        case "FL":
          this.setFlatness(opIdx, value);
          break;
        case "Font":
          this.setFont(opIdx, value[0], value[1]);
          break;
        case "CA":
          this.dependencyTracker?.recordSimpleData("strokeAlpha", opIdx);
          this.current.strokeAlpha = value;
          break;
        case "ca":
          this.dependencyTracker?.recordSimpleData("fillAlpha", opIdx);
          this.ctx.globalAlpha = this.current.fillAlpha = value;
          break;
        case "BM":
          this.dependencyTracker?.recordSimpleData("globalCompositeOperation", opIdx);
          this.ctx.globalCompositeOperation = value;
          break;
        case "SMask":
          this.dependencyTracker?.recordSimpleData("SMask", opIdx);
          this.current.activeSMask = value ? this.tempSMask : null;
          if (this.current.activeSMask) {
            this.current.activeSMask.blendMode = this.ctx.globalCompositeOperation;
          }
          this.tempSMask = null;
          this.checkSMaskState(opIdx);
          break;
        case "TR":
          this.dependencyTracker?.recordSimpleData("filter", opIdx);
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(value);
          break;
      }
    }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  _clearPreparedSMask() {
    if (this.smaskPreparedEntry) {
      this.canvasFactory.destroy(this.smaskPreparedEntry);
      this.smaskPreparedEntry = null;
    }
    this.smaskPreparedFor = null;
    this.smaskPreparedOffsetX = 0;
    this.smaskPreparedOffsetY = 0;
    this.smaskPreparedOOBAlpha = null;
  }
  _ensurePreparedSMask(smask) {
    if (smask === this.smaskPreparedFor) {
      return;
    }
    this._clearPreparedSMask();
    this._prepareSMaskCanvas(smask);
  }
  checkSMaskState(opIdx) {
    const inSMaskMode = this.inSMaskMode;
    if (this.current.activeSMask && !inSMaskMode) {
      this.beginSMaskMode(opIdx);
    } else if (!this.current.activeSMask && inSMaskMode) {
      this.endSMaskMode();
    } else if (this.current.activeSMask && inSMaskMode) {
      this._ensurePreparedSMask(this.current.activeSMask);
    }
  }
  _prepareSMaskCanvas(smask) {
    const {
      canvas: maskCanvas,
      subtype,
      backdrop,
      transferMap
    } = smask;
    const hasFilter = subtype === "Luminosity" || subtype === "Alpha" && transferMap;
    if (!hasFilter && !(subtype === "Luminosity" && backdrop)) {
      this.smaskPreparedFor = smask;
      return;
    }
    let filteredOOBAlpha;
    if (subtype === "Luminosity" && backdrop) {
      const [r, g, b] = getRGBA(backdrop);
      const inputAlpha = Math.round(0.3 * r + 0.59 * g + 0.11 * b);
      filteredOOBAlpha = transferMap?.[inputAlpha] ?? inputAlpha;
    } else {
      filteredOOBAlpha = transferMap?.[0] ?? 0;
    }
    const SMASK_LAYER_TO_MASK_AREA_RATIO = 4;
    const {
      width: layerW,
      height: layerH
    } = this.ctx.canvas;
    const maskArea = maskCanvas.width * maskCanvas.height;
    const useLayerSize = layerW * layerH < SMASK_LAYER_TO_MASK_AREA_RATIO * maskArea;
    const filterSpec = hasFilter ? {
      url: subtype === "Alpha" ? this.filterFactory.addAlphaFilter(transferMap) : this.filterFactory.addLuminosityFilter(transferMap),
      subtype,
      transferMap
    } : null;
    const bakedBackdrop = subtype === "Luminosity" ? backdrop : null;
    let preparedEntry, offsetX, offsetY;
    if (useLayerSize) {
      preparedEntry = this._bakeSMaskCanvas(maskCanvas, smask.offsetX, smask.offsetY, layerW, layerH, bakedBackdrop, filterSpec);
      offsetX = 0;
      offsetY = 0;
    } else {
      preparedEntry = this._bakeSMaskCanvas(maskCanvas, 0, 0, maskCanvas.width, maskCanvas.height, bakedBackdrop, filterSpec);
      offsetX = smask.offsetX;
      offsetY = smask.offsetY;
    }
    this.smaskPreparedEntry = preparedEntry;
    this.smaskPreparedFor = smask;
    this.smaskPreparedOffsetX = offsetX;
    this.smaskPreparedOffsetY = offsetY;
    this.smaskPreparedOOBAlpha = !useLayerSize && filteredOOBAlpha !== 0 ? filteredOOBAlpha : null;
  }
  _bakeSMaskCanvas(maskCanvas, drawX, drawY, w, h, backdrop, filterSpec) {
    if (!backdrop && !filterSpec) {
      unreachable("_bakeSMaskCanvas with neither backdrop nor filter");
    }
    const srcEntry = this.canvasFactory.create(w, h);
    const sCtx = srcEntry.context;
    sCtx.drawImage(maskCanvas, drawX, drawY);
    if (backdrop) {
      sCtx.globalCompositeOperation = "destination-atop";
      sCtx.fillStyle = backdrop;
      sCtx.fillRect(0, 0, w, h);
    }
    if (!filterSpec) {
      return srcEntry;
    }
    const preparedEntry = this.canvasFactory.create(w, h);
    const pCtx = preparedEntry.context;
    pCtx.filter = filterSpec.url;
    const filterApplied = FeatureTest.isCanvasFilterSupported && pCtx.filter !== "none" && pCtx.filter !== "";
    pCtx.drawImage(srcEntry.canvas, 0, 0);
    if (FeatureTest.isCanvasFilterSupported) {
      pCtx.filter = "none";
    }
    if (!filterApplied) {
      const img = pCtx.getImageData(0, 0, w, h);
      const {
        data
      } = img;
      const {
        transferMap
      } = filterSpec;
      if (filterSpec.subtype === "Luminosity") {
        for (let i = 0, ii = data.length; i < ii; i += 4) {
          const a = 0.3 * data[i] + 0.59 * data[i + 1] + 0.11 * data[i + 2] + 0.5 | 0;
          data[i] = data[i + 1] = data[i + 2] = 0;
          data[i + 3] = transferMap?.[a] ?? a;
        }
      } else {
        for (let i = 3, ii = data.length; i < ii; i += 4) {
          data[i] = transferMap[data[i]];
        }
      }
      pCtx.putImageData(img, 0, 0);
    }
    this.canvasFactory.destroy(srcEntry);
    return preparedEntry;
  }
  beginSMaskMode(opIdx) {
    if (this.inSMaskMode) {
      throw new Error("beginSMaskMode called while already in smask mode");
    }
    const {
      width: drawnWidth,
      height: drawnHeight
    } = this.ctx.canvas;
    const scratchCanvas = this.canvasFactory.create(drawnWidth, drawnHeight);
    this.smaskScratchCanvas = scratchCanvas;
    this.suspendedCtx = this.ctx;
    const ctx = this.ctx = scratchCanvas.context;
    ctx.setTransform(this.suspendedCtx.getTransform());
    copyCtxState(this.suspendedCtx, ctx);
    mirrorContextOperations(ctx, this.suspendedCtx);
    this._ensurePreparedSMask(this.current.activeSMask);
    this.setGState(opIdx, [["BM", "source-over"]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode) {
      throw new Error("endSMaskMode called while not in smask mode");
    }
    this.ctx._removeMirroring();
    copyCtxState(this.ctx, this.suspendedCtx);
    this.ctx = this.suspendedCtx;
    this.suspendedCtx = null;
    this.canvasFactory.destroy(this.smaskScratchCanvas);
    this.smaskScratchCanvas = null;
    this._clearPreparedSMask();
  }
  #createKnockoutMaskCanvas(sourceCanvas, reuseEntry = null, alpha = 1) {
    const {
      width,
      height
    } = sourceCanvas;
    const maskEntry = reuseEntry ?? this.canvasFactory.create(width, height);
    const maskCtx = maskEntry.context;
    alpha = Math.round(alpha * 255) / 255;
    const needsAlphaScaling = alpha < 1;
    if (needsAlphaScaling && this.#knockoutFilterCache === undefined) {
      this.#knockoutFilterCache = FeatureTest.isCanvasFilterSupported ? new Map() : "none";
    }
    let knockoutFilter = "none";
    if (needsAlphaScaling && this.#knockoutFilterCache instanceof Map) {
      knockoutFilter = this.#knockoutFilterCache.getOrInsertComputed(alpha, () => this.filterFactory.addKnockoutFilter(alpha));
    }
    if (!needsAlphaScaling || knockoutFilter !== "none") {
      if (reuseEntry) {
        maskCtx.save();
        maskCtx.setTransform(1, 0, 0, 1, 0, 0);
        maskCtx.clearRect(0, 0, width, height);
        maskCtx.restore();
      }
      maskCtx.filter = knockoutFilter;
      maskCtx.drawImage(sourceCanvas, 0, 0);
      maskCtx.filter = "none";
      return maskEntry;
    }
    const sourceData = sourceCanvas.getContext("2d", {
      willReadFrequently: true
    }).getImageData(0, 0, width, height);
    const maskData = maskCtx.createImageData(width, height);
    const sourcePixels = sourceData.data,
      maskPixels = maskData.data;
    const alphaScale = alpha > 0 ? 1 / alpha : 1e6;
    for (let i = 3, ii = sourcePixels.length; i < ii; i += 4) {
      maskPixels[i] = Math.min(Math.round(sourcePixels[i] * alphaScale), 255);
    }
    maskCtx.putImageData(maskData, 0, 0);
    return maskEntry;
  }
  #getOrCreatePooledEntry(meta, key, width, height) {
    let entry = meta?.[key] ?? null;
    if (entry && (entry.canvas.width !== width || entry.canvas.height !== height)) {
      this.canvasFactory.destroy(entry);
      entry = null;
    }
    if (!entry) {
      entry = this.canvasFactory.create(width, height);
      if (meta) {
        meta[key] = entry;
      }
      return entry;
    }
    const ctx = entry.context;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.restore();
    return entry;
  }
  #compositeKnockoutSurface(destCtx, surfaceCanvas, options = {}) {
    const {
      backdropCanvas = null,
      destTransform = [1, 0, 0, 1, 0, 0],
      backdropOffset = [0, 0],
      reuseMaskEntry = null,
      poolMeta = null,
      sourceAlpha = 1,
      sourceFilter = "none",
      knockoutAlpha = 1
    } = options;
    const {
      width,
      height
    } = surfaceCanvas;
    const knockoutMaskEntry = this.#createKnockoutMaskCanvas(surfaceCanvas, reuseMaskEntry, knockoutAlpha);
    const sourceCompositeOperation = destCtx.globalCompositeOperation;
    destCtx.save();
    destCtx.setTransform(...destTransform);
    destCtx.globalAlpha = 1;
    if (FeatureTest.isCanvasFilterSupported) {
      destCtx.filter = "none";
    }
    destCtx.globalCompositeOperation = "destination-out";
    destCtx.drawImage(knockoutMaskEntry.canvas, 0, 0);
    if (backdropCanvas) {
      const [bx, by] = backdropOffset;
      const backdropEntry = this.#getOrCreatePooledEntry(poolMeta, "knockoutBackdropEntry", width, height);
      const backdropCtx = backdropEntry.context;
      backdropCtx.drawImage(backdropCanvas, bx, by, width, height, 0, 0, width, height);
      backdropCtx.globalCompositeOperation = "destination-in";
      backdropCtx.drawImage(knockoutMaskEntry.canvas, 0, 0);
      backdropCtx.globalCompositeOperation = "source-over";
      destCtx.globalCompositeOperation = "destination-over";
      destCtx.drawImage(backdropEntry.canvas, 0, 0);
      if (!poolMeta) {
        this.canvasFactory.destroy(backdropEntry);
      }
    }
    destCtx.globalCompositeOperation = sourceCompositeOperation;
    destCtx.globalAlpha = sourceAlpha;
    if (FeatureTest.isCanvasFilterSupported) {
      destCtx.filter = sourceFilter ?? "none";
    }
    destCtx.drawImage(surfaceCanvas, 0, 0);
    destCtx.restore();
    if (!reuseMaskEntry) {
      this.canvasFactory.destroy(knockoutMaskEntry);
    }
  }
  #beginKnockoutElement(alpha = 1) {
    if (this.#knockoutGroupLevel === 0 || this.#knockoutElementDepth > 0 || !this.contentVisible) {
      return false;
    }
    this.#knockoutElementDepth++;
    this.#knockoutElementAlpha = alpha;
    const groupMeta = this.#groupStackMeta.at(-1);
    const {
      canvas
    } = this.ctx;
    const tempEntry = this.#getOrCreatePooledEntry(groupMeta, "knockoutTempEntry", canvas.width, canvas.height);
    this.#knockoutTempCanvasEntry = tempEntry;
    const tempCtx = tempEntry.context;
    tempCtx.save();
    tempCtx.setTransform(this.ctx.getTransform());
    copyCtxState(this.ctx, tempCtx);
    this.#knockoutSavedGCO = tempCtx.globalCompositeOperation;
    tempCtx.globalCompositeOperation = "source-over";
    mirrorContextOperations(tempCtx, this.ctx);
    this.#knockoutElementGroupMeta = groupMeta;
    this.#knockoutSavedCtx = this.ctx;
    this.#knockoutSavedSMaskCtx = this.suspendedCtx;
    this.ctx = tempCtx;
    if (this.inSMaskMode) {
      this.suspendedCtx = tempCtx;
    }
    return true;
  }
  #endKnockoutElement(started) {
    if (!started) {
      return;
    }
    const tempEntry = this.#knockoutTempCanvasEntry;
    const savedCtx = this.#knockoutSavedCtx;
    const savedSMaskCtx = this.#knockoutSavedSMaskCtx;
    const tempCtx = tempEntry.context;
    this.#knockoutTempCanvasEntry = null;
    this.#knockoutSavedCtx = null;
    this.#knockoutSavedSMaskCtx = null;
    if (this.inSMaskMode && this.suspendedCtx === tempCtx && this.ctx !== tempCtx) {
      this.endSMaskMode();
    }
    if (this.inSMaskMode) {
      this.suspendedCtx = savedSMaskCtx;
    }
    this.ctx._removeMirroring();
    this.ctx.globalCompositeOperation = this.#knockoutSavedGCO;
    this.#knockoutSavedGCO = null;
    copyCtxState(this.ctx, savedCtx);
    this.ctx = savedCtx;
    const groupMeta = this.#knockoutElementGroupMeta;
    this.#knockoutElementGroupMeta = null;
    const knockoutAlpha = this.#knockoutElementAlpha;
    this.#knockoutElementAlpha = 1;
    try {
      this.#compositeKnockoutSurface(savedSMaskCtx ?? savedCtx, tempEntry.canvas, {
        backdropCanvas: groupMeta?.backdropCtx?.canvas ?? null,
        backdropOffset: groupMeta?.backdropCtx ? [groupMeta.offsetX, groupMeta.offsetY] : [0, 0],
        reuseMaskEntry: groupMeta?.knockoutMaskEntry ?? null,
        poolMeta: groupMeta,
        knockoutAlpha
      });
    } finally {
      tempCtx.restore();
      this.#knockoutElementDepth--;
      if (!groupMeta) {
        this.canvasFactory.destroy(tempEntry);
      }
    }
  }
  compose(dirtyBox) {
    if (!this.current.activeSMask) {
      return;
    }
    dirtyBox = dirtyBox ? [Math.floor(dirtyBox[0]), Math.floor(dirtyBox[1]), Math.ceil(dirtyBox[2]), Math.ceil(dirtyBox[3])] : [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const smask = this.current.activeSMask;
    const suspendedCtx = this.suspendedCtx;
    const applySMaskInPlace = this.#knockoutElementDepth > 0 && suspendedCtx === this.ctx;
    this.composeSMask(applySMaskInPlace ? null : suspendedCtx, smask, this.ctx, dirtyBox);
    if (applySMaskInPlace) {
      return;
    }
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.restore();
  }
  composeSMask(ctx, smask, layerCtx, layerBox) {
    const layerOffsetX = layerBox[0];
    const layerOffsetY = layerBox[1];
    const layerWidth = layerBox[2] - layerOffsetX;
    const layerHeight = layerBox[3] - layerOffsetY;
    if (layerWidth === 0 || layerHeight === 0) {
      return;
    }
    const preparedEntry = this.smaskPreparedEntry;
    if (preparedEntry) {
      let clipX = layerOffsetX;
      let clipY = layerOffsetY;
      let clipW = layerWidth;
      let clipH = layerHeight;
      const oobAlpha = this.smaskPreparedOOBAlpha;
      const hasOOBAlpha = oobAlpha !== null;
      if (hasOOBAlpha) {
        clipX = Math.max(layerOffsetX, smask.offsetX);
        clipY = Math.max(layerOffsetY, smask.offsetY);
        const x1 = Math.min(layerOffsetX + layerWidth, smask.offsetX + smask.canvas.width);
        const y1 = Math.min(layerOffsetY + layerHeight, smask.offsetY + smask.canvas.height);
        clipW = x1 - clipX;
        clipH = y1 - clipY;
      }
      if (clipW > 0 && clipH > 0) {
        const srcX = clipX - this.smaskPreparedOffsetX;
        const srcY = clipY - this.smaskPreparedOffsetY;
        layerCtx.save();
        layerCtx.globalAlpha = 1;
        layerCtx.setTransform(1, 0, 0, 1, 0, 0);
        const clip = new Path2D();
        clip.rect(clipX, clipY, clipW, clipH);
        layerCtx.clip(clip);
        layerCtx.globalCompositeOperation = "destination-in";
        layerCtx.drawImage(preparedEntry.canvas, srcX, srcY, clipW, clipH, clipX, clipY, clipW, clipH);
        layerCtx.restore();
      }
      if (hasOOBAlpha && oobAlpha < 255) {
        this._applySMaskOOBAlpha(layerCtx, layerOffsetX, layerOffsetY, layerWidth, layerHeight, clipX, clipY, clipX + clipW, clipY + clipH, oobAlpha);
      }
    } else {
      this.genericComposeSMask(smask, layerCtx, layerWidth, layerHeight, layerOffsetX, layerOffsetY);
    }
    if (!ctx) {
      return;
    }
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = smask.blendMode || "source-over";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(layerCtx.canvas, layerOffsetX, layerOffsetY, layerWidth, layerHeight, layerOffsetX, layerOffsetY, layerWidth, layerHeight);
    ctx.restore();
  }
  _applySMaskOOBAlpha(layerCtx, layerOffsetX, layerOffsetY, layerWidth, layerHeight, maskX0, maskY0, maskX1, maskY1, alpha) {
    const hasInnerCutout = maskX0 < maskX1 && maskY0 < maskY1;
    if (hasInnerCutout && maskX0 === layerOffsetX && maskY0 === layerOffsetY && maskX1 === layerOffsetX + layerWidth && maskY1 === layerOffsetY + layerHeight) {
      return;
    }
    const path = new Path2D();
    path.rect(layerOffsetX, layerOffsetY, layerWidth, layerHeight);
    if (hasInnerCutout) {
      path.rect(maskX0, maskY0, maskX1 - maskX0, maskY1 - maskY0);
    }
    layerCtx.save();
    layerCtx.globalAlpha = alpha / 255;
    layerCtx.setTransform(1, 0, 0, 1, 0, 0);
    layerCtx.clip(path, "evenodd");
    layerCtx.globalCompositeOperation = "destination-in";
    layerCtx.fillStyle = "#000000";
    layerCtx.fillRect(layerOffsetX, layerOffsetY, layerWidth, layerHeight);
    layerCtx.restore();
  }
  genericComposeSMask(smask, layerCtx, width, height, layerOffsetX, layerOffsetY) {
    const {
      context: maskCtx,
      offsetX: maskOffsetX,
      offsetY: maskOffsetY
    } = smask;
    layerCtx.save();
    layerCtx.globalAlpha = 1;
    layerCtx.setTransform(1, 0, 0, 1, 0, 0);
    const clip = new Path2D();
    clip.rect(layerOffsetX, layerOffsetY, width, height);
    layerCtx.clip(clip);
    layerCtx.globalCompositeOperation = "destination-in";
    layerCtx.drawImage(maskCtx.canvas, layerOffsetX - maskOffsetX, layerOffsetY - maskOffsetY, width, height, layerOffsetX, layerOffsetY, width, height);
    layerCtx.restore();
  }
  save(opIdx) {
    if (this.inSMaskMode) {
      copyCtxState(this.ctx, this.suspendedCtx);
    }
    this.ctx.save();
    const old = this.current;
    this.stateStack.push(old);
    this.current = old.clone();
    this.dependencyTracker?.save(opIdx);
  }
  restore(opIdx) {
    this.dependencyTracker?.restore(opIdx);
    if (this.stateStack.length === 0) {
      if (this.inSMaskMode) {
        this.endSMaskMode();
      }
      return;
    }
    this.current = this.stateStack.pop();
    this.ctx.restore();
    if (this.inSMaskMode) {
      copyCtxState(this.suspendedCtx, this.ctx);
      this.ctx.setTransform(this.suspendedCtx.getTransform());
    }
    this.checkSMaskState(opIdx);
    this.pendingClip = null;
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
  }
  transform(opIdx, a, b, c, d, e, f) {
    this.dependencyTracker?.recordIncrementalData("transform", opIdx);
    this.ctx.transform(a, b, c, d, e, f);
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
  }
  constructPath(opIdx, op, data, minMax) {
    let [path] = data;
    if (!minMax) {
      path ||= data[0] = new Path2D();
      if (op !== OPS.stroke && op !== OPS.closeStroke) {
        this.current.tilingPatternDims = null;
      }
      this[op](opIdx, path);
      return;
    }
    if (this.dependencyTracker !== null) {
      const outerExtraSize = op === OPS.stroke ? this.current.lineWidth / 2 : 0;
      this.dependencyTracker.resetBBox(opIdx).recordBBox(opIdx, this.ctx, minMax[0] - outerExtraSize, minMax[2] + outerExtraSize, minMax[1] - outerExtraSize, minMax[3] + outerExtraSize).recordDependencies(opIdx, ["transform"]);
    }
    if (!(path instanceof Path2D)) {
      path = data[0] = makePathFromDrawOPS(path);
    }
    Util.axialAlignedBoundingBox(minMax, getCurrentTransform(this.ctx), this.current.minMax);
    const tilingDims = this.current.tilingPatternDims;
    if (tilingDims && op !== OPS.stroke && op !== OPS.closeStroke && this.current.fillColor instanceof TilingPattern) {
      const clippedBBox = Util.intersect(this.current.clipBox, this.current.minMax);
      if (!clippedBBox) {
        this.current.tilingPatternDims = null;
      } else {
        this.current.fillColor.updatePatternDims(clippedBBox, tilingDims);
      }
    }
    this[op](opIdx, path);
    this._pathStartIdx = opIdx;
  }
  closePath(opIdx) {
    this.ctx.closePath();
  }
  stroke(opIdx, path, consumePath = true) {
    const started = consumePath && this.#beginKnockoutElement(this.current.strokeAlpha);
    const ctx = this.ctx;
    const strokeColor = this.current.strokeColor;
    ctx.globalAlpha = this.current.strokeAlpha;
    if (this.contentVisible) {
      if (typeof strokeColor === "object" && strokeColor?.getPattern) {
        const baseTransform = strokeColor.isModifyingCurrentTransform() ? ctx.getTransform() : null;
        ctx.save();
        ctx.strokeStyle = strokeColor.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.STROKE, opIdx);
        if (baseTransform) {
          const newPath = new Path2D();
          newPath.addPath(path, ctx.getTransform().invertSelf().multiplySelf(baseTransform));
          path = newPath;
        }
        this.rescaleAndStroke(path, false);
        ctx.restore();
      } else {
        this.rescaleAndStroke(path, true);
      }
    }
    this.dependencyTracker?.recordDependencies(opIdx, Dependencies.stroke);
    if (consumePath) {
      this.consumePath(opIdx, path, this.current.getClippedPathBoundingBox(PathType.STROKE, getCurrentTransform(this.ctx)));
    }
    ctx.globalAlpha = this.current.fillAlpha;
    this.#endKnockoutElement(started);
  }
  closeStroke(opIdx, path) {
    this.stroke(opIdx, path);
  }
  fill(opIdx, path, consumePath = true) {
    const started = consumePath && this.#beginKnockoutElement(this.current.fillAlpha);
    const ctx = this.ctx;
    const fillColor = this.current.fillColor;
    const isPatternFill = this.current.patternFill;
    let needRestore = false;
    const intersect = this.current.getClippedPathBoundingBox();
    this.dependencyTracker?.recordDependencies(opIdx, Dependencies.fill);
    if (isPatternFill) {
      const dims = this.current.tilingPatternDims;
      const tileIdx = dims && fillColor.canSkipPatternCanvas(dims);
      if (tileIdx) {
        fillColor.drawPattern(this, path, this.pendingEOFill, tileIdx, opIdx);
        this.pendingEOFill = false;
        if (consumePath) {
          this.consumePath(opIdx, path, intersect);
        }
        this.current.tilingPatternDims = null;
        this.#endKnockoutElement(started);
        return;
      }
      const baseTransform = fillColor.isModifyingCurrentTransform() ? ctx.getTransform() : null;
      this.dependencyTracker?.save(opIdx);
      ctx.save();
      ctx.fillStyle = fillColor.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.FILL, opIdx);
      if (baseTransform) {
        const newPath = new Path2D();
        newPath.addPath(path, ctx.getTransform().invertSelf().multiplySelf(baseTransform));
        path = newPath;
      }
      needRestore = true;
    }
    if (this.contentVisible && intersect !== null) {
      if (this.pendingEOFill) {
        ctx.fill(path, "evenodd");
        this.pendingEOFill = false;
      } else {
        ctx.fill(path);
      }
    }
    if (needRestore) {
      ctx.restore();
      this.dependencyTracker?.restore(opIdx);
    }
    if (consumePath) {
      this.consumePath(opIdx, path, intersect);
    }
    this.#endKnockoutElement(started);
  }
  eoFill(opIdx, path) {
    this.pendingEOFill = true;
    this.fill(opIdx, path);
  }
  fillStroke(opIdx, path) {
    const started = this.#beginKnockoutElement(Math.min(this.current.fillAlpha, this.current.strokeAlpha));
    this.fill(opIdx, path, false);
    this.stroke(opIdx, path, false);
    this.consumePath(opIdx, path);
    this.#endKnockoutElement(started);
  }
  eoFillStroke(opIdx, path) {
    this.pendingEOFill = true;
    this.fillStroke(opIdx, path);
  }
  closeFillStroke(opIdx, path) {
    this.fillStroke(opIdx, path);
  }
  closeEOFillStroke(opIdx, path) {
    this.pendingEOFill = true;
    this.fillStroke(opIdx, path);
  }
  endPath(opIdx, path) {
    this.consumePath(opIdx, path);
  }
  rawFillPath(opIdx, path) {
    const started = this.#beginKnockoutElement(this.current.fillAlpha);
    this.ctx.fill(path);
    this.dependencyTracker?.recordDependencies(opIdx, Dependencies.rawFillPath).recordOperation(opIdx);
    this.#endKnockoutElement(started);
  }
  clip(opIdx) {
    this.dependencyTracker?.recordFutureForcedDependency("clipMode", opIdx);
    this.pendingClip = NORMAL_CLIP;
  }
  eoClip(opIdx) {
    this.dependencyTracker?.recordFutureForcedDependency("clipMode", opIdx);
    this.pendingClip = EO_CLIP;
  }
  beginText(opIdx) {
    this.current.textMatrix = null;
    this.current.textMatrixScale = 1;
    this.current.x = this.current.lineX = 0;
    this.current.y = this.current.lineY = 0;
    this.dependencyTracker?.recordOpenMarker(opIdx).resetIncrementalData("sameLineText").resetIncrementalData("moveText", opIdx);
  }
  endText(opIdx) {
    const paths = this.pendingTextPaths;
    const ctx = this.ctx;
    if (this.dependencyTracker) {
      const {
        dependencyTracker
      } = this;
      if (paths !== undefined) {
        dependencyTracker.recordFutureForcedDependency("textClip", dependencyTracker.getOpenMarker()).recordFutureForcedDependency("textClip", opIdx);
      }
      dependencyTracker.recordCloseMarker(opIdx);
    }
    if (paths !== undefined) {
      const newPath = new Path2D();
      const invTransf = ctx.getTransform().invertSelf();
      for (const {
        transform,
        x,
        y,
        fontSize,
        path
      } of paths) {
        if (!path) {
          continue;
        }
        newPath.addPath(path, new DOMMatrix(transform).preMultiplySelf(invTransf).translate(x, y).scale(fontSize, -fontSize));
      }
      ctx.clip(newPath);
    }
    delete this.pendingTextPaths;
  }
  setCharSpacing(opIdx, spacing) {
    this.dependencyTracker?.recordSimpleData("charSpacing", opIdx);
    this.current.charSpacing = spacing;
  }
  setWordSpacing(opIdx, spacing) {
    this.dependencyTracker?.recordSimpleData("wordSpacing", opIdx);
    this.current.wordSpacing = spacing;
  }
  setHScale(opIdx, scale) {
    this.dependencyTracker?.recordSimpleData("hScale", opIdx);
    this.current.textHScale = scale / 100;
  }
  setLeading(opIdx, leading) {
    this.dependencyTracker?.recordSimpleData("leading", opIdx);
    this.current.leading = -leading;
  }
  setFont(opIdx, fontRefName, size) {
    this.dependencyTracker?.recordSimpleData("font", opIdx).recordSimpleDataFromNamed("fontObj", fontRefName, opIdx);
    const fontObj = this.commonObjs.get(fontRefName);
    const current = this.current;
    if (!fontObj) {
      throw new Error(`Can't find font for ${fontRefName}`);
    }
    current.fontMatrix = fontObj.fontMatrix || FONT_IDENTITY_MATRIX;
    if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
      warn("Invalid font matrix for font " + fontRefName);
    }
    if (size < 0) {
      size = -size;
      current.fontDirection = -1;
    } else {
      current.fontDirection = 1;
    }
    this.current.font = fontObj;
    this.current.fontSize = size;
    if (fontObj.isType3Font) {
      return;
    }
    const name = fontObj.loadedName || "sans-serif";
    const typeface = fontObj.systemFontInfo?.css || `"${name}", ${fontObj.fallbackName}`;
    let bold = "normal";
    if (fontObj.black) {
      bold = "900";
    } else if (fontObj.bold) {
      bold = "bold";
    }
    const italic = fontObj.italic ? "italic" : "normal";
    const browserFontSize = MathClamp(size, MIN_FONT_SIZE, MAX_FONT_SIZE);
    this.current.fontSizeScale = size / browserFontSize;
    this.ctx.font = `${italic} ${bold} ${browserFontSize}px ${typeface}`;
  }
  setTextRenderingMode(opIdx, mode) {
    this.dependencyTracker?.recordSimpleData("textRenderingMode", opIdx);
    this.current.textRenderingMode = mode;
  }
  setTextRise(opIdx, rise) {
    this.dependencyTracker?.recordSimpleData("textRise", opIdx);
    this.current.textRise = rise;
  }
  moveText(opIdx, x, y) {
    this.dependencyTracker?.resetIncrementalData("sameLineText").recordIncrementalData("moveText", opIdx);
    this.current.x = this.current.lineX += x;
    this.current.y = this.current.lineY += y;
  }
  setLeadingMoveText(opIdx, x, y) {
    this.setLeading(opIdx, -y);
    this.moveText(opIdx, x, y);
  }
  setTextMatrix(opIdx, matrix) {
    this.dependencyTracker?.resetIncrementalData("sameLineText").recordSimpleData("textMatrix", opIdx);
    const {
      current
    } = this;
    current.textMatrix = matrix;
    current.textMatrixScale = Math.hypot(matrix[0], matrix[1]);
    current.x = current.lineX = 0;
    current.y = current.lineY = 0;
  }
  nextLine(opIdx) {
    this.moveText(opIdx, 0, this.current.leading);
    this.dependencyTracker?.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? opIdx);
  }
  #getScaledPath(path, currentTransform, transform) {
    const newPath = new Path2D();
    newPath.addPath(path, new DOMMatrix(transform).invertSelf().multiplySelf(currentTransform));
    return newPath;
  }
  paintChar(opIdx, character, x, y, patternFillTransform, patternStrokeTransform) {
    const ctx = this.ctx;
    const current = this.current;
    const font = current.font;
    const textRenderingMode = current.textRenderingMode;
    const fontSize = current.fontSize / current.fontSizeScale;
    const fillStrokeMode = textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;
    const isAddToPathSet = !!(textRenderingMode & TextRenderingMode.ADD_TO_PATH_FLAG);
    const patternFill = current.patternFill && !font.missingFile;
    const patternStroke = current.patternStroke && !font.missingFile;
    let path;
    if ((font.disableFontFace || isAddToPathSet || patternFill || patternStroke) && !font.missingFile) {
      path = font.getPathGenerator(this.commonObjs, character);
    }
    if (path && (font.disableFontFace || patternFill || patternStroke)) {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(fontSize, -fontSize);
      this.dependencyTracker?.recordCharacterBBox(opIdx, ctx, font);
      let currentTransform;
      if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        if (patternFillTransform) {
          currentTransform = ctx.getTransform();
          ctx.setTransform(...patternFillTransform);
          const scaledPath = this.#getScaledPath(path, currentTransform, patternFillTransform);
          ctx.fill(scaledPath);
        } else {
          ctx.fill(path);
        }
      }
      if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        if (patternStrokeTransform) {
          currentTransform ||= ctx.getTransform();
          ctx.setTransform(...patternStrokeTransform);
          const {
            a,
            b,
            c,
            d
          } = currentTransform;
          const invPatternTransform = Util.inverseTransform(patternStrokeTransform);
          const transf = Util.transform([a, b, c, d, 0, 0], invPatternTransform);
          Util.singularValueDecompose2dScale(transf, XY);
          ctx.lineWidth *= Math.max(XY[0], XY[1]) / fontSize;
          ctx.stroke(this.#getScaledPath(path, currentTransform, patternStrokeTransform));
        } else {
          ctx.lineWidth /= fontSize;
          ctx.stroke(path);
        }
      }
      ctx.restore();
    } else {
      if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.fillText(character, x, y);
        this.dependencyTracker?.recordCharacterBBox(opIdx, ctx, font, fontSize, x, y, () => ctx.measureText(character));
      }
      if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        if (this.dependencyTracker) {
          this.dependencyTracker?.recordCharacterBBox(opIdx, ctx, font, fontSize, x, y, () => ctx.measureText(character)).recordDependencies(opIdx, Dependencies.stroke);
        }
        ctx.strokeText(character, x, y);
      }
    }
    if (isAddToPathSet) {
      const paths = this.pendingTextPaths ||= [];
      paths.push({
        transform: getCurrentTransform(ctx),
        x,
        y,
        fontSize,
        path
      });
      this.dependencyTracker?.recordCharacterBBox(opIdx, ctx, font, fontSize, x, y);
    }
  }
  get isFontSubpixelAAEnabled() {
    const tmpCanvas = this.canvasFactory.create(10, 10);
    const ctx = tmpCanvas.context;
    ctx.scale(1.5, 1);
    ctx.fillText("I", 0, 10);
    const data = ctx.getImageData(0, 0, 10, 10).data;
    this.canvasFactory.destroy(tmpCanvas);
    let enabled = false;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] > 0 && data[i] < 255) {
        enabled = true;
        break;
      }
    }
    return shadow(this, "isFontSubpixelAAEnabled", enabled);
  }
  showText(opIdx, glyphs) {
    if (this.dependencyTracker) {
      this.dependencyTracker.recordDependencies(opIdx, Dependencies.showText).resetBBox(opIdx);
      if (this.current.textRenderingMode & TextRenderingMode.ADD_TO_PATH_FLAG) {
        this.dependencyTracker.recordFutureForcedDependency("textClip", opIdx).inheritPendingDependenciesAsFutureForcedDependencies();
      }
    }
    const current = this.current;
    const font = current.font;
    if (font.isType3Font) {
      const started = this.#beginKnockoutElement(current.fillAlpha);
      this.showType3Text(opIdx, glyphs);
      this.dependencyTracker?.recordShowTextOperation(opIdx);
      this.#endKnockoutElement(started);
      return undefined;
    }
    const fontSize = current.fontSize;
    if (fontSize === 0) {
      this.dependencyTracker?.recordOperation(opIdx);
      return undefined;
    }
    const started = this.#beginKnockoutElement(current.fillAlpha);
    const ctx = this.ctx;
    const fontSizeScale = current.fontSizeScale;
    const charSpacing = current.charSpacing;
    const wordSpacing = current.wordSpacing;
    const fontDirection = current.fontDirection;
    const textHScale = current.textHScale * fontDirection;
    const glyphsLength = glyphs.length;
    const vertical = font.vertical;
    const spacingDir = vertical ? 1 : -1;
    const defaultVMetrics = font.defaultVMetrics;
    const widthAdvanceScale = fontSize * current.fontMatrix[0];
    const simpleFillText = current.textRenderingMode === TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
    ctx.save();
    if (current.textMatrix) {
      ctx.transform(...current.textMatrix);
    }
    ctx.translate(current.x, current.y + current.textRise);
    if (fontDirection > 0) {
      ctx.scale(textHScale, -1);
    } else {
      ctx.scale(textHScale, 1);
    }
    let patternFillTransform, patternStrokeTransform;
    const fillStrokeMode = current.textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;
    const needsFill = fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE;
    const needsStroke = fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE;
    let lineWidth = current.lineWidth;
    const scale = current.textMatrixScale;
    if (scale === 0 || lineWidth === 0) {
      if (needsStroke) {
        lineWidth = this.getSinglePixelWidth();
      }
    } else {
      lineWidth /= scale;
    }
    if (fontSizeScale !== 1.0) {
      ctx.scale(fontSizeScale, fontSizeScale);
      lineWidth /= fontSizeScale;
    }
    ctx.lineWidth = lineWidth;
    if (needsFill && current.patternFill) {
      ctx.save();
      const pattern = current.fillColor.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.FILL, opIdx);
      patternFillTransform = getCurrentTransform(ctx);
      ctx.restore();
      ctx.fillStyle = pattern;
    }
    if (needsStroke && current.patternStroke) {
      ctx.save();
      const pattern = current.strokeColor.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.STROKE, opIdx);
      patternStrokeTransform = getCurrentTransform(ctx);
      ctx.restore();
      ctx.strokeStyle = pattern;
    }
    if (font.isInvalidPDFjsFont) {
      const chars = [];
      let width = 0;
      for (const glyph of glyphs) {
        chars.push(glyph.unicode);
        width += glyph.width;
      }
      const joinedChars = chars.join("");
      ctx.fillText(joinedChars, 0, 0);
      if (this.dependencyTracker !== null) {
        const measure = ctx.measureText(joinedChars);
        this.dependencyTracker.recordBBox(opIdx, this.ctx, -measure.actualBoundingBoxLeft, measure.actualBoundingBoxRight, -measure.actualBoundingBoxAscent, measure.actualBoundingBoxDescent).recordShowTextOperation(opIdx);
      }
      current.x += width * widthAdvanceScale * textHScale;
      ctx.restore();
      this.compose();
      this.#endKnockoutElement(started);
      return undefined;
    }
    let x = 0,
      i;
    for (i = 0; i < glyphsLength; ++i) {
      const glyph = glyphs[i];
      if (typeof glyph === "number") {
        x += spacingDir * glyph * fontSize / 1000;
        continue;
      }
      let restoreNeeded = false;
      const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
      const character = glyph.fontChar;
      const accent = glyph.accent;
      let scaledX, scaledY;
      let width = glyph.width;
      if (vertical) {
        const vmetric = glyph.vmetric || defaultVMetrics;
        const vx = -(glyph.vmetric ? vmetric[1] : width * 0.5) * widthAdvanceScale;
        const vy = vmetric[2] * widthAdvanceScale;
        width = vmetric ? -vmetric[0] : width;
        scaledX = vx / fontSizeScale;
        scaledY = (x + vy) / fontSizeScale;
      } else {
        scaledX = x / fontSizeScale;
        scaledY = 0;
      }
      let measure;
      if (font.remeasure && width > 0) {
        measure = ctx.measureText(character);
        const measuredWidth = measure.width * 1000 / fontSize * fontSizeScale;
        if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
          const characterScaleX = width / measuredWidth;
          restoreNeeded = true;
          ctx.save();
          ctx.scale(characterScaleX, 1);
          scaledX /= characterScaleX;
        } else if (width !== measuredWidth) {
          scaledX += (width - measuredWidth) / 2000 * fontSize / fontSizeScale;
        }
      }
      if (this.contentVisible && (glyph.isInFont || font.missingFile)) {
        if (simpleFillText && !accent) {
          ctx.fillText(character, scaledX, scaledY);
          this.dependencyTracker?.recordCharacterBBox(opIdx, ctx, measure ? {
            bbox: null
          } : font, fontSize / fontSizeScale, scaledX, scaledY, () => measure ?? ctx.measureText(character));
        } else {
          this.paintChar(opIdx, character, scaledX, scaledY, patternFillTransform, patternStrokeTransform);
          if (accent) {
            const scaledAccentX = scaledX + fontSize * accent.offset.x / fontSizeScale;
            const scaledAccentY = scaledY - fontSize * accent.offset.y / fontSizeScale;
            this.paintChar(opIdx, accent.fontChar, scaledAccentX, scaledAccentY, patternFillTransform, patternStrokeTransform);
          }
        }
      }
      const charWidth = vertical ? width * widthAdvanceScale - spacing * fontDirection : width * widthAdvanceScale + spacing * fontDirection;
      x += charWidth;
      if (restoreNeeded) {
        ctx.restore();
      }
    }
    if (vertical) {
      current.y -= x;
    } else {
      current.x += x * textHScale;
    }
    ctx.restore();
    this.compose();
    this.dependencyTracker?.recordShowTextOperation(opIdx);
    this.#endKnockoutElement(started);
    return undefined;
  }
  showType3Text(opIdx, glyphs) {
    const ctx = this.ctx;
    const current = this.current;
    const font = current.font;
    const fontSize = current.fontSize;
    const fontDirection = current.fontDirection;
    const spacingDir = font.vertical ? 1 : -1;
    const charSpacing = current.charSpacing;
    const wordSpacing = current.wordSpacing;
    const textHScale = current.textHScale * fontDirection;
    const fontMatrix = current.fontMatrix || FONT_IDENTITY_MATRIX;
    const glyphsLength = glyphs.length;
    const isTextInvisible = current.textRenderingMode === TextRenderingMode.INVISIBLE;
    let i, glyph, width, spacingLength;
    if (isTextInvisible || fontSize === 0) {
      return;
    }
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
    ctx.save();
    if (current.textMatrix) {
      ctx.transform(...current.textMatrix);
    }
    ctx.translate(current.x, current.y + current.textRise);
    ctx.scale(textHScale, fontDirection);
    const dependencyTracker = this.dependencyTracker;
    this.dependencyTracker = dependencyTracker ? new CanvasNestedDependencyTracker(dependencyTracker, opIdx) : null;
    for (i = 0; i < glyphsLength; ++i) {
      glyph = glyphs[i];
      if (typeof glyph === "number") {
        spacingLength = spacingDir * glyph * fontSize / 1000;
        this.ctx.translate(spacingLength, 0);
        current.x += spacingLength * textHScale;
        continue;
      }
      const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
      const operatorList = font.charProcOperatorList[glyph.operatorListId];
      if (!operatorList) {
        warn(`Type3 character "${glyph.operatorListId}" is not available.`);
      } else if (this.contentVisible) {
        this.save();
        ctx.scale(fontSize, fontSize);
        ctx.transform(...fontMatrix);
        this.executeOperatorList(operatorList);
        this.restore();
      }
      const p = [glyph.width, 0];
      Util.applyTransform(p, fontMatrix);
      width = p[0] * fontSize + spacing;
      ctx.translate(width, 0);
      current.x += width * textHScale;
    }
    ctx.restore();
    if (dependencyTracker) {
      this.dependencyTracker = dependencyTracker;
    }
  }
  setCharWidth(opIdx, xWidth, yWidth) {}
  setCharWidthAndBounds(opIdx, xWidth, yWidth, llx, lly, urx, ury) {
    const clip = new Path2D();
    clip.rect(llx, lly, urx - llx, ury - lly);
    this.ctx.clip(clip);
    this.dependencyTracker?.recordBBox(opIdx, this.ctx, llx, urx, lly, ury).recordClipBox(opIdx, this.ctx, llx, urx, lly, ury);
    this.endPath(opIdx);
  }
  getColorN_Pattern(opIdx, IR) {
    let pattern;
    if (IR[0] === "TilingPattern") {
      const baseTransform = this.baseTransform || getCurrentTransform(this.ctx);
      const canvasGraphicsFactory = {
        createCanvasGraphics: (ctx, renderingOpIdx) => new CanvasGraphics(ctx, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        }, undefined, undefined, this.dependencyTracker ? new CanvasNestedDependencyTracker(this.dependencyTracker, renderingOpIdx, true) : null)
      };
      pattern = new TilingPattern(IR, this.ctx, canvasGraphicsFactory, baseTransform);
    } else {
      pattern = this._getPattern(opIdx, IR[1], IR[2]);
    }
    return pattern;
  }
  setStrokeColorN(opIdx, ...args) {
    this.dependencyTracker?.recordSimpleData("strokeColor", opIdx);
    this.current.strokeColor = this.getColorN_Pattern(opIdx, args);
    this.current.patternStroke = true;
  }
  setFillColorN(opIdx, ...args) {
    this.dependencyTracker?.recordSimpleData("fillColor", opIdx);
    const pattern = this.current.fillColor = this.getColorN_Pattern(opIdx, args);
    this.current.patternFill = true;
    this.current.tilingPatternDims = pattern instanceof TilingPattern ? [0, 0, 0, 0] : null;
  }
  setStrokeRGBColor(opIdx, color) {
    this.dependencyTracker?.recordSimpleData("strokeColor", opIdx);
    this.ctx.strokeStyle = this.current.strokeColor = color;
    this.current.patternStroke = false;
  }
  setStrokeTransparent(opIdx) {
    this.dependencyTracker?.recordSimpleData("strokeColor", opIdx);
    this.ctx.strokeStyle = this.current.strokeColor = "transparent";
    this.current.patternStroke = false;
  }
  setFillRGBColor(opIdx, color) {
    this.dependencyTracker?.recordSimpleData("fillColor", opIdx);
    this.ctx.fillStyle = this.current.fillColor = color;
    this.current.patternFill = false;
    this.current.tilingPatternDims = null;
  }
  setFillTransparent(opIdx) {
    this.dependencyTracker?.recordSimpleData("fillColor", opIdx);
    this.ctx.fillStyle = this.current.fillColor = "transparent";
    this.current.patternFill = false;
    this.current.tilingPatternDims = null;
  }
  _getPattern(opIdx, objId, matrix = null) {
    let pattern;
    if (this.cachedPatterns.has(objId)) {
      pattern = this.cachedPatterns.get(objId);
    } else {
      pattern = getShadingPattern(this.getObject(opIdx, objId));
      this.cachedPatterns.set(objId, pattern);
    }
    if (matrix) {
      pattern.matrix = matrix;
    }
    return pattern;
  }
  shadingFill(opIdx, objId) {
    if (!this.contentVisible) {
      return;
    }
    const started = this.#beginKnockoutElement(this.current.fillAlpha);
    const ctx = this.ctx;
    this.save(opIdx);
    const pattern = this._getPattern(opIdx, objId);
    ctx.fillStyle = pattern.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.SHADING, opIdx);
    const inv = getCurrentTransformInverse(ctx);
    if (inv) {
      const {
        width,
        height
      } = ctx.canvas;
      const minMax = F32_BBOX_INIT.slice();
      Util.axialAlignedBoundingBox([0, 0, width, height], inv, minMax);
      const [x0, y0, x1, y1] = minMax;
      this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
    } else {
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    }
    this.dependencyTracker?.resetBBox(opIdx).recordFullPageBBox(opIdx).recordDependencies(opIdx, Dependencies.transform).recordDependencies(opIdx, Dependencies.fill).recordOperation(opIdx);
    this.compose(this.current.getClippedPathBoundingBox());
    this.restore(opIdx);
    this.#endKnockoutElement(started);
  }
  beginInlineImage() {
    unreachable("Should not call beginInlineImage");
  }
  beginImageData() {
    unreachable("Should not call beginImageData");
  }
  paintFormXObjectBegin(opIdx, matrix, bbox) {
    if (!this.contentVisible) {
      return;
    }
    this.save(opIdx);
    this.baseTransformStack.push(this.baseTransform);
    if (matrix) {
      this.transform(opIdx, ...matrix);
    }
    this.baseTransform = getCurrentTransform(this.ctx);
    if (bbox) {
      Util.axialAlignedBoundingBox(bbox, this.baseTransform, this.current.minMax);
      const [x0, y0, x1, y1] = bbox;
      const clip = new Path2D();
      clip.rect(x0, y0, x1 - x0, y1 - y0);
      this.ctx.clip(clip);
      this.dependencyTracker?.recordClipBox(opIdx, this.ctx, x0, x1, y0, y1);
      this.endPath(opIdx);
    }
  }
  paintFormXObjectEnd(opIdx) {
    if (!this.contentVisible) {
      return;
    }
    this.restore(opIdx);
    this.baseTransform = this.baseTransformStack.pop();
  }
  beginGroup(opIdx, group) {
    if (!this.contentVisible) {
      return;
    }
    this.save(opIdx);
    const {
      inSMaskMode
    } = this;
    if (inSMaskMode) {
      this.endSMaskMode();
      this.current.activeSMask = null;
    }
    const currentCtx = this.ctx;
    if ((!group.needsIsolation || !group.isolated && !group.hasSoftMask) && !group.knockout && !group.isGray && this.#knockoutGroupLevel === 0 && currentCtx.globalAlpha === 1 && currentCtx.globalCompositeOperation === "source-over" && !inSMaskMode) {
      if (group.bbox) {
        let clip = new Path2D();
        const [x0, y0, x1, y1] = group.bbox;
        clip.rect(x0, y0, x1 - x0, y1 - y0);
        if (group.matrix) {
          const path = new Path2D();
          path.addPath(clip, new DOMMatrix(group.matrix));
          clip = path;
        }
        currentCtx.clip(clip);
      }
      this.groupStack.push(null);
      this.#groupStackMeta.push(null);
      this.groupLevel++;
      return;
    }
    if (!group.isolated && !group.knockout && this.#knockoutGroupLevel === 0) {
      info("TODO: Fully support non-isolated non-knockout groups.");
    }
    const currentTransform = getCurrentTransform(currentCtx);
    if (group.matrix) {
      currentCtx.transform(...group.matrix);
    }
    const canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
    let bounds;
    if (group.bbox) {
      bounds = F32_BBOX_INIT.slice();
      Util.axialAlignedBoundingBox(group.bbox, getCurrentTransform(currentCtx), bounds);
      bounds = Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
    } else {
      bounds = canvasBounds;
    }
    const offsetX = Math.floor(bounds[0]);
    const offsetY = Math.floor(bounds[1]);
    const drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
    const drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
    this.current.startNewPathAndClipBox([0, 0, drawnWidth, drawnHeight]);
    const scratchCanvas = this.canvasFactory.create(drawnWidth, drawnHeight);
    if (group.smask) {
      this.smaskGroupCanvases.push(scratchCanvas);
    }
    const groupCtx = scratchCanvas.context;
    const backdropCtx = group.knockout && !group.isolated ? currentCtx : null;
    const hasInnerBackdrop = !group.isolated && !group.knockout && !group.smask && group.needsIsolation && this.#knockoutGroupLevel > 0;
    const knockoutMaskEntry = group.knockout ? this.canvasFactory.create(drawnWidth, drawnHeight) : null;
    const savedKnockoutLevel = this.#knockoutGroupLevel;
    if (group.knockout) {
      this.#knockoutGroupLevel++;
    } else {
      this.#knockoutGroupLevel = 0;
    }
    groupCtx.translate(-offsetX, -offsetY);
    groupCtx.transform(...currentTransform);
    if (!group.isolated && !group.smask && inSMaskMode && group.needsIsolation) {
      groupCtx.save();
      groupCtx.setTransform(1, 0, 0, 1, 0, 0);
      groupCtx.drawImage(currentCtx.canvas, -offsetX, -offsetY);
      groupCtx.restore();
    }
    if (group.bbox) {
      let clip = new Path2D();
      const [x0, y0, x1, y1] = group.bbox;
      clip.rect(x0, y0, x1 - x0, y1 - y0);
      if (group.matrix) {
        const path = new Path2D();
        path.addPath(clip, new DOMMatrix(group.matrix));
        clip = path;
      }
      groupCtx.clip(clip);
    }
    if (group.smask) {
      this.smaskStack.push({
        canvas: scratchCanvas.canvas,
        context: groupCtx,
        offsetX,
        offsetY,
        subtype: group.smask.subtype,
        backdrop: group.smask.backdrop,
        transferMap: group.smask.transferMap || null
      });
    }
    if (!group.smask || this.dependencyTracker) {
      currentCtx.setTransform(1, 0, 0, 1, 0, 0);
      currentCtx.translate(offsetX, offsetY);
      currentCtx.save();
    }
    copyCtxState(currentCtx, groupCtx);
    this.ctx = groupCtx;
    this.dependencyTracker?.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(currentCtx);
    this.setGState(opIdx, [["BM", "source-over"], ["ca", 1], ["CA", 1], ["TR", null]]);
    this.groupStack.push(currentCtx);
    this.#groupStackMeta.push({
      backdropCtx,
      savedKnockoutLevel,
      offsetX,
      offsetY,
      hasInnerBackdrop,
      knockoutMaskEntry,
      knockoutTempEntry: null,
      knockoutBackdropEntry: null
    });
    this.groupLevel++;
  }
  endGroup(opIdx, group) {
    if (!this.contentVisible) {
      return;
    }
    this.groupLevel--;
    const groupCtx = this.ctx;
    const ctx = this.groupStack.pop();
    const groupMeta = this.#groupStackMeta.pop();
    if (groupMeta) {
      this.#knockoutGroupLevel = groupMeta.savedKnockoutLevel;
    }
    if (ctx === null) {
      this.restore(opIdx);
      return;
    }
    if (group.isGray) {
      this.#convertGroupToGray(groupCtx);
    }
    this.ctx = ctx;
    this.ctx.imageSmoothingEnabled = false;
    this.dependencyTracker?.popBaseTransform();
    if (group.smask) {
      this.tempSMask = this.smaskStack.pop();
      this.restore(opIdx);
      if (this.dependencyTracker) {
        this.ctx.restore();
        if (this.inSMaskMode) {
          this.ctx.setTransform(this.suspendedCtx.getTransform());
        }
      }
      this.#destroyKnockoutPools(groupMeta);
    } else {
      this.ctx.restore();
      const currentMtx = getCurrentTransform(this.ctx);
      this.restore(opIdx);
      this.ctx.save();
      this.ctx.setTransform(...currentMtx);
      const dirtyBox = F32_BBOX_INIT.slice();
      Util.axialAlignedBoundingBox([0, 0, groupCtx.canvas.width, groupCtx.canvas.height], currentMtx, dirtyBox);
      const parentGroupMeta = this.#groupStackMeta.at(-1);
      if (this.#knockoutGroupLevel > 0) {
        if (groupMeta.hasInnerBackdrop) {
          const {
            width,
            height
          } = groupCtx.canvas;
          const colorEntry = this.canvasFactory.create(width, height);
          const colorCtx = colorEntry.context;
          colorCtx.drawImage(ctx.canvas, groupMeta.offsetX, groupMeta.offsetY, width, height, 0, 0, width, height);
          colorCtx.globalCompositeOperation = "source-over";
          colorCtx.drawImage(groupCtx.canvas, 0, 0);
          const shapeMaskEntry = this.#createKnockoutMaskCanvas(groupCtx.canvas);
          colorCtx.globalCompositeOperation = "destination-in";
          colorCtx.drawImage(shapeMaskEntry.canvas, 0, 0);
          const sourceCompositeOperation = this.ctx.globalCompositeOperation;
          const sourceAlpha = this.ctx.globalAlpha;
          const sourceFilter = this.ctx.filter;
          this.ctx.save();
          this.ctx.setTransform(...currentMtx);
          this.ctx.globalAlpha = 1;
          if (FeatureTest.isCanvasFilterSupported) {
            this.ctx.filter = "none";
          }
          this.ctx.globalCompositeOperation = "destination-out";
          this.ctx.drawImage(shapeMaskEntry.canvas, 0, 0);
          this.ctx.globalCompositeOperation = sourceCompositeOperation;
          this.ctx.globalAlpha = sourceAlpha;
          if (FeatureTest.isCanvasFilterSupported) {
            this.ctx.filter = sourceFilter ?? "none";
          }
          this.ctx.drawImage(colorEntry.canvas, 0, 0);
          this.ctx.restore();
          this.canvasFactory.destroy(shapeMaskEntry);
          this.canvasFactory.destroy(colorEntry);
        } else {
          const backdropCtx = parentGroupMeta?.backdropCtx ?? null;
          this.#compositeKnockoutSurface(this.ctx, groupCtx.canvas, {
            backdropCanvas: backdropCtx?.canvas ?? null,
            destTransform: currentMtx,
            backdropOffset: backdropCtx ? [parentGroupMeta.offsetX + groupMeta.offsetX, parentGroupMeta.offsetY + groupMeta.offsetY] : [0, 0],
            sourceAlpha: this.ctx.globalAlpha,
            sourceFilter: this.ctx.filter
          });
        }
      } else {
        this.ctx.drawImage(groupCtx.canvas, 0, 0);
      }
      this.ctx.restore();
      this.canvasFactory.destroy({
        canvas: groupCtx.canvas,
        context: groupCtx
      });
      this.#destroyKnockoutPools(groupMeta);
      this.compose(dirtyBox);
    }
  }
  #convertGroupToGray(groupCtx) {
    const {
      canvas
    } = groupCtx;
    const {
      width,
      height
    } = canvas;
    if (FeatureTest.isCanvasFilterSupported) {
      groupCtx.save();
      groupCtx.setTransform(1, 0, 0, 1, 0, 0);
      groupCtx.filter = "grayscale(1)";
      groupCtx.globalAlpha = 1;
      groupCtx.globalCompositeOperation = "copy";
      groupCtx.drawImage(canvas, 0, 0);
      groupCtx.restore();
      return;
    }
    const imageData = groupCtx.getImageData(0, 0, width, height);
    const {
      data
    } = imageData;
    for (let i = 0, ii = data.length; i < ii; i += 4) {
      const gray = data[i] * 0.2126 + data[i + 1] * 0.7152 + data[i + 2] * 0.0722 + 0.5 | 0;
      data[i] = data[i + 1] = data[i + 2] = gray;
    }
    groupCtx.putImageData(imageData, 0, 0);
  }
  #destroyKnockoutPools(groupMeta) {
    if (!groupMeta) {
      return;
    }
    if (groupMeta.knockoutMaskEntry) {
      this.canvasFactory.destroy(groupMeta.knockoutMaskEntry);
      groupMeta.knockoutMaskEntry = null;
    }
    if (groupMeta.knockoutTempEntry) {
      this.canvasFactory.destroy(groupMeta.knockoutTempEntry);
      groupMeta.knockoutTempEntry = null;
    }
    if (groupMeta.knockoutBackdropEntry) {
      this.canvasFactory.destroy(groupMeta.knockoutBackdropEntry);
      groupMeta.knockoutBackdropEntry = null;
    }
  }
  beginAnnotation(opIdx, id, rect, transform, matrix, hasOwnCanvas, canvasName) {
    this.#restoreInitialState();
    resetCtxToDefault(this.ctx);
    this.ctx.save();
    this.save(opIdx);
    if (this.baseTransform) {
      this.ctx.setTransform(...this.baseTransform);
    }
    if (rect) {
      const width = rect[2] - rect[0];
      const height = rect[3] - rect[1];
      if (hasOwnCanvas && this.annotationCanvasMap) {
        transform = transform.slice();
        transform[4] -= rect[0];
        transform[5] -= rect[1];
        rect = rect.slice();
        rect[0] = rect[1] = 0;
        rect[2] = width;
        rect[3] = height;
        Util.singularValueDecompose2dScale(getCurrentTransform(this.ctx), XY);
        const {
          viewportScale
        } = this;
        const canvasWidth = Math.ceil(width * this.outputScaleX * viewportScale);
        const canvasHeight = Math.ceil(height * this.outputScaleY * viewportScale);
        this.annotationCanvas = this.canvasFactory.create(canvasWidth, canvasHeight);
        const {
          canvas,
          context
        } = this.annotationCanvas;
        if (canvasName) {
          const canvases = this.annotationCanvasMap.getOrInsertComputed(id, makeArr);
          canvas.setAttribute("data-canvas-name", canvasName);
          const index = canvases.findIndex(c => c.getAttribute("data-canvas-name") === canvasName);
          if (index === -1) {
            canvases.push(canvas);
          } else {
            canvases[index] = canvas;
          }
        } else {
          this.annotationCanvasMap.set(id, canvas);
        }
        this.annotationCanvas.savedCtx = this.ctx;
        this.ctx = context;
        this.ctx.save();
        this.ctx.setTransform(XY[0], 0, 0, -XY[1], 0, height * XY[1]);
        resetCtxToDefault(this.ctx);
      } else {
        resetCtxToDefault(this.ctx);
        this.endPath(opIdx);
        const clip = new Path2D();
        clip.rect(rect[0], rect[1], width, height);
        this.ctx.clip(clip);
      }
    }
    this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
    this.baseTransformStack.push(this.baseTransform);
    this.transform(opIdx, ...transform);
    this.transform(opIdx, ...matrix);
    this.baseTransform = getCurrentTransform(this.ctx);
  }
  endAnnotation(opIdx) {
    if (this.annotationCanvas) {
      this.ctx.restore();
      this.#drawFilter();
      this.ctx = this.annotationCanvas.savedCtx;
      delete this.annotationCanvas.savedCtx;
      delete this.annotationCanvas;
    }
    this.baseTransform = this.baseTransformStack.pop();
  }
  paintImageMaskXObject(opIdx, img) {
    if (!this.contentVisible) {
      return;
    }
    const count = img.count;
    img = this.getObject(opIdx, img.data, img);
    img.count = count;
    const started = this.#beginKnockoutElement(this.current.fillAlpha);
    const ctx = this.ctx;
    const mask = this._createMaskCanvas(opIdx, img);
    const maskCanvas = mask.canvas;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(maskCanvas, mask.offsetX, mask.offsetY);
    this.dependencyTracker?.resetBBox(opIdx).recordBBox(opIdx, this.ctx, mask.offsetX, mask.offsetX + maskCanvas.width, mask.offsetY, mask.offsetY + maskCanvas.height).recordOperation(opIdx);
    ctx.restore();
    if (mask.canvasEntry) {
      this.canvasFactory.destroy(mask.canvasEntry);
    }
    this.compose();
    this.#endKnockoutElement(started);
  }
  paintImageMaskXObjectRepeat(opIdx, img, scaleX, skewX = 0, skewY = 0, scaleY, positions) {
    if (!this.contentVisible) {
      return;
    }
    img = this.getObject(opIdx, img.data, img);
    const started = this.#beginKnockoutElement(this.current.fillAlpha);
    const ctx = this.ctx;
    ctx.save();
    const currentTransform = getCurrentTransform(ctx);
    ctx.transform(scaleX, skewX, skewY, scaleY, 0, 0);
    const mask = this._createMaskCanvas(opIdx, img);
    ctx.setTransform(1, 0, 0, 1, mask.offsetX - currentTransform[4], mask.offsetY - currentTransform[5]);
    this.dependencyTracker?.resetBBox(opIdx);
    for (let i = 0, ii = positions.length; i < ii; i += 2) {
      const trans = Util.transform(currentTransform, [scaleX, skewX, skewY, scaleY, positions[i], positions[i + 1]]);
      ctx.drawImage(mask.canvas, trans[4], trans[5]);
      this.dependencyTracker?.recordBBox(opIdx, this.ctx, trans[4], trans[4] + mask.canvas.width, trans[5], trans[5] + mask.canvas.height);
    }
    ctx.restore();
    if (mask.canvasEntry) {
      this.canvasFactory.destroy(mask.canvasEntry);
    }
    this.compose();
    this.dependencyTracker?.recordOperation(opIdx);
    this.#endKnockoutElement(started);
  }
  paintImageMaskXObjectGroup(opIdx, images) {
    if (!this.contentVisible) {
      return;
    }
    const started = this.#beginKnockoutElement(this.current.fillAlpha);
    const ctx = this.ctx;
    const fillColor = this.current.fillColor;
    const isPatternFill = this.current.patternFill;
    this.dependencyTracker?.resetBBox(opIdx).recordDependencies(opIdx, Dependencies.transformAndFill);
    for (const image of images) {
      const {
        data,
        width,
        height,
        transform
      } = image;
      const maskCanvas = this.canvasFactory.create(width, height);
      const maskCtx = maskCanvas.context;
      maskCtx.save();
      const img = this.getObject(opIdx, data, image);
      putBinaryImageMask(maskCtx, img);
      maskCtx.globalCompositeOperation = "source-in";
      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this, getCurrentTransformInverse(ctx), PathType.FILL, opIdx) : fillColor;
      maskCtx.fillRect(0, 0, width, height);
      maskCtx.restore();
      ctx.save();
      ctx.transform(...transform);
      ctx.scale(1, -1);
      drawImageAtIntegerCoords(ctx, maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
      this.canvasFactory.destroy(maskCanvas);
      this.dependencyTracker?.recordBBox(opIdx, ctx, 0, width, 0, height);
      ctx.restore();
    }
    this.compose();
    this.dependencyTracker?.recordOperation(opIdx);
    this.#endKnockoutElement(started);
  }
  paintImageXObject(opIdx, objId) {
    if (!this.contentVisible) {
      return;
    }
    const imgData = this.getObject(opIdx, objId);
    if (!imgData) {
      warn("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(opIdx, imgData);
  }
  paintImageXObjectRepeat(opIdx, objId, scaleX, scaleY, positions) {
    if (!this.contentVisible) {
      return;
    }
    const imgData = this.getObject(opIdx, objId);
    if (!imgData) {
      warn("Dependent image isn't ready yet");
      return;
    }
    const width = imgData.width;
    const height = imgData.height;
    const map = [];
    for (let i = 0, ii = positions.length; i < ii; i += 2) {
      map.push({
        transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
        x: 0,
        y: 0,
        w: width,
        h: height
      });
    }
    this.paintInlineImageXObjectGroup(opIdx, imgData, map);
  }
  applyTransferMapsToCanvas(ctx) {
    if (this.current.transferMaps !== "none") {
      ctx.filter = this.current.transferMaps;
      ctx.drawImage(ctx.canvas, 0, 0);
      ctx.filter = "none";
    }
    return ctx.canvas;
  }
  applyTransferMapsToBitmap(imgData) {
    if (this.current.transferMaps === "none") {
      return {
        img: imgData.bitmap,
        canvasEntry: null
      };
    }
    const {
      bitmap,
      width,
      height
    } = imgData;
    const tmpCanvas = this.canvasFactory.create(width, height);
    const tmpCtx = tmpCanvas.context;
    tmpCtx.filter = this.current.transferMaps;
    tmpCtx.drawImage(bitmap, 0, 0);
    tmpCtx.filter = "none";
    return {
      img: tmpCanvas.canvas,
      canvasEntry: tmpCanvas
    };
  }
  paintInlineImageXObject(opIdx, imgData) {
    if (!this.contentVisible) {
      return;
    }
    const width = imgData.width;
    const height = imgData.height;
    const started = this.#beginKnockoutElement(this.current.fillAlpha);
    const ctx = this.ctx;
    this.save(opIdx);
    const {
      filter
    } = ctx;
    if (filter !== "none" && filter !== "") {
      ctx.filter = "none";
    }
    ctx.scale(1 / width, -1 / height);
    let imgToPaint;
    let inlineImgCanvas = null;
    if (imgData.bitmap) {
      const result = this.applyTransferMapsToBitmap(imgData);
      imgToPaint = result.img;
      inlineImgCanvas = result.canvasEntry;
    } else if (typeof HTMLElement === "function" && imgData instanceof HTMLElement || !imgData.data) {
      imgToPaint = imgData;
    } else {
      const tmpCanvas = this.canvasFactory.create(width, height);
      putBinaryImageData(tmpCanvas.context, imgData);
      imgToPaint = this.applyTransferMapsToCanvas(tmpCanvas.context);
      inlineImgCanvas = tmpCanvas;
    }
    const scaled = this._scaleImage(imgToPaint, getCurrentTransformInverse(ctx));
    ctx.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(ctx), imgData.interpolate);
    if (this.dependencyTracker) {
      this.dependencyTracker.resetBBox(opIdx).recordBBox(opIdx, ctx, 0, width, -height, 0).recordDependencies(opIdx, Dependencies.imageXObject).recordOperation(opIdx);
      this.imagesTracker?.record(ctx, width, height, this.dependencyTracker.clipBox);
    }
    drawImageAtIntegerCoords(ctx, scaled.img, 0, 0, scaled.paintWidth, scaled.paintHeight, 0, -height, width, height);
    if (scaled.tmpCanvas) {
      this.canvasFactory.destroy(scaled.tmpCanvas);
    }
    if (inlineImgCanvas) {
      this.canvasFactory.destroy(inlineImgCanvas);
    }
    this.compose();
    this.restore(opIdx);
    this.#endKnockoutElement(started);
  }
  paintInlineImageXObjectGroup(opIdx, imgData, map) {
    if (!this.contentVisible) {
      return;
    }
    const started = this.#beginKnockoutElement(this.current.fillAlpha);
    const ctx = this.ctx;
    let imgToPaint;
    let inlineImgCanvas = null;
    if (imgData.bitmap) {
      imgToPaint = imgData.bitmap;
    } else {
      const w = imgData.width;
      const h = imgData.height;
      const tmpCanvas = this.canvasFactory.create(w, h);
      putBinaryImageData(tmpCanvas.context, imgData);
      imgToPaint = this.applyTransferMapsToCanvas(tmpCanvas.context);
      inlineImgCanvas = tmpCanvas;
    }
    this.dependencyTracker?.resetBBox(opIdx);
    for (const entry of map) {
      ctx.save();
      ctx.transform(...entry.transform);
      ctx.scale(1, -1);
      drawImageAtIntegerCoords(ctx, imgToPaint, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
      this.dependencyTracker?.recordBBox(opIdx, ctx, 0, 1, -1, 0);
      ctx.restore();
    }
    if (inlineImgCanvas) {
      this.canvasFactory.destroy(inlineImgCanvas);
    }
    this.dependencyTracker?.recordOperation(opIdx);
    this.compose();
    this.#endKnockoutElement(started);
  }
  paintSolidColorImageMask(opIdx) {
    if (!this.contentVisible) {
      return;
    }
    const started = this.#beginKnockoutElement(this.current.fillAlpha);
    this.dependencyTracker?.resetBBox(opIdx).recordBBox(opIdx, this.ctx, 0, 1, 0, 1).recordDependencies(opIdx, Dependencies.fill).recordOperation(opIdx);
    this.ctx.fillRect(0, 0, 1, 1);
    this.compose();
    this.#endKnockoutElement(started);
  }
  markPoint(opIdx, tag) {}
  markPointProps(opIdx, tag, properties) {}
  beginMarkedContent(opIdx, tag) {
    this.dependencyTracker?.beginMarkedContent(opIdx);
    this.markedContentStack.push({
      visible: true
    });
  }
  beginMarkedContentProps(opIdx, tag, properties) {
    this.dependencyTracker?.beginMarkedContent(opIdx);
    if (tag === "OC") {
      this.markedContentStack.push({
        visible: this.optionalContentConfig.isVisible(properties)
      });
    } else {
      this.markedContentStack.push({
        visible: true
      });
    }
    this.contentVisible = this.isContentVisible();
  }
  endMarkedContent(opIdx) {
    this.dependencyTracker?.endMarkedContent(opIdx);
    this.markedContentStack.pop();
    this.contentVisible = this.isContentVisible();
  }
  beginCompat(opIdx) {}
  endCompat(opIdx) {}
  consumePath(opIdx, path, clipBox) {
    const isEmpty = this.current.isEmptyClip();
    if (this.pendingClip) {
      this.current.updateClipFromPath();
    }
    if (!this.pendingClip) {
      this.compose(clipBox);
    }
    const ctx = this.ctx;
    if (this.pendingClip) {
      if (!isEmpty) {
        if (this.pendingClip === EO_CLIP) {
          ctx.clip(path, "evenodd");
        } else {
          ctx.clip(path);
        }
      }
      this.pendingClip = null;
      this.dependencyTracker?.bboxToClipBoxDropOperation(opIdx).recordFutureForcedDependency("clipPath", opIdx);
    } else {
      this.dependencyTracker?.recordOperation(opIdx);
    }
    this.current.startNewPathAndClipBox(this.current.clipBox);
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const m = getCurrentTransform(this.ctx);
      if (m[1] === 0 && m[2] === 0) {
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(m[0]), Math.abs(m[3]));
      } else {
        const absDet = Math.abs(m[0] * m[3] - m[2] * m[1]);
        const normX = Math.hypot(m[0], m[2]);
        const normY = Math.hypot(m[1], m[3]);
        this._cachedGetSinglePixelWidth = Math.max(normX, normY) / absDet;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth
      } = this.current;
      const {
        a,
        b,
        c,
        d
      } = this.ctx.getTransform();
      let scaleX, scaleY;
      if (b === 0 && c === 0) {
        const normX = Math.abs(a);
        const normY = Math.abs(d);
        if (normX === normY) {
          if (lineWidth === 0) {
            scaleX = scaleY = 1 / normX;
          } else {
            const scaledLineWidth = normX * lineWidth;
            scaleX = scaleY = scaledLineWidth < 1 ? 1 / scaledLineWidth : 1;
          }
        } else if (lineWidth === 0) {
          scaleX = 1 / normX;
          scaleY = 1 / normY;
        } else {
          const scaledXLineWidth = normX * lineWidth;
          const scaledYLineWidth = normY * lineWidth;
          scaleX = scaledXLineWidth < 1 ? 1 / scaledXLineWidth : 1;
          scaleY = scaledYLineWidth < 1 ? 1 / scaledYLineWidth : 1;
        }
      } else {
        const absDet = Math.abs(a * d - b * c);
        const normX = Math.hypot(a, b);
        const normY = Math.hypot(c, d);
        if (lineWidth === 0) {
          scaleX = normY / absDet;
          scaleY = normX / absDet;
        } else {
          const baseArea = lineWidth * absDet;
          scaleX = normY > baseArea ? normY / baseArea : 1;
          scaleY = normX > baseArea ? normX / baseArea : 1;
        }
      }
      this._cachedScaleForStroking[0] = scaleX;
      this._cachedScaleForStroking[1] = scaleY;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(path, saveRestore) {
    const {
      ctx,
      current: {
        lineWidth
      }
    } = this;
    const [scaleX, scaleY] = this.getScaleForStroking();
    if (scaleX === scaleY) {
      ctx.lineWidth = (lineWidth || 1) * scaleX;
      ctx.stroke(path);
      return;
    }
    const dashes = ctx.getLineDash();
    if (saveRestore) {
      ctx.save();
    }
    ctx.scale(scaleX, scaleY);
    SCALE_MATRIX.a = 1 / scaleX;
    SCALE_MATRIX.d = 1 / scaleY;
    const newPath = new Path2D();
    newPath.addPath(path, SCALE_MATRIX);
    if (dashes.length > 0) {
      const scale = Math.max(scaleX, scaleY);
      ctx.setLineDash(dashes.map(x => x / scale));
      ctx.lineDashOffset /= scale;
    }
    ctx.lineWidth = lineWidth || 1;
    ctx.stroke(newPath);
    if (saveRestore) {
      ctx.restore();
    }
  }
  isContentVisible() {
    for (let i = this.markedContentStack.length - 1; i >= 0; i--) {
      if (!this.markedContentStack[i].visible) {
        return false;
      }
    }
    return true;
  }
}
for (const op in OPS) {
  if (CanvasGraphics.prototype[op] !== undefined) {
    CanvasGraphics.prototype[OPS[op]] = CanvasGraphics.prototype[op];
  }
}

;// ./src/shared/base_pdf_stream.js

class BasePDFStream {
  #PDFStreamReader = null;
  #PDFStreamRangeReader = null;
  _fullReader = null;
  _rangeReaders = new Set();
  _source = null;
  constructor(source, PDFStreamReader, PDFStreamRangeReader) {
    this._source = source;
    this.#PDFStreamReader = PDFStreamReader;
    this.#PDFStreamRangeReader = PDFStreamRangeReader;
  }
  get _progressiveDataLength() {
    return this._fullReader?._loaded ?? 0;
  }
  getFullReader() {
    assert(!this._fullReader, "BasePDFStream.getFullReader can only be called once.");
    return this._fullReader = new this.#PDFStreamReader(this);
  }
  getRangeReader(begin, end) {
    if (end <= this._progressiveDataLength) {
      return null;
    }
    const reader = new this.#PDFStreamRangeReader(this, begin, end);
    this._rangeReaders.add(reader);
    return reader;
  }
  cancelAllRequests(reason) {
    this._fullReader?.cancel(reason);
    for (const reader of new Set(this._rangeReaders)) {
      reader.cancel(reason);
    }
  }
}
class BasePDFStreamReader {
  onProgress = null;
  _contentLength = 0;
  _filename = null;
  _headersCapability = Promise.withResolvers();
  _isRangeSupported = false;
  _isStreamingSupported = false;
  _loaded = 0;
  _stream = null;
  constructor(stream) {
    this._stream = stream;
  }
  _callOnProgress() {
    this.onProgress?.({
      loaded: this._loaded,
      total: this._contentLength
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    unreachable("Abstract method `read` called");
  }
  cancel(reason) {
    unreachable("Abstract method `cancel` called");
  }
}
class BasePDFStreamRangeReader {
  _stream = null;
  constructor(stream, begin, end) {
    this._stream = stream;
  }
  async read() {
    unreachable("Abstract method `read` called");
  }
  cancel(reason) {
    unreachable("Abstract method `cancel` called");
  }
}

;// ./src/display/content_disposition.js

function getFilenameFromContentDispositionHeader(contentDisposition) {
  let needsEncodingFixup = true;
  let tmp = toParamRegExp("filename\\*", "i").exec(contentDisposition);
  if (tmp) {
    tmp = tmp[1];
    let filename = rfc2616unquote(tmp);
    filename = unescape(filename);
    filename = rfc5987decode(filename);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }
  tmp = rfc2231getparam(contentDisposition);
  if (tmp) {
    const filename = rfc2047decode(tmp);
    return fixupEncoding(filename);
  }
  tmp = toParamRegExp("filename", "i").exec(contentDisposition);
  if (tmp) {
    tmp = tmp[1];
    let filename = rfc2616unquote(tmp);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }
  function toParamRegExp(attributePattern, flags) {
    return new RegExp("(?:^|;)\\s*" + attributePattern + "\\s*=\\s*" + "(" + '[^";\\s][^;\\s]*' + "|" + '"(?:[^"\\\\]|\\\\"?)+"?' + ")", flags);
  }
  function textdecode(encoding, value) {
    if (encoding) {
      if (!/^[\x00-\xFF]+$/.test(value)) {
        return value;
      }
      try {
        const decoder = new TextDecoder(encoding, {
          fatal: true
        });
        const buffer = stringToBytes(value);
        value = decoder.decode(buffer);
        needsEncodingFixup = false;
      } catch {}
    }
    return value;
  }
  function fixupEncoding(value) {
    if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
      value = textdecode("utf-8", value);
      if (needsEncodingFixup) {
        value = textdecode("iso-8859-1", value);
      }
    }
    return value;
  }
  function rfc2231getparam(contentDispositionStr) {
    const matches = [];
    let match;
    const iter = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    while ((match = iter.exec(contentDispositionStr)) !== null) {
      let [, n, quot, part] = match;
      n = parseInt(n, 10);
      if (n in matches) {
        if (n === 0) {
          break;
        }
        continue;
      }
      matches[n] = [quot, part];
    }
    const parts = [];
    for (let n = 0; n < matches.length; ++n) {
      if (!(n in matches)) {
        break;
      }
      let [quot, part] = matches[n];
      part = rfc2616unquote(part);
      if (quot) {
        part = unescape(part);
        if (n === 0) {
          part = rfc5987decode(part);
        }
      }
      parts.push(part);
    }
    return parts.join("");
  }
  function rfc2616unquote(value) {
    if (value.startsWith('"')) {
      const parts = value.slice(1).split('\\"');
      for (let i = 0; i < parts.length; ++i) {
        const quotindex = parts[i].indexOf('"');
        if (quotindex !== -1) {
          parts[i] = parts[i].slice(0, quotindex);
          parts.length = i + 1;
        }
        parts[i] = parts[i].replaceAll(/\\(.)/g, "$1");
      }
      value = parts.join('"');
    }
    return value;
  }
  function rfc5987decode(extvalue) {
    const encodingend = extvalue.indexOf("'");
    if (encodingend === -1) {
      return extvalue;
    }
    const encoding = extvalue.slice(0, encodingend);
    const langvalue = extvalue.slice(encodingend + 1);
    const value = langvalue.replace(/^[^']*'/, "");
    return textdecode(encoding, value);
  }
  function rfc2047decode(value) {
    if (!value.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(value)) {
      return value;
    }
    return value.replaceAll(/=\?([\w-]*)\?([QB])\?((?:[^?]|\?(?!=))*)\?=/gi, function (matches, charset, encoding, text) {
      if (encoding === "q" || encoding === "Q") {
        text = text.replaceAll("_", " ");
        text = text.replaceAll(/=([0-9a-f]{2})/gi, function (match, hex) {
          return String.fromCharCode(parseInt(hex, 16));
        });
        return textdecode(charset, text);
      }
      try {
        text = atob(text);
      } catch {}
      return textdecode(charset, text);
    });
  }
  return "";
}

;// ./src/display/network_utils.js



function createHeaders(isHttp, httpHeaders) {
  const headers = new Headers();
  if (!isHttp || !httpHeaders || typeof httpHeaders !== "object") {
    return headers;
  }
  for (const key in httpHeaders) {
    const val = httpHeaders[key];
    if (val !== undefined) {
      headers.append(key, val);
    }
  }
  return headers;
}
function getResponseOrigin(url) {
  return URL.parse(url)?.origin ?? null;
}
function validateRangeRequestCapabilities({
  responseHeaders,
  isHttp,
  rangeChunkSize,
  disableRange
}) {
  const rv = {
    contentLength: 0,
    isRangeSupported: false
  };
  const length = parseInt(responseHeaders.get("Content-Length"), 10);
  if (!Number.isInteger(length)) {
    return rv;
  }
  rv.contentLength = length;
  if (length <= 2 * rangeChunkSize) {
    return rv;
  }
  if (disableRange || !isHttp) {
    return rv;
  }
  if (responseHeaders.get("Accept-Ranges") !== "bytes") {
    return rv;
  }
  const contentEncoding = responseHeaders.get("Content-Encoding") || "identity";
  if (contentEncoding === "identity") {
    rv.isRangeSupported = true;
  }
  return rv;
}
function extractFilenameFromHeader(responseHeaders) {
  const contentDisposition = responseHeaders.get("Content-Disposition");
  if (contentDisposition) {
    let filename = getFilenameFromContentDispositionHeader(contentDisposition);
    if (filename.includes("%")) {
      try {
        filename = decodeURIComponent(filename);
      } catch {}
    }
    if (isPdfFile(filename)) {
      return filename;
    }
  }
  return null;
}
function createResponseError(status, url) {
  return new ResponseException(`Unexpected server response (${status}) while retrieving PDF "${url.href}".`, status, status === 404 || status === 0 && url.protocol === "file:");
}
function ensureResponseOrigin(rangeOrigin, origin) {
  if (rangeOrigin !== origin) {
    throw new Error(`Expected range response-origin "${rangeOrigin}" to match "${origin}".`);
  }
}

;// ./src/display/fetch_stream.js



function fetchUrl(url, headers, withCredentials, abortController) {
  return fetch(url, {
    method: "GET",
    headers,
    signal: abortController.signal,
    mode: "cors",
    credentials: withCredentials ? "include" : "same-origin",
    redirect: "follow"
  });
}
function ensureResponseStatus(status, url) {
  if (status !== 200 && status !== 206) {
    throw createResponseError(status, url);
  }
}
function getArrayBuffer(val) {
  if (val instanceof Uint8Array) {
    return val.buffer;
  }
  if (val instanceof ArrayBuffer) {
    return val;
  }
  throw new Error(`getArrayBuffer - unexpected data: ${val}`);
}
class PDFFetchStream extends BasePDFStream {
  _responseOrigin = null;
  constructor(source) {
    super(source, PDFFetchStreamReader, PDFFetchStreamRangeReader);
    const {
      httpHeaders,
      url
    } = source;
    assert(/https?:/.test(url.protocol), "PDFFetchStream only supports http(s):// URLs.");
    this.headers = createHeaders(true, httpHeaders);
  }
}
class PDFFetchStreamReader extends BasePDFStreamReader {
  _abortController = new AbortController();
  _reader = null;
  constructor(stream) {
    super(stream);
    const {
      disableRange,
      disableStream,
      rangeChunkSize,
      url,
      withCredentials
    } = stream._source;
    this._isStreamingSupported = !disableStream;
    const headers = new Headers(stream.headers);
    fetchUrl(url, headers, withCredentials, this._abortController).then(response => {
      stream._responseOrigin = getResponseOrigin(response.url);
      ensureResponseStatus(response.status, url);
      this._reader = response.body.getReader();
      const responseHeaders = response.headers;
      const {
        contentLength,
        isRangeSupported
      } = validateRangeRequestCapabilities({
        responseHeaders,
        isHttp: true,
        rangeChunkSize,
        disableRange
      });
      this._contentLength = contentLength;
      this._isRangeSupported = isRangeSupported;
      this._filename = extractFilenameFromHeader(responseHeaders);
      if (!this._isStreamingSupported && this._isRangeSupported) {
        this.cancel(new AbortException("Streaming is disabled."));
      }
      this._headersCapability.resolve();
    }).catch(this._headersCapability.reject);
  }
  async read() {
    await this._headersCapability.promise;
    const {
      value,
      done
    } = await this._reader.read();
    if (done) {
      return {
        value,
        done
      };
    }
    this._loaded += value.byteLength;
    this._callOnProgress();
    return {
      value: getArrayBuffer(value),
      done: false
    };
  }
  cancel(reason) {
    this._reader?.cancel(reason);
    this._abortController.abort();
  }
}
class PDFFetchStreamRangeReader extends BasePDFStreamRangeReader {
  _abortController = new AbortController();
  _readCapability = Promise.withResolvers();
  _reader = null;
  constructor(stream, begin, end) {
    super(stream, begin, end);
    const {
      url,
      withCredentials
    } = stream._source;
    const headers = new Headers(stream.headers);
    headers.append("Range", `bytes=${begin}-${end - 1}`);
    fetchUrl(url, headers, withCredentials, this._abortController).then(response => {
      const responseOrigin = getResponseOrigin(response.url);
      ensureResponseOrigin(responseOrigin, stream._responseOrigin);
      ensureResponseStatus(response.status, url);
      this._reader = response.body.getReader();
      this._readCapability.resolve();
    }).catch(this._readCapability.reject);
  }
  async read() {
    await this._readCapability.promise;
    const {
      value,
      done
    } = await this._reader.read();
    if (done) {
      return {
        value,
        done
      };
    }
    return {
      value: getArrayBuffer(value),
      done: false
    };
  }
  cancel(reason) {
    this._reader?.cancel(reason);
    this._abortController.abort();
  }
}

;// ./src/display/transport_stream.js



function transport_stream_getArrayBuffer(val) {
  return val instanceof Uint8Array && val.byteLength === val.buffer.byteLength ? val.buffer : new Uint8Array(val).buffer;
}
function endRequests() {
  for (const capability of this._requests) {
    capability.resolve({
      value: undefined,
      done: true
    });
  }
  this._requests.length = 0;
}
class PDFDataTransportStream extends BasePDFStream {
  _progressiveDone = false;
  _queuedChunks = [];
  constructor(source) {
    super(source, PDFDataTransportStreamReader, PDFDataTransportStreamRangeReader);
    const {
      pdfDataRangeTransport
    } = source;
    const {
      initialData,
      progressiveDone
    } = pdfDataRangeTransport;
    if (initialData?.length > 0) {
      const buffer = transport_stream_getArrayBuffer(initialData);
      this._queuedChunks.push(buffer);
    }
    this._progressiveDone = progressiveDone;
    const listener = args => {
      switch (args.type) {
        case "range":
        case "progressiveRead":
          this.#onReceiveData(args.begin, args.chunk);
          break;
        case "progressiveDone":
          this._fullReader?.progressiveDone();
          this._progressiveDone = true;
          break;
      }
    };
    pdfDataRangeTransport.transportReady(listener);
  }
  #onReceiveData(begin, chunk) {
    const buffer = transport_stream_getArrayBuffer(chunk);
    if (begin === undefined) {
      if (this._fullReader) {
        this._fullReader._enqueue(buffer);
      } else {
        this._queuedChunks.push(buffer);
      }
    } else {
      const rangeReader = this._rangeReaders.keys().find(r => r._begin === begin);
      assert(rangeReader, "#onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
      rangeReader._enqueue(buffer);
    }
  }
  getFullReader() {
    const reader = super.getFullReader();
    this._queuedChunks = null;
    return reader;
  }
  getRangeReader(begin, end) {
    const reader = super.getRangeReader(begin, end);
    if (reader) {
      reader.onDone = () => this._rangeReaders.delete(reader);
      this._source.pdfDataRangeTransport.requestDataRange(begin, end);
    }
    return reader;
  }
  cancelAllRequests(reason) {
    super.cancelAllRequests(reason);
    this._source.pdfDataRangeTransport.abort();
  }
}
class PDFDataTransportStreamReader extends BasePDFStreamReader {
  #endRequests = endRequests.bind(this);
  _done = false;
  _queuedChunks = null;
  _requests = [];
  constructor(stream) {
    super(stream);
    const {
      pdfDataRangeTransport,
      disableRange,
      disableStream
    } = stream._source;
    const {
      length,
      contentDispositionFilename
    } = pdfDataRangeTransport;
    this._queuedChunks = stream._queuedChunks || [];
    for (const chunk of this._queuedChunks) {
      this._loaded += chunk.byteLength;
    }
    this._done = stream._progressiveDone;
    this._contentLength = length;
    this._isStreamingSupported = !disableStream;
    this._isRangeSupported = !disableRange;
    if (isPdfFile(contentDispositionFilename)) {
      this._filename = contentDispositionFilename;
    }
    this._headersCapability.resolve();
    const loaded = this._loaded;
    Promise.resolve().then(() => {
      if (loaded > 0 && this._loaded === loaded) {
        this._callOnProgress();
      }
    });
  }
  _enqueue(chunk) {
    if (this._done) {
      return;
    }
    if (this._requests.length > 0) {
      const capability = this._requests.shift();
      capability.resolve({
        value: chunk,
        done: false
      });
    } else {
      this._queuedChunks.push(chunk);
    }
    this._loaded += chunk.byteLength;
    this._callOnProgress();
  }
  async read() {
    if (this._queuedChunks.length > 0) {
      const chunk = this._queuedChunks.shift();
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    const capability = Promise.withResolvers();
    this._requests.push(capability);
    return capability.promise;
  }
  cancel(reason) {
    this._done = true;
    this.#endRequests();
  }
  progressiveDone() {
    this._done ||= true;
    if (this._queuedChunks.length === 0) {
      this.#endRequests();
    }
  }
}
class PDFDataTransportStreamRangeReader extends BasePDFStreamRangeReader {
  #endRequests = endRequests.bind(this);
  onDone = null;
  _begin = -1;
  _done = false;
  _queuedChunk = null;
  _requests = [];
  constructor(stream, begin, end) {
    super(stream, begin, end);
    this._begin = begin;
  }
  _enqueue(chunk) {
    if (this._done) {
      return;
    }
    if (this._requests.length === 0) {
      this._queuedChunk = chunk;
    } else {
      const capability = this._requests.shift();
      capability.resolve({
        value: chunk,
        done: false
      });
      this.#endRequests();
    }
    this._done = true;
    this.onDone?.();
  }
  async read() {
    if (this._queuedChunk) {
      const chunk = this._queuedChunk;
      this._queuedChunk = null;
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    const capability = Promise.withResolvers();
    this._requests.push(capability);
    return capability.promise;
  }
  cancel(reason) {
    this._done = true;
    this.#endRequests();
    this.onDone?.();
  }
}

;// ./src/display/network.js




const OK_RESPONSE = 200;
const PARTIAL_CONTENT_RESPONSE = 206;
function network_getArrayBuffer(val) {
  return typeof val !== "string" ? val : stringToBytes(val).buffer;
}
class PDFNetworkStream extends BasePDFStream {
  #pendingRequests = new WeakMap();
  _responseOrigin = null;
  constructor(source) {
    super(source, PDFNetworkStreamReader, PDFNetworkStreamRangeReader);
    const {
      httpHeaders,
      url
    } = source;
    this.url = url;
    this.isHttp = /https?:/.test(url.protocol);
    this.headers = createHeaders(this.isHttp, httpHeaders);
  }
  _request(args) {
    const xhr = new XMLHttpRequest();
    const pendingRequest = {
      validateStatus: null,
      onHeadersReceived: args.onHeadersReceived,
      onDone: args.onDone,
      onError: args.onError,
      onProgress: args.onProgress
    };
    this.#pendingRequests.set(xhr, pendingRequest);
    xhr.open("GET", this.url);
    xhr.withCredentials = this._source.withCredentials;
    for (const [key, val] of this.headers) {
      xhr.setRequestHeader(key, val);
    }
    if (this.isHttp && "begin" in args && "end" in args) {
      xhr.setRequestHeader("Range", `bytes=${args.begin}-${args.end - 1}`);
      pendingRequest.validateStatus = status => status === PARTIAL_CONTENT_RESPONSE || status === OK_RESPONSE;
    } else {
      pendingRequest.validateStatus = status => status === OK_RESPONSE;
    }
    xhr.responseType = "arraybuffer";
    assert(args.onError, "Expected `onError` callback to be provided.");
    xhr.onerror = () => args.onError(xhr.status);
    xhr.onreadystatechange = this.#onStateChange.bind(this, xhr);
    xhr.onprogress = this.#onProgress.bind(this, xhr);
    xhr.send(null);
    return xhr;
  }
  #onProgress(xhr, evt) {
    const pendingRequest = this.#pendingRequests.get(xhr);
    pendingRequest?.onProgress?.(evt);
  }
  #onStateChange(xhr, evt) {
    const pendingRequest = this.#pendingRequests.get(xhr);
    if (!pendingRequest) {
      return;
    }
    if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
      pendingRequest.onHeadersReceived();
      delete pendingRequest.onHeadersReceived;
    }
    if (xhr.readyState !== 4) {
      return;
    }
    if (!this.#pendingRequests.has(xhr)) {
      return;
    }
    this.#pendingRequests.delete(xhr);
    if (xhr.status === 0 && this.isHttp) {
      pendingRequest.onError(xhr.status);
      return;
    }
    const xhrStatus = xhr.status || OK_RESPONSE;
    if (!pendingRequest.validateStatus(xhrStatus)) {
      pendingRequest.onError(xhr.status);
      return;
    }
    const chunk = network_getArrayBuffer(xhr.response);
    if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
      const rangeHeader = xhr.getResponseHeader("Content-Range");
      if (/bytes \d+-\d+\/\d+/.test(rangeHeader)) {
        pendingRequest.onDone(chunk);
      } else {
        warn(`Missing or invalid "Content-Range" header.`);
        pendingRequest.onError(0);
      }
    } else if (chunk) {
      pendingRequest.onDone(chunk);
    } else {
      pendingRequest.onError(xhr.status);
    }
  }
  _abortRequest(xhr) {
    if (this.#pendingRequests.has(xhr)) {
      this.#pendingRequests.delete(xhr);
      xhr.abort();
    }
  }
  getRangeReader(begin, end) {
    const reader = super.getRangeReader(begin, end);
    if (reader) {
      reader.onClosed = () => this._rangeReaders.delete(reader);
    }
    return reader;
  }
}
class PDFNetworkStreamReader extends BasePDFStreamReader {
  #endRequests = endRequests.bind(this);
  _cachedChunks = [];
  _done = false;
  _requests = [];
  _storedError = null;
  constructor(stream) {
    super(stream);
    this._fullRequestXhr = stream._request({
      onHeadersReceived: this.#onHeadersReceived.bind(this),
      onDone: this.#onDone.bind(this),
      onError: this.#onError.bind(this),
      onProgress: this.#onProgress.bind(this)
    });
  }
  #onHeadersReceived() {
    const stream = this._stream;
    const {
      disableRange,
      rangeChunkSize
    } = stream._source;
    const fullRequestXhr = this._fullRequestXhr;
    stream._responseOrigin = getResponseOrigin(fullRequestXhr.responseURL);
    const rawResponseHeaders = fullRequestXhr.getAllResponseHeaders();
    const responseHeaders = new Headers(rawResponseHeaders ? rawResponseHeaders.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map(x => {
      const [key, ...val] = x.split(": ");
      return [key, val.join(": ")];
    }) : []);
    const {
      contentLength,
      isRangeSupported
    } = validateRangeRequestCapabilities({
      responseHeaders,
      isHttp: stream.isHttp,
      rangeChunkSize,
      disableRange
    });
    this._contentLength = contentLength;
    this._isRangeSupported = isRangeSupported;
    this._filename = extractFilenameFromHeader(responseHeaders);
    if (this._isRangeSupported) {
      stream._abortRequest(fullRequestXhr);
    }
    this._headersCapability.resolve();
  }
  #onDone(chunk) {
    if (this._requests.length > 0) {
      const capability = this._requests.shift();
      capability.resolve({
        value: chunk,
        done: false
      });
    } else {
      this._cachedChunks.push(chunk);
    }
    this._done = true;
    if (this._cachedChunks.length === 0) {
      this.#endRequests();
    }
  }
  #onError(status) {
    this._storedError = createResponseError(status, this._stream.url);
    this._headersCapability.reject(this._storedError);
    for (const capability of this._requests) {
      capability.reject(this._storedError);
    }
    this._requests.length = 0;
    this._cachedChunks.length = 0;
  }
  #onProgress(evt) {
    this.onProgress?.({
      loaded: evt.loaded,
      total: evt.lengthComputable ? evt.total : this._contentLength
    });
  }
  async read() {
    await this._headersCapability.promise;
    if (this._storedError) {
      throw this._storedError;
    }
    if (this._cachedChunks.length > 0) {
      const chunk = this._cachedChunks.shift();
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    const capability = Promise.withResolvers();
    this._requests.push(capability);
    return capability.promise;
  }
  cancel(reason) {
    this._done = true;
    this._headersCapability.reject(reason);
    this.#endRequests();
    this._stream._abortRequest(this._fullRequestXhr);
    this._fullRequestXhr = null;
  }
}
class PDFNetworkStreamRangeReader extends BasePDFStreamRangeReader {
  #endRequests = endRequests.bind(this);
  onClosed = null;
  _done = false;
  _queuedChunk = null;
  _requests = [];
  _storedError = null;
  constructor(stream, begin, end) {
    super(stream, begin, end);
    this._requestXhr = stream._request({
      begin,
      end,
      onHeadersReceived: this.#onHeadersReceived.bind(this),
      onDone: this.#onDone.bind(this),
      onError: this.#onError.bind(this),
      onProgress: null
    });
  }
  #onHeadersReceived() {
    const responseOrigin = getResponseOrigin(this._requestXhr?.responseURL);
    try {
      ensureResponseOrigin(responseOrigin, this._stream._responseOrigin);
    } catch (ex) {
      this._storedError = ex;
      this.#onError(0);
    }
  }
  #onDone(chunk) {
    if (this._requests.length > 0) {
      const capability = this._requests.shift();
      capability.resolve({
        value: chunk,
        done: false
      });
    } else {
      this._queuedChunk = chunk;
    }
    this._done = true;
    this.#endRequests();
    this.onClosed?.();
  }
  #onError(status) {
    this._storedError ??= createResponseError(status, this._stream.url);
    for (const capability of this._requests) {
      capability.reject(this._storedError);
    }
    this._requests.length = 0;
    this._queuedChunk = null;
  }
  async read() {
    if (this._storedError) {
      throw this._storedError;
    }
    if (this._queuedChunk !== null) {
      const chunk = this._queuedChunk;
      this._queuedChunk = null;
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    const capability = Promise.withResolvers();
    this._requests.push(capability);
    return capability.promise;
  }
  cancel(reason) {
    this._done = true;
    this.#endRequests();
    this._stream._abortRequest(this._requestXhr);
    this.onClosed?.();
  }
}

;// ./src/display/node_stream.js




function getReadableStream(url, opts = null) {
  const fs = process.getBuiltinModule("fs");
  const {
    Readable
  } = process.getBuiltinModule("stream");
  const readStream = fs.createReadStream(url, opts);
  return Readable.toWeb(readStream);
}
class PDFNodeStream extends BasePDFStream {
  constructor(source) {
    super(source, PDFNodeStreamReader, PDFNodeStreamRangeReader);
    const {
      url
    } = source;
    assert(url.protocol === "file:", "PDFNodeStream only supports file:// URLs.");
  }
}
class PDFNodeStreamReader extends BasePDFStreamReader {
  _reader = null;
  constructor(stream) {
    super(stream);
    const {
      disableRange,
      disableStream,
      rangeChunkSize,
      url
    } = stream._source;
    this._isStreamingSupported = !disableStream;
    const fs = process.getBuiltinModule("fs/promises");
    fs.lstat(url).then(stat => {
      const readableStream = getReadableStream(url);
      this._reader = readableStream.getReader();
      const {
        size
      } = stat;
      this._contentLength = size;
      this._isRangeSupported = !disableRange && size > 2 * rangeChunkSize;
      if (!this._isStreamingSupported && this._isRangeSupported) {
        this.cancel(new AbortException("Streaming is disabled."));
      }
      this._headersCapability.resolve();
    }).catch(error => {
      if (error.code === "ENOENT") {
        error = createResponseError(0, url);
      }
      this._headersCapability.reject(error);
    });
  }
  async read() {
    await this._headersCapability.promise;
    const {
      value,
      done
    } = await this._reader.read();
    if (done) {
      return {
        value,
        done
      };
    }
    this._loaded += value.byteLength;
    this._callOnProgress();
    return {
      value: getArrayBuffer(value),
      done: false
    };
  }
  cancel(reason) {
    this._reader?.cancel(reason);
  }
}
class PDFNodeStreamRangeReader extends BasePDFStreamRangeReader {
  _readCapability = Promise.withResolvers();
  _reader = null;
  constructor(stream, begin, end) {
    super(stream, begin, end);
    const {
      url
    } = stream._source;
    try {
      const readableStream = getReadableStream(url, {
        start: begin,
        end: end - 1
      });
      this._reader = readableStream.getReader();
      this._readCapability.resolve();
    } catch (error) {
      this._readCapability.reject(error);
    }
  }
  async read() {
    await this._readCapability.promise;
    const {
      value,
      done
    } = await this._reader.read();
    if (done) {
      return {
        value,
        done
      };
    }
    return {
      value: getArrayBuffer(value),
      done: false
    };
  }
  cancel(reason) {
    this._reader?.cancel(reason);
  }
}

;// ./src/display/network_stream.js





function getNetworkStream(url) {
  return isValidFetchUrl(url) ? PDFFetchStream : isNodeJS ? PDFNodeStream : PDFNetworkStream;
}

;// ./src/display/worker_options.js
class GlobalWorkerOptions {
  static #port = null;
  static #src = "";
  static get workerPort() {
    return this.#port;
  }
  static set workerPort(val) {
    if (!(typeof Worker !== "undefined" && val instanceof Worker) && val !== null) {
      throw new Error("Invalid `workerPort` type.");
    }
    this.#port = val;
  }
  static get workerSrc() {
    return this.#src;
  }
  static set workerSrc(val) {
    if (typeof val !== "string") {
      throw new Error("Invalid `workerSrc` type.");
    }
    this.#src = val;
  }
}

;// ./src/display/metadata.js
class Metadata {
  #map;
  #data;
  constructor({
    parsedData,
    rawData
  }) {
    this.#map = parsedData;
    this.#data = rawData;
  }
  getRaw() {
    return this.#data;
  }
  get(name) {
    return this.#map.get(name) ?? null;
  }
  [Symbol.iterator]() {
    return this.#map.entries();
  }
}

;// ./src/display/optional_content_config.js


const INTERNAL = Symbol("INTERNAL");
class OptionalContentGroup {
  #isDisplay = false;
  #isPrint = false;
  #userSet = false;
  #visible = true;
  constructor(renderingIntent, {
    name,
    intent,
    usage,
    rbGroups
  }) {
    this.#isDisplay = !!(renderingIntent & RenderingIntentFlag.DISPLAY);
    this.#isPrint = !!(renderingIntent & RenderingIntentFlag.PRINT);
    this.name = name;
    this.intent = intent;
    this.usage = usage;
    this.rbGroups = rbGroups;
  }
  get visible() {
    if (this.#userSet) {
      return this.#visible;
    }
    if (!this.#visible) {
      return false;
    }
    const {
      print,
      view
    } = this.usage;
    if (this.#isDisplay) {
      return view?.viewState !== "OFF";
    } else if (this.#isPrint) {
      return print?.printState !== "OFF";
    }
    return true;
  }
  _setVisible(internal, visible, userSet = false) {
    if (internal !== INTERNAL) {
      unreachable("Internal method `_setVisible` called.");
    }
    this.#userSet = userSet;
    this.#visible = visible;
  }
  get serializable() {
    return {
      userSet: this.#userSet,
      visible: this.#visible
    };
  }
}
class OptionalContentConfig {
  #cachedGetHash = null;
  #groups = new Map();
  #initialHash = null;
  #order = null;
  #rawData;
  creator = null;
  name = null;
  constructor(data, renderingIntent = RenderingIntentFlag.DISPLAY, groupState = null) {
    this.#rawData = data;
    this.renderingIntent = renderingIntent;
    if (data === null) {
      return;
    }
    this.name = data.name;
    this.creator = data.creator;
    this.#order = data.order;
    for (const group of data.groups) {
      this.#groups.set(group.id, new OptionalContentGroup(renderingIntent, group));
    }
    if (groupState) {
      if (groupState.size !== this.#groups.size) {
        unreachable("Incorrect serialized groupState.");
      }
      for (const [id, group] of groupState) {
        this.#groups.get(id)._setVisible(INTERNAL, group.visible, group.userSet);
      }
    } else {
      if (data.baseState === "OFF") {
        for (const group of this.#groups.values()) {
          group._setVisible(INTERNAL, false);
        }
      }
      for (const on of data.on) {
        this.#groups.get(on)._setVisible(INTERNAL, true);
      }
      for (const off of data.off) {
        this.#groups.get(off)._setVisible(INTERNAL, false);
      }
    }
    this.#initialHash = this.getHash();
  }
  #evaluateVisibilityExpression(array) {
    const length = array.length;
    if (length < 2) {
      return true;
    }
    const operator = array[0];
    for (let i = 1; i < length; i++) {
      const element = array[i];
      let state;
      if (Array.isArray(element)) {
        state = this.#evaluateVisibilityExpression(element);
      } else if (this.#groups.has(element)) {
        state = this.#groups.get(element).visible;
      } else {
        warn(`Optional content group not found: ${element}`);
        return true;
      }
      switch (operator) {
        case "And":
          if (!state) {
            return false;
          }
          break;
        case "Or":
          if (state) {
            return true;
          }
          break;
        case "Not":
          return !state;
        default:
          return true;
      }
    }
    return operator === "And";
  }
  isVisible(group) {
    if (this.#groups.size === 0) {
      return true;
    }
    if (!group) {
      info("Optional content group not defined.");
      return true;
    }
    if (group.type === "OCG") {
      if (!this.#groups.has(group.id)) {
        warn(`Optional content group not found: ${group.id}`);
        return true;
      }
      return this.#groups.get(group.id).visible;
    } else if (group.type === "OCMD") {
      if (group.expression) {
        return this.#evaluateVisibilityExpression(group.expression);
      }
      if (!group.policy || group.policy === "AnyOn") {
        for (const id of group.ids) {
          if (!this.#groups.has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (this.#groups.get(id).visible) {
            return true;
          }
        }
        return false;
      } else if (group.policy === "AllOn") {
        for (const id of group.ids) {
          if (!this.#groups.has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (!this.#groups.get(id).visible) {
            return false;
          }
        }
        return true;
      } else if (group.policy === "AnyOff") {
        for (const id of group.ids) {
          if (!this.#groups.has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (!this.#groups.get(id).visible) {
            return true;
          }
        }
        return false;
      } else if (group.policy === "AllOff") {
        for (const id of group.ids) {
          if (!this.#groups.has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (this.#groups.get(id).visible) {
            return false;
          }
        }
        return true;
      }
      warn(`Unknown optional content policy ${group.policy}.`);
      return true;
    }
    warn(`Unknown group type ${group.type}.`);
    return true;
  }
  setVisibility(id, visible = true, preserveRB = true) {
    const group = this.#groups.get(id);
    if (!group) {
      warn(`Optional content group not found: ${id}`);
      return;
    }
    if (preserveRB && visible && group.rbGroups.length) {
      for (const rbGroup of group.rbGroups) {
        for (const otherId of rbGroup) {
          if (otherId !== id) {
            this.#groups.get(otherId)?._setVisible(INTERNAL, false, true);
          }
        }
      }
    }
    group._setVisible(INTERNAL, !!visible, true);
    this.#cachedGetHash = null;
  }
  setOCGState({
    state,
    preserveRB
  }) {
    let operator;
    for (const elem of state) {
      switch (elem) {
        case "ON":
        case "OFF":
        case "Toggle":
          operator = elem;
          continue;
      }
      const group = this.#groups.get(elem);
      if (!group) {
        continue;
      }
      switch (operator) {
        case "ON":
          this.setVisibility(elem, true, preserveRB);
          break;
        case "OFF":
          this.setVisibility(elem, false, preserveRB);
          break;
        case "Toggle":
          this.setVisibility(elem, !group.visible, preserveRB);
          break;
      }
    }
    this.#cachedGetHash = null;
  }
  get hasInitialVisibility() {
    return this.#initialHash === null || this.getHash() === this.#initialHash;
  }
  getOrder() {
    if (!this.#groups.size) {
      return null;
    }
    if (this.#order) {
      return this.#order.slice();
    }
    return [...this.#groups.keys()];
  }
  getGroup(id) {
    return this.#groups.get(id) || null;
  }
  getHash() {
    if (this.#cachedGetHash !== null) {
      return this.#cachedGetHash;
    }
    const hash = new MurmurHash3_64();
    for (const [id, group] of this.#groups) {
      hash.update(`${id}:${group.visible}`);
    }
    return this.#cachedGetHash = hash.hexdigest();
  }
  [Symbol.iterator]() {
    return this.#groups.entries();
  }
  get serializable() {
    const groupState = new Map();
    for (const [id, group] of this.#groups) {
      groupState.set(id, group.serializable);
    }
    return {
      data: this.#rawData,
      renderingIntent: this.renderingIntent,
      groupState
    };
  }
  static fromSerializable({
    data,
    renderingIntent,
    groupState
  }) {
    return new OptionalContentConfig(data, renderingIntent, groupState);
  }
}

;// ./src/display/pages_mapper.js


class PagesMapper {
  #pageNumberToId = null;
  #prevPageNumbers = null;
  #pagesNumber = 0;
  #clipboard = null;
  #savedData = null;
  get pagesNumber() {
    return this.#pagesNumber;
  }
  set pagesNumber(n) {
    if (this.#pagesNumber === n) {
      return;
    }
    this.#pagesNumber = n;
    this.#pageNumberToId = null;
    this.#prevPageNumbers = null;
  }
  #ensureInit() {
    if (this.#pageNumberToId) {
      return;
    }
    const n = this.#pagesNumber;
    const pageNumberToId = this.#pageNumberToId = new Uint32Array(n);
    for (let i = 0; i < n; i++) {
      pageNumberToId[i] = i + 1;
    }
    this.#prevPageNumbers = new Int32Array(pageNumberToId);
  }
  #buildIdToPageNumber() {
    const idToPageNumber = new Map();
    const pageNumberToId = this.#pageNumberToId;
    for (let i = 0, ii = this.#pagesNumber; i < ii; i++) {
      const id = pageNumberToId[i];
      const pageNumbers = idToPageNumber.get(id);
      if (pageNumbers) {
        pageNumbers.push(i + 1);
      } else {
        idToPageNumber.set(id, [i + 1]);
      }
    }
    return idToPageNumber;
  }
  movePages(selectedPages, pagesToMove, index) {
    this.#ensureInit();
    const pageNumberToId = this.#pageNumberToId;
    const prevIdToPageNumber = this.#buildIdToPageNumber();
    const movedCount = pagesToMove.length;
    const mappedPagesToMove = new Uint32Array(movedCount);
    let removedBeforeTarget = 0;
    for (let i = 0; i < movedCount; i++) {
      const pageIndex = pagesToMove[i] - 1;
      mappedPagesToMove[i] = pageNumberToId[pageIndex];
      if (pageIndex < index) {
        removedBeforeTarget++;
      }
    }
    const pagesNumber = this.#pagesNumber;
    const remainingLen = pagesNumber - movedCount;
    const adjustedTarget = MathClamp(index - removedBeforeTarget, 0, remainingLen);
    for (let i = 0, r = 0; i < pagesNumber; i++) {
      if (!selectedPages.has(i + 1)) {
        pageNumberToId[r++] = pageNumberToId[i];
      }
    }
    pageNumberToId.copyWithin(adjustedTarget + movedCount, adjustedTarget, remainingLen);
    pageNumberToId.set(mappedPagesToMove, adjustedTarget);
    this.#updatePrevPageNumbers(prevIdToPageNumber);
    if (pageNumberToId.every((id, i) => id === i + 1)) {
      this.#pageNumberToId = null;
    }
  }
  deletePages(pagesToDelete) {
    this.#ensureInit();
    const pageNumberToId = this.#pageNumberToId;
    const prevIdToPageNumber = this.#buildIdToPageNumber();
    this.#savedData = {
      pageNumberToId: pageNumberToId.slice(),
      pagesNumber: this.#pagesNumber,
      prevPageNumbers: this.#prevPageNumbers.slice()
    };
    const newN = this.#pagesNumber - pagesToDelete.length;
    this.#pagesNumber = newN;
    const newPageNumberToId = this.#pageNumberToId = new Uint32Array(newN);
    this.#prevPageNumbers = new Int32Array(newN);
    let sourceIndex = 0;
    let destIndex = 0;
    for (const pageNumber of pagesToDelete) {
      const pageIndex = pageNumber - 1;
      if (pageIndex !== sourceIndex) {
        newPageNumberToId.set(pageNumberToId.subarray(sourceIndex, pageIndex), destIndex);
        destIndex += pageIndex - sourceIndex;
      }
      sourceIndex = pageIndex + 1;
    }
    if (sourceIndex < pageNumberToId.length) {
      newPageNumberToId.set(pageNumberToId.subarray(sourceIndex), destIndex);
    }
    this.#updatePrevPageNumbers(prevIdToPageNumber, new Set(pagesToDelete));
  }
  cancelDelete() {
    if (this.#savedData) {
      this.#pageNumberToId = this.#savedData.pageNumberToId;
      this.#pagesNumber = this.#savedData.pagesNumber;
      this.#prevPageNumbers = this.#savedData.prevPageNumbers;
      this.#savedData = null;
    }
  }
  cleanSavedData() {
    this.#savedData = null;
  }
  copyPages(pagesToCopy) {
    this.#ensureInit();
    this.#clipboard = {
      pageNumbers: pagesToCopy,
      pageIds: pagesToCopy.map(n => this.#pageNumberToId[n - 1])
    };
  }
  cancelCopy() {
    this.#clipboard = null;
  }
  pastePages(index) {
    this.#ensureInit();
    const pageNumberToId = this.#pageNumberToId;
    const prevIdToPageNumber = this.#buildIdToPageNumber();
    const {
      pageNumbers: copiedPageNumbers,
      pageIds: copiedPageIds
    } = this.#clipboard;
    const newN = this.#pagesNumber + copiedPageNumbers.length;
    this.#pagesNumber = newN;
    const newPageNumberToId = this.#pageNumberToId = new Uint32Array(newN);
    this.#prevPageNumbers = new Int32Array(newN);
    newPageNumberToId.set(pageNumberToId.subarray(0, index), 0);
    newPageNumberToId.set(copiedPageIds, index);
    newPageNumberToId.set(pageNumberToId.subarray(index), index + copiedPageNumbers.length);
    this.#updatePrevPageNumbers(prevIdToPageNumber, null, index, copiedPageNumbers);
    this.#clipboard = null;
  }
  #updatePrevPageNumbers(prevIdToPageNumber, deletedPageNumbers = null, pasteIndex = -1, copiedPageNumbers = null) {
    const prevPageNumbers = this.#prevPageNumbers;
    const newPageNumberToId = this.#pageNumberToId;
    const pasteEnd = pasteIndex + (copiedPageNumbers?.length ?? 0);
    const idsIndices = new Map();
    for (let i = 0, ii = this.#pagesNumber; i < ii; i++) {
      if (i >= pasteIndex && i < pasteEnd) {
        prevPageNumbers[i] = -copiedPageNumbers[i - pasteIndex];
        continue;
      }
      const id = newPageNumberToId[i];
      const oldPositions = prevIdToPageNumber.get(id);
      let j = idsIndices.get(id) || 0;
      if (deletedPageNumbers && oldPositions) {
        while (j < oldPositions.length && deletedPageNumbers.has(oldPositions[j])) {
          j++;
        }
      }
      prevPageNumbers[i] = oldPositions?.[j];
      idsIndices.set(id, j + 1);
    }
  }
  hasBeenAltered() {
    return this.#pageNumberToId !== null;
  }
  getPageMappingForSaving(idToPageNumber = null) {
    idToPageNumber ??= this.#buildIdToPageNumber();
    let nCopy = 0;
    for (const pageNumbers of idToPageNumber.values()) {
      nCopy = Math.max(nCopy, pageNumbers.length);
    }
    const extractParams = new Array(nCopy);
    for (let i = 0; i < nCopy; i++) {
      extractParams[i] = {
        document: null,
        pageIndices: [],
        includePages: []
      };
    }
    for (const [id, pageNumbers] of idToPageNumber) {
      for (let i = 0, ii = pageNumbers.length; i < ii; i++) {
        extractParams[i].includePages.push([id - 1, pageNumbers[i] - 1]);
      }
    }
    for (const {
      includePages,
      pageIndices
    } of extractParams) {
      includePages.sort((a, b) => a[0] - b[0]);
      for (let i = 0, ii = includePages.length; i < ii; i++) {
        pageIndices.push(includePages[i][1]);
        includePages[i] = includePages[i][0];
      }
    }
    return extractParams;
  }
  extractPages(extractedPageNumbers) {
    extractedPageNumbers = Array.from(extractedPageNumbers).sort((a, b) => a - b);
    const usedIds = new Map();
    for (let i = 0, ii = extractedPageNumbers.length; i < ii; i++) {
      const id = this.getPageId(extractedPageNumbers[i]);
      const usedPageNumbers = usedIds.getOrInsertComputed(id, makeArr);
      usedPageNumbers.push(i + 1);
    }
    return this.getPageMappingForSaving(usedIds);
  }
  getPrevPageNumber(pageNumber) {
    return this.#prevPageNumbers?.[pageNumber - 1] ?? 0;
  }
  getPageNumber(id) {
    if (!this.#pageNumberToId) {
      return id;
    }
    const pageNumberToId = this.#pageNumberToId;
    for (let i = 0, ii = this.#pagesNumber; i < ii; i++) {
      if (pageNumberToId[i] === id) {
        return i + 1;
      }
    }
    return 0;
  }
  getPageId(pageNumber) {
    return this.#pageNumberToId?.[pageNumber - 1] ?? pageNumber;
  }
  getMapping() {
    return this.#pageNumberToId?.subarray(0, this.pagesNumber);
  }
}

;// ./src/display/pdf_objects.js
const INITIAL_DATA = Symbol("INITIAL_DATA");
const dataObj = () => ({
  ...Promise.withResolvers(),
  data: INITIAL_DATA
});
class PDFObjects {
  #objs = new Map();
  get(objId, callback = null) {
    if (callback) {
      const obj = this.#objs.getOrInsertComputed(objId, dataObj);
      obj.promise.then(() => callback(obj.data));
      return null;
    }
    const obj = this.#objs.get(objId);
    if (!obj || obj.data === INITIAL_DATA) {
      throw new Error(`Requesting object that isn't resolved yet ${objId}.`);
    }
    return obj.data;
  }
  has(objId) {
    const obj = this.#objs.get(objId);
    return !!obj && obj.data !== INITIAL_DATA;
  }
  delete(objId) {
    const obj = this.#objs.get(objId);
    if (!obj || obj.data === INITIAL_DATA) {
      return false;
    }
    this.#objs.delete(objId);
    return true;
  }
  resolve(objId, data = null) {
    const obj = this.#objs.getOrInsertComputed(objId, dataObj);
    if (obj.data !== INITIAL_DATA) {
      throw new Error(`Object already resolved ${objId}.`);
    }
    obj.data = data;
    obj.resolve();
  }
  clear() {
    for (const {
      data
    } of this.#objs.values()) {
      data?.bitmap?.close();
    }
    this.#objs.clear();
  }
  *[Symbol.iterator]() {
    for (const [objId, {
      data
    }] of this.#objs) {
      if (data !== INITIAL_DATA) {
        yield [objId, data];
      }
    }
  }
}

;// ./src/display/text_layer.js


const MAX_TEXT_DIVS_TO_RENDER = 100000;
const DEFAULT_FONT_SIZE = 30;
class TextLayer {
  #capability = Promise.withResolvers();
  #container = null;
  #disableProcessItems = false;
  #fontInspectorEnabled = !!globalThis.FontInspector?.enabled;
  #imagesHandler = null;
  #lang = null;
  #layoutTextParams = null;
  #pageHeight = 0;
  #pageWidth = 0;
  #reader = null;
  #rootContainer = null;
  #rotation = 0;
  #scale = 0;
  #styleCache = Object.create(null);
  #textContentItemsStr = [];
  #textContentSource = null;
  #textDivs = [];
  #textDivProperties = new WeakMap();
  #transform = null;
  static #ascentCache = new Map();
  static #canvasContexts = new Map();
  static #canvasCtxFonts = new WeakMap();
  static #minFontSize = null;
  static #pendingTextLayers = new Set();
  constructor({
    textContentSource,
    images,
    container,
    viewport
  }) {
    if (textContentSource instanceof ReadableStream) {
      this.#textContentSource = textContentSource;
    } else if (typeof textContentSource === "object") {
      this.#textContentSource = new ReadableStream({
        start(controller) {
          controller.enqueue(textContentSource);
          controller.close();
        }
      });
    } else {
      throw new Error('No "textContentSource" parameter specified.');
    }
    this.#container = this.#rootContainer = container;
    this.#imagesHandler = images;
    this.#scale = viewport.scale * OutputScale.pixelRatio;
    this.#rotation = viewport.rotation;
    this.#layoutTextParams = {
      div: null,
      properties: null,
      ctx: null
    };
    const {
      pageWidth,
      pageHeight,
      pageX,
      pageY
    } = viewport.rawDims;
    this.#transform = [1, 0, 0, -1, -pageX, pageY + pageHeight];
    this.#pageWidth = pageWidth;
    this.#pageHeight = pageHeight;
    TextLayer.#ensureMinFontSizeComputed();
    container.style.setProperty("--min-font-size", TextLayer.#minFontSize);
    setLayerDimensions(container, viewport);
    this.#capability.promise.finally(() => {
      TextLayer.#pendingTextLayers.delete(this);
      this.#layoutTextParams = null;
      this.#styleCache = null;
    }).catch(() => {});
  }
  static get fontFamilyMap() {
    const {
      isWindows,
      isFirefox
    } = FeatureTest.platform;
    return shadow(this, "fontFamilyMap", new Map([["sans-serif", `${isWindows && isFirefox ? "Calibri, " : ""}sans-serif`], ["monospace", `${isWindows && isFirefox ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    if (this.#imagesHandler) {
      this.#container.append(this.#imagesHandler.render());
    }
    const pump = () => {
      this.#reader.read().then(({
        value,
        done
      }) => {
        if (done) {
          this.#capability.resolve();
          return;
        }
        this.#lang ??= value.lang;
        Object.assign(this.#styleCache, value.styles);
        this.#processItems(value.items);
        pump();
      }, this.#capability.reject);
    };
    this.#reader = this.#textContentSource.getReader();
    TextLayer.#pendingTextLayers.add(this);
    pump();
    return this.#capability.promise;
  }
  update({
    viewport,
    onBefore = null
  }) {
    const scale = viewport.scale * OutputScale.pixelRatio;
    const rotation = viewport.rotation;
    if (rotation !== this.#rotation) {
      onBefore?.();
      this.#rotation = rotation;
      setLayerDimensions(this.#rootContainer, {
        rotation
      });
    }
    if (scale !== this.#scale) {
      onBefore?.();
      this.#scale = scale;
      const params = {
        div: null,
        properties: null,
        ctx: TextLayer.#getCtx(this.#lang)
      };
      for (const div of this.#textDivs) {
        params.properties = this.#textDivProperties.get(div);
        params.div = div;
        this.#layout(params);
      }
    }
  }
  cancel() {
    const abortEx = new AbortException("TextLayer task cancelled.");
    this.#reader?.cancel(abortEx).catch(() => {});
    this.#reader = null;
    this.#capability.reject(abortEx);
  }
  get textDivs() {
    return this.#textDivs;
  }
  get textContentItemsStr() {
    return this.#textContentItemsStr;
  }
  #processItems(items) {
    if (this.#disableProcessItems) {
      return;
    }
    this.#layoutTextParams.ctx ??= TextLayer.#getCtx(this.#lang);
    const textDivs = this.#textDivs,
      textContentItemsStr = this.#textContentItemsStr;
    for (const item of items) {
      if (textDivs.length > MAX_TEXT_DIVS_TO_RENDER) {
        warn("Ignoring additional textDivs for performance reasons.");
        this.#disableProcessItems = true;
        return;
      }
      if (item.str === undefined) {
        if (item.type === "beginMarkedContentProps" || item.type === "beginMarkedContent") {
          const parent = this.#container;
          this.#container = document.createElement("span");
          this.#container.classList.add("markedContent");
          if (item.id) {
            this.#container.setAttribute("id", `${item.id}`);
          }
          if (item.tag === "Artifact") {
            this.#container.ariaHidden = true;
          }
          parent.append(this.#container);
        } else if (item.type === "endMarkedContent") {
          this.#container = this.#container.parentNode;
        }
        continue;
      }
      textContentItemsStr.push(item.str);
      this.#appendText(item);
    }
  }
  #appendText(geom) {
    const textDiv = document.createElement("span");
    const textDivProperties = {
      angle: 0,
      canvasWidth: 0,
      hasText: geom.str !== "",
      hasEOL: geom.hasEOL,
      fontSize: 0
    };
    this.#textDivs.push(textDiv);
    const tx = Util.transform(this.#transform, geom.transform);
    let angle = Math.atan2(tx[1], tx[0]);
    const style = this.#styleCache[geom.fontName];
    if (style.vertical) {
      angle += Math.PI / 2;
    }
    let fontFamily = this.#fontInspectorEnabled && style.fontSubstitution || style.fontFamily;
    fontFamily = TextLayer.fontFamilyMap.get(fontFamily) || fontFamily;
    const fontHeight = Math.hypot(tx[2], tx[3]);
    const fontAscent = fontHeight * TextLayer.#getAscent(fontFamily, style, this.#lang);
    let left, top;
    if (angle === 0) {
      left = tx[4];
      top = tx[5] - fontAscent;
    } else {
      left = tx[4] + fontAscent * Math.sin(angle);
      top = tx[5] - fontAscent * Math.cos(angle);
    }
    const divStyle = textDiv.style;
    divStyle.left = `${(100 * left / this.#pageWidth).toFixed(2)}%`;
    divStyle.top = `${(100 * top / this.#pageHeight).toFixed(2)}%`;
    divStyle.setProperty("--font-height", `${fontHeight.toFixed(2)}px`);
    divStyle.fontFamily = fontFamily;
    textDivProperties.fontSize = fontHeight;
    textDiv.setAttribute("role", "presentation");
    textDiv.textContent = geom.str;
    textDiv.dir = geom.dir;
    if (this.#fontInspectorEnabled) {
      textDiv.dataset.fontName = style.fontSubstitutionLoadedName || geom.fontName;
    }
    if (angle !== 0) {
      textDivProperties.angle = angle * (180 / Math.PI);
    }
    let shouldScaleText = false;
    if (geom.str.length > 1) {
      shouldScaleText = true;
    } else if (geom.str !== " " && geom.transform[0] !== geom.transform[3]) {
      const absScaleX = Math.abs(geom.transform[0]),
        absScaleY = Math.abs(geom.transform[3]);
      if (absScaleX !== absScaleY && Math.max(absScaleX, absScaleY) / Math.min(absScaleX, absScaleY) > 1.5) {
        shouldScaleText = true;
      }
    }
    if (shouldScaleText) {
      textDivProperties.canvasWidth = style.vertical ? geom.height : geom.width;
    }
    this.#textDivProperties.set(textDiv, textDivProperties);
    this.#layoutTextParams.div = textDiv;
    this.#layoutTextParams.properties = textDivProperties;
    this.#layout(this.#layoutTextParams);
    if (textDivProperties.hasText) {
      this.#container.append(textDiv);
    }
    if (textDivProperties.hasEOL) {
      const br = document.createElement("br");
      br.setAttribute("role", "presentation");
      this.#container.append(br);
    }
  }
  #layout(params) {
    const {
      div,
      properties,
      ctx
    } = params;
    const {
      style
    } = div;
    if (properties.canvasWidth !== 0 && properties.hasText) {
      const {
        fontFamily
      } = style;
      const {
        canvasWidth,
        fontSize
      } = properties;
      TextLayer.#ensureCtxFont(ctx, fontSize * this.#scale, fontFamily);
      const {
        width
      } = ctx.measureText(div.textContent);
      if (width > 0) {
        style.setProperty("--scale-x", canvasWidth * this.#scale / width);
      }
    }
    if (properties.angle !== 0) {
      style.setProperty("--rotate", `${properties.angle}deg`);
    }
  }
  static cleanup() {
    if (this.#pendingTextLayers.size > 0) {
      return;
    }
    this.#ascentCache.clear();
    for (const {
      canvas
    } of this.#canvasContexts.values()) {
      canvas.remove();
    }
    this.#canvasContexts.clear();
  }
  static #getCtx(lang = null) {
    let ctx = this.#canvasContexts.get(lang ||= "");
    if (!ctx) {
      const canvas = document.createElement("canvas");
      canvas.style.cssText = "position:absolute;top:0;left:0;width:0;height:0;display:none;" + "letter-spacing:normal;word-spacing:normal";
      canvas.lang = lang;
      document.body.append(canvas);
      ctx = canvas.getContext("2d", {
        alpha: false,
        willReadFrequently: true
      });
      this.#canvasContexts.set(lang, ctx);
      this.#canvasCtxFonts.set(ctx, {
        size: 0,
        family: ""
      });
    }
    return ctx;
  }
  static #ensureCtxFont(ctx, size, family) {
    const cached = this.#canvasCtxFonts.get(ctx);
    if (size === cached.size && family === cached.family) {
      return;
    }
    ctx.font = `${size}px ${family}`;
    cached.size = size;
    cached.family = family;
  }
  static #ensureMinFontSizeComputed() {
    if (this.#minFontSize !== null) {
      return;
    }
    const div = document.createElement("div");
    div.style.opacity = 0;
    div.style.lineHeight = 1;
    div.style.fontSize = "1px";
    div.style.position = "absolute";
    div.textContent = "X";
    document.body.append(div);
    this.#minFontSize = div.getBoundingClientRect().height;
    div.remove();
  }
  static #getAscent(fontFamily, style, lang) {
    const cachedAscent = this.#ascentCache.get(fontFamily);
    if (cachedAscent) {
      return cachedAscent;
    }
    const ctx = this.#getCtx(lang);
    ctx.canvas.width = ctx.canvas.height = DEFAULT_FONT_SIZE;
    this.#ensureCtxFont(ctx, DEFAULT_FONT_SIZE, fontFamily);
    const metrics = ctx.measureText("");
    const ascent = metrics.fontBoundingBoxAscent;
    const descent = Math.abs(metrics.fontBoundingBoxDescent);
    ctx.canvas.width = ctx.canvas.height = 0;
    let ratio = 0.8;
    if (ascent) {
      ratio = ascent / (ascent + descent);
    } else {
      if (FeatureTest.platform.isFirefox) {
        warn("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference " + "in `about:config` to improve TextLayer rendering.");
      }
      if (style.ascent) {
        ratio = style.ascent;
      } else if (style.descent) {
        ratio = 1 + style.descent;
      }
    }
    this.#ascentCache.set(fontFamily, ratio);
    return ratio;
  }
}

;// ./src/display/api.js

























const RENDERING_CANCELLED_TIMEOUT = 100;
function getDocument(src = {}) {
  const task = new PDFDocumentLoadingTask();
  const {
    docId
  } = task;
  const url = src.url ? getUrlProp(src.url) : null;
  const data = src.data ? getDataProp(src.data) : null;
  const httpHeaders = src.httpHeaders || null;
  const withCredentials = src.withCredentials === true;
  const password = src.password ?? null;
  const rangeTransport = src.range instanceof PDFDataRangeTransport ? src.range : null;
  const rangeChunkSize = Number.isInteger(src.rangeChunkSize) && src.rangeChunkSize > 0 ? src.rangeChunkSize : 2 ** 16;
  let worker = src.worker instanceof PDFWorker ? src.worker : null;
  const verbosity = src.verbosity;
  const docBaseUrl = typeof src.docBaseUrl === "string" && !isDataScheme(src.docBaseUrl) ? src.docBaseUrl : null;
  const cMapUrl = getFactoryUrlProp(src.cMapUrl);
  const cMapPacked = src.cMapPacked !== false;
  const iccUrl = getFactoryUrlProp(src.iccUrl);
  const standardFontDataUrl = getFactoryUrlProp(src.standardFontDataUrl);
  const wasmUrl = getFactoryUrlProp(src.wasmUrl);
  const ignoreErrors = src.stopAtErrors !== true;
  const maxImageSize = Number.isInteger(src.maxImageSize) && src.maxImageSize > -1 ? src.maxImageSize : -1;
  const isOffscreenCanvasSupported = typeof src.isOffscreenCanvasSupported === "boolean" ? src.isOffscreenCanvasSupported : !isNodeJS;
  const isImageDecoderSupported = typeof src.isImageDecoderSupported === "boolean" ? src.isImageDecoderSupported : !isNodeJS;
  const canvasMaxAreaInBytes = Number.isInteger(src.canvasMaxAreaInBytes) ? src.canvasMaxAreaInBytes : -1;
  const disableFontFace = typeof src.disableFontFace === "boolean" ? src.disableFontFace : isNodeJS;
  const fontExtraProperties = src.fontExtraProperties === true;
  const enableXfa = src.enableXfa === true;
  const ownerDocument = src.ownerDocument || globalThis.document;
  const disableRange = src.disableRange === true;
  const disableStream = src.disableStream === true;
  const disableAutoFetch = src.disableAutoFetch === true;
  const pdfBug = src.pdfBug === true;
  const CanvasFactory = src.CanvasFactory || (isNodeJS ? NodeCanvasFactory : DOMCanvasFactory);
  const FilterFactory = src.FilterFactory || (isNodeJS ? NodeFilterFactory : DOMFilterFactory);
  const BinaryDataFactory = src.BinaryDataFactory || (isNodeJS ? NodeBinaryDataFactory : DOMBinaryDataFactory);
  const enableHWA = src.enableHWA === true;
  const enableWebGPU = src.enableWebGPU === true;
  const gpuPromise = enableWebGPU ? initGPU() : Promise.resolve(false);
  const useWasm = src.useWasm !== false;
  const pagesMapper = src.pagesMapper || new PagesMapper();
  const useSystemFonts = typeof src.useSystemFonts === "boolean" ? src.useSystemFonts : !isNodeJS && !disableFontFace;
  const useWorkerFetch = typeof src.useWorkerFetch === "boolean" ? src.useWorkerFetch : !!(BinaryDataFactory === DOMBinaryDataFactory && cMapUrl && cMapPacked && standardFontDataUrl && wasmUrl && isValidFetchUrl(cMapUrl, document.baseURI) && isValidFetchUrl(standardFontDataUrl, document.baseURI) && isValidFetchUrl(wasmUrl, document.baseURI));
  const styleElement = null;
  setVerbosityLevel(verbosity);
  const transportFactory = {
    canvasFactory: new CanvasFactory({
      ownerDocument,
      enableHWA
    }),
    filterFactory: new FilterFactory({
      docId,
      ownerDocument
    }),
    binaryDataFactory: useWorkerFetch ? null : new BinaryDataFactory({
      cMapUrl,
      standardFontDataUrl,
      wasmUrl
    })
  };
  if (!worker) {
    worker = PDFWorker.create({
      verbosity,
      port: GlobalWorkerOptions.workerPort
    });
    task._worker = worker;
  }
  const docParams = {
    docId,
    apiVersion: "6.0.374",
    data,
    password,
    disableAutoFetch,
    rangeChunkSize,
    docBaseUrl,
    enableXfa,
    evaluatorOptions: {
      maxImageSize,
      disableFontFace,
      ignoreErrors,
      isOffscreenCanvasSupported,
      isImageDecoderSupported,
      canvasMaxAreaInBytes,
      fontExtraProperties,
      useSystemFonts,
      useWasm,
      useWorkerFetch,
      cMapUrl,
      cMapPacked,
      iccUrl,
      standardFontDataUrl,
      wasmUrl,
      hasGPU: false
    }
  };
  const transportParams = {
    ownerDocument,
    pdfBug,
    styleElement,
    enableHWA,
    loadingParams: {
      disableAutoFetch,
      enableXfa
    }
  };
  Promise.all([worker.promise, gpuPromise]).then(function ([, hasGPU]) {
    if (worker.destroyed) {
      throw new Error("Worker was destroyed");
    }
    docParams.evaluatorOptions.hasGPU = hasGPU;
    const workerIdPromise = worker.messageHandler.sendWithPromise("GetDocRequest", docParams, data ? [data.buffer] : null);
    let networkStream;
    if (data) {} else if (rangeTransport) {
      networkStream = new PDFDataTransportStream({
        pdfDataRangeTransport: rangeTransport,
        disableRange,
        disableStream
      });
    } else if (url) {
      const NetworkStream = getNetworkStream(url);
      networkStream = new NetworkStream({
        url,
        httpHeaders,
        withCredentials,
        rangeChunkSize,
        disableRange,
        disableStream
      });
    } else {
      throw new Error("getDocument - expected either `data`, `range`, or `url` parameter.");
    }
    return workerIdPromise.then(workerId => {
      if (worker.destroyed) {
        throw new Error("Worker was destroyed");
      }
      const messageHandler = new MessageHandler(docId, workerId, worker.port);
      const transport = new WorkerTransport(messageHandler, task, networkStream, transportParams, transportFactory, pagesMapper);
      task._transport = transport;
      if (task.destroyed) {
        throw new Error("Loading aborted");
      }
      messageHandler.send("Ready", null);
    });
  }).catch(task._capability.reject).finally(task._setupCapability.resolve);
  return task;
}
class PDFDocumentLoadingTask {
  static #docId = 0;
  _capability = Promise.withResolvers();
  _setupCapability = Promise.withResolvers();
  _transport = null;
  _worker = null;
  docId = `d${PDFDocumentLoadingTask.#docId++}`;
  destroyed = false;
  onPassword = null;
  onProgress = null;
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    this.destroyed = true;
    this._capability.promise.catch(() => {});
    try {
      if (this._worker?.port) {
        this._worker._pendingDestroy = true;
      }
      await this._setupCapability.promise;
      await this._transport?.destroy();
    } catch (ex) {
      if (this._worker?.port) {
        delete this._worker._pendingDestroy;
      }
      throw ex;
    }
    this._transport = null;
    this._worker?.destroy();
    this._worker = null;
  }
  async getData() {
    return this._transport.getData();
  }
}
class PDFDataRangeTransport {
  #capability = Promise.withResolvers();
  #listener = null;
  constructor(length, initialData, progressiveDone = false, contentDispositionFilename = null) {
    this.length = length;
    this.initialData = initialData;
    this.progressiveDone = progressiveDone;
    this.contentDispositionFilename = contentDispositionFilename;
  }
  onDataRange(begin, chunk) {
    this.#listener({
      type: "range",
      begin,
      chunk
    });
  }
  onDataProgressiveRead(chunk) {
    this.#capability.promise.then(() => {
      this.#listener({
        type: "progressiveRead",
        chunk
      });
    });
  }
  onDataProgressiveDone() {
    this.#capability.promise.then(() => {
      this.#listener({
        type: "progressiveDone"
      });
    });
  }
  transportReady(listener) {
    this.#listener = listener;
    this.#capability.resolve();
  }
  requestDataRange(begin, end) {
    unreachable("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {}
}
class PDFDocumentProxy {
  constructor(pdfInfo, transport) {
    this._pdfInfo = pdfInfo;
    this._transport = transport;
  }
  get pagesMapper() {
    return this._transport.pagesMapper;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(pageNumber) {
    return this._transport.getPage(pageNumber);
  }
  getPageIndex(ref) {
    return this._transport.getPageIndex(ref);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(id) {
    return this._transport.getDestination(id);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getAttachmentContent(id) {
    return this._transport.getAttachmentContent(id);
  }
  getAnnotationsByType(types, pageIndexesToSkip) {
    return this._transport.getAnnotationsByType(types, pageIndexesToSkip);
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent = "display"
  } = {}) {
    const {
      renderingIntent
    } = this._transport.getRenderingIntent(intent);
    return this._transport.getOptionalContentConfig(renderingIntent);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  extractPages(pageInfos) {
    return this._transport.extractPages(pageInfos);
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  getRawData(data) {
    return this._transport.getRawData(data);
  }
  cleanup(keepLoadedFonts = false) {
    return this._transport.startCleanup(keepLoadedFonts || this.isPureXfa);
  }
  cachedPageNumber(ref) {
    return this._transport.cachedPageNumber(ref);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
class PDFPageProxy {
  #pendingCleanup = false;
  #pagesMapper = null;
  constructor(pageIndex, pageInfo, transport, pagesMapper, pdfBug = false) {
    this._pageIndex = pageIndex;
    this._pageInfo = pageInfo;
    this._transport = transport;
    this._stats = pdfBug ? new StatTimer() : null;
    this._pdfBug = pdfBug;
    this.commonObjs = transport.commonObjs;
    this.objs = new PDFObjects();
    this._intentStates = new Map();
    this.destroyed = false;
    this.recordedBBoxes = null;
    this.#pagesMapper = pagesMapper;
    this.imageCoordinates = null;
  }
  clone(id) {
    const clone = new PDFPageProxy(id, this._pageInfo, this._transport, this.#pagesMapper, this._pdfBug);
    clone.clonedFromIndex = this.clonedFromIndex ?? this._pageIndex;
    this._transport.updatePage(clone);
    return clone;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  set pageNumber(value) {
    this._pageIndex = value - 1;
    this._transport.updatePage(this);
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale,
    rotation = this.rotate,
    offsetX = 0,
    offsetY = 0,
    dontFlip = false
  } = {}) {
    return new PageViewport({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale,
      rotation,
      offsetX,
      offsetY,
      dontFlip
    });
  }
  getAnnotations({
    intent = "display"
  } = {}) {
    const {
      renderingIntent
    } = this._transport.getRenderingIntent(intent);
    return this._transport.getAnnotations(this._pageIndex, renderingIntent);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    return this._transport._htmlForXfa?.children[this._pageIndex] || null;
  }
  render({
    canvasContext,
    canvas = canvasContext.canvas,
    viewport,
    intent = "display",
    annotationMode = AnnotationMode.ENABLE,
    transform = null,
    background = null,
    optionalContentConfigPromise = null,
    annotationCanvasMap = null,
    pageColors = null,
    printAnnotationStorage = null,
    isEditing = false,
    recordImages = false,
    recordOperations = false,
    operationsFilter = null
  }) {
    this._stats?.time("Overall");
    const intentArgs = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage, isEditing);
    const {
      renderingIntent,
      cacheKey
    } = intentArgs;
    this.#pendingCleanup = false;
    optionalContentConfigPromise ||= this._transport.getOptionalContentConfig(renderingIntent);
    const intentState = this._intentStates.getOrInsertComputed(cacheKey, makeObj);
    if (intentState.streamReaderCancelTimeout) {
      clearTimeout(intentState.streamReaderCancelTimeout);
      intentState.streamReaderCancelTimeout = null;
    }
    const intentPrint = !!(renderingIntent & RenderingIntentFlag.PRINT);
    if (!intentState.displayReadyCapability) {
      intentState.displayReadyCapability = Promise.withResolvers();
      intentState.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      };
      this._stats?.time("Page Request");
      this._pumpOperatorList(intentArgs);
    }
    const recordForDebugger = !!(this._pdfBug && globalThis.StepperManager?.enabled);
    const shouldRecordOperations = !!canvas && !this.recordedBBoxes && (recordOperations || recordForDebugger);
    const shouldRecordImages = !!canvas && !this.imageCoordinates && recordImages;
    const complete = error => {
      intentState.renderTasks.delete(internalRenderTask);
      if (shouldRecordOperations) {
        const recordedBBoxes = internalRenderTask.gfx?.dependencyTracker.take();
        if (recordedBBoxes) {
          internalRenderTask.stepper?.setOperatorBBoxes(recordedBBoxes, internalRenderTask.gfx.dependencyTracker.takeDebugMetadata());
          if (recordOperations) {
            this.recordedBBoxes = recordedBBoxes;
          }
        }
      }
      if (shouldRecordImages && !error) {
        this.imageCoordinates = internalRenderTask.gfx?.imagesTracker.take();
      }
      if (intentPrint) {
        this.#pendingCleanup = true;
      }
      this.#tryCleanup();
      if (error) {
        internalRenderTask.capability.reject(error);
        this._abortOperatorList({
          intentState,
          reason: error instanceof Error ? error : new Error(error)
        });
      } else {
        internalRenderTask.capability.resolve();
      }
      if (this._stats) {
        this._stats.timeEnd("Rendering");
        this._stats.timeEnd("Overall");
        if (globalThis.Stats?.enabled) {
          globalThis.Stats.add(this.pageNumber, this._stats);
        }
      }
    };
    let dependencyTracker = null;
    let bboxTracker = null;
    if (shouldRecordOperations || shouldRecordImages) {
      bboxTracker = new CanvasBBoxTracker(canvas, intentState.operatorList.length);
    }
    if (shouldRecordOperations) {
      dependencyTracker = new CanvasDependencyTracker(bboxTracker, recordForDebugger);
    }
    const internalRenderTask = new InternalRenderTask({
      callback: complete,
      params: {
        canvas,
        canvasContext,
        dependencyTracker: dependencyTracker ?? bboxTracker,
        imagesTracker: shouldRecordImages ? new CanvasImagesTracker(canvas) : null,
        viewport,
        transform,
        background
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap,
      operatorList: intentState.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !intentPrint,
      pdfBug: this._pdfBug,
      pageColors,
      enableHWA: this._transport.enableHWA,
      operationsFilter
    });
    (intentState.renderTasks ||= new Set()).add(internalRenderTask);
    const renderTask = internalRenderTask.task;
    Promise.all([intentState.displayReadyCapability.promise, optionalContentConfigPromise]).then(([transparency, optionalContentConfig]) => {
      if (this.destroyed) {
        complete();
        return;
      }
      this._stats?.time("Rendering");
      if (!(optionalContentConfig.renderingIntent & renderingIntent)) {
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` " + "and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      }
      internalRenderTask.initializeGraphics({
        transparency,
        optionalContentConfig
      });
      internalRenderTask.operatorListChanged();
    }).catch(complete);
    return renderTask;
  }
  getOperatorList({
    intent = "display",
    annotationMode = AnnotationMode.ENABLE,
    printAnnotationStorage = null,
    isEditing = false
  } = {}) {
    function operatorListChanged() {
      if (intentState.operatorList.lastChunk) {
        intentState.opListReadCapability.resolve(intentState.operatorList);
        intentState.renderTasks.delete(opListTask);
      }
    }
    const intentArgs = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage, isEditing, true);
    const intentState = this._intentStates.getOrInsertComputed(intentArgs.cacheKey, makeObj);
    let opListTask;
    if (!intentState.opListReadCapability) {
      opListTask = Object.create(null);
      opListTask.operatorListChanged = operatorListChanged;
      intentState.opListReadCapability = Promise.withResolvers();
      (intentState.renderTasks ||= new Set()).add(opListTask);
      intentState.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      };
      this._stats?.time("Page Request");
      this._pumpOperatorList(intentArgs);
    }
    return intentState.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent = false,
    disableNormalization = false
  } = {}) {
    const TEXT_CONTENT_CHUNK_SIZE = 100;
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageId: this.#pagesMapper.getPageId(this._pageIndex + 1) - 1,
      pageIndex: this._pageIndex,
      includeMarkedContent: includeMarkedContent === true,
      disableNormalization: disableNormalization === true
    }, {
      highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
      size(textContent) {
        return textContent.items.length;
      }
    });
  }
  async getTextContent(params = {}) {
    if (this._transport._htmlForXfa) {
      return this.getXfa().then(xfa => XfaText.textContent(xfa));
    }
    const readableStream = this.streamTextContent(params);
    const textContent = {
      items: [],
      styles: Object.create(null),
      lang: null
    };
    for await (const value of readableStream) {
      textContent.lang ??= value.lang;
      Object.assign(textContent.styles, value.styles);
      textContent.items.push(...value.items);
    }
    return textContent;
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = true;
    const waitOn = [];
    for (const intentState of this._intentStates.values()) {
      this._abortOperatorList({
        intentState,
        reason: new Error("Page was destroyed."),
        force: true
      });
      if (intentState.opListReadCapability) {
        continue;
      }
      for (const internalRenderTask of intentState.renderTasks) {
        waitOn.push(internalRenderTask.completed);
        internalRenderTask.cancel();
      }
    }
    this.objs.clear();
    this.#pendingCleanup = false;
    return Promise.all(waitOn);
  }
  cleanup(resetStats = false) {
    this.#pendingCleanup = true;
    const success = this.#tryCleanup();
    if (resetStats && success) {
      this._stats &&= new StatTimer();
    }
    return success;
  }
  #tryCleanup() {
    if (!this.#pendingCleanup || this.destroyed) {
      return false;
    }
    for (const {
      renderTasks,
      operatorList
    } of this._intentStates.values()) {
      if (renderTasks.size > 0 || !operatorList.lastChunk) {
        return false;
      }
    }
    this._intentStates.clear();
    this.objs.clear();
    this.#pendingCleanup = false;
    return true;
  }
  _startRenderPage(transparency, cacheKey) {
    const intentState = this._intentStates.get(cacheKey);
    if (!intentState) {
      return;
    }
    this._stats?.timeEnd("Page Request");
    intentState.displayReadyCapability?.resolve(transparency);
  }
  _renderPageChunk(operatorListChunk, intentState) {
    for (let i = 0, ii = operatorListChunk.length; i < ii; i++) {
      intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
      intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
    }
    intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
    intentState.operatorList.separateAnnots = operatorListChunk.separateAnnots;
    for (const internalRenderTask of intentState.renderTasks) {
      internalRenderTask.operatorListChanged();
    }
    if (operatorListChunk.lastChunk) {
      this.#tryCleanup();
    }
  }
  _pumpOperatorList({
    renderingIntent,
    cacheKey,
    annotationStorageSerializable,
    modifiedIds
  }) {
    const {
      map,
      transfer
    } = annotationStorageSerializable;
    const readableStream = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageId: this.#pagesMapper.getPageId(this._pageIndex + 1) - 1,
      pageIndex: this._pageIndex,
      intent: renderingIntent,
      cacheKey,
      annotationStorage: map,
      modifiedIds
    }, undefined, transfer);
    const reader = readableStream.getReader();
    const intentState = this._intentStates.get(cacheKey);
    intentState.streamReader = reader;
    const pump = () => {
      reader.read().then(({
        value,
        done
      }) => {
        if (done) {
          intentState.streamReader = null;
          return;
        }
        if (this._transport.destroyed) {
          return;
        }
        this._renderPageChunk(value, intentState);
        pump();
      }, reason => {
        intentState.streamReader = null;
        if (this._transport.destroyed) {
          return;
        }
        if (intentState.operatorList) {
          intentState.operatorList.lastChunk = true;
          for (const internalRenderTask of intentState.renderTasks) {
            internalRenderTask.operatorListChanged();
          }
          this.#tryCleanup();
        }
        if (intentState.displayReadyCapability) {
          intentState.displayReadyCapability.reject(reason);
        } else if (intentState.opListReadCapability) {
          intentState.opListReadCapability.reject(reason);
        } else {
          throw reason;
        }
      });
    };
    pump();
  }
  _abortOperatorList({
    intentState,
    reason,
    force = false
  }) {
    if (!intentState.streamReader) {
      return;
    }
    if (intentState.streamReaderCancelTimeout) {
      clearTimeout(intentState.streamReaderCancelTimeout);
      intentState.streamReaderCancelTimeout = null;
    }
    if (!force) {
      if (intentState.renderTasks.size > 0) {
        return;
      }
      if (reason instanceof RenderingCancelledException) {
        let delay = RENDERING_CANCELLED_TIMEOUT;
        if (reason.extraDelay > 0 && reason.extraDelay < 1000) {
          delay += reason.extraDelay;
        }
        intentState.streamReaderCancelTimeout = setTimeout(() => {
          intentState.streamReaderCancelTimeout = null;
          this._abortOperatorList({
            intentState,
            reason,
            force: true
          });
        }, delay);
        return;
      }
    }
    intentState.streamReader.cancel(new AbortException(reason.message)).catch(() => {});
    intentState.streamReader = null;
    if (this._transport.destroyed) {
      return;
    }
    for (const [curCacheKey, curIntentState] of this._intentStates) {
      if (curIntentState === intentState) {
        this._intentStates.delete(curCacheKey);
        break;
      }
    }
    this.cleanup();
  }
  get stats() {
    return this._stats;
  }
}
class PDFWorker {
  #capability = Promise.withResolvers();
  #messageHandler = null;
  #port = null;
  #webWorker = null;
  static #fakeWorkerId = 0;
  static #isWorkerDisabled = false;
  static #workerPorts = new WeakMap();
  static {
    if (isNodeJS) {
      this.#isWorkerDisabled = true;
      GlobalWorkerOptions.workerSrc ||= "./pdf.worker.mjs";
    }
    this._isSameOrigin = (baseUrl, otherUrl) => {
      const base = URL.parse(baseUrl);
      if (!base?.origin || base.origin === "null") {
        return false;
      }
      const other = new URL(otherUrl, base);
      return base.origin === other.origin;
    };
    this._createCDNWrapper = url => {
      const wrapper = `await import("${url}");`;
      return URL.createObjectURL(new Blob([wrapper], {
        type: "text/javascript"
      }));
    };
  }
  constructor({
    name = null,
    port = null,
    verbosity = getVerbosityLevel()
  } = {}) {
    this.name = name;
    this.destroyed = false;
    this.verbosity = verbosity;
    if (port) {
      if (PDFWorker.#workerPorts.has(port)) {
        throw new Error("Cannot use more than one PDFWorker per port.");
      }
      PDFWorker.#workerPorts.set(port, this);
      this.#initializeFromPort(port);
    } else {
      this.#initialize();
    }
  }
  get promise() {
    return this.#capability.promise;
  }
  #resolve() {
    this.#capability.resolve();
    this.#messageHandler.send("configure", {
      verbosity: this.verbosity
    });
  }
  get port() {
    return this.#port;
  }
  get messageHandler() {
    return this.#messageHandler;
  }
  #initializeFromPort(port) {
    this.#port = port;
    this.#messageHandler = new MessageHandler("main", "worker", port);
    this.#messageHandler.on("ready", () => {});
    this.#resolve();
  }
  #initialize() {
    if (PDFWorker.#isWorkerDisabled || PDFWorker.#mainThreadWorkerMessageHandler) {
      this.#setupFakeWorker();
      return;
    }
    let {
      workerSrc
    } = PDFWorker;
    try {
      if (!PDFWorker._isSameOrigin(window.location, workerSrc)) {
        workerSrc = PDFWorker._createCDNWrapper(new URL(workerSrc, window.location).href);
      }
      const worker = new Worker(workerSrc, {
        type: "module"
      });
      const messageHandler = new MessageHandler("main", "worker", worker);
      const terminateEarly = () => {
        ac.abort();
        messageHandler.destroy();
        worker.terminate();
        if (this.destroyed) {
          this.#capability.reject(new Error("Worker was destroyed"));
        } else {
          this.#setupFakeWorker();
        }
      };
      const ac = new AbortController();
      worker.addEventListener("error", () => {
        if (!this.#webWorker) {
          terminateEarly();
        }
      }, {
        signal: ac.signal
      });
      messageHandler.on("test", data => {
        ac.abort();
        if (this.destroyed || !data) {
          terminateEarly();
          return;
        }
        this.#messageHandler = messageHandler;
        this.#port = worker;
        this.#webWorker = worker;
        this.#resolve();
      });
      messageHandler.on("ready", data => {
        ac.abort();
        if (this.destroyed) {
          terminateEarly();
          return;
        }
        try {
          sendTest();
        } catch {
          this.#setupFakeWorker();
        }
      });
      const sendTest = () => {
        const testObj = new Uint8Array();
        messageHandler.send("test", testObj, [testObj.buffer]);
      };
      sendTest();
      return;
    } catch {
      info("The worker has been disabled.");
    }
    this.#setupFakeWorker();
  }
  #setupFakeWorker() {
    if (!PDFWorker.#isWorkerDisabled) {
      warn("Setting up fake worker.");
      PDFWorker.#isWorkerDisabled = true;
    }
    PDFWorker._setupFakeWorkerGlobal.then(WorkerMessageHandler => {
      if (this.destroyed) {
        this.#capability.reject(new Error("Worker was destroyed"));
        return;
      }
      const port = new LoopbackPort();
      this.#port = port;
      const id = `fake${PDFWorker.#fakeWorkerId++}`;
      const workerHandler = new MessageHandler(id + "_worker", id, port);
      WorkerMessageHandler.setup(workerHandler, port);
      this.#messageHandler = new MessageHandler(id, id + "_worker", port);
      this.#resolve();
    }).catch(reason => {
      this.#capability.reject(new Error(`Setting up fake worker failed: "${reason.message}".`));
    });
  }
  destroy() {
    this.destroyed = true;
    this.#webWorker?.terminate();
    this.#webWorker = null;
    PDFWorker.#workerPorts.delete(this.#port);
    this.#port = null;
    this.#messageHandler?.destroy();
    this.#messageHandler = null;
  }
  static create(params) {
    const cachedPort = this.#workerPorts.get(params?.port);
    if (cachedPort) {
      if (cachedPort._pendingDestroy) {
        throw new Error("PDFWorker.create - the worker is being destroyed.\n" + "Please remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      }
      return cachedPort;
    }
    return new PDFWorker(params);
  }
  static get workerSrc() {
    if (GlobalWorkerOptions.workerSrc) {
      return GlobalWorkerOptions.workerSrc;
    }
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get #mainThreadWorkerMessageHandler() {
    try {
      return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
    } catch {
      return null;
    }
  }
  static get _setupFakeWorkerGlobal() {
    const loader = async () => {
      if (this.#mainThreadWorkerMessageHandler) {
        return this.#mainThreadWorkerMessageHandler;
      }
      const worker = await import(
      /*webpackIgnore: true*/
      /*@vite-ignore*/
      this.workerSrc);
      return worker.WorkerMessageHandler;
    };
    return shadow(this, "_setupFakeWorkerGlobal", loader());
  }
}
class WorkerTransport {
  downloadInfoCapability = Promise.withResolvers();
  #fullReader = null;
  #methodPromises = new Map();
  #networkStream = null;
  #pageCache = new Map();
  #pagePromises = new Map();
  #pageRefCache = new Map();
  #passwordCapability = null;
  constructor(messageHandler, loadingTask, networkStream, params, factory, pagesMapper) {
    this.messageHandler = messageHandler;
    this.loadingTask = loadingTask;
    this.#networkStream = networkStream;
    this.commonObjs = new PDFObjects();
    this.fontLoader = new FontLoader({
      ownerDocument: params.ownerDocument,
      styleElement: params.styleElement
    });
    this.enableHWA = params.enableHWA;
    this.loadingParams = params.loadingParams;
    this._params = params;
    this.canvasFactory = factory.canvasFactory;
    this.filterFactory = factory.filterFactory;
    this.binaryDataFactory = factory.binaryDataFactory;
    this.pagesMapper = pagesMapper;
    this.destroyed = false;
    this.destroyCapability = null;
    this.setupMessageHandler();
  }
  updatePage(page) {
    const {
      _pageIndex
    } = page;
    this.#pageCache.set(_pageIndex, page);
    this.#pagePromises.set(_pageIndex, Promise.resolve(page));
  }
  #cacheSimpleMethod(name, data = null) {
    return this.#methodPromises.getOrInsertComputed(name, () => this.messageHandler.sendWithPromise(name, data));
  }
  #onProgress({
    loaded,
    total
  }) {
    this.loadingTask.onProgress?.({
      loaded,
      total,
      percent: total ? MathClamp(Math.round(loaded / total * 100), 0, 100) : NaN
    });
  }
  get annotationStorage() {
    return shadow(this, "annotationStorage", new AnnotationStorage());
  }
  getRenderingIntent(intent, annotationMode = AnnotationMode.ENABLE, printAnnotationStorage = null, isEditing = false, isOpList = false) {
    let renderingIntent = RenderingIntentFlag.DISPLAY;
    let annotationStorageSerializable = SerializableEmpty;
    switch (intent) {
      case "any":
        renderingIntent = RenderingIntentFlag.ANY;
        break;
      case "display":
        break;
      case "print":
        renderingIntent = RenderingIntentFlag.PRINT;
        break;
      default:
        warn(`getRenderingIntent - invalid intent: ${intent}`);
    }
    const annotationStorage = renderingIntent & RenderingIntentFlag.PRINT && printAnnotationStorage instanceof PrintAnnotationStorage ? printAnnotationStorage : this.annotationStorage;
    switch (annotationMode) {
      case AnnotationMode.DISABLE:
        renderingIntent += RenderingIntentFlag.ANNOTATIONS_DISABLE;
        break;
      case AnnotationMode.ENABLE:
        break;
      case AnnotationMode.ENABLE_FORMS:
        renderingIntent += RenderingIntentFlag.ANNOTATIONS_FORMS;
        break;
      case AnnotationMode.ENABLE_STORAGE:
        renderingIntent += RenderingIntentFlag.ANNOTATIONS_STORAGE;
        annotationStorageSerializable = annotationStorage.serializable;
        break;
      default:
        warn(`getRenderingIntent - invalid annotationMode: ${annotationMode}`);
    }
    if (isEditing) {
      renderingIntent += RenderingIntentFlag.IS_EDITING;
    }
    if (isOpList) {
      renderingIntent += RenderingIntentFlag.OPLIST;
    }
    const {
      ids: modifiedIds,
      hash: modifiedIdsHash
    } = annotationStorage.modifiedIds;
    const cacheKeyBuf = [renderingIntent, annotationStorageSerializable.hash, modifiedIdsHash];
    return {
      renderingIntent,
      cacheKey: cacheKeyBuf.join("_"),
      annotationStorageSerializable,
      modifiedIds
    };
  }
  destroy() {
    if (this.destroyCapability) {
      return this.destroyCapability.promise;
    }
    this.destroyed = true;
    this.destroyCapability = Promise.withResolvers();
    this.#passwordCapability?.reject(new Error("Worker was destroyed during onPassword callback"));
    const waitOn = [];
    for (const page of this.#pageCache.values()) {
      waitOn.push(page._destroy());
    }
    this.#pageCache.clear();
    this.#pagePromises.clear();
    this.#pageRefCache.clear();
    if (Object.hasOwn(this, "annotationStorage")) {
      this.annotationStorage.resetModified();
    }
    const terminated = this.messageHandler.sendWithPromise("Terminate", null);
    waitOn.push(terminated);
    Promise.all(waitOn).then(() => {
      this.commonObjs.clear();
      this.fontLoader.clear();
      this.#methodPromises.clear();
      this.filterFactory.destroy();
      TextLayer.cleanup();
      this.#networkStream?.cancelAllRequests(new AbortException("Worker was terminated."));
      this.messageHandler?.destroy();
      this.messageHandler = null;
      this.destroyCapability.resolve();
    }, this.destroyCapability.reject);
    return this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler,
      loadingTask
    } = this;
    messageHandler.on("GetReader", (data, sink) => {
      assert(this.#networkStream, "GetReader - no `BasePDFStream` instance available.");
      this.#fullReader = this.#networkStream.getFullReader();
      this.#fullReader.onProgress = evt => this.#onProgress(evt);
      sink.onPull = () => {
        this.#fullReader.read().then(function ({
          value,
          done
        }) {
          if (done) {
            sink.close();
            return;
          }
          assert(value instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer.");
          sink.enqueue(new Uint8Array(value), 1, [value]);
        }).catch(reason => {
          sink.error(reason);
        });
      };
      sink.onCancel = reason => {
        this.#fullReader.cancel(reason);
        sink.ready.catch(readyReason => {
          if (this.destroyed) {
            return;
          }
          throw readyReason;
        });
      };
    });
    messageHandler.on("ReaderHeadersReady", async data => {
      await this.#fullReader.headersReady;
      const {
        isStreamingSupported,
        isRangeSupported,
        contentLength
      } = this.#fullReader;
      if (isStreamingSupported && isRangeSupported) {
        this.#fullReader.onProgress = null;
      }
      return {
        isStreamingSupported,
        isRangeSupported,
        contentLength
      };
    });
    messageHandler.on("GetRangeReader", (data, sink) => {
      assert(this.#networkStream, "GetRangeReader - no `BasePDFStream` instance available.");
      const rangeReader = this.#networkStream.getRangeReader(data.begin, data.end);
      if (!rangeReader) {
        sink.close();
        return;
      }
      sink.onPull = () => {
        rangeReader.read().then(function ({
          value,
          done
        }) {
          if (done) {
            sink.close();
            return;
          }
          assert(value instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer.");
          sink.enqueue(new Uint8Array(value), 1, [value]);
        }).catch(reason => {
          sink.error(reason);
        });
      };
      sink.onCancel = reason => {
        rangeReader.cancel(reason);
        sink.ready.catch(readyReason => {
          if (this.destroyed) {
            return;
          }
          throw readyReason;
        });
      };
    });
    messageHandler.on("GetDoc", ({
      pdfInfo
    }) => {
      this.pagesMapper.pagesNumber = pdfInfo.numPages;
      this._numPages = pdfInfo.numPages;
      this._htmlForXfa = pdfInfo.htmlForXfa;
      delete pdfInfo.htmlForXfa;
      loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, this));
    });
    messageHandler.on("DocException", ex => {
      loadingTask._capability.reject(wrapReason(ex));
    });
    messageHandler.on("PasswordRequest", ex => {
      this.#passwordCapability = Promise.withResolvers();
      try {
        if (!loadingTask.onPassword) {
          throw wrapReason(ex);
        }
        const updatePassword = password => {
          if (password instanceof Error) {
            this.#passwordCapability.reject(password);
          } else {
            this.#passwordCapability.resolve({
              password
            });
          }
        };
        loadingTask.onPassword(updatePassword, ex.code);
      } catch (err) {
        this.#passwordCapability.reject(err);
      }
      return this.#passwordCapability.promise;
    });
    messageHandler.on("DataLoaded", data => {
      this.#onProgress({
        loaded: data.length,
        total: data.length
      });
      this.downloadInfoCapability.resolve(data);
    });
    messageHandler.on("StartRenderPage", data => {
      if (this.destroyed) {
        return;
      }
      const page = this.#pageCache.get(data.pageIndex);
      page._startRenderPage(data.transparency, data.cacheKey);
    });
    messageHandler.on("commonobj", ([id, type, exportedData]) => {
      if (this.destroyed) {
        return null;
      }
      if (this.commonObjs.has(id)) {
        return null;
      }
      switch (type) {
        case "Font":
          if ("error" in exportedData) {
            const exportedError = exportedData.error;
            warn(`Error during font loading: ${exportedError}`);
            this.commonObjs.resolve(id, exportedError);
            break;
          }
          const fontData = new FontInfo(exportedData);
          const inspectFont = this._params.pdfBug && globalThis.FontInspector?.enabled ? (font, url) => globalThis.FontInspector.fontAdded(font, url) : null;
          const font = new FontFaceObject(fontData, inspectFont, exportedData.charProcOperatorList, exportedData.extra);
          this.fontLoader.bind(font).catch(() => messageHandler.sendWithPromise("FontFallback", {
            id
          })).finally(() => {
            if (!font.fontExtraProperties) {
              font.clearData();
            }
            this.commonObjs.resolve(id, font);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef
          } = exportedData;
          assert(imageRef, "The imageRef must be defined.");
          for (const pageProxy of this.#pageCache.values()) {
            for (const [, data] of pageProxy.objs) {
              if (data?.ref !== imageRef) {
                continue;
              }
              if (!data.dataLen) {
                return null;
              }
              const copy = structuredClone(data);
              this.commonObjs.resolve(id, copy);
              return data.dataLen;
            }
          }
          break;
        case "FontPath":
          this.commonObjs.resolve(id, new FontPathInfo(exportedData));
          break;
        case "Image":
          this.commonObjs.resolve(id, exportedData);
          break;
        case "Pattern":
          const pattern = new PatternInfo(exportedData);
          this.commonObjs.resolve(id, pattern.getIR());
          break;
        default:
          throw new Error(`Got unknown common object type ${type}`);
      }
      return null;
    });
    messageHandler.on("obj", ([id, pageIndex, type, imageData]) => {
      if (this.destroyed) {
        return;
      }
      const pageProxy = this.#pageCache.get(pageIndex);
      if (pageProxy.objs.has(id)) {
        return;
      }
      if (pageProxy._intentStates.size === 0) {
        imageData?.bitmap?.close();
        return;
      }
      switch (type) {
        case "Image":
        case "Pattern":
          pageProxy.objs.resolve(id, imageData);
          break;
        default:
          throw new Error(`Got unknown object type ${type}`);
      }
    });
    messageHandler.on("DocProgress", data => {
      if (this.destroyed) {
        return;
      }
      this.#onProgress(data);
    });
    messageHandler.on("FetchBinaryData", async data => {
      if (this.destroyed) {
        throw new Error("Worker was destroyed.");
      }
      if (!this.binaryDataFactory) {
        throw new Error("`BinaryDataFactory` not initialized, see the `useWorkerFetch` parameter.");
      }
      return this.binaryDataFactory.fetch(data);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    if (this.annotationStorage.size <= 0) {
      warn("saveDocument called while `annotationStorage` is empty, " + "please use the getData-method instead.");
    }
    const {
      map,
      transfer
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: map,
      filename: this.#fullReader?.filename ?? null
    }, transfer).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  extractPages(pageInfos) {
    const params = {
      pageInfos
    };
    let transfer;
    const ImageBitmapCtor = globalThis.ImageBitmap;
    if (typeof ImageBitmapCtor === "function") {
      const infos = Array.isArray(pageInfos) ? pageInfos : [pageInfos];
      for (const pageInfo of infos) {
        if (pageInfo?.image instanceof ImageBitmapCtor) {
          (transfer ||= []).push(pageInfo.image);
        }
      }
    }
    if (this.annotationStorage.size > 0) {
      const serialized = this.annotationStorage.serializable;
      let {
        map
      } = serialized;
      if (serialized.transfer?.length) {
        if (transfer) {
          transfer.push(...serialized.transfer);
        } else {
          transfer = serialized.transfer;
        }
      }
      const mapping = this.pagesMapper.getMapping();
      if (mapping) {
        const remapped = new Map();
        for (const [k, v] of map) {
          if (v?.pageIndex !== undefined && v.pageIndex >= 0 && v.pageIndex < mapping.length) {
            const sourceIdx = mapping[v.pageIndex] - 1;
            if (sourceIdx !== v.pageIndex) {
              remapped.set(k, {
                ...v,
                pageIndex: sourceIdx
              });
              continue;
            }
          }
          remapped.set(k, v);
        }
        map = remapped;
      }
      params.annotationStorage = map;
    }
    return this.messageHandler.sendWithPromise("ExtractPages", params, transfer).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(pageNumber) {
    if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this.pagesMapper.pagesNumber) {
      return Promise.reject(new Error("Invalid page request."));
    }
    const pageIndex = pageNumber - 1;
    const newPageIndex = this.pagesMapper.getPageId(pageNumber) - 1;
    const cachedPromise = this.#pagePromises.get(pageIndex);
    if (cachedPromise) {
      return cachedPromise;
    }
    const promise = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: newPageIndex
    }).then(pageInfo => {
      if (this.destroyed) {
        throw new Error("Transport destroyed");
      }
      if (pageInfo.refStr) {
        this.#pageRefCache.set(pageInfo.refStr, newPageIndex);
      }
      const page = new PDFPageProxy(pageIndex, pageInfo, this, this.pagesMapper, this._params.pdfBug);
      this.#pageCache.set(pageIndex, page);
      return page;
    });
    this.#pagePromises.set(pageIndex, promise);
    return promise;
  }
  async getPageIndex(ref) {
    if (!isRefProxy(ref)) {
      throw new Error("Invalid pageIndex request.");
    }
    const index = await this.messageHandler.sendWithPromise("GetPageIndex", {
      num: ref.num,
      gen: ref.gen
    });
    const pageNumber = this.pagesMapper.getPageNumber(index + 1);
    if (pageNumber === 0) {
      throw new Error("GetPageIndex: page has been removed.");
    }
    return pageNumber - 1;
  }
  getAnnotations(pageIndex, intent) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: this.pagesMapper.getPageId(pageIndex + 1) - 1,
      intent
    });
  }
  getFieldObjects() {
    return this.#cacheSimpleMethod("GetFieldObjects");
  }
  hasJSActions() {
    return this.#cacheSimpleMethod("HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(id) {
    if (typeof id !== "string") {
      return Promise.reject(new Error("Invalid destination request."));
    }
    return this.messageHandler.sendWithPromise("GetDestination", {
      id
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getAttachmentContent(id) {
    return this.messageHandler.sendWithPromise("GetAttachmentContent", id);
  }
  getAnnotationsByType(types, pageIndexesToSkip) {
    return this.messageHandler.sendWithPromise("GetAnnotationsByType", {
      types,
      pageIndexesToSkip
    });
  }
  getDocJSActions() {
    return this.#cacheSimpleMethod("GetDocJSActions");
  }
  getPageJSActions(pageIndex) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: this.pagesMapper.getPageId(pageIndex + 1) - 1
    });
  }
  getStructTree(pageIndex) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: this.pagesMapper.getPageId(pageIndex + 1) - 1
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(renderingIntent) {
    return this.#cacheSimpleMethod("GetOptionalContentConfig").then(data => new OptionalContentConfig(data, renderingIntent));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const name = "GetMetadata";
    return this.#methodPromises.getOrInsertComputed(name, () => this.messageHandler.sendWithPromise(name, null).then(results => ({
      info: results[0],
      metadata: results[1] ? new Metadata(results[1]) : null,
      contentDispositionFilename: this.#fullReader?.filename ?? null,
      contentLength: this.#fullReader?.contentLength ?? null,
      hasStructTree: results[2]
    })));
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  getRawData(data) {
    return this.messageHandler.sendWithPromise("GetRawData", data);
  }
  async startCleanup(keepLoadedFonts = false) {
    if (this.destroyed) {
      return;
    }
    await this.messageHandler.sendWithPromise("Cleanup", null);
    for (const page of this.#pageCache.values()) {
      const cleanupSuccessful = page.cleanup();
      if (!cleanupSuccessful) {
        throw new Error(`startCleanup: Page ${page.pageNumber} is currently rendering.`);
      }
    }
    this.commonObjs.clear();
    if (!keepLoadedFonts) {
      this.fontLoader.clear();
    }
    this.#methodPromises.clear();
    this.filterFactory.destroy(true);
    TextLayer.cleanup();
  }
  cachedPageNumber(ref) {
    if (!isRefProxy(ref)) {
      return null;
    }
    const refStr = ref.gen === 0 ? `${ref.num}R` : `${ref.num}R${ref.gen}`;
    const pageIndex = this.#pageRefCache.get(refStr);
    if (pageIndex >= 0) {
      const pageNumber = this.pagesMapper.getPageNumber(pageIndex + 1);
      if (pageNumber !== 0) {
        return pageNumber;
      }
    }
    return null;
  }
}
class RenderTask {
  _internalRenderTask = null;
  onContinue = null;
  onError = null;
  constructor(internalRenderTask) {
    this._internalRenderTask = internalRenderTask;
  }
  get promise() {
    return this._internalRenderTask.capability.promise;
  }
  cancel(extraDelay = 0) {
    this._internalRenderTask.cancel(null, extraDelay);
  }
  get separateAnnots() {
    const {
      separateAnnots
    } = this._internalRenderTask.operatorList;
    if (!separateAnnots) {
      return false;
    }
    const {
      annotationCanvasMap
    } = this._internalRenderTask;
    return separateAnnots.form || separateAnnots.canvas && annotationCanvasMap?.size > 0;
  }
  get imageCoordinates() {
    return this._internalRenderTask.imageCoordinates || null;
  }
}
class InternalRenderTask {
  #rAF = null;
  static #canvasInUse = new WeakSet();
  constructor({
    callback,
    params,
    objs,
    commonObjs,
    annotationCanvasMap,
    operatorList,
    pageIndex,
    canvasFactory,
    filterFactory,
    useRequestAnimationFrame = false,
    pdfBug = false,
    pageColors = null,
    enableHWA = false,
    operationsFilter = null
  }) {
    this.callback = callback;
    this.params = params;
    this.objs = objs;
    this.commonObjs = commonObjs;
    this.annotationCanvasMap = annotationCanvasMap;
    this.operatorListIdx = null;
    this.operatorList = operatorList;
    this._pageIndex = pageIndex;
    this.canvasFactory = canvasFactory;
    this.filterFactory = filterFactory;
    this._pdfBug = pdfBug;
    this.pageColors = pageColors;
    this.running = false;
    this.graphicsReadyCallback = null;
    this.graphicsReady = false;
    this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== "undefined";
    this.cancelled = false;
    this.capability = Promise.withResolvers();
    this.task = new RenderTask(this);
    this._cancelBound = this.cancel.bind(this);
    this._continueBound = this._continue.bind(this);
    this._scheduleNextBound = this._scheduleNext.bind(this);
    this._nextBound = this._next.bind(this);
    this._canvas = params.canvas;
    this._canvasContext = params.canvas ? null : params.canvasContext;
    this._enableHWA = enableHWA;
    this._dependencyTracker = params.dependencyTracker;
    this._imagesTracker = params.imagesTracker;
    this._operationsFilter = operationsFilter;
  }
  get completed() {
    return this.capability.promise.catch(function () {});
  }
  initializeGraphics({
    transparency = false,
    optionalContentConfig
  }) {
    if (this.cancelled) {
      return;
    }
    if (this._canvas) {
      if (InternalRenderTask.#canvasInUse.has(this._canvas)) {
        throw new Error("Cannot use the same canvas during multiple render() operations. " + "Use different canvas or ensure previous operations were " + "cancelled or completed.");
      }
      InternalRenderTask.#canvasInUse.add(this._canvas);
    }
    if (this._pdfBug && globalThis.StepperManager?.enabled) {
      this.stepper = globalThis.StepperManager.create(this._pageIndex);
      this.stepper.init(this.operatorList);
      this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
    }
    const {
      viewport,
      transform,
      background,
      dependencyTracker,
      imagesTracker
    } = this.params;
    const canvasContext = this._canvasContext || this._canvas.getContext("2d", {
      alpha: false,
      willReadFrequently: !this._enableHWA
    });
    this.gfx = new CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig
    }, this.annotationCanvasMap, this.pageColors, dependencyTracker, imagesTracker);
    this.gfx.beginDrawing({
      transform,
      viewport,
      transparency,
      background
    });
    this.operatorListIdx = 0;
    this.graphicsReady = true;
    this.graphicsReadyCallback?.();
  }
  cancel(error = null, extraDelay = 0) {
    this.running = false;
    this.cancelled = true;
    this.gfx?.endDrawing();
    if (this.#rAF) {
      window.cancelAnimationFrame(this.#rAF);
      this.#rAF = null;
    }
    InternalRenderTask.#canvasInUse.delete(this._canvas);
    error ||= new RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, extraDelay);
    this.callback(error);
    this.task.onError?.(error);
  }
  operatorListChanged() {
    if (!this.graphicsReady) {
      this.graphicsReadyCallback ||= this._continueBound;
      return;
    }
    this.gfx.dependencyTracker?.growOperationsCount(this.operatorList.fnArray.length);
    this.stepper?.updateOperatorList(this.operatorList);
    if (this.running) {
      return;
    }
    this._continue();
  }
  _continue() {
    this.running = true;
    if (this.cancelled) {
      return;
    }
    if (this.task.onContinue) {
      this.task.onContinue(this._scheduleNextBound);
    } else {
      this._scheduleNext();
    }
  }
  _scheduleNext() {
    if (this._useRequestAnimationFrame) {
      this.#rAF = window.requestAnimationFrame(() => {
        this.#rAF = null;
        this._nextBound().catch(this._cancelBound);
      });
    } else {
      Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
  }
  async _next() {
    if (this.cancelled) {
      return;
    }
    this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter);
    if (this.operatorListIdx === this.operatorList.argsArray.length) {
      this.running = false;
      if (this.operatorList.lastChunk) {
        this.gfx.endDrawing();
        InternalRenderTask.#canvasInUse.delete(this._canvas);
        this.callback();
      }
    }
  }
}
const version = "6.0.374";
const build = "fdeed2af5";

;// ./src/display/editor/color_picker.js



class ColorPicker {
  #button = null;
  #buttonSwatch = null;
  #defaultColor;
  #dropdown = null;
  #dropdownWasFromKeyboard = false;
  #isMainColorPicker = false;
  #editor = null;
  #eventBus;
  #openDropdownAC = null;
  #uiManager = null;
  static #l10nColor = null;
  static get _keyboardManager() {
    return shadow(this, "_keyboardManager", new KeyboardManager([[["Escape"], ColorPicker.prototype._hideDropdownFromKeyboard], [["Space"], ColorPicker.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight"], ColorPicker.prototype._moveToNext], [["ArrowUp", "ArrowLeft"], ColorPicker.prototype._moveToPrevious], [["Home"], ColorPicker.prototype._moveToBeginning], [["End"], ColorPicker.prototype._moveToEnd]]));
  }
  constructor({
    editor = null,
    uiManager = null
  }) {
    if (editor) {
      this.#isMainColorPicker = false;
      this.#editor = editor;
    } else {
      this.#isMainColorPicker = true;
    }
    this.#uiManager = editor?._uiManager || uiManager;
    this.#eventBus = this.#uiManager._eventBus;
    this.#defaultColor = editor?.color?.toUpperCase() || this.#uiManager?.highlightColors.values().next().value || "#FFFF98";
    ColorPicker.#l10nColor ||= Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    });
  }
  renderButton() {
    const button = this.#button = document.createElement("button");
    button.className = "colorPicker";
    button.tabIndex = "0";
    button.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button");
    button.ariaHasPopup = "true";
    if (this.#editor) {
      button.ariaControls = `${this.#editor.id}_colorpicker_dropdown`;
    }
    const signal = this.#uiManager._signal;
    button.addEventListener("click", this.#openDropdown.bind(this), {
      signal
    });
    button.addEventListener("keydown", this.#keyDown.bind(this), {
      signal
    });
    const swatch = this.#buttonSwatch = document.createElement("span");
    swatch.className = "swatch";
    swatch.ariaHidden = "true";
    swatch.style.backgroundColor = this.#defaultColor;
    button.append(swatch);
    return button;
  }
  renderMainDropdown() {
    const dropdown = this.#dropdown = this.#getDropdownRoot();
    dropdown.ariaOrientation = "horizontal";
    dropdown.ariaLabelledBy = "highlightColorPickerLabel";
    return dropdown;
  }
  #getDropdownRoot() {
    const div = document.createElement("div");
    const signal = this.#uiManager._signal;
    div.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    div.className = "dropdown";
    div.role = "listbox";
    div.ariaMultiSelectable = "false";
    div.ariaOrientation = "vertical";
    div.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
    if (this.#editor) {
      div.id = `${this.#editor.id}_colorpicker_dropdown`;
    }
    for (const [name, color] of this.#uiManager.highlightColors) {
      const button = document.createElement("button");
      button.tabIndex = "0";
      button.role = "option";
      button.setAttribute("data-color", color);
      button.title = name;
      button.setAttribute("data-l10n-id", ColorPicker.#l10nColor[name]);
      const swatch = document.createElement("span");
      button.append(swatch);
      swatch.className = "swatch";
      swatch.style.backgroundColor = color;
      button.ariaSelected = color === this.#defaultColor;
      button.addEventListener("click", this.#colorSelect.bind(this, color), {
        signal
      });
      div.append(button);
    }
    div.addEventListener("keydown", this.#keyDown.bind(this), {
      signal
    });
    return div;
  }
  #colorSelect(color, event) {
    event.stopPropagation();
    this.#eventBus.dispatch("switchannotationeditorparams", {
      source: this,
      type: AnnotationEditorParamsType.HIGHLIGHT_COLOR,
      value: color
    });
    this.updateColor(color);
  }
  _colorSelectFromKeyboard(event) {
    if (event.target === this.#button) {
      this.#openDropdown(event);
      return;
    }
    const color = event.target.getAttribute("data-color");
    if (!color) {
      return;
    }
    this.#colorSelect(color, event);
  }
  _moveToNext(event) {
    if (!this.#isDropdownVisible) {
      this.#openDropdown(event);
      return;
    }
    if (event.target === this.#button) {
      this.#dropdown.firstElementChild?.focus();
      return;
    }
    event.target.nextSibling?.focus();
  }
  _moveToPrevious(event) {
    if (event.target === this.#dropdown?.firstElementChild || event.target === this.#button) {
      if (this.#isDropdownVisible) {
        this._hideDropdownFromKeyboard();
      }
      return;
    }
    if (!this.#isDropdownVisible) {
      this.#openDropdown(event);
    }
    event.target.previousSibling?.focus();
  }
  _moveToBeginning(event) {
    if (!this.#isDropdownVisible) {
      this.#openDropdown(event);
      return;
    }
    this.#dropdown.firstElementChild?.focus();
  }
  _moveToEnd(event) {
    if (!this.#isDropdownVisible) {
      this.#openDropdown(event);
      return;
    }
    this.#dropdown.lastElementChild?.focus();
  }
  #keyDown(event) {
    ColorPicker._keyboardManager.exec(this, event);
  }
  #openDropdown(event) {
    if (this.#isDropdownVisible) {
      this.hideDropdown();
      return;
    }
    this.#dropdownWasFromKeyboard = event.detail === 0;
    if (!this.#openDropdownAC) {
      this.#openDropdownAC = new AbortController();
      window.addEventListener("pointerdown", this.#pointerDown.bind(this), {
        signal: this.#uiManager.combinedSignal(this.#openDropdownAC)
      });
    }
    this.#button.ariaExpanded = "true";
    if (this.#dropdown) {
      this.#dropdown.classList.remove("hidden");
      return;
    }
    const root = this.#dropdown = this.#getDropdownRoot();
    this.#button.append(root);
  }
  #pointerDown(event) {
    if (this.#dropdown?.contains(event.target)) {
      return;
    }
    this.hideDropdown();
  }
  hideDropdown() {
    this.#dropdown?.classList.add("hidden");
    this.#button.ariaExpanded = "false";
    this.#openDropdownAC?.abort();
    this.#openDropdownAC = null;
  }
  get #isDropdownVisible() {
    return this.#dropdown && !this.#dropdown.classList.contains("hidden");
  }
  _hideDropdownFromKeyboard() {
    if (this.#isMainColorPicker) {
      return;
    }
    if (!this.#isDropdownVisible) {
      this.#editor?.unselect();
      return;
    }
    this.hideDropdown();
    this.#button.focus({
      preventScroll: true,
      focusVisible: this.#dropdownWasFromKeyboard
    });
  }
  updateColor(color) {
    if (this.#buttonSwatch) {
      this.#buttonSwatch.style.backgroundColor = color;
    }
    if (!this.#dropdown) {
      return;
    }
    const i = this.#uiManager.highlightColors.values();
    for (const child of this.#dropdown.children) {
      child.ariaSelected = i.next().value === color.toUpperCase();
    }
  }
  destroy() {
    this.#button?.remove();
    this.#button = null;
    this.#buttonSwatch = null;
    this.#dropdown?.remove();
    this.#dropdown = null;
  }
}
class BasicColorPicker {
  #input = null;
  #hasAlpha = false;
  #editor = null;
  #uiManager = null;
  static #l10nColor = null;
  constructor(editor) {
    this.#editor = editor;
    this.#uiManager = editor._uiManager;
    BasicColorPicker.#l10nColor ||= Object.freeze({
      freetext: "pdfjs-editor-color-picker-free-text-input",
      ink: "pdfjs-editor-color-picker-ink-input"
    });
  }
  renderButton() {
    if (this.#input) {
      return this.#input;
    }
    const {
      editorType,
      colorType,
      colorAndOpacityType,
      opacityType,
      color,
      opacity
    } = this.#editor;
    const hasAlpha = this.#hasAlpha = FeatureTest.isAlphaColorInputSupported && opacityType !== undefined;
    const input = this.#input = document.createElement("input");
    input.type = "color";
    if (hasAlpha) {
      input.setAttribute("alpha", "");
      const alphaHex = Util.hexNums[Math.round((opacity ?? 1) * 255)];
      input.value = (color || "#000000") + alphaHex;
    } else {
      input.value = color || "#000000";
    }
    input.className = "basicColorPicker";
    input.tabIndex = 0;
    input.setAttribute("data-l10n-id", BasicColorPicker.#l10nColor[editorType]);
    input.addEventListener("input", () => {
      if (hasAlpha) {
        const rgba = getRGBA(input.value);
        if (!rgba) {
          return;
        }
        const [r, g, b, op] = rgba;
        const hex = Util.makeHexColor(r, g, b);
        if (colorAndOpacityType !== undefined) {
          this.#uiManager.updateParams(colorAndOpacityType, {
            color: hex,
            opacity: op
          });
        } else {
          this.#uiManager.updateParams(colorType, hex);
          this.#uiManager.updateParams(opacityType, op);
        }
      } else {
        this.#uiManager.updateParams(colorType, input.value);
      }
    }, {
      signal: this.#uiManager._signal
    });
    return input;
  }
  update(value) {
    if (!this.#input) {
      return;
    }
    if (this.#hasAlpha) {
      const alphaHex = Util.hexNums[Math.round(this.#editor.opacity * 255)];
      this.#input.value = value + alphaHex;
    } else {
      this.#input.value = value;
    }
  }
  updateOpacity(value) {
    if (!this.#input || !this.#hasAlpha) {
      return;
    }
    const alphaHex = Util.hexNums[Math.round(value * 255)];
    this.#input.value = this.#editor.color + alphaHex;
  }
  destroy() {
    this.#input?.remove();
    this.#input = null;
  }
  hideDropdown() {}
}

;// ./src/shared/scripting_utils.js

function makeColorComp(n) {
  return Math.floor(MathClamp(n, 0, 1) * 255).toString(16).padStart(2, "0");
}
function scaleAndClamp(x) {
  return MathClamp(x, 0, 1) * 255;
}
class ColorConverters {
  static CMYK_G([c, y, m, k]) {
    return ["G", 1 - Math.min(1, 0.3 * c + 0.59 * m + 0.11 * y + k)];
  }
  static G_CMYK([g]) {
    return ["CMYK", 0, 0, 0, 1 - g];
  }
  static G_RGB([g]) {
    return ["RGB", g, g, g];
  }
  static G_rgb([g]) {
    g = scaleAndClamp(g);
    return [g, g, g];
  }
  static G_HTML([g]) {
    const G = makeColorComp(g);
    return `#${G}${G}${G}`;
  }
  static RGB_G([r, g, b]) {
    return ["G", 0.3 * r + 0.59 * g + 0.11 * b];
  }
  static RGB_rgb(color) {
    return color.map(scaleAndClamp);
  }
  static RGB_HTML(color) {
    return `#${color.map(makeColorComp).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([c, y, m, k]) {
    return ["RGB", 1 - Math.min(1, c + k), 1 - Math.min(1, m + k), 1 - Math.min(1, y + k)];
  }
  static CMYK_rgb([c, y, m, k]) {
    return [scaleAndClamp(1 - Math.min(1, c + k)), scaleAndClamp(1 - Math.min(1, m + k)), scaleAndClamp(1 - Math.min(1, y + k))];
  }
  static CMYK_HTML(components) {
    const rgb = this.CMYK_RGB(components).slice(1);
    return this.RGB_HTML(rgb);
  }
  static RGB_CMYK([r, g, b]) {
    const c = 1 - r;
    const m = 1 - g;
    const y = 1 - b;
    const k = Math.min(c, m, y);
    return ["CMYK", c, m, y, k];
  }
}
const DateFormats = (/* unused pure expression or super */ null && (["m/d", "m/d/yy", "mm/dd/yy", "mm/yy", "d-mmm", "d-mmm-yy", "dd-mmm-yy", "yy-mm-dd", "mmm-yy", "mmmm-yy", "mmm d, yyyy", "mmmm d, yyyy", "m/d/yy h:MM tt", "m/d/yy HH:MM"]));
const TimeFormats = (/* unused pure expression or super */ null && (["HH:MM", "h:MM tt", "HH:MM:ss", "h:MM:ss tt"]));

;// ./src/display/svg_factory.js

class BaseSVGFactory {
  create(width, height, skipDimensions = false) {
    if (width <= 0 || height <= 0) {
      throw new Error("Invalid SVG dimensions");
    }
    const svg = this._createSVG("svg:svg");
    svg.setAttribute("version", "1.1");
    if (!skipDimensions) {
      svg.setAttribute("width", `${width}px`);
      svg.setAttribute("height", `${height}px`);
    }
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    return svg;
  }
  createElement(type) {
    if (typeof type !== "string") {
      throw new Error("Invalid SVG element type");
    }
    return this._createSVG(type);
  }
  _createSVG(type) {
    unreachable("Abstract method `_createSVG` called.");
  }
}
class DOMSVGFactory extends BaseSVGFactory {
  _createSVG(type) {
    return document.createElementNS(SVG_NS, type);
  }
}

;// ./src/display/annotation_layer.js





const annotation_layer_DEFAULT_FONT_SIZE = 9;
const GetElementsByNameSet = new WeakSet();
const TIMEZONE_OFFSET = new Date().getTimezoneOffset() * 60 * 1000;
class AnnotationElementFactory {
  static create(parameters) {
    const subtype = parameters.data.annotationType;
    switch (subtype) {
      case AnnotationType.LINK:
        return new LinkAnnotationElement(parameters);
      case AnnotationType.TEXT:
        return new TextAnnotationElement(parameters);
      case AnnotationType.WIDGET:
        const fieldType = parameters.data.fieldType;
        switch (fieldType) {
          case "Tx":
            return new TextWidgetAnnotationElement(parameters);
          case "Btn":
            if (parameters.data.radioButton) {
              return new RadioButtonWidgetAnnotationElement(parameters);
            } else if (parameters.data.checkBox) {
              return new CheckboxWidgetAnnotationElement(parameters);
            }
            return new PushButtonWidgetAnnotationElement(parameters);
          case "Ch":
            return new ChoiceWidgetAnnotationElement(parameters);
          case "Sig":
            return new SignatureWidgetAnnotationElement(parameters);
        }
        return new WidgetAnnotationElement(parameters);
      case AnnotationType.POPUP:
        return new PopupAnnotationElement(parameters);
      case AnnotationType.FREETEXT:
        return new FreeTextAnnotationElement(parameters);
      case AnnotationType.LINE:
        return new LineAnnotationElement(parameters);
      case AnnotationType.SQUARE:
        return new SquareAnnotationElement(parameters);
      case AnnotationType.CIRCLE:
        return new CircleAnnotationElement(parameters);
      case AnnotationType.POLYLINE:
        return new PolylineAnnotationElement(parameters);
      case AnnotationType.CARET:
        return new CaretAnnotationElement(parameters);
      case AnnotationType.INK:
        return new InkAnnotationElement(parameters);
      case AnnotationType.POLYGON:
        return new PolygonAnnotationElement(parameters);
      case AnnotationType.HIGHLIGHT:
        return new HighlightAnnotationElement(parameters);
      case AnnotationType.UNDERLINE:
        return new UnderlineAnnotationElement(parameters);
      case AnnotationType.SQUIGGLY:
        return new SquigglyAnnotationElement(parameters);
      case AnnotationType.STRIKEOUT:
        return new StrikeOutAnnotationElement(parameters);
      case AnnotationType.STAMP:
        return new StampAnnotationElement(parameters);
      case AnnotationType.FILEATTACHMENT:
        return new FileAttachmentAnnotationElement(parameters);
      default:
        return new AnnotationElement(parameters);
    }
  }
}
class AnnotationElement {
  #updates = null;
  #hasBorder = false;
  #popupElement = null;
  constructor(parameters, {
    isRenderable = false,
    ignoreBorder = false,
    createQuadrilaterals = false
  } = {}) {
    this.isRenderable = isRenderable;
    this.data = parameters.data;
    this.layer = parameters.layer;
    this.linkService = parameters.linkService;
    this.downloadManager = parameters.downloadManager;
    this.imageResourcesPath = parameters.imageResourcesPath;
    this.renderForms = parameters.renderForms;
    this.svgFactory = parameters.svgFactory;
    this.annotationStorage = parameters.annotationStorage;
    this.enableComment = parameters.enableComment;
    this.enableScripting = parameters.enableScripting;
    this.hasJSActions = parameters.hasJSActions;
    this._fieldObjects = parameters.fieldObjects;
    this.parent = parameters.parent;
    this.hasOwnCommentButton = false;
    if (isRenderable) {
      this.contentElement = this.container = this._createContainer(ignoreBorder);
    }
    if (createQuadrilaterals) {
      this._createQuadrilaterals();
    }
  }
  static _hasPopupData({
    contentsObj,
    richText
  }) {
    return !!(contentsObj?.str || richText?.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return AnnotationElement._hasPopupData(this.data) || this.enableComment && !!this.commentText;
  }
  get commentData() {
    const {
      data
    } = this;
    const editor = this.annotationStorage?.getEditor(data.id);
    if (editor) {
      return editor.getData();
    }
    return data;
  }
  get hasCommentButton() {
    return this.enableComment && this.hasPopupElement;
  }
  get commentButtonPosition() {
    const editor = this.annotationStorage?.getEditor(this.data.id);
    if (editor) {
      return editor.commentButtonPositionInPage;
    }
    const {
      quadPoints,
      inkLists,
      rect
    } = this.data;
    let maxX = -Infinity;
    let maxY = -Infinity;
    if (quadPoints?.length >= 8) {
      for (let i = 0; i < quadPoints.length; i += 8) {
        if (quadPoints[i + 1] > maxY) {
          maxY = quadPoints[i + 1];
          maxX = quadPoints[i + 2];
        } else if (quadPoints[i + 1] === maxY) {
          maxX = Math.max(maxX, quadPoints[i + 2]);
        }
      }
      return [maxX, maxY];
    }
    if (inkLists?.length >= 1) {
      for (const inkList of inkLists) {
        for (let i = 0, ii = inkList.length; i < ii; i += 2) {
          if (inkList[i + 1] > maxY) {
            maxY = inkList[i + 1];
            maxX = inkList[i];
          } else if (inkList[i + 1] === maxY) {
            maxX = Math.max(maxX, inkList[i]);
          }
        }
      }
      if (maxX !== Infinity) {
        return [maxX, maxY];
      }
    }
    if (rect) {
      return [rect[2], rect[3]];
    }
    return null;
  }
  _normalizePoint(point) {
    const {
      page: {
        view
      },
      viewport: {
        rawDims: {
          pageWidth,
          pageHeight,
          pageX,
          pageY
        }
      }
    } = this.parent;
    point[1] = view[3] - point[1] + view[1];
    point[0] = 100 * (point[0] - pageX) / pageWidth;
    point[1] = 100 * (point[1] - pageY) / pageHeight;
    return point;
  }
  get commentText() {
    const {
      data
    } = this;
    return this.annotationStorage.getRawValue(`${AnnotationEditorPrefix}${data.id}`)?.popup?.contents || data.contentsObj?.str || "";
  }
  set commentText(text) {
    const {
      data
    } = this;
    const popup = {
      deleted: !text,
      contents: text || ""
    };
    if (!this.annotationStorage.updateEditor(data.id, {
      popup
    })) {
      this.annotationStorage.setValue(`${AnnotationEditorPrefix}${data.id}`, {
        id: data.id,
        annotationType: data.annotationType,
        page: this.parent.page,
        popup,
        popupRef: data.popupRef,
        modificationDate: new Date()
      });
    }
    if (!text) {
      this.removePopup();
    }
  }
  removePopup() {
    (this.#popupElement?.popup || this.popup)?.remove();
    this.#popupElement = this.popup = null;
  }
  updateEdited(params) {
    if (!this.container) {
      return;
    }
    if (params.rect) {
      this.#updates ||= {
        rect: this.data.rect.slice(0)
      };
    }
    const {
      rect,
      popup: newPopup
    } = params;
    if (rect) {
      this.#setRectEdited(rect);
    }
    let popup = this.#popupElement?.popup || this.popup;
    if (!popup && newPopup?.text) {
      this._createPopup(newPopup);
      popup = this.#popupElement.popup;
    }
    if (!popup) {
      return;
    }
    popup.updateEdited(params);
    if (newPopup?.deleted) {
      popup.remove();
      this.#popupElement = null;
      this.popup = null;
    }
  }
  resetEdited() {
    if (!this.#updates) {
      return;
    }
    this.#setRectEdited(this.#updates.rect);
    this.#popupElement?.popup.resetEdited();
    this.#updates = null;
  }
  #setRectEdited(rect) {
    const {
      container: {
        style
      },
      data: {
        rect: currentRect,
        rotation
      },
      parent: {
        viewport: {
          rawDims: {
            pageWidth,
            pageHeight,
            pageX,
            pageY
          }
        }
      }
    } = this;
    currentRect?.splice(0, 4, ...rect);
    style.left = `${100 * (rect[0] - pageX) / pageWidth}%`;
    style.top = `${100 * (pageHeight - rect[3] + pageY) / pageHeight}%`;
    if (rotation === 0) {
      style.width = `${100 * (rect[2] - rect[0]) / pageWidth}%`;
      style.height = `${100 * (rect[3] - rect[1]) / pageHeight}%`;
    } else {
      this.setRotation(rotation);
    }
  }
  _createContainer(ignoreBorder) {
    const {
      data,
      parent: {
        page,
        viewport
      }
    } = this;
    const container = document.createElement("section");
    container.setAttribute("data-annotation-id", data.id);
    if (!(this instanceof WidgetAnnotationElement) && !(this instanceof LinkAnnotationElement)) {
      container.tabIndex = 0;
    }
    const {
      style
    } = container;
    style.zIndex = this.parent.zIndex;
    this.parent.zIndex += 2;
    if (data.alternativeText) {
      container.title = data.alternativeText;
    }
    if (data.noRotate) {
      container.classList.add("norotate");
    }
    if (!data.rect || this instanceof PopupAnnotationElement) {
      const {
        rotation
      } = data;
      if (!data.hasOwnCanvas && rotation !== 0) {
        this.setRotation(rotation, container);
      }
      return container;
    }
    const {
      width,
      height
    } = this;
    if (!ignoreBorder && data.borderStyle.width > 0) {
      style.borderWidth = `${data.borderStyle.width}px`;
      const horizontalRadius = data.borderStyle.horizontalCornerRadius;
      const verticalRadius = data.borderStyle.verticalCornerRadius;
      if (horizontalRadius > 0 || verticalRadius > 0) {
        const radius = `calc(${horizontalRadius}px * var(--total-scale-factor)) / calc(${verticalRadius}px * var(--total-scale-factor))`;
        style.borderRadius = radius;
      }
      switch (data.borderStyle.style) {
        case AnnotationBorderStyleType.SOLID:
          style.borderStyle = "solid";
          break;
        case AnnotationBorderStyleType.DASHED:
          style.borderStyle = "dashed";
          break;
        case AnnotationBorderStyleType.BEVELED:
          warn("Unimplemented border style: beveled");
          break;
        case AnnotationBorderStyleType.INSET:
          warn("Unimplemented border style: inset");
          break;
        case AnnotationBorderStyleType.UNDERLINE:
          style.borderBottomStyle = "solid";
          break;
        default:
          break;
      }
      const borderColor = data.borderColor || null;
      if (borderColor) {
        this.#hasBorder = true;
        style.borderColor = Util.makeHexColor(...borderColor);
      } else {
        style.borderWidth = 0;
      }
    }
    const rect = Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);
    const {
      pageWidth,
      pageHeight,
      pageX,
      pageY
    } = viewport.rawDims;
    style.left = `${100 * (rect[0] - pageX) / pageWidth}%`;
    style.top = `${100 * (rect[1] - pageY) / pageHeight}%`;
    const {
      rotation
    } = data;
    if (data.hasOwnCanvas || rotation === 0) {
      style.width = `${100 * width / pageWidth}%`;
      style.height = `${100 * height / pageHeight}%`;
    } else {
      this.setRotation(rotation, container);
    }
    return container;
  }
  setRotation(angle, container = this.container) {
    if (!this.data.rect) {
      return;
    }
    const {
      pageWidth,
      pageHeight
    } = this.parent.viewport.rawDims;
    let {
      width,
      height
    } = this;
    if (angle % 180 !== 0) {
      [width, height] = [height, width];
    }
    container.style.width = `${100 * width / pageWidth}%`;
    container.style.height = `${100 * height / pageHeight}%`;
    container.setAttribute("data-main-rotation", (360 - angle) % 360);
  }
  get _commonActions() {
    const setColor = (jsName, styleName, event) => {
      const color = event.detail[jsName];
      const colorType = color[0];
      const colorArray = color.slice(1);
      event.target.style[styleName] = ColorConverters[`${colorType}_HTML`](colorArray);
      this.annotationStorage.setValue(this.data.id, {
        [styleName]: ColorConverters[`${colorType}_rgb`](colorArray)
      });
    };
    return shadow(this, "_commonActions", {
      display: event => {
        const {
          display
        } = event.detail;
        const hidden = display % 2 === 1;
        this.container.style.visibility = hidden ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, {
          noView: hidden,
          noPrint: display === 1 || display === 2
        });
      },
      print: event => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !event.detail.print
        });
      },
      hidden: event => {
        const {
          hidden
        } = event.detail;
        this.container.style.visibility = hidden ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, {
          noPrint: hidden,
          noView: hidden
        });
      },
      focus: event => {
        setTimeout(() => event.target.focus({
          preventScroll: false
        }), 0);
      },
      userName: event => {
        event.target.title = event.detail.userName;
      },
      readonly: event => {
        event.target.disabled = event.detail.readonly;
      },
      required: event => {
        this._setRequired(event.target, event.detail.required);
      },
      bgColor: event => {
        setColor("bgColor", "backgroundColor", event);
      },
      fillColor: event => {
        setColor("fillColor", "backgroundColor", event);
      },
      fgColor: event => {
        setColor("fgColor", "color", event);
      },
      textColor: event => {
        setColor("textColor", "color", event);
      },
      borderColor: event => {
        setColor("borderColor", "borderColor", event);
      },
      strokeColor: event => {
        setColor("strokeColor", "borderColor", event);
      },
      rotation: event => {
        const angle = event.detail.rotation;
        this.setRotation(angle);
        this.annotationStorage.setValue(this.data.id, {
          rotation: angle
        });
      }
    });
  }
  _dispatchEventFromSandbox(actions, jsEvent) {
    const commonActions = this._commonActions;
    for (const name of Object.keys(jsEvent.detail)) {
      const action = actions[name] || commonActions[name];
      action?.(jsEvent);
    }
  }
  _setDefaultPropertiesFromJS(element) {
    if (!this.enableScripting) {
      return;
    }
    const storedData = this.annotationStorage.getRawValue(this.data.id);
    if (!storedData) {
      return;
    }
    const commonActions = this._commonActions;
    for (const [actionName, detail] of Object.entries(storedData)) {
      const action = commonActions[actionName];
      if (action) {
        const eventProxy = {
          detail: {
            [actionName]: detail
          },
          target: element
        };
        action(eventProxy);
        delete storedData[actionName];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container) {
      return;
    }
    const {
      quadPoints
    } = this.data;
    if (!quadPoints) {
      return;
    }
    const [rectBlX, rectBlY, rectTrX, rectTrY] = this.data.rect.map(x => Math.fround(x));
    if (quadPoints.length === 8) {
      const [trX, trY, blX, blY] = quadPoints.subarray(2, 6);
      if (rectTrX === trX && rectTrY === trY && rectBlX === blX && rectBlY === blY) {
        return;
      }
    }
    const {
      style
    } = this.container;
    let svgBuffer;
    if (this.#hasBorder) {
      const {
        borderColor,
        borderWidth
      } = style;
      style.borderWidth = 0;
      svgBuffer = ["url('data:image/svg+xml;utf8,", `<svg xmlns="${SVG_NS}" preserveAspectRatio="none" viewBox="0 0 1 1">`, `<g fill="transparent" stroke="${borderColor}" stroke-width="${borderWidth}">`];
      this.container.classList.add("hasBorder");
    }
    const width = rectTrX - rectBlX;
    const height = rectTrY - rectBlY;
    const {
      svgFactory
    } = this;
    const svg = svgFactory.createElement("svg");
    svg.classList.add("quadrilateralsContainer");
    svg.setAttribute("width", 0);
    svg.setAttribute("height", 0);
    svg.role = "none";
    const defs = svgFactory.createElement("defs");
    svg.append(defs);
    const clipPath = svgFactory.createElement("clipPath");
    const id = `clippath_${this.data.id}`;
    clipPath.setAttribute("id", id);
    clipPath.setAttribute("clipPathUnits", "objectBoundingBox");
    defs.append(clipPath);
    for (let i = 2, ii = quadPoints.length; i < ii; i += 8) {
      const trX = quadPoints[i];
      const trY = quadPoints[i + 1];
      const blX = quadPoints[i + 2];
      const blY = quadPoints[i + 3];
      const rect = svgFactory.createElement("rect");
      const x = (blX - rectBlX) / width;
      const y = (rectTrY - trY) / height;
      const rectWidth = (trX - blX) / width;
      const rectHeight = (trY - blY) / height;
      rect.setAttribute("x", x);
      rect.setAttribute("y", y);
      rect.setAttribute("width", rectWidth);
      rect.setAttribute("height", rectHeight);
      clipPath.append(rect);
      svgBuffer?.push(`<rect vector-effect="non-scaling-stroke" x="${x}" y="${y}" width="${rectWidth}" height="${rectHeight}"/>`);
    }
    if (this.#hasBorder) {
      svgBuffer.push(`</g></svg>')`);
      style.backgroundImage = svgBuffer.join("");
    }
    this.container.append(svg);
    this.container.style.clipPath = `url(#${id})`;
  }
  _createPopup(popupData = null) {
    const {
      data
    } = this;
    let contentsObj, modificationDate;
    if (popupData) {
      contentsObj = {
        str: popupData.text
      };
      modificationDate = popupData.date;
    } else {
      contentsObj = data.contentsObj;
      modificationDate = data.modificationDate;
    }
    this.#popupElement = new PopupAnnotationElement({
      data: {
        color: data.color,
        titleObj: data.titleObj,
        modificationDate,
        contentsObj,
        richText: data.richText,
        parentRect: data.rect,
        borderStyle: 0,
        id: `popup_${data.id}`,
        rotation: data.rotation,
        noRotate: true
      },
      linkService: this.linkService,
      parent: this.parent,
      elements: [this]
    });
  }
  get hasPopupElement() {
    return !!(this.#popupElement || this.popup || this.data.popupRef);
  }
  get extraPopupElement() {
    return this.#popupElement;
  }
  render() {
    unreachable("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(name, skipId = null) {
    const fields = [];
    if (this._fieldObjects) {
      const fieldObj = this._fieldObjects[name];
      if (fieldObj) {
        for (const {
          page,
          id,
          exportValues
        } of fieldObj) {
          if (page === -1) {
            continue;
          }
          if (id === skipId) {
            continue;
          }
          const exportValue = typeof exportValues === "string" ? exportValues : null;
          const domElement = document.querySelector(`[data-element-id="${id}"]`);
          if (domElement && !GetElementsByNameSet.has(domElement)) {
            warn(`_getElementsByName - element not allowed: ${id}`);
            continue;
          }
          fields.push({
            id,
            exportValue,
            domElement
          });
        }
      }
      return fields;
    }
    for (const domElement of document.getElementsByName(name)) {
      const {
        exportValue
      } = domElement;
      const id = domElement.getAttribute("data-element-id");
      if (id === skipId) {
        continue;
      }
      if (!GetElementsByNameSet.has(domElement)) {
        continue;
      }
      fields.push({
        id,
        exportValue,
        domElement
      });
    }
    return fields;
  }
  show() {
    if (this.container) {
      this.container.hidden = false;
    }
    this.popup?.maybeShow();
  }
  hide() {
    if (this.container) {
      this.container.hidden = true;
    }
    this.popup?.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const triggers = this.getElementsToTriggerPopup();
    if (Array.isArray(triggers)) {
      for (const element of triggers) {
        element.classList.add("highlightArea");
      }
    } else {
      triggers.classList.add("highlightArea");
    }
  }
  _editOnDoubleClick() {
    if (!this._isEditable) {
      return;
    }
    const {
      annotationEditorType: mode,
      data: {
        id: editId
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      this.linkService.eventBus?.dispatch("switchannotationeditormode", {
        source: this,
        mode,
        editId,
        mustEnterInEditMode: true
      });
    });
  }
  updateOC(optionalContentConfig) {
    if (!this.data.oc || !optionalContentConfig) {
      return;
    }
    const isVisible = optionalContentConfig.isVisible(this.data.oc);
    if (isVisible) {
      this.show();
    } else {
      this.hide();
    }
  }
  get width() {
    return this.data.rect[2] - this.data.rect[0];
  }
  get height() {
    return this.data.rect[3] - this.data.rect[1];
  }
}
class EditorAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
    this.editor = parameters.editor;
  }
  render() {
    this.container.className = "editorAnnotation";
    return this.container;
  }
  createOrUpdatePopup() {
    const {
      editor
    } = this;
    if (!editor.hasComment) {
      return;
    }
    this._createPopup(edi