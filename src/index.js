"use strict";
import GlslCanvas from "glslCanvas/src/GlslCanvas";

import string_frag_code from "./shaders/fragment.glsl";
//import vertex from "./vertex.glsl";

(() => {
  
  document.documentElement.style.backgroundColor="black";
  
  let canvas = document.createElement("canvas");
  document.documentElement.appendChild(canvas);
  canvas.width=800;
  canvas.height=800;
  
  canvas.style.display="block";
  canvas.style.position="absolute";
  canvas.style.margin="auto auto auto auto";
  canvas.style.top="50%";
  canvas.style.left="50%";
  canvas.style.transform="translate(-50%,-50%)";
  
  
  let sandbox = new GlslCanvas(canvas);
  
  sandbox.setUniform('u_resolution', canvas.width, canvas.height );
  
  
  sandbox.load(string_frag_code);
  
})();


