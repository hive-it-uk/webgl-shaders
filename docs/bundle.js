/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isCanvasVisible;
/* harmony export (immutable) */ __webpack_exports__["c"] = isPowerOf2;
/* harmony export (immutable) */ __webpack_exports__["d"] = isSafari;
/* unused harmony export nextHighestPowerOfTwo */
/* unused harmony export FormatNumberLength */
/* unused harmony export getMousePos */
/* harmony export (immutable) */ __webpack_exports__["b"] = isDiff;
/* unused harmony export subscribeMixin */
function isCanvasVisible(canvas) {
    return	((canvas.getBoundingClientRect().top + canvas.height) > 0) &&
        (canvas.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight));
}

function isPowerOf2(value) {
    return (value & (value - 1)) === 0;
}

function isSafari () {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

function nextHighestPowerOfTwo(x) {
    --x;
    for (let i = 1; i < 32; i <<= 1) {
        x = x | x >> i;
    }
    return x + 1;
}

function FormatNumberLength(num, length) {
    let r = num.toString();
    while (r.length < length) {
        r = '0' + r;
    }
    return r;
}

function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function isDiff(a, b) {
    if (a && b) {
        return a.toString() !== b.toString();
    }
    return false;
}

function subscribeMixin (target) {
    var listeners = new Set();

    return Object.assign(target, {

        subscribe(listener) {
            listeners.add(listener);
        },

        on(type, f) {
            let listener = {};
            listener[type] = f;
            listeners.add(listener);
        },

        unsubscribe(listener) {
            listeners.delete(listener);
        },

        unsubscribeAll() {
            listeners.clear();
        },

        trigger(event, ...data) {
            for (var listener of listeners) {
                if (typeof listener[event] === 'function') {
                    listener[event](...data);
                }
            }
        }
    });
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subscribeMixin;
function subscribeMixin (target) {
    var listeners = new Set();

    return Object.assign(target, {

        on(type, f) {
            let listener = {};
            listener[type] = f;
            listeners.add(listener);
        },

        off(type, f) {
            if (f) {
                let listener = {};
                listener[type] = f;
                listeners.delete(listener);
            }
            else {
                for (let item of listeners) {
                    for (let key of Object.keys(item)) {
                        if (key === type) {
                            listeners.delete(item);
                            return;
                        }
                    }
                }
            }
        },

        listSubscriptions() {
            for (let item of listeners) {
                console.log(item);
            }
        },

        subscribe(listener) {
            listeners.add(listener);
        },

        unsubscribe(listener) {
            listeners.delete(listener);
        },

        unsubscribeAll() {
            listeners.clear();
        },

        trigger(event, ...data) {
            for (var listener of listeners) {
                if (typeof listener[event] === 'function') {
                    listener[event](...data);
                }
            }
        }
    });
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _GlslCanvas = __webpack_require__(4);

var _GlslCanvas2 = _interopRequireDefault(_GlslCanvas);

var _fragment = __webpack_require__(14);

var _fragment2 = _interopRequireDefault(_fragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import vertex from "./vertex.glsl";

(function () {

  document.documentElement.style.backgroundColor = "black";

  var canvas = document.createElement("canvas");
  document.documentElement.appendChild(canvas);
  canvas.width = 800;
  canvas.height = 800;

  canvas.style.display = "block";
  canvas.style.position = "absolute";
  canvas.style.margin = "auto auto auto auto";
  canvas.style.top = "50%";
  canvas.style.left = "50%";
  canvas.style.transform = "translate(-50%,-50%)";

  var sandbox = new _GlslCanvas2.default(canvas);

  sandbox.setUniform('u_resolution', canvas.width, canvas.height);

  sandbox.load(_fragment2.default);
})();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xhr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xhr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_xhr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_gl__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_Texture__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tools_mixin__ = __webpack_require__(2);
/*
The MIT License (MIT)

Copyright (c) 2015 Patricio Gonzalez Vivo ( http://www.patriciogonzalezvivo.com )

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/









class GlslCanvas {
    constructor(canvas, options) {
        Object(__WEBPACK_IMPORTED_MODULE_4__tools_mixin__["a" /* subscribeMixin */])(this);

        options = options || {};

        this.width = canvas.clientWidth;
        this.height = canvas.clientHeight;

        this.canvas = canvas;
        this.gl = undefined;
        this.program = undefined;
        this.textures = {};
        this.uniforms = {};
        this.vbo = {};
        this.isValid = false;

        this.vertexString = options.vertexString || `
#ifdef GL_ES
precision mediump float;
#endif

attribute vec2 a_position;
attribute vec2 a_texcoord;

varying vec2 v_texcoord;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texcoord = a_texcoord;
}
`;
        this.fragmentString = options.fragmentString || `
#ifdef GL_ES
precision mediump float;
#endif

varying vec2 v_texcoord;

void main(){
    gl_FragColor = vec4(0.0);
}
`;

        // GL Context
        let gl = Object(__WEBPACK_IMPORTED_MODULE_1__gl_gl__["d" /* setupWebGL */])(canvas, options);
        if (!gl) {
            return;
        }
        this.gl = gl;
        this.timeLoad = this.timePrev = performance.now();
        this.timeDelta = 0.;
        this.forceRender = true;
        this.paused = false;

        // Allow alpha
        canvas.style.backgroundColor = options.backgroundColor || 'rgba(1,1,1,0)';

        // Load shader
        if (canvas.hasAttribute('data-fragment')) {
            this.fragmentString = canvas.getAttribute('data-fragment');
        }
        else if (canvas.hasAttribute('data-fragment-url')) {
            let source = canvas.getAttribute('data-fragment-url');
            __WEBPACK_IMPORTED_MODULE_0_xhr___default.a.get(source, (error, response, body) => {
                this.load(body, this.vertexString);
            });
        }

        // Load shader
        if (canvas.hasAttribute('data-vertex')) {
            this.vertexString = canvas.getAttribute('data-vertex');
        }
        else if (canvas.hasAttribute('data-vertex-url')) {
            let source = canvas.getAttribute('data-vertex-url');
            __WEBPACK_IMPORTED_MODULE_0_xhr___default.a.get(source, (error, response, body) => {
                this.load(this.fragmentString, body);
            });
        }

        this.load();

        if (!this.program) {
            return;
        }

        // Define Vertex buffer
        let texCoordsLoc = gl.getAttribLocation(this.program, 'a_texcoord');
        this.vbo.texCoords = gl.createBuffer();
        this.gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo.texCoords);
        this.gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(texCoordsLoc);
        this.gl.vertexAttribPointer(texCoordsLoc, 2, gl.FLOAT, false, 0, 0);

        let verticesLoc = gl.getAttribLocation(this.program, 'a_position');
        this.vbo.vertices = gl.createBuffer();
        this.gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo.vertices);
        this.gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0]), gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(verticesLoc);
        this.gl.vertexAttribPointer(verticesLoc, 2, gl.FLOAT, false, 0, 0);

        // load TEXTURES
        if (canvas.hasAttribute('data-textures')) {
            let imgList = canvas.getAttribute('data-textures').split(',');
            for (let nImg in imgList) {
                this.setUniform('u_tex' + nImg, imgList[nImg]);
            }
        }

        // ========================== EVENTS
        let mouse = {
            x: 0,
            y: 0
        };
        document.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX || e.pageX;
            mouse.y = e.clientY || e.pageY;
        }, false);

        let sandbox = this;
        function RenderLoop() {
            if (sandbox.nMouse > 1) {
                sandbox.setMouse(mouse);
            }
            sandbox.render();
            sandbox.forceRender = sandbox.resize();
            window.requestAnimationFrame(RenderLoop);
        }

        // Start
        this.setMouse({ x: 0, y: 0 });
        RenderLoop();
        return this;
    }

    destroy() {
        this.animated = false;
        this.isValid = false;
        for (let tex in this.textures) {
            this.gl.deleteTexture(tex);
        }
        this.textures = {};
        for (let att in this.attribs) {
            this.gl.deleteBuffer(this.attribs[att]);
        }
        this.gl.useProgram(null);
        this.gl.deleteProgram(this.program);
        this.program = null;
        this.gl = null;
    }

    load (fragString, vertString) {
        // Load vertex shader if there is one
        if (vertString) {
            this.vertexString = vertString;
        }

        // Load fragment shader if there is one
        if (fragString) {
            this.fragmentString = fragString;
        }

        this.animated = false;
        this.nDelta = (this.fragmentString.match(/u_delta/g) || []).length;
        this.nTime = (this.fragmentString.match(/u_time/g) || []).length;
        this.nDate = (this.fragmentString.match(/u_date/g) || []).length;
        this.nMouse = (this.fragmentString.match(/u_mouse/g) || []).length;
        this.animated = this.nDate > 1 || this.nTime > 1 || this.nMouse > 1;

        let nTextures = this.fragmentString.search(/sampler2D/g);
        if (nTextures) {
            let lines = this.fragmentString.split('\n');
            for (let i = 0; i < lines.length; i++) {
                let match = lines[i].match(/uniform\s*sampler2D\s*([\w]*);\s*\/\/\s*([\w|\:\/\/|\.|\-|\_]*)/i);
                if (match) {
                    let ext = match[2].split('.').pop().toLowerCase();
                    if (match[1] &&  match[2] && 
                        (ext === 'jpg' || ext === 'jpeg' || ext === 'png' || 
                         ext === 'ogv' || ext === 'webm' || ext === 'mp4')) {
                        this.setUniform(match[1], match[2]);
                    }
                }
                let main = lines[i].match(/\s*void\s*main\s*/g);
                if (main) {
                    break;
                }
            }
        }

        let vertexShader = Object(__WEBPACK_IMPORTED_MODULE_1__gl_gl__["b" /* createShader */])(this, this.vertexString, this.gl.VERTEX_SHADER);
        let fragmentShader = Object(__WEBPACK_IMPORTED_MODULE_1__gl_gl__["b" /* createShader */])(this, this.fragmentString, this.gl.FRAGMENT_SHADER);

        // If Fragment shader fails load a empty one to sign the error
        if (!fragmentShader) {
            fragmentShader = Object(__WEBPACK_IMPORTED_MODULE_1__gl_gl__["b" /* createShader */])(this, 'void main(){\n\tgl_FragColor = vec4(1.0);\n}', this.gl.FRAGMENT_SHADER);
            this.isValid = false;
        }
        else {
            this.isValid = true;
        }

        // Create and use program
        let program = Object(__WEBPACK_IMPORTED_MODULE_1__gl_gl__["a" /* createProgram */])(this, [vertexShader, fragmentShader]);//, [0,1],['a_texcoord','a_position']);
        this.gl.useProgram(program);

        // Delete shaders
        // this.gl.detachShader(program, vertexShader);
        // this.gl.detachShader(program, fragmentShader);
        this.gl.deleteShader(vertexShader);
        this.gl.deleteShader(fragmentShader);

        this.program = program;
        this.change = true;

        // Trigger event
        this.trigger('load', {});

        this.forceRender = true;
    }

    test (callback, fragString, vertString) {
        // Thanks to @thespite for the help here
        // https://www.khronos.org/registry/webgl/extensions/EXT_disjoint_timer_query/
        let pre_test_vert = this.vertexString;
        let pre_test_frag = this.fragmentString;
        let pre_test_paused = this.paused;

        let ext = this.gl.getExtension('EXT_disjoint_timer_query');
        let query = ext.createQueryEXT();
        let wasValid = this.isValid;

        if (fragString || vertString) {
            this.load(fragString, vertString);
            wasValid = this.isValid;
            this.forceRender = true;
            this.render();
        }

        this.paused = true;
        ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);
        this.forceRender = true;
        this.render();
        ext.endQueryEXT(ext.TIME_ELAPSED_EXT);

        let sandbox = this;
        function finishTest() {
            // Revert changes... go back to normal
            sandbox.paused = pre_test_paused;
            if (fragString || vertString) {
                sandbox.load(pre_test_frag, pre_test_vert);
            }
        }
        function waitForTest() {
            sandbox.forceRender = true;
            sandbox.render();
            let available = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_AVAILABLE_EXT);
            let disjoint = sandbox.gl.getParameter(ext.GPU_DISJOINT_EXT);
            if (available && !disjoint) {
                let ret = {
                    wasValid: wasValid,
                    frag: fragString || sandbox.fragmentString,
                    vert: vertString || sandbox.vertexString,
                    timeElapsedMs: ext.getQueryObjectEXT(query, ext.QUERY_RESULT_EXT)/1000000.0
                };
                finishTest();
                callback(ret);
            } else {
                window.requestAnimationFrame(waitForTest);
            }
        }
        waitForTest();
    }

    loadTexture (name, urlElementOrData, options) {
        if (!options) {
            options = {};
        }

        if (typeof urlElementOrData === 'string') {
            options.url = urlElementOrData;
        }
        else if (typeof urlElementOrData === 'object' && urlElementOrData.data && urlElementOrData.width && urlElementOrData.height) {
            options.data = urlElementOrData.data;
            options.width = urlElementOrData.width;
            options.height = urlElementOrData.height;
        }
        else if (typeof urlElementOrData === 'object') {
            options.element = urlElementOrData;
        }

        if (this.textures[name]) {
            if (this.textures[name]) {
                this.textures[name].load(options);
                this.textures[name].on('loaded', (args) => {
                    this.forceRender = true;
                });
            }
        }
        else {
            this.textures[name] = new __WEBPACK_IMPORTED_MODULE_2__gl_Texture__["a" /* default */](this.gl, name, options);
            this.textures[name].on('loaded', (args) => {
                this.forceRender = true;
            });
        }
        
    }

    refreshUniforms() {
        this.uniforms = {};
    }

    setUniform(name, ...value) {
        let u = {};
        u[name] = value;
        this.setUniforms(u);
    }

    setUniforms(uniforms) {
        let parsed = Object(__WEBPACK_IMPORTED_MODULE_1__gl_gl__["c" /* parseUniforms */])(uniforms);
        // Set each uniform
        for (let u in parsed) {
            if (parsed[u].type === 'sampler2D') {
                // For textures, we need to track texture units, so we have a special setter
                // this.uniformTexture(parsed[u].name, parsed[u].value[0]);
                this.loadTexture(parsed[u].name, parsed[u].value[0]);
            }
            else {
                this.uniform(parsed[u].method, parsed[u].type, parsed[u].name, parsed[u].value);
                this.forceRender = true;
            }
        }
    }

    setMouse(mouse) {
        // set the mouse uniform
        let rect = this.canvas.getBoundingClientRect();
        if (mouse &&
            mouse.x && mouse.x >= rect.left && mouse.x <= rect.right &&
            mouse.y && mouse.y >= rect.top && mouse.y <= rect.bottom) {
            this.uniform('2f', 'vec2', 'u_mouse', mouse.x - rect.left, this.canvas.height - (mouse.y - rect.top));
        }
    }

	// ex: program.uniform('3f', 'position', x, y, z);
    uniform (method, type, name, ...value) { // 'value' is a method-appropriate arguments list
        this.uniforms[name] = this.uniforms[name] || {};
        let uniform = this.uniforms[name];
        let change = Object(__WEBPACK_IMPORTED_MODULE_3__tools_common__["b" /* isDiff */])(uniform.value, value);
        if (change || this.change || uniform.location === undefined || uniform.value === undefined) {
            uniform.name = name;
            uniform.value = value;
            uniform.type = type;
            uniform.method = 'uniform' + method;
            uniform.location = this.gl.getUniformLocation(this.program, name);

            this.gl[uniform.method].apply(this.gl, [uniform.location].concat(uniform.value));
        }
    }

    uniformTexture(name, texture, options) {
        if (this.textures[name] === undefined) {
            this.loadTexture(name, texture, options);
        }
        else {
            this.uniform('1i', 'sampler2D', name, this.texureIndex);
            this.textures[name].bind(this.texureIndex);
            this.uniform('2f', 'vec2', name + 'Resolution', this.textures[name].width, this.textures[name].height);
            this.texureIndex++;
        }
    }

    resize() {
        if (this.width !== this.canvas.clientWidth ||
            this.height !== this.canvas.clientHeight) {
            let realToCSSPixels = window.devicePixelRatio || 1;

            // Lookup the size the browser is displaying the canvas in CSS pixels
            // and compute a size needed to make our drawingbuffer match it in
            // device pixels.
            let displayWidth = Math.floor(this.gl.canvas.clientWidth * realToCSSPixels);
            let displayHeight = Math.floor(this.gl.canvas.clientHeight * realToCSSPixels);

            // Check if the canvas is not the same size.
            if (this.gl.canvas.width !== displayWidth ||
                this.gl.canvas.height !== displayHeight) {
                // Make the canvas the same size
                this.gl.canvas.width = displayWidth;
                this.gl.canvas.height = displayHeight;
                // Set the viewport to match
                this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
                // this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
            }
            this.width = this.canvas.clientWidth;
            this.height = this.canvas.clientHeight;
            return true;
        }
        else {
            return false;
        }
    }

    render () {
        this.visible = Object(__WEBPACK_IMPORTED_MODULE_3__tools_common__["a" /* isCanvasVisible */])(this.canvas);
        if (this.forceRender ||
            (this.animated && this.visible && ! this.paused)) {

            let date = new Date();
            let now = performance.now();
            this.timeDelta =  (now - this.timePrev) / 1000.0;
            this.timePrev = now;
            if (this.nDelta > 1) {
                // set the delta time uniform
                this.uniform('1f', 'float', 'u_delta', this.timeDelta);
            }

            if (this.nTime > 1 ) {
                // set the elapsed time uniform
                this.uniform('1f', 'float', 'u_time', (now - this.timeLoad) / 1000.0);
            }

            if (this.nDate) {
                // Set date uniform: year/month/day/time_in_sec
                this.uniform('4f', 'float', 'u_date', date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds() + date.getMilliseconds() * 0.001 );
            }

            // set the resolution uniform
            this.uniform('2f', 'vec2', 'u_resolution', this.canvas.width, this.canvas.height);

            this.texureIndex = 0;
            for (let tex in this.textures) {
                this.uniformTexture(tex);
            }

            // Draw the rectangle.
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

            // Trigger event
            this.trigger('render', {});

            this.change = false;
            this.forceRender = false;
        }
    }

    pause () {
        this.paused = true;
    }

    play () {
        this.paused = false;
    }

    version() {
        return '0.0.25';
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = GlslCanvas;


window.GlslCanvas = GlslCanvas;

function loadAllGlslCanvas() {
    var list = document.getElementsByClassName('glslCanvas');
    if (list.length > 0) {
        window.glslCanvases = [];
        for (var i = 0; i < list.length; i++) {
            var sandbox = new GlslCanvas(list[i]);
            if (sandbox.isValid) {
                window.glslCanvases.push(sandbox);
            }
        }
    }
}

window.addEventListener('load', function () {
    loadAllGlslCanvas();
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(6)
var isFunction = __webpack_require__(0)
var parseHeaders = __webpack_require__(8)
var xtend = __webpack_require__(11)

module.exports = createXHR
createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest

forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
        options = initParams(uri, options, callback)
        options.method = method.toUpperCase()
        return _createXHR(options)
    }
})

function forEachArray(array, iterator) {
    for (var i = 0; i < array.length; i++) {
        iterator(array[i])
    }
}

function isEmpty(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)) return false
    }
    return true
}

function initParams(uri, options, callback) {
    var params = uri

    if (isFunction(options)) {
        callback = options
        if (typeof uri === "string") {
            params = {uri:uri}
        }
    } else {
        params = xtend(options, {uri: uri})
    }

    params.callback = callback
    return params
}

function createXHR(uri, options, callback) {
    options = initParams(uri, options, callback)
    return _createXHR(options)
}

function _createXHR(options) {
    if(typeof options.callback === "undefined"){
        throw new Error("callback argument missing")
    }

    var called = false
    var callback = function cbOnce(err, response, body){
        if(!called){
            called = true
            options.callback(err, response, body)
        }
    }

    function readystatechange() {
        if (xhr.readyState === 4) {
            setTimeout(loadFunc, 0)
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = undefined

        if (xhr.response) {
            body = xhr.response
        } else {
            body = xhr.responseText || getXml(xhr)
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    function errorFunc(evt) {
        clearTimeout(timeoutTimer)
        if(!(evt instanceof Error)){
            evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") )
        }
        evt.statusCode = 0
        return callback(evt, failureResponse)
    }

    // will load the data & process the response in a special response object
    function loadFunc() {
        if (aborted) return
        var status
        clearTimeout(timeoutTimer)
        if(options.useXDR && xhr.status===undefined) {
            //IE8 CORS GET successful response doesn't have a status field, but body is fine
            status = 200
        } else {
            status = (xhr.status === 1223 ? 204 : xhr.status)
        }
        var response = failureResponse
        var err = null

        if (status !== 0){
            response = {
                body: getBody(),
                statusCode: status,
                method: method,
                headers: {},
                url: uri,
                rawRequest: xhr
            }
            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
                response.headers = parseHeaders(xhr.getAllResponseHeaders())
            }
        } else {
            err = new Error("Internal XMLHttpRequest Error")
        }
        return callback(err, response, response.body)
    }

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new createXHR.XDomainRequest()
        }else{
            xhr = new createXHR.XMLHttpRequest()
        }
    }

    var key
    var aborted
    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var timeoutTimer
    var failureResponse = {
        body: undefined,
        headers: {},
        statusCode: 0,
        method: method,
        url: uri,
        rawRequest: xhr
    }

    if ("json" in options && options.json !== false) {
        isJson = true
        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
        if (method !== "GET" && method !== "HEAD") {
            headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json") //Don't override existing accept header declared by user
            body = JSON.stringify(options.json === true ? body : options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = loadFunc
    xhr.onerror = errorFunc
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    xhr.onabort = function(){
        aborted = true;
    }
    xhr.ontimeout = errorFunc
    xhr.open(method, uri, !sync, options.username, options.password)
    //has to be after open
    if(!sync) {
        xhr.withCredentials = !!options.withCredentials
    }
    // Cannot set timeout with sync request
    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
    if (!sync && options.timeout > 0 ) {
        timeoutTimer = setTimeout(function(){
            if (aborted) return
            aborted = true//IE9 may still call readystatechange
            xhr.abort("timeout")
            var e = new Error("XMLHttpRequest timeout")
            e.code = "ETIMEDOUT"
            errorFunc(e)
        }, options.timeout )
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers && !isEmpty(options.headers)) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }

    if ("beforeSend" in options &&
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    // Microsoft Edge browser sends "undefined" when send is called with undefined value.
    // XMLHttpRequest spec says to pass null as body to indicate no body
    // See https://github.com/naugtur/xhr/issues/100.
    xhr.send(body || null)

    return xhr


}

function getXml(xhr) {
    if (xhr.responseType === "document") {
        return xhr.responseXML
    }
    var firefoxBugTakenEffect = xhr.responseXML && xhr.responseXML.documentElement.nodeName === "parsererror"
    if (xhr.responseType === "" && !firefoxBugTakenEffect) {
        return xhr.responseXML
    }

    return null
}

function noop() {}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(9)
  , forEach = __webpack_require__(10)
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  forEach(
      trim(headers).split('\n')
    , function (row) {
        var index = row.indexOf(':')
          , key = trim(row.slice(0, index)).toLowerCase()
          , value = trim(row.slice(index + 1))

        if (typeof(result[key]) === 'undefined') {
          result[key] = value
        } else if (isArray(result[key])) {
          result[key].push(value)
        } else {
          result[key] = [ result[key], value ]
        }
      }
  )

  return result
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {


exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(0)

module.exports = forEach

var toString = Object.prototype.toString
var hasOwnProperty = Object.prototype.hasOwnProperty

function forEach(list, iterator, context) {
    if (!isFunction(iterator)) {
        throw new TypeError('iterator must be a function')
    }

    if (arguments.length < 3) {
        context = this
    }
    
    if (toString.call(list) === '[object Array]')
        forEachArray(list, iterator, context)
    else if (typeof list === 'string')
        forEachString(list, iterator, context)
    else
        forEachObject(list, iterator, context)
}

function forEachArray(array, iterator, context) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            iterator.call(context, array[i], i, array)
        }
    }
}

function forEachString(string, iterator, context) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        iterator.call(context, string.charAt(i), i, string)
    }
}

function forEachObject(object, iterator, context) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            iterator.call(context, object[k], k, object)
        }
    }
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = setupWebGL;
/* unused harmony export create3DContext */
/* harmony export (immutable) */ __webpack_exports__["b"] = createShader;
/* harmony export (immutable) */ __webpack_exports__["a"] = createProgram;
/* harmony export (immutable) */ __webpack_exports__["c"] = parseUniforms;
let lastError = '';

/**
 * Creates the HTLM for a failure message
 * @param {string} canvasContainerId id of container of th
 *        canvas.
 * @return {string} The html.
 */
function makeFailHTML(msg) {
    return `
<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>
<td align="center">
<div style="display: table-cell; vertical-align: middle;">
<div style="">` + msg + `</div>
</div>
</td></tr></table>
`;
}

/**
 * Mesasge for getting a webgl browser
 * @type {string}
 */
let GET_A_WEBGL_BROWSER = `
	This page requires a browser that supports WebGL.<br/>
	<a href="http://get.webgl.org">Click here to upgrade your browser.</a>
`;

/**
 * Mesasge for need better hardware
 * @type {string}
 */
let OTHER_PROBLEM = `
	It does not appear your computer can support WebGL.<br/>
	<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>
`;

/**
 * Creates a webgl context. If creation fails it will
 * change the contents of the container of the <canvas>
 * tag to an error message with the correct links for WebGL.
 * @param {Element} canvas. The canvas element to create a
 *     context from.
 * @param {WebGLContextCreationAttirbutes} optAttribs Any
 *     creation attributes you want to pass in.
 * @return {WebGLRenderingContext} The created context.
 */
function setupWebGL (canvas, optAttribs) {
    function showLink(str) {
        let container = canvas.parentNode;
        if (container) {
            container.innerHTML = makeFailHTML(str);
        }
    }

    if (!window.WebGLRenderingContext) {
        showLink(GET_A_WEBGL_BROWSER);
        return null;
    }

    let context = create3DContext(canvas, optAttribs);
    if (!context) {
        showLink(OTHER_PROBLEM);
    }
    context.getExtension('OES_standard_derivatives');
    return context;
}

/**
 * Creates a webgl context.
 * @param {!Canvas} canvas The canvas tag to get context
 *     from. If one is not passed in one will be created.
 * @return {!WebGLContext} The created context.
 */
function create3DContext(canvas, optAttribs) {
    let names = ['webgl', 'experimental-webgl'];
    let context = null;
    for (var ii = 0; ii < names.length; ++ii) {
        try {
            context = canvas.getContext(names[ii], optAttribs);
        } catch(e) {
            if (context) {
                break;
            }
        }
    }
    return context;
}

/*
 *	Create a Vertex of a specific type (gl.VERTEX_SHADER/)
 */
function createShader(main, source, type) {
    let gl = main.gl;

    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    let compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (!compiled) {
        // Something went wrong during compilation; get the error
        lastError = gl.getShaderInfoLog(shader);
        console.error('*** Error compiling shader ' + shader + ':' + lastError);
        main.trigger('error', { shader: shader, source: source, type: type, error: lastError });
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

/**
 * Loads a shader.
 * @param {!WebGLContext} gl The WebGLContext to use.
 * @param {string} shaderSource The shader source.
 * @param {number} shaderType The type of shader.
 * @param {function(string): void) opt_errorCallback callback for errors.
 * @return {!WebGLShader} The created shader.
 */
function createProgram(main, shaders, optAttribs, optLocations) {
    let gl = main.gl;

    let program = gl.createProgram();
    for (let ii = 0; ii < shaders.length; ++ii) {
        gl.attachShader(program, shaders[ii]);
    }
    if (optAttribs) {
        for (let ii = 0; ii < optAttribs.length; ++ii) {
            gl.bindAttribLocation(
            program,
            optLocations ? optLocations[ii] : ii,
            optAttribs[ii]);
        }
    }
    gl.linkProgram(program);

    // Check the link status
    let linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        // something went wrong with the link
        lastError = gl.getProgramInfoLog(program);
        console.log('Error in program linking:' + lastError);
        gl.deleteProgram(program);
        return null;
    }
    return program;
}

// By Brett Camber on
// https://github.com/tangrams/tangram/blob/master/src/gl/glsl.js
function parseUniforms(uniforms, prefix = null) {
    let parsed = [];

    for (let name in uniforms) {
        let uniform = uniforms[name];
        let u;

        if (prefix) {
            name = prefix + '.' + name;
        }

        // Single float
        if (typeof uniform === 'number') {
            parsed.push({
                type: 'float',
                method: '1f',
                name,
                value: uniform
            });
        }
        // Array: vector, array of floats, array of textures, or array of structs
        else if (Array.isArray(uniform)) {
            // Numeric values
            if (typeof uniform[0] === 'number') {
                // float vectors (vec2, vec3, vec4)
                if (uniform.length === 1) {
                    parsed.push({
                        type: 'float',
                        method: '1f',
                        name,
                        value: uniform
                    });
                }
                // float vectors (vec2, vec3, vec4)
                else if (uniform.length >= 2 && uniform.length <= 4) {
                    parsed.push({
                        type: 'vec' + uniform.length,
                        method: uniform.length + 'fv',
                        name,
                        value: uniform
                    });
                }
                // float array
                else if (uniform.length > 4) {
                    parsed.push({
                        type: 'float[]',
                        method: '1fv',
                        name: name + '[0]',
                        value: uniform
                    });
                }
                // TODO: assume matrix for (typeof == Float32Array && length == 16)?
            }
            // Array of textures
            else if (typeof uniform[0] === 'string') {
                parsed.push({
                    type: 'sampler2D',
                    method: '1i',
                    name: name,
                    value: uniform
                });
            }
            // Array of arrays - but only arrays of vectors are allowed in this case
            else if (Array.isArray(uniform[0]) && typeof uniform[0][0] === 'number') {
                // float vectors (vec2, vec3, vec4)
                if (uniform[0].length >= 2 && uniform[0].length <= 4) {
                    // Set each vector in the array
                    for (u = 0; u < uniform.length; u++) {
                        parsed.push({
                            type: 'vec' + uniform[0].length,
                            method: uniform[u].length + 'fv',
                            name: name + '[' + u + ']',
                            value: uniform[u]
                        });
                    }
                }
                // else error?
            }
            // Array of structures
            else if (typeof uniform[0] === 'object') {
                for (u = 0; u < uniform.length; u++) {
                    // Set each struct in the array
                    parsed.push(...parseUniforms(uniform[u], name + '[' + u + ']'));
                }
            }
        }
        // Boolean
        else if (typeof uniform === 'boolean') {
            parsed.push({
                type: 'bool',
                method: '1i',
                name,
                value: uniform
            });
        }
        // Texture
        else if (typeof uniform === 'string') {
            parsed.push({
                type: 'sampler2D',
                method: '1i',
                name,
                value: uniform
            });
        }
        // Structure
        else if (typeof uniform === 'object') {
            // Set each field in the struct
            parsed.push(...parseUniforms(uniform, name));
        }
        // TODO: support other non-float types? (int, etc.)
    }
    return parsed;
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_mixin__ = __webpack_require__(2);
// Texture management



// GL texture wrapper object for keeping track of a global set of textures, keyed by a unique user-defined name
class Texture {
    constructor(gl, name, options = {}) {
        Object(__WEBPACK_IMPORTED_MODULE_1__tools_mixin__["a" /* subscribeMixin */])(this);

        this.gl = gl;
        this.texture = gl.createTexture();
        if (this.texture) {
            this.valid = true;
        }
        this.bind();

        this.name = name;
        this.source = null;
        this.sourceType = null;
        this.loading = null; // a Promise object to track the loading state of this texture

        // Default to a 1-pixel black texture so we can safely render while we wait for an image to load
        // See: http://stackoverflow.com/questions/19722247/webgl-wait-for-texture-to-load
        this.setData(1, 1, new Uint8Array([0, 0, 0, 255]), { filtering: 'linear' });
        this.setFiltering(options.filtering);

        this.load(options);
    }

    // Destroy a single texture instance
    destroy() {
        if (!this.valid) {
            return;
        }
        this.gl.deleteTexture(this.texture);
        this.texture = null;
        delete this.data;
        this.data = null;
        this.valid = false;
    }

    bind(unit) {
        if (!this.valid) {
            return;
        }
        if (typeof unit === 'number') {
            if (Texture.activeUnit !== unit) {
                this.gl.activeTexture(this.gl.TEXTURE0 + unit);
                Texture.activeUnit = unit;
            }
        }
        if (Texture.activeTexture !== this.texture) {
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
            Texture.activeTexture = this.texture;
        }
    }

    load(options = {}) {
        this.loading = null;

        if (typeof options.url === 'string') {
            if (this.url === undefined || options.url !== this.url) {
                this.setUrl(options.url, options);
            }
        }
        else if (options.element) {
            this.setElement(options.element, options);
        }
        else if (options.data && options.width && options.height) {
            this.setData(options.width, options.height, options.data, options);
        }
    }

    // Sets texture from an url
    setUrl(url, options = {}) {
        if (!this.valid) {
            return;
        }

        this.url = url; // save URL reference (will be overwritten when element is loaded below)
        this.source = this.url;
        this.sourceType = 'url';

        this.loading = new Promise((resolve, reject) => {
            let ext = url.split('.').pop().toLowerCase();
            let isVideo = (ext === 'ogv' || ext === 'webm' || ext === 'mp4');

            let element = undefined
            if (isVideo) {
                element = document.createElement('video');
                element.autoplay = true;
                options.filtering = 'nearest';
                // element.preload = 'auto';
                // element.style.display = 'none';
                // document.body.appendChild(element);
            } else {
                element = new Image();
            }

            element.onload = () => {
                try {
                    this.setElement(element, options);
                }
                catch (e) {
                    console.log(`Texture '${this.name}': failed to load url: '${this.source}'`, e, options);
                }
                resolve(this);
            };
            element.onerror = e => {
                // Warn and resolve on error
                console.log(`Texture '${this.name}': failed to load url: '${this.source}'`, e, options);
                resolve(this);
            };

            // Safari has a bug loading data-URL elements with CORS enabled, so it must be disabled in that case
            // https://bugs.webkit.org/show_bug.cgi?id=123978
            if (!(Object(__WEBPACK_IMPORTED_MODULE_0__tools_common__["d" /* isSafari */])() && this.source.slice(0, 5) === 'data:')) {
                element.crossOrigin = 'anonymous';
            }

            element.src = this.source;
            if (isVideo) {
                this.setElement(element, options);
            }
        });
        return this.loading;
    }

    // Sets texture to a raw image buffer
    setData(width, height, data, options = {}) {
        this.width = width;
        this.height = height;

        this.source = data;
        this.sourceType = 'data';

        this.update(options);
        this.setFiltering(options);

        this.loading = Promise.resolve(this);
        return this.loading;
    }

    // Sets the texture to track a element (canvas/image)
    setElement(element, options) {
        let el = element;

        // a string element is interpeted as a CSS selector
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }

        if (element instanceof HTMLCanvasElement ||
            element instanceof HTMLImageElement ||
            element instanceof HTMLVideoElement) {
            this.source = element;
            this.sourceType = 'element';

            if (element instanceof HTMLVideoElement) {
                element.addEventListener('canplaythrough', () => {
                    this.intervalID = setInterval(()=>{
                        this.update(options);
                    }, 15);
                }, true);
                element.addEventListener('ended', () => {
                    element.currentTime = 0;
                    element.play();
                }, true);
            } else {
                this.update(options);
            }            
            this.setFiltering(options);
        }
        else {
            let msg = `the 'element' parameter (\`element: ${JSON.stringify(el)}\`) must be a CSS `;
            msg += `selector string, or a <canvas>, <image> or <video> object`;
            console.log(`Texture '${this.name}': ${msg}`, options);
        }

        this.loading = Promise.resolve(this);
        return this.loading;
    }

    // Uploads current image or buffer to the GPU (can be used to update animated textures on the fly)
    update(options = {}) {
        if (!this.valid) {
            return;
        }

        this.bind();
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, (options.UNPACK_FLIP_Y_WEBGL === false ? false : true));
        this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.UNPACK_PREMULTIPLY_ALPHA_WEBGL || false);

        // Image or Canvas element
        if (this.sourceType === 'element' &&
            ((this.source instanceof HTMLCanvasElement) || 
             (this.source instanceof HTMLVideoElement) ||
             (this.source instanceof HTMLImageElement && this.source.complete))) {
            if (this.source instanceof HTMLVideoElement) {
                this.width = this.source.videoWidth;
                this.height = this.source.videoHeight;
            } else {
                this.width = this.source.width;
                this.height = this.source.height;
            }
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.source);
        }
        // Raw image buffer
        else if (this.sourceType === 'data') {
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.width, this.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.source);
        }
        this.trigger('loaded', this);
    }

    // Determines appropriate filtering mode
    setFiltering (options = {}) {
        if (!this.valid) {
            return;
        }

        this.powerOf2 = Object(__WEBPACK_IMPORTED_MODULE_0__tools_common__["c" /* isPowerOf2 */])(this.width) && Object(__WEBPACK_IMPORTED_MODULE_0__tools_common__["c" /* isPowerOf2 */])(this.height);
        let defualtFilter = (this.powerOf2 ? 'mipmap' : 'linear');
        this.filtering = options.filtering || defualtFilter;

        var gl = this.gl;
        this.bind();

        // For power-of-2 textures, the following presets are available:
        // mipmap: linear blend from nearest mip
        // linear: linear blend from original image (no mips)
        // nearest: nearest pixel from original image (no mips, 'blocky' look)
        if (this.powerOf2) {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, options.TEXTURE_WRAP_S || (options.repeat && gl.REPEAT) || gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, options.TEXTURE_WRAP_T || (options.repeat && gl.REPEAT) || gl.CLAMP_TO_EDGE);

            if (this.filtering === 'mipmap') {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); // TODO: use trilinear filtering by defualt instead?
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.generateMipmap(gl.TEXTURE_2D);
            }
            else if (this.filtering === 'linear') {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            }
            else if (this.filtering === 'nearest') {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            }
        }
        else {
            // WebGL has strict requirements on non-power-of-2 textures:
            // No mipmaps and must clamp to edge
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

            if (this.filtering === 'mipmap') {
                this.filtering = 'linear';
            }

            if (this.filtering === 'nearest') {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            }
            else { // default to linear for non-power-of-2 textures
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Texture;


// Report max texture size for a GL context
Texture.getMaxTextureSize = function (gl) {
    return gl.getParameter(gl.MAX_TEXTURE_SIZE);
};

// Global set of textures, by name
Texture.activeUnit = -1;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n\nconst float PI = 3.1415926535897932384626433832795;\nconst float PI2 = 6.28318530718;\n\nfloat almostIdentity( float x, float m, float n )\n{\n    if( x>m ) return x;\n\n    float a = 2.0*n - m;\n    float b = 2.0*m - 3.0*n;\n    float t = x/m;\n\n    return (a*t + b)*t*t + n;\n}\n\n\nfloat impulse( float k, float x )\n{\n    float h = k*x;\n    return h*exp(1.0-h);\n}\n\nfloat cubicPulse( float c, float w, float x )\n{\n    x = abs(x - c);\n    if( x>w ) return 0.0;\n    x /= w;\n    return 1.0 - x*x*(3.0-2.0*x);\n}\n\nfloat expStep( float x, float k, float n )\n{\n    return exp( -k*pow(x,n) );\n}\n\n\nfloat gain(float x, float k)\n{\n    float a = 0.5*pow(2.0*((x<0.5)?x:1.0-x), k);\n    return (x<0.5)?a:1.0-a;\n}\n\n\nfloat parabola( float x, float k )\n{\n    return pow( 4.0*x*(1.0-x), k );\n}\n\nfloat pcurve( float x, float a, float b )\n{\n    float k = pow(a+b,a+b) / (pow(a,a)*pow(b,b));\n    return k * pow( x, a ) * pow( 1.0-x, b );\n}\n\nvec3 rgb2hsb( in vec3 c ){\n    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    vec4 p = mix(vec4(c.bg, K.wz),\n                 vec4(c.gb, K.xy),\n                 step(c.b, c.g));\n    vec4 q = mix(vec4(p.xyw, c.r),\n                 vec4(c.r, p.yzx),\n                 step(p.x, c.r));\n    float d = q.x - min(q.w, q.y);\n    float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),\n                d / (q.x + e),\n                q.x);\n}\n\n//  Function from Iñigo Quiles\n//  https://www.shadertoy.com/view/MsS3Wc\nvec3 hsb2rgb( in vec3 c ){\n    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),\n                             6.0)-3.0)-1.0,\n                     0.0,\n                     1.0 );\n    rgb = rgb*rgb*(3.0-2.0*rgb);\n    return c.z * mix(vec3(1.0), rgb, c.y);\n}\n\nfloat rectangle(vec2 st,vec2 bl, vec2 tr) {\n    vec2 blv = step(bl, st);\n    vec2 trv = step(vec2(1.0)-tr, 1.0-st);\n    return blv.x*blv.y * trv.x*trv.y;\n}\n\nfloat smoothRectangle(vec2 st,vec2 bl, vec2 tr, float w) {\n    vec2 blv = smoothstep(bl, bl+vec2(w), st);\n    vec2 trv = smoothstep(vec2(1.0)-tr, vec2(1.0)-tr+vec2(w), 1.0-st);\n    return blv.x*blv.y * trv.x*trv.y;\n}\n\nfloat smoothCircle(vec2 st, vec2 c, float r, float w) {\n    float d = length(st - c);\n    return smoothstep(r+w,r-w,d);\n}\n\nfloat polygon(vec2 st, vec2 c, float r, int N) {\n   \tfloat a = atan(st.y,st.x);\n   \tfloat s = PI*2.0/float(N);\n   \tfloat d =  cos(floor(.5+a/s) * s - a) * distance(st,c) * 2.0;\n    return 1.0-smoothstep(r-0.01,r,d);\n}\n\nmat2 rotate2d(float a) {\n    return mat2(cos(a), -sin(a), sin(a), cos(a));\n}\n\nvec2 random2(vec2 st){\n    st = vec2( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );\n    return fract(sin(st)*43758.5453123);\n}\n\nfloat random2f(vec2 st){\n    float v = dot( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );\n    return fract(sin(v)*43758.5453123);\n}\n\nvec2 random2a(vec2 st){\n    st = vec2( dot(st,vec2(127.1,311.7)),\n              dot(st,vec2(269.5,183.3)) );\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\n}\n\nvec3 random3a(vec3 st){\n    st = vec3( dot(st,vec3(127.1,311.7,123.6)),\n               dot(st,vec3(269.5,183.3,97.1)),\n                dot(st,vec3(146.87,245.12,48.7))\n                );\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\n}\n\nfloat noise(in vec2 p) {\n\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix( mix( dot( random2a(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),\n                     dot( random2a(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),\n                mix( dot( random2a(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),\n                     dot( random2a(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);\n\n\n}\n\nfloat noise(in vec3 p) {\n\n    vec3 i = floor(p);\n    vec3 f = fract(p);\n\n    vec3 u = f*f*(3.0-2.0*f);\n\n        return mix(\n                mix(\n                    mix(\n                        dot( random3a(i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ),\n                        dot( random3a(i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ),\n                        u.x),\n                    mix(\n                        dot( random3a(i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ),\n                        dot( random3a(i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ),\n                        u.x),\n                    u.y),\n                mix(\n                    mix(\n                        dot( random3a(i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ),\n                        dot( random3a(i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ),\n                        u.x),\n                    mix(\n                        dot( random3a(i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ),\n                        dot( random3a(i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ),\n                        u.x),\n                    u.y),\n                u.z\n               );\n}\n\nfloat usnoise(vec3 p) {\n    return (noise(p) + 1.0) /2.0;\n}\n\nfloat cellNoise(vec2 p) {\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n\n    float m_dist = 1.0;\n\n    for(int y=-1; y<=1; y++) {\n        for(int x=-1; x<=1; x++) {\n            vec2 neighbour=vec2(float(x), float(y));\n            vec2 point = random2(i + neighbour);\n\n            vec2 diff= neighbour + point - f;\n            float dist = length(diff);\n            m_dist = min(m_dist,dist);\n        }\n    }\n\n    return m_dist;\n}\n\n\nvec3 veroniNoise(vec2 st) {\n    vec2 p = floor(st);\n    vec2 f = fract(st);\n\n    float res = 2.0;\n    vec2 m_point=vec2(1.0, 1.0),\n        mr=vec2(0,0),\n        mb = vec2(0,0);\n\n    for(int j=-1; j<=1; j++) {\n        for(int i=-1; i<=1; i++) {\n            vec2 b=vec2(float(i), float(j));\n            vec2 point = p + b;\n            vec2 r = b + random2(point) - f;\n\n            float d = dot(r,r);\n            if (d < res) {\n                res = d;\n                m_point = point;\n                mr=r;\n                mb=b;\n            }\n        }\n    }\n\n    res = 8.0;\n    for(int j=-2; j<=2; ++j) {\n        for(int i=-2; i<=2; ++i) {\n\n            vec2 b = mb + vec2(float(i),float(j));\n\n            vec2 r = b + random2(p + b) - f;\n\n            float d = dot(0.5 * (mr+r), normalize(r - mr));\n\n            res = min(res, d);\n\n        }\n    }\n\n    return vec3(m_point.xy, res);\n}\n\nconst int octaves = 4;\n\nfloat fbm(vec2 p, float H, float lacunarity) {\n    float value, frequency;\n    float exponent;\n\n    value = 0.0;\n    frequency = 1.0;\n\n    for(int i=0; i<octaves; ++i) {\n\n        exponent = pow(frequency, -H);\n\n        value=value + (noise(p) * exponent);\n\n        p=p*lacunarity;\n\n        frequency=frequency * lacunarity;\n    }\n\n    return value;\n}\n\nfloat fbm(vec3 p, float H, float lacunarity) {\n    float value, frequency;\n    float exponent;\n\n    value = 0.0;\n    frequency = 1.0;\n\n    for(int i=0; i<octaves; ++i) {\n\n        exponent = pow(frequency, -H);\n\n        value=value + (noise(p) * exponent);\n\n        p=p*lacunarity;\n\n        frequency=frequency * lacunarity;\n    }\n\n    return value;\n}\n\nfloat ridgedMultifractal(vec3 p, float H, float lacunarity, float offset) {\n    float result, frequency, remainder;\n    float weight, signal, exponent;\n\n    float gain = 2.0;\n\n    result = 1.0;\n    frequency = 1.0;\n\n    signal = noise(p);\n    if (signal < 0.0) signal = -signal;\n    signal = offset-signal;\n    signal *=signal;\n    result = signal;\n    weight = 1.0;\n\n\n    for(int i=1; i<octaves; ++i) {\n        frequency=frequency*lacunarity;\n        p=p*lacunarity;\n\n        weight = signal * gain;\n        if (weight>1.0) weight=1.0;\n        if (weight < 0.0 ) weight= 0.0;\n\n        signal = noise(p);\n\n        if (signal <0.0) signal = -signal;\n        signal = offset - signal;\n        signal *=signal;\n        signal *=weight;\n        result += signal * pow(frequency,-H);\n\n    }\n\n    return result;\n}\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\n\n\n\nvoid function1(){\n\tvec2 st = gl_FragCoord.xy/u_resolution;\n\n\tvec2 off=vec2(0.5)-st;\n\tfloat angle = atan(off.y,off.x);\n\n\tfloat d2 = off.x*off.x+off.y*off.y;\n\tfloat d = length(off) * 2.0;\n\n\tfloat offset = 0.2 + (cos(u_time * 1.0) / 8.0);\n    vec3 r =  cubicPulse(offset,0.5,d) * hsb2rgb(vec3((angle/PI2)+0.5, d, 1.0));\n\n    float offset2 = 0.2 + (cos(u_time * 1.1) / 8.0);\n    vec3 g =  cubicPulse(offset2,0.5,d) * hsb2rgb(vec3((angle/PI2)+0.15, d, 1.0));\n\n    float offset3 = 0.2 + (cos(u_time * 0.9) / 8.0);\n    vec3 b =  cubicPulse(offset3,0.5,d) * hsb2rgb(vec3((angle/PI2)+0.65, d, 1.0));\n\n    vec3 color = r + g+ + b;//vec3(0,0,0);\n\n\n\tgl_FragColor = vec4(color,1.0);\n}\n\n\nvec3 function2(vec2 st) {\n\tst=vec2(0.5) - st;\n\t//float rot = u_time / 2.5;\n\tvec2 st2 = rotate2d(-u_time / 2.5) * st;\n\n   \tfloat a = atan(st2.y,st2.x);\n   \tfloat d = length(st);\n\n   \tvec3 rgb =  hsb2rgb(vec3((a*3.0/PI2)+0.15, d, 1.0));\n\n   \t//float cycles = (sin(d*100.0) + 1.0) /2.0;\n\n   \t//float rings = 1.0-smoothstep(0.99,1.0,d);\n\n    float triangle = polygon(st2, vec2(0,0), 0.5, 3);\n\n    vec3 color =\n            vec3(1) * triangle * rgb\n         ;\n        ;;+(vec3(smoothRectangle(st2, vec2(-0.9,-0.5), vec2(-0.6, -0.2), 0.0025) ) )\n        ;\n\n    return color;\n\n}\n\nvec3 function3(vec2 st) {\n\n\t//vec2 fst = fract(st * 2.0);\n\n\tvec3 color=vec3(0);\n\n    int N = 8;\n   \tfloat a = atan(st.y,st.x);\n   \tfloat s = PI*2.0/float(N);\n\n\tfloat n=noise(vec2(a*10.0,a+10.0) * 10.0) / 10.0;\n\n   \tfloat d =  cos(floor(.5+a/s) * s - a) * distance(st,vec2(0,0))  * 4.0  + n;\n    float polygon = 1.0-smoothstep(0.99, 1.0, d);\n\n\tcolor=vec3(1.0,1.0,1.0) * polygon;\n\n\n\n\n\n\n\n\treturn color;\n}\n\n\nvec3 noiseTest(vec2 st) {\n\n    float distance = length(st);\n\n    //st.x += cos(u_time/1.0) / 10.0;\n    //st.y += sin(u_time/1.0) / 10.0;\n\n    st=st*10.0;\n\n\n//    st = vec2(1.0, 1.0) - length(st) * st;\n\n\n\n    vec3 n = veroniNoise(st);\n\n    vec2 p = n.xy;\n    float dist = n.z;\n\n    float d = abs(cos(dist * 50.0)) * dist;\n\n    float a = atan(p.y,p.x);\n\n\n    vec3 color = hsb2rgb(vec3(a / 6.0 , 1.0, 1.0));\n\n    //color=color * (1.0-smoothstep(0.025, 0.075, dist));\n    //color=color * ((smoothstep(0.975, 0.95, 1.0-dist)));\n    //color=color + (vec3(.7,0.7,.3) * (1.0-smoothstep(0.985, 0.975, 1.0-dist)));\n\n\n\n    return color;\n\n}\n\nvec3 fbmTest(vec2 p) {\n\n    float v = fbm(vec3(p, u_time/2.0), 1.0, 2.0);\n\n    v=(v+1.0) / 2.0;\n    vec3 color = vec3(v,v,v);\n\n    return color;\n\n}\n\nvec3 ridgedTest(vec2 p) {\n\n    float v;\n\n    float vscale = p.y+1.0;\n    vscale=vscale*vscale;\n\n    vec3 pp = vec3(p*5.0, u_time/0.75);\n    pp.y = pp.y + u_time * 2.0;\n\n    v= ridgedMultifractal(pp, 0.25, 2.1, 0.7)\n        * vscale\n        + (p.y / 1.0);\n\n    vec3 color;\n\n    color =\n        (smoothstep(0.0, 0.3, v) * vec3(1,0,0))\n        + (smoothstep(0.3, 0.6, v) * vec3(1,0,0))\n        + (smoothstep(0.6, 1.0, v) * vec3(0,1,0))\n        ;\n\n\n    return color;\n\n}\n\nvoid main() {\n\tvec2 st = gl_FragCoord.xy/u_resolution;\n\n\tst=vec2(0.5) - st;\n\n\t//st = rotate2d(-u_time / 2.5) * st;\n\n    gl_FragColor=vec4(ridgedTest(st), 0);\n\n}"

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmIxYjYwMTE3NzZhNDM5ZTk5YjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWZ1bmN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL3NyYy90b29scy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvc3JjL3Rvb2xzL21peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9zcmMvR2xzbENhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveGhyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcnNlLWhlYWRlcnMvcGFyc2UtaGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJpbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9yLWVhY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9zcmMvZ2wvZ2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvc3JjL2dsL1RleHR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvZnJhZ21lbnQuZ2xzbCJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwic2FuZGJveCIsInNldFVuaWZvcm0iLCJsb2FkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7O0FDM0VBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O0FDdkRBOztBQUNBOzs7O0FBRUE7Ozs7OztBQUNBOztBQUVBLENBQUMsWUFBTTs7QUFFTEEsV0FBU0MsZUFBVCxDQUF5QkMsS0FBekIsQ0FBK0JDLGVBQS9CLEdBQStDLE9BQS9DOztBQUVBLE1BQUlDLFNBQVNKLFNBQVNLLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBTCxXQUFTQyxlQUFULENBQXlCSyxXQUF6QixDQUFxQ0YsTUFBckM7QUFDQUEsU0FBT0csS0FBUCxHQUFhLEdBQWI7QUFDQUgsU0FBT0ksTUFBUCxHQUFjLEdBQWQ7O0FBRUFKLFNBQU9GLEtBQVAsQ0FBYU8sT0FBYixHQUFxQixPQUFyQjtBQUNBTCxTQUFPRixLQUFQLENBQWFRLFFBQWIsR0FBc0IsVUFBdEI7QUFDQU4sU0FBT0YsS0FBUCxDQUFhUyxNQUFiLEdBQW9CLHFCQUFwQjtBQUNBUCxTQUFPRixLQUFQLENBQWFVLEdBQWIsR0FBaUIsS0FBakI7QUFDQVIsU0FBT0YsS0FBUCxDQUFhVyxJQUFiLEdBQWtCLEtBQWxCO0FBQ0FULFNBQU9GLEtBQVAsQ0FBYVksU0FBYixHQUF1QixzQkFBdkI7O0FBR0EsTUFBSUMsVUFBVSx5QkFBZVgsTUFBZixDQUFkOztBQUVBVyxVQUFRQyxVQUFSLENBQW1CLGNBQW5CLEVBQW1DWixPQUFPRyxLQUExQyxFQUFpREgsT0FBT0ksTUFBeEQ7O0FBR0FPLFVBQVFFLElBQVI7QUFFRCxDQXhCRCxJOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUU4RTtBQUM5RTs7QUFFa0M7QUFDVDs7QUFFekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FD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NENBQTRDLHFDQUFxQyw0QkFBNEIsNkRBQTZELG9EQUFvRCxvREFBb0QseURBQXlELHNFQUFzRSxZQUFZLHFGQUFxRixxQkFBcUIsS0FBSyw2QkFBNkIsbUNBQW1DLHlCQUF5QixrQkFBa0IsaUNBQWlDLGlDQUFpQyx1REFBdUQsb0ZBQW9GLG1EQUFtRCx3Q0FBd0MsK0JBQStCLEdBQUcsK0JBQStCLG9DQUFvQyx5Q0FBeUMsdUNBQXVDLG1CQUFtQixrREFBa0QscUNBQXFDLHNCQUFzQix1QkFBdUIsK0NBQStDLGdDQUFnQyx5REFBeUQsNkRBQTZELDREQUE0RCxtRkFBbUYseUJBQXlCLEtBQUssMEJBQTBCLHFEQUFxRCx3QkFBd0IsK0JBQStCLHFCQUFxQixLQUFLLDZCQUE2QixnQkFBZ0IsK0JBQStCLDJCQUEyQiwyQ0FBMkMsaUNBQWlDLDJGQUEyRixtQkFBbUIsaUxBQWlMLHVCQUF1QixLQUFLLGlCQUFpQiwyQ0FBMkMsd0JBQXdCLDBDQUEwQyw2Q0FBNkMsS0FBSyxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZiMWI2MDExNzc2YTQzOWU5OWIyIiwibW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuZnVuY3Rpb24gaXNGdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHN0cmluZyA9IHRvU3RyaW5nLmNhbGwoZm4pXG4gIHJldHVybiBzdHJpbmcgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHxcbiAgICAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHN0cmluZyAhPT0gJ1tvYmplY3QgUmVnRXhwXScpIHx8XG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgIC8vIElFOCBhbmQgYmVsb3dcbiAgICAgKGZuID09PSB3aW5kb3cuc2V0VGltZW91dCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5hbGVydCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5jb25maXJtIHx8XG4gICAgICBmbiA9PT0gd2luZG93LnByb21wdCkpXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaXMtZnVuY3Rpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGlzQ2FudmFzVmlzaWJsZShjYW52YXMpIHtcbiAgICByZXR1cm5cdCgoY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGNhbnZhcy5oZWlnaHQpID4gMCkgJiZcbiAgICAgICAgKGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUG93ZXJPZjIodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICYgKHZhbHVlIC0gMSkpID09PSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYWZhcmkgKCkge1xuICAgIHJldHVybiAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5leHRIaWdoZXN0UG93ZXJPZlR3byh4KSB7XG4gICAgLS14O1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzI7IGkgPDw9IDEpIHtcbiAgICAgICAgeCA9IHggfCB4ID4+IGk7XG4gICAgfVxuICAgIHJldHVybiB4ICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1hdE51bWJlckxlbmd0aChudW0sIGxlbmd0aCkge1xuICAgIGxldCByID0gbnVtLnRvU3RyaW5nKCk7XG4gICAgd2hpbGUgKHIubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIHIgPSAnMCcgKyByO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdXNlUG9zKGNhbnZhcywgZXZ0KSB7XG4gICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZXZ0LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgIHk6IGV2dC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaWZmKGEsIGIpIHtcbiAgICBpZiAoYSAmJiBiKSB7XG4gICAgICAgIHJldHVybiBhLnRvU3RyaW5nKCkgIT09IGIudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlTWl4aW4gKHRhcmdldCkge1xuICAgIHZhciBsaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcblxuICAgICAgICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uKHR5cGUsIGYpIHtcbiAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IHt9O1xuICAgICAgICAgICAgbGlzdGVuZXJbdHlwZV0gPSBmO1xuICAgICAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVuc3Vic2NyaWJlQWxsKCkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdHJpZ2dlcihldmVudCwgLi4uZGF0YSkge1xuICAgICAgICAgICAgZm9yICh2YXIgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcltldmVudF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJbZXZlbnRdKC4uLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9zcmMvdG9vbHMvY29tbW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmVNaXhpbiAodGFyZ2V0KSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IG5ldyBTZXQoKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuXG4gICAgICAgIG9uKHR5cGUsIGYpIHtcbiAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IHt9O1xuICAgICAgICAgICAgbGlzdGVuZXJbdHlwZV0gPSBmO1xuICAgICAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb2ZmKHR5cGUsIGYpIHtcbiAgICAgICAgICAgIGlmIChmKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3RlbmVyID0ge307XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJbdHlwZV0gPSBmO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbGlzdFN1YnNjcmlwdGlvbnMoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgICAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVuc3Vic2NyaWJlQWxsKCkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdHJpZ2dlcihldmVudCwgLi4uZGF0YSkge1xuICAgICAgICAgICAgZm9yICh2YXIgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcltldmVudF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJbZXZlbnRdKC4uLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9zcmMvdG9vbHMvbWl4aW4uanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgR2xzbENhbnZhcyBmcm9tIFwiZ2xzbENhbnZhcy9zcmMvR2xzbENhbnZhc1wiO1xuXG5pbXBvcnQgc3RyaW5nX2ZyYWdfY29kZSBmcm9tIFwiLi9zaGFkZXJzL2ZyYWdtZW50Lmdsc2xcIjtcbi8vaW1wb3J0IHZlcnRleCBmcm9tIFwiLi92ZXJ0ZXguZ2xzbFwiO1xuXG4oKCkgPT4ge1xuICBcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cImJsYWNrXCI7XG4gIFxuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gIGNhbnZhcy53aWR0aD04MDA7XG4gIGNhbnZhcy5oZWlnaHQ9ODAwO1xuICBcbiAgY2FudmFzLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICBjYW52YXMuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiO1xuICBjYW52YXMuc3R5bGUubWFyZ2luPVwiYXV0byBhdXRvIGF1dG8gYXV0b1wiO1xuICBjYW52YXMuc3R5bGUudG9wPVwiNTAlXCI7XG4gIGNhbnZhcy5zdHlsZS5sZWZ0PVwiNTAlXCI7XG4gIGNhbnZhcy5zdHlsZS50cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUwJSwtNTAlKVwiO1xuICBcbiAgXG4gIGxldCBzYW5kYm94ID0gbmV3IEdsc2xDYW52YXMoY2FudmFzKTtcbiAgXG4gIHNhbmRib3guc2V0VW5pZm9ybSgndV9yZXNvbHV0aW9uJywgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0ICk7XG4gIFxuICBcbiAgc2FuZGJveC5sb2FkKHN0cmluZ19mcmFnX2NvZGUpO1xuICBcbn0pKCk7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLypcblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5Db3B5cmlnaHQgKGMpIDIwMTUgUGF0cmljaW8gR29uemFsZXogVml2byAoIGh0dHA6Ly93d3cucGF0cmljaW9nb256YWxlenZpdm8uY29tIClcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxudGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgJ1NvZnR3YXJlJyksIHRvIGRlYWwgaW5cbnRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbnVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG50aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG5zdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5jb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1NcbkZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG5JTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbmltcG9ydCB4aHIgZnJvbSAneGhyJztcblxuaW1wb3J0IHsgc2V0dXBXZWJHTCwgY3JlYXRlU2hhZGVyLCBjcmVhdGVQcm9ncmFtLCBwYXJzZVVuaWZvcm1zLCBsb2FkVGV4dHVyZSB9IGZyb20gJy4vZ2wvZ2wnO1xuaW1wb3J0IFRleHR1cmUgZnJvbSAnLi9nbC9UZXh0dXJlJztcblxuaW1wb3J0IHsgaXNDYW52YXNWaXNpYmxlLCBpc0RpZmYgfSBmcm9tICcuL3Rvb2xzL2NvbW1vbic7XG5pbXBvcnQgeyBzdWJzY3JpYmVNaXhpbiB9IGZyb20gJy4vdG9vbHMvbWl4aW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbHNsQ2FudmFzIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIG9wdGlvbnMpIHtcbiAgICAgICAgc3Vic2NyaWJlTWl4aW4odGhpcyk7XG5cbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmdsID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnByb2dyYW0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudGV4dHVyZXMgPSB7fTtcbiAgICAgICAgdGhpcy51bmlmb3JtcyA9IHt9O1xuICAgICAgICB0aGlzLnZibyA9IHt9O1xuICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnZlcnRleFN0cmluZyA9IG9wdGlvbnMudmVydGV4U3RyaW5nIHx8IGBcbiNpZmRlZiBHTF9FU1xucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG4jZW5kaWZcblxuYXR0cmlidXRlIHZlYzIgYV9wb3NpdGlvbjtcbmF0dHJpYnV0ZSB2ZWMyIGFfdGV4Y29vcmQ7XG5cbnZhcnlpbmcgdmVjMiB2X3RleGNvb3JkO1xuXG52b2lkIG1haW4oKSB7XG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KGFfcG9zaXRpb24sIDAuMCwgMS4wKTtcbiAgICB2X3RleGNvb3JkID0gYV90ZXhjb29yZDtcbn1cbmA7XG4gICAgICAgIHRoaXMuZnJhZ21lbnRTdHJpbmcgPSBvcHRpb25zLmZyYWdtZW50U3RyaW5nIHx8IGBcbiNpZmRlZiBHTF9FU1xucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG4jZW5kaWZcblxudmFyeWluZyB2ZWMyIHZfdGV4Y29vcmQ7XG5cbnZvaWQgbWFpbigpe1xuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMC4wKTtcbn1cbmA7XG5cbiAgICAgICAgLy8gR0wgQ29udGV4dFxuICAgICAgICBsZXQgZ2wgPSBzZXR1cFdlYkdMKGNhbnZhcywgb3B0aW9ucyk7XG4gICAgICAgIGlmICghZ2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMudGltZUxvYWQgPSB0aGlzLnRpbWVQcmV2ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMudGltZURlbHRhID0gMC47XG4gICAgICAgIHRoaXMuZm9yY2VSZW5kZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEFsbG93IGFscGhhXG4gICAgICAgIGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCAncmdiYSgxLDEsMSwwKSc7XG5cbiAgICAgICAgLy8gTG9hZCBzaGFkZXJcbiAgICAgICAgaWYgKGNhbnZhcy5oYXNBdHRyaWJ1dGUoJ2RhdGEtZnJhZ21lbnQnKSkge1xuICAgICAgICAgICAgdGhpcy5mcmFnbWVudFN0cmluZyA9IGNhbnZhcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZnJhZ21lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjYW52YXMuaGFzQXR0cmlidXRlKCdkYXRhLWZyYWdtZW50LXVybCcpKSB7XG4gICAgICAgICAgICBsZXQgc291cmNlID0gY2FudmFzLmdldEF0dHJpYnV0ZSgnZGF0YS1mcmFnbWVudC11cmwnKTtcbiAgICAgICAgICAgIHhoci5nZXQoc291cmNlLCAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkKGJvZHksIHRoaXMudmVydGV4U3RyaW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9hZCBzaGFkZXJcbiAgICAgICAgaWYgKGNhbnZhcy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmVydGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMudmVydGV4U3RyaW5nID0gY2FudmFzLmdldEF0dHJpYnV0ZSgnZGF0YS12ZXJ0ZXgnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjYW52YXMuaGFzQXR0cmlidXRlKCdkYXRhLXZlcnRleC11cmwnKSkge1xuICAgICAgICAgICAgbGV0IHNvdXJjZSA9IGNhbnZhcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmVydGV4LXVybCcpO1xuICAgICAgICAgICAgeGhyLmdldChzb3VyY2UsIChlcnJvciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWQodGhpcy5mcmFnbWVudFN0cmluZywgYm9keSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcm9ncmFtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZpbmUgVmVydGV4IGJ1ZmZlclxuICAgICAgICBsZXQgdGV4Q29vcmRzTG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnYV90ZXhjb29yZCcpO1xuICAgICAgICB0aGlzLnZiby50ZXhDb29yZHMgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52Ym8udGV4Q29vcmRzKTtcbiAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbMC4wLCAwLjAsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsIDEuMF0pLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGV4Q29vcmRzTG9jKTtcbiAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRleENvb3Jkc0xvYywgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgICAgICBsZXQgdmVydGljZXNMb2MgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnByb2dyYW0sICdhX3Bvc2l0aW9uJyk7XG4gICAgICAgIHRoaXMudmJvLnZlcnRpY2VzID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmJvLnZlcnRpY2VzKTtcbiAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbLTEuMCwgLTEuMCwgMS4wLCAtMS4wLCAtMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wLCAtMS4wLCAxLjAsIDEuMF0pLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodmVydGljZXNMb2MpO1xuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIodmVydGljZXNMb2MsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICAgICAgLy8gbG9hZCBURVhUVVJFU1xuICAgICAgICBpZiAoY2FudmFzLmhhc0F0dHJpYnV0ZSgnZGF0YS10ZXh0dXJlcycpKSB7XG4gICAgICAgICAgICBsZXQgaW1nTGlzdCA9IGNhbnZhcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGV4dHVyZXMnKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgbkltZyBpbiBpbWdMaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRVbmlmb3JtKCd1X3RleCcgKyBuSW1nLCBpbWdMaXN0W25JbWddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IEVWRU5UU1xuICAgICAgICBsZXQgbW91c2UgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgbW91c2UueCA9IGUuY2xpZW50WCB8fCBlLnBhZ2VYO1xuICAgICAgICAgICAgbW91c2UueSA9IGUuY2xpZW50WSB8fCBlLnBhZ2VZO1xuICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgbGV0IHNhbmRib3ggPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiBSZW5kZXJMb29wKCkge1xuICAgICAgICAgICAgaWYgKHNhbmRib3gubk1vdXNlID4gMSkge1xuICAgICAgICAgICAgICAgIHNhbmRib3guc2V0TW91c2UobW91c2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2FuZGJveC5yZW5kZXIoKTtcbiAgICAgICAgICAgIHNhbmRib3guZm9yY2VSZW5kZXIgPSBzYW5kYm94LnJlc2l6ZSgpO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShSZW5kZXJMb29wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0YXJ0XG4gICAgICAgIHRoaXMuc2V0TW91c2UoeyB4OiAwLCB5OiAwIH0pO1xuICAgICAgICBSZW5kZXJMb29wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IHRleCBpbiB0aGlzLnRleHR1cmVzKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGV4KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHR1cmVzID0ge307XG4gICAgICAgIGZvciAobGV0IGF0dCBpbiB0aGlzLmF0dHJpYnMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlQnVmZmVyKHRoaXMuYXR0cmlic1thdHRdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0obnVsbCk7XG4gICAgICAgIHRoaXMuZ2wuZGVsZXRlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLmdsID0gbnVsbDtcbiAgICB9XG5cbiAgICBsb2FkIChmcmFnU3RyaW5nLCB2ZXJ0U3RyaW5nKSB7XG4gICAgICAgIC8vIExvYWQgdmVydGV4IHNoYWRlciBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgaWYgKHZlcnRTdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmVydGV4U3RyaW5nID0gdmVydFN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvYWQgZnJhZ21lbnQgc2hhZGVyIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgICBpZiAoZnJhZ1N0cmluZykge1xuICAgICAgICAgICAgdGhpcy5mcmFnbWVudFN0cmluZyA9IGZyYWdTdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFuaW1hdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubkRlbHRhID0gKHRoaXMuZnJhZ21lbnRTdHJpbmcubWF0Y2goL3VfZGVsdGEvZykgfHwgW10pLmxlbmd0aDtcbiAgICAgICAgdGhpcy5uVGltZSA9ICh0aGlzLmZyYWdtZW50U3RyaW5nLm1hdGNoKC91X3RpbWUvZykgfHwgW10pLmxlbmd0aDtcbiAgICAgICAgdGhpcy5uRGF0ZSA9ICh0aGlzLmZyYWdtZW50U3RyaW5nLm1hdGNoKC91X2RhdGUvZykgfHwgW10pLmxlbmd0aDtcbiAgICAgICAgdGhpcy5uTW91c2UgPSAodGhpcy5mcmFnbWVudFN0cmluZy5tYXRjaCgvdV9tb3VzZS9nKSB8fCBbXSkubGVuZ3RoO1xuICAgICAgICB0aGlzLmFuaW1hdGVkID0gdGhpcy5uRGF0ZSA+IDEgfHwgdGhpcy5uVGltZSA+IDEgfHwgdGhpcy5uTW91c2UgPiAxO1xuXG4gICAgICAgIGxldCBuVGV4dHVyZXMgPSB0aGlzLmZyYWdtZW50U3RyaW5nLnNlYXJjaCgvc2FtcGxlcjJEL2cpO1xuICAgICAgICBpZiAoblRleHR1cmVzKSB7XG4gICAgICAgICAgICBsZXQgbGluZXMgPSB0aGlzLmZyYWdtZW50U3RyaW5nLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBsaW5lc1tpXS5tYXRjaCgvdW5pZm9ybVxccypzYW1wbGVyMkRcXHMqKFtcXHddKik7XFxzKlxcL1xcL1xccyooW1xcd3xcXDpcXC9cXC98XFwufFxcLXxcXF9dKikvaSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBleHQgPSBtYXRjaFsyXS5zcGxpdCgnLicpLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaFsxXSAmJiAgbWF0Y2hbMl0gJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXh0ID09PSAnanBnJyB8fCBleHQgPT09ICdqcGVnJyB8fCBleHQgPT09ICdwbmcnIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgIGV4dCA9PT0gJ29ndicgfHwgZXh0ID09PSAnd2VibScgfHwgZXh0ID09PSAnbXA0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VW5pZm9ybShtYXRjaFsxXSwgbWF0Y2hbMl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBtYWluID0gbGluZXNbaV0ubWF0Y2goL1xccyp2b2lkXFxzKm1haW5cXHMqL2cpO1xuICAgICAgICAgICAgICAgIGlmIChtYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodGhpcywgdGhpcy52ZXJ0ZXhTdHJpbmcsIHRoaXMuZ2wuVkVSVEVYX1NIQURFUik7XG4gICAgICAgIGxldCBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0aGlzLCB0aGlzLmZyYWdtZW50U3RyaW5nLCB0aGlzLmdsLkZSQUdNRU5UX1NIQURFUik7XG5cbiAgICAgICAgLy8gSWYgRnJhZ21lbnQgc2hhZGVyIGZhaWxzIGxvYWQgYSBlbXB0eSBvbmUgdG8gc2lnbiB0aGUgZXJyb3JcbiAgICAgICAgaWYgKCFmcmFnbWVudFNoYWRlcikge1xuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVTaGFkZXIodGhpcywgJ3ZvaWQgbWFpbigpe1xcblxcdGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wKTtcXG59JywgdGhpcy5nbC5GUkFHTUVOVF9TSEFERVIpO1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuZCB1c2UgcHJvZ3JhbVxuICAgICAgICBsZXQgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odGhpcywgW3ZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXJdKTsvLywgWzAsMV0sWydhX3RleGNvb3JkJywnYV9wb3NpdGlvbiddKTtcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgICAgIC8vIERlbGV0ZSBzaGFkZXJzXG4gICAgICAgIC8vIHRoaXMuZ2wuZGV0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgICAgIC8vIHRoaXMuZ2wuZGV0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgICAgICAgdGhpcy5nbC5kZWxldGVTaGFkZXIodmVydGV4U2hhZGVyKTtcbiAgICAgICAgdGhpcy5nbC5kZWxldGVTaGFkZXIoZnJhZ21lbnRTaGFkZXIpO1xuXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHRoaXMuY2hhbmdlID0gdHJ1ZTtcblxuICAgICAgICAvLyBUcmlnZ2VyIGV2ZW50XG4gICAgICAgIHRoaXMudHJpZ2dlcignbG9hZCcsIHt9KTtcblxuICAgICAgICB0aGlzLmZvcmNlUmVuZGVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0ZXN0IChjYWxsYmFjaywgZnJhZ1N0cmluZywgdmVydFN0cmluZykge1xuICAgICAgICAvLyBUaGFua3MgdG8gQHRoZXNwaXRlIGZvciB0aGUgaGVscCBoZXJlXG4gICAgICAgIC8vIGh0dHBzOi8vd3d3Lmtocm9ub3Mub3JnL3JlZ2lzdHJ5L3dlYmdsL2V4dGVuc2lvbnMvRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5L1xuICAgICAgICBsZXQgcHJlX3Rlc3RfdmVydCA9IHRoaXMudmVydGV4U3RyaW5nO1xuICAgICAgICBsZXQgcHJlX3Rlc3RfZnJhZyA9IHRoaXMuZnJhZ21lbnRTdHJpbmc7XG4gICAgICAgIGxldCBwcmVfdGVzdF9wYXVzZWQgPSB0aGlzLnBhdXNlZDtcblxuICAgICAgICBsZXQgZXh0ID0gdGhpcy5nbC5nZXRFeHRlbnNpb24oJ0VYVF9kaXNqb2ludF90aW1lcl9xdWVyeScpO1xuICAgICAgICBsZXQgcXVlcnkgPSBleHQuY3JlYXRlUXVlcnlFWFQoKTtcbiAgICAgICAgbGV0IHdhc1ZhbGlkID0gdGhpcy5pc1ZhbGlkO1xuXG4gICAgICAgIGlmIChmcmFnU3RyaW5nIHx8IHZlcnRTdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZChmcmFnU3RyaW5nLCB2ZXJ0U3RyaW5nKTtcbiAgICAgICAgICAgIHdhc1ZhbGlkID0gdGhpcy5pc1ZhbGlkO1xuICAgICAgICAgICAgdGhpcy5mb3JjZVJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICBleHQuYmVnaW5RdWVyeUVYVChleHQuVElNRV9FTEFQU0VEX0VYVCwgcXVlcnkpO1xuICAgICAgICB0aGlzLmZvcmNlUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgZXh0LmVuZFF1ZXJ5RVhUKGV4dC5USU1FX0VMQVBTRURfRVhUKTtcblxuICAgICAgICBsZXQgc2FuZGJveCA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIGZpbmlzaFRlc3QoKSB7XG4gICAgICAgICAgICAvLyBSZXZlcnQgY2hhbmdlcy4uLiBnbyBiYWNrIHRvIG5vcm1hbFxuICAgICAgICAgICAgc2FuZGJveC5wYXVzZWQgPSBwcmVfdGVzdF9wYXVzZWQ7XG4gICAgICAgICAgICBpZiAoZnJhZ1N0cmluZyB8fCB2ZXJ0U3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgc2FuZGJveC5sb2FkKHByZV90ZXN0X2ZyYWcsIHByZV90ZXN0X3ZlcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHdhaXRGb3JUZXN0KCkge1xuICAgICAgICAgICAgc2FuZGJveC5mb3JjZVJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICBzYW5kYm94LnJlbmRlcigpO1xuICAgICAgICAgICAgbGV0IGF2YWlsYWJsZSA9IGV4dC5nZXRRdWVyeU9iamVjdEVYVChxdWVyeSwgZXh0LlFVRVJZX1JFU1VMVF9BVkFJTEFCTEVfRVhUKTtcbiAgICAgICAgICAgIGxldCBkaXNqb2ludCA9IHNhbmRib3guZ2wuZ2V0UGFyYW1ldGVyKGV4dC5HUFVfRElTSk9JTlRfRVhUKTtcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGUgJiYgIWRpc2pvaW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJldCA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2FzVmFsaWQ6IHdhc1ZhbGlkLFxuICAgICAgICAgICAgICAgICAgICBmcmFnOiBmcmFnU3RyaW5nIHx8IHNhbmRib3guZnJhZ21lbnRTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIHZlcnQ6IHZlcnRTdHJpbmcgfHwgc2FuZGJveC52ZXJ0ZXhTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVFbGFwc2VkTXM6IGV4dC5nZXRRdWVyeU9iamVjdEVYVChxdWVyeSwgZXh0LlFVRVJZX1JFU1VMVF9FWFQpLzEwMDAwMDAuMFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZmluaXNoVGVzdCgpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUod2FpdEZvclRlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdhaXRGb3JUZXN0KCk7XG4gICAgfVxuXG4gICAgbG9hZFRleHR1cmUgKG5hbWUsIHVybEVsZW1lbnRPckRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHVybEVsZW1lbnRPckRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBvcHRpb25zLnVybCA9IHVybEVsZW1lbnRPckRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHVybEVsZW1lbnRPckRhdGEgPT09ICdvYmplY3QnICYmIHVybEVsZW1lbnRPckRhdGEuZGF0YSAmJiB1cmxFbGVtZW50T3JEYXRhLndpZHRoICYmIHVybEVsZW1lbnRPckRhdGEuaGVpZ2h0KSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB1cmxFbGVtZW50T3JEYXRhLmRhdGE7XG4gICAgICAgICAgICBvcHRpb25zLndpZHRoID0gdXJsRWxlbWVudE9yRGF0YS53aWR0aDtcbiAgICAgICAgICAgIG9wdGlvbnMuaGVpZ2h0ID0gdXJsRWxlbWVudE9yRGF0YS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHVybEVsZW1lbnRPckRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBvcHRpb25zLmVsZW1lbnQgPSB1cmxFbGVtZW50T3JEYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGV4dHVyZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHR1cmVzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlc1tuYW1lXS5sb2FkKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXNbbmFtZV0ub24oJ2xvYWRlZCcsIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VSZW5kZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlc1tuYW1lXSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wsIG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlc1tuYW1lXS5vbignbG9hZGVkJywgKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJlZnJlc2hVbmlmb3JtcygpIHtcbiAgICAgICAgdGhpcy51bmlmb3JtcyA9IHt9O1xuICAgIH1cblxuICAgIHNldFVuaWZvcm0obmFtZSwgLi4udmFsdWUpIHtcbiAgICAgICAgbGV0IHUgPSB7fTtcbiAgICAgICAgdVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNldFVuaWZvcm1zKHUpO1xuICAgIH1cblxuICAgIHNldFVuaWZvcm1zKHVuaWZvcm1zKSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSBwYXJzZVVuaWZvcm1zKHVuaWZvcm1zKTtcbiAgICAgICAgLy8gU2V0IGVhY2ggdW5pZm9ybVxuICAgICAgICBmb3IgKGxldCB1IGluIHBhcnNlZCkge1xuICAgICAgICAgICAgaWYgKHBhcnNlZFt1XS50eXBlID09PSAnc2FtcGxlcjJEJykge1xuICAgICAgICAgICAgICAgIC8vIEZvciB0ZXh0dXJlcywgd2UgbmVlZCB0byB0cmFjayB0ZXh0dXJlIHVuaXRzLCBzbyB3ZSBoYXZlIGEgc3BlY2lhbCBzZXR0ZXJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVuaWZvcm1UZXh0dXJlKHBhcnNlZFt1XS5uYW1lLCBwYXJzZWRbdV0udmFsdWVbMF0pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRleHR1cmUocGFyc2VkW3VdLm5hbWUsIHBhcnNlZFt1XS52YWx1ZVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuaWZvcm0ocGFyc2VkW3VdLm1ldGhvZCwgcGFyc2VkW3VdLnR5cGUsIHBhcnNlZFt1XS5uYW1lLCBwYXJzZWRbdV0udmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VSZW5kZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TW91c2UobW91c2UpIHtcbiAgICAgICAgLy8gc2V0IHRoZSBtb3VzZSB1bmlmb3JtXG4gICAgICAgIGxldCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChtb3VzZSAmJlxuICAgICAgICAgICAgbW91c2UueCAmJiBtb3VzZS54ID49IHJlY3QubGVmdCAmJiBtb3VzZS54IDw9IHJlY3QucmlnaHQgJiZcbiAgICAgICAgICAgIG1vdXNlLnkgJiYgbW91c2UueSA+PSByZWN0LnRvcCAmJiBtb3VzZS55IDw9IHJlY3QuYm90dG9tKSB7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm0oJzJmJywgJ3ZlYzInLCAndV9tb3VzZScsIG1vdXNlLnggLSByZWN0LmxlZnQsIHRoaXMuY2FudmFzLmhlaWdodCAtIChtb3VzZS55IC0gcmVjdC50b3ApKTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvLyBleDogcHJvZ3JhbS51bmlmb3JtKCczZicsICdwb3NpdGlvbicsIHgsIHksIHopO1xuICAgIHVuaWZvcm0gKG1ldGhvZCwgdHlwZSwgbmFtZSwgLi4udmFsdWUpIHsgLy8gJ3ZhbHVlJyBpcyBhIG1ldGhvZC1hcHByb3ByaWF0ZSBhcmd1bWVudHMgbGlzdFxuICAgICAgICB0aGlzLnVuaWZvcm1zW25hbWVdID0gdGhpcy51bmlmb3Jtc1tuYW1lXSB8fCB7fTtcbiAgICAgICAgbGV0IHVuaWZvcm0gPSB0aGlzLnVuaWZvcm1zW25hbWVdO1xuICAgICAgICBsZXQgY2hhbmdlID0gaXNEaWZmKHVuaWZvcm0udmFsdWUsIHZhbHVlKTtcbiAgICAgICAgaWYgKGNoYW5nZSB8fCB0aGlzLmNoYW5nZSB8fCB1bmlmb3JtLmxvY2F0aW9uID09PSB1bmRlZmluZWQgfHwgdW5pZm9ybS52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB1bmlmb3JtLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdW5pZm9ybS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdW5pZm9ybS50eXBlID0gdHlwZTtcbiAgICAgICAgICAgIHVuaWZvcm0ubWV0aG9kID0gJ3VuaWZvcm0nICsgbWV0aG9kO1xuICAgICAgICAgICAgdW5pZm9ybS5sb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgbmFtZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2xbdW5pZm9ybS5tZXRob2RdLmFwcGx5KHRoaXMuZ2wsIFt1bmlmb3JtLmxvY2F0aW9uXS5jb25jYXQodW5pZm9ybS52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5pZm9ybVRleHR1cmUobmFtZSwgdGV4dHVyZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy50ZXh0dXJlc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRUZXh0dXJlKG5hbWUsIHRleHR1cmUsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bmlmb3JtKCcxaScsICdzYW1wbGVyMkQnLCBuYW1lLCB0aGlzLnRleHVyZUluZGV4KTtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZXNbbmFtZV0uYmluZCh0aGlzLnRleHVyZUluZGV4KTtcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybSgnMmYnLCAndmVjMicsIG5hbWUgKyAnUmVzb2x1dGlvbicsIHRoaXMudGV4dHVyZXNbbmFtZV0ud2lkdGgsIHRoaXMudGV4dHVyZXNbbmFtZV0uaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMudGV4dXJlSW5kZXgrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMud2lkdGggIT09IHRoaXMuY2FudmFzLmNsaWVudFdpZHRoIHx8XG4gICAgICAgICAgICB0aGlzLmhlaWdodCAhPT0gdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICBsZXQgcmVhbFRvQ1NTUGl4ZWxzID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcblxuICAgICAgICAgICAgLy8gTG9va3VwIHRoZSBzaXplIHRoZSBicm93c2VyIGlzIGRpc3BsYXlpbmcgdGhlIGNhbnZhcyBpbiBDU1MgcGl4ZWxzXG4gICAgICAgICAgICAvLyBhbmQgY29tcHV0ZSBhIHNpemUgbmVlZGVkIHRvIG1ha2Ugb3VyIGRyYXdpbmdidWZmZXIgbWF0Y2ggaXQgaW5cbiAgICAgICAgICAgIC8vIGRldmljZSBwaXhlbHMuXG4gICAgICAgICAgICBsZXQgZGlzcGxheVdpZHRoID0gTWF0aC5mbG9vcih0aGlzLmdsLmNhbnZhcy5jbGllbnRXaWR0aCAqIHJlYWxUb0NTU1BpeGVscyk7XG4gICAgICAgICAgICBsZXQgZGlzcGxheUhlaWdodCA9IE1hdGguZmxvb3IodGhpcy5nbC5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmVhbFRvQ1NTUGl4ZWxzKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBub3QgdGhlIHNhbWUgc2l6ZS5cbiAgICAgICAgICAgIGlmICh0aGlzLmdsLmNhbnZhcy53aWR0aCAhPT0gZGlzcGxheVdpZHRoIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5jYW52YXMuaGVpZ2h0ICE9PSBkaXNwbGF5SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgLy8gTWFrZSB0aGUgY2FudmFzIHRoZSBzYW1lIHNpemVcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmNhbnZhcy53aWR0aCA9IGRpc3BsYXlXaWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmNhbnZhcy5oZWlnaHQgPSBkaXNwbGF5SGVpZ2h0O1xuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgdmlld3BvcnQgdG8gbWF0Y2hcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuZ2wuY2FudmFzLndpZHRoLCB0aGlzLmdsLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2wudmlld3BvcnQoMCwgMCwgdGhpcy5nbC5kcmF3aW5nQnVmZmVyV2lkdGgsIHRoaXMuZ2wuZHJhd2luZ0J1ZmZlckhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5jYW52YXMuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gaXNDYW52YXNWaXNpYmxlKHRoaXMuY2FudmFzKTtcbiAgICAgICAgaWYgKHRoaXMuZm9yY2VSZW5kZXIgfHxcbiAgICAgICAgICAgICh0aGlzLmFuaW1hdGVkICYmIHRoaXMudmlzaWJsZSAmJiAhIHRoaXMucGF1c2VkKSkge1xuXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVEZWx0YSA9ICAobm93IC0gdGhpcy50aW1lUHJldikgLyAxMDAwLjA7XG4gICAgICAgICAgICB0aGlzLnRpbWVQcmV2ID0gbm93O1xuICAgICAgICAgICAgaWYgKHRoaXMubkRlbHRhID4gMSkge1xuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgZGVsdGEgdGltZSB1bmlmb3JtXG4gICAgICAgICAgICAgICAgdGhpcy51bmlmb3JtKCcxZicsICdmbG9hdCcsICd1X2RlbHRhJywgdGhpcy50aW1lRGVsdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5uVGltZSA+IDEgKSB7XG4gICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBlbGFwc2VkIHRpbWUgdW5pZm9ybVxuICAgICAgICAgICAgICAgIHRoaXMudW5pZm9ybSgnMWYnLCAnZmxvYXQnLCAndV90aW1lJywgKG5vdyAtIHRoaXMudGltZUxvYWQpIC8gMTAwMC4wKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubkRhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBTZXQgZGF0ZSB1bmlmb3JtOiB5ZWFyL21vbnRoL2RheS90aW1lX2luX3NlY1xuICAgICAgICAgICAgICAgIHRoaXMudW5pZm9ybSgnNGYnLCAnZmxvYXQnLCAndV9kYXRlJywgZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCkqMzYwMCArIGRhdGUuZ2V0TWludXRlcygpKjYwICsgZGF0ZS5nZXRTZWNvbmRzKCkgKyBkYXRlLmdldE1pbGxpc2Vjb25kcygpICogMC4wMDEgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2V0IHRoZSByZXNvbHV0aW9uIHVuaWZvcm1cbiAgICAgICAgICAgIHRoaXMudW5pZm9ybSgnMmYnLCAndmVjMicsICd1X3Jlc29sdXRpb24nLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgdGhpcy50ZXh1cmVJbmRleCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCB0ZXggaW4gdGhpcy50ZXh0dXJlcykge1xuICAgICAgICAgICAgICAgIHRoaXMudW5pZm9ybVRleHR1cmUodGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRHJhdyB0aGUgcmVjdGFuZ2xlLlxuICAgICAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzKHRoaXMuZ2wuVFJJQU5HTEVTLCAwLCA2KTtcblxuICAgICAgICAgICAgLy8gVHJpZ2dlciBldmVudFxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdyZW5kZXInLCB7fSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZvcmNlUmVuZGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXVzZSAoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwbGF5ICgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2ZXJzaW9uKCkge1xuICAgICAgICByZXR1cm4gJzAuMC4yNSc7XG4gICAgfVxufVxuXG53aW5kb3cuR2xzbENhbnZhcyA9IEdsc2xDYW52YXM7XG5cbmZ1bmN0aW9uIGxvYWRBbGxHbHNsQ2FudmFzKCkge1xuICAgIHZhciBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2xzbENhbnZhcycpO1xuICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgd2luZG93Lmdsc2xDYW52YXNlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzYW5kYm94ID0gbmV3IEdsc2xDYW52YXMobGlzdFtpXSk7XG4gICAgICAgICAgICBpZiAoc2FuZGJveC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lmdsc2xDYW52YXNlcy5wdXNoKHNhbmRib3gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBsb2FkQWxsR2xzbENhbnZhcygpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL3NyYy9HbHNsQ2FudmFzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIHdpbmRvdyA9IHJlcXVpcmUoXCJnbG9iYWwvd2luZG93XCIpXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoXCJpcy1mdW5jdGlvblwiKVxudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoXCJwYXJzZS1oZWFkZXJzXCIpXG52YXIgeHRlbmQgPSByZXF1aXJlKFwieHRlbmRcIilcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVYSFJcbmNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCB8fCBub29wXG5jcmVhdGVYSFIuWERvbWFpblJlcXVlc3QgPSBcIndpdGhDcmVkZW50aWFsc1wiIGluIChuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KCkpID8gY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0IDogd2luZG93LlhEb21haW5SZXF1ZXN0XG5cbmZvckVhY2hBcnJheShbXCJnZXRcIiwgXCJwdXRcIiwgXCJwb3N0XCIsIFwicGF0Y2hcIiwgXCJoZWFkXCIsIFwiZGVsZXRlXCJdLCBmdW5jdGlvbihtZXRob2QpIHtcbiAgICBjcmVhdGVYSFJbbWV0aG9kID09PSBcImRlbGV0ZVwiID8gXCJkZWxcIiA6IG1ldGhvZF0gPSBmdW5jdGlvbih1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIG9wdGlvbnMgPSBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spXG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICAgICAgcmV0dXJuIF9jcmVhdGVYSFIob3B0aW9ucylcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBmb3JFYWNoQXJyYXkoYXJyYXksIGl0ZXJhdG9yKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRvcihhcnJheVtpXSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKXtcbiAgICBmb3IodmFyIGkgaW4gb2JqKXtcbiAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGkpKSByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHBhcmFtcyA9IHVyaVxuXG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zXG4gICAgICAgIGlmICh0eXBlb2YgdXJpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSB7dXJpOnVyaX1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IHh0ZW5kKG9wdGlvbnMsIHt1cmk6IHVyaX0pXG4gICAgfVxuXG4gICAgcGFyYW1zLmNhbGxiYWNrID0gY2FsbGJhY2tcbiAgICByZXR1cm4gcGFyYW1zXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVhIUih1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgb3B0aW9ucyA9IGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaylcbiAgICByZXR1cm4gX2NyZWF0ZVhIUihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlWEhSKG9wdGlvbnMpIHtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucy5jYWxsYmFjayA9PT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbGxiYWNrIGFyZ3VtZW50IG1pc3NpbmdcIilcbiAgICB9XG5cbiAgICB2YXIgY2FsbGVkID0gZmFsc2VcbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYk9uY2UoZXJyLCByZXNwb25zZSwgYm9keSl7XG4gICAgICAgIGlmKCFjYWxsZWQpe1xuICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZVxuICAgICAgICAgICAgb3B0aW9ucy5jYWxsYmFjayhlcnIsIHJlc3BvbnNlLCBib2R5KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZHlzdGF0ZWNoYW5nZSgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGxvYWRGdW5jLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAgICAgLy8gQ2hyb21lIHdpdGggcmVxdWVzdFR5cGU9YmxvYiB0aHJvd3MgZXJyb3JzIGFycm91bmQgd2hlbiBldmVuIHRlc3RpbmcgYWNjZXNzIHRvIHJlc3BvbnNlVGV4dFxuICAgICAgICB2YXIgYm9keSA9IHVuZGVmaW5lZFxuXG4gICAgICAgIGlmICh4aHIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VUZXh0IHx8IGdldFhtbCh4aHIpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNKc29uKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGJvZHkpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZHlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvckZ1bmMoZXZ0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpXG4gICAgICAgIGlmKCEoZXZ0IGluc3RhbmNlb2YgRXJyb3IpKXtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBFcnJvcihcIlwiICsgKGV2dCB8fCBcIlVua25vd24gWE1MSHR0cFJlcXVlc3QgRXJyb3JcIikgKVxuICAgICAgICB9XG4gICAgICAgIGV2dC5zdGF0dXNDb2RlID0gMFxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXZ0LCBmYWlsdXJlUmVzcG9uc2UpXG4gICAgfVxuXG4gICAgLy8gd2lsbCBsb2FkIHRoZSBkYXRhICYgcHJvY2VzcyB0aGUgcmVzcG9uc2UgaW4gYSBzcGVjaWFsIHJlc3BvbnNlIG9iamVjdFxuICAgIGZ1bmN0aW9uIGxvYWRGdW5jKCkge1xuICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgIHZhciBzdGF0dXNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcilcbiAgICAgICAgaWYob3B0aW9ucy51c2VYRFIgJiYgeGhyLnN0YXR1cz09PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy9JRTggQ09SUyBHRVQgc3VjY2Vzc2Z1bCByZXNwb25zZSBkb2Vzbid0IGhhdmUgYSBzdGF0dXMgZmllbGQsIGJ1dCBib2R5IGlzIGZpbmVcbiAgICAgICAgICAgIHN0YXR1cyA9IDIwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdHVzID0gKHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzKVxuICAgICAgICB9XG4gICAgICAgIHZhciByZXNwb25zZSA9IGZhaWx1cmVSZXNwb25zZVxuICAgICAgICB2YXIgZXJyID0gbnVsbFxuXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDApe1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgYm9keTogZ2V0Qm9keSgpLFxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHN0YXR1cyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgICAgICAgICByYXdSZXF1ZXN0OiB4aHJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMpeyAvL3JlbWVtYmVyIHhociBjYW4gaW4gZmFjdCBiZSBYRFIgZm9yIENPUlMgaW4gSUVcbiAgICAgICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzID0gcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyciA9IG5ldyBFcnJvcihcIkludGVybmFsIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgcmVzcG9uc2UsIHJlc3BvbnNlLmJvZHkpXG4gICAgfVxuXG4gICAgdmFyIHhociA9IG9wdGlvbnMueGhyIHx8IG51bGxcblxuICAgIGlmICgheGhyKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmNvcnMgfHwgb3B0aW9ucy51c2VYRFIpIHtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWERvbWFpblJlcXVlc3QoKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleVxuICAgIHZhciBhYm9ydGVkXG4gICAgdmFyIHVyaSA9IHhoci51cmwgPSBvcHRpb25zLnVyaSB8fCBvcHRpb25zLnVybFxuICAgIHZhciBtZXRob2QgPSB4aHIubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgXCJHRVRcIlxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5IHx8IG9wdGlvbnMuZGF0YVxuICAgIHZhciBoZWFkZXJzID0geGhyLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge31cbiAgICB2YXIgc3luYyA9ICEhb3B0aW9ucy5zeW5jXG4gICAgdmFyIGlzSnNvbiA9IGZhbHNlXG4gICAgdmFyIHRpbWVvdXRUaW1lclxuICAgIHZhciBmYWlsdXJlUmVzcG9uc2UgPSB7XG4gICAgICAgIGJvZHk6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgIHN0YXR1c0NvZGU6IDAsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgcmF3UmVxdWVzdDogeGhyXG4gICAgfVxuXG4gICAgaWYgKFwianNvblwiIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5qc29uICE9PSBmYWxzZSkge1xuICAgICAgICBpc0pzb24gPSB0cnVlXG4gICAgICAgIGhlYWRlcnNbXCJhY2NlcHRcIl0gfHwgaGVhZGVyc1tcIkFjY2VwdFwiXSB8fCAoaGVhZGVyc1tcIkFjY2VwdFwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKSAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICBpZiAobWV0aG9kICE9PSBcIkdFVFwiICYmIG1ldGhvZCAhPT0gXCJIRUFEXCIpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gfHwgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKSAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbiA9PT0gdHJ1ZSA/IGJvZHkgOiBvcHRpb25zLmpzb24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gcmVhZHlzdGF0ZWNoYW5nZVxuICAgIHhoci5vbmxvYWQgPSBsb2FkRnVuY1xuICAgIHhoci5vbmVycm9yID0gZXJyb3JGdW5jXG4gICAgLy8gSUU5IG11c3QgaGF2ZSBvbnByb2dyZXNzIGJlIHNldCB0byBhIHVuaXF1ZSBmdW5jdGlvbi5cbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSUUgbXVzdCBkaWVcbiAgICB9XG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpe1xuICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgeGhyLm9udGltZW91dCA9IGVycm9yRnVuY1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJpLCAhc3luYywgb3B0aW9ucy51c2VybmFtZSwgb3B0aW9ucy5wYXNzd29yZClcbiAgICAvL2hhcyB0byBiZSBhZnRlciBvcGVuXG4gICAgaWYoIXN5bmMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9ICEhb3B0aW9ucy53aXRoQ3JlZGVudGlhbHNcbiAgICB9XG4gICAgLy8gQ2Fubm90IHNldCB0aW1lb3V0IHdpdGggc3luYyByZXF1ZXN0XG4gICAgLy8gbm90IHNldHRpbmcgdGltZW91dCBvbiB0aGUgeGhyIG9iamVjdCwgYmVjYXVzZSBvZiBvbGQgd2Via2l0cyBldGMuIG5vdCBoYW5kbGluZyB0aGF0IGNvcnJlY3RseVxuICAgIC8vIGJvdGggbnBtJ3MgcmVxdWVzdCBhbmQganF1ZXJ5IDEueCB1c2UgdGhpcyBraW5kIG9mIHRpbWVvdXQsIHNvIHRoaXMgaXMgYmVpbmcgY29uc2lzdGVudFxuICAgIGlmICghc3luYyAmJiBvcHRpb25zLnRpbWVvdXQgPiAwICkge1xuICAgICAgICB0aW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZS8vSUU5IG1heSBzdGlsbCBjYWxsIHJlYWR5c3RhdGVjaGFuZ2VcbiAgICAgICAgICAgIHhoci5hYm9ydChcInRpbWVvdXRcIilcbiAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKFwiWE1MSHR0cFJlcXVlc3QgdGltZW91dFwiKVxuICAgICAgICAgICAgZS5jb2RlID0gXCJFVElNRURPVVRcIlxuICAgICAgICAgICAgZXJyb3JGdW5jKGUpXG4gICAgICAgIH0sIG9wdGlvbnMudGltZW91dCApXG4gICAgfVxuXG4gICAgaWYgKHhoci5zZXRSZXF1ZXN0SGVhZGVyKSB7XG4gICAgICAgIGZvcihrZXkgaW4gaGVhZGVycyl7XG4gICAgICAgICAgICBpZihoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpe1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmhlYWRlcnMgJiYgIWlzRW1wdHkob3B0aW9ucy5oZWFkZXJzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIZWFkZXJzIGNhbm5vdCBiZSBzZXQgb24gYW4gWERvbWFpblJlcXVlc3Qgb2JqZWN0XCIpXG4gICAgfVxuXG4gICAgaWYgKFwicmVzcG9uc2VUeXBlXCIgaW4gb3B0aW9ucykge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGVcbiAgICB9XG5cbiAgICBpZiAoXCJiZWZvcmVTZW5kXCIgaW4gb3B0aW9ucyAmJlxuICAgICAgICB0eXBlb2Ygb3B0aW9ucy5iZWZvcmVTZW5kID09PSBcImZ1bmN0aW9uXCJcbiAgICApIHtcbiAgICAgICAgb3B0aW9ucy5iZWZvcmVTZW5kKHhocilcbiAgICB9XG5cbiAgICAvLyBNaWNyb3NvZnQgRWRnZSBicm93c2VyIHNlbmRzIFwidW5kZWZpbmVkXCIgd2hlbiBzZW5kIGlzIGNhbGxlZCB3aXRoIHVuZGVmaW5lZCB2YWx1ZS5cbiAgICAvLyBYTUxIdHRwUmVxdWVzdCBzcGVjIHNheXMgdG8gcGFzcyBudWxsIGFzIGJvZHkgdG8gaW5kaWNhdGUgbm8gYm9keVxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmF1Z3R1ci94aHIvaXNzdWVzLzEwMC5cbiAgICB4aHIuc2VuZChib2R5IHx8IG51bGwpXG5cbiAgICByZXR1cm4geGhyXG5cblxufVxuXG5mdW5jdGlvbiBnZXRYbWwoeGhyKSB7XG4gICAgaWYgKHhoci5yZXNwb25zZVR5cGUgPT09IFwiZG9jdW1lbnRcIikge1xuICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MXG4gICAgfVxuICAgIHZhciBmaXJlZm94QnVnVGFrZW5FZmZlY3QgPSB4aHIucmVzcG9uc2VYTUwgJiYgeGhyLnJlc3BvbnNlWE1MLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSA9PT0gXCJwYXJzZXJlcnJvclwiXG4gICAgaWYgKHhoci5yZXNwb25zZVR5cGUgPT09IFwiXCIgJiYgIWZpcmVmb3hCdWdUYWtlbkVmZmVjdCkge1xuICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy94aHIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHdpbjtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICB3aW4gPSBzZWxmO1xufSBlbHNlIHtcbiAgICB3aW4gPSB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3aW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKVxuICAsIGZvckVhY2ggPSByZXF1aXJlKCdmb3ItZWFjaCcpXG4gICwgaXNBcnJheSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaGVhZGVycykge1xuICBpZiAoIWhlYWRlcnMpXG4gICAgcmV0dXJuIHt9XG5cbiAgdmFyIHJlc3VsdCA9IHt9XG5cbiAgZm9yRWFjaChcbiAgICAgIHRyaW0oaGVhZGVycykuc3BsaXQoJ1xcbicpXG4gICAgLCBmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHZhciBpbmRleCA9IHJvdy5pbmRleE9mKCc6JylcbiAgICAgICAgICAsIGtleSA9IHRyaW0ocm93LnNsaWNlKDAsIGluZGV4KSkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICwgdmFsdWUgPSB0cmltKHJvdy5zbGljZShpbmRleCArIDEpKVxuXG4gICAgICAgIGlmICh0eXBlb2YocmVzdWx0W2tleV0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHJlc3VsdFtrZXldKSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldLnB1c2godmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSBbIHJlc3VsdFtrZXldLCB2YWx1ZSBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgKVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wYXJzZS1oZWFkZXJzL3BhcnNlLWhlYWRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0cmltO1xuXG5mdW5jdGlvbiB0cmltKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG5leHBvcnRzLmxlZnQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpO1xufTtcblxuZXhwb3J0cy5yaWdodCA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdHJpbS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2lzLWZ1bmN0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSBmb3JFYWNoXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcblxuZnVuY3Rpb24gZm9yRWFjaChsaXN0LCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmICghaXNGdW5jdGlvbihpdGVyYXRvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaXRlcmF0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uJylcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgY29udGV4dCA9IHRoaXNcbiAgICB9XG4gICAgXG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobGlzdCkgPT09ICdbb2JqZWN0IEFycmF5XScpXG4gICAgICAgIGZvckVhY2hBcnJheShsaXN0LCBpdGVyYXRvciwgY29udGV4dClcbiAgICBlbHNlIGlmICh0eXBlb2YgbGlzdCA9PT0gJ3N0cmluZycpXG4gICAgICAgIGZvckVhY2hTdHJpbmcobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpXG4gICAgZWxzZVxuICAgICAgICBmb3JFYWNoT2JqZWN0KGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoQXJyYXkoYXJyYXksIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCBpKSkge1xuICAgICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBhcnJheVtpXSwgaSwgYXJyYXkpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hTdHJpbmcoc3RyaW5nLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdHJpbmcubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgLy8gbm8gc3VjaCB0aGluZyBhcyBhIHNwYXJzZSBzdHJpbmcuXG4gICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgc3RyaW5nLmNoYXJBdChpKSwgaSwgc3RyaW5nKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9yRWFjaE9iamVjdChvYmplY3QsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgayBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrKSkge1xuICAgICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmplY3Rba10sIGssIG9iamVjdClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Zvci1lYWNoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJsZXQgbGFzdEVycm9yID0gJyc7XG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgSFRMTSBmb3IgYSBmYWlsdXJlIG1lc3NhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBjYW52YXNDb250YWluZXJJZCBpZCBvZiBjb250YWluZXIgb2YgdGhcbiAqICAgICAgICBjYW52YXMuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBodG1sLlxuICovXG5mdW5jdGlvbiBtYWtlRmFpbEhUTUwobXNnKSB7XG4gICAgcmV0dXJuIGBcbjx0YWJsZSBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM4Q0U7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XCI+PHRyPlxuPHRkIGFsaWduPVwiY2VudGVyXCI+XG48ZGl2IHN0eWxlPVwiZGlzcGxheTogdGFibGUtY2VsbDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj5cbjxkaXYgc3R5bGU9XCJcIj5gICsgbXNnICsgYDwvZGl2PlxuPC9kaXY+XG48L3RkPjwvdHI+PC90YWJsZT5cbmA7XG59XG5cbi8qKlxuICogTWVzYXNnZSBmb3IgZ2V0dGluZyBhIHdlYmdsIGJyb3dzZXJcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmxldCBHRVRfQV9XRUJHTF9CUk9XU0VSID0gYFxuXHRUaGlzIHBhZ2UgcmVxdWlyZXMgYSBicm93c2VyIHRoYXQgc3VwcG9ydHMgV2ViR0wuPGJyLz5cblx0PGEgaHJlZj1cImh0dHA6Ly9nZXQud2ViZ2wub3JnXCI+Q2xpY2sgaGVyZSB0byB1cGdyYWRlIHlvdXIgYnJvd3Nlci48L2E+XG5gO1xuXG4vKipcbiAqIE1lc2FzZ2UgZm9yIG5lZWQgYmV0dGVyIGhhcmR3YXJlXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5sZXQgT1RIRVJfUFJPQkxFTSA9IGBcblx0SXQgZG9lcyBub3QgYXBwZWFyIHlvdXIgY29tcHV0ZXIgY2FuIHN1cHBvcnQgV2ViR0wuPGJyLz5cblx0PGEgaHJlZj1cImh0dHA6Ly9nZXQud2ViZ2wub3JnL3Ryb3VibGVzaG9vdGluZy9cIj5DbGljayBoZXJlIGZvciBtb3JlIGluZm9ybWF0aW9uLjwvYT5cbmA7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHdlYmdsIGNvbnRleHQuIElmIGNyZWF0aW9uIGZhaWxzIGl0IHdpbGxcbiAqIGNoYW5nZSB0aGUgY29udGVudHMgb2YgdGhlIGNvbnRhaW5lciBvZiB0aGUgPGNhbnZhcz5cbiAqIHRhZyB0byBhbiBlcnJvciBtZXNzYWdlIHdpdGggdGhlIGNvcnJlY3QgbGlua3MgZm9yIFdlYkdMLlxuICogQHBhcmFtIHtFbGVtZW50fSBjYW52YXMuIFRoZSBjYW52YXMgZWxlbWVudCB0byBjcmVhdGUgYVxuICogICAgIGNvbnRleHQgZnJvbS5cbiAqIEBwYXJhbSB7V2ViR0xDb250ZXh0Q3JlYXRpb25BdHRpcmJ1dGVzfSBvcHRBdHRyaWJzIEFueVxuICogICAgIGNyZWF0aW9uIGF0dHJpYnV0ZXMgeW91IHdhbnQgdG8gcGFzcyBpbi5cbiAqIEByZXR1cm4ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gVGhlIGNyZWF0ZWQgY29udGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwV2ViR0wgKGNhbnZhcywgb3B0QXR0cmlicykge1xuICAgIGZ1bmN0aW9uIHNob3dMaW5rKHN0cikge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gY2FudmFzLnBhcmVudE5vZGU7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBtYWtlRmFpbEhUTUwoc3RyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghd2luZG93LldlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xuICAgICAgICBzaG93TGluayhHRVRfQV9XRUJHTF9CUk9XU0VSKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQgPSBjcmVhdGUzRENvbnRleHQoY2FudmFzLCBvcHRBdHRyaWJzKTtcbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgc2hvd0xpbmsoT1RIRVJfUFJPQkxFTSk7XG4gICAgfVxuICAgIGNvbnRleHQuZ2V0RXh0ZW5zaW9uKCdPRVNfc3RhbmRhcmRfZGVyaXZhdGl2ZXMnKTtcbiAgICByZXR1cm4gY29udGV4dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgd2ViZ2wgY29udGV4dC5cbiAqIEBwYXJhbSB7IUNhbnZhc30gY2FudmFzIFRoZSBjYW52YXMgdGFnIHRvIGdldCBjb250ZXh0XG4gKiAgICAgZnJvbS4gSWYgb25lIGlzIG5vdCBwYXNzZWQgaW4gb25lIHdpbGwgYmUgY3JlYXRlZC5cbiAqIEByZXR1cm4geyFXZWJHTENvbnRleHR9IFRoZSBjcmVhdGVkIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUzRENvbnRleHQoY2FudmFzLCBvcHRBdHRyaWJzKSB7XG4gICAgbGV0IG5hbWVzID0gWyd3ZWJnbCcsICdleHBlcmltZW50YWwtd2ViZ2wnXTtcbiAgICBsZXQgY29udGV4dCA9IG51bGw7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG5hbWVzLmxlbmd0aDsgKytpaSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KG5hbWVzW2lpXSwgb3B0QXR0cmlicyk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29udGV4dDtcbn1cblxuLypcbiAqXHRDcmVhdGUgYSBWZXJ0ZXggb2YgYSBzcGVjaWZpYyB0eXBlIChnbC5WRVJURVhfU0hBREVSLylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoYWRlcihtYWluLCBzb3VyY2UsIHR5cGUpIHtcbiAgICBsZXQgZ2wgPSBtYWluLmdsO1xuXG4gICAgbGV0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcbiAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICAgIGxldCBjb21waWxlZCA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKTtcblxuICAgIGlmICghY29tcGlsZWQpIHtcbiAgICAgICAgLy8gU29tZXRoaW5nIHdlbnQgd3JvbmcgZHVyaW5nIGNvbXBpbGF0aW9uOyBnZXQgdGhlIGVycm9yXG4gICAgICAgIGxhc3RFcnJvciA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignKioqIEVycm9yIGNvbXBpbGluZyBzaGFkZXIgJyArIHNoYWRlciArICc6JyArIGxhc3RFcnJvcik7XG4gICAgICAgIG1haW4udHJpZ2dlcignZXJyb3InLCB7IHNoYWRlcjogc2hhZGVyLCBzb3VyY2U6IHNvdXJjZSwgdHlwZTogdHlwZSwgZXJyb3I6IGxhc3RFcnJvciB9KTtcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBzaGFkZXI7XG59XG5cbi8qKlxuICogTG9hZHMgYSBzaGFkZXIuXG4gKiBAcGFyYW0geyFXZWJHTENvbnRleHR9IGdsIFRoZSBXZWJHTENvbnRleHQgdG8gdXNlLlxuICogQHBhcmFtIHtzdHJpbmd9IHNoYWRlclNvdXJjZSBUaGUgc2hhZGVyIHNvdXJjZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaGFkZXJUeXBlIFRoZSB0eXBlIG9mIHNoYWRlci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTogdm9pZCkgb3B0X2Vycm9yQ2FsbGJhY2sgY2FsbGJhY2sgZm9yIGVycm9ycy5cbiAqIEByZXR1cm4geyFXZWJHTFNoYWRlcn0gVGhlIGNyZWF0ZWQgc2hhZGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbShtYWluLCBzaGFkZXJzLCBvcHRBdHRyaWJzLCBvcHRMb2NhdGlvbnMpIHtcbiAgICBsZXQgZ2wgPSBtYWluLmdsO1xuXG4gICAgbGV0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IHNoYWRlcnMubGVuZ3RoOyArK2lpKSB7XG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBzaGFkZXJzW2lpXSk7XG4gICAgfVxuICAgIGlmIChvcHRBdHRyaWJzKSB7XG4gICAgICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBvcHRBdHRyaWJzLmxlbmd0aDsgKytpaSkge1xuICAgICAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKFxuICAgICAgICAgICAgcHJvZ3JhbSxcbiAgICAgICAgICAgIG9wdExvY2F0aW9ucyA/IG9wdExvY2F0aW9uc1tpaV0gOiBpaSxcbiAgICAgICAgICAgIG9wdEF0dHJpYnNbaWldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIC8vIENoZWNrIHRoZSBsaW5rIHN0YXR1c1xuICAgIGxldCBsaW5rZWQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKTtcbiAgICBpZiAoIWxpbmtlZCkge1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRoZSBsaW5rXG4gICAgICAgIGxhc3RFcnJvciA9IGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pO1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gcHJvZ3JhbSBsaW5raW5nOicgKyBsYXN0RXJyb3IpO1xuICAgICAgICBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHByb2dyYW07XG59XG5cbi8vIEJ5IEJyZXR0IENhbWJlciBvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RhbmdyYW1zL3RhbmdyYW0vYmxvYi9tYXN0ZXIvc3JjL2dsL2dsc2wuanNcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVuaWZvcm1zKHVuaWZvcm1zLCBwcmVmaXggPSBudWxsKSB7XG4gICAgbGV0IHBhcnNlZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgbmFtZSBpbiB1bmlmb3Jtcykge1xuICAgICAgICBsZXQgdW5pZm9ybSA9IHVuaWZvcm1zW25hbWVdO1xuICAgICAgICBsZXQgdTtcblxuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICBuYW1lID0gcHJlZml4ICsgJy4nICsgbmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNpbmdsZSBmbG9hdFxuICAgICAgICBpZiAodHlwZW9mIHVuaWZvcm0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Zsb2F0JyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICcxZicsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdW5pZm9ybVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXJyYXk6IHZlY3RvciwgYXJyYXkgb2YgZmxvYXRzLCBhcnJheSBvZiB0ZXh0dXJlcywgb3IgYXJyYXkgb2Ygc3RydWN0c1xuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHVuaWZvcm0pKSB7XG4gICAgICAgICAgICAvLyBOdW1lcmljIHZhbHVlc1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB1bmlmb3JtWzBdID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIC8vIGZsb2F0IHZlY3RvcnMgKHZlYzIsIHZlYzMsIHZlYzQpXG4gICAgICAgICAgICAgICAgaWYgKHVuaWZvcm0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmbG9hdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICcxZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZsb2F0IHZlY3RvcnMgKHZlYzIsIHZlYzMsIHZlYzQpXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodW5pZm9ybS5sZW5ndGggPj0gMiAmJiB1bmlmb3JtLmxlbmd0aCA8PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd2ZWMnICsgdW5pZm9ybS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHVuaWZvcm0ubGVuZ3RoICsgJ2Z2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdW5pZm9ybVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmxvYXQgYXJyYXlcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1bmlmb3JtLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Zsb2F0W10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnMWZ2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgKyAnWzBdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBhc3N1bWUgbWF0cml4IGZvciAodHlwZW9mID09IEZsb2F0MzJBcnJheSAmJiBsZW5ndGggPT0gMTYpP1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXJyYXkgb2YgdGV4dHVyZXNcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1bmlmb3JtWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NhbXBsZXIyRCcsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJzFpJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFycmF5IG9mIGFycmF5cyAtIGJ1dCBvbmx5IGFycmF5cyBvZiB2ZWN0b3JzIGFyZSBhbGxvd2VkIGluIHRoaXMgY2FzZVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh1bmlmb3JtWzBdKSAmJiB0eXBlb2YgdW5pZm9ybVswXVswXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAvLyBmbG9hdCB2ZWN0b3JzICh2ZWMyLCB2ZWMzLCB2ZWM0KVxuICAgICAgICAgICAgICAgIGlmICh1bmlmb3JtWzBdLmxlbmd0aCA+PSAyICYmIHVuaWZvcm1bMF0ubGVuZ3RoIDw9IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHUgPSAwOyB1IDwgdW5pZm9ybS5sZW5ndGg7IHUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd2ZWMnICsgdW5pZm9ybVswXS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB1bmlmb3JtW3VdLmxlbmd0aCArICdmdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSArICdbJyArIHUgKyAnXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1bdV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGVsc2UgZXJyb3I/XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcnJheSBvZiBzdHJ1Y3R1cmVzXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdW5pZm9ybVswXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHUgPSAwOyB1IDwgdW5pZm9ybS5sZW5ndGg7IHUrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgZWFjaCBzdHJ1Y3QgaW4gdGhlIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wdXNoKC4uLnBhcnNlVW5pZm9ybXModW5pZm9ybVt1XSwgbmFtZSArICdbJyArIHUgKyAnXScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQm9vbGVhblxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdW5pZm9ybSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2wnLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJzFpJyxcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUZXh0dXJlXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1bmlmb3JtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzYW1wbGVyMkQnLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJzFpJyxcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdHJ1Y3R1cmVcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHVuaWZvcm0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyBTZXQgZWFjaCBmaWVsZCBpbiB0aGUgc3RydWN0XG4gICAgICAgICAgICBwYXJzZWQucHVzaCguLi5wYXJzZVVuaWZvcm1zKHVuaWZvcm0sIG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPOiBzdXBwb3J0IG90aGVyIG5vbi1mbG9hdCB0eXBlcz8gKGludCwgZXRjLilcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvc3JjL2dsL2dsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUZXh0dXJlIG1hbmFnZW1lbnRcbmltcG9ydCB7IGlzUG93ZXJPZjIsIGlzU2FmYXJpIH0gZnJvbSAnLi4vdG9vbHMvY29tbW9uJztcbmltcG9ydCB7IHN1YnNjcmliZU1peGluIH0gZnJvbSAnLi4vdG9vbHMvbWl4aW4nO1xuXG4vLyBHTCB0ZXh0dXJlIHdyYXBwZXIgb2JqZWN0IGZvciBrZWVwaW5nIHRyYWNrIG9mIGEgZ2xvYmFsIHNldCBvZiB0ZXh0dXJlcywga2V5ZWQgYnkgYSB1bmlxdWUgdXNlci1kZWZpbmVkIG5hbWVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmUge1xuICAgIGNvbnN0cnVjdG9yKGdsLCBuYW1lLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3Vic2NyaWJlTWl4aW4odGhpcyk7XG5cbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLnRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgIGlmICh0aGlzLnRleHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmluZCgpO1xuXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc291cmNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3VyY2VUeXBlID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gbnVsbDsgLy8gYSBQcm9taXNlIG9iamVjdCB0byB0cmFjayB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGlzIHRleHR1cmVcblxuICAgICAgICAvLyBEZWZhdWx0IHRvIGEgMS1waXhlbCBibGFjayB0ZXh0dXJlIHNvIHdlIGNhbiBzYWZlbHkgcmVuZGVyIHdoaWxlIHdlIHdhaXQgZm9yIGFuIGltYWdlIHRvIGxvYWRcbiAgICAgICAgLy8gU2VlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5NzIyMjQ3L3dlYmdsLXdhaXQtZm9yLXRleHR1cmUtdG8tbG9hZFxuICAgICAgICB0aGlzLnNldERhdGEoMSwgMSwgbmV3IFVpbnQ4QXJyYXkoWzAsIDAsIDAsIDI1NV0pLCB7IGZpbHRlcmluZzogJ2xpbmVhcicgfSk7XG4gICAgICAgIHRoaXMuc2V0RmlsdGVyaW5nKG9wdGlvbnMuZmlsdGVyaW5nKTtcblxuICAgICAgICB0aGlzLmxvYWQob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gRGVzdHJveSBhIHNpbmdsZSB0ZXh0dXJlIGluc3RhbmNlXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbC5kZWxldGVUZXh0dXJlKHRoaXMudGV4dHVyZSk7XG4gICAgICAgIHRoaXMudGV4dHVyZSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBiaW5kKHVuaXQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB1bml0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKFRleHR1cmUuYWN0aXZlVW5pdCAhPT0gdW5pdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYWN0aXZlVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkUwICsgdW5pdCk7XG4gICAgICAgICAgICAgICAgVGV4dHVyZS5hY3RpdmVVbml0ID0gdW5pdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoVGV4dHVyZS5hY3RpdmVUZXh0dXJlICE9PSB0aGlzLnRleHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUpO1xuICAgICAgICAgICAgVGV4dHVyZS5hY3RpdmVUZXh0dXJlID0gdGhpcy50ZXh0dXJlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZChvcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gbnVsbDtcblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKHRoaXMudXJsID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy51cmwgIT09IHRoaXMudXJsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRVcmwob3B0aW9ucy51cmwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50KG9wdGlvbnMuZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMud2lkdGggJiYgb3B0aW9ucy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCwgb3B0aW9ucy5kYXRhLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldHMgdGV4dHVyZSBmcm9tIGFuIHVybFxuICAgIHNldFVybCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAoIXRoaXMudmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXJsID0gdXJsOyAvLyBzYXZlIFVSTCByZWZlcmVuY2UgKHdpbGwgYmUgb3ZlcndyaXR0ZW4gd2hlbiBlbGVtZW50IGlzIGxvYWRlZCBiZWxvdylcbiAgICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLnVybDtcbiAgICAgICAgdGhpcy5zb3VyY2VUeXBlID0gJ3VybCc7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGV4dCA9IHVybC5zcGxpdCgnLicpLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgaXNWaWRlbyA9IChleHQgPT09ICdvZ3YnIHx8IGV4dCA9PT0gJ3dlYm0nIHx8IGV4dCA9PT0gJ21wNCcpO1xuXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlzVmlkZW8pIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZpbHRlcmluZyA9ICduZWFyZXN0JztcbiAgICAgICAgICAgICAgICAvLyBlbGVtZW50LnByZWxvYWQgPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgLy8gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGV4dHVyZSAnJHt0aGlzLm5hbWV9JzogZmFpbGVkIHRvIGxvYWQgdXJsOiAnJHt0aGlzLnNvdXJjZX0nYCwgZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZWxlbWVudC5vbmVycm9yID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gV2FybiBhbmQgcmVzb2x2ZSBvbiBlcnJvclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUZXh0dXJlICcke3RoaXMubmFtZX0nOiBmYWlsZWQgdG8gbG9hZCB1cmw6ICcke3RoaXMuc291cmNlfSdgLCBlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gU2FmYXJpIGhhcyBhIGJ1ZyBsb2FkaW5nIGRhdGEtVVJMIGVsZW1lbnRzIHdpdGggQ09SUyBlbmFibGVkLCBzbyBpdCBtdXN0IGJlIGRpc2FibGVkIGluIHRoYXQgY2FzZVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEyMzk3OFxuICAgICAgICAgICAgaWYgKCEoaXNTYWZhcmkoKSAmJiB0aGlzLnNvdXJjZS5zbGljZSgwLCA1KSA9PT0gJ2RhdGE6JykpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gdGhpcy5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoaXNWaWRlbykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudChlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0ZXh0dXJlIHRvIGEgcmF3IGltYWdlIGJ1ZmZlclxuICAgIHNldERhdGEod2lkdGgsIGhlaWdodCwgZGF0YSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5zb3VyY2UgPSBkYXRhO1xuICAgICAgICB0aGlzLnNvdXJjZVR5cGUgPSAnZGF0YSc7XG5cbiAgICAgICAgdGhpcy51cGRhdGUob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc2V0RmlsdGVyaW5nKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IFByb21pc2UucmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGluZztcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRoZSB0ZXh0dXJlIHRvIHRyYWNrIGEgZWxlbWVudCAoY2FudmFzL2ltYWdlKVxuICAgIHNldEVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICBsZXQgZWwgPSBlbGVtZW50O1xuXG4gICAgICAgIC8vIGEgc3RyaW5nIGVsZW1lbnQgaXMgaW50ZXJwZXRlZCBhcyBhIENTUyBzZWxlY3RvclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQgfHxcbiAgICAgICAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50IHx8XG4gICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBlbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VUeXBlID0gJ2VsZW1lbnQnO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXl0aHJvdWdoJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDE1KTtcbiAgICAgICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zZXRGaWx0ZXJpbmcob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgbXNnID0gYHRoZSAnZWxlbWVudCcgcGFyYW1ldGVyIChcXGBlbGVtZW50OiAke0pTT04uc3RyaW5naWZ5KGVsKX1cXGApIG11c3QgYmUgYSBDU1MgYDtcbiAgICAgICAgICAgIG1zZyArPSBgc2VsZWN0b3Igc3RyaW5nLCBvciBhIDxjYW52YXM+LCA8aW1hZ2U+IG9yIDx2aWRlbz4gb2JqZWN0YDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUZXh0dXJlICcke3RoaXMubmFtZX0nOiAke21zZ31gLCBvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IFByb21pc2UucmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGluZztcbiAgICB9XG5cbiAgICAvLyBVcGxvYWRzIGN1cnJlbnQgaW1hZ2Ugb3IgYnVmZmVyIHRvIHRoZSBHUFUgKGNhbiBiZSB1c2VkIHRvIHVwZGF0ZSBhbmltYXRlZCB0ZXh0dXJlcyBvbiB0aGUgZmx5KVxuICAgIHVwZGF0ZShvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmQoKTtcbiAgICAgICAgdGhpcy5nbC5waXhlbFN0b3JlaSh0aGlzLmdsLlVOUEFDS19GTElQX1lfV0VCR0wsIChvcHRpb25zLlVOUEFDS19GTElQX1lfV0VCR0wgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlKSk7XG4gICAgICAgIHRoaXMuZ2wucGl4ZWxTdG9yZWkodGhpcy5nbC5VTlBBQ0tfUFJFTVVMVElQTFlfQUxQSEFfV0VCR0wsIG9wdGlvbnMuVU5QQUNLX1BSRU1VTFRJUExZX0FMUEhBX1dFQkdMIHx8IGZhbHNlKTtcblxuICAgICAgICAvLyBJbWFnZSBvciBDYW52YXMgZWxlbWVudFxuICAgICAgICBpZiAodGhpcy5zb3VyY2VUeXBlID09PSAnZWxlbWVudCcgJiZcbiAgICAgICAgICAgICgodGhpcy5zb3VyY2UgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkgfHwgXG4gICAgICAgICAgICAgKHRoaXMuc291cmNlIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkgfHxcbiAgICAgICAgICAgICAodGhpcy5zb3VyY2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50ICYmIHRoaXMuc291cmNlLmNvbXBsZXRlKSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5zb3VyY2UudmlkZW9XaWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuc291cmNlLnZpZGVvSGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5zb3VyY2Uud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnNvdXJjZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdsLnRleEltYWdlMkQodGhpcy5nbC5URVhUVVJFXzJELCAwLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuUkdCQSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCB0aGlzLnNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmF3IGltYWdlIGJ1ZmZlclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNvdXJjZVR5cGUgPT09ICdkYXRhJykge1xuICAgICAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgMCwgdGhpcy5nbC5SR0JBLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIHRoaXMuc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXIoJ2xvYWRlZCcsIHRoaXMpO1xuICAgIH1cblxuICAgIC8vIERldGVybWluZXMgYXBwcm9wcmlhdGUgZmlsdGVyaW5nIG1vZGVcbiAgICBzZXRGaWx0ZXJpbmcgKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAoIXRoaXMudmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG93ZXJPZjIgPSBpc1Bvd2VyT2YyKHRoaXMud2lkdGgpICYmIGlzUG93ZXJPZjIodGhpcy5oZWlnaHQpO1xuICAgICAgICBsZXQgZGVmdWFsdEZpbHRlciA9ICh0aGlzLnBvd2VyT2YyID8gJ21pcG1hcCcgOiAnbGluZWFyJyk7XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nID0gb3B0aW9ucy5maWx0ZXJpbmcgfHwgZGVmdWFsdEZpbHRlcjtcblxuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgICAgICB0aGlzLmJpbmQoKTtcblxuICAgICAgICAvLyBGb3IgcG93ZXItb2YtMiB0ZXh0dXJlcywgdGhlIGZvbGxvd2luZyBwcmVzZXRzIGFyZSBhdmFpbGFibGU6XG4gICAgICAgIC8vIG1pcG1hcDogbGluZWFyIGJsZW5kIGZyb20gbmVhcmVzdCBtaXBcbiAgICAgICAgLy8gbGluZWFyOiBsaW5lYXIgYmxlbmQgZnJvbSBvcmlnaW5hbCBpbWFnZSAobm8gbWlwcylcbiAgICAgICAgLy8gbmVhcmVzdDogbmVhcmVzdCBwaXhlbCBmcm9tIG9yaWdpbmFsIGltYWdlIChubyBtaXBzLCAnYmxvY2t5JyBsb29rKVxuICAgICAgICBpZiAodGhpcy5wb3dlck9mMikge1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgb3B0aW9ucy5URVhUVVJFX1dSQVBfUyB8fCAob3B0aW9ucy5yZXBlYXQgJiYgZ2wuUkVQRUFUKSB8fCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIG9wdGlvbnMuVEVYVFVSRV9XUkFQX1QgfHwgKG9wdGlvbnMucmVwZWF0ICYmIGdsLlJFUEVBVCkgfHwgZ2wuQ0xBTVBfVE9fRURHRSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcmluZyA9PT0gJ21pcG1hcCcpIHtcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSX01JUE1BUF9MSU5FQVIpOyAvLyBUT0RPOiB1c2UgdHJpbGluZWFyIGZpbHRlcmluZyBieSBkZWZ1YWx0IGluc3RlYWQ/XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgICAgICAgICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmZpbHRlcmluZyA9PT0gJ2xpbmVhcicpIHtcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZmlsdGVyaW5nID09PSAnbmVhcmVzdCcpIHtcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gV2ViR0wgaGFzIHN0cmljdCByZXF1aXJlbWVudHMgb24gbm9uLXBvd2VyLW9mLTIgdGV4dHVyZXM6XG4gICAgICAgICAgICAvLyBObyBtaXBtYXBzIGFuZCBtdXN0IGNsYW1wIHRvIGVkZ2VcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcmluZyA9PT0gJ21pcG1hcCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmluZyA9ICdsaW5lYXInO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJpbmcgPT09ICduZWFyZXN0Jykge1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHsgLy8gZGVmYXVsdCB0byBsaW5lYXIgZm9yIG5vbi1wb3dlci1vZi0yIHRleHR1cmVzXG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFJlcG9ydCBtYXggdGV4dHVyZSBzaXplIGZvciBhIEdMIGNvbnRleHRcblRleHR1cmUuZ2V0TWF4VGV4dHVyZVNpemUgPSBmdW5jdGlvbiAoZ2wpIHtcbiAgICByZXR1cm4gZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX1NJWkUpO1xufTtcblxuLy8gR2xvYmFsIHNldCBvZiB0ZXh0dXJlcywgYnkgbmFtZVxuVGV4dHVyZS5hY3RpdmVVbml0ID0gLTE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL3NyYy9nbC9UZXh0dXJlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2lmZGVmIEdMX0VTXFxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuI2VuZGlmXFxuXFxuXFxuY29uc3QgZmxvYXQgUEkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTU7XFxuY29uc3QgZmxvYXQgUEkyID0gNi4yODMxODUzMDcxODtcXG5cXG5mbG9hdCBhbG1vc3RJZGVudGl0eSggZmxvYXQgeCwgZmxvYXQgbSwgZmxvYXQgbiApXFxue1xcbiAgICBpZiggeD5tICkgcmV0dXJuIHg7XFxuXFxuICAgIGZsb2F0IGEgPSAyLjAqbiAtIG07XFxuICAgIGZsb2F0IGIgPSAyLjAqbSAtIDMuMCpuO1xcbiAgICBmbG9hdCB0ID0geC9tO1xcblxcbiAgICByZXR1cm4gKGEqdCArIGIpKnQqdCArIG47XFxufVxcblxcblxcbmZsb2F0IGltcHVsc2UoIGZsb2F0IGssIGZsb2F0IHggKVxcbntcXG4gICAgZmxvYXQgaCA9IGsqeDtcXG4gICAgcmV0dXJuIGgqZXhwKDEuMC1oKTtcXG59XFxuXFxuZmxvYXQgY3ViaWNQdWxzZSggZmxvYXQgYywgZmxvYXQgdywgZmxvYXQgeCApXFxue1xcbiAgICB4ID0gYWJzKHggLSBjKTtcXG4gICAgaWYoIHg+dyApIHJldHVybiAwLjA7XFxuICAgIHggLz0gdztcXG4gICAgcmV0dXJuIDEuMCAtIHgqeCooMy4wLTIuMCp4KTtcXG59XFxuXFxuZmxvYXQgZXhwU3RlcCggZmxvYXQgeCwgZmxvYXQgaywgZmxvYXQgbiApXFxue1xcbiAgICByZXR1cm4gZXhwKCAtaypwb3coeCxuKSApO1xcbn1cXG5cXG5cXG5mbG9hdCBnYWluKGZsb2F0IHgsIGZsb2F0IGspXFxue1xcbiAgICBmbG9hdCBhID0gMC41KnBvdygyLjAqKCh4PDAuNSk/eDoxLjAteCksIGspO1xcbiAgICByZXR1cm4gKHg8MC41KT9hOjEuMC1hO1xcbn1cXG5cXG5cXG5mbG9hdCBwYXJhYm9sYSggZmxvYXQgeCwgZmxvYXQgayApXFxue1xcbiAgICByZXR1cm4gcG93KCA0LjAqeCooMS4wLXgpLCBrICk7XFxufVxcblxcbmZsb2F0IHBjdXJ2ZSggZmxvYXQgeCwgZmxvYXQgYSwgZmxvYXQgYiApXFxue1xcbiAgICBmbG9hdCBrID0gcG93KGErYixhK2IpIC8gKHBvdyhhLGEpKnBvdyhiLGIpKTtcXG4gICAgcmV0dXJuIGsgKiBwb3coIHgsIGEgKSAqIHBvdyggMS4wLXgsIGIgKTtcXG59XFxuXFxudmVjMyByZ2IyaHNiKCBpbiB2ZWMzIGMgKXtcXG4gICAgdmVjNCBLID0gdmVjNCgwLjAsIC0xLjAgLyAzLjAsIDIuMCAvIDMuMCwgLTEuMCk7XFxuICAgIHZlYzQgcCA9IG1peCh2ZWM0KGMuYmcsIEsud3opLFxcbiAgICAgICAgICAgICAgICAgdmVjNChjLmdiLCBLLnh5KSxcXG4gICAgICAgICAgICAgICAgIHN0ZXAoYy5iLCBjLmcpKTtcXG4gICAgdmVjNCBxID0gbWl4KHZlYzQocC54eXcsIGMuciksXFxuICAgICAgICAgICAgICAgICB2ZWM0KGMuciwgcC55engpLFxcbiAgICAgICAgICAgICAgICAgc3RlcChwLngsIGMucikpO1xcbiAgICBmbG9hdCBkID0gcS54IC0gbWluKHEudywgcS55KTtcXG4gICAgZmxvYXQgZSA9IDEuMGUtMTA7XFxuICAgIHJldHVybiB2ZWMzKGFicyhxLnogKyAocS53IC0gcS55KSAvICg2LjAgKiBkICsgZSkpLFxcbiAgICAgICAgICAgICAgICBkIC8gKHEueCArIGUpLFxcbiAgICAgICAgICAgICAgICBxLngpO1xcbn1cXG5cXG4vLyAgRnVuY3Rpb24gZnJvbSBJw7FpZ28gUXVpbGVzXFxuLy8gIGh0dHBzOi8vd3d3LnNoYWRlcnRveS5jb20vdmlldy9Nc1MzV2NcXG52ZWMzIGhzYjJyZ2IoIGluIHZlYzMgYyApe1xcbiAgICB2ZWMzIHJnYiA9IGNsYW1wKGFicyhtb2QoYy54KjYuMCt2ZWMzKDAuMCw0LjAsMi4wKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDYuMCktMy4wKS0xLjAsXFxuICAgICAgICAgICAgICAgICAgICAgMC4wLFxcbiAgICAgICAgICAgICAgICAgICAgIDEuMCApO1xcbiAgICByZ2IgPSByZ2IqcmdiKigzLjAtMi4wKnJnYik7XFxuICAgIHJldHVybiBjLnogKiBtaXgodmVjMygxLjApLCByZ2IsIGMueSk7XFxufVxcblxcbmZsb2F0IHJlY3RhbmdsZSh2ZWMyIHN0LHZlYzIgYmwsIHZlYzIgdHIpIHtcXG4gICAgdmVjMiBibHYgPSBzdGVwKGJsLCBzdCk7XFxuICAgIHZlYzIgdHJ2ID0gc3RlcCh2ZWMyKDEuMCktdHIsIDEuMC1zdCk7XFxuICAgIHJldHVybiBibHYueCpibHYueSAqIHRydi54KnRydi55O1xcbn1cXG5cXG5mbG9hdCBzbW9vdGhSZWN0YW5nbGUodmVjMiBzdCx2ZWMyIGJsLCB2ZWMyIHRyLCBmbG9hdCB3KSB7XFxuICAgIHZlYzIgYmx2ID0gc21vb3Roc3RlcChibCwgYmwrdmVjMih3KSwgc3QpO1xcbiAgICB2ZWMyIHRydiA9IHNtb290aHN0ZXAodmVjMigxLjApLXRyLCB2ZWMyKDEuMCktdHIrdmVjMih3KSwgMS4wLXN0KTtcXG4gICAgcmV0dXJuIGJsdi54KmJsdi55ICogdHJ2LngqdHJ2Lnk7XFxufVxcblxcbmZsb2F0IHNtb290aENpcmNsZSh2ZWMyIHN0LCB2ZWMyIGMsIGZsb2F0IHIsIGZsb2F0IHcpIHtcXG4gICAgZmxvYXQgZCA9IGxlbmd0aChzdCAtIGMpO1xcbiAgICByZXR1cm4gc21vb3Roc3RlcChyK3csci13LGQpO1xcbn1cXG5cXG5mbG9hdCBwb2x5Z29uKHZlYzIgc3QsIHZlYzIgYywgZmxvYXQgciwgaW50IE4pIHtcXG4gICBcXHRmbG9hdCBhID0gYXRhbihzdC55LHN0LngpO1xcbiAgIFxcdGZsb2F0IHMgPSBQSSoyLjAvZmxvYXQoTik7XFxuICAgXFx0ZmxvYXQgZCA9ICBjb3MoZmxvb3IoLjUrYS9zKSAqIHMgLSBhKSAqIGRpc3RhbmNlKHN0LGMpICogMi4wO1xcbiAgICByZXR1cm4gMS4wLXNtb290aHN0ZXAoci0wLjAxLHIsZCk7XFxufVxcblxcbm1hdDIgcm90YXRlMmQoZmxvYXQgYSkge1xcbiAgICByZXR1cm4gbWF0Mihjb3MoYSksIC1zaW4oYSksIHNpbihhKSwgY29zKGEpKTtcXG59XFxuXFxudmVjMiByYW5kb20yKHZlYzIgc3Qpe1xcbiAgICBzdCA9IHZlYzIoIGRvdChzdCx2ZWMyKDEyNy4xLDMxMS43KSksIGRvdChzdCx2ZWMyKDI2OS41LDE4My4zKSkgKTtcXG4gICAgcmV0dXJuIGZyYWN0KHNpbihzdCkqNDM3NTguNTQ1MzEyMyk7XFxufVxcblxcbmZsb2F0IHJhbmRvbTJmKHZlYzIgc3Qpe1xcbiAgICBmbG9hdCB2ID0gZG90KCBkb3Qoc3QsdmVjMigxMjcuMSwzMTEuNykpLCBkb3Qoc3QsdmVjMigyNjkuNSwxODMuMykpICk7XFxuICAgIHJldHVybiBmcmFjdChzaW4odikqNDM3NTguNTQ1MzEyMyk7XFxufVxcblxcbnZlYzIgcmFuZG9tMmEodmVjMiBzdCl7XFxuICAgIHN0ID0gdmVjMiggZG90KHN0LHZlYzIoMTI3LjEsMzExLjcpKSxcXG4gICAgICAgICAgICAgIGRvdChzdCx2ZWMyKDI2OS41LDE4My4zKSkgKTtcXG4gICAgcmV0dXJuIC0xLjAgKyAyLjAqZnJhY3Qoc2luKHN0KSo0Mzc1OC41NDUzMTIzKTtcXG59XFxuXFxudmVjMyByYW5kb20zYSh2ZWMzIHN0KXtcXG4gICAgc3QgPSB2ZWMzKCBkb3Qoc3QsdmVjMygxMjcuMSwzMTEuNywxMjMuNikpLFxcbiAgICAgICAgICAgICAgIGRvdChzdCx2ZWMzKDI2OS41LDE4My4zLDk3LjEpKSxcXG4gICAgICAgICAgICAgICAgZG90KHN0LHZlYzMoMTQ2Ljg3LDI0NS4xMiw0OC43KSlcXG4gICAgICAgICAgICAgICAgKTtcXG4gICAgcmV0dXJuIC0xLjAgKyAyLjAqZnJhY3Qoc2luKHN0KSo0Mzc1OC41NDUzMTIzKTtcXG59XFxuXFxuZmxvYXQgbm9pc2UoaW4gdmVjMiBwKSB7XFxuXFxuICAgIHZlYzIgaSA9IGZsb29yKHApO1xcbiAgICB2ZWMyIGYgPSBmcmFjdChwKTtcXG5cXG4gICAgdmVjMiB1ID0gZipmKigzLjAtMi4wKmYpO1xcblxcbiAgICByZXR1cm4gbWl4KCBtaXgoIGRvdCggcmFuZG9tMmEoaSArIHZlYzIoMC4wLDAuMCkgKSwgZiAtIHZlYzIoMC4wLDAuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTJhKGkgKyB2ZWMyKDEuMCwwLjApICksIGYgLSB2ZWMyKDEuMCwwLjApICksIHUueCksXFxuICAgICAgICAgICAgICAgIG1peCggZG90KCByYW5kb20yYShpICsgdmVjMigwLjAsMS4wKSApLCBmIC0gdmVjMigwLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tMmEoaSArIHZlYzIoMS4wLDEuMCkgKSwgZiAtIHZlYzIoMS4wLDEuMCkgKSwgdS54KSwgdS55KTtcXG5cXG5cXG59XFxuXFxuZmxvYXQgbm9pc2UoaW4gdmVjMyBwKSB7XFxuXFxuICAgIHZlYzMgaSA9IGZsb29yKHApO1xcbiAgICB2ZWMzIGYgPSBmcmFjdChwKTtcXG5cXG4gICAgdmVjMyB1ID0gZipmKigzLjAtMi4wKmYpO1xcblxcbiAgICAgICAgcmV0dXJuIG1peChcXG4gICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMC4wLDAuMCwwLjApICksIGYgLSB2ZWMzKDAuMCwwLjAsMC4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMS4wLDAuMCwwLjApICksIGYgLSB2ZWMzKDEuMCwwLjAsMC4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHUueCksXFxuICAgICAgICAgICAgICAgICAgICBtaXgoXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygwLjAsMS4wLDAuMCkgKSwgZiAtIHZlYzMoMC4wLDEuMCwwLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygxLjAsMS4wLDAuMCkgKSwgZiAtIHZlYzMoMS4wLDEuMCwwLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgdS54KSxcXG4gICAgICAgICAgICAgICAgICAgIHUueSksXFxuICAgICAgICAgICAgICAgIG1peChcXG4gICAgICAgICAgICAgICAgICAgIG1peChcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDAuMCwwLjAsMS4wKSApLCBmIC0gdmVjMygwLjAsMC4wLDEuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDEuMCwwLjAsMS4wKSApLCBmIC0gdmVjMygxLjAsMC4wLDEuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB1LngpLFxcbiAgICAgICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMC4wLDEuMCwxLjApICksIGYgLSB2ZWMzKDAuMCwxLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMS4wLDEuMCwxLjApICksIGYgLSB2ZWMzKDEuMCwxLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHUueCksXFxuICAgICAgICAgICAgICAgICAgICB1LnkpLFxcbiAgICAgICAgICAgICAgICB1LnpcXG4gICAgICAgICAgICAgICApO1xcbn1cXG5cXG5mbG9hdCB1c25vaXNlKHZlYzMgcCkge1xcbiAgICByZXR1cm4gKG5vaXNlKHApICsgMS4wKSAvMi4wO1xcbn1cXG5cXG5mbG9hdCBjZWxsTm9pc2UodmVjMiBwKSB7XFxuICAgIHZlYzIgaSA9IGZsb29yKHApO1xcbiAgICB2ZWMyIGYgPSBmcmFjdChwKTtcXG5cXG4gICAgZmxvYXQgbV9kaXN0ID0gMS4wO1xcblxcbiAgICBmb3IoaW50IHk9LTE7IHk8PTE7IHkrKykge1xcbiAgICAgICAgZm9yKGludCB4PS0xOyB4PD0xOyB4KyspIHtcXG4gICAgICAgICAgICB2ZWMyIG5laWdoYm91cj12ZWMyKGZsb2F0KHgpLCBmbG9hdCh5KSk7XFxuICAgICAgICAgICAgdmVjMiBwb2ludCA9IHJhbmRvbTIoaSArIG5laWdoYm91cik7XFxuXFxuICAgICAgICAgICAgdmVjMiBkaWZmPSBuZWlnaGJvdXIgKyBwb2ludCAtIGY7XFxuICAgICAgICAgICAgZmxvYXQgZGlzdCA9IGxlbmd0aChkaWZmKTtcXG4gICAgICAgICAgICBtX2Rpc3QgPSBtaW4obV9kaXN0LGRpc3QpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJldHVybiBtX2Rpc3Q7XFxufVxcblxcblxcbnZlYzMgdmVyb25pTm9pc2UodmVjMiBzdCkge1xcbiAgICB2ZWMyIHAgPSBmbG9vcihzdCk7XFxuICAgIHZlYzIgZiA9IGZyYWN0KHN0KTtcXG5cXG4gICAgZmxvYXQgcmVzID0gMi4wO1xcbiAgICB2ZWMyIG1fcG9pbnQ9dmVjMigxLjAsIDEuMCksXFxuICAgICAgICBtcj12ZWMyKDAsMCksXFxuICAgICAgICBtYiA9IHZlYzIoMCwwKTtcXG5cXG4gICAgZm9yKGludCBqPS0xOyBqPD0xOyBqKyspIHtcXG4gICAgICAgIGZvcihpbnQgaT0tMTsgaTw9MTsgaSsrKSB7XFxuICAgICAgICAgICAgdmVjMiBiPXZlYzIoZmxvYXQoaSksIGZsb2F0KGopKTtcXG4gICAgICAgICAgICB2ZWMyIHBvaW50ID0gcCArIGI7XFxuICAgICAgICAgICAgdmVjMiByID0gYiArIHJhbmRvbTIocG9pbnQpIC0gZjtcXG5cXG4gICAgICAgICAgICBmbG9hdCBkID0gZG90KHIscik7XFxuICAgICAgICAgICAgaWYgKGQgPCByZXMpIHtcXG4gICAgICAgICAgICAgICAgcmVzID0gZDtcXG4gICAgICAgICAgICAgICAgbV9wb2ludCA9IHBvaW50O1xcbiAgICAgICAgICAgICAgICBtcj1yO1xcbiAgICAgICAgICAgICAgICBtYj1iO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICByZXMgPSA4LjA7XFxuICAgIGZvcihpbnQgaj0tMjsgajw9MjsgKytqKSB7XFxuICAgICAgICBmb3IoaW50IGk9LTI7IGk8PTI7ICsraSkge1xcblxcbiAgICAgICAgICAgIHZlYzIgYiA9IG1iICsgdmVjMihmbG9hdChpKSxmbG9hdChqKSk7XFxuXFxuICAgICAgICAgICAgdmVjMiByID0gYiArIHJhbmRvbTIocCArIGIpIC0gZjtcXG5cXG4gICAgICAgICAgICBmbG9hdCBkID0gZG90KDAuNSAqIChtcityKSwgbm9ybWFsaXplKHIgLSBtcikpO1xcblxcbiAgICAgICAgICAgIHJlcyA9IG1pbihyZXMsIGQpO1xcblxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJldHVybiB2ZWMzKG1fcG9pbnQueHksIHJlcyk7XFxufVxcblxcbmNvbnN0IGludCBvY3RhdmVzID0gNDtcXG5cXG5mbG9hdCBmYm0odmVjMiBwLCBmbG9hdCBILCBmbG9hdCBsYWN1bmFyaXR5KSB7XFxuICAgIGZsb2F0IHZhbHVlLCBmcmVxdWVuY3k7XFxuICAgIGZsb2F0IGV4cG9uZW50O1xcblxcbiAgICB2YWx1ZSA9IDAuMDtcXG4gICAgZnJlcXVlbmN5ID0gMS4wO1xcblxcbiAgICBmb3IoaW50IGk9MDsgaTxvY3RhdmVzOyArK2kpIHtcXG5cXG4gICAgICAgIGV4cG9uZW50ID0gcG93KGZyZXF1ZW5jeSwgLUgpO1xcblxcbiAgICAgICAgdmFsdWU9dmFsdWUgKyAobm9pc2UocCkgKiBleHBvbmVudCk7XFxuXFxuICAgICAgICBwPXAqbGFjdW5hcml0eTtcXG5cXG4gICAgICAgIGZyZXF1ZW5jeT1mcmVxdWVuY3kgKiBsYWN1bmFyaXR5O1xcbiAgICB9XFxuXFxuICAgIHJldHVybiB2YWx1ZTtcXG59XFxuXFxuZmxvYXQgZmJtKHZlYzMgcCwgZmxvYXQgSCwgZmxvYXQgbGFjdW5hcml0eSkge1xcbiAgICBmbG9hdCB2YWx1ZSwgZnJlcXVlbmN5O1xcbiAgICBmbG9hdCBleHBvbmVudDtcXG5cXG4gICAgdmFsdWUgPSAwLjA7XFxuICAgIGZyZXF1ZW5jeSA9IDEuMDtcXG5cXG4gICAgZm9yKGludCBpPTA7IGk8b2N0YXZlczsgKytpKSB7XFxuXFxuICAgICAgICBleHBvbmVudCA9IHBvdyhmcmVxdWVuY3ksIC1IKTtcXG5cXG4gICAgICAgIHZhbHVlPXZhbHVlICsgKG5vaXNlKHApICogZXhwb25lbnQpO1xcblxcbiAgICAgICAgcD1wKmxhY3VuYXJpdHk7XFxuXFxuICAgICAgICBmcmVxdWVuY3k9ZnJlcXVlbmN5ICogbGFjdW5hcml0eTtcXG4gICAgfVxcblxcbiAgICByZXR1cm4gdmFsdWU7XFxufVxcblxcbmZsb2F0IHJpZGdlZE11bHRpZnJhY3RhbCh2ZWMzIHAsIGZsb2F0IEgsIGZsb2F0IGxhY3VuYXJpdHksIGZsb2F0IG9mZnNldCkge1xcbiAgICBmbG9hdCByZXN1bHQsIGZyZXF1ZW5jeSwgcmVtYWluZGVyO1xcbiAgICBmbG9hdCB3ZWlnaHQsIHNpZ25hbCwgZXhwb25lbnQ7XFxuXFxuICAgIGZsb2F0IGdhaW4gPSAyLjA7XFxuXFxuICAgIHJlc3VsdCA9IDEuMDtcXG4gICAgZnJlcXVlbmN5ID0gMS4wO1xcblxcbiAgICBzaWduYWwgPSBub2lzZShwKTtcXG4gICAgaWYgKHNpZ25hbCA8IDAuMCkgc2lnbmFsID0gLXNpZ25hbDtcXG4gICAgc2lnbmFsID0gb2Zmc2V0LXNpZ25hbDtcXG4gICAgc2lnbmFsICo9c2lnbmFsO1xcbiAgICByZXN1bHQgPSBzaWduYWw7XFxuICAgIHdlaWdodCA9IDEuMDtcXG5cXG5cXG4gICAgZm9yKGludCBpPTE7IGk8b2N0YXZlczsgKytpKSB7XFxuICAgICAgICBmcmVxdWVuY3k9ZnJlcXVlbmN5KmxhY3VuYXJpdHk7XFxuICAgICAgICBwPXAqbGFjdW5hcml0eTtcXG5cXG4gICAgICAgIHdlaWdodCA9IHNpZ25hbCAqIGdhaW47XFxuICAgICAgICBpZiAod2VpZ2h0PjEuMCkgd2VpZ2h0PTEuMDtcXG4gICAgICAgIGlmICh3ZWlnaHQgPCAwLjAgKSB3ZWlnaHQ9IDAuMDtcXG5cXG4gICAgICAgIHNpZ25hbCA9IG5vaXNlKHApO1xcblxcbiAgICAgICAgaWYgKHNpZ25hbCA8MC4wKSBzaWduYWwgPSAtc2lnbmFsO1xcbiAgICAgICAgc2lnbmFsID0gb2Zmc2V0IC0gc2lnbmFsO1xcbiAgICAgICAgc2lnbmFsICo9c2lnbmFsO1xcbiAgICAgICAgc2lnbmFsICo9d2VpZ2h0O1xcbiAgICAgICAgcmVzdWx0ICs9IHNpZ25hbCAqIHBvdyhmcmVxdWVuY3ksLUgpO1xcblxcbiAgICB9XFxuXFxuICAgIHJldHVybiByZXN1bHQ7XFxufVxcblxcbnVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247XFxudW5pZm9ybSB2ZWMyIHVfbW91c2U7XFxudW5pZm9ybSBmbG9hdCB1X3RpbWU7XFxuXFxuXFxuXFxudm9pZCBmdW5jdGlvbjEoKXtcXG5cXHR2ZWMyIHN0ID0gZ2xfRnJhZ0Nvb3JkLnh5L3VfcmVzb2x1dGlvbjtcXG5cXG5cXHR2ZWMyIG9mZj12ZWMyKDAuNSktc3Q7XFxuXFx0ZmxvYXQgYW5nbGUgPSBhdGFuKG9mZi55LG9mZi54KTtcXG5cXG5cXHRmbG9hdCBkMiA9IG9mZi54Km9mZi54K29mZi55Km9mZi55O1xcblxcdGZsb2F0IGQgPSBsZW5ndGgob2ZmKSAqIDIuMDtcXG5cXG5cXHRmbG9hdCBvZmZzZXQgPSAwLjIgKyAoY29zKHVfdGltZSAqIDEuMCkgLyA4LjApO1xcbiAgICB2ZWMzIHIgPSAgY3ViaWNQdWxzZShvZmZzZXQsMC41LGQpICogaHNiMnJnYih2ZWMzKChhbmdsZS9QSTIpKzAuNSwgZCwgMS4wKSk7XFxuXFxuICAgIGZsb2F0IG9mZnNldDIgPSAwLjIgKyAoY29zKHVfdGltZSAqIDEuMSkgLyA4LjApO1xcbiAgICB2ZWMzIGcgPSAgY3ViaWNQdWxzZShvZmZzZXQyLDAuNSxkKSAqIGhzYjJyZ2IodmVjMygoYW5nbGUvUEkyKSswLjE1LCBkLCAxLjApKTtcXG5cXG4gICAgZmxvYXQgb2Zmc2V0MyA9IDAuMiArIChjb3ModV90aW1lICogMC45KSAvIDguMCk7XFxuICAgIHZlYzMgYiA9ICBjdWJpY1B1bHNlKG9mZnNldDMsMC41LGQpICogaHNiMnJnYih2ZWMzKChhbmdsZS9QSTIpKzAuNjUsIGQsIDEuMCkpO1xcblxcbiAgICB2ZWMzIGNvbG9yID0gciArIGcrICsgYjsvL3ZlYzMoMCwwLDApO1xcblxcblxcblxcdGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsMS4wKTtcXG59XFxuXFxuXFxudmVjMyBmdW5jdGlvbjIodmVjMiBzdCkge1xcblxcdHN0PXZlYzIoMC41KSAtIHN0O1xcblxcdC8vZmxvYXQgcm90ID0gdV90aW1lIC8gMi41O1xcblxcdHZlYzIgc3QyID0gcm90YXRlMmQoLXVfdGltZSAvIDIuNSkgKiBzdDtcXG5cXG4gICBcXHRmbG9hdCBhID0gYXRhbihzdDIueSxzdDIueCk7XFxuICAgXFx0ZmxvYXQgZCA9IGxlbmd0aChzdCk7XFxuXFxuICAgXFx0dmVjMyByZ2IgPSAgaHNiMnJnYih2ZWMzKChhKjMuMC9QSTIpKzAuMTUsIGQsIDEuMCkpO1xcblxcbiAgIFxcdC8vZmxvYXQgY3ljbGVzID0gKHNpbihkKjEwMC4wKSArIDEuMCkgLzIuMDtcXG5cXG4gICBcXHQvL2Zsb2F0IHJpbmdzID0gMS4wLXNtb290aHN0ZXAoMC45OSwxLjAsZCk7XFxuXFxuICAgIGZsb2F0IHRyaWFuZ2xlID0gcG9seWdvbihzdDIsIHZlYzIoMCwwKSwgMC41LCAzKTtcXG5cXG4gICAgdmVjMyBjb2xvciA9XFxuICAgICAgICAgICAgdmVjMygxKSAqIHRyaWFuZ2xlICogcmdiXFxuICAgICAgICAgO1xcbiAgICAgICAgOzsrKHZlYzMoc21vb3RoUmVjdGFuZ2xlKHN0MiwgdmVjMigtMC45LC0wLjUpLCB2ZWMyKC0wLjYsIC0wLjIpLCAwLjAwMjUpICkgKVxcbiAgICAgICAgO1xcblxcbiAgICByZXR1cm4gY29sb3I7XFxuXFxufVxcblxcbnZlYzMgZnVuY3Rpb24zKHZlYzIgc3QpIHtcXG5cXG5cXHQvL3ZlYzIgZnN0ID0gZnJhY3Qoc3QgKiAyLjApO1xcblxcblxcdHZlYzMgY29sb3I9dmVjMygwKTtcXG5cXG4gICAgaW50IE4gPSA4O1xcbiAgIFxcdGZsb2F0IGEgPSBhdGFuKHN0Lnksc3QueCk7XFxuICAgXFx0ZmxvYXQgcyA9IFBJKjIuMC9mbG9hdChOKTtcXG5cXG5cXHRmbG9hdCBuPW5vaXNlKHZlYzIoYSoxMC4wLGErMTAuMCkgKiAxMC4wKSAvIDEwLjA7XFxuXFxuICAgXFx0ZmxvYXQgZCA9ICBjb3MoZmxvb3IoLjUrYS9zKSAqIHMgLSBhKSAqIGRpc3RhbmNlKHN0LHZlYzIoMCwwKSkgICogNC4wICArIG47XFxuICAgIGZsb2F0IHBvbHlnb24gPSAxLjAtc21vb3Roc3RlcCgwLjk5LCAxLjAsIGQpO1xcblxcblxcdGNvbG9yPXZlYzMoMS4wLDEuMCwxLjApICogcG9seWdvbjtcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXHRyZXR1cm4gY29sb3I7XFxufVxcblxcblxcbnZlYzMgbm9pc2VUZXN0KHZlYzIgc3QpIHtcXG5cXG4gICAgZmxvYXQgZGlzdGFuY2UgPSBsZW5ndGgoc3QpO1xcblxcbiAgICAvL3N0LnggKz0gY29zKHVfdGltZS8xLjApIC8gMTAuMDtcXG4gICAgLy9zdC55ICs9IHNpbih1X3RpbWUvMS4wKSAvIDEwLjA7XFxuXFxuICAgIHN0PXN0KjEwLjA7XFxuXFxuXFxuLy8gICAgc3QgPSB2ZWMyKDEuMCwgMS4wKSAtIGxlbmd0aChzdCkgKiBzdDtcXG5cXG5cXG5cXG4gICAgdmVjMyBuID0gdmVyb25pTm9pc2Uoc3QpO1xcblxcbiAgICB2ZWMyIHAgPSBuLnh5O1xcbiAgICBmbG9hdCBkaXN0ID0gbi56O1xcblxcbiAgICBmbG9hdCBkID0gYWJzKGNvcyhkaXN0ICogNTAuMCkpICogZGlzdDtcXG5cXG4gICAgZmxvYXQgYSA9IGF0YW4ocC55LHAueCk7XFxuXFxuXFxuICAgIHZlYzMgY29sb3IgPSBoc2IycmdiKHZlYzMoYSAvIDYuMCAsIDEuMCwgMS4wKSk7XFxuXFxuICAgIC8vY29sb3I9Y29sb3IgKiAoMS4wLXNtb290aHN0ZXAoMC4wMjUsIDAuMDc1LCBkaXN0KSk7XFxuICAgIC8vY29sb3I9Y29sb3IgKiAoKHNtb290aHN0ZXAoMC45NzUsIDAuOTUsIDEuMC1kaXN0KSkpO1xcbiAgICAvL2NvbG9yPWNvbG9yICsgKHZlYzMoLjcsMC43LC4zKSAqICgxLjAtc21vb3Roc3RlcCgwLjk4NSwgMC45NzUsIDEuMC1kaXN0KSkpO1xcblxcblxcblxcbiAgICByZXR1cm4gY29sb3I7XFxuXFxufVxcblxcbnZlYzMgZmJtVGVzdCh2ZWMyIHApIHtcXG5cXG4gICAgZmxvYXQgdiA9IGZibSh2ZWMzKHAsIHVfdGltZS8yLjApLCAxLjAsIDIuMCk7XFxuXFxuICAgIHY9KHYrMS4wKSAvIDIuMDtcXG4gICAgdmVjMyBjb2xvciA9IHZlYzModix2LHYpO1xcblxcbiAgICByZXR1cm4gY29sb3I7XFxuXFxufVxcblxcbnZlYzMgcmlkZ2VkVGVzdCh2ZWMyIHApIHtcXG5cXG4gICAgZmxvYXQgdjtcXG5cXG4gICAgZmxvYXQgdnNjYWxlID0gcC55KzEuMDtcXG4gICAgdnNjYWxlPXZzY2FsZSp2c2NhbGU7XFxuXFxuICAgIHZlYzMgcHAgPSB2ZWMzKHAqNS4wLCB1X3RpbWUvMC43NSk7XFxuICAgIHBwLnkgPSBwcC55ICsgdV90aW1lICogMi4wO1xcblxcbiAgICB2PSByaWRnZWRNdWx0aWZyYWN0YWwocHAsIDAuMjUsIDIuMSwgMC43KVxcbiAgICAgICAgKiB2c2NhbGVcXG4gICAgICAgICsgKHAueSAvIDEuMCk7XFxuXFxuICAgIHZlYzMgY29sb3I7XFxuXFxuICAgIGNvbG9yID1cXG4gICAgICAgIChzbW9vdGhzdGVwKDAuMCwgMC4zLCB2KSAqIHZlYzMoMSwwLDApKVxcbiAgICAgICAgKyAoc21vb3Roc3RlcCgwLjMsIDAuNiwgdikgKiB2ZWMzKDEsMCwwKSlcXG4gICAgICAgICsgKHNtb290aHN0ZXAoMC42LCAxLjAsIHYpICogdmVjMygwLDEsMCkpXFxuICAgICAgICA7XFxuXFxuXFxuICAgIHJldHVybiBjb2xvcjtcXG5cXG59XFxuXFxudm9pZCBtYWluKCkge1xcblxcdHZlYzIgc3QgPSBnbF9GcmFnQ29vcmQueHkvdV9yZXNvbHV0aW9uO1xcblxcblxcdHN0PXZlYzIoMC41KSAtIHN0O1xcblxcblxcdC8vc3QgPSByb3RhdGUyZCgtdV90aW1lIC8gMi41KSAqIHN0O1xcblxcbiAgICBnbF9GcmFnQ29sb3I9dmVjNChyaWRnZWRUZXN0KHN0KSwgMCk7XFxuXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9mcmFnbWVudC5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9