#ifdef GL_ES
precision mediump float;
#endif

@import ./consts;
@import ./functions;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


//inject


vec3 fbmTest(vec3 p) {

    float v = fbm(vec3(p.x, p.y, p.z + u_time / 2.0), 1.0, 2.0);

    v=(v+1.0) / 2.0;
    vec3 color = vec3(v,v,v);

    return color;

}

void main() {

    vec3 p;
    if (mapping(p)) {
        gl_FragColor=vec4(fbmTest(p), 0);
    }

}