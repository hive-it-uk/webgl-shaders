#ifdef GL_ES
precision mediump float;
#endif

@import ./consts;
@import ./functions;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;



void function1(){
	vec2 st = gl_FragCoord.xy/u_resolution;

	vec2 off=vec2(0.5)-st;
	float angle = atan(off.y,off.x);

	float d2 = off.x*off.x+off.y*off.y;
	float d = length(off) * 2.0;

	float offset = 0.2 + (cos(u_time * 1.0) / 8.0);
    vec3 r =  cubicPulse(offset,0.5,d) * hsb2rgb(vec3((angle/PI2)+0.5, d, 1.0));

    float offset2 = 0.2 + (cos(u_time * 1.1) / 8.0);
    vec3 g =  cubicPulse(offset2,0.5,d) * hsb2rgb(vec3((angle/PI2)+0.15, d, 1.0));

    float offset3 = 0.2 + (cos(u_time * 0.9) / 8.0);
    vec3 b =  cubicPulse(offset3,0.5,d) * hsb2rgb(vec3((angle/PI2)+0.65, d, 1.0));

    vec3 color = r + g+ + b;//vec3(0,0,0);


	gl_FragColor = vec4(color,1.0);
}


vec3 function2(vec2 st) {
	st=vec2(0.5) - st;
	//float rot = u_time / 2.5;
	vec2 st2 = rotate2d(-u_time / 2.5) * st;

   	float a = atan(st2.y,st2.x);
   	float d = length(st);

   	vec3 rgb =  hsb2rgb(vec3((a*3.0/PI2)+0.15, d, 1.0));

   	//float cycles = (sin(d*100.0) + 1.0) /2.0;

   	//float rings = 1.0-smoothstep(0.99,1.0,d);

    float triangle = polygon(st2, vec2(0,0), 0.5, 3);

    vec3 color =
            vec3(1) * triangle * rgb
         ;
        ;;+(vec3(smoothRectangle(st2, vec2(-0.9,-0.5), vec2(-0.6, -0.2), 0.0025) ) )
        ;

    return color;

}

vec3 function3(vec2 st) {

	//vec2 fst = fract(st * 2.0);

	vec3 color=vec3(0);

    int N = 8;
   	float a = atan(st.y,st.x);
   	float s = PI*2.0/float(N);

	float n=noise(vec2(a*10.0,a+10.0) * 10.0) / 10.0;

   	float d =  cos(floor(.5+a/s) * s - a) * distance(st,vec2(0,0))  * 4.0  + n;
    float polygon = 1.0-smoothstep(0.99, 1.0, d);

	color=vec3(1.0,1.0,1.0) * polygon;







	return color;
}


vec3 noiseTest(vec2 st) {

    float distance = length(st);

    //st.x += cos(u_time/1.0) / 10.0;
    //st.y += sin(u_time/1.0) / 10.0;

    st=st*10.0;


//    st = vec2(1.0, 1.0) - length(st) * st;



    vec3 n = veroniNoise(st);

    vec2 p = n.xy;
    float dist = n.z;

    float d = abs(cos(dist * 50.0)) * dist;

    float a = atan(p.y,p.x);


    vec3 color = hsb2rgb(vec3(a / 6.0 , 1.0, 1.0));

    //color=color * (1.0-smoothstep(0.025, 0.075, dist));
    //color=color * ((smoothstep(0.975, 0.95, 1.0-dist)));
    //color=color + (vec3(.7,0.7,.3) * (1.0-smoothstep(0.985, 0.975, 1.0-dist)));



    return color;

}

vec3 fbmTest(vec2 p) {

    float v = fbm(vec3(p, u_time/2.0), 1.0, 2.0);

    v=(v+1.0) / 2.0;
    vec3 color = vec3(v,v,v);

    return color;

}

vec3 ridgedTest(vec2 p) {

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

	//st = rotate2d(-u_time / 2.5) * st;

    gl_FragColor=vec4(fbmTest(st), 0);

}