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
    
    let shaderCode = shaders[shader];

    shaderCode = shaderCode.replace("//inject", mapping);
    
    sandbox.load(shaderCode);
  }
  
  
  dropdown.addEventListener("change", (e) => {
    loadShader(dropdown.value);
  });
  
  loadShader(defaultShader);
  
  
  
  
  
  
})();


