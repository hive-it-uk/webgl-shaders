#ifdef GL_ES
precision mediump float;
#endif

@import ./consts;
@import ./functions;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


//inject

vec3 fire(vec3 p) {

    float v;

    float y=p.y / 2.0;

    float vscale = y + 1.1;
    vscale=(vscale*vscale);

    vec3 pp = vec3(p*5.0) + vec3(0,u_time * 2.0,u_time );//, u_time/0.75);

    v= ridgedMultifractal(pp, 0.25, 2.1, 0.7)
        * vscale
        + (vscale / 2.5);

    vec3 color;

    color =
        (smoothstep(0.0, 0.5, v) * smoothstep(0.5,0.0,v) * vec3(.25,.25,.25))
        //(smoothstep(0.3, 0.9, v) * vec3(1,0,0))
        + (smoothstep(0.5, 0.7, v) * vec3(1,0,0))
        + (smoothstep(0.9, 1.0, v) * vec3(0,1,0))
        ;


    return color;

}

void main() {
    vec3 p;
    if (mapping(p) ) {
        gl_FragColor=vec4(fire(p), 0);
    }

}