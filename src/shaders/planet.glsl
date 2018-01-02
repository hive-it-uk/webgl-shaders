#ifdef GL_ES
precision mediump float;
#endif

@import ./consts;
@import ./functions;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
// u_time
uniform mat3 rotation;

//inject

vec3 scale(float a, float b, vec3 ca, vec3 cb, float v) {

    return (((cb-ca) * smoothstep(a,b,v)   ) + ca) * step(a,v) * step(v,b);

    //return vec3( step(a,v) * step(v,b) );

}

vec3 surface(vec3 p) {



    float v = ridgedMultifractal(p , 0.2, 2.1, 0.7);

    //v=clamp(v,0.0,1.0);

    float y = 1.0-abs(p.y - 0.5)  ;
    float desert_y=pow(y,4.0);

//return vec3(y);

    vec3 c =
          scale(0.0 , 0.5,   vec3(0,         0,1), vec3(0.25,0.25,1) , v)
        + scale(0.5 , 0.6,   vec3(0.25, 0.25,1.0), vec3(0.0,0.8,0.0), v)
        + scale(0.6 , 0.9, vec3(0.0, 0.8,0.0)  , vec3(desert_y,0.8,0.0), v)
        + scale(0.9, 2.0,  vec3(desert_y, 0.8,0.0)  , vec3(1,1,1), v)
    ;


    return c;

}

vec3 clouds(vec3 p) {

    float v =
        clamp(fbm(p* vec3(8, 16, 8) / 4.0, 1.2, 2.5) * 4.0, 0.0, 1.0)
        + clamp(fbm(p* vec3(2, 16, 2) , 1.2, 2.5), 0.0, 1.0)
        ;



    return vec3(v);
}

vec3 test(vec3 p) {

   return clouds(rotation * p + vec3(0,0,u_time / 10.0)) + surface(p);

}

void main() {

    vec3 p;

    if ( mapping(p)) {


        gl_FragColor=vec4(test(p), 0);
    }

}