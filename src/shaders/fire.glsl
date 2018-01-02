#ifdef GL_ES
precision mediump float;
#endif

@import ./consts;
@import ./functions;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


vec3 fire(vec2 p) {

    float v;

    float vscale = p.y+1.0;
    vscale=vscale*vscale;

    vec3 pp = vec3(p*5.0, u_time/0.75);
    pp.y = pp.y + u_time * 2.0;

    v= ridgedMultifractal(pp, 0.25, 2.1, 0.7)
        * vscale
        + (p.y / 1.0);

    vec3 color;

    color =
        (smoothstep(0.0, 0.3, v) * vec3(1,0,0))
        + (smoothstep(0.3, 0.6, v) * vec3(1,0,0))
        + (smoothstep(0.6, 1.0, v) * vec3(0,1,0))
        ;


    return color;

}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;

	st=vec2(0.5) - st;

    gl_FragColor=vec4(fire(st), 0);

}