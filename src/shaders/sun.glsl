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

    float v;

    vec3 n = normalize(p);

    vec2 uv = vec2( 0.5+ (atan( n.x, n.z) / PI), 0.5- asin(n.y) / PI) ;

    vec3 pp = vec3(uv*10.0, u_time / 5.0);

    v= fbm(pp, 0.8, 2.5);//, 0.7);

    vec3 color;

    color =
        mix(vec3(1,0.75,0), vec3(1,1,0) ,v)
        ;


    return color;

}

void main() {

    vec3 p;

    if ( mapping(p)) {
        gl_FragColor=vec4(test(p), 0);
    }

}