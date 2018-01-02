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

var _shaders = __webpack_require__(14);

var _shaders2 = _interopRequireDefault(_shaders);

var _mappings = __webpack_require__(19);

var _mappings2 = _interopRequireDefault(_mappings);

var _styles = __webpack_require__(20);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultShader = Object.keys(_shaders2.default)[0];

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

  var label = document.createElement("label");
  label.innerText = "Select a shader to load ";
  document.documentElement.appendChild(label);

  var dropdown = document.createElement("select");

  var pleaseSelect = document.createElement("option");
  pleaseSelect.innerText = "Select a shader to load...";
  dropdown.appendChild(pleaseSelect);

  Object.keys(_shaders2.default).map(function (shader) {
    var option = document.createElement("option");
    option.innerText = shader;
    option.value = shader;
    return option;
  }).forEach(function (option) {
    return dropdown.appendChild(option);
  });

  document.documentElement.appendChild(dropdown);

  var sandbox = void 0;

  var mapping = _mappings2.default.sphere;

  function loadShader(shader) {

    if (dropdown.value !== shader) {
      dropdown.value = shader;
    }

    if (sandbox) sandbox.destroy();
    sandbox = undefined;

    sandbox = new _GlslCanvas2.default(canvas);

    sandbox.setUniform('u_resolution', canvas.width, canvas.height);

    var shaderCode = _shaders2.default[shader];

    shaderCode = shaderCode.replace("//inject", mapping);

    sandbox.load(shaderCode);
  }

  dropdown.addEventListener("change", function (e) {
    loadShader(dropdown.value);
  });

  loadShader(defaultShader);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sun = __webpack_require__(15);

var _sun2 = _interopRequireDefault(_sun);

var _sphere = __webpack_require__(16);

var _sphere2 = _interopRequireDefault(_sphere);

var _fbm = __webpack_require__(17);

var _fbm2 = _interopRequireDefault(_fbm);

var _fire = __webpack_require__(18);

var _fire2 = _interopRequireDefault(_fire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  sun: _sun2.default,
  fire: _fire2.default,
  fbm: _fbm2.default,

  sphere: _sphere2.default

};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n\nconst float PI = 3.1415926535897932384626433832795;\nconst float PI2 = 6.28318530718;\n\nfloat almostIdentity( float x, float m, float n )\n{\n    if( x>m ) return x;\n\n    float a = 2.0*n - m;\n    float b = 2.0*m - 3.0*n;\n    float t = x/m;\n\n    return (a*t + b)*t*t + n;\n}\n\n\nfloat impulse( float k, float x )\n{\n    float h = k*x;\n    return h*exp(1.0-h);\n}\n\nfloat cubicPulse( float c, float w, float x )\n{\n    x = abs(x - c);\n    if( x>w ) return 0.0;\n    x /= w;\n    return 1.0 - x*x*(3.0-2.0*x);\n}\n\nfloat expStep( float x, float k, float n )\n{\n    return exp( -k*pow(x,n) );\n}\n\n\nfloat gain(float x, float k)\n{\n    float a = 0.5*pow(2.0*((x<0.5)?x:1.0-x), k);\n    return (x<0.5)?a:1.0-a;\n}\n\n\nfloat parabola( float x, float k )\n{\n    return pow( 4.0*x*(1.0-x), k );\n}\n\nfloat pcurve( float x, float a, float b )\n{\n    float k = pow(a+b,a+b) / (pow(a,a)*pow(b,b));\n    return k * pow( x, a ) * pow( 1.0-x, b );\n}\n\nvec3 rgb2hsb( in vec3 c ){\n    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    vec4 p = mix(vec4(c.bg, K.wz),\n                 vec4(c.gb, K.xy),\n                 step(c.b, c.g));\n    vec4 q = mix(vec4(p.xyw, c.r),\n                 vec4(c.r, p.yzx),\n                 step(p.x, c.r));\n    float d = q.x - min(q.w, q.y);\n    float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),\n                d / (q.x + e),\n                q.x);\n}\n\n//  Function from Iñigo Quiles\n//  https://www.shadertoy.com/view/MsS3Wc\nvec3 hsb2rgb( in vec3 c ){\n    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),\n                             6.0)-3.0)-1.0,\n                     0.0,\n                     1.0 );\n    rgb = rgb*rgb*(3.0-2.0*rgb);\n    return c.z * mix(vec3(1.0), rgb, c.y);\n}\n\nfloat rectangle(vec2 st,vec2 bl, vec2 tr) {\n    vec2 blv = step(bl, st);\n    vec2 trv = step(vec2(1.0)-tr, 1.0-st);\n    return blv.x*blv.y * trv.x*trv.y;\n}\n\nfloat smoothRectangle(vec2 st,vec2 bl, vec2 tr, float w) {\n    vec2 blv = smoothstep(bl, bl+vec2(w), st);\n    vec2 trv = smoothstep(vec2(1.0)-tr, vec2(1.0)-tr+vec2(w), 1.0-st);\n    return blv.x*blv.y * trv.x*trv.y;\n}\n\nfloat smoothCircle(vec2 st, vec2 c, float r, float w) {\n    float d = length(st - c);\n    return smoothstep(r+w,r-w,d);\n}\n\nfloat polygon(vec2 st, vec2 c, float r, int N) {\n   \tfloat a = atan(st.y,st.x);\n   \tfloat s = PI*2.0/float(N);\n   \tfloat d =  cos(floor(.5+a/s) * s - a) * distance(st,c) * 2.0;\n    return 1.0-smoothstep(r-0.01,r,d);\n}\n\nmat2 rotate2d(float a) {\n    return mat2(cos(a), -sin(a), sin(a), cos(a));\n}\n\nvec2 random2(vec2 st){\n    st = vec2( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );\n    return fract(sin(st)*43758.5453123);\n}\n\nfloat random2f(vec2 st){\n    float v = dot( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );\n    return fract(sin(v)*43758.5453123);\n}\n\nvec2 random2a(vec2 st){\n    st = vec2( dot(st,vec2(127.1,311.7)),\n              dot(st,vec2(269.5,183.3)) );\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\n}\n\nvec3 random3a(vec3 st){\n    st = vec3( dot(st,vec3(127.1,311.7,123.6)),\n               dot(st,vec3(269.5,183.3,97.1)),\n                dot(st,vec3(146.87,245.12,48.7))\n                );\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\n}\n\nfloat noise(in vec2 p) {\n\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix( mix( dot( random2a(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),\n                     dot( random2a(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),\n                mix( dot( random2a(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),\n                     dot( random2a(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);\n\n\n}\n\nfloat noise(in vec3 p) {\n\n    vec3 i = floor(p);\n    vec3 f = fract(p);\n\n    vec3 u = f*f*(3.0-2.0*f);\n\n        return mix(\n                mix(\n                    mix(\n                        dot( random3a(i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ),\n                        dot( random3a(i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ),\n                        u.x),\n                    mix(\n                        dot( random3a(i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ),\n                        dot( random3a(i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ),\n                        u.x),\n                    u.y),\n                mix(\n                    mix(\n                        dot( random3a(i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ),\n                        dot( random3a(i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ),\n                        u.x),\n                    mix(\n                        dot( random3a(i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ),\n                        dot( random3a(i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ),\n                        u.x),\n                    u.y),\n                u.z\n               );\n}\n\nfloat usnoise(vec3 p) {\n    return (noise(p) + 1.0) /2.0;\n}\n\nfloat cellNoise(vec2 p) {\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n\n    float m_dist = 1.0;\n\n    for(int y=-1; y<=1; y++) {\n        for(int x=-1; x<=1; x++) {\n            vec2 neighbour=vec2(float(x), float(y));\n            vec2 point = random2(i + neighbour);\n\n            vec2 diff= neighbour + point - f;\n            float dist = length(diff);\n            m_dist = min(m_dist,dist);\n        }\n    }\n\n    return m_dist;\n}\n\n\nvec3 veroniNoise(vec2 st) {\n    vec2 p = floor(st);\n    vec2 f = fract(st);\n\n    float res = 2.0;\n    vec2 m_point=vec2(1.0, 1.0),\n        mr=vec2(0,0),\n        mb = vec2(0,0);\n\n    for(int j=-1; j<=1; j++) {\n        for(int i=-1; i<=1; i++) {\n            vec2 b=vec2(float(i), float(j));\n            vec2 point = p + b;\n            vec2 r = b + random2(point) - f;\n\n            float d = dot(r,r);\n            if (d < res) {\n                res = d;\n                m_point = point;\n                mr=r;\n                mb=b;\n            }\n        }\n    }\n\n    res = 8.0;\n    for(int j=-2; j<=2; ++j) {\n        for(int i=-2; i<=2; ++i) {\n\n            vec2 b = mb + vec2(float(i),float(j));\n\n            vec2 r = b + random2(p + b) - f;\n\n            float d = dot(0.5 * (mr+r), normalize(r - mr));\n\n            res = min(res, d);\n\n        }\n    }\n\n    return vec3(m_point.xy, res);\n}\n\nconst int octaves = 4;\n\nfloat fbm(vec2 p, float H, float lacunarity) {\n    float value, frequency;\n    float exponent;\n\n    value = 0.0;\n    frequency = 1.0;\n\n    for(int i=0; i<octaves; ++i) {\n\n        exponent = pow(frequency, -H);\n\n        value=value + (noise(p) * exponent);\n\n        p=p*lacunarity;\n\n        frequency=frequency * lacunarity;\n    }\n\n    return value;\n}\n\nfloat fbm(vec3 p, float H, float lacunarity) {\n    float value, frequency;\n    float exponent;\n\n    value = 0.0;\n    frequency = 1.0;\n\n    for(int i=0; i<octaves; ++i) {\n\n        exponent = pow(frequency, -H);\n\n        value=value + (noise(p) * exponent);\n\n        p=p*lacunarity;\n\n        frequency=frequency * lacunarity;\n    }\n\n    return value;\n}\n\nfloat ridgedMultifractal(vec3 p, float H, float lacunarity, float offset) {\n    float result, frequency, remainder;\n    float weight, signal, exponent;\n\n    float gain = 2.0;\n\n    result = 1.0;\n    frequency = 1.0;\n\n    signal = noise(p);\n    if (signal < 0.0) signal = -signal;\n    signal = offset-signal;\n    signal *=signal;\n    result = signal;\n    weight = 1.0;\n\n\n    for(int i=1; i<octaves; ++i) {\n        frequency=frequency*lacunarity;\n        p=p*lacunarity;\n\n        weight = signal * gain;\n        if (weight>1.0) weight=1.0;\n        if (weight < 0.0 ) weight= 0.0;\n\n        signal = noise(p);\n\n        if (signal <0.0) signal = -signal;\n        signal = offset - signal;\n        signal *=signal;\n        signal *=weight;\n        result += signal * pow(frequency,-H);\n\n    }\n\n    return result;\n}\n\nbool sphere(vec2 p, out vec3 hit) {\n\n    float dist = 1.0 - p.x*p.x - p.y*p.y;\n\n    if (dist < 0.0) return false;\n\n    float z=sqrt( dist);\n\n    hit = vec3(p, z);\n\n    return true;\n\n}\n\nbool cylinder(vec2 p, out vec3 hit) {\n    float dist = 1.0 - p.x*p.x;\n\n    if (dist < 0.0) return false;\n\n    float z=sqrt( dist);\n\n    hit = vec3(p, z);\n\n    return true;\n}\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\n\n//inject\n\nvec3 test(vec3 p) {\n\n    float v;\n\n    vec3 n = normalize(p);\n\n    vec2 uv = vec2( 0.5+ (atan( n.x, n.z) / PI), 0.5- asin(n.y) / PI) ;\n\n    vec3 pp = vec3(uv*10.0, u_time / 5.0);\n\n    v= fbm(pp, 0.8, 2.5);//, 0.7);\n\n    vec3 color;\n\n    color =\n        mix(vec3(1,0.75,0), vec3(1,1,0) ,v)\n        ;\n\n\n    return color;\n\n}\n\nvoid main() {\n\n    vec3 p;\n\n    if ( mapping(p)) {\n        gl_FragColor=vec4(test(p), 0);\n    }\n\n}"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n\nconst float PI = 3.1415926535897932384626433832795;\nconst float PI2 = 6.28318530718;\n\nfloat almostIdentity( float x, float m, float n )\n{\n    if( x>m ) return x;\n\n    float a = 2.0*n - m;\n    float b = 2.0*m - 3.0*n;\n    float t = x/m;\n\n    return (a*t + b)*t*t + n;\n}\n\n\nfloat impulse( float k, float x )\n{\n    float h = k*x;\n    return h*exp(1.0-h);\n}\n\nfloat cubicPulse( float c, float w, float x )\n{\n    x = abs(x - c);\n    if( x>w ) return 0.0;\n    x /= w;\n    return 1.0 - x*x*(3.0-2.0*x);\n}\n\nfloat expStep( float x, float k, float n )\n{\n    return exp( -k*pow(x,n) );\n}\n\n\nfloat gain(float x, float k)\n{\n    float a = 0.5*pow(2.0*((x<0.5)?x:1.0-x), k);\n    return (x<0.5)?a:1.0-a;\n}\n\n\nfloat parabola( float x, float k )\n{\n    return pow( 4.0*x*(1.0-x), k );\n}\n\nfloat pcurve( float x, float a, float b )\n{\n    float k = pow(a+b,a+b) / (pow(a,a)*pow(b,b));\n    return k * pow( x, a ) * pow( 1.0-x, b );\n}\n\nvec3 rgb2hsb( in vec3 c ){\n    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    vec4 p = mix(vec4(c.bg, K.wz),\n                 vec4(c.gb, K.xy),\n                 step(c.b, c.g));\n    vec4 q = mix(vec4(p.xyw, c.r),\n                 vec4(c.r, p.yzx),\n                 step(p.x, c.r));\n    float d = q.x - min(q.w, q.y);\n    float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),\n                d / (q.x + e),\n                q.x);\n}\n\n//  Function from Iñigo Quiles\n//  https://www.shadertoy.com/view/MsS3Wc\nvec3 hsb2rgb( in vec3 c ){\n    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),\n                             6.0)-3.0)-1.0,\n                     0.0,\n                     1.0 );\n    rgb = rgb*rgb*(3.0-2.0*rgb);\n    return c.z * mix(vec3(1.0), rgb, c.y);\n}\n\nfloat rectangle(vec2 st,vec2 bl, vec2 tr) {\n    vec2 blv = step(bl, st);\n    vec2 trv = step(vec2(1.0)-tr, 1.0-st);\n    return blv.x*blv.y * trv.x*trv.y;\n}\n\nfloat smoothRectangle(vec2 st,vec2 bl, vec2 tr, float w) {\n    vec2 blv = smoothstep(bl, bl+vec2(w), st);\n    vec2 trv = smoothstep(vec2(1.0)-tr, vec2(1.0)-tr+vec2(w), 1.0-st);\n    return blv.x*blv.y * trv.x*trv.y;\n}\n\nfloat smoothCircle(vec2 st, vec2 c, float r, float w) {\n    float d = length(st - c);\n    return smoothstep(r+w,r-w,d);\n}\n\nfloat polygon(vec2 st, vec2 c, float r, int N) {\n   \tfloat a = atan(st.y,st.x);\n   \tfloat s = PI*2.0/float(N);\n   \tfloat d =  cos(floor(.5+a/s) * s - a) * distance(st,c) * 2.0;\n    return 1.0-smoothstep(r-0.01,r,d);\n}\n\nmat2 rotate2d(float a) {\n    return mat2(cos(a), -sin(a), sin(a), cos(a));\n}\n\nvec2 random2(vec2 st){\n    st = vec2( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );\n    return fract(sin(st)*43758.5453123);\n}\n\nfloat random2f(vec2 st){\n    float v = dot( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );\n    return fract(sin(v)*43758.5453123);\n}\n\nvec2 random2a(vec2 st){\n    st = vec2( dot(st,vec2(127.1,311.7)),\n              dot(st,vec2(269.5,183.3)) );\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\n}\n\nvec3 random3a(vec3 st){\n    st = vec3( dot(st,vec3(127.1,311.7,123.6)),\n               dot(st,vec3(269.5,183.3,97.1)),\n                dot(st,vec3(146.87,245.12,48.7))\n                );\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\n}\n\nfloat noise(in vec2 p) {\n\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix( mix( dot( random2a(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),\n                     dot( random2a(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),\n                mix( dot( random2a(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),\n                     dot( random2a(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);\n\n\n}\n\nfloat noise(in vec3 p) {\n\n    vec3 i = floor(p);\n    vec3 f = fract(p);\n\n    vec3 u = f*f*(3.0-2.0*f);\n\n        return mix(\n                mix(\n                    mix(\n                        dot( random3a(i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ),\n                        dot( random3a(i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ),\n                        u.x),\n                    mix(\n                        dot( random3a(i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ),\n                        dot( random3a(i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ),\n                        u.x),\n                    u.y),\n                mix(\n                    mix(\n                        dot( random3a(i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ),\n                        dot( random3a(i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ),\n                        u.x),\n                    mix(\n                        dot( random3a(i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ),\n                        dot( random3a(i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ),\n                        u.x),\n                    u.y),\n                u.z\n               );\n}\n\nfloat usnoise(vec3 p) {\n    return (noise(p) + 1.0) /2.0;\n}\n\nfloat cellNoise(vec2 p) {\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n\n    float m_dist = 1.0;\n\n    for(int y=-1; y<=1; y++) {\n        for(int x=-1; x<=1; x++) {\n            vec2 neighbour=vec2(float(x), float(y));\n            vec2 point = random2(i + neighbour);\n\n            vec2 diff= neighbour + point - f;\n            float dist = length(diff);\n            m_dist = min(m_dist,dist);\n        }\n    }\n\n    return m_dist;\n}\n\n\nvec3 veroniNoise(vec2 st) {\n    vec2 p = floor(st);\n    vec2 f = fract(st);\n\n    float res = 2.0;\n    vec2 m_point=vec2(1.0, 1.0),\n        mr=vec2(0,0),\n        mb = vec2(0,0);\n\n    for(int j=-1; j<=1; j++) {\n        for(int i=-1; i<=1; i++) {\n            vec2 b=vec2(float(i), float(j));\n            vec2 point = p + b;\n            vec2 r = b + random2(point) - f;\n\n            float d = dot(r,r);\n            if (d < res) {\n                res = d;\n                m_point = point;\n                mr=r;\n                mb=b;\n            }\n        }\n    }\n\n    res = 8.0;\n    for(int j=-2; j<=2; ++j) {\n        for(int i=-2; i<=2; ++i) {\n\n            vec2 b = mb + vec2(float(i),float(j));\n\n            vec2 r = b + random2(p + b) - f;\n\n            float d = dot(0.5 * (mr+r), normalize(r - mr));\n\n            res = min(res, d);\n\n        }\n    }\n\n    return vec3(m_point.xy, res);\n}\n\nconst int octaves = 4;\n\nfloat fbm(vec2 p, float H, float lacunarity) {\n    float value, frequency;\n    float exponent;\n\n    value = 0.0;\n    frequency = 1.0;\n\n    for(int i=0; i<octaves; ++i) {\n\n        exponent = pow(frequency, -H);\n\n        value=value + (noise(p) * exponent);\n\n        p=p*lacunarity;\n\n        frequency=frequency * lacunarity;\n    }\n\n    return value;\n}\n\nfloat fbm(vec3 p, float H, float lacunarity) {\n    float value, frequency;\n    float exponent;\n\n    value = 0.0;\n    frequency = 1.0;\n\n    for(int i=0; i<octaves; ++i) {\n\n        exponent = pow(frequency, -H);\n\n        value=value + (noise(p) * exponent);\n\n        p=p*lacunarity;\n\n        frequency=frequency * lacunarity;\n    }\n\n    return value;\n}\n\nfloat ridgedMultifractal(vec3 p, float H, float lacunarity, float offset) {\n    float result, frequency, remainder;\n    float weight, signal, exponent;\n\n    float gain = 2.0;\n\n    result = 1.0;\n    frequency = 1.0;\n\n    signal = noise(p);\n    if (signal < 0.0) signal = -signal;\n    signal = offset-signal;\n    signal *=signal;\n    result = signal;\n    weight = 1.0;\n\n\n    for(int i=1; i<octaves; ++i) {\n        frequency=frequency*lacunarity;\n        p=p*lacunarity;\n\n        weight = signal * gain;\n        if (weight>1.0) weight=1.0;\n        if (weight < 0.0 ) weight= 0.0;\n\n        signal = noise(p);\n\n        if (signal <0.0) signal = -signal;\n        signal = offset - signal;\n        signal *=signal;\n        signal *=weight;\n        result += signal * pow(frequency,-H);\n\n    }\n\n    return result;\n}\n\nbool sphere(vec2 p, out vec3 hit) {\n\n    float dist = 1.0 - p.x*p.x - p.y*p.y;\n\n    if (dist < 0.0) return false;\n\n    float z=sqrt( dist);\n\n    hit = vec3(p, z);\n\n    return true;\n\n}\n\nbool cylinder(vec2 p, out vec3 hit) {\n    float dist = 1.0 - p.x*p.x;\n\n    if (dist < 0.0) return false;\n\n    float z=sqrt( dist);\n\n    hit = vec3(p, z);\n\n    return true;\n}\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\n\n//inject\n\nvec3 test(vec3 p) {\n\n    vec3 color = vec3(0,0,0);\n\n    vec3 N = normalize(p);\n\n    float l = dot(N, vec3(cos(u_time), sin(u_time), 1));\n\n    if (l<0.0) l=0.0;\n\n    float c = ridgedMultifractal(p*10.0, 1.1, 1.1, 0.7);\n\n    c=(c+1.0) /2.0;\n\n    c=c*l;\n\n    color=vec3(c);\n\n    return color;\n\n}\n\nvoid main() {\n\n    vec3 p;\n\n    if ( mapping(p)) {\n        gl_FragColor=vec4(test(p), 0);\n    }\n\n}"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n\nconst float PI = 3.1415926535897932384626433832795;\nconst float PI2 = 6.28318530718;\n\nfloat almostIdentity( float x, float m, float n )\n{\n    if( x>m ) return x;\n\n    float a = 2.0*n - m;\n    float b = 2.0*m - 3.0*n;\n    float t = x/m;\n\n    return (a*t + b)*t*t + n;\n}\n\n\nfloat impulse( float k, float x )\n{\n    float h = k*x;\n    return h*exp(1.0-h);\n}\n\nfloat cubicPulse( float c, float w, float x )\n{\n    x = abs(x - c);\n    if( x>w ) return 0.0;\n    x /= w;\n    return 1.0 - x*x*(3.0-2.0*x);\n}\n\nfloat expStep( float x, float k, float n )\n{\n    return exp( -k*pow(x,n) );\n}\n\n\nfloat gain(float x, float k)\n{\n    float a = 0.5*pow(2.0*((x<0.5)?x:1.0-x), k);\n    return (x<0.5)?a:1.0-a;\n}\n\n\nfloat parabola( float x, float k )\n{\n    return pow( 4.0*x*(1.0-x), k );\n}\n\nfloat pcurve( float x, float a, float b )\n{\n    float k = pow(a+b,a+b) / (pow(a,a)*pow(b,b));\n    return k * pow( x, a ) * pow( 1.0-x, b );\n}\n\nvec3 rgb2hsb( in vec3 c ){\n    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    vec4 p = mix(vec4(c.bg, K.wz),\n                 vec4(c.gb, K.xy),\n                 step(c.b, c.g));\n    vec4 q = mix(vec4(p.xyw, c.r),\n                 vec4(c.r, p.yzx),\n                 step(p.x, c.r));\n    float d = q.x - min(q.w, q.y);\n    float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),\n                d / (q.x + e),\n                q.x);\n}\n\n//  Function from Iñigo Quiles\n//  https://www.shadertoy.com/view/MsS3Wc\nvec3 hsb2rgb( in vec3 c ){\n    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),\n                             6.0)-3.0)-1.0,\n                     0.0,\n                     1.0 );\n    rgb = rgb*rgb*(3.0-2.0*rgb);\n    return c.z * mix(vec3(1.0), rgb, c.y);\n}\n\nfloat rectangle(vec2 st,vec2 bl, vec2 tr) {\n    vec2 blv = step(bl, st);\n    vec2 trv = step(vec2(1.0)-tr, 1.0-st);\n    return blv.x*blv.y * trv.x*trv.y;\n}\n\nfloat smoothRectangle(vec2 st,vec2 bl, vec2 tr, float w) {\n    vec2 blv = smoothstep(bl, bl+vec2(w), st);\n    vec2 trv = smoothstep(vec2(1.0)-tr, vec2(1.0)-tr+vec2(w), 1.0-st);\n    return blv.x*blv.y * trv.x*trv.y;\n}\n\nfloat smoothCircle(vec2 st, vec2 c, float r, float w) {\n    float d = length(st - c);\n    return smoothstep(r+w,r-w,d);\n}\n\nfloat polygon(vec2 st, vec2 c, float r, int N) {\n   \tfloat a = atan(st.y,st.x);\n   \tfloat s = PI*2.0/float(N);\n   \tfloat d =  cos(floor(.5+a/s) * s - a) * distance(st,c) * 2.0;\n    return 1.0-smoothstep(r-0.01,r,d);\n}\n\nmat2 rotate2d(float a) {\n    return mat2(cos(a), -sin(a), sin(a), cos(a));\n}\n\nvec2 random2(vec2 st){\n    st = vec2( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );\n    return fract(sin(st)*43758.5453123);\n}\n\nfloat random2f(vec2 st){\n    float v = dot( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );\n    return fract(sin(v)*43758.5453123);\n}\n\nvec2 random2a(vec2 st){\n    st = vec2( dot(st,vec2(127.1,311.7)),\n              dot(st,vec2(269.5,183.3)) );\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\n}\n\nvec3 random3a(vec3 st){\n    st = vec3( dot(st,vec3(127.1,311.7,123.6)),\n               dot(st,vec3(269.5,183.3,97.1)),\n                dot(st,vec3(146.87,245.12,48.7))\n                );\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\n}\n\nfloat noise(in vec2 p) {\n\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix( mix( dot( random2a(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),\n                     dot( random2a(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),\n                mix( dot( random2a(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),\n                     dot( random2a(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);\n\n\n}\n\nfloat noise(in vec3 p) {\n\n    vec3 i = floor(p);\n    vec3 f = fract(p);\n\n    vec3 u = f*f*(3.0-2.0*f);\n\n        return mix(\n                mix(\n                    mix(\n                        dot( random3a(i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ),\n                        dot( random3a(i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ),\n                        u.x),\n                    mix(\n                        dot( random3a(i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ),\n                        dot( random3a(i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ),\n                        u.x),\n                    u.y),\n                mix(\n                    mix(\n                        dot( random3a(i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ),\n                        dot( random3a(i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ),\n                        u.x),\n                    mix(\n                        dot( random3a(i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ),\n                        dot( random3a(i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ),\n                        u.x),\n                    u.y),\n                u.z\n               );\n}\n\nfloat usnoise(vec3 p) {\n    return (noise(p) + 1.0) /2.0;\n}\n\nfloat cellNoise(vec2 p) {\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n\n    float m_dist = 1.0;\n\n    for(int y=-1; y<=1; y++) {\n        for(int x=-1; x<=1; x++) {\n            vec2 neighbour=vec2(float(x), float(y));\n            vec2 point = random2(i + neighbour);\n\n            vec2 diff= neighbour + point - f;\n            float dist = length(diff);\n            m_dist = min(m_dist,dist);\n        }\n    }\n\n    return m_dist;\n}\n\n\nvec3 veroniNoise(vec2 st) {\n    vec2 p = floor(st);\n    vec2 f = fract(st);\n\n    float res = 2.0;\n    vec2 m_point=vec2(1.0, 1.0),\n        mr=vec2(0,0),\n        mb = vec2(0,0);\n\n    for(int j=-1; j<=1; j++) {\n        for(int i=-1; i<=1; i++) {\n            vec2 b=vec2(float(i), float(j));\n            vec2 point = p + b;\n            vec2 r = b + random2(point) - f;\n\n            float d = dot(r,r);\n            if (d < res) {\n                res = d;\n                m_point = point;\n                mr=r;\n                mb=b;\n            }\n        }\n    }\n\n    res = 8.0;\n    for(int j=-2; j<=2; ++j) {\n        for(int i=-2; i<=2; ++i) {\n\n            vec2 b = mb + vec2(float(i),float(j));\n\n            vec2 r = b + random2(p + b) - f;\n\n            float d = dot(0.5 * (mr+r), normalize(r - mr));\n\n            res = min(res, d);\n\n        }\n    }\n\n    return vec3(m_point.xy, res);\n}\n\nconst int octaves = 4;\n\nfloat fbm(vec2 p, float H, float lacunarity) {\n    float value, frequency;\n    float exponent;\n\n    value = 0.0;\n    frequency = 1.0;\n\n    for(int i=0; i<octaves; ++i) {\n\n        exponent = pow(frequency, -H);\n\n        value=value + (noise(p) * exponent);\n\n        p=p*lacunarity;\n\n        frequency=frequency * lacunarity;\n    }\n\n    return value;\n}\n\nfloat fbm(vec3 p, float H, float lacunarity) {\n    float value, frequency;\n    float exponent;\n\n    value = 0.0;\n    frequency = 1.0;\n\n    for(int i=0; i<octaves; ++i) {\n\n        exponent = pow(frequency, -H);\n\n        value=value + (noise(p) * exponent);\n\n        p=p*lacunarity;\n\n        frequency=frequency * lacunarity;\n    }\n\n    return value;\n}\n\nfloat ridgedMultifractal(vec3 p, float H, float lacunarity, float offset) {\n    float result, frequency, remainder;\n    float weight, signal, exponent;\n\n    float gain = 2.0;\n\n    result = 1.0;\n    frequency = 1.0;\n\n    signal = noise(p);\n    if (signal < 0.0) signal = -signal;\n    signal = offset-signal;\n    signal *=signal;\n    result = signal;\n    weight = 1.0;\n\n\n    for(int i=1; i<octaves; ++i) {\n        frequency=frequency*lacunarity;\n        p=p*lacunarity;\n\n        weight = signal * gain;\n        if (weight>1.0) weight=1.0;\n        if (weight < 0.0 ) weight= 0.0;\n\n        signal = noise(p);\n\n        if (signal <0.0) signal = -signal;\n        signal = offset - signal;\n        signal *=signal;\n        signal *=weight;\n        result += signal * pow(frequency,-H);\n\n    }\n\n    return result;\n}\n\nbool sphere(vec2 p, out vec3 hit) {\n\n    float dist = 1.0 - p.x*p.x - p.y*p.y;\n\n    if (dist < 0.0) return false;\n\n    float z=sqrt( dist);\n\n    hit = vec3(p, z);\n\n    return true;\n\n}\n\nbool cylinder(vec2 p, out vec3 hit) {\n    float dist = 1.0 - p.x*p.x;\n\n    if (dist < 0.0) return false;\n\n    float z=sqrt( dist);\n\n    hit = vec3(p, z);\n\n    return true;\n}\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\n\n\n//inject\n\n\nvec3 fbmTest(vec3 p) {\n\n    float v = fbm(vec3(p.x, p.y, p.z + u_time / 2.0), 1.0, 2.0);\n\n    v=(v+1.0) / 2.0;\n    vec3 color = vec3(v,v,v);\n\n    return color;\n\n}\n\nvoid main() {\n\n    vec3 p;\n    if (mapping(p)) {\n        gl_FragColor=vec4(fbmTest(p), 0);\n    }\n\n}"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n\nconst float PI = 3.1415926535897932384626433832795;\nconst float PI2 = 6.28318530718;\n\nfloat almostIdentity( float x, float m, float n )\n{\n    if( x>m ) return x;\n\n    float a = 2.0*n - m;\n    float b = 2.0*m - 3.0*n;\n    float t = x/m;\n\n    return (a*t + b)*t*t + n;\n}\n\n\nfloat impulse( float k, float x )\n{\n    float h = k*x;\n    return h*exp(1.0-h);\n}\n\nfloat cubicPulse( float c, float w, float x )\n{\n    x = abs(x - c);\n    if( x>w ) return 0.0;\n    x /= w;\n    return 1.0 - x*x*(3.0-2.0*x);\n}\n\nfloat expStep( float x, float k, float n )\n{\n    return exp( -k*pow(x,n) );\n}\n\n\nfloat gain(float x, float k)\n{\n    float a = 0.5*pow(2.0*((x<0.5)?x:1.0-x), k);\n    return (x<0.5)?a:1.0-a;\n}\n\n\nfloat parabola( float x, float k )\n{\n    return pow( 4.0*x*(1.0-x), k );\n}\n\nfloat pcurve( float x, float a, float b )\n{\n    float k = pow(a+b,a+b) / (pow(a,a)*pow(b,b));\n    return k * pow( x, a ) * pow( 1.0-x, b );\n}\n\nvec3 rgb2hsb( in vec3 c ){\n    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    vec4 p = mix(vec4(c.bg, K.wz),\n                 vec4(c.gb, K.xy),\n                 step(c.b, c.g));\n    vec4 q = mix(vec4(p.xyw, c.r),\n                 vec4(c.r, p.yzx),\n                 step(p.x, c.r));\n    float d = q.x - min(q.w, q.y);\n    float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),\n                d / (q.x + e),\n                q.x);\n}\n\n//  Function from Iñigo Quiles\n//  https://www.shadertoy.com/view/MsS3Wc\nvec3 hsb2rgb( in vec3 c ){\n    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),\n                             6.0)-3.0)-1.0,\n                     0.0,\n                     1.0 );\n    rgb = rgb*rgb*(3.0-2.0*rgb);\n    return c.z * mix(vec3(1.0), rgb, c.y);\n}\n\nfloat rectangle(vec2 st,vec2 bl, vec2 tr) {\n    vec2 blv = step(bl, st);\n    vec2 trv = step(vec2(1.0)-tr, 1.0-st);\n    return blv.x*blv.y * trv.x*trv.y;\n}\n\nfloat smoothRectangle(vec2 st,vec2 bl, vec2 tr, float w) {\n    vec2 blv = smoothstep(bl, bl+vec2(w), st);\n    vec2 trv = smoothstep(vec2(1.0)-tr, vec2(1.0)-tr+vec2(w), 1.0-st);\n    return blv.x*blv.y * trv.x*trv.y;\n}\n\nfloat smoothCircle(vec2 st, vec2 c, float r, float w) {\n    float d = length(st - c);\n    return smoothstep(r+w,r-w,d);\n}\n\nfloat polygon(vec2 st, vec2 c, float r, int N) {\n   \tfloat a = atan(st.y,st.x);\n   \tfloat s = PI*2.0/float(N);\n   \tfloat d =  cos(floor(.5+a/s) * s - a) * distance(st,c) * 2.0;\n    return 1.0-smoothstep(r-0.01,r,d);\n}\n\nmat2 rotate2d(float a) {\n    return mat2(cos(a), -sin(a), sin(a), cos(a));\n}\n\nvec2 random2(vec2 st){\n    st = vec2( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );\n    return fract(sin(st)*43758.5453123);\n}\n\nfloat random2f(vec2 st){\n    float v = dot( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );\n    return fract(sin(v)*43758.5453123);\n}\n\nvec2 random2a(vec2 st){\n    st = vec2( dot(st,vec2(127.1,311.7)),\n              dot(st,vec2(269.5,183.3)) );\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\n}\n\nvec3 random3a(vec3 st){\n    st = vec3( dot(st,vec3(127.1,311.7,123.6)),\n               dot(st,vec3(269.5,183.3,97.1)),\n                dot(st,vec3(146.87,245.12,48.7))\n                );\n    return -1.0 + 2.0*fract(sin(st)*43758.5453123);\n}\n\nfloat noise(in vec2 p) {\n\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix( mix( dot( random2a(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),\n                     dot( random2a(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),\n                mix( dot( random2a(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),\n                     dot( random2a(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);\n\n\n}\n\nfloat noise(in vec3 p) {\n\n    vec3 i = floor(p);\n    vec3 f = fract(p);\n\n    vec3 u = f*f*(3.0-2.0*f);\n\n        return mix(\n                mix(\n                    mix(\n                        dot( random3a(i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ),\n                        dot( random3a(i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ),\n                        u.x),\n                    mix(\n                        dot( random3a(i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ),\n                        dot( random3a(i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ),\n                        u.x),\n                    u.y),\n                mix(\n                    mix(\n                        dot( random3a(i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ),\n                        dot( random3a(i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ),\n                        u.x),\n                    mix(\n                        dot( random3a(i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ),\n                        dot( random3a(i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ),\n                        u.x),\n                    u.y),\n                u.z\n               );\n}\n\nfloat usnoise(vec3 p) {\n    return (noise(p) + 1.0) /2.0;\n}\n\nfloat cellNoise(vec2 p) {\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n\n    float m_dist = 1.0;\n\n    for(int y=-1; y<=1; y++) {\n        for(int x=-1; x<=1; x++) {\n            vec2 neighbour=vec2(float(x), float(y));\n            vec2 point = random2(i + neighbour);\n\n            vec2 diff= neighbour + point - f;\n            float dist = length(diff);\n            m_dist = min(m_dist,dist);\n        }\n    }\n\n    return m_dist;\n}\n\n\nvec3 veroniNoise(vec2 st) {\n    vec2 p = floor(st);\n    vec2 f = fract(st);\n\n    float res = 2.0;\n    vec2 m_point=vec2(1.0, 1.0),\n        mr=vec2(0,0),\n        mb = vec2(0,0);\n\n    for(int j=-1; j<=1; j++) {\n        for(int i=-1; i<=1; i++) {\n            vec2 b=vec2(float(i), float(j));\n            vec2 point = p + b;\n            vec2 r = b + random2(point) - f;\n\n            float d = dot(r,r);\n            if (d < res) {\n                res = d;\n                m_point = point;\n                mr=r;\n                mb=b;\n            }\n        }\n    }\n\n    res = 8.0;\n    for(int j=-2; j<=2; ++j) {\n        for(int i=-2; i<=2; ++i) {\n\n            vec2 b = mb + vec2(float(i),float(j));\n\n            vec2 r = b + random2(p + b) - f;\n\n            float d = dot(0.5 * (mr+r), normalize(r - mr));\n\n            res = min(res, d);\n\n        }\n    }\n\n    return vec3(m_point.xy, res);\n}\n\nconst int octaves = 4;\n\nfloat fbm(vec2 p, float H, float lacunarity) {\n    float value, frequency;\n    float exponent;\n\n    value = 0.0;\n    frequency = 1.0;\n\n    for(int i=0; i<octaves; ++i) {\n\n        exponent = pow(frequency, -H);\n\n        value=value + (noise(p) * exponent);\n\n        p=p*lacunarity;\n\n        frequency=frequency * lacunarity;\n    }\n\n    return value;\n}\n\nfloat fbm(vec3 p, float H, float lacunarity) {\n    float value, frequency;\n    float exponent;\n\n    value = 0.0;\n    frequency = 1.0;\n\n    for(int i=0; i<octaves; ++i) {\n\n        exponent = pow(frequency, -H);\n\n        value=value + (noise(p) * exponent);\n\n        p=p*lacunarity;\n\n        frequency=frequency * lacunarity;\n    }\n\n    return value;\n}\n\nfloat ridgedMultifractal(vec3 p, float H, float lacunarity, float offset) {\n    float result, frequency, remainder;\n    float weight, signal, exponent;\n\n    float gain = 2.0;\n\n    result = 1.0;\n    frequency = 1.0;\n\n    signal = noise(p);\n    if (signal < 0.0) signal = -signal;\n    signal = offset-signal;\n    signal *=signal;\n    result = signal;\n    weight = 1.0;\n\n\n    for(int i=1; i<octaves; ++i) {\n        frequency=frequency*lacunarity;\n        p=p*lacunarity;\n\n        weight = signal * gain;\n        if (weight>1.0) weight=1.0;\n        if (weight < 0.0 ) weight= 0.0;\n\n        signal = noise(p);\n\n        if (signal <0.0) signal = -signal;\n        signal = offset - signal;\n        signal *=signal;\n        signal *=weight;\n        result += signal * pow(frequency,-H);\n\n    }\n\n    return result;\n}\n\nbool sphere(vec2 p, out vec3 hit) {\n\n    float dist = 1.0 - p.x*p.x - p.y*p.y;\n\n    if (dist < 0.0) return false;\n\n    float z=sqrt( dist);\n\n    hit = vec3(p, z);\n\n    return true;\n\n}\n\nbool cylinder(vec2 p, out vec3 hit) {\n    float dist = 1.0 - p.x*p.x;\n\n    if (dist < 0.0) return false;\n\n    float z=sqrt( dist);\n\n    hit = vec3(p, z);\n\n    return true;\n}\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\n\n\n//inject\n\nvec3 fire(vec3 p) {\n\n    float v;\n\n    float y=p.y / 2.0;\n\n    float vscale = y + 1.1;\n    vscale=(vscale*vscale);\n\n    vec3 pp = vec3(p*5.0) + vec3(0,u_time * 2.0,u_time );//, u_time/0.75);\n\n    v= ridgedMultifractal(pp, 0.25, 2.1, 0.7)\n        * vscale\n        + (vscale / 2.5);\n\n    vec3 color;\n\n    color =\n        (smoothstep(0.0, 0.5, v) * smoothstep(0.5,0.0,v) * vec3(.25,.25,.25))\n        //(smoothstep(0.3, 0.9, v) * vec3(1,0,0))\n        + (smoothstep(0.5, 0.7, v) * vec3(1,0,0))\n        + (smoothstep(0.9, 1.0, v) * vec3(0,1,0))\n        ;\n\n\n    return color;\n\n}\n\nvoid main() {\n    vec3 p;\n    if (mapping(p) ) {\n        gl_FragColor=vec4(fire(p), 0);\n    }\n\n}"

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  flat: "\n    bool mapping(out vec3 st) {\n      vec2 p = gl_FragCoord.xy/u_resolution;\n      st = vec3(vec2(0.5) - p,0);\n      return true;\n    }\n  ",

  sphere: "\n    bool mapping(out vec3 p) {\n        vec3 hit;\n        vec2 p2 = (gl_FragCoord.xy/u_resolution);\n        p2=vec2(0.5) - p2;\n        \n        return sphere(p2 * 2.0, p);\n    }\n  ",

  cylinder: "\n    bool mapping(out vec3 p) {\n        vec3 hit;\n        vec2 p2 = (gl_FragCoord.xy/u_resolution);\n        p2=vec2(0.5) - p2;\n        \n        return cylinder(p2 * 2.0, p);\n    }\n  "
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(23)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(undefined);
// imports


// module
exports.push([module.i, "\nhtml {\n    color: white;\n}", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(24);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2VjZWY0ZDk1ZjEzYTJlMDYyOGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWZ1bmN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL3NyYy90b29scy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvc3JjL3Rvb2xzL21peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9zcmMvR2xzbENhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveGhyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcnNlLWhlYWRlcnMvcGFyc2UtaGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJpbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9yLWVhY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9zcmMvZ2wvZ2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvc3JjL2dsL1RleHR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc3VuLmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc3BoZXJlLmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvZmJtLmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvZmlyZS5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL21hcHBpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzI5ODMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRTaGFkZXIiLCJPYmplY3QiLCJrZXlzIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsInBvc2l0aW9uIiwibWFyZ2luIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImxhYmVsIiwiaW5uZXJUZXh0IiwiZHJvcGRvd24iLCJwbGVhc2VTZWxlY3QiLCJtYXAiLCJvcHRpb24iLCJzaGFkZXIiLCJ2YWx1ZSIsImZvckVhY2giLCJzYW5kYm94IiwibWFwcGluZyIsInNwaGVyZSIsImxvYWRTaGFkZXIiLCJkZXN0cm95IiwidW5kZWZpbmVkIiwic2V0VW5pZm9ybSIsInNoYWRlckNvZGUiLCJyZXBsYWNlIiwibG9hZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3VuIiwiZmlyZSIsImZibSIsImZsYXQiLCJjeWxpbmRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7OztBQzNFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7OztBQ3ZEQTs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBSUEsZ0JBQWdCQyxPQUFPQyxJQUFQLG9CQUFxQixDQUFyQixDQUFwQjs7QUFFQSxDQUFDLFlBQU07O0FBRUxDLFdBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLENBQStCQyxlQUEvQixHQUFpRCxPQUFqRDs7QUFFQSxNQUFJQyxTQUFTSixTQUFTSyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQUwsV0FBU0MsZUFBVCxDQUF5QkssV0FBekIsQ0FBcUNGLE1BQXJDO0FBQ0FBLFNBQU9HLEtBQVAsR0FBZSxHQUFmO0FBQ0FILFNBQU9JLE1BQVAsR0FBZ0IsR0FBaEI7O0FBRUFKLFNBQU9GLEtBQVAsQ0FBYU8sT0FBYixHQUF1QixPQUF2QjtBQUNBTCxTQUFPRixLQUFQLENBQWFRLFFBQWIsR0FBd0IsVUFBeEI7QUFDQU4sU0FBT0YsS0FBUCxDQUFhUyxNQUFiLEdBQXNCLHFCQUF0QjtBQUNBUCxTQUFPRixLQUFQLENBQWFVLEdBQWIsR0FBbUIsS0FBbkI7QUFDQVIsU0FBT0YsS0FBUCxDQUFhVyxJQUFiLEdBQW9CLEtBQXBCO0FBQ0FULFNBQU9GLEtBQVAsQ0FBYVksU0FBYixHQUF5QixzQkFBekI7O0FBRUEsTUFBSUMsUUFBUWYsU0FBU0ssYUFBVCxDQUF1QixPQUF2QixDQUFaO0FBQ0FVLFFBQU1DLFNBQU4sR0FBZ0IsMEJBQWhCO0FBQ0FoQixXQUFTQyxlQUFULENBQXlCSyxXQUF6QixDQUFxQ1MsS0FBckM7O0FBRUEsTUFBSUUsV0FBV2pCLFNBQVNLLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjs7QUFFQSxNQUFJYSxlQUFlbEIsU0FBU0ssYUFBVCxDQUF1QixRQUF2QixDQUFuQjtBQUNBYSxlQUFhRixTQUFiLEdBQXlCLDRCQUF6QjtBQUNBQyxXQUFTWCxXQUFULENBQXFCWSxZQUFyQjs7QUFHQXBCLFNBQU9DLElBQVAsb0JBQXFCb0IsR0FBckIsQ0FBeUIsa0JBQVU7QUFDakMsUUFBSUMsU0FBU3BCLFNBQVNLLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBZSxXQUFPSixTQUFQLEdBQW1CSyxNQUFuQjtBQUNBRCxXQUFPRSxLQUFQLEdBQWVELE1BQWY7QUFDQSxXQUFPRCxNQUFQO0FBQ0QsR0FMRCxFQUtHRyxPQUxILENBS1c7QUFBQSxXQUFVTixTQUFTWCxXQUFULENBQXFCYyxNQUFyQixDQUFWO0FBQUEsR0FMWDs7QUFPQXBCLFdBQVNDLGVBQVQsQ0FBeUJLLFdBQXpCLENBQXFDVyxRQUFyQzs7QUFFQSxNQUFJTyxnQkFBSjs7QUFFQSxNQUFJQyxVQUFVLG1CQUFTQyxNQUF2Qjs7QUFFQSxXQUFTQyxVQUFULENBQW9CTixNQUFwQixFQUE0Qjs7QUFFMUIsUUFBSUosU0FBU0ssS0FBVCxLQUFtQkQsTUFBdkIsRUFBK0I7QUFDN0JKLGVBQVNLLEtBQVQsR0FBaUJELE1BQWpCO0FBQ0Q7O0FBRUQsUUFBSUcsT0FBSixFQUFhQSxRQUFRSSxPQUFSO0FBQ2JKLGNBQVVLLFNBQVY7O0FBRUFMLGNBQVUseUJBQWVwQixNQUFmLENBQVY7O0FBRUFvQixZQUFRTSxVQUFSLENBQW1CLGNBQW5CLEVBQW1DMUIsT0FBT0csS0FBMUMsRUFBaURILE9BQU9JLE1BQXhEOztBQUVBLFFBQUl1QixhQUFhLGtCQUFRVixNQUFSLENBQWpCOztBQUVBVSxpQkFBYUEsV0FBV0MsT0FBWCxDQUFtQixVQUFuQixFQUErQlAsT0FBL0IsQ0FBYjs7QUFFQUQsWUFBUVMsSUFBUixDQUFhRixVQUFiO0FBQ0Q7O0FBR0RkLFdBQVNpQixnQkFBVCxDQUEwQixRQUExQixFQUFvQyxVQUFDQyxDQUFELEVBQU87QUFDekNSLGVBQVdWLFNBQVNLLEtBQXBCO0FBQ0QsR0FGRDs7QUFJQUssYUFBVzlCLGFBQVg7QUFPRCxDQXhFRCxJOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUU4RTtBQUM5RTs7QUFFa0M7QUFDVDs7QUFFekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0MsMEVBQTBFO0FBQzFFO0FBQ0E7QUFD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QUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDaFBBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTs7Ozs7Ozs7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OztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDNVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzZWNlZjRkOTVmMTNhMmUwNjI4YyIsIm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvblxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24gKGZuKSB7XG4gIHZhciBzdHJpbmcgPSB0b1N0cmluZy5jYWxsKGZuKVxuICByZXR1cm4gc3RyaW5nID09PSAnW29iamVjdCBGdW5jdGlvbl0nIHx8XG4gICAgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBzdHJpbmcgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB8fFxuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAvLyBJRTggYW5kIGJlbG93XG4gICAgIChmbiA9PT0gd2luZG93LnNldFRpbWVvdXQgfHxcbiAgICAgIGZuID09PSB3aW5kb3cuYWxlcnQgfHxcbiAgICAgIGZuID09PSB3aW5kb3cuY29uZmlybSB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5wcm9tcHQpKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lzLWZ1bmN0aW9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBpc0NhbnZhc1Zpc2libGUoY2FudmFzKSB7XG4gICAgcmV0dXJuXHQoKGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBjYW52YXMuaGVpZ2h0KSA+IDApICYmXG4gICAgICAgIChjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Bvd2VyT2YyKHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAmICh2YWx1ZSAtIDEpKSA9PT0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FmYXJpICgpIHtcbiAgICByZXR1cm4gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0SGlnaGVzdFBvd2VyT2ZUd28oeCkge1xuICAgIC0teDtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDMyOyBpIDw8PSAxKSB7XG4gICAgICAgIHggPSB4IHwgeCA+PiBpO1xuICAgIH1cbiAgICByZXR1cm4geCArIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtYXROdW1iZXJMZW5ndGgobnVtLCBsZW5ndGgpIHtcbiAgICBsZXQgciA9IG51bS50b1N0cmluZygpO1xuICAgIHdoaWxlIChyLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICByID0gJzAnICsgcjtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb3VzZVBvcyhjYW52YXMsIGV2dCkge1xuICAgIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGV2dC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICB5OiBldnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlmZihhLCBiKSB7XG4gICAgaWYgKGEgJiYgYikge1xuICAgICAgICByZXR1cm4gYS50b1N0cmluZygpICE9PSBiLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZU1peGluICh0YXJnZXQpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gbmV3IFNldCgpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG5cbiAgICAgICAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbih0eXBlLCBmKSB7XG4gICAgICAgICAgICBsZXQgbGlzdGVuZXIgPSB7fTtcbiAgICAgICAgICAgIGxpc3RlbmVyW3R5cGVdID0gZjtcbiAgICAgICAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgICAgfSxcblxuICAgICAgICB1bnN1YnNjcmliZUFsbCgpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRyaWdnZXIoZXZlbnQsIC4uLmRhdGEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJbZXZlbnRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyW2V2ZW50XSguLi5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvc3JjL3Rvb2xzL2NvbW1vbi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlTWl4aW4gKHRhcmdldCkge1xuICAgIHZhciBsaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcblxuICAgICAgICBvbih0eXBlLCBmKSB7XG4gICAgICAgICAgICBsZXQgbGlzdGVuZXIgPSB7fTtcbiAgICAgICAgICAgIGxpc3RlbmVyW3R5cGVdID0gZjtcbiAgICAgICAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9mZih0eXBlLCBmKSB7XG4gICAgICAgICAgICBpZiAoZikge1xuICAgICAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IHt9O1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyW3R5cGVdID0gZjtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGxpc3RTdWJzY3JpcHRpb25zKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgICAgfSxcblxuICAgICAgICB1bnN1YnNjcmliZUFsbCgpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRyaWdnZXIoZXZlbnQsIC4uLmRhdGEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJbZXZlbnRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyW2V2ZW50XSguLi5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvc3JjL3Rvb2xzL21peGluLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IEdsc2xDYW52YXMgZnJvbSBcImdsc2xDYW52YXMvc3JjL0dsc2xDYW52YXNcIjtcblxuaW1wb3J0IHNoYWRlcnMgZnJvbSAnLi9zaGFkZXJzJztcblxuaW1wb3J0IG1hcHBpbmdzIGZyb20gJy4vc2hhZGVycy9tYXBwaW5ncy5qcyc7XG5cbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZXMuY3NzJztcblxubGV0IGRlZmF1bHRTaGFkZXIgPSBPYmplY3Qua2V5cyhzaGFkZXJzKVswXTtcblxuKCgpID0+IHtcbiAgXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gIFxuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gIGNhbnZhcy53aWR0aCA9IDgwMDtcbiAgY2FudmFzLmhlaWdodCA9IDgwMDtcbiAgXG4gIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIGNhbnZhcy5zdHlsZS5tYXJnaW4gPSBcImF1dG8gYXV0byBhdXRvIGF1dG9cIjtcbiAgY2FudmFzLnN0eWxlLnRvcCA9IFwiNTAlXCI7XG4gIGNhbnZhcy5zdHlsZS5sZWZ0ID0gXCI1MCVcIjtcbiAgY2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC01MCUsLTUwJSlcIjtcbiAgXG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuaW5uZXJUZXh0PVwiU2VsZWN0IGEgc2hhZGVyIHRvIGxvYWQgXCI7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIFxuICBsZXQgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBcbiAgbGV0IHBsZWFzZVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHBsZWFzZVNlbGVjdC5pbm5lclRleHQgPSBcIlNlbGVjdCBhIHNoYWRlciB0byBsb2FkLi4uXCI7XG4gIGRyb3Bkb3duLmFwcGVuZENoaWxkKHBsZWFzZVNlbGVjdCk7XG4gIFxuICBcbiAgT2JqZWN0LmtleXMoc2hhZGVycykubWFwKHNoYWRlciA9PiB7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLmlubmVyVGV4dCA9IHNoYWRlcjtcbiAgICBvcHRpb24udmFsdWUgPSBzaGFkZXI7XG4gICAgcmV0dXJuIG9wdGlvbjtcbiAgfSkuZm9yRWFjaChvcHRpb24gPT4gZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uKSk7XG4gIFxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZHJvcGRvd24pO1xuXG4gIGxldCBzYW5kYm94O1xuICBcbiAgbGV0IG1hcHBpbmcgPSBtYXBwaW5ncy5zcGhlcmU7XG5cbiAgZnVuY3Rpb24gbG9hZFNoYWRlcihzaGFkZXIpIHtcbiAgICBcbiAgICBpZiAoZHJvcGRvd24udmFsdWUgIT09IHNoYWRlcikge1xuICAgICAgZHJvcGRvd24udmFsdWUgPSBzaGFkZXI7XG4gICAgfVxuICAgIFxuICAgIGlmIChzYW5kYm94KSBzYW5kYm94LmRlc3Ryb3koKTtcbiAgICBzYW5kYm94ID0gdW5kZWZpbmVkO1xuICAgIFxuICAgIHNhbmRib3ggPSBuZXcgR2xzbENhbnZhcyhjYW52YXMpO1xuICBcbiAgICBzYW5kYm94LnNldFVuaWZvcm0oJ3VfcmVzb2x1dGlvbicsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgXG4gICAgbGV0IHNoYWRlckNvZGUgPSBzaGFkZXJzW3NoYWRlcl07XG5cbiAgICBzaGFkZXJDb2RlID0gc2hhZGVyQ29kZS5yZXBsYWNlKFwiLy9pbmplY3RcIiwgbWFwcGluZyk7XG4gICAgXG4gICAgc2FuZGJveC5sb2FkKHNoYWRlckNvZGUpO1xuICB9XG4gIFxuICBcbiAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgIGxvYWRTaGFkZXIoZHJvcGRvd24udmFsdWUpO1xuICB9KTtcbiAgXG4gIGxvYWRTaGFkZXIoZGVmYXVsdFNoYWRlcik7XG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG59KSgpO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDE1IFBhdHJpY2lvIEdvbnphbGV6IFZpdm8gKCBodHRwOi8vd3d3LnBhdHJpY2lvZ29uemFsZXp2aXZvLmNvbSApXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2ZcbnRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlICdTb2Z0d2FyZScpLCB0byBkZWFsIGluXG50aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG51c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxudGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG5GT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1JcbkNPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbkNPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG5pbXBvcnQgeGhyIGZyb20gJ3hocic7XG5cbmltcG9ydCB7IHNldHVwV2ViR0wsIGNyZWF0ZVNoYWRlciwgY3JlYXRlUHJvZ3JhbSwgcGFyc2VVbmlmb3JtcywgbG9hZFRleHR1cmUgfSBmcm9tICcuL2dsL2dsJztcbmltcG9ydCBUZXh0dXJlIGZyb20gJy4vZ2wvVGV4dHVyZSc7XG5cbmltcG9ydCB7IGlzQ2FudmFzVmlzaWJsZSwgaXNEaWZmIH0gZnJvbSAnLi90b29scy9jb21tb24nO1xuaW1wb3J0IHsgc3Vic2NyaWJlTWl4aW4gfSBmcm9tICcuL3Rvb2xzL21peGluJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xzbENhbnZhcyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBvcHRpb25zKSB7XG4gICAgICAgIHN1YnNjcmliZU1peGluKHRoaXMpO1xuXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcblxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5nbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnRleHR1cmVzID0ge307XG4gICAgICAgIHRoaXMudW5pZm9ybXMgPSB7fTtcbiAgICAgICAgdGhpcy52Ym8gPSB7fTtcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy52ZXJ0ZXhTdHJpbmcgPSBvcHRpb25zLnZlcnRleFN0cmluZyB8fCBgXG4jaWZkZWYgR0xfRVNcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuI2VuZGlmXG5cbmF0dHJpYnV0ZSB2ZWMyIGFfcG9zaXRpb247XG5hdHRyaWJ1dGUgdmVjMiBhX3RleGNvb3JkO1xuXG52YXJ5aW5nIHZlYzIgdl90ZXhjb29yZDtcblxudm9pZCBtYWluKCkge1xuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChhX3Bvc2l0aW9uLCAwLjAsIDEuMCk7XG4gICAgdl90ZXhjb29yZCA9IGFfdGV4Y29vcmQ7XG59XG5gO1xuICAgICAgICB0aGlzLmZyYWdtZW50U3RyaW5nID0gb3B0aW9ucy5mcmFnbWVudFN0cmluZyB8fCBgXG4jaWZkZWYgR0xfRVNcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuI2VuZGlmXG5cbnZhcnlpbmcgdmVjMiB2X3RleGNvb3JkO1xuXG52b2lkIG1haW4oKXtcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDAuMCk7XG59XG5gO1xuXG4gICAgICAgIC8vIEdMIENvbnRleHRcbiAgICAgICAgbGV0IGdsID0gc2V0dXBXZWJHTChjYW52YXMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoIWdsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLnRpbWVMb2FkID0gdGhpcy50aW1lUHJldiA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLnRpbWVEZWx0YSA9IDAuO1xuICAgICAgICB0aGlzLmZvcmNlUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBBbGxvdyBhbHBoYVxuICAgICAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgfHwgJ3JnYmEoMSwxLDEsMCknO1xuXG4gICAgICAgIC8vIExvYWQgc2hhZGVyXG4gICAgICAgIGlmIChjYW52YXMuaGFzQXR0cmlidXRlKCdkYXRhLWZyYWdtZW50JykpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhZ21lbnRTdHJpbmcgPSBjYW52YXMuZ2V0QXR0cmlidXRlKCdkYXRhLWZyYWdtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2FudmFzLmhhc0F0dHJpYnV0ZSgnZGF0YS1mcmFnbWVudC11cmwnKSkge1xuICAgICAgICAgICAgbGV0IHNvdXJjZSA9IGNhbnZhcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZnJhZ21lbnQtdXJsJyk7XG4gICAgICAgICAgICB4aHIuZ2V0KHNvdXJjZSwgKGVycm9yLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZChib2R5LCB0aGlzLnZlcnRleFN0cmluZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvYWQgc2hhZGVyXG4gICAgICAgIGlmIChjYW52YXMuaGFzQXR0cmlidXRlKCdkYXRhLXZlcnRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnRleFN0cmluZyA9IGNhbnZhcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmVydGV4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2FudmFzLmhhc0F0dHJpYnV0ZSgnZGF0YS12ZXJ0ZXgtdXJsJykpIHtcbiAgICAgICAgICAgIGxldCBzb3VyY2UgPSBjYW52YXMuZ2V0QXR0cmlidXRlKCdkYXRhLXZlcnRleC11cmwnKTtcbiAgICAgICAgICAgIHhoci5nZXQoc291cmNlLCAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkKHRoaXMuZnJhZ21lbnRTdHJpbmcsIGJvZHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWQoKTtcblxuICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIFZlcnRleCBidWZmZXJcbiAgICAgICAgbGV0IHRleENvb3Jkc0xvYyA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ2FfdGV4Y29vcmQnKTtcbiAgICAgICAgdGhpcy52Ym8udGV4Q29vcmRzID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmJvLnRleENvb3Jkcyk7XG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWzAuMCwgMC4wLCAxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLCAxLjBdKSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRleENvb3Jkc0xvYyk7XG4gICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcih0ZXhDb29yZHNMb2MsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICAgICAgbGV0IHZlcnRpY2VzTG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnYV9wb3NpdGlvbicpO1xuICAgICAgICB0aGlzLnZiby52ZXJ0aWNlcyA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZiby52ZXJ0aWNlcyk7XG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWy0xLjAsIC0xLjAsIDEuMCwgLTEuMCwgLTEuMCwgMS4wLCAtMS4wLCAxLjAsIDEuMCwgLTEuMCwgMS4wLCAxLjBdKSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHZlcnRpY2VzTG9jKTtcbiAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHZlcnRpY2VzTG9jLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgICAgIC8vIGxvYWQgVEVYVFVSRVNcbiAgICAgICAgaWYgKGNhbnZhcy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdGV4dHVyZXMnKSkge1xuICAgICAgICAgICAgbGV0IGltZ0xpc3QgPSBjYW52YXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRleHR1cmVzJykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZvciAobGV0IG5JbWcgaW4gaW1nTGlzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VW5pZm9ybSgndV90ZXgnICsgbkltZywgaW1nTGlzdFtuSW1nXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBFVkVOVFNcbiAgICAgICAgbGV0IG1vdXNlID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICAgICAgICAgIG1vdXNlLnggPSBlLmNsaWVudFggfHwgZS5wYWdlWDtcbiAgICAgICAgICAgIG1vdXNlLnkgPSBlLmNsaWVudFkgfHwgZS5wYWdlWTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGxldCBzYW5kYm94ID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gUmVuZGVyTG9vcCgpIHtcbiAgICAgICAgICAgIGlmIChzYW5kYm94Lm5Nb3VzZSA+IDEpIHtcbiAgICAgICAgICAgICAgICBzYW5kYm94LnNldE1vdXNlKG1vdXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhbmRib3gucmVuZGVyKCk7XG4gICAgICAgICAgICBzYW5kYm94LmZvcmNlUmVuZGVyID0gc2FuZGJveC5yZXNpemUoKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoUmVuZGVyTG9vcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdGFydFxuICAgICAgICB0aGlzLnNldE1vdXNlKHsgeDogMCwgeTogMCB9KTtcbiAgICAgICAgUmVuZGVyTG9vcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmFuaW1hdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCB0ZXggaW4gdGhpcy50ZXh0dXJlcykge1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVUZXh0dXJlKHRleCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0dXJlcyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBhdHQgaW4gdGhpcy5hdHRyaWJzKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZUJ1ZmZlcih0aGlzLmF0dHJpYnNbYXR0XSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKG51bGwpO1xuICAgICAgICB0aGlzLmdsLmRlbGV0ZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgdGhpcy5nbCA9IG51bGw7XG4gICAgfVxuXG4gICAgbG9hZCAoZnJhZ1N0cmluZywgdmVydFN0cmluZykge1xuICAgICAgICAvLyBMb2FkIHZlcnRleCBzaGFkZXIgaWYgdGhlcmUgaXMgb25lXG4gICAgICAgIGlmICh2ZXJ0U3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnRleFN0cmluZyA9IHZlcnRTdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb2FkIGZyYWdtZW50IHNoYWRlciBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgaWYgKGZyYWdTdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhZ21lbnRTdHJpbmcgPSBmcmFnU3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmltYXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5EZWx0YSA9ICh0aGlzLmZyYWdtZW50U3RyaW5nLm1hdGNoKC91X2RlbHRhL2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgIHRoaXMublRpbWUgPSAodGhpcy5mcmFnbWVudFN0cmluZy5tYXRjaCgvdV90aW1lL2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgIHRoaXMubkRhdGUgPSAodGhpcy5mcmFnbWVudFN0cmluZy5tYXRjaCgvdV9kYXRlL2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgIHRoaXMubk1vdXNlID0gKHRoaXMuZnJhZ21lbnRTdHJpbmcubWF0Y2goL3VfbW91c2UvZykgfHwgW10pLmxlbmd0aDtcbiAgICAgICAgdGhpcy5hbmltYXRlZCA9IHRoaXMubkRhdGUgPiAxIHx8IHRoaXMublRpbWUgPiAxIHx8IHRoaXMubk1vdXNlID4gMTtcblxuICAgICAgICBsZXQgblRleHR1cmVzID0gdGhpcy5mcmFnbWVudFN0cmluZy5zZWFyY2goL3NhbXBsZXIyRC9nKTtcbiAgICAgICAgaWYgKG5UZXh0dXJlcykge1xuICAgICAgICAgICAgbGV0IGxpbmVzID0gdGhpcy5mcmFnbWVudFN0cmluZy5zcGxpdCgnXFxuJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gbGluZXNbaV0ubWF0Y2goL3VuaWZvcm1cXHMqc2FtcGxlcjJEXFxzKihbXFx3XSopO1xccypcXC9cXC9cXHMqKFtcXHd8XFw6XFwvXFwvfFxcLnxcXC18XFxfXSopL2kpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXh0ID0gbWF0Y2hbMl0uc3BsaXQoJy4nKS5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hbMV0gJiYgIG1hdGNoWzJdICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgKGV4dCA9PT0gJ2pwZycgfHwgZXh0ID09PSAnanBlZycgfHwgZXh0ID09PSAncG5nJyB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgICBleHQgPT09ICdvZ3YnIHx8IGV4dCA9PT0gJ3dlYm0nIHx8IGV4dCA9PT0gJ21wNCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFVuaWZvcm0obWF0Y2hbMV0sIG1hdGNoWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbWFpbiA9IGxpbmVzW2ldLm1hdGNoKC9cXHMqdm9pZFxccyptYWluXFxzKi9nKTtcbiAgICAgICAgICAgICAgICBpZiAobWFpbikge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHRoaXMsIHRoaXMudmVydGV4U3RyaW5nLCB0aGlzLmdsLlZFUlRFWF9TSEFERVIpO1xuICAgICAgICBsZXQgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVTaGFkZXIodGhpcywgdGhpcy5mcmFnbWVudFN0cmluZywgdGhpcy5nbC5GUkFHTUVOVF9TSEFERVIpO1xuXG4gICAgICAgIC8vIElmIEZyYWdtZW50IHNoYWRlciBmYWlscyBsb2FkIGEgZW1wdHkgb25lIHRvIHNpZ24gdGhlIGVycm9yXG4gICAgICAgIGlmICghZnJhZ21lbnRTaGFkZXIpIHtcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyID0gY3JlYXRlU2hhZGVyKHRoaXMsICd2b2lkIG1haW4oKXtcXG5cXHRnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCk7XFxufScsIHRoaXMuZ2wuRlJBR01FTlRfU0hBREVSKTtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgdXNlIHByb2dyYW1cbiAgICAgICAgbGV0IHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHRoaXMsIFt2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyXSk7Ly8sIFswLDFdLFsnYV90ZXhjb29yZCcsJ2FfcG9zaXRpb24nXSk7XG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgICAgICAvLyBEZWxldGUgc2hhZGVyc1xuICAgICAgICAvLyB0aGlzLmdsLmRldGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgICAgICAvLyB0aGlzLmdsLmRldGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gICAgICAgIHRoaXMuZ2wuZGVsZXRlU2hhZGVyKHZlcnRleFNoYWRlcik7XG4gICAgICAgIHRoaXMuZ2wuZGVsZXRlU2hhZGVyKGZyYWdtZW50U2hhZGVyKTtcblxuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICB0aGlzLmNoYW5nZSA9IHRydWU7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBldmVudFxuICAgICAgICB0aGlzLnRyaWdnZXIoJ2xvYWQnLCB7fSk7XG5cbiAgICAgICAgdGhpcy5mb3JjZVJlbmRlciA9IHRydWU7XG4gICAgfVxuXG4gICAgdGVzdCAoY2FsbGJhY2ssIGZyYWdTdHJpbmcsIHZlcnRTdHJpbmcpIHtcbiAgICAgICAgLy8gVGhhbmtzIHRvIEB0aGVzcGl0ZSBmb3IgdGhlIGhlbHAgaGVyZVxuICAgICAgICAvLyBodHRwczovL3d3dy5raHJvbm9zLm9yZy9yZWdpc3RyeS93ZWJnbC9leHRlbnNpb25zL0VYVF9kaXNqb2ludF90aW1lcl9xdWVyeS9cbiAgICAgICAgbGV0IHByZV90ZXN0X3ZlcnQgPSB0aGlzLnZlcnRleFN0cmluZztcbiAgICAgICAgbGV0IHByZV90ZXN0X2ZyYWcgPSB0aGlzLmZyYWdtZW50U3RyaW5nO1xuICAgICAgICBsZXQgcHJlX3Rlc3RfcGF1c2VkID0gdGhpcy5wYXVzZWQ7XG5cbiAgICAgICAgbGV0IGV4dCA9IHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKCdFWFRfZGlzam9pbnRfdGltZXJfcXVlcnknKTtcbiAgICAgICAgbGV0IHF1ZXJ5ID0gZXh0LmNyZWF0ZVF1ZXJ5RVhUKCk7XG4gICAgICAgIGxldCB3YXNWYWxpZCA9IHRoaXMuaXNWYWxpZDtcblxuICAgICAgICBpZiAoZnJhZ1N0cmluZyB8fCB2ZXJ0U3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWQoZnJhZ1N0cmluZywgdmVydFN0cmluZyk7XG4gICAgICAgICAgICB3YXNWYWxpZCA9IHRoaXMuaXNWYWxpZDtcbiAgICAgICAgICAgIHRoaXMuZm9yY2VSZW5kZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgZXh0LmJlZ2luUXVlcnlFWFQoZXh0LlRJTUVfRUxBUFNFRF9FWFQsIHF1ZXJ5KTtcbiAgICAgICAgdGhpcy5mb3JjZVJlbmRlciA9IHRydWU7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIGV4dC5lbmRRdWVyeUVYVChleHQuVElNRV9FTEFQU0VEX0VYVCk7XG5cbiAgICAgICAgbGV0IHNhbmRib3ggPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiBmaW5pc2hUZXN0KCkge1xuICAgICAgICAgICAgLy8gUmV2ZXJ0IGNoYW5nZXMuLi4gZ28gYmFjayB0byBub3JtYWxcbiAgICAgICAgICAgIHNhbmRib3gucGF1c2VkID0gcHJlX3Rlc3RfcGF1c2VkO1xuICAgICAgICAgICAgaWYgKGZyYWdTdHJpbmcgfHwgdmVydFN0cmluZykge1xuICAgICAgICAgICAgICAgIHNhbmRib3gubG9hZChwcmVfdGVzdF9mcmFnLCBwcmVfdGVzdF92ZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB3YWl0Rm9yVGVzdCgpIHtcbiAgICAgICAgICAgIHNhbmRib3guZm9yY2VSZW5kZXIgPSB0cnVlO1xuICAgICAgICAgICAgc2FuZGJveC5yZW5kZXIoKTtcbiAgICAgICAgICAgIGxldCBhdmFpbGFibGUgPSBleHQuZ2V0UXVlcnlPYmplY3RFWFQocXVlcnksIGV4dC5RVUVSWV9SRVNVTFRfQVZBSUxBQkxFX0VYVCk7XG4gICAgICAgICAgICBsZXQgZGlzam9pbnQgPSBzYW5kYm94LmdsLmdldFBhcmFtZXRlcihleHQuR1BVX0RJU0pPSU5UX0VYVCk7XG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlICYmICFkaXNqb2ludCkge1xuICAgICAgICAgICAgICAgIGxldCByZXQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdhc1ZhbGlkOiB3YXNWYWxpZCxcbiAgICAgICAgICAgICAgICAgICAgZnJhZzogZnJhZ1N0cmluZyB8fCBzYW5kYm94LmZyYWdtZW50U3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0OiB2ZXJ0U3RyaW5nIHx8IHNhbmRib3gudmVydGV4U3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICB0aW1lRWxhcHNlZE1zOiBleHQuZ2V0UXVlcnlPYmplY3RFWFQocXVlcnksIGV4dC5RVUVSWV9SRVNVTFRfRVhUKS8xMDAwMDAwLjBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZpbmlzaFRlc3QoKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHdhaXRGb3JUZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3YWl0Rm9yVGVzdCgpO1xuICAgIH1cblxuICAgIGxvYWRUZXh0dXJlIChuYW1lLCB1cmxFbGVtZW50T3JEYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB1cmxFbGVtZW50T3JEYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgb3B0aW9ucy51cmwgPSB1cmxFbGVtZW50T3JEYXRhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1cmxFbGVtZW50T3JEYXRhID09PSAnb2JqZWN0JyAmJiB1cmxFbGVtZW50T3JEYXRhLmRhdGEgJiYgdXJsRWxlbWVudE9yRGF0YS53aWR0aCAmJiB1cmxFbGVtZW50T3JEYXRhLmhlaWdodCkge1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0gdXJsRWxlbWVudE9yRGF0YS5kYXRhO1xuICAgICAgICAgICAgb3B0aW9ucy53aWR0aCA9IHVybEVsZW1lbnRPckRhdGEud2lkdGg7XG4gICAgICAgICAgICBvcHRpb25zLmhlaWdodCA9IHVybEVsZW1lbnRPckRhdGEuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1cmxFbGVtZW50T3JEYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgb3B0aW9ucy5lbGVtZW50ID0gdXJsRWxlbWVudE9yRGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRleHR1cmVzW25hbWVdKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0dXJlc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXNbbmFtZV0ubG9hZChvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzW25hbWVdLm9uKCdsb2FkZWQnLCAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcmNlUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZXNbbmFtZV0gPSBuZXcgVGV4dHVyZSh0aGlzLmdsLCBuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZXNbbmFtZV0ub24oJ2xvYWRlZCcsIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZVJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICByZWZyZXNoVW5pZm9ybXMoKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybXMgPSB7fTtcbiAgICB9XG5cbiAgICBzZXRVbmlmb3JtKG5hbWUsIC4uLnZhbHVlKSB7XG4gICAgICAgIGxldCB1ID0ge307XG4gICAgICAgIHVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRVbmlmb3Jtcyh1KTtcbiAgICB9XG5cbiAgICBzZXRVbmlmb3Jtcyh1bmlmb3Jtcykge1xuICAgICAgICBsZXQgcGFyc2VkID0gcGFyc2VVbmlmb3Jtcyh1bmlmb3Jtcyk7XG4gICAgICAgIC8vIFNldCBlYWNoIHVuaWZvcm1cbiAgICAgICAgZm9yIChsZXQgdSBpbiBwYXJzZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZWRbdV0udHlwZSA9PT0gJ3NhbXBsZXIyRCcpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgdGV4dHVyZXMsIHdlIG5lZWQgdG8gdHJhY2sgdGV4dHVyZSB1bml0cywgc28gd2UgaGF2ZSBhIHNwZWNpYWwgc2V0dGVyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51bmlmb3JtVGV4dHVyZShwYXJzZWRbdV0ubmFtZSwgcGFyc2VkW3VdLnZhbHVlWzBdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUZXh0dXJlKHBhcnNlZFt1XS5uYW1lLCBwYXJzZWRbdV0udmFsdWVbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bmlmb3JtKHBhcnNlZFt1XS5tZXRob2QsIHBhcnNlZFt1XS50eXBlLCBwYXJzZWRbdV0ubmFtZSwgcGFyc2VkW3VdLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE1vdXNlKG1vdXNlKSB7XG4gICAgICAgIC8vIHNldCB0aGUgbW91c2UgdW5pZm9ybVxuICAgICAgICBsZXQgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAobW91c2UgJiZcbiAgICAgICAgICAgIG1vdXNlLnggJiYgbW91c2UueCA+PSByZWN0LmxlZnQgJiYgbW91c2UueCA8PSByZWN0LnJpZ2h0ICYmXG4gICAgICAgICAgICBtb3VzZS55ICYmIG1vdXNlLnkgPj0gcmVjdC50b3AgJiYgbW91c2UueSA8PSByZWN0LmJvdHRvbSkge1xuICAgICAgICAgICAgdGhpcy51bmlmb3JtKCcyZicsICd2ZWMyJywgJ3VfbW91c2UnLCBtb3VzZS54IC0gcmVjdC5sZWZ0LCB0aGlzLmNhbnZhcy5oZWlnaHQgLSAobW91c2UueSAtIHJlY3QudG9wKSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0Ly8gZXg6IHByb2dyYW0udW5pZm9ybSgnM2YnLCAncG9zaXRpb24nLCB4LCB5LCB6KTtcbiAgICB1bmlmb3JtIChtZXRob2QsIHR5cGUsIG5hbWUsIC4uLnZhbHVlKSB7IC8vICd2YWx1ZScgaXMgYSBtZXRob2QtYXBwcm9wcmlhdGUgYXJndW1lbnRzIGxpc3RcbiAgICAgICAgdGhpcy51bmlmb3Jtc1tuYW1lXSA9IHRoaXMudW5pZm9ybXNbbmFtZV0gfHwge307XG4gICAgICAgIGxldCB1bmlmb3JtID0gdGhpcy51bmlmb3Jtc1tuYW1lXTtcbiAgICAgICAgbGV0IGNoYW5nZSA9IGlzRGlmZih1bmlmb3JtLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgIGlmIChjaGFuZ2UgfHwgdGhpcy5jaGFuZ2UgfHwgdW5pZm9ybS5sb2NhdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHVuaWZvcm0udmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdW5pZm9ybS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHVuaWZvcm0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHVuaWZvcm0udHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB1bmlmb3JtLm1ldGhvZCA9ICd1bmlmb3JtJyArIG1ldGhvZDtcbiAgICAgICAgICAgIHVuaWZvcm0ubG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sIG5hbWUpO1xuXG4gICAgICAgICAgICB0aGlzLmdsW3VuaWZvcm0ubWV0aG9kXS5hcHBseSh0aGlzLmdsLCBbdW5pZm9ybS5sb2NhdGlvbl0uY29uY2F0KHVuaWZvcm0udmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuaWZvcm1UZXh0dXJlKG5hbWUsIHRleHR1cmUsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMudGV4dHVyZXNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkVGV4dHVyZShuYW1lLCB0ZXh0dXJlLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybSgnMWknLCAnc2FtcGxlcjJEJywgbmFtZSwgdGhpcy50ZXh1cmVJbmRleCk7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmVzW25hbWVdLmJpbmQodGhpcy50ZXh1cmVJbmRleCk7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm0oJzJmJywgJ3ZlYzInLCBuYW1lICsgJ1Jlc29sdXRpb24nLCB0aGlzLnRleHR1cmVzW25hbWVdLndpZHRoLCB0aGlzLnRleHR1cmVzW25hbWVdLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLnRleHVyZUluZGV4Kys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLndpZHRoICE9PSB0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCB8fFxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgIT09IHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgbGV0IHJlYWxUb0NTU1BpeGVscyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG5cbiAgICAgICAgICAgIC8vIExvb2t1cCB0aGUgc2l6ZSB0aGUgYnJvd3NlciBpcyBkaXNwbGF5aW5nIHRoZSBjYW52YXMgaW4gQ1NTIHBpeGVsc1xuICAgICAgICAgICAgLy8gYW5kIGNvbXB1dGUgYSBzaXplIG5lZWRlZCB0byBtYWtlIG91ciBkcmF3aW5nYnVmZmVyIG1hdGNoIGl0IGluXG4gICAgICAgICAgICAvLyBkZXZpY2UgcGl4ZWxzLlxuICAgICAgICAgICAgbGV0IGRpc3BsYXlXaWR0aCA9IE1hdGguZmxvb3IodGhpcy5nbC5jYW52YXMuY2xpZW50V2lkdGggKiByZWFsVG9DU1NQaXhlbHMpO1xuICAgICAgICAgICAgbGV0IGRpc3BsYXlIZWlnaHQgPSBNYXRoLmZsb29yKHRoaXMuZ2wuY2FudmFzLmNsaWVudEhlaWdodCAqIHJlYWxUb0NTU1BpeGVscyk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjYW52YXMgaXMgbm90IHRoZSBzYW1lIHNpemUuXG4gICAgICAgICAgICBpZiAodGhpcy5nbC5jYW52YXMud2lkdGggIT09IGRpc3BsYXlXaWR0aCB8fFxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuY2FudmFzLmhlaWdodCAhPT0gZGlzcGxheUhlaWdodCkge1xuICAgICAgICAgICAgICAgIC8vIE1ha2UgdGhlIGNhbnZhcyB0aGUgc2FtZSBzaXplXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5jYW52YXMud2lkdGggPSBkaXNwbGF5V2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5jYW52YXMuaGVpZ2h0ID0gZGlzcGxheUhlaWdodDtcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIHZpZXdwb3J0IHRvIG1hdGNoXG4gICAgICAgICAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmdsLmNhbnZhcy53aWR0aCwgdGhpcy5nbC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuZ2wuZHJhd2luZ0J1ZmZlcldpZHRoLCB0aGlzLmdsLmRyYXdpbmdCdWZmZXJIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FudmFzLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGlzQ2FudmFzVmlzaWJsZSh0aGlzLmNhbnZhcyk7XG4gICAgICAgIGlmICh0aGlzLmZvcmNlUmVuZGVyIHx8XG4gICAgICAgICAgICAodGhpcy5hbmltYXRlZCAmJiB0aGlzLnZpc2libGUgJiYgISB0aGlzLnBhdXNlZCkpIHtcblxuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgbGV0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy50aW1lRGVsdGEgPSAgKG5vdyAtIHRoaXMudGltZVByZXYpIC8gMTAwMC4wO1xuICAgICAgICAgICAgdGhpcy50aW1lUHJldiA9IG5vdztcbiAgICAgICAgICAgIGlmICh0aGlzLm5EZWx0YSA+IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGRlbHRhIHRpbWUgdW5pZm9ybVxuICAgICAgICAgICAgICAgIHRoaXMudW5pZm9ybSgnMWYnLCAnZmxvYXQnLCAndV9kZWx0YScsIHRoaXMudGltZURlbHRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMublRpbWUgPiAxICkge1xuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgZWxhcHNlZCB0aW1lIHVuaWZvcm1cbiAgICAgICAgICAgICAgICB0aGlzLnVuaWZvcm0oJzFmJywgJ2Zsb2F0JywgJ3VfdGltZScsIChub3cgLSB0aGlzLnRpbWVMb2FkKSAvIDEwMDAuMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm5EYXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0IGRhdGUgdW5pZm9ybTogeWVhci9tb250aC9kYXkvdGltZV9pbl9zZWNcbiAgICAgICAgICAgICAgICB0aGlzLnVuaWZvcm0oJzRmJywgJ2Zsb2F0JywgJ3VfZGF0ZScsIGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpKjM2MDAgKyBkYXRlLmdldE1pbnV0ZXMoKSo2MCArIGRhdGUuZ2V0U2Vjb25kcygpICsgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAqIDAuMDAxICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNldCB0aGUgcmVzb2x1dGlvbiB1bmlmb3JtXG4gICAgICAgICAgICB0aGlzLnVuaWZvcm0oJzJmJywgJ3ZlYzInLCAndV9yZXNvbHV0aW9uJywgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgICAgIHRoaXMudGV4dXJlSW5kZXggPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgdGV4IGluIHRoaXMudGV4dHVyZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuaWZvcm1UZXh0dXJlKHRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERyYXcgdGhlIHJlY3RhbmdsZS5cbiAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5cyh0aGlzLmdsLlRSSUFOR0xFUywgMCwgNik7XG5cbiAgICAgICAgICAgIC8vIFRyaWdnZXIgZXZlbnRcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcigncmVuZGVyJywge30pO1xuXG4gICAgICAgICAgICB0aGlzLmNoYW5nZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5mb3JjZVJlbmRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UgKCkge1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGxheSAoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmVyc2lvbigpIHtcbiAgICAgICAgcmV0dXJuICcwLjAuMjUnO1xuICAgIH1cbn1cblxud2luZG93Lkdsc2xDYW52YXMgPSBHbHNsQ2FudmFzO1xuXG5mdW5jdGlvbiBsb2FkQWxsR2xzbENhbnZhcygpIHtcbiAgICB2YXIgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dsc2xDYW52YXMnKTtcbiAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHdpbmRvdy5nbHNsQ2FudmFzZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2FuZGJveCA9IG5ldyBHbHNsQ2FudmFzKGxpc3RbaV0pO1xuICAgICAgICAgICAgaWYgKHNhbmRib3guaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5nbHNsQ2FudmFzZXMucHVzaChzYW5kYm94KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgbG9hZEFsbEdsc2xDYW52YXMoKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9zcmMvR2xzbENhbnZhcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciB3aW5kb3cgPSByZXF1aXJlKFwiZ2xvYmFsL3dpbmRvd1wiKVxudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKFwiaXMtZnVuY3Rpb25cIilcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKFwicGFyc2UtaGVhZGVyc1wiKVxudmFyIHh0ZW5kID0gcmVxdWlyZShcInh0ZW5kXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlWEhSXG5jcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgbm9vcFxuY3JlYXRlWEhSLlhEb21haW5SZXF1ZXN0ID0gXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiAobmV3IGNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCgpKSA/IGNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCA6IHdpbmRvdy5YRG9tYWluUmVxdWVzdFxuXG5mb3JFYWNoQXJyYXkoW1wiZ2V0XCIsIFwicHV0XCIsIFwicG9zdFwiLCBcInBhdGNoXCIsIFwiaGVhZFwiLCBcImRlbGV0ZVwiXSwgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgY3JlYXRlWEhSW21ldGhvZCA9PT0gXCJkZWxldGVcIiA/IFwiZGVsXCIgOiBtZXRob2RdID0gZnVuY3Rpb24odXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICBvcHRpb25zID0gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKVxuICAgICAgICBvcHRpb25zLm1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgICAgIHJldHVybiBfY3JlYXRlWEhSKG9wdGlvbnMpXG4gICAgfVxufSlcblxuZnVuY3Rpb24gZm9yRWFjaEFycmF5KGFycmF5LCBpdGVyYXRvcikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0b3IoYXJyYXlbaV0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0VtcHR5KG9iail7XG4gICAgZm9yKHZhciBpIGluIG9iail7XG4gICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBwYXJhbXMgPSB1cmlcblxuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9uc1xuICAgICAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFyYW1zID0ge3VyaTp1cml9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSB4dGVuZChvcHRpb25zLCB7dXJpOiB1cml9KVxuICAgIH1cblxuICAgIHBhcmFtcy5jYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHBhcmFtc1xufVxuXG5mdW5jdGlvbiBjcmVhdGVYSFIodXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIG9wdGlvbnMgPSBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spXG4gICAgcmV0dXJuIF9jcmVhdGVYSFIob3B0aW9ucylcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVhIUihvcHRpb25zKSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMuY2FsbGJhY2sgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYWxsYmFjayBhcmd1bWVudCBtaXNzaW5nXCIpXG4gICAgfVxuXG4gICAgdmFyIGNhbGxlZCA9IGZhbHNlXG4gICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2JPbmNlKGVyciwgcmVzcG9uc2UsIGJvZHkpe1xuICAgICAgICBpZighY2FsbGVkKXtcbiAgICAgICAgICAgIGNhbGxlZCA9IHRydWVcbiAgICAgICAgICAgIG9wdGlvbnMuY2FsbGJhY2soZXJyLCByZXNwb25zZSwgYm9keSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWR5c3RhdGVjaGFuZ2UoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChsb2FkRnVuYywgMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHkoKSB7XG4gICAgICAgIC8vIENocm9tZSB3aXRoIHJlcXVlc3RUeXBlPWJsb2IgdGhyb3dzIGVycm9ycyBhcnJvdW5kIHdoZW4gZXZlbiB0ZXN0aW5nIGFjY2VzcyB0byByZXNwb25zZVRleHRcbiAgICAgICAgdmFyIGJvZHkgPSB1bmRlZmluZWRcblxuICAgICAgICBpZiAoeGhyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBib2R5ID0geGhyLnJlc3BvbnNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5ID0geGhyLnJlc3BvbnNlVGV4dCB8fCBnZXRYbWwoeGhyKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzSnNvbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBib2R5ID0gSlNPTi5wYXJzZShib2R5KVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib2R5XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJyb3JGdW5jKGV2dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFRpbWVyKVxuICAgICAgICBpZighKGV2dCBpbnN0YW5jZW9mIEVycm9yKSl7XG4gICAgICAgICAgICBldnQgPSBuZXcgRXJyb3IoXCJcIiArIChldnQgfHwgXCJVbmtub3duIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpIClcbiAgICAgICAgfVxuICAgICAgICBldnQuc3RhdHVzQ29kZSA9IDBcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGV2dCwgZmFpbHVyZVJlc3BvbnNlKVxuICAgIH1cblxuICAgIC8vIHdpbGwgbG9hZCB0aGUgZGF0YSAmIHByb2Nlc3MgdGhlIHJlc3BvbnNlIGluIGEgc3BlY2lhbCByZXNwb25zZSBvYmplY3RcbiAgICBmdW5jdGlvbiBsb2FkRnVuYygpIHtcbiAgICAgICAgaWYgKGFib3J0ZWQpIHJldHVyblxuICAgICAgICB2YXIgc3RhdHVzXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpXG4gICAgICAgIGlmKG9wdGlvbnMudXNlWERSICYmIHhoci5zdGF0dXM9PT11bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vSUU4IENPUlMgR0VUIHN1Y2Nlc3NmdWwgcmVzcG9uc2UgZG9lc24ndCBoYXZlIGEgc3RhdHVzIGZpZWxkLCBidXQgYm9keSBpcyBmaW5lXG4gICAgICAgICAgICBzdGF0dXMgPSAyMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICh4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cylcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBmYWlsdXJlUmVzcG9uc2VcbiAgICAgICAgdmFyIGVyciA9IG51bGxcblxuICAgICAgICBpZiAoc3RhdHVzICE9PSAwKXtcbiAgICAgICAgICAgIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgIGJvZHk6IGdldEJvZHkoKSxcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICAgICAgdXJsOiB1cmksXG4gICAgICAgICAgICAgICAgcmF3UmVxdWVzdDogeGhyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKXsgLy9yZW1lbWJlciB4aHIgY2FuIGluIGZhY3QgYmUgWERSIGZvciBDT1JTIGluIElFXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuaGVhZGVycyA9IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnIgPSBuZXcgRXJyb3IoXCJJbnRlcm5hbCBYTUxIdHRwUmVxdWVzdCBFcnJvclwiKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIHJlc3BvbnNlLCByZXNwb25zZS5ib2R5KVxuICAgIH1cblxuICAgIHZhciB4aHIgPSBvcHRpb25zLnhociB8fCBudWxsXG5cbiAgICBpZiAoIXhocikge1xuICAgICAgICBpZiAob3B0aW9ucy5jb3JzIHx8IG9wdGlvbnMudXNlWERSKSB7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhEb21haW5SZXF1ZXN0KClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlcbiAgICB2YXIgYWJvcnRlZFxuICAgIHZhciB1cmkgPSB4aHIudXJsID0gb3B0aW9ucy51cmkgfHwgb3B0aW9ucy51cmxcbiAgICB2YXIgbWV0aG9kID0geGhyLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IFwiR0VUXCJcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keSB8fCBvcHRpb25zLmRhdGFcbiAgICB2YXIgaGVhZGVycyA9IHhoci5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9XG4gICAgdmFyIHN5bmMgPSAhIW9wdGlvbnMuc3luY1xuICAgIHZhciBpc0pzb24gPSBmYWxzZVxuICAgIHZhciB0aW1lb3V0VGltZXJcbiAgICB2YXIgZmFpbHVyZVJlc3BvbnNlID0ge1xuICAgICAgICBib2R5OiB1bmRlZmluZWQsXG4gICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICBzdGF0dXNDb2RlOiAwLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgdXJsOiB1cmksXG4gICAgICAgIHJhd1JlcXVlc3Q6IHhoclxuICAgIH1cblxuICAgIGlmIChcImpzb25cIiBpbiBvcHRpb25zICYmIG9wdGlvbnMuanNvbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgaXNKc29uID0gdHJ1ZVxuICAgICAgICBoZWFkZXJzW1wiYWNjZXB0XCJdIHx8IGhlYWRlcnNbXCJBY2NlcHRcIl0gfHwgKGhlYWRlcnNbXCJBY2NlcHRcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gXCJHRVRcIiAmJiBtZXRob2QgIT09IFwiSEVBRFwiKSB7XG4gICAgICAgICAgICBoZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24gPT09IHRydWUgPyBib2R5IDogb3B0aW9ucy5qc29uKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHJlYWR5c3RhdGVjaGFuZ2VcbiAgICB4aHIub25sb2FkID0gbG9hZEZ1bmNcbiAgICB4aHIub25lcnJvciA9IGVycm9yRnVuY1xuICAgIC8vIElFOSBtdXN0IGhhdmUgb25wcm9ncmVzcyBiZSBzZXQgdG8gYSB1bmlxdWUgZnVuY3Rpb24uXG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIElFIG11c3QgZGllXG4gICAgfVxuICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgYWJvcnRlZCA9IHRydWU7XG4gICAgfVxuICAgIHhoci5vbnRpbWVvdXQgPSBlcnJvckZ1bmNcbiAgICB4aHIub3BlbihtZXRob2QsIHVyaSwgIXN5bmMsIG9wdGlvbnMudXNlcm5hbWUsIG9wdGlvbnMucGFzc3dvcmQpXG4gICAgLy9oYXMgdG8gYmUgYWZ0ZXIgb3BlblxuICAgIGlmKCFzeW5jKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSAhIW9wdGlvbnMud2l0aENyZWRlbnRpYWxzXG4gICAgfVxuICAgIC8vIENhbm5vdCBzZXQgdGltZW91dCB3aXRoIHN5bmMgcmVxdWVzdFxuICAgIC8vIG5vdCBzZXR0aW5nIHRpbWVvdXQgb24gdGhlIHhociBvYmplY3QsIGJlY2F1c2Ugb2Ygb2xkIHdlYmtpdHMgZXRjLiBub3QgaGFuZGxpbmcgdGhhdCBjb3JyZWN0bHlcbiAgICAvLyBib3RoIG5wbSdzIHJlcXVlc3QgYW5kIGpxdWVyeSAxLnggdXNlIHRoaXMga2luZCBvZiB0aW1lb3V0LCBzbyB0aGlzIGlzIGJlaW5nIGNvbnNpc3RlbnRcbiAgICBpZiAoIXN5bmMgJiYgb3B0aW9ucy50aW1lb3V0ID4gMCApIHtcbiAgICAgICAgdGltZW91dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGFib3J0ZWQpIHJldHVyblxuICAgICAgICAgICAgYWJvcnRlZCA9IHRydWUvL0lFOSBtYXkgc3RpbGwgY2FsbCByZWFkeXN0YXRlY2hhbmdlXG4gICAgICAgICAgICB4aHIuYWJvcnQoXCJ0aW1lb3V0XCIpXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcihcIlhNTEh0dHBSZXF1ZXN0IHRpbWVvdXRcIilcbiAgICAgICAgICAgIGUuY29kZSA9IFwiRVRJTUVET1VUXCJcbiAgICAgICAgICAgIGVycm9yRnVuYyhlKVxuICAgICAgICB9LCBvcHRpb25zLnRpbWVvdXQgKVxuICAgIH1cblxuICAgIGlmICh4aHIuc2V0UmVxdWVzdEhlYWRlcikge1xuICAgICAgICBmb3Ioa2V5IGluIGhlYWRlcnMpe1xuICAgICAgICAgICAgaWYoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5oZWFkZXJzICYmICFpc0VtcHR5KG9wdGlvbnMuaGVhZGVycykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGVhZGVycyBjYW5ub3QgYmUgc2V0IG9uIGFuIFhEb21haW5SZXF1ZXN0IG9iamVjdFwiKVxuICAgIH1cblxuICAgIGlmIChcInJlc3BvbnNlVHlwZVwiIGluIG9wdGlvbnMpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlXG4gICAgfVxuXG4gICAgaWYgKFwiYmVmb3JlU2VuZFwiIGluIG9wdGlvbnMgJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMuYmVmb3JlU2VuZCA9PT0gXCJmdW5jdGlvblwiXG4gICAgKSB7XG4gICAgICAgIG9wdGlvbnMuYmVmb3JlU2VuZCh4aHIpXG4gICAgfVxuXG4gICAgLy8gTWljcm9zb2Z0IEVkZ2UgYnJvd3NlciBzZW5kcyBcInVuZGVmaW5lZFwiIHdoZW4gc2VuZCBpcyBjYWxsZWQgd2l0aCB1bmRlZmluZWQgdmFsdWUuXG4gICAgLy8gWE1MSHR0cFJlcXVlc3Qgc3BlYyBzYXlzIHRvIHBhc3MgbnVsbCBhcyBib2R5IHRvIGluZGljYXRlIG5vIGJvZHlcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25hdWd0dXIveGhyL2lzc3Vlcy8xMDAuXG4gICAgeGhyLnNlbmQoYm9keSB8fCBudWxsKVxuXG4gICAgcmV0dXJuIHhoclxuXG5cbn1cblxuZnVuY3Rpb24gZ2V0WG1sKHhocikge1xuICAgIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSBcImRvY3VtZW50XCIpIHtcbiAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVhNTFxuICAgIH1cbiAgICB2YXIgZmlyZWZveEJ1Z1Rha2VuRWZmZWN0ID0geGhyLnJlc3BvbnNlWE1MICYmIHhoci5yZXNwb25zZVhNTC5kb2N1bWVudEVsZW1lbnQubm9kZU5hbWUgPT09IFwicGFyc2VyZXJyb3JcIlxuICAgIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSBcIlwiICYmICFmaXJlZm94QnVnVGFrZW5FZmZlY3QpIHtcbiAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVhNTFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMveGhyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB3aW47XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luID0gc2VsZjtcbn0gZWxzZSB7XG4gICAgd2luID0ge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2xvYmFsL3dpbmRvdy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbiAgLCBmb3JFYWNoID0gcmVxdWlyZSgnZm9yLWVhY2gnKVxuICAsIGlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgaWYgKCFoZWFkZXJzKVxuICAgIHJldHVybiB7fVxuXG4gIHZhciByZXN1bHQgPSB7fVxuXG4gIGZvckVhY2goXG4gICAgICB0cmltKGhlYWRlcnMpLnNwbGl0KCdcXG4nKVxuICAgICwgZnVuY3Rpb24gKHJvdykge1xuICAgICAgICB2YXIgaW5kZXggPSByb3cuaW5kZXhPZignOicpXG4gICAgICAgICAgLCBrZXkgPSB0cmltKHJvdy5zbGljZSgwLCBpbmRleCkpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAsIHZhbHVlID0gdHJpbShyb3cuc2xpY2UoaW5kZXggKyAxKSlcblxuICAgICAgICBpZiAodHlwZW9mKHJlc3VsdFtrZXldKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShyZXN1bHRba2V5XSkpIHtcbiAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gWyByZXN1bHRba2V5XSwgdmFsdWUgXVxuICAgICAgICB9XG4gICAgICB9XG4gIClcblxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcGFyc2UtaGVhZGVycy9wYXJzZS1oZWFkZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHJpbTtcblxuZnVuY3Rpb24gdHJpbShzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxuZXhwb3J0cy5sZWZ0ID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbn07XG5cbmV4cG9ydHMucmlnaHQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccyokLywgJycpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RyaW0vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdpcy1mdW5jdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaFxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5cbmZ1bmN0aW9uIGZvckVhY2gobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWlzRnVuY3Rpb24oaXRlcmF0b3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2l0ZXJhdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpXG4gICAgfVxuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSB7XG4gICAgICAgIGNvbnRleHQgPSB0aGlzXG4gICAgfVxuICAgIFxuICAgIGlmICh0b1N0cmluZy5jYWxsKGxpc3QpID09PSAnW29iamVjdCBBcnJheV0nKVxuICAgICAgICBmb3JFYWNoQXJyYXkobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpXG4gICAgZWxzZSBpZiAodHlwZW9mIGxpc3QgPT09ICdzdHJpbmcnKVxuICAgICAgICBmb3JFYWNoU3RyaW5nKGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KVxuICAgIGVsc2VcbiAgICAgICAgZm9yRWFjaE9iamVjdChsaXN0LCBpdGVyYXRvciwgY29udGV4dClcbn1cblxuZnVuY3Rpb24gZm9yRWFjaEFycmF5KGFycmF5LCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgaSkpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgYXJyYXlbaV0sIGksIGFycmF5KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoU3RyaW5nKHN0cmluZywgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyaW5nLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIC8vIG5vIHN1Y2ggdGhpbmcgYXMgYSBzcGFyc2Ugc3RyaW5nLlxuICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHN0cmluZy5jaGFyQXQoaSksIGksIHN0cmluZylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hPYmplY3Qob2JqZWN0LCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGZvciAodmFyIGsgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgaykpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqZWN0W2tdLCBrLCBvYmplY3QpXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mb3ItZWFjaC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibGV0IGxhc3RFcnJvciA9ICcnO1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIEhUTE0gZm9yIGEgZmFpbHVyZSBtZXNzYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FudmFzQ29udGFpbmVySWQgaWQgb2YgY29udGFpbmVyIG9mIHRoXG4gKiAgICAgICAgY2FudmFzLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgaHRtbC5cbiAqL1xuZnVuY3Rpb24gbWFrZUZhaWxIVE1MKG1zZykge1xuICAgIHJldHVybiBgXG48dGFibGUgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjOENFOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1wiPjx0cj5cbjx0ZCBhbGlnbj1cImNlbnRlclwiPlxuPGRpdiBzdHlsZT1cImRpc3BsYXk6IHRhYmxlLWNlbGw7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+XG48ZGl2IHN0eWxlPVwiXCI+YCArIG1zZyArIGA8L2Rpdj5cbjwvZGl2PlxuPC90ZD48L3RyPjwvdGFibGU+XG5gO1xufVxuXG4vKipcbiAqIE1lc2FzZ2UgZm9yIGdldHRpbmcgYSB3ZWJnbCBicm93c2VyXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5sZXQgR0VUX0FfV0VCR0xfQlJPV1NFUiA9IGBcblx0VGhpcyBwYWdlIHJlcXVpcmVzIGEgYnJvd3NlciB0aGF0IHN1cHBvcnRzIFdlYkdMLjxici8+XG5cdDxhIGhyZWY9XCJodHRwOi8vZ2V0LndlYmdsLm9yZ1wiPkNsaWNrIGhlcmUgdG8gdXBncmFkZSB5b3VyIGJyb3dzZXIuPC9hPlxuYDtcblxuLyoqXG4gKiBNZXNhc2dlIGZvciBuZWVkIGJldHRlciBoYXJkd2FyZVxuICogQHR5cGUge3N0cmluZ31cbiAqL1xubGV0IE9USEVSX1BST0JMRU0gPSBgXG5cdEl0IGRvZXMgbm90IGFwcGVhciB5b3VyIGNvbXB1dGVyIGNhbiBzdXBwb3J0IFdlYkdMLjxici8+XG5cdDxhIGhyZWY9XCJodHRwOi8vZ2V0LndlYmdsLm9yZy90cm91Ymxlc2hvb3RpbmcvXCI+Q2xpY2sgaGVyZSBmb3IgbW9yZSBpbmZvcm1hdGlvbi48L2E+XG5gO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB3ZWJnbCBjb250ZXh0LiBJZiBjcmVhdGlvbiBmYWlscyBpdCB3aWxsXG4gKiBjaGFuZ2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBjb250YWluZXIgb2YgdGhlIDxjYW52YXM+XG4gKiB0YWcgdG8gYW4gZXJyb3IgbWVzc2FnZSB3aXRoIHRoZSBjb3JyZWN0IGxpbmtzIGZvciBXZWJHTC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gY2FudmFzLiBUaGUgY2FudmFzIGVsZW1lbnQgdG8gY3JlYXRlIGFcbiAqICAgICBjb250ZXh0IGZyb20uXG4gKiBAcGFyYW0ge1dlYkdMQ29udGV4dENyZWF0aW9uQXR0aXJidXRlc30gb3B0QXR0cmlicyBBbnlcbiAqICAgICBjcmVhdGlvbiBhdHRyaWJ1dGVzIHlvdSB3YW50IHRvIHBhc3MgaW4uXG4gKiBAcmV0dXJuIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IFRoZSBjcmVhdGVkIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFdlYkdMIChjYW52YXMsIG9wdEF0dHJpYnMpIHtcbiAgICBmdW5jdGlvbiBzaG93TGluayhzdHIpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNhbnZhcy5wYXJlbnROb2RlO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gbWFrZUZhaWxIVE1MKHN0cik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5XZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcbiAgICAgICAgc2hvd0xpbmsoR0VUX0FfV0VCR0xfQlJPV1NFUik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBjb250ZXh0ID0gY3JlYXRlM0RDb250ZXh0KGNhbnZhcywgb3B0QXR0cmlicyk7XG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIHNob3dMaW5rKE9USEVSX1BST0JMRU0pO1xuICAgIH1cbiAgICBjb250ZXh0LmdldEV4dGVuc2lvbignT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzJyk7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHdlYmdsIGNvbnRleHQuXG4gKiBAcGFyYW0geyFDYW52YXN9IGNhbnZhcyBUaGUgY2FudmFzIHRhZyB0byBnZXQgY29udGV4dFxuICogICAgIGZyb20uIElmIG9uZSBpcyBub3QgcGFzc2VkIGluIG9uZSB3aWxsIGJlIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHshV2ViR0xDb250ZXh0fSBUaGUgY3JlYXRlZCBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlM0RDb250ZXh0KGNhbnZhcywgb3B0QXR0cmlicykge1xuICAgIGxldCBuYW1lcyA9IFsnd2ViZ2wnLCAnZXhwZXJpbWVudGFsLXdlYmdsJ107XG4gICAgbGV0IGNvbnRleHQgPSBudWxsO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBuYW1lcy5sZW5ndGg7ICsraWkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChuYW1lc1tpaV0sIG9wdEF0dHJpYnMpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbi8qXG4gKlx0Q3JlYXRlIGEgVmVydGV4IG9mIGEgc3BlY2lmaWMgdHlwZSAoZ2wuVkVSVEVYX1NIQURFUi8pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGFkZXIobWFpbiwgc291cmNlLCB0eXBlKSB7XG4gICAgbGV0IGdsID0gbWFpbi5nbDtcblxuICAgIGxldCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgICBsZXQgY29tcGlsZWQgPSBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUyk7XG5cbiAgICBpZiAoIWNvbXBpbGVkKSB7XG4gICAgICAgIC8vIFNvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyBjb21waWxhdGlvbjsgZ2V0IHRoZSBlcnJvclxuICAgICAgICBsYXN0RXJyb3IgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyoqKiBFcnJvciBjb21waWxpbmcgc2hhZGVyICcgKyBzaGFkZXIgKyAnOicgKyBsYXN0RXJyb3IpO1xuICAgICAgICBtYWluLnRyaWdnZXIoJ2Vycm9yJywgeyBzaGFkZXI6IHNoYWRlciwgc291cmNlOiBzb3VyY2UsIHR5cGU6IHR5cGUsIGVycm9yOiBsYXN0RXJyb3IgfSk7XG4gICAgICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZGVyO1xufVxuXG4vKipcbiAqIExvYWRzIGEgc2hhZGVyLlxuICogQHBhcmFtIHshV2ViR0xDb250ZXh0fSBnbCBUaGUgV2ViR0xDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGFkZXJTb3VyY2UgVGhlIHNoYWRlciBzb3VyY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gc2hhZGVyVHlwZSBUaGUgdHlwZSBvZiBzaGFkZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6IHZvaWQpIG9wdF9lcnJvckNhbGxiYWNrIGNhbGxiYWNrIGZvciBlcnJvcnMuXG4gKiBAcmV0dXJuIHshV2ViR0xTaGFkZXJ9IFRoZSBjcmVhdGVkIHNoYWRlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0obWFpbiwgc2hhZGVycywgb3B0QXR0cmlicywgb3B0TG9jYXRpb25zKSB7XG4gICAgbGV0IGdsID0gbWFpbi5nbDtcblxuICAgIGxldCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBzaGFkZXJzLmxlbmd0aDsgKytpaSkge1xuICAgICAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgc2hhZGVyc1tpaV0pO1xuICAgIH1cbiAgICBpZiAob3B0QXR0cmlicykge1xuICAgICAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgb3B0QXR0cmlicy5sZW5ndGg7ICsraWkpIHtcbiAgICAgICAgICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbihcbiAgICAgICAgICAgIHByb2dyYW0sXG4gICAgICAgICAgICBvcHRMb2NhdGlvbnMgPyBvcHRMb2NhdGlvbnNbaWldIDogaWksXG4gICAgICAgICAgICBvcHRBdHRyaWJzW2lpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICAvLyBDaGVjayB0aGUgbGluayBzdGF0dXNcbiAgICBsZXQgbGlua2VkID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyk7XG4gICAgaWYgKCFsaW5rZWQpIHtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCB0aGUgbGlua1xuICAgICAgICBsYXN0RXJyb3IgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIHByb2dyYW0gbGlua2luZzonICsgbGFzdEVycm9yKTtcbiAgICAgICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBwcm9ncmFtO1xufVxuXG4vLyBCeSBCcmV0dCBDYW1iZXIgb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YW5ncmFtcy90YW5ncmFtL2Jsb2IvbWFzdGVyL3NyYy9nbC9nbHNsLmpzXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVbmlmb3Jtcyh1bmlmb3JtcywgcHJlZml4ID0gbnVsbCkge1xuICAgIGxldCBwYXJzZWQgPSBbXTtcblxuICAgIGZvciAobGV0IG5hbWUgaW4gdW5pZm9ybXMpIHtcbiAgICAgICAgbGV0IHVuaWZvcm0gPSB1bmlmb3Jtc1tuYW1lXTtcbiAgICAgICAgbGV0IHU7XG5cbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgbmFtZSA9IHByZWZpeCArICcuJyArIG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaW5nbGUgZmxvYXRcbiAgICAgICAgaWYgKHR5cGVvZiB1bmlmb3JtID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdmbG9hdCcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnMWYnLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFycmF5OiB2ZWN0b3IsIGFycmF5IG9mIGZsb2F0cywgYXJyYXkgb2YgdGV4dHVyZXMsIG9yIGFycmF5IG9mIHN0cnVjdHNcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh1bmlmb3JtKSkge1xuICAgICAgICAgICAgLy8gTnVtZXJpYyB2YWx1ZXNcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdW5pZm9ybVswXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAvLyBmbG9hdCB2ZWN0b3JzICh2ZWMyLCB2ZWMzLCB2ZWM0KVxuICAgICAgICAgICAgICAgIGlmICh1bmlmb3JtLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmxvYXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnMWYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmbG9hdCB2ZWN0b3JzICh2ZWMyLCB2ZWMzLCB2ZWM0KVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVuaWZvcm0ubGVuZ3RoID49IDIgJiYgdW5pZm9ybS5sZW5ndGggPD0gNCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndmVjJyArIHVuaWZvcm0ubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB1bmlmb3JtLmxlbmd0aCArICdmdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZsb2F0IGFycmF5XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodW5pZm9ybS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmbG9hdFtdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJzFmdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lICsgJ1swXScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdW5pZm9ybVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogYXNzdW1lIG1hdHJpeCBmb3IgKHR5cGVvZiA9PSBGbG9hdDMyQXJyYXkgJiYgbGVuZ3RoID09IDE2KT9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFycmF5IG9mIHRleHR1cmVzXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdW5pZm9ybVswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzYW1wbGVyMkQnLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICcxaScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcnJheSBvZiBhcnJheXMgLSBidXQgb25seSBhcnJheXMgb2YgdmVjdG9ycyBhcmUgYWxsb3dlZCBpbiB0aGlzIGNhc2VcbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodW5pZm9ybVswXSkgJiYgdHlwZW9mIHVuaWZvcm1bMF1bMF0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgLy8gZmxvYXQgdmVjdG9ycyAodmVjMiwgdmVjMywgdmVjNClcbiAgICAgICAgICAgICAgICBpZiAodW5pZm9ybVswXS5sZW5ndGggPj0gMiAmJiB1bmlmb3JtWzBdLmxlbmd0aCA8PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgZm9yICh1ID0gMDsgdSA8IHVuaWZvcm0ubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndmVjJyArIHVuaWZvcm1bMF0ubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogdW5pZm9ybVt1XS5sZW5ndGggKyAnZnYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgKyAnWycgKyB1ICsgJ10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtW3VdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBlbHNlIGVycm9yP1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXJyYXkgb2Ygc3RydWN0dXJlc1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHVuaWZvcm1bMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgZm9yICh1ID0gMDsgdSA8IHVuaWZvcm0ubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGVhY2ggc3RydWN0IGluIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHVzaCguLi5wYXJzZVVuaWZvcm1zKHVuaWZvcm1bdV0sIG5hbWUgKyAnWycgKyB1ICsgJ10nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEJvb2xlYW5cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHVuaWZvcm0gPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sJyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICcxaScsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdW5pZm9ybVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGV4dHVyZVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdW5pZm9ybSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2FtcGxlcjJEJyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICcxaScsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdW5pZm9ybVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RydWN0dXJlXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1bmlmb3JtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gU2V0IGVhY2ggZmllbGQgaW4gdGhlIHN0cnVjdFxuICAgICAgICAgICAgcGFyc2VkLnB1c2goLi4ucGFyc2VVbmlmb3Jtcyh1bmlmb3JtLCBuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETzogc3VwcG9ydCBvdGhlciBub24tZmxvYXQgdHlwZXM/IChpbnQsIGV0Yy4pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWQ7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL3NyYy9nbC9nbC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGV4dHVyZSBtYW5hZ2VtZW50XG5pbXBvcnQgeyBpc1Bvd2VyT2YyLCBpc1NhZmFyaSB9IGZyb20gJy4uL3Rvb2xzL2NvbW1vbic7XG5pbXBvcnQgeyBzdWJzY3JpYmVNaXhpbiB9IGZyb20gJy4uL3Rvb2xzL21peGluJztcblxuLy8gR0wgdGV4dHVyZSB3cmFwcGVyIG9iamVjdCBmb3Iga2VlcGluZyB0cmFjayBvZiBhIGdsb2JhbCBzZXQgb2YgdGV4dHVyZXMsIGtleWVkIGJ5IGEgdW5pcXVlIHVzZXItZGVmaW5lZCBuYW1lXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcihnbCwgbmFtZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1YnNjcmliZU1peGluKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICBpZiAodGhpcy50ZXh0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJpbmQoKTtcblxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc291cmNlVHlwZSA9IG51bGw7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IG51bGw7IC8vIGEgUHJvbWlzZSBvYmplY3QgdG8gdHJhY2sgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhpcyB0ZXh0dXJlXG5cbiAgICAgICAgLy8gRGVmYXVsdCB0byBhIDEtcGl4ZWwgYmxhY2sgdGV4dHVyZSBzbyB3ZSBjYW4gc2FmZWx5IHJlbmRlciB3aGlsZSB3ZSB3YWl0IGZvciBhbiBpbWFnZSB0byBsb2FkXG4gICAgICAgIC8vIFNlZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTcyMjI0Ny93ZWJnbC13YWl0LWZvci10ZXh0dXJlLXRvLWxvYWRcbiAgICAgICAgdGhpcy5zZXREYXRhKDEsIDEsIG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAyNTVdKSwgeyBmaWx0ZXJpbmc6ICdsaW5lYXInIH0pO1xuICAgICAgICB0aGlzLnNldEZpbHRlcmluZyhvcHRpb25zLmZpbHRlcmluZyk7XG5cbiAgICAgICAgdGhpcy5sb2FkKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIERlc3Ryb3kgYSBzaW5nbGUgdGV4dHVyZSBpbnN0YW5jZVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICghdGhpcy52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2wuZGVsZXRlVGV4dHVyZSh0aGlzLnRleHR1cmUpO1xuICAgICAgICB0aGlzLnRleHR1cmUgPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYmluZCh1bml0KSB7XG4gICAgICAgIGlmICghdGhpcy52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdW5pdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChUZXh0dXJlLmFjdGl2ZVVuaXQgIT09IHVuaXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmFjdGl2ZVRleHR1cmUodGhpcy5nbC5URVhUVVJFMCArIHVuaXQpO1xuICAgICAgICAgICAgICAgIFRleHR1cmUuYWN0aXZlVW5pdCA9IHVuaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFRleHR1cmUuYWN0aXZlVGV4dHVyZSAhPT0gdGhpcy50ZXh0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlKTtcbiAgICAgICAgICAgIFRleHR1cmUuYWN0aXZlVGV4dHVyZSA9IHRoaXMudGV4dHVyZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWQob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IG51bGw7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVybCA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudXJsICE9PSB0aGlzLnVybCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VXJsKG9wdGlvbnMudXJsLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudChvcHRpb25zLmVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLndpZHRoICYmIG9wdGlvbnMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQsIG9wdGlvbnMuZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXRzIHRleHR1cmUgZnJvbSBhbiB1cmxcbiAgICBzZXRVcmwodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVybCA9IHVybDsgLy8gc2F2ZSBVUkwgcmVmZXJlbmNlICh3aWxsIGJlIG92ZXJ3cml0dGVuIHdoZW4gZWxlbWVudCBpcyBsb2FkZWQgYmVsb3cpXG4gICAgICAgIHRoaXMuc291cmNlID0gdGhpcy51cmw7XG4gICAgICAgIHRoaXMuc291cmNlVHlwZSA9ICd1cmwnO1xuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBleHQgPSB1cmwuc3BsaXQoJy4nKS5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgbGV0IGlzVmlkZW8gPSAoZXh0ID09PSAnb2d2JyB8fCBleHQgPT09ICd3ZWJtJyB8fCBleHQgPT09ICdtcDQnKTtcblxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpc1ZpZGVvKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hdXRvcGxheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5maWx0ZXJpbmcgPSAnbmVhcmVzdCc7XG4gICAgICAgICAgICAgICAgLy8gZWxlbWVudC5wcmVsb2FkID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW1lbnQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudChlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRleHR1cmUgJyR7dGhpcy5uYW1lfSc6IGZhaWxlZCB0byBsb2FkIHVybDogJyR7dGhpcy5zb3VyY2V9J2AsIGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGVsZW1lbnQub25lcnJvciA9IGUgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFdhcm4gYW5kIHJlc29sdmUgb24gZXJyb3JcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGV4dHVyZSAnJHt0aGlzLm5hbWV9JzogZmFpbGVkIHRvIGxvYWQgdXJsOiAnJHt0aGlzLnNvdXJjZX0nYCwgZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFNhZmFyaSBoYXMgYSBidWcgbG9hZGluZyBkYXRhLVVSTCBlbGVtZW50cyB3aXRoIENPUlMgZW5hYmxlZCwgc28gaXQgbXVzdCBiZSBkaXNhYmxlZCBpbiB0aGF0IGNhc2VcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjM5NzhcbiAgICAgICAgICAgIGlmICghKGlzU2FmYXJpKCkgJiYgdGhpcy5zb3VyY2Uuc2xpY2UoMCwgNSkgPT09ICdkYXRhOicpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtZW50LnNyYyA9IHRoaXMuc291cmNlO1xuICAgICAgICAgICAgaWYgKGlzVmlkZW8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xuICAgIH1cblxuICAgIC8vIFNldHMgdGV4dHVyZSB0byBhIHJhdyBpbWFnZSBidWZmZXJcbiAgICBzZXREYXRhKHdpZHRoLCBoZWlnaHQsIGRhdGEsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuc291cmNlID0gZGF0YTtcbiAgICAgICAgdGhpcy5zb3VyY2VUeXBlID0gJ2RhdGEnO1xuXG4gICAgICAgIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnNldEZpbHRlcmluZyhvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBQcm9taXNlLnJlc29sdmUodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgdGV4dHVyZSB0byB0cmFjayBhIGVsZW1lbnQgKGNhbnZhcy9pbWFnZSlcbiAgICBzZXRFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IGVsID0gZWxlbWVudDtcblxuICAgICAgICAvLyBhIHN0cmluZyBlbGVtZW50IGlzIGludGVycGV0ZWQgYXMgYSBDU1Mgc2VsZWN0b3JcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50IHx8XG4gICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCB8fFxuICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuc291cmNlVHlwZSA9ICdlbGVtZW50JztcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5dGhyb3VnaCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxNSk7XG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShvcHRpb25zKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc2V0RmlsdGVyaW5nKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IG1zZyA9IGB0aGUgJ2VsZW1lbnQnIHBhcmFtZXRlciAoXFxgZWxlbWVudDogJHtKU09OLnN0cmluZ2lmeShlbCl9XFxgKSBtdXN0IGJlIGEgQ1NTIGA7XG4gICAgICAgICAgICBtc2cgKz0gYHNlbGVjdG9yIHN0cmluZywgb3IgYSA8Y2FudmFzPiwgPGltYWdlPiBvciA8dmlkZW8+IG9iamVjdGA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGV4dHVyZSAnJHt0aGlzLm5hbWV9JzogJHttc2d9YCwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBQcm9taXNlLnJlc29sdmUodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgLy8gVXBsb2FkcyBjdXJyZW50IGltYWdlIG9yIGJ1ZmZlciB0byB0aGUgR1BVIChjYW4gYmUgdXNlZCB0byB1cGRhdGUgYW5pbWF0ZWQgdGV4dHVyZXMgb24gdGhlIGZseSlcbiAgICB1cGRhdGUob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmICghdGhpcy52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgICAgIHRoaXMuZ2wucGl4ZWxTdG9yZWkodGhpcy5nbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCAob3B0aW9ucy5VTlBBQ0tfRkxJUF9ZX1dFQkdMID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSkpO1xuICAgICAgICB0aGlzLmdsLnBpeGVsU3RvcmVpKHRoaXMuZ2wuVU5QQUNLX1BSRU1VTFRJUExZX0FMUEhBX1dFQkdMLCBvcHRpb25zLlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCB8fCBmYWxzZSk7XG5cbiAgICAgICAgLy8gSW1hZ2Ugb3IgQ2FudmFzIGVsZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuc291cmNlVHlwZSA9PT0gJ2VsZW1lbnQnICYmXG4gICAgICAgICAgICAoKHRoaXMuc291cmNlIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHx8IFxuICAgICAgICAgICAgICh0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQpIHx8XG4gICAgICAgICAgICAgKHRoaXMuc291cmNlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCAmJiB0aGlzLnNvdXJjZS5jb21wbGV0ZSkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zb3VyY2UgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuc291cmNlLnZpZGVvV2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnNvdXJjZS52aWRlb0hlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuc291cmNlLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5zb3VyY2UuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgMCwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgdGhpcy5zb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJhdyBpbWFnZSBidWZmZXJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zb3VyY2VUeXBlID09PSAnZGF0YScpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIDAsIHRoaXMuZ2wuUkdCQSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIHRoaXMuZ2wuUkdCQSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCB0aGlzLnNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCdsb2FkZWQnLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmVzIGFwcHJvcHJpYXRlIGZpbHRlcmluZyBtb2RlXG4gICAgc2V0RmlsdGVyaW5nIChvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvd2VyT2YyID0gaXNQb3dlck9mMih0aGlzLndpZHRoKSAmJiBpc1Bvd2VyT2YyKHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IGRlZnVhbHRGaWx0ZXIgPSAodGhpcy5wb3dlck9mMiA/ICdtaXBtYXAnIDogJ2xpbmVhcicpO1xuICAgICAgICB0aGlzLmZpbHRlcmluZyA9IG9wdGlvbnMuZmlsdGVyaW5nIHx8IGRlZnVhbHRGaWx0ZXI7XG5cbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcbiAgICAgICAgdGhpcy5iaW5kKCk7XG5cbiAgICAgICAgLy8gRm9yIHBvd2VyLW9mLTIgdGV4dHVyZXMsIHRoZSBmb2xsb3dpbmcgcHJlc2V0cyBhcmUgYXZhaWxhYmxlOlxuICAgICAgICAvLyBtaXBtYXA6IGxpbmVhciBibGVuZCBmcm9tIG5lYXJlc3QgbWlwXG4gICAgICAgIC8vIGxpbmVhcjogbGluZWFyIGJsZW5kIGZyb20gb3JpZ2luYWwgaW1hZ2UgKG5vIG1pcHMpXG4gICAgICAgIC8vIG5lYXJlc3Q6IG5lYXJlc3QgcGl4ZWwgZnJvbSBvcmlnaW5hbCBpbWFnZSAobm8gbWlwcywgJ2Jsb2NreScgbG9vaylcbiAgICAgICAgaWYgKHRoaXMucG93ZXJPZjIpIHtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIG9wdGlvbnMuVEVYVFVSRV9XUkFQX1MgfHwgKG9wdGlvbnMucmVwZWF0ICYmIGdsLlJFUEVBVCkgfHwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBvcHRpb25zLlRFWFRVUkVfV1JBUF9UIHx8IChvcHRpb25zLnJlcGVhdCAmJiBnbC5SRVBFQVQpIHx8IGdsLkNMQU1QX1RPX0VER0UpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJpbmcgPT09ICdtaXBtYXAnKSB7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUl9NSVBNQVBfTElORUFSKTsgLy8gVE9ETzogdXNlIHRyaWxpbmVhciBmaWx0ZXJpbmcgYnkgZGVmdWFsdCBpbnN0ZWFkP1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgICAgICAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5maWx0ZXJpbmcgPT09ICdsaW5lYXInKSB7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmZpbHRlcmluZyA9PT0gJ25lYXJlc3QnKSB7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlYkdMIGhhcyBzdHJpY3QgcmVxdWlyZW1lbnRzIG9uIG5vbi1wb3dlci1vZi0yIHRleHR1cmVzOlxuICAgICAgICAgICAgLy8gTm8gbWlwbWFwcyBhbmQgbXVzdCBjbGFtcCB0byBlZGdlXG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJpbmcgPT09ICdtaXBtYXAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJpbmcgPSAnbGluZWFyJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyaW5nID09PSAnbmVhcmVzdCcpIHtcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7IC8vIGRlZmF1bHQgdG8gbGluZWFyIGZvciBub24tcG93ZXItb2YtMiB0ZXh0dXJlc1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBSZXBvcnQgbWF4IHRleHR1cmUgc2l6ZSBmb3IgYSBHTCBjb250ZXh0XG5UZXh0dXJlLmdldE1heFRleHR1cmVTaXplID0gZnVuY3Rpb24gKGdsKSB7XG4gICAgcmV0dXJuIGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9TSVpFKTtcbn07XG5cbi8vIEdsb2JhbCBzZXQgb2YgdGV4dHVyZXMsIGJ5IG5hbWVcblRleHR1cmUuYWN0aXZlVW5pdCA9IC0xO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9zcmMvZ2wvVGV4dHVyZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5cblxuaW1wb3J0IHN1biBmcm9tICcuL3N1bi5nbHNsJztcbmltcG9ydCBzcGhlcmUgZnJvbSAnLi9zcGhlcmUuZ2xzbCc7XG5pbXBvcnQgZmJtIGZyb20gJy4vZmJtLmdsc2wnO1xuaW1wb3J0IGZpcmUgZnJvbSAnLi9maXJlLmdsc2wnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN1bixcbiAgZmlyZSxcbiAgZmJtLFxuICBcbiAgc3BoZXJlLFxuICBcbiAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYWRlcnMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2lmZGVmIEdMX0VTXFxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuI2VuZGlmXFxuXFxuXFxuY29uc3QgZmxvYXQgUEkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTU7XFxuY29uc3QgZmxvYXQgUEkyID0gNi4yODMxODUzMDcxODtcXG5cXG5mbG9hdCBhbG1vc3RJZGVudGl0eSggZmxvYXQgeCwgZmxvYXQgbSwgZmxvYXQgbiApXFxue1xcbiAgICBpZiggeD5tICkgcmV0dXJuIHg7XFxuXFxuICAgIGZsb2F0IGEgPSAyLjAqbiAtIG07XFxuICAgIGZsb2F0IGIgPSAyLjAqbSAtIDMuMCpuO1xcbiAgICBmbG9hdCB0ID0geC9tO1xcblxcbiAgICByZXR1cm4gKGEqdCArIGIpKnQqdCArIG47XFxufVxcblxcblxcbmZsb2F0IGltcHVsc2UoIGZsb2F0IGssIGZsb2F0IHggKVxcbntcXG4gICAgZmxvYXQgaCA9IGsqeDtcXG4gICAgcmV0dXJuIGgqZXhwKDEuMC1oKTtcXG59XFxuXFxuZmxvYXQgY3ViaWNQdWxzZSggZmxvYXQgYywgZmxvYXQgdywgZmxvYXQgeCApXFxue1xcbiAgICB4ID0gYWJzKHggLSBjKTtcXG4gICAgaWYoIHg+dyApIHJldHVybiAwLjA7XFxuICAgIHggLz0gdztcXG4gICAgcmV0dXJuIDEuMCAtIHgqeCooMy4wLTIuMCp4KTtcXG59XFxuXFxuZmxvYXQgZXhwU3RlcCggZmxvYXQgeCwgZmxvYXQgaywgZmxvYXQgbiApXFxue1xcbiAgICByZXR1cm4gZXhwKCAtaypwb3coeCxuKSApO1xcbn1cXG5cXG5cXG5mbG9hdCBnYWluKGZsb2F0IHgsIGZsb2F0IGspXFxue1xcbiAgICBmbG9hdCBhID0gMC41KnBvdygyLjAqKCh4PDAuNSk/eDoxLjAteCksIGspO1xcbiAgICByZXR1cm4gKHg8MC41KT9hOjEuMC1hO1xcbn1cXG5cXG5cXG5mbG9hdCBwYXJhYm9sYSggZmxvYXQgeCwgZmxvYXQgayApXFxue1xcbiAgICByZXR1cm4gcG93KCA0LjAqeCooMS4wLXgpLCBrICk7XFxufVxcblxcbmZsb2F0IHBjdXJ2ZSggZmxvYXQgeCwgZmxvYXQgYSwgZmxvYXQgYiApXFxue1xcbiAgICBmbG9hdCBrID0gcG93KGErYixhK2IpIC8gKHBvdyhhLGEpKnBvdyhiLGIpKTtcXG4gICAgcmV0dXJuIGsgKiBwb3coIHgsIGEgKSAqIHBvdyggMS4wLXgsIGIgKTtcXG59XFxuXFxudmVjMyByZ2IyaHNiKCBpbiB2ZWMzIGMgKXtcXG4gICAgdmVjNCBLID0gdmVjNCgwLjAsIC0xLjAgLyAzLjAsIDIuMCAvIDMuMCwgLTEuMCk7XFxuICAgIHZlYzQgcCA9IG1peCh2ZWM0KGMuYmcsIEsud3opLFxcbiAgICAgICAgICAgICAgICAgdmVjNChjLmdiLCBLLnh5KSxcXG4gICAgICAgICAgICAgICAgIHN0ZXAoYy5iLCBjLmcpKTtcXG4gICAgdmVjNCBxID0gbWl4KHZlYzQocC54eXcsIGMuciksXFxuICAgICAgICAgICAgICAgICB2ZWM0KGMuciwgcC55engpLFxcbiAgICAgICAgICAgICAgICAgc3RlcChwLngsIGMucikpO1xcbiAgICBmbG9hdCBkID0gcS54IC0gbWluKHEudywgcS55KTtcXG4gICAgZmxvYXQgZSA9IDEuMGUtMTA7XFxuICAgIHJldHVybiB2ZWMzKGFicyhxLnogKyAocS53IC0gcS55KSAvICg2LjAgKiBkICsgZSkpLFxcbiAgICAgICAgICAgICAgICBkIC8gKHEueCArIGUpLFxcbiAgICAgICAgICAgICAgICBxLngpO1xcbn1cXG5cXG4vLyAgRnVuY3Rpb24gZnJvbSBJw7FpZ28gUXVpbGVzXFxuLy8gIGh0dHBzOi8vd3d3LnNoYWRlcnRveS5jb20vdmlldy9Nc1MzV2NcXG52ZWMzIGhzYjJyZ2IoIGluIHZlYzMgYyApe1xcbiAgICB2ZWMzIHJnYiA9IGNsYW1wKGFicyhtb2QoYy54KjYuMCt2ZWMzKDAuMCw0LjAsMi4wKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDYuMCktMy4wKS0xLjAsXFxuICAgICAgICAgICAgICAgICAgICAgMC4wLFxcbiAgICAgICAgICAgICAgICAgICAgIDEuMCApO1xcbiAgICByZ2IgPSByZ2IqcmdiKigzLjAtMi4wKnJnYik7XFxuICAgIHJldHVybiBjLnogKiBtaXgodmVjMygxLjApLCByZ2IsIGMueSk7XFxufVxcblxcbmZsb2F0IHJlY3RhbmdsZSh2ZWMyIHN0LHZlYzIgYmwsIHZlYzIgdHIpIHtcXG4gICAgdmVjMiBibHYgPSBzdGVwKGJsLCBzdCk7XFxuICAgIHZlYzIgdHJ2ID0gc3RlcCh2ZWMyKDEuMCktdHIsIDEuMC1zdCk7XFxuICAgIHJldHVybiBibHYueCpibHYueSAqIHRydi54KnRydi55O1xcbn1cXG5cXG5mbG9hdCBzbW9vdGhSZWN0YW5nbGUodmVjMiBzdCx2ZWMyIGJsLCB2ZWMyIHRyLCBmbG9hdCB3KSB7XFxuICAgIHZlYzIgYmx2ID0gc21vb3Roc3RlcChibCwgYmwrdmVjMih3KSwgc3QpO1xcbiAgICB2ZWMyIHRydiA9IHNtb290aHN0ZXAodmVjMigxLjApLXRyLCB2ZWMyKDEuMCktdHIrdmVjMih3KSwgMS4wLXN0KTtcXG4gICAgcmV0dXJuIGJsdi54KmJsdi55ICogdHJ2LngqdHJ2Lnk7XFxufVxcblxcbmZsb2F0IHNtb290aENpcmNsZSh2ZWMyIHN0LCB2ZWMyIGMsIGZsb2F0IHIsIGZsb2F0IHcpIHtcXG4gICAgZmxvYXQgZCA9IGxlbmd0aChzdCAtIGMpO1xcbiAgICByZXR1cm4gc21vb3Roc3RlcChyK3csci13LGQpO1xcbn1cXG5cXG5mbG9hdCBwb2x5Z29uKHZlYzIgc3QsIHZlYzIgYywgZmxvYXQgciwgaW50IE4pIHtcXG4gICBcXHRmbG9hdCBhID0gYXRhbihzdC55LHN0LngpO1xcbiAgIFxcdGZsb2F0IHMgPSBQSSoyLjAvZmxvYXQoTik7XFxuICAgXFx0ZmxvYXQgZCA9ICBjb3MoZmxvb3IoLjUrYS9zKSAqIHMgLSBhKSAqIGRpc3RhbmNlKHN0LGMpICogMi4wO1xcbiAgICByZXR1cm4gMS4wLXNtb290aHN0ZXAoci0wLjAxLHIsZCk7XFxufVxcblxcbm1hdDIgcm90YXRlMmQoZmxvYXQgYSkge1xcbiAgICByZXR1cm4gbWF0Mihjb3MoYSksIC1zaW4oYSksIHNpbihhKSwgY29zKGEpKTtcXG59XFxuXFxudmVjMiByYW5kb20yKHZlYzIgc3Qpe1xcbiAgICBzdCA9IHZlYzIoIGRvdChzdCx2ZWMyKDEyNy4xLDMxMS43KSksIGRvdChzdCx2ZWMyKDI2OS41LDE4My4zKSkgKTtcXG4gICAgcmV0dXJuIGZyYWN0KHNpbihzdCkqNDM3NTguNTQ1MzEyMyk7XFxufVxcblxcbmZsb2F0IHJhbmRvbTJmKHZlYzIgc3Qpe1xcbiAgICBmbG9hdCB2ID0gZG90KCBkb3Qoc3QsdmVjMigxMjcuMSwzMTEuNykpLCBkb3Qoc3QsdmVjMigyNjkuNSwxODMuMykpICk7XFxuICAgIHJldHVybiBmcmFjdChzaW4odikqNDM3NTguNTQ1MzEyMyk7XFxufVxcblxcbnZlYzIgcmFuZG9tMmEodmVjMiBzdCl7XFxuICAgIHN0ID0gdmVjMiggZG90KHN0LHZlYzIoMTI3LjEsMzExLjcpKSxcXG4gICAgICAgICAgICAgIGRvdChzdCx2ZWMyKDI2OS41LDE4My4zKSkgKTtcXG4gICAgcmV0dXJuIC0xLjAgKyAyLjAqZnJhY3Qoc2luKHN0KSo0Mzc1OC41NDUzMTIzKTtcXG59XFxuXFxudmVjMyByYW5kb20zYSh2ZWMzIHN0KXtcXG4gICAgc3QgPSB2ZWMzKCBkb3Qoc3QsdmVjMygxMjcuMSwzMTEuNywxMjMuNikpLFxcbiAgICAgICAgICAgICAgIGRvdChzdCx2ZWMzKDI2OS41LDE4My4zLDk3LjEpKSxcXG4gICAgICAgICAgICAgICAgZG90KHN0LHZlYzMoMTQ2Ljg3LDI0NS4xMiw0OC43KSlcXG4gICAgICAgICAgICAgICAgKTtcXG4gICAgcmV0dXJuIC0xLjAgKyAyLjAqZnJhY3Qoc2luKHN0KSo0Mzc1OC41NDUzMTIzKTtcXG59XFxuXFxuZmxvYXQgbm9pc2UoaW4gdmVjMiBwKSB7XFxuXFxuICAgIHZlYzIgaSA9IGZsb29yKHApO1xcbiAgICB2ZWMyIGYgPSBmcmFjdChwKTtcXG5cXG4gICAgdmVjMiB1ID0gZipmKigzLjAtMi4wKmYpO1xcblxcbiAgICByZXR1cm4gbWl4KCBtaXgoIGRvdCggcmFuZG9tMmEoaSArIHZlYzIoMC4wLDAuMCkgKSwgZiAtIHZlYzIoMC4wLDAuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTJhKGkgKyB2ZWMyKDEuMCwwLjApICksIGYgLSB2ZWMyKDEuMCwwLjApICksIHUueCksXFxuICAgICAgICAgICAgICAgIG1peCggZG90KCByYW5kb20yYShpICsgdmVjMigwLjAsMS4wKSApLCBmIC0gdmVjMigwLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tMmEoaSArIHZlYzIoMS4wLDEuMCkgKSwgZiAtIHZlYzIoMS4wLDEuMCkgKSwgdS54KSwgdS55KTtcXG5cXG5cXG59XFxuXFxuZmxvYXQgbm9pc2UoaW4gdmVjMyBwKSB7XFxuXFxuICAgIHZlYzMgaSA9IGZsb29yKHApO1xcbiAgICB2ZWMzIGYgPSBmcmFjdChwKTtcXG5cXG4gICAgdmVjMyB1ID0gZipmKigzLjAtMi4wKmYpO1xcblxcbiAgICAgICAgcmV0dXJuIG1peChcXG4gICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMC4wLDAuMCwwLjApICksIGYgLSB2ZWMzKDAuMCwwLjAsMC4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMS4wLDAuMCwwLjApICksIGYgLSB2ZWMzKDEuMCwwLjAsMC4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHUueCksXFxuICAgICAgICAgICAgICAgICAgICBtaXgoXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygwLjAsMS4wLDAuMCkgKSwgZiAtIHZlYzMoMC4wLDEuMCwwLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygxLjAsMS4wLDAuMCkgKSwgZiAtIHZlYzMoMS4wLDEuMCwwLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgdS54KSxcXG4gICAgICAgICAgICAgICAgICAgIHUueSksXFxuICAgICAgICAgICAgICAgIG1peChcXG4gICAgICAgICAgICAgICAgICAgIG1peChcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDAuMCwwLjAsMS4wKSApLCBmIC0gdmVjMygwLjAsMC4wLDEuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDEuMCwwLjAsMS4wKSApLCBmIC0gdmVjMygxLjAsMC4wLDEuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB1LngpLFxcbiAgICAgICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMC4wLDEuMCwxLjApICksIGYgLSB2ZWMzKDAuMCwxLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMS4wLDEuMCwxLjApICksIGYgLSB2ZWMzKDEuMCwxLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHUueCksXFxuICAgICAgICAgICAgICAgICAgICB1LnkpLFxcbiAgICAgICAgICAgICAgICB1LnpcXG4gICAgICAgICAgICAgICApO1xcbn1cXG5cXG5mbG9hdCB1c25vaXNlKHZlYzMgcCkge1xcbiAgICByZXR1cm4gKG5vaXNlKHApICsgMS4wKSAvMi4wO1xcbn1cXG5cXG5mbG9hdCBjZWxsTm9pc2UodmVjMiBwKSB7XFxuICAgIHZlYzIgaSA9IGZsb29yKHApO1xcbiAgICB2ZWMyIGYgPSBmcmFjdChwKTtcXG5cXG4gICAgZmxvYXQgbV9kaXN0ID0gMS4wO1xcblxcbiAgICBmb3IoaW50IHk9LTE7IHk8PTE7IHkrKykge1xcbiAgICAgICAgZm9yKGludCB4PS0xOyB4PD0xOyB4KyspIHtcXG4gICAgICAgICAgICB2ZWMyIG5laWdoYm91cj12ZWMyKGZsb2F0KHgpLCBmbG9hdCh5KSk7XFxuICAgICAgICAgICAgdmVjMiBwb2ludCA9IHJhbmRvbTIoaSArIG5laWdoYm91cik7XFxuXFxuICAgICAgICAgICAgdmVjMiBkaWZmPSBuZWlnaGJvdXIgKyBwb2ludCAtIGY7XFxuICAgICAgICAgICAgZmxvYXQgZGlzdCA9IGxlbmd0aChkaWZmKTtcXG4gICAgICAgICAgICBtX2Rpc3QgPSBtaW4obV9kaXN0LGRpc3QpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJldHVybiBtX2Rpc3Q7XFxufVxcblxcblxcbnZlYzMgdmVyb25pTm9pc2UodmVjMiBzdCkge1xcbiAgICB2ZWMyIHAgPSBmbG9vcihzdCk7XFxuICAgIHZlYzIgZiA9IGZyYWN0KHN0KTtcXG5cXG4gICAgZmxvYXQgcmVzID0gMi4wO1xcbiAgICB2ZWMyIG1fcG9pbnQ9dmVjMigxLjAsIDEuMCksXFxuICAgICAgICBtcj12ZWMyKDAsMCksXFxuICAgICAgICBtYiA9IHZlYzIoMCwwKTtcXG5cXG4gICAgZm9yKGludCBqPS0xOyBqPD0xOyBqKyspIHtcXG4gICAgICAgIGZvcihpbnQgaT0tMTsgaTw9MTsgaSsrKSB7XFxuICAgICAgICAgICAgdmVjMiBiPXZlYzIoZmxvYXQoaSksIGZsb2F0KGopKTtcXG4gICAgICAgICAgICB2ZWMyIHBvaW50ID0gcCArIGI7XFxuICAgICAgICAgICAgdmVjMiByID0gYiArIHJhbmRvbTIocG9pbnQpIC0gZjtcXG5cXG4gICAgICAgICAgICBmbG9hdCBkID0gZG90KHIscik7XFxuICAgICAgICAgICAgaWYgKGQgPCByZXMpIHtcXG4gICAgICAgICAgICAgICAgcmVzID0gZDtcXG4gICAgICAgICAgICAgICAgbV9wb2ludCA9IHBvaW50O1xcbiAgICAgICAgICAgICAgICBtcj1yO1xcbiAgICAgICAgICAgICAgICBtYj1iO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICByZXMgPSA4LjA7XFxuICAgIGZvcihpbnQgaj0tMjsgajw9MjsgKytqKSB7XFxuICAgICAgICBmb3IoaW50IGk9LTI7IGk8PTI7ICsraSkge1xcblxcbiAgICAgICAgICAgIHZlYzIgYiA9IG1iICsgdmVjMihmbG9hdChpKSxmbG9hdChqKSk7XFxuXFxuICAgICAgICAgICAgdmVjMiByID0gYiArIHJhbmRvbTIocCArIGIpIC0gZjtcXG5cXG4gICAgICAgICAgICBmbG9hdCBkID0gZG90KDAuNSAqIChtcityKSwgbm9ybWFsaXplKHIgLSBtcikpO1xcblxcbiAgICAgICAgICAgIHJlcyA9IG1pbihyZXMsIGQpO1xcblxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJldHVybiB2ZWMzKG1fcG9pbnQueHksIHJlcyk7XFxufVxcblxcbmNvbnN0IGludCBvY3RhdmVzID0gNDtcXG5cXG5mbG9hdCBmYm0odmVjMiBwLCBmbG9hdCBILCBmbG9hdCBsYWN1bmFyaXR5KSB7XFxuICAgIGZsb2F0IHZhbHVlLCBmcmVxdWVuY3k7XFxuICAgIGZsb2F0IGV4cG9uZW50O1xcblxcbiAgICB2YWx1ZSA9IDAuMDtcXG4gICAgZnJlcXVlbmN5ID0gMS4wO1xcblxcbiAgICBmb3IoaW50IGk9MDsgaTxvY3RhdmVzOyArK2kpIHtcXG5cXG4gICAgICAgIGV4cG9uZW50ID0gcG93KGZyZXF1ZW5jeSwgLUgpO1xcblxcbiAgICAgICAgdmFsdWU9dmFsdWUgKyAobm9pc2UocCkgKiBleHBvbmVudCk7XFxuXFxuICAgICAgICBwPXAqbGFjdW5hcml0eTtcXG5cXG4gICAgICAgIGZyZXF1ZW5jeT1mcmVxdWVuY3kgKiBsYWN1bmFyaXR5O1xcbiAgICB9XFxuXFxuICAgIHJldHVybiB2YWx1ZTtcXG59XFxuXFxuZmxvYXQgZmJtKHZlYzMgcCwgZmxvYXQgSCwgZmxvYXQgbGFjdW5hcml0eSkge1xcbiAgICBmbG9hdCB2YWx1ZSwgZnJlcXVlbmN5O1xcbiAgICBmbG9hdCBleHBvbmVudDtcXG5cXG4gICAgdmFsdWUgPSAwLjA7XFxuICAgIGZyZXF1ZW5jeSA9IDEuMDtcXG5cXG4gICAgZm9yKGludCBpPTA7IGk8b2N0YXZlczsgKytpKSB7XFxuXFxuICAgICAgICBleHBvbmVudCA9IHBvdyhmcmVxdWVuY3ksIC1IKTtcXG5cXG4gICAgICAgIHZhbHVlPXZhbHVlICsgKG5vaXNlKHApICogZXhwb25lbnQpO1xcblxcbiAgICAgICAgcD1wKmxhY3VuYXJpdHk7XFxuXFxuICAgICAgICBmcmVxdWVuY3k9ZnJlcXVlbmN5ICogbGFjdW5hcml0eTtcXG4gICAgfVxcblxcbiAgICByZXR1cm4gdmFsdWU7XFxufVxcblxcbmZsb2F0IHJpZGdlZE11bHRpZnJhY3RhbCh2ZWMzIHAsIGZsb2F0IEgsIGZsb2F0IGxhY3VuYXJpdHksIGZsb2F0IG9mZnNldCkge1xcbiAgICBmbG9hdCByZXN1bHQsIGZyZXF1ZW5jeSwgcmVtYWluZGVyO1xcbiAgICBmbG9hdCB3ZWlnaHQsIHNpZ25hbCwgZXhwb25lbnQ7XFxuXFxuICAgIGZsb2F0IGdhaW4gPSAyLjA7XFxuXFxuICAgIHJlc3VsdCA9IDEuMDtcXG4gICAgZnJlcXVlbmN5ID0gMS4wO1xcblxcbiAgICBzaWduYWwgPSBub2lzZShwKTtcXG4gICAgaWYgKHNpZ25hbCA8IDAuMCkgc2lnbmFsID0gLXNpZ25hbDtcXG4gICAgc2lnbmFsID0gb2Zmc2V0LXNpZ25hbDtcXG4gICAgc2lnbmFsICo9c2lnbmFsO1xcbiAgICByZXN1bHQgPSBzaWduYWw7XFxuICAgIHdlaWdodCA9IDEuMDtcXG5cXG5cXG4gICAgZm9yKGludCBpPTE7IGk8b2N0YXZlczsgKytpKSB7XFxuICAgICAgICBmcmVxdWVuY3k9ZnJlcXVlbmN5KmxhY3VuYXJpdHk7XFxuICAgICAgICBwPXAqbGFjdW5hcml0eTtcXG5cXG4gICAgICAgIHdlaWdodCA9IHNpZ25hbCAqIGdhaW47XFxuICAgICAgICBpZiAod2VpZ2h0PjEuMCkgd2VpZ2h0PTEuMDtcXG4gICAgICAgIGlmICh3ZWlnaHQgPCAwLjAgKSB3ZWlnaHQ9IDAuMDtcXG5cXG4gICAgICAgIHNpZ25hbCA9IG5vaXNlKHApO1xcblxcbiAgICAgICAgaWYgKHNpZ25hbCA8MC4wKSBzaWduYWwgPSAtc2lnbmFsO1xcbiAgICAgICAgc2lnbmFsID0gb2Zmc2V0IC0gc2lnbmFsO1xcbiAgICAgICAgc2lnbmFsICo9c2lnbmFsO1xcbiAgICAgICAgc2lnbmFsICo9d2VpZ2h0O1xcbiAgICAgICAgcmVzdWx0ICs9IHNpZ25hbCAqIHBvdyhmcmVxdWVuY3ksLUgpO1xcblxcbiAgICB9XFxuXFxuICAgIHJldHVybiByZXN1bHQ7XFxufVxcblxcbmJvb2wgc3BoZXJlKHZlYzIgcCwgb3V0IHZlYzMgaGl0KSB7XFxuXFxuICAgIGZsb2F0IGRpc3QgPSAxLjAgLSBwLngqcC54IC0gcC55KnAueTtcXG5cXG4gICAgaWYgKGRpc3QgPCAwLjApIHJldHVybiBmYWxzZTtcXG5cXG4gICAgZmxvYXQgej1zcXJ0KCBkaXN0KTtcXG5cXG4gICAgaGl0ID0gdmVjMyhwLCB6KTtcXG5cXG4gICAgcmV0dXJuIHRydWU7XFxuXFxufVxcblxcbmJvb2wgY3lsaW5kZXIodmVjMiBwLCBvdXQgdmVjMyBoaXQpIHtcXG4gICAgZmxvYXQgZGlzdCA9IDEuMCAtIHAueCpwLng7XFxuXFxuICAgIGlmIChkaXN0IDwgMC4wKSByZXR1cm4gZmFsc2U7XFxuXFxuICAgIGZsb2F0IHo9c3FydCggZGlzdCk7XFxuXFxuICAgIGhpdCA9IHZlYzMocCwgeik7XFxuXFxuICAgIHJldHVybiB0cnVlO1xcbn1cXG5cXG51bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uO1xcbnVuaWZvcm0gdmVjMiB1X21vdXNlO1xcbnVuaWZvcm0gZmxvYXQgdV90aW1lO1xcblxcbi8vaW5qZWN0XFxuXFxudmVjMyB0ZXN0KHZlYzMgcCkge1xcblxcbiAgICBmbG9hdCB2O1xcblxcbiAgICB2ZWMzIG4gPSBub3JtYWxpemUocCk7XFxuXFxuICAgIHZlYzIgdXYgPSB2ZWMyKCAwLjUrIChhdGFuKCBuLngsIG4ueikgLyBQSSksIDAuNS0gYXNpbihuLnkpIC8gUEkpIDtcXG5cXG4gICAgdmVjMyBwcCA9IHZlYzModXYqMTAuMCwgdV90aW1lIC8gNS4wKTtcXG5cXG4gICAgdj0gZmJtKHBwLCAwLjgsIDIuNSk7Ly8sIDAuNyk7XFxuXFxuICAgIHZlYzMgY29sb3I7XFxuXFxuICAgIGNvbG9yID1cXG4gICAgICAgIG1peCh2ZWMzKDEsMC43NSwwKSwgdmVjMygxLDEsMCkgLHYpXFxuICAgICAgICA7XFxuXFxuXFxuICAgIHJldHVybiBjb2xvcjtcXG5cXG59XFxuXFxudm9pZCBtYWluKCkge1xcblxcbiAgICB2ZWMzIHA7XFxuXFxuICAgIGlmICggbWFwcGluZyhwKSkge1xcbiAgICAgICAgZ2xfRnJhZ0NvbG9yPXZlYzQodGVzdChwKSwgMCk7XFxuICAgIH1cXG5cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3N1bi5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2lmZGVmIEdMX0VTXFxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuI2VuZGlmXFxuXFxuXFxuY29uc3QgZmxvYXQgUEkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTU7XFxuY29uc3QgZmxvYXQgUEkyID0gNi4yODMxODUzMDcxODtcXG5cXG5mbG9hdCBhbG1vc3RJZGVudGl0eSggZmxvYXQgeCwgZmxvYXQgbSwgZmxvYXQgbiApXFxue1xcbiAgICBpZiggeD5tICkgcmV0dXJuIHg7XFxuXFxuICAgIGZsb2F0IGEgPSAyLjAqbiAtIG07XFxuICAgIGZsb2F0IGIgPSAyLjAqbSAtIDMuMCpuO1xcbiAgICBmbG9hdCB0ID0geC9tO1xcblxcbiAgICByZXR1cm4gKGEqdCArIGIpKnQqdCArIG47XFxufVxcblxcblxcbmZsb2F0IGltcHVsc2UoIGZsb2F0IGssIGZsb2F0IHggKVxcbntcXG4gICAgZmxvYXQgaCA9IGsqeDtcXG4gICAgcmV0dXJuIGgqZXhwKDEuMC1oKTtcXG59XFxuXFxuZmxvYXQgY3ViaWNQdWxzZSggZmxvYXQgYywgZmxvYXQgdywgZmxvYXQgeCApXFxue1xcbiAgICB4ID0gYWJzKHggLSBjKTtcXG4gICAgaWYoIHg+dyApIHJldHVybiAwLjA7XFxuICAgIHggLz0gdztcXG4gICAgcmV0dXJuIDEuMCAtIHgqeCooMy4wLTIuMCp4KTtcXG59XFxuXFxuZmxvYXQgZXhwU3RlcCggZmxvYXQgeCwgZmxvYXQgaywgZmxvYXQgbiApXFxue1xcbiAgICByZXR1cm4gZXhwKCAtaypwb3coeCxuKSApO1xcbn1cXG5cXG5cXG5mbG9hdCBnYWluKGZsb2F0IHgsIGZsb2F0IGspXFxue1xcbiAgICBmbG9hdCBhID0gMC41KnBvdygyLjAqKCh4PDAuNSk/eDoxLjAteCksIGspO1xcbiAgICByZXR1cm4gKHg8MC41KT9hOjEuMC1hO1xcbn1cXG5cXG5cXG5mbG9hdCBwYXJhYm9sYSggZmxvYXQgeCwgZmxvYXQgayApXFxue1xcbiAgICByZXR1cm4gcG93KCA0LjAqeCooMS4wLXgpLCBrICk7XFxufVxcblxcbmZsb2F0IHBjdXJ2ZSggZmxvYXQgeCwgZmxvYXQgYSwgZmxvYXQgYiApXFxue1xcbiAgICBmbG9hdCBrID0gcG93KGErYixhK2IpIC8gKHBvdyhhLGEpKnBvdyhiLGIpKTtcXG4gICAgcmV0dXJuIGsgKiBwb3coIHgsIGEgKSAqIHBvdyggMS4wLXgsIGIgKTtcXG59XFxuXFxudmVjMyByZ2IyaHNiKCBpbiB2ZWMzIGMgKXtcXG4gICAgdmVjNCBLID0gdmVjNCgwLjAsIC0xLjAgLyAzLjAsIDIuMCAvIDMuMCwgLTEuMCk7XFxuICAgIHZlYzQgcCA9IG1peCh2ZWM0KGMuYmcsIEsud3opLFxcbiAgICAgICAgICAgICAgICAgdmVjNChjLmdiLCBLLnh5KSxcXG4gICAgICAgICAgICAgICAgIHN0ZXAoYy5iLCBjLmcpKTtcXG4gICAgdmVjNCBxID0gbWl4KHZlYzQocC54eXcsIGMuciksXFxuICAgICAgICAgICAgICAgICB2ZWM0KGMuciwgcC55engpLFxcbiAgICAgICAgICAgICAgICAgc3RlcChwLngsIGMucikpO1xcbiAgICBmbG9hdCBkID0gcS54IC0gbWluKHEudywgcS55KTtcXG4gICAgZmxvYXQgZSA9IDEuMGUtMTA7XFxuICAgIHJldHVybiB2ZWMzKGFicyhxLnogKyAocS53IC0gcS55KSAvICg2LjAgKiBkICsgZSkpLFxcbiAgICAgICAgICAgICAgICBkIC8gKHEueCArIGUpLFxcbiAgICAgICAgICAgICAgICBxLngpO1xcbn1cXG5cXG4vLyAgRnVuY3Rpb24gZnJvbSBJw7FpZ28gUXVpbGVzXFxuLy8gIGh0dHBzOi8vd3d3LnNoYWRlcnRveS5jb20vdmlldy9Nc1MzV2NcXG52ZWMzIGhzYjJyZ2IoIGluIHZlYzMgYyApe1xcbiAgICB2ZWMzIHJnYiA9IGNsYW1wKGFicyhtb2QoYy54KjYuMCt2ZWMzKDAuMCw0LjAsMi4wKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDYuMCktMy4wKS0xLjAsXFxuICAgICAgICAgICAgICAgICAgICAgMC4wLFxcbiAgICAgICAgICAgICAgICAgICAgIDEuMCApO1xcbiAgICByZ2IgPSByZ2IqcmdiKigzLjAtMi4wKnJnYik7XFxuICAgIHJldHVybiBjLnogKiBtaXgodmVjMygxLjApLCByZ2IsIGMueSk7XFxufVxcblxcbmZsb2F0IHJlY3RhbmdsZSh2ZWMyIHN0LHZlYzIgYmwsIHZlYzIgdHIpIHtcXG4gICAgdmVjMiBibHYgPSBzdGVwKGJsLCBzdCk7XFxuICAgIHZlYzIgdHJ2ID0gc3RlcCh2ZWMyKDEuMCktdHIsIDEuMC1zdCk7XFxuICAgIHJldHVybiBibHYueCpibHYueSAqIHRydi54KnRydi55O1xcbn1cXG5cXG5mbG9hdCBzbW9vdGhSZWN0YW5nbGUodmVjMiBzdCx2ZWMyIGJsLCB2ZWMyIHRyLCBmbG9hdCB3KSB7XFxuICAgIHZlYzIgYmx2ID0gc21vb3Roc3RlcChibCwgYmwrdmVjMih3KSwgc3QpO1xcbiAgICB2ZWMyIHRydiA9IHNtb290aHN0ZXAodmVjMigxLjApLXRyLCB2ZWMyKDEuMCktdHIrdmVjMih3KSwgMS4wLXN0KTtcXG4gICAgcmV0dXJuIGJsdi54KmJsdi55ICogdHJ2LngqdHJ2Lnk7XFxufVxcblxcbmZsb2F0IHNtb290aENpcmNsZSh2ZWMyIHN0LCB2ZWMyIGMsIGZsb2F0IHIsIGZsb2F0IHcpIHtcXG4gICAgZmxvYXQgZCA9IGxlbmd0aChzdCAtIGMpO1xcbiAgICByZXR1cm4gc21vb3Roc3RlcChyK3csci13LGQpO1xcbn1cXG5cXG5mbG9hdCBwb2x5Z29uKHZlYzIgc3QsIHZlYzIgYywgZmxvYXQgciwgaW50IE4pIHtcXG4gICBcXHRmbG9hdCBhID0gYXRhbihzdC55LHN0LngpO1xcbiAgIFxcdGZsb2F0IHMgPSBQSSoyLjAvZmxvYXQoTik7XFxuICAgXFx0ZmxvYXQgZCA9ICBjb3MoZmxvb3IoLjUrYS9zKSAqIHMgLSBhKSAqIGRpc3RhbmNlKHN0LGMpICogMi4wO1xcbiAgICByZXR1cm4gMS4wLXNtb290aHN0ZXAoci0wLjAxLHIsZCk7XFxufVxcblxcbm1hdDIgcm90YXRlMmQoZmxvYXQgYSkge1xcbiAgICByZXR1cm4gbWF0Mihjb3MoYSksIC1zaW4oYSksIHNpbihhKSwgY29zKGEpKTtcXG59XFxuXFxudmVjMiByYW5kb20yKHZlYzIgc3Qpe1xcbiAgICBzdCA9IHZlYzIoIGRvdChzdCx2ZWMyKDEyNy4xLDMxMS43KSksIGRvdChzdCx2ZWMyKDI2OS41LDE4My4zKSkgKTtcXG4gICAgcmV0dXJuIGZyYWN0KHNpbihzdCkqNDM3NTguNTQ1MzEyMyk7XFxufVxcblxcbmZsb2F0IHJhbmRvbTJmKHZlYzIgc3Qpe1xcbiAgICBmbG9hdCB2ID0gZG90KCBkb3Qoc3QsdmVjMigxMjcuMSwzMTEuNykpLCBkb3Qoc3QsdmVjMigyNjkuNSwxODMuMykpICk7XFxuICAgIHJldHVybiBmcmFjdChzaW4odikqNDM3NTguNTQ1MzEyMyk7XFxufVxcblxcbnZlYzIgcmFuZG9tMmEodmVjMiBzdCl7XFxuICAgIHN0ID0gdmVjMiggZG90KHN0LHZlYzIoMTI3LjEsMzExLjcpKSxcXG4gICAgICAgICAgICAgIGRvdChzdCx2ZWMyKDI2OS41LDE4My4zKSkgKTtcXG4gICAgcmV0dXJuIC0xLjAgKyAyLjAqZnJhY3Qoc2luKHN0KSo0Mzc1OC41NDUzMTIzKTtcXG59XFxuXFxudmVjMyByYW5kb20zYSh2ZWMzIHN0KXtcXG4gICAgc3QgPSB2ZWMzKCBkb3Qoc3QsdmVjMygxMjcuMSwzMTEuNywxMjMuNikpLFxcbiAgICAgICAgICAgICAgIGRvdChzdCx2ZWMzKDI2OS41LDE4My4zLDk3LjEpKSxcXG4gICAgICAgICAgICAgICAgZG90KHN0LHZlYzMoMTQ2Ljg3LDI0NS4xMiw0OC43KSlcXG4gICAgICAgICAgICAgICAgKTtcXG4gICAgcmV0dXJuIC0xLjAgKyAyLjAqZnJhY3Qoc2luKHN0KSo0Mzc1OC41NDUzMTIzKTtcXG59XFxuXFxuZmxvYXQgbm9pc2UoaW4gdmVjMiBwKSB7XFxuXFxuICAgIHZlYzIgaSA9IGZsb29yKHApO1xcbiAgICB2ZWMyIGYgPSBmcmFjdChwKTtcXG5cXG4gICAgdmVjMiB1ID0gZipmKigzLjAtMi4wKmYpO1xcblxcbiAgICByZXR1cm4gbWl4KCBtaXgoIGRvdCggcmFuZG9tMmEoaSArIHZlYzIoMC4wLDAuMCkgKSwgZiAtIHZlYzIoMC4wLDAuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTJhKGkgKyB2ZWMyKDEuMCwwLjApICksIGYgLSB2ZWMyKDEuMCwwLjApICksIHUueCksXFxuICAgICAgICAgICAgICAgIG1peCggZG90KCByYW5kb20yYShpICsgdmVjMigwLjAsMS4wKSApLCBmIC0gdmVjMigwLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tMmEoaSArIHZlYzIoMS4wLDEuMCkgKSwgZiAtIHZlYzIoMS4wLDEuMCkgKSwgdS54KSwgdS55KTtcXG5cXG5cXG59XFxuXFxuZmxvYXQgbm9pc2UoaW4gdmVjMyBwKSB7XFxuXFxuICAgIHZlYzMgaSA9IGZsb29yKHApO1xcbiAgICB2ZWMzIGYgPSBmcmFjdChwKTtcXG5cXG4gICAgdmVjMyB1ID0gZipmKigzLjAtMi4wKmYpO1xcblxcbiAgICAgICAgcmV0dXJuIG1peChcXG4gICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMC4wLDAuMCwwLjApICksIGYgLSB2ZWMzKDAuMCwwLjAsMC4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMS4wLDAuMCwwLjApICksIGYgLSB2ZWMzKDEuMCwwLjAsMC4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHUueCksXFxuICAgICAgICAgICAgICAgICAgICBtaXgoXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygwLjAsMS4wLDAuMCkgKSwgZiAtIHZlYzMoMC4wLDEuMCwwLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygxLjAsMS4wLDAuMCkgKSwgZiAtIHZlYzMoMS4wLDEuMCwwLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgdS54KSxcXG4gICAgICAgICAgICAgICAgICAgIHUueSksXFxuICAgICAgICAgICAgICAgIG1peChcXG4gICAgICAgICAgICAgICAgICAgIG1peChcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDAuMCwwLjAsMS4wKSApLCBmIC0gdmVjMygwLjAsMC4wLDEuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDEuMCwwLjAsMS4wKSApLCBmIC0gdmVjMygxLjAsMC4wLDEuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB1LngpLFxcbiAgICAgICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMC4wLDEuMCwxLjApICksIGYgLSB2ZWMzKDAuMCwxLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMS4wLDEuMCwxLjApICksIGYgLSB2ZWMzKDEuMCwxLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHUueCksXFxuICAgICAgICAgICAgICAgICAgICB1LnkpLFxcbiAgICAgICAgICAgICAgICB1LnpcXG4gICAgICAgICAgICAgICApO1xcbn1cXG5cXG5mbG9hdCB1c25vaXNlKHZlYzMgcCkge1xcbiAgICByZXR1cm4gKG5vaXNlKHApICsgMS4wKSAvMi4wO1xcbn1cXG5cXG5mbG9hdCBjZWxsTm9pc2UodmVjMiBwKSB7XFxuICAgIHZlYzIgaSA9IGZsb29yKHApO1xcbiAgICB2ZWMyIGYgPSBmcmFjdChwKTtcXG5cXG4gICAgZmxvYXQgbV9kaXN0ID0gMS4wO1xcblxcbiAgICBmb3IoaW50IHk9LTE7IHk8PTE7IHkrKykge1xcbiAgICAgICAgZm9yKGludCB4PS0xOyB4PD0xOyB4KyspIHtcXG4gICAgICAgICAgICB2ZWMyIG5laWdoYm91cj12ZWMyKGZsb2F0KHgpLCBmbG9hdCh5KSk7XFxuICAgICAgICAgICAgdmVjMiBwb2ludCA9IHJhbmRvbTIoaSArIG5laWdoYm91cik7XFxuXFxuICAgICAgICAgICAgdmVjMiBkaWZmPSBuZWlnaGJvdXIgKyBwb2ludCAtIGY7XFxuICAgICAgICAgICAgZmxvYXQgZGlzdCA9IGxlbmd0aChkaWZmKTtcXG4gICAgICAgICAgICBtX2Rpc3QgPSBtaW4obV9kaXN0LGRpc3QpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJldHVybiBtX2Rpc3Q7XFxufVxcblxcblxcbnZlYzMgdmVyb25pTm9pc2UodmVjMiBzdCkge1xcbiAgICB2ZWMyIHAgPSBmbG9vcihzdCk7XFxuICAgIHZlYzIgZiA9IGZyYWN0KHN0KTtcXG5cXG4gICAgZmxvYXQgcmVzID0gMi4wO1xcbiAgICB2ZWMyIG1fcG9pbnQ9dmVjMigxLjAsIDEuMCksXFxuICAgICAgICBtcj12ZWMyKDAsMCksXFxuICAgICAgICBtYiA9IHZlYzIoMCwwKTtcXG5cXG4gICAgZm9yKGludCBqPS0xOyBqPD0xOyBqKyspIHtcXG4gICAgICAgIGZvcihpbnQgaT0tMTsgaTw9MTsgaSsrKSB7XFxuICAgICAgICAgICAgdmVjMiBiPXZlYzIoZmxvYXQoaSksIGZsb2F0KGopKTtcXG4gICAgICAgICAgICB2ZWMyIHBvaW50ID0gcCArIGI7XFxuICAgICAgICAgICAgdmVjMiByID0gYiArIHJhbmRvbTIocG9pbnQpIC0gZjtcXG5cXG4gICAgICAgICAgICBmbG9hdCBkID0gZG90KHIscik7XFxuICAgICAgICAgICAgaWYgKGQgPCByZXMpIHtcXG4gICAgICAgICAgICAgICAgcmVzID0gZDtcXG4gICAgICAgICAgICAgICAgbV9wb2ludCA9IHBvaW50O1xcbiAgICAgICAgICAgICAgICBtcj1yO1xcbiAgICAgICAgICAgICAgICBtYj1iO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICByZXMgPSA4LjA7XFxuICAgIGZvcihpbnQgaj0tMjsgajw9MjsgKytqKSB7XFxuICAgICAgICBmb3IoaW50IGk9LTI7IGk8PTI7ICsraSkge1xcblxcbiAgICAgICAgICAgIHZlYzIgYiA9IG1iICsgdmVjMihmbG9hdChpKSxmbG9hdChqKSk7XFxuXFxuICAgICAgICAgICAgdmVjMiByID0gYiArIHJhbmRvbTIocCArIGIpIC0gZjtcXG5cXG4gICAgICAgICAgICBmbG9hdCBkID0gZG90KDAuNSAqIChtcityKSwgbm9ybWFsaXplKHIgLSBtcikpO1xcblxcbiAgICAgICAgICAgIHJlcyA9IG1pbihyZXMsIGQpO1xcblxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJldHVybiB2ZWMzKG1fcG9pbnQueHksIHJlcyk7XFxufVxcblxcbmNvbnN0IGludCBvY3RhdmVzID0gNDtcXG5cXG5mbG9hdCBmYm0odmVjMiBwLCBmbG9hdCBILCBmbG9hdCBsYWN1bmFyaXR5KSB7XFxuICAgIGZsb2F0IHZhbHVlLCBmcmVxdWVuY3k7XFxuICAgIGZsb2F0IGV4cG9uZW50O1xcblxcbiAgICB2YWx1ZSA9IDAuMDtcXG4gICAgZnJlcXVlbmN5ID0gMS4wO1xcblxcbiAgICBmb3IoaW50IGk9MDsgaTxvY3RhdmVzOyArK2kpIHtcXG5cXG4gICAgICAgIGV4cG9uZW50ID0gcG93KGZyZXF1ZW5jeSwgLUgpO1xcblxcbiAgICAgICAgdmFsdWU9dmFsdWUgKyAobm9pc2UocCkgKiBleHBvbmVudCk7XFxuXFxuICAgICAgICBwPXAqbGFjdW5hcml0eTtcXG5cXG4gICAgICAgIGZyZXF1ZW5jeT1mcmVxdWVuY3kgKiBsYWN1bmFyaXR5O1xcbiAgICB9XFxuXFxuICAgIHJldHVybiB2YWx1ZTtcXG59XFxuXFxuZmxvYXQgZmJtKHZlYzMgcCwgZmxvYXQgSCwgZmxvYXQgbGFjdW5hcml0eSkge1xcbiAgICBmbG9hdCB2YWx1ZSwgZnJlcXVlbmN5O1xcbiAgICBmbG9hdCBleHBvbmVudDtcXG5cXG4gICAgdmFsdWUgPSAwLjA7XFxuICAgIGZyZXF1ZW5jeSA9IDEuMDtcXG5cXG4gICAgZm9yKGludCBpPTA7IGk8b2N0YXZlczsgKytpKSB7XFxuXFxuICAgICAgICBleHBvbmVudCA9IHBvdyhmcmVxdWVuY3ksIC1IKTtcXG5cXG4gICAgICAgIHZhbHVlPXZhbHVlICsgKG5vaXNlKHApICogZXhwb25lbnQpO1xcblxcbiAgICAgICAgcD1wKmxhY3VuYXJpdHk7XFxuXFxuICAgICAgICBmcmVxdWVuY3k9ZnJlcXVlbmN5ICogbGFjdW5hcml0eTtcXG4gICAgfVxcblxcbiAgICByZXR1cm4gdmFsdWU7XFxufVxcblxcbmZsb2F0IHJpZGdlZE11bHRpZnJhY3RhbCh2ZWMzIHAsIGZsb2F0IEgsIGZsb2F0IGxhY3VuYXJpdHksIGZsb2F0IG9mZnNldCkge1xcbiAgICBmbG9hdCByZXN1bHQsIGZyZXF1ZW5jeSwgcmVtYWluZGVyO1xcbiAgICBmbG9hdCB3ZWlnaHQsIHNpZ25hbCwgZXhwb25lbnQ7XFxuXFxuICAgIGZsb2F0IGdhaW4gPSAyLjA7XFxuXFxuICAgIHJlc3VsdCA9IDEuMDtcXG4gICAgZnJlcXVlbmN5ID0gMS4wO1xcblxcbiAgICBzaWduYWwgPSBub2lzZShwKTtcXG4gICAgaWYgKHNpZ25hbCA8IDAuMCkgc2lnbmFsID0gLXNpZ25hbDtcXG4gICAgc2lnbmFsID0gb2Zmc2V0LXNpZ25hbDtcXG4gICAgc2lnbmFsICo9c2lnbmFsO1xcbiAgICByZXN1bHQgPSBzaWduYWw7XFxuICAgIHdlaWdodCA9IDEuMDtcXG5cXG5cXG4gICAgZm9yKGludCBpPTE7IGk8b2N0YXZlczsgKytpKSB7XFxuICAgICAgICBmcmVxdWVuY3k9ZnJlcXVlbmN5KmxhY3VuYXJpdHk7XFxuICAgICAgICBwPXAqbGFjdW5hcml0eTtcXG5cXG4gICAgICAgIHdlaWdodCA9IHNpZ25hbCAqIGdhaW47XFxuICAgICAgICBpZiAod2VpZ2h0PjEuMCkgd2VpZ2h0PTEuMDtcXG4gICAgICAgIGlmICh3ZWlnaHQgPCAwLjAgKSB3ZWlnaHQ9IDAuMDtcXG5cXG4gICAgICAgIHNpZ25hbCA9IG5vaXNlKHApO1xcblxcbiAgICAgICAgaWYgKHNpZ25hbCA8MC4wKSBzaWduYWwgPSAtc2lnbmFsO1xcbiAgICAgICAgc2lnbmFsID0gb2Zmc2V0IC0gc2lnbmFsO1xcbiAgICAgICAgc2lnbmFsICo9c2lnbmFsO1xcbiAgICAgICAgc2lnbmFsICo9d2VpZ2h0O1xcbiAgICAgICAgcmVzdWx0ICs9IHNpZ25hbCAqIHBvdyhmcmVxdWVuY3ksLUgpO1xcblxcbiAgICB9XFxuXFxuICAgIHJldHVybiByZXN1bHQ7XFxufVxcblxcbmJvb2wgc3BoZXJlKHZlYzIgcCwgb3V0IHZlYzMgaGl0KSB7XFxuXFxuICAgIGZsb2F0IGRpc3QgPSAxLjAgLSBwLngqcC54IC0gcC55KnAueTtcXG5cXG4gICAgaWYgKGRpc3QgPCAwLjApIHJldHVybiBmYWxzZTtcXG5cXG4gICAgZmxvYXQgej1zcXJ0KCBkaXN0KTtcXG5cXG4gICAgaGl0ID0gdmVjMyhwLCB6KTtcXG5cXG4gICAgcmV0dXJuIHRydWU7XFxuXFxufVxcblxcbmJvb2wgY3lsaW5kZXIodmVjMiBwLCBvdXQgdmVjMyBoaXQpIHtcXG4gICAgZmxvYXQgZGlzdCA9IDEuMCAtIHAueCpwLng7XFxuXFxuICAgIGlmIChkaXN0IDwgMC4wKSByZXR1cm4gZmFsc2U7XFxuXFxuICAgIGZsb2F0IHo9c3FydCggZGlzdCk7XFxuXFxuICAgIGhpdCA9IHZlYzMocCwgeik7XFxuXFxuICAgIHJldHVybiB0cnVlO1xcbn1cXG5cXG51bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uO1xcbnVuaWZvcm0gdmVjMiB1X21vdXNlO1xcbnVuaWZvcm0gZmxvYXQgdV90aW1lO1xcblxcbi8vaW5qZWN0XFxuXFxudmVjMyB0ZXN0KHZlYzMgcCkge1xcblxcbiAgICB2ZWMzIGNvbG9yID0gdmVjMygwLDAsMCk7XFxuXFxuICAgIHZlYzMgTiA9IG5vcm1hbGl6ZShwKTtcXG5cXG4gICAgZmxvYXQgbCA9IGRvdChOLCB2ZWMzKGNvcyh1X3RpbWUpLCBzaW4odV90aW1lKSwgMSkpO1xcblxcbiAgICBpZiAobDwwLjApIGw9MC4wO1xcblxcbiAgICBmbG9hdCBjID0gcmlkZ2VkTXVsdGlmcmFjdGFsKHAqMTAuMCwgMS4xLCAxLjEsIDAuNyk7XFxuXFxuICAgIGM9KGMrMS4wKSAvMi4wO1xcblxcbiAgICBjPWMqbDtcXG5cXG4gICAgY29sb3I9dmVjMyhjKTtcXG5cXG4gICAgcmV0dXJuIGNvbG9yO1xcblxcbn1cXG5cXG52b2lkIG1haW4oKSB7XFxuXFxuICAgIHZlYzMgcDtcXG5cXG4gICAgaWYgKCBtYXBwaW5nKHApKSB7XFxuICAgICAgICBnbF9GcmFnQ29sb3I9dmVjNCh0ZXN0KHApLCAwKTtcXG4gICAgfVxcblxcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvc3BoZXJlLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjaWZkZWYgR0xfRVNcXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG4jZW5kaWZcXG5cXG5cXG5jb25zdCBmbG9hdCBQSSA9IDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NTtcXG5jb25zdCBmbG9hdCBQSTIgPSA2LjI4MzE4NTMwNzE4O1xcblxcbmZsb2F0IGFsbW9zdElkZW50aXR5KCBmbG9hdCB4LCBmbG9hdCBtLCBmbG9hdCBuIClcXG57XFxuICAgIGlmKCB4Pm0gKSByZXR1cm4geDtcXG5cXG4gICAgZmxvYXQgYSA9IDIuMCpuIC0gbTtcXG4gICAgZmxvYXQgYiA9IDIuMCptIC0gMy4wKm47XFxuICAgIGZsb2F0IHQgPSB4L207XFxuXFxuICAgIHJldHVybiAoYSp0ICsgYikqdCp0ICsgbjtcXG59XFxuXFxuXFxuZmxvYXQgaW1wdWxzZSggZmxvYXQgaywgZmxvYXQgeCApXFxue1xcbiAgICBmbG9hdCBoID0gayp4O1xcbiAgICByZXR1cm4gaCpleHAoMS4wLWgpO1xcbn1cXG5cXG5mbG9hdCBjdWJpY1B1bHNlKCBmbG9hdCBjLCBmbG9hdCB3LCBmbG9hdCB4IClcXG57XFxuICAgIHggPSBhYnMoeCAtIGMpO1xcbiAgICBpZiggeD53ICkgcmV0dXJuIDAuMDtcXG4gICAgeCAvPSB3O1xcbiAgICByZXR1cm4gMS4wIC0geCp4KigzLjAtMi4wKngpO1xcbn1cXG5cXG5mbG9hdCBleHBTdGVwKCBmbG9hdCB4LCBmbG9hdCBrLCBmbG9hdCBuIClcXG57XFxuICAgIHJldHVybiBleHAoIC1rKnBvdyh4LG4pICk7XFxufVxcblxcblxcbmZsb2F0IGdhaW4oZmxvYXQgeCwgZmxvYXQgaylcXG57XFxuICAgIGZsb2F0IGEgPSAwLjUqcG93KDIuMCooKHg8MC41KT94OjEuMC14KSwgayk7XFxuICAgIHJldHVybiAoeDwwLjUpP2E6MS4wLWE7XFxufVxcblxcblxcbmZsb2F0IHBhcmFib2xhKCBmbG9hdCB4LCBmbG9hdCBrIClcXG57XFxuICAgIHJldHVybiBwb3coIDQuMCp4KigxLjAteCksIGsgKTtcXG59XFxuXFxuZmxvYXQgcGN1cnZlKCBmbG9hdCB4LCBmbG9hdCBhLCBmbG9hdCBiIClcXG57XFxuICAgIGZsb2F0IGsgPSBwb3coYStiLGErYikgLyAocG93KGEsYSkqcG93KGIsYikpO1xcbiAgICByZXR1cm4gayAqIHBvdyggeCwgYSApICogcG93KCAxLjAteCwgYiApO1xcbn1cXG5cXG52ZWMzIHJnYjJoc2IoIGluIHZlYzMgYyApe1xcbiAgICB2ZWM0IEsgPSB2ZWM0KDAuMCwgLTEuMCAvIDMuMCwgMi4wIC8gMy4wLCAtMS4wKTtcXG4gICAgdmVjNCBwID0gbWl4KHZlYzQoYy5iZywgSy53eiksXFxuICAgICAgICAgICAgICAgICB2ZWM0KGMuZ2IsIEsueHkpLFxcbiAgICAgICAgICAgICAgICAgc3RlcChjLmIsIGMuZykpO1xcbiAgICB2ZWM0IHEgPSBtaXgodmVjNChwLnh5dywgYy5yKSxcXG4gICAgICAgICAgICAgICAgIHZlYzQoYy5yLCBwLnl6eCksXFxuICAgICAgICAgICAgICAgICBzdGVwKHAueCwgYy5yKSk7XFxuICAgIGZsb2F0IGQgPSBxLnggLSBtaW4ocS53LCBxLnkpO1xcbiAgICBmbG9hdCBlID0gMS4wZS0xMDtcXG4gICAgcmV0dXJuIHZlYzMoYWJzKHEueiArIChxLncgLSBxLnkpIC8gKDYuMCAqIGQgKyBlKSksXFxuICAgICAgICAgICAgICAgIGQgLyAocS54ICsgZSksXFxuICAgICAgICAgICAgICAgIHEueCk7XFxufVxcblxcbi8vICBGdW5jdGlvbiBmcm9tIEnDsWlnbyBRdWlsZXNcXG4vLyAgaHR0cHM6Ly93d3cuc2hhZGVydG95LmNvbS92aWV3L01zUzNXY1xcbnZlYzMgaHNiMnJnYiggaW4gdmVjMyBjICl7XFxuICAgIHZlYzMgcmdiID0gY2xhbXAoYWJzKG1vZChjLngqNi4wK3ZlYzMoMC4wLDQuMCwyLjApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNi4wKS0zLjApLTEuMCxcXG4gICAgICAgICAgICAgICAgICAgICAwLjAsXFxuICAgICAgICAgICAgICAgICAgICAgMS4wICk7XFxuICAgIHJnYiA9IHJnYipyZ2IqKDMuMC0yLjAqcmdiKTtcXG4gICAgcmV0dXJuIGMueiAqIG1peCh2ZWMzKDEuMCksIHJnYiwgYy55KTtcXG59XFxuXFxuZmxvYXQgcmVjdGFuZ2xlKHZlYzIgc3QsdmVjMiBibCwgdmVjMiB0cikge1xcbiAgICB2ZWMyIGJsdiA9IHN0ZXAoYmwsIHN0KTtcXG4gICAgdmVjMiB0cnYgPSBzdGVwKHZlYzIoMS4wKS10ciwgMS4wLXN0KTtcXG4gICAgcmV0dXJuIGJsdi54KmJsdi55ICogdHJ2LngqdHJ2Lnk7XFxufVxcblxcbmZsb2F0IHNtb290aFJlY3RhbmdsZSh2ZWMyIHN0LHZlYzIgYmwsIHZlYzIgdHIsIGZsb2F0IHcpIHtcXG4gICAgdmVjMiBibHYgPSBzbW9vdGhzdGVwKGJsLCBibCt2ZWMyKHcpLCBzdCk7XFxuICAgIHZlYzIgdHJ2ID0gc21vb3Roc3RlcCh2ZWMyKDEuMCktdHIsIHZlYzIoMS4wKS10cit2ZWMyKHcpLCAxLjAtc3QpO1xcbiAgICByZXR1cm4gYmx2LngqYmx2LnkgKiB0cnYueCp0cnYueTtcXG59XFxuXFxuZmxvYXQgc21vb3RoQ2lyY2xlKHZlYzIgc3QsIHZlYzIgYywgZmxvYXQgciwgZmxvYXQgdykge1xcbiAgICBmbG9hdCBkID0gbGVuZ3RoKHN0IC0gYyk7XFxuICAgIHJldHVybiBzbW9vdGhzdGVwKHIrdyxyLXcsZCk7XFxufVxcblxcbmZsb2F0IHBvbHlnb24odmVjMiBzdCwgdmVjMiBjLCBmbG9hdCByLCBpbnQgTikge1xcbiAgIFxcdGZsb2F0IGEgPSBhdGFuKHN0Lnksc3QueCk7XFxuICAgXFx0ZmxvYXQgcyA9IFBJKjIuMC9mbG9hdChOKTtcXG4gICBcXHRmbG9hdCBkID0gIGNvcyhmbG9vciguNSthL3MpICogcyAtIGEpICogZGlzdGFuY2Uoc3QsYykgKiAyLjA7XFxuICAgIHJldHVybiAxLjAtc21vb3Roc3RlcChyLTAuMDEscixkKTtcXG59XFxuXFxubWF0MiByb3RhdGUyZChmbG9hdCBhKSB7XFxuICAgIHJldHVybiBtYXQyKGNvcyhhKSwgLXNpbihhKSwgc2luKGEpLCBjb3MoYSkpO1xcbn1cXG5cXG52ZWMyIHJhbmRvbTIodmVjMiBzdCl7XFxuICAgIHN0ID0gdmVjMiggZG90KHN0LHZlYzIoMTI3LjEsMzExLjcpKSwgZG90KHN0LHZlYzIoMjY5LjUsMTgzLjMpKSApO1xcbiAgICByZXR1cm4gZnJhY3Qoc2luKHN0KSo0Mzc1OC41NDUzMTIzKTtcXG59XFxuXFxuZmxvYXQgcmFuZG9tMmYodmVjMiBzdCl7XFxuICAgIGZsb2F0IHYgPSBkb3QoIGRvdChzdCx2ZWMyKDEyNy4xLDMxMS43KSksIGRvdChzdCx2ZWMyKDI2OS41LDE4My4zKSkgKTtcXG4gICAgcmV0dXJuIGZyYWN0KHNpbih2KSo0Mzc1OC41NDUzMTIzKTtcXG59XFxuXFxudmVjMiByYW5kb20yYSh2ZWMyIHN0KXtcXG4gICAgc3QgPSB2ZWMyKCBkb3Qoc3QsdmVjMigxMjcuMSwzMTEuNykpLFxcbiAgICAgICAgICAgICAgZG90KHN0LHZlYzIoMjY5LjUsMTgzLjMpKSApO1xcbiAgICByZXR1cm4gLTEuMCArIDIuMCpmcmFjdChzaW4oc3QpKjQzNzU4LjU0NTMxMjMpO1xcbn1cXG5cXG52ZWMzIHJhbmRvbTNhKHZlYzMgc3Qpe1xcbiAgICBzdCA9IHZlYzMoIGRvdChzdCx2ZWMzKDEyNy4xLDMxMS43LDEyMy42KSksXFxuICAgICAgICAgICAgICAgZG90KHN0LHZlYzMoMjY5LjUsMTgzLjMsOTcuMSkpLFxcbiAgICAgICAgICAgICAgICBkb3Qoc3QsdmVjMygxNDYuODcsMjQ1LjEyLDQ4LjcpKVxcbiAgICAgICAgICAgICAgICApO1xcbiAgICByZXR1cm4gLTEuMCArIDIuMCpmcmFjdChzaW4oc3QpKjQzNzU4LjU0NTMxMjMpO1xcbn1cXG5cXG5mbG9hdCBub2lzZShpbiB2ZWMyIHApIHtcXG5cXG4gICAgdmVjMiBpID0gZmxvb3IocCk7XFxuICAgIHZlYzIgZiA9IGZyYWN0KHApO1xcblxcbiAgICB2ZWMyIHUgPSBmKmYqKDMuMC0yLjAqZik7XFxuXFxuICAgIHJldHVybiBtaXgoIG1peCggZG90KCByYW5kb20yYShpICsgdmVjMigwLjAsMC4wKSApLCBmIC0gdmVjMigwLjAsMC4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tMmEoaSArIHZlYzIoMS4wLDAuMCkgKSwgZiAtIHZlYzIoMS4wLDAuMCkgKSwgdS54KSxcXG4gICAgICAgICAgICAgICAgbWl4KCBkb3QoIHJhbmRvbTJhKGkgKyB2ZWMyKDAuMCwxLjApICksIGYgLSB2ZWMyKDAuMCwxLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20yYShpICsgdmVjMigxLjAsMS4wKSApLCBmIC0gdmVjMigxLjAsMS4wKSApLCB1LngpLCB1LnkpO1xcblxcblxcbn1cXG5cXG5mbG9hdCBub2lzZShpbiB2ZWMzIHApIHtcXG5cXG4gICAgdmVjMyBpID0gZmxvb3IocCk7XFxuICAgIHZlYzMgZiA9IGZyYWN0KHApO1xcblxcbiAgICB2ZWMzIHUgPSBmKmYqKDMuMC0yLjAqZik7XFxuXFxuICAgICAgICByZXR1cm4gbWl4KFxcbiAgICAgICAgICAgICAgICBtaXgoXFxuICAgICAgICAgICAgICAgICAgICBtaXgoXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygwLjAsMC4wLDAuMCkgKSwgZiAtIHZlYzMoMC4wLDAuMCwwLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygxLjAsMC4wLDAuMCkgKSwgZiAtIHZlYzMoMS4wLDAuMCwwLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgdS54KSxcXG4gICAgICAgICAgICAgICAgICAgIG1peChcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDAuMCwxLjAsMC4wKSApLCBmIC0gdmVjMygwLjAsMS4wLDAuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDEuMCwxLjAsMC4wKSApLCBmIC0gdmVjMygxLjAsMS4wLDAuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB1LngpLFxcbiAgICAgICAgICAgICAgICAgICAgdS55KSxcXG4gICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMC4wLDAuMCwxLjApICksIGYgLSB2ZWMzKDAuMCwwLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMS4wLDAuMCwxLjApICksIGYgLSB2ZWMzKDEuMCwwLjAsMS4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHUueCksXFxuICAgICAgICAgICAgICAgICAgICBtaXgoXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygwLjAsMS4wLDEuMCkgKSwgZiAtIHZlYzMoMC4wLDEuMCwxLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygxLjAsMS4wLDEuMCkgKSwgZiAtIHZlYzMoMS4wLDEuMCwxLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgdS54KSxcXG4gICAgICAgICAgICAgICAgICAgIHUueSksXFxuICAgICAgICAgICAgICAgIHUuelxcbiAgICAgICAgICAgICAgICk7XFxufVxcblxcbmZsb2F0IHVzbm9pc2UodmVjMyBwKSB7XFxuICAgIHJldHVybiAobm9pc2UocCkgKyAxLjApIC8yLjA7XFxufVxcblxcbmZsb2F0IGNlbGxOb2lzZSh2ZWMyIHApIHtcXG4gICAgdmVjMiBpID0gZmxvb3IocCk7XFxuICAgIHZlYzIgZiA9IGZyYWN0KHApO1xcblxcbiAgICBmbG9hdCBtX2Rpc3QgPSAxLjA7XFxuXFxuICAgIGZvcihpbnQgeT0tMTsgeTw9MTsgeSsrKSB7XFxuICAgICAgICBmb3IoaW50IHg9LTE7IHg8PTE7IHgrKykge1xcbiAgICAgICAgICAgIHZlYzIgbmVpZ2hib3VyPXZlYzIoZmxvYXQoeCksIGZsb2F0KHkpKTtcXG4gICAgICAgICAgICB2ZWMyIHBvaW50ID0gcmFuZG9tMihpICsgbmVpZ2hib3VyKTtcXG5cXG4gICAgICAgICAgICB2ZWMyIGRpZmY9IG5laWdoYm91ciArIHBvaW50IC0gZjtcXG4gICAgICAgICAgICBmbG9hdCBkaXN0ID0gbGVuZ3RoKGRpZmYpO1xcbiAgICAgICAgICAgIG1fZGlzdCA9IG1pbihtX2Rpc3QsZGlzdCk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIG1fZGlzdDtcXG59XFxuXFxuXFxudmVjMyB2ZXJvbmlOb2lzZSh2ZWMyIHN0KSB7XFxuICAgIHZlYzIgcCA9IGZsb29yKHN0KTtcXG4gICAgdmVjMiBmID0gZnJhY3Qoc3QpO1xcblxcbiAgICBmbG9hdCByZXMgPSAyLjA7XFxuICAgIHZlYzIgbV9wb2ludD12ZWMyKDEuMCwgMS4wKSxcXG4gICAgICAgIG1yPXZlYzIoMCwwKSxcXG4gICAgICAgIG1iID0gdmVjMigwLDApO1xcblxcbiAgICBmb3IoaW50IGo9LTE7IGo8PTE7IGorKykge1xcbiAgICAgICAgZm9yKGludCBpPS0xOyBpPD0xOyBpKyspIHtcXG4gICAgICAgICAgICB2ZWMyIGI9dmVjMihmbG9hdChpKSwgZmxvYXQoaikpO1xcbiAgICAgICAgICAgIHZlYzIgcG9pbnQgPSBwICsgYjtcXG4gICAgICAgICAgICB2ZWMyIHIgPSBiICsgcmFuZG9tMihwb2ludCkgLSBmO1xcblxcbiAgICAgICAgICAgIGZsb2F0IGQgPSBkb3QocixyKTtcXG4gICAgICAgICAgICBpZiAoZCA8IHJlcykge1xcbiAgICAgICAgICAgICAgICByZXMgPSBkO1xcbiAgICAgICAgICAgICAgICBtX3BvaW50ID0gcG9pbnQ7XFxuICAgICAgICAgICAgICAgIG1yPXI7XFxuICAgICAgICAgICAgICAgIG1iPWI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJlcyA9IDguMDtcXG4gICAgZm9yKGludCBqPS0yOyBqPD0yOyArK2opIHtcXG4gICAgICAgIGZvcihpbnQgaT0tMjsgaTw9MjsgKytpKSB7XFxuXFxuICAgICAgICAgICAgdmVjMiBiID0gbWIgKyB2ZWMyKGZsb2F0KGkpLGZsb2F0KGopKTtcXG5cXG4gICAgICAgICAgICB2ZWMyIHIgPSBiICsgcmFuZG9tMihwICsgYikgLSBmO1xcblxcbiAgICAgICAgICAgIGZsb2F0IGQgPSBkb3QoMC41ICogKG1yK3IpLCBub3JtYWxpemUociAtIG1yKSk7XFxuXFxuICAgICAgICAgICAgcmVzID0gbWluKHJlcywgZCk7XFxuXFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIHZlYzMobV9wb2ludC54eSwgcmVzKTtcXG59XFxuXFxuY29uc3QgaW50IG9jdGF2ZXMgPSA0O1xcblxcbmZsb2F0IGZibSh2ZWMyIHAsIGZsb2F0IEgsIGZsb2F0IGxhY3VuYXJpdHkpIHtcXG4gICAgZmxvYXQgdmFsdWUsIGZyZXF1ZW5jeTtcXG4gICAgZmxvYXQgZXhwb25lbnQ7XFxuXFxuICAgIHZhbHVlID0gMC4wO1xcbiAgICBmcmVxdWVuY3kgPSAxLjA7XFxuXFxuICAgIGZvcihpbnQgaT0wOyBpPG9jdGF2ZXM7ICsraSkge1xcblxcbiAgICAgICAgZXhwb25lbnQgPSBwb3coZnJlcXVlbmN5LCAtSCk7XFxuXFxuICAgICAgICB2YWx1ZT12YWx1ZSArIChub2lzZShwKSAqIGV4cG9uZW50KTtcXG5cXG4gICAgICAgIHA9cCpsYWN1bmFyaXR5O1xcblxcbiAgICAgICAgZnJlcXVlbmN5PWZyZXF1ZW5jeSAqIGxhY3VuYXJpdHk7XFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIHZhbHVlO1xcbn1cXG5cXG5mbG9hdCBmYm0odmVjMyBwLCBmbG9hdCBILCBmbG9hdCBsYWN1bmFyaXR5KSB7XFxuICAgIGZsb2F0IHZhbHVlLCBmcmVxdWVuY3k7XFxuICAgIGZsb2F0IGV4cG9uZW50O1xcblxcbiAgICB2YWx1ZSA9IDAuMDtcXG4gICAgZnJlcXVlbmN5ID0gMS4wO1xcblxcbiAgICBmb3IoaW50IGk9MDsgaTxvY3RhdmVzOyArK2kpIHtcXG5cXG4gICAgICAgIGV4cG9uZW50ID0gcG93KGZyZXF1ZW5jeSwgLUgpO1xcblxcbiAgICAgICAgdmFsdWU9dmFsdWUgKyAobm9pc2UocCkgKiBleHBvbmVudCk7XFxuXFxuICAgICAgICBwPXAqbGFjdW5hcml0eTtcXG5cXG4gICAgICAgIGZyZXF1ZW5jeT1mcmVxdWVuY3kgKiBsYWN1bmFyaXR5O1xcbiAgICB9XFxuXFxuICAgIHJldHVybiB2YWx1ZTtcXG59XFxuXFxuZmxvYXQgcmlkZ2VkTXVsdGlmcmFjdGFsKHZlYzMgcCwgZmxvYXQgSCwgZmxvYXQgbGFjdW5hcml0eSwgZmxvYXQgb2Zmc2V0KSB7XFxuICAgIGZsb2F0IHJlc3VsdCwgZnJlcXVlbmN5LCByZW1haW5kZXI7XFxuICAgIGZsb2F0IHdlaWdodCwgc2lnbmFsLCBleHBvbmVudDtcXG5cXG4gICAgZmxvYXQgZ2FpbiA9IDIuMDtcXG5cXG4gICAgcmVzdWx0ID0gMS4wO1xcbiAgICBmcmVxdWVuY3kgPSAxLjA7XFxuXFxuICAgIHNpZ25hbCA9IG5vaXNlKHApO1xcbiAgICBpZiAoc2lnbmFsIDwgMC4wKSBzaWduYWwgPSAtc2lnbmFsO1xcbiAgICBzaWduYWwgPSBvZmZzZXQtc2lnbmFsO1xcbiAgICBzaWduYWwgKj1zaWduYWw7XFxuICAgIHJlc3VsdCA9IHNpZ25hbDtcXG4gICAgd2VpZ2h0ID0gMS4wO1xcblxcblxcbiAgICBmb3IoaW50IGk9MTsgaTxvY3RhdmVzOyArK2kpIHtcXG4gICAgICAgIGZyZXF1ZW5jeT1mcmVxdWVuY3kqbGFjdW5hcml0eTtcXG4gICAgICAgIHA9cCpsYWN1bmFyaXR5O1xcblxcbiAgICAgICAgd2VpZ2h0ID0gc2lnbmFsICogZ2FpbjtcXG4gICAgICAgIGlmICh3ZWlnaHQ+MS4wKSB3ZWlnaHQ9MS4wO1xcbiAgICAgICAgaWYgKHdlaWdodCA8IDAuMCApIHdlaWdodD0gMC4wO1xcblxcbiAgICAgICAgc2lnbmFsID0gbm9pc2UocCk7XFxuXFxuICAgICAgICBpZiAoc2lnbmFsIDwwLjApIHNpZ25hbCA9IC1zaWduYWw7XFxuICAgICAgICBzaWduYWwgPSBvZmZzZXQgLSBzaWduYWw7XFxuICAgICAgICBzaWduYWwgKj1zaWduYWw7XFxuICAgICAgICBzaWduYWwgKj13ZWlnaHQ7XFxuICAgICAgICByZXN1bHQgKz0gc2lnbmFsICogcG93KGZyZXF1ZW5jeSwtSCk7XFxuXFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59XFxuXFxuYm9vbCBzcGhlcmUodmVjMiBwLCBvdXQgdmVjMyBoaXQpIHtcXG5cXG4gICAgZmxvYXQgZGlzdCA9IDEuMCAtIHAueCpwLnggLSBwLnkqcC55O1xcblxcbiAgICBpZiAoZGlzdCA8IDAuMCkgcmV0dXJuIGZhbHNlO1xcblxcbiAgICBmbG9hdCB6PXNxcnQoIGRpc3QpO1xcblxcbiAgICBoaXQgPSB2ZWMzKHAsIHopO1xcblxcbiAgICByZXR1cm4gdHJ1ZTtcXG5cXG59XFxuXFxuYm9vbCBjeWxpbmRlcih2ZWMyIHAsIG91dCB2ZWMzIGhpdCkge1xcbiAgICBmbG9hdCBkaXN0ID0gMS4wIC0gcC54KnAueDtcXG5cXG4gICAgaWYgKGRpc3QgPCAwLjApIHJldHVybiBmYWxzZTtcXG5cXG4gICAgZmxvYXQgej1zcXJ0KCBkaXN0KTtcXG5cXG4gICAgaGl0ID0gdmVjMyhwLCB6KTtcXG5cXG4gICAgcmV0dXJuIHRydWU7XFxufVxcblxcbnVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247XFxudW5pZm9ybSB2ZWMyIHVfbW91c2U7XFxudW5pZm9ybSBmbG9hdCB1X3RpbWU7XFxuXFxuXFxuLy9pbmplY3RcXG5cXG5cXG52ZWMzIGZibVRlc3QodmVjMyBwKSB7XFxuXFxuICAgIGZsb2F0IHYgPSBmYm0odmVjMyhwLngsIHAueSwgcC56ICsgdV90aW1lIC8gMi4wKSwgMS4wLCAyLjApO1xcblxcbiAgICB2PSh2KzEuMCkgLyAyLjA7XFxuICAgIHZlYzMgY29sb3IgPSB2ZWMzKHYsdix2KTtcXG5cXG4gICAgcmV0dXJuIGNvbG9yO1xcblxcbn1cXG5cXG52b2lkIG1haW4oKSB7XFxuXFxuICAgIHZlYzMgcDtcXG4gICAgaWYgKG1hcHBpbmcocCkpIHtcXG4gICAgICAgIGdsX0ZyYWdDb2xvcj12ZWM0KGZibVRlc3QocCksIDApO1xcbiAgICB9XFxuXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9mYm0uZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNpZmRlZiBHTF9FU1xcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcbiNlbmRpZlxcblxcblxcbmNvbnN0IGZsb2F0IFBJID0gMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1O1xcbmNvbnN0IGZsb2F0IFBJMiA9IDYuMjgzMTg1MzA3MTg7XFxuXFxuZmxvYXQgYWxtb3N0SWRlbnRpdHkoIGZsb2F0IHgsIGZsb2F0IG0sIGZsb2F0IG4gKVxcbntcXG4gICAgaWYoIHg+bSApIHJldHVybiB4O1xcblxcbiAgICBmbG9hdCBhID0gMi4wKm4gLSBtO1xcbiAgICBmbG9hdCBiID0gMi4wKm0gLSAzLjAqbjtcXG4gICAgZmxvYXQgdCA9IHgvbTtcXG5cXG4gICAgcmV0dXJuIChhKnQgKyBiKSp0KnQgKyBuO1xcbn1cXG5cXG5cXG5mbG9hdCBpbXB1bHNlKCBmbG9hdCBrLCBmbG9hdCB4IClcXG57XFxuICAgIGZsb2F0IGggPSBrKng7XFxuICAgIHJldHVybiBoKmV4cCgxLjAtaCk7XFxufVxcblxcbmZsb2F0IGN1YmljUHVsc2UoIGZsb2F0IGMsIGZsb2F0IHcsIGZsb2F0IHggKVxcbntcXG4gICAgeCA9IGFicyh4IC0gYyk7XFxuICAgIGlmKCB4PncgKSByZXR1cm4gMC4wO1xcbiAgICB4IC89IHc7XFxuICAgIHJldHVybiAxLjAgLSB4KngqKDMuMC0yLjAqeCk7XFxufVxcblxcbmZsb2F0IGV4cFN0ZXAoIGZsb2F0IHgsIGZsb2F0IGssIGZsb2F0IG4gKVxcbntcXG4gICAgcmV0dXJuIGV4cCggLWsqcG93KHgsbikgKTtcXG59XFxuXFxuXFxuZmxvYXQgZ2FpbihmbG9hdCB4LCBmbG9hdCBrKVxcbntcXG4gICAgZmxvYXQgYSA9IDAuNSpwb3coMi4wKigoeDwwLjUpP3g6MS4wLXgpLCBrKTtcXG4gICAgcmV0dXJuICh4PDAuNSk/YToxLjAtYTtcXG59XFxuXFxuXFxuZmxvYXQgcGFyYWJvbGEoIGZsb2F0IHgsIGZsb2F0IGsgKVxcbntcXG4gICAgcmV0dXJuIHBvdyggNC4wKngqKDEuMC14KSwgayApO1xcbn1cXG5cXG5mbG9hdCBwY3VydmUoIGZsb2F0IHgsIGZsb2F0IGEsIGZsb2F0IGIgKVxcbntcXG4gICAgZmxvYXQgayA9IHBvdyhhK2IsYStiKSAvIChwb3coYSxhKSpwb3coYixiKSk7XFxuICAgIHJldHVybiBrICogcG93KCB4LCBhICkgKiBwb3coIDEuMC14LCBiICk7XFxufVxcblxcbnZlYzMgcmdiMmhzYiggaW4gdmVjMyBjICl7XFxuICAgIHZlYzQgSyA9IHZlYzQoMC4wLCAtMS4wIC8gMy4wLCAyLjAgLyAzLjAsIC0xLjApO1xcbiAgICB2ZWM0IHAgPSBtaXgodmVjNChjLmJnLCBLLnd6KSxcXG4gICAgICAgICAgICAgICAgIHZlYzQoYy5nYiwgSy54eSksXFxuICAgICAgICAgICAgICAgICBzdGVwKGMuYiwgYy5nKSk7XFxuICAgIHZlYzQgcSA9IG1peCh2ZWM0KHAueHl3LCBjLnIpLFxcbiAgICAgICAgICAgICAgICAgdmVjNChjLnIsIHAueXp4KSxcXG4gICAgICAgICAgICAgICAgIHN0ZXAocC54LCBjLnIpKTtcXG4gICAgZmxvYXQgZCA9IHEueCAtIG1pbihxLncsIHEueSk7XFxuICAgIGZsb2F0IGUgPSAxLjBlLTEwO1xcbiAgICByZXR1cm4gdmVjMyhhYnMocS56ICsgKHEudyAtIHEueSkgLyAoNi4wICogZCArIGUpKSxcXG4gICAgICAgICAgICAgICAgZCAvIChxLnggKyBlKSxcXG4gICAgICAgICAgICAgICAgcS54KTtcXG59XFxuXFxuLy8gIEZ1bmN0aW9uIGZyb20gScOxaWdvIFF1aWxlc1xcbi8vICBodHRwczovL3d3dy5zaGFkZXJ0b3kuY29tL3ZpZXcvTXNTM1djXFxudmVjMyBoc2IycmdiKCBpbiB2ZWMzIGMgKXtcXG4gICAgdmVjMyByZ2IgPSBjbGFtcChhYnMobW9kKGMueCo2LjArdmVjMygwLjAsNC4wLDIuMCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA2LjApLTMuMCktMS4wLFxcbiAgICAgICAgICAgICAgICAgICAgIDAuMCxcXG4gICAgICAgICAgICAgICAgICAgICAxLjAgKTtcXG4gICAgcmdiID0gcmdiKnJnYiooMy4wLTIuMCpyZ2IpO1xcbiAgICByZXR1cm4gYy56ICogbWl4KHZlYzMoMS4wKSwgcmdiLCBjLnkpO1xcbn1cXG5cXG5mbG9hdCByZWN0YW5nbGUodmVjMiBzdCx2ZWMyIGJsLCB2ZWMyIHRyKSB7XFxuICAgIHZlYzIgYmx2ID0gc3RlcChibCwgc3QpO1xcbiAgICB2ZWMyIHRydiA9IHN0ZXAodmVjMigxLjApLXRyLCAxLjAtc3QpO1xcbiAgICByZXR1cm4gYmx2LngqYmx2LnkgKiB0cnYueCp0cnYueTtcXG59XFxuXFxuZmxvYXQgc21vb3RoUmVjdGFuZ2xlKHZlYzIgc3QsdmVjMiBibCwgdmVjMiB0ciwgZmxvYXQgdykge1xcbiAgICB2ZWMyIGJsdiA9IHNtb290aHN0ZXAoYmwsIGJsK3ZlYzIodyksIHN0KTtcXG4gICAgdmVjMiB0cnYgPSBzbW9vdGhzdGVwKHZlYzIoMS4wKS10ciwgdmVjMigxLjApLXRyK3ZlYzIodyksIDEuMC1zdCk7XFxuICAgIHJldHVybiBibHYueCpibHYueSAqIHRydi54KnRydi55O1xcbn1cXG5cXG5mbG9hdCBzbW9vdGhDaXJjbGUodmVjMiBzdCwgdmVjMiBjLCBmbG9hdCByLCBmbG9hdCB3KSB7XFxuICAgIGZsb2F0IGQgPSBsZW5ndGgoc3QgLSBjKTtcXG4gICAgcmV0dXJuIHNtb290aHN0ZXAocit3LHItdyxkKTtcXG59XFxuXFxuZmxvYXQgcG9seWdvbih2ZWMyIHN0LCB2ZWMyIGMsIGZsb2F0IHIsIGludCBOKSB7XFxuICAgXFx0ZmxvYXQgYSA9IGF0YW4oc3QueSxzdC54KTtcXG4gICBcXHRmbG9hdCBzID0gUEkqMi4wL2Zsb2F0KE4pO1xcbiAgIFxcdGZsb2F0IGQgPSAgY29zKGZsb29yKC41K2EvcykgKiBzIC0gYSkgKiBkaXN0YW5jZShzdCxjKSAqIDIuMDtcXG4gICAgcmV0dXJuIDEuMC1zbW9vdGhzdGVwKHItMC4wMSxyLGQpO1xcbn1cXG5cXG5tYXQyIHJvdGF0ZTJkKGZsb2F0IGEpIHtcXG4gICAgcmV0dXJuIG1hdDIoY29zKGEpLCAtc2luKGEpLCBzaW4oYSksIGNvcyhhKSk7XFxufVxcblxcbnZlYzIgcmFuZG9tMih2ZWMyIHN0KXtcXG4gICAgc3QgPSB2ZWMyKCBkb3Qoc3QsdmVjMigxMjcuMSwzMTEuNykpLCBkb3Qoc3QsdmVjMigyNjkuNSwxODMuMykpICk7XFxuICAgIHJldHVybiBmcmFjdChzaW4oc3QpKjQzNzU4LjU0NTMxMjMpO1xcbn1cXG5cXG5mbG9hdCByYW5kb20yZih2ZWMyIHN0KXtcXG4gICAgZmxvYXQgdiA9IGRvdCggZG90KHN0LHZlYzIoMTI3LjEsMzExLjcpKSwgZG90KHN0LHZlYzIoMjY5LjUsMTgzLjMpKSApO1xcbiAgICByZXR1cm4gZnJhY3Qoc2luKHYpKjQzNzU4LjU0NTMxMjMpO1xcbn1cXG5cXG52ZWMyIHJhbmRvbTJhKHZlYzIgc3Qpe1xcbiAgICBzdCA9IHZlYzIoIGRvdChzdCx2ZWMyKDEyNy4xLDMxMS43KSksXFxuICAgICAgICAgICAgICBkb3Qoc3QsdmVjMigyNjkuNSwxODMuMykpICk7XFxuICAgIHJldHVybiAtMS4wICsgMi4wKmZyYWN0KHNpbihzdCkqNDM3NTguNTQ1MzEyMyk7XFxufVxcblxcbnZlYzMgcmFuZG9tM2EodmVjMyBzdCl7XFxuICAgIHN0ID0gdmVjMyggZG90KHN0LHZlYzMoMTI3LjEsMzExLjcsMTIzLjYpKSxcXG4gICAgICAgICAgICAgICBkb3Qoc3QsdmVjMygyNjkuNSwxODMuMyw5Ny4xKSksXFxuICAgICAgICAgICAgICAgIGRvdChzdCx2ZWMzKDE0Ni44NywyNDUuMTIsNDguNykpXFxuICAgICAgICAgICAgICAgICk7XFxuICAgIHJldHVybiAtMS4wICsgMi4wKmZyYWN0KHNpbihzdCkqNDM3NTguNTQ1MzEyMyk7XFxufVxcblxcbmZsb2F0IG5vaXNlKGluIHZlYzIgcCkge1xcblxcbiAgICB2ZWMyIGkgPSBmbG9vcihwKTtcXG4gICAgdmVjMiBmID0gZnJhY3QocCk7XFxuXFxuICAgIHZlYzIgdSA9IGYqZiooMy4wLTIuMCpmKTtcXG5cXG4gICAgcmV0dXJuIG1peCggbWl4KCBkb3QoIHJhbmRvbTJhKGkgKyB2ZWMyKDAuMCwwLjApICksIGYgLSB2ZWMyKDAuMCwwLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20yYShpICsgdmVjMigxLjAsMC4wKSApLCBmIC0gdmVjMigxLjAsMC4wKSApLCB1LngpLFxcbiAgICAgICAgICAgICAgICBtaXgoIGRvdCggcmFuZG9tMmEoaSArIHZlYzIoMC4wLDEuMCkgKSwgZiAtIHZlYzIoMC4wLDEuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTJhKGkgKyB2ZWMyKDEuMCwxLjApICksIGYgLSB2ZWMyKDEuMCwxLjApICksIHUueCksIHUueSk7XFxuXFxuXFxufVxcblxcbmZsb2F0IG5vaXNlKGluIHZlYzMgcCkge1xcblxcbiAgICB2ZWMzIGkgPSBmbG9vcihwKTtcXG4gICAgdmVjMyBmID0gZnJhY3QocCk7XFxuXFxuICAgIHZlYzMgdSA9IGYqZiooMy4wLTIuMCpmKTtcXG5cXG4gICAgICAgIHJldHVybiBtaXgoXFxuICAgICAgICAgICAgICAgIG1peChcXG4gICAgICAgICAgICAgICAgICAgIG1peChcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDAuMCwwLjAsMC4wKSApLCBmIC0gdmVjMygwLjAsMC4wLDAuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDEuMCwwLjAsMC4wKSApLCBmIC0gdmVjMygxLjAsMC4wLDAuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB1LngpLFxcbiAgICAgICAgICAgICAgICAgICAgbWl4KFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMC4wLDEuMCwwLjApICksIGYgLSB2ZWMzKDAuMCwxLjAsMC4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdCggcmFuZG9tM2EoaSArIHZlYzMoMS4wLDEuMCwwLjApICksIGYgLSB2ZWMzKDEuMCwxLjAsMC4wKSApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHUueCksXFxuICAgICAgICAgICAgICAgICAgICB1LnkpLFxcbiAgICAgICAgICAgICAgICBtaXgoXFxuICAgICAgICAgICAgICAgICAgICBtaXgoXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygwLjAsMC4wLDEuMCkgKSwgZiAtIHZlYzMoMC4wLDAuMCwxLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90KCByYW5kb20zYShpICsgdmVjMygxLjAsMC4wLDEuMCkgKSwgZiAtIHZlYzMoMS4wLDAuMCwxLjApICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgdS54KSxcXG4gICAgICAgICAgICAgICAgICAgIG1peChcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDAuMCwxLjAsMS4wKSApLCBmIC0gdmVjMygwLjAsMS4wLDEuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3QoIHJhbmRvbTNhKGkgKyB2ZWMzKDEuMCwxLjAsMS4wKSApLCBmIC0gdmVjMygxLjAsMS4wLDEuMCkgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB1LngpLFxcbiAgICAgICAgICAgICAgICAgICAgdS55KSxcXG4gICAgICAgICAgICAgICAgdS56XFxuICAgICAgICAgICAgICAgKTtcXG59XFxuXFxuZmxvYXQgdXNub2lzZSh2ZWMzIHApIHtcXG4gICAgcmV0dXJuIChub2lzZShwKSArIDEuMCkgLzIuMDtcXG59XFxuXFxuZmxvYXQgY2VsbE5vaXNlKHZlYzIgcCkge1xcbiAgICB2ZWMyIGkgPSBmbG9vcihwKTtcXG4gICAgdmVjMiBmID0gZnJhY3QocCk7XFxuXFxuICAgIGZsb2F0IG1fZGlzdCA9IDEuMDtcXG5cXG4gICAgZm9yKGludCB5PS0xOyB5PD0xOyB5KyspIHtcXG4gICAgICAgIGZvcihpbnQgeD0tMTsgeDw9MTsgeCsrKSB7XFxuICAgICAgICAgICAgdmVjMiBuZWlnaGJvdXI9dmVjMihmbG9hdCh4KSwgZmxvYXQoeSkpO1xcbiAgICAgICAgICAgIHZlYzIgcG9pbnQgPSByYW5kb20yKGkgKyBuZWlnaGJvdXIpO1xcblxcbiAgICAgICAgICAgIHZlYzIgZGlmZj0gbmVpZ2hib3VyICsgcG9pbnQgLSBmO1xcbiAgICAgICAgICAgIGZsb2F0IGRpc3QgPSBsZW5ndGgoZGlmZik7XFxuICAgICAgICAgICAgbV9kaXN0ID0gbWluKG1fZGlzdCxkaXN0KTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICByZXR1cm4gbV9kaXN0O1xcbn1cXG5cXG5cXG52ZWMzIHZlcm9uaU5vaXNlKHZlYzIgc3QpIHtcXG4gICAgdmVjMiBwID0gZmxvb3Ioc3QpO1xcbiAgICB2ZWMyIGYgPSBmcmFjdChzdCk7XFxuXFxuICAgIGZsb2F0IHJlcyA9IDIuMDtcXG4gICAgdmVjMiBtX3BvaW50PXZlYzIoMS4wLCAxLjApLFxcbiAgICAgICAgbXI9dmVjMigwLDApLFxcbiAgICAgICAgbWIgPSB2ZWMyKDAsMCk7XFxuXFxuICAgIGZvcihpbnQgaj0tMTsgajw9MTsgaisrKSB7XFxuICAgICAgICBmb3IoaW50IGk9LTE7IGk8PTE7IGkrKykge1xcbiAgICAgICAgICAgIHZlYzIgYj12ZWMyKGZsb2F0KGkpLCBmbG9hdChqKSk7XFxuICAgICAgICAgICAgdmVjMiBwb2ludCA9IHAgKyBiO1xcbiAgICAgICAgICAgIHZlYzIgciA9IGIgKyByYW5kb20yKHBvaW50KSAtIGY7XFxuXFxuICAgICAgICAgICAgZmxvYXQgZCA9IGRvdChyLHIpO1xcbiAgICAgICAgICAgIGlmIChkIDwgcmVzKSB7XFxuICAgICAgICAgICAgICAgIHJlcyA9IGQ7XFxuICAgICAgICAgICAgICAgIG1fcG9pbnQgPSBwb2ludDtcXG4gICAgICAgICAgICAgICAgbXI9cjtcXG4gICAgICAgICAgICAgICAgbWI9YjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgcmVzID0gOC4wO1xcbiAgICBmb3IoaW50IGo9LTI7IGo8PTI7ICsraikge1xcbiAgICAgICAgZm9yKGludCBpPS0yOyBpPD0yOyArK2kpIHtcXG5cXG4gICAgICAgICAgICB2ZWMyIGIgPSBtYiArIHZlYzIoZmxvYXQoaSksZmxvYXQoaikpO1xcblxcbiAgICAgICAgICAgIHZlYzIgciA9IGIgKyByYW5kb20yKHAgKyBiKSAtIGY7XFxuXFxuICAgICAgICAgICAgZmxvYXQgZCA9IGRvdCgwLjUgKiAobXIrciksIG5vcm1hbGl6ZShyIC0gbXIpKTtcXG5cXG4gICAgICAgICAgICByZXMgPSBtaW4ocmVzLCBkKTtcXG5cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICByZXR1cm4gdmVjMyhtX3BvaW50Lnh5LCByZXMpO1xcbn1cXG5cXG5jb25zdCBpbnQgb2N0YXZlcyA9IDQ7XFxuXFxuZmxvYXQgZmJtKHZlYzIgcCwgZmxvYXQgSCwgZmxvYXQgbGFjdW5hcml0eSkge1xcbiAgICBmbG9hdCB2YWx1ZSwgZnJlcXVlbmN5O1xcbiAgICBmbG9hdCBleHBvbmVudDtcXG5cXG4gICAgdmFsdWUgPSAwLjA7XFxuICAgIGZyZXF1ZW5jeSA9IDEuMDtcXG5cXG4gICAgZm9yKGludCBpPTA7IGk8b2N0YXZlczsgKytpKSB7XFxuXFxuICAgICAgICBleHBvbmVudCA9IHBvdyhmcmVxdWVuY3ksIC1IKTtcXG5cXG4gICAgICAgIHZhbHVlPXZhbHVlICsgKG5vaXNlKHApICogZXhwb25lbnQpO1xcblxcbiAgICAgICAgcD1wKmxhY3VuYXJpdHk7XFxuXFxuICAgICAgICBmcmVxdWVuY3k9ZnJlcXVlbmN5ICogbGFjdW5hcml0eTtcXG4gICAgfVxcblxcbiAgICByZXR1cm4gdmFsdWU7XFxufVxcblxcbmZsb2F0IGZibSh2ZWMzIHAsIGZsb2F0IEgsIGZsb2F0IGxhY3VuYXJpdHkpIHtcXG4gICAgZmxvYXQgdmFsdWUsIGZyZXF1ZW5jeTtcXG4gICAgZmxvYXQgZXhwb25lbnQ7XFxuXFxuICAgIHZhbHVlID0gMC4wO1xcbiAgICBmcmVxdWVuY3kgPSAxLjA7XFxuXFxuICAgIGZvcihpbnQgaT0wOyBpPG9jdGF2ZXM7ICsraSkge1xcblxcbiAgICAgICAgZXhwb25lbnQgPSBwb3coZnJlcXVlbmN5LCAtSCk7XFxuXFxuICAgICAgICB2YWx1ZT12YWx1ZSArIChub2lzZShwKSAqIGV4cG9uZW50KTtcXG5cXG4gICAgICAgIHA9cCpsYWN1bmFyaXR5O1xcblxcbiAgICAgICAgZnJlcXVlbmN5PWZyZXF1ZW5jeSAqIGxhY3VuYXJpdHk7XFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIHZhbHVlO1xcbn1cXG5cXG5mbG9hdCByaWRnZWRNdWx0aWZyYWN0YWwodmVjMyBwLCBmbG9hdCBILCBmbG9hdCBsYWN1bmFyaXR5LCBmbG9hdCBvZmZzZXQpIHtcXG4gICAgZmxvYXQgcmVzdWx0LCBmcmVxdWVuY3ksIHJlbWFpbmRlcjtcXG4gICAgZmxvYXQgd2VpZ2h0LCBzaWduYWwsIGV4cG9uZW50O1xcblxcbiAgICBmbG9hdCBnYWluID0gMi4wO1xcblxcbiAgICByZXN1bHQgPSAxLjA7XFxuICAgIGZyZXF1ZW5jeSA9IDEuMDtcXG5cXG4gICAgc2lnbmFsID0gbm9pc2UocCk7XFxuICAgIGlmIChzaWduYWwgPCAwLjApIHNpZ25hbCA9IC1zaWduYWw7XFxuICAgIHNpZ25hbCA9IG9mZnNldC1zaWduYWw7XFxuICAgIHNpZ25hbCAqPXNpZ25hbDtcXG4gICAgcmVzdWx0ID0gc2lnbmFsO1xcbiAgICB3ZWlnaHQgPSAxLjA7XFxuXFxuXFxuICAgIGZvcihpbnQgaT0xOyBpPG9jdGF2ZXM7ICsraSkge1xcbiAgICAgICAgZnJlcXVlbmN5PWZyZXF1ZW5jeSpsYWN1bmFyaXR5O1xcbiAgICAgICAgcD1wKmxhY3VuYXJpdHk7XFxuXFxuICAgICAgICB3ZWlnaHQgPSBzaWduYWwgKiBnYWluO1xcbiAgICAgICAgaWYgKHdlaWdodD4xLjApIHdlaWdodD0xLjA7XFxuICAgICAgICBpZiAod2VpZ2h0IDwgMC4wICkgd2VpZ2h0PSAwLjA7XFxuXFxuICAgICAgICBzaWduYWwgPSBub2lzZShwKTtcXG5cXG4gICAgICAgIGlmIChzaWduYWwgPDAuMCkgc2lnbmFsID0gLXNpZ25hbDtcXG4gICAgICAgIHNpZ25hbCA9IG9mZnNldCAtIHNpZ25hbDtcXG4gICAgICAgIHNpZ25hbCAqPXNpZ25hbDtcXG4gICAgICAgIHNpZ25hbCAqPXdlaWdodDtcXG4gICAgICAgIHJlc3VsdCArPSBzaWduYWwgKiBwb3coZnJlcXVlbmN5LC1IKTtcXG5cXG4gICAgfVxcblxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cXG5cXG5ib29sIHNwaGVyZSh2ZWMyIHAsIG91dCB2ZWMzIGhpdCkge1xcblxcbiAgICBmbG9hdCBkaXN0ID0gMS4wIC0gcC54KnAueCAtIHAueSpwLnk7XFxuXFxuICAgIGlmIChkaXN0IDwgMC4wKSByZXR1cm4gZmFsc2U7XFxuXFxuICAgIGZsb2F0IHo9c3FydCggZGlzdCk7XFxuXFxuICAgIGhpdCA9IHZlYzMocCwgeik7XFxuXFxuICAgIHJldHVybiB0cnVlO1xcblxcbn1cXG5cXG5ib29sIGN5bGluZGVyKHZlYzIgcCwgb3V0IHZlYzMgaGl0KSB7XFxuICAgIGZsb2F0IGRpc3QgPSAxLjAgLSBwLngqcC54O1xcblxcbiAgICBpZiAoZGlzdCA8IDAuMCkgcmV0dXJuIGZhbHNlO1xcblxcbiAgICBmbG9hdCB6PXNxcnQoIGRpc3QpO1xcblxcbiAgICBoaXQgPSB2ZWMzKHAsIHopO1xcblxcbiAgICByZXR1cm4gdHJ1ZTtcXG59XFxuXFxudW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjtcXG51bmlmb3JtIHZlYzIgdV9tb3VzZTtcXG51bmlmb3JtIGZsb2F0IHVfdGltZTtcXG5cXG5cXG4vL2luamVjdFxcblxcbnZlYzMgZmlyZSh2ZWMzIHApIHtcXG5cXG4gICAgZmxvYXQgdjtcXG5cXG4gICAgZmxvYXQgeT1wLnkgLyAyLjA7XFxuXFxuICAgIGZsb2F0IHZzY2FsZSA9IHkgKyAxLjE7XFxuICAgIHZzY2FsZT0odnNjYWxlKnZzY2FsZSk7XFxuXFxuICAgIHZlYzMgcHAgPSB2ZWMzKHAqNS4wKSArIHZlYzMoMCx1X3RpbWUgKiAyLjAsdV90aW1lICk7Ly8sIHVfdGltZS8wLjc1KTtcXG5cXG4gICAgdj0gcmlkZ2VkTXVsdGlmcmFjdGFsKHBwLCAwLjI1LCAyLjEsIDAuNylcXG4gICAgICAgICogdnNjYWxlXFxuICAgICAgICArICh2c2NhbGUgLyAyLjUpO1xcblxcbiAgICB2ZWMzIGNvbG9yO1xcblxcbiAgICBjb2xvciA9XFxuICAgICAgICAoc21vb3Roc3RlcCgwLjAsIDAuNSwgdikgKiBzbW9vdGhzdGVwKDAuNSwwLjAsdikgKiB2ZWMzKC4yNSwuMjUsLjI1KSlcXG4gICAgICAgIC8vKHNtb290aHN0ZXAoMC4zLCAwLjksIHYpICogdmVjMygxLDAsMCkpXFxuICAgICAgICArIChzbW9vdGhzdGVwKDAuNSwgMC43LCB2KSAqIHZlYzMoMSwwLDApKVxcbiAgICAgICAgKyAoc21vb3Roc3RlcCgwLjksIDEuMCwgdikgKiB2ZWMzKDAsMSwwKSlcXG4gICAgICAgIDtcXG5cXG5cXG4gICAgcmV0dXJuIGNvbG9yO1xcblxcbn1cXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzMgcDtcXG4gICAgaWYgKG1hcHBpbmcocCkgKSB7XFxuICAgICAgICBnbF9GcmFnQ29sb3I9dmVjNChmaXJlKHApLCAwKTtcXG4gICAgfVxcblxcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvZmlyZS5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBmbGF0OiBgXG4gICAgYm9vbCBtYXBwaW5nKG91dCB2ZWMzIHN0KSB7XG4gICAgICB2ZWMyIHAgPSBnbF9GcmFnQ29vcmQueHkvdV9yZXNvbHV0aW9uO1xuICAgICAgc3QgPSB2ZWMzKHZlYzIoMC41KSAtIHAsMCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIGAsXG4gIFxuICBzcGhlcmU6IGBcbiAgICBib29sIG1hcHBpbmcob3V0IHZlYzMgcCkge1xuICAgICAgICB2ZWMzIGhpdDtcbiAgICAgICAgdmVjMiBwMiA9IChnbF9GcmFnQ29vcmQueHkvdV9yZXNvbHV0aW9uKTtcbiAgICAgICAgcDI9dmVjMigwLjUpIC0gcDI7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc3BoZXJlKHAyICogMi4wLCBwKTtcbiAgICB9XG4gIGAsXG4gIFxuICBjeWxpbmRlcjogYFxuICAgIGJvb2wgbWFwcGluZyhvdXQgdmVjMyBwKSB7XG4gICAgICAgIHZlYzMgaGl0O1xuICAgICAgICB2ZWMyIHAyID0gKGdsX0ZyYWdDb29yZC54eS91X3Jlc29sdXRpb24pO1xuICAgICAgICBwMj12ZWMyKDAuNSkgLSBwMjtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjeWxpbmRlcihwMiAqIDIuMCwgcCk7XG4gICAgfVxuICBgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYWRlcnMvbWFwcGluZ3MuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzLmNzc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaHRtbCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9