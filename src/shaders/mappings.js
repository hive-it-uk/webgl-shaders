

export default {
  flat: `
    bool mapping(out vec3 st) {
      vec2 p = gl_FragCoord.xy/u_resolution;
      st = vec3(vec2(0.5) - p,0);
      return true;
    }
  `,
  
  sphere: `
    bool mapping(out vec3 p) {
        vec3 hit;
        vec2 p2 = (gl_FragCoord.xy/u_resolution);
        p2=vec2(0.5) - p2;
        
        return sphere(p2 * 2.0, p);
    }
  `,
  
  cylinder: `
    bool mapping(out vec3 p) {
        vec3 hit;
        vec2 p2 = (gl_FragCoord.xy/u_resolution);
        p2=vec2(0.5) - p2;
        
        return cylinder(p2 * 2.0, p);
    }
  `
}