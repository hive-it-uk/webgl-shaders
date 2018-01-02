#ifdef GL_ES
precision mediump float;
#endif

@import ./consts;
@import ./functions;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

//inject

vec3 test(vec3 p) {

    vec3 color = vec3(0,0,0);

    vec3 N = normalize(p);

    float l = dot(N, vec3(cos(u_time), sin(u_time), 1));

    if (l<0.0) l=0.0;

    float c = ridgedMultifractal(p*10.0, 1.1, 1.1, 0.7);

    c=(c+1.0) /2.0;

    c=c*l;

    color=vec3(c);

    return color;

}

void main() {

    vec3 p;

    if ( mapping(p)) {
        gl_FragColor=vec4(test(p), 0);
    }

}