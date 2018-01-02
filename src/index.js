"use strict";
import GlslCanvas from "glslCanvas/src/GlslCanvas";

import shaders from './shaders';

import mappings from './shaders/mappings.js';

import css from './styles.css';

let defaultShader = Object.keys(shaders)[0];

(() => {
  
  document.documentElement.style.backgroundColor = "black";
  
  let canvas = document.createElement("canvas");
  document.documentElement.appendChild(canvas);
  canvas.width = 800;
  canvas.height = 800;
  
  canvas.style.display = "block";
  canvas.style.position = "absolute";
  canvas.style.margin = "auto auto auto auto";
  canvas.style.top = "50%";
  canvas.style.left = "50%";
  canvas.style.transform = "translate(-50%,-50%)";
  
  let label = document.createElement("label");
  label.innerText="Select a shader to load ";
  document.documentElement.appendChild(label);
  
  let dropdown = document.createElement("select");
  
  let pleaseSelect = document.createElement("option");
  pleaseSelect.innerText = "Select a shader to load...";
  dropdown.appendChild(pleaseSelect);
  
  
  Object.keys(shaders).map(shader => {
    let option = document.createElement("option");
    option.innerText = shader;
    option.value = shader;
    return option;
  }).forEach(option => dropdown.appendChild(option));
  
  document.documentElement.appendChild(dropdown);

  let sandbox;
  
  let mapping = mappings.sphere;

  function loadShader(shader) {
    
    if (dropdown.value !== shader) {
      dropdown.value = shader;
    }
    
    if (sandbox) sandbox.destroy();
    sandbox = undefined;
    
    sandbox = new GlslCanvas(canvas);
  
    sandbox.setUniform('u_resolution', canvas.width, canvas.height);

    canvas.addEventListener("render", () => {
      console.log("hello");
    });
    
    
    let shaderCode = shaders[shader];

    shaderCode = shaderCode.replace("//inject", mapping);
    
    sandbox.load(shaderCode);
    sandbox.uniform('Matrix3fv', "mat3", "rotation", false, new Float32Array([1,0,0, 0,1,0, 0,0,1]));
    
    sandbox.on("render", () => {
      
      let u_time = ((new Date()|0) - sandbox.timeLoad) / 1000.0;
      
      let c = Math.cos(u_time / 10.0);
      let s = Math.sin(u_time / 10.0);
      
      
      
      sandbox.uniform('Matrix3fv', "mat3", "rotation", false, new Float32Array([c,0,s, 0,1,0, -s,0,c]));
    });
  }
  
  function update() {
  }
  
  
  dropdown.addEventListener("change", (e) => {
    loadShader(dropdown.value);
  });
  
  loadShader(defaultShader);
  
  
})();


