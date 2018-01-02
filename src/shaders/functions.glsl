
float almostIdentity( float x, float m, float n )
{
    if( x>m ) return x;

    float a = 2.0*n - m;
    float b = 2.0*m - 3.0*n;
    float t = x/m;

    return (a*t + b)*t*t + n;
}


float impulse( float k, float x )
{
    float h = k*x;
    return h*exp(1.0-h);
}

float cubicPulse( float c, float w, float x )
{
    x = abs(x - c);
    if( x>w ) return 0.0;
    x /= w;
    return 1.0 - x*x*(3.0-2.0*x);
}

float expStep( float x, float k, float n )
{
    return exp( -k*pow(x,n) );
}


float gain(float x, float k)
{
    float a = 0.5*pow(2.0*((x<0.5)?x:1.0-x), k);
    return (x<0.5)?a:1.0-a;
}


float parabola( float x, float k )
{
    return pow( 4.0*x*(1.0-x), k );
}

float pcurve( float x, float a, float b )
{
    float k = pow(a+b,a+b) / (pow(a,a)*pow(b,b));
    return k * pow( x, a ) * pow( 1.0-x, b );
}

vec3 rgb2hsb( in vec3 c ){
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz),
                 vec4(c.gb, K.xy),
                 step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r),
                 vec4(c.r, p.yzx),
                 step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),
                d / (q.x + e),
                q.x);
}

//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb( in vec3 c ){
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                             6.0)-3.0)-1.0,
                     0.0,
                     1.0 );
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix(vec3(1.0), rgb, c.y);
}

float rectangle(vec2 st,vec2 bl, vec2 tr) {
    vec2 blv = step(bl, st);
    vec2 trv = step(vec2(1.0)-tr, 1.0-st);
    return blv.x*blv.y * trv.x*trv.y;
}

float smoothRectangle(vec2 st,vec2 bl, vec2 tr, float w) {
    vec2 blv = smoothstep(bl, bl+vec2(w), st);
    vec2 trv = smoothstep(vec2(1.0)-tr, vec2(1.0)-tr+vec2(w), 1.0-st);
    return blv.x*blv.y * trv.x*trv.y;
}

float smoothCircle(vec2 st, vec2 c, float r, float w) {
    float d = length(st - c);
    return smoothstep(r+w,r-w,d);
}

float polygon(vec2 st, vec2 c, float r, int N) {
   	float a = atan(st.y,st.x);
   	float s = PI*2.0/float(N);
   	float d =  cos(floor(.5+a/s) * s - a) * distance(st,c) * 2.0;
    return 1.0-smoothstep(r-0.01,r,d);
}

mat2 rotate2d(float a) {
    return mat2(cos(a), -sin(a), sin(a), cos(a));
}

vec2 random2(vec2 st){
    st = vec2( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );
    return fract(sin(st)*43758.5453123);
}

float random2f(vec2 st){
    float v = dot( dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)) );
    return fract(sin(v)*43758.5453123);
}

vec2 random2a(vec2 st){
    st = vec2( dot(st,vec2(127.1,311.7)),
              dot(st,vec2(269.5,183.3)) );
    return -1.0 + 2.0*fract(sin(st)*43758.5453123);
}

vec3 random3a(vec3 st){
    st = vec3( dot(st,vec3(127.1,311.7,123.6)),
               dot(st,vec3(269.5,183.3,97.1)),
                dot(st,vec3(146.87,245.12,48.7))
                );
    return -1.0 + 2.0*fract(sin(st)*43758.5453123);
}

float noise(in vec2 p) {

    vec2 i = floor(p);
    vec2 f = fract(p);

    vec2 u = f*f*(3.0-2.0*f);

    return mix( mix( dot( random2a(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                     dot( random2a(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                mix( dot( random2a(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                     dot( random2a(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);


}

float noise(in vec3 p) {

    vec3 i = floor(p);
    vec3 f = fract(p);

    vec3 u = f*f*(3.0-2.0*f);

        return mix(
                mix(
                    mix(
                        dot( random3a(i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ),
                        dot( random3a(i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ),
                        u.x),
                    mix(
                        dot( random3a(i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ),
                        dot( random3a(i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ),
                        u.x),
                    u.y),
                mix(
                    mix(
                        dot( random3a(i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ),
                        dot( random3a(i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ),
                        u.x),
                    mix(
                        dot( random3a(i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ),
                        dot( random3a(i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ),
                        u.x),
                    u.y),
                u.z
               );
}

float usnoise(vec3 p) {
    return (noise(p) + 1.0) /2.0;
}

float cellNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    float m_dist = 1.0;

    for(int y=-1; y<=1; y++) {
        for(int x=-1; x<=1; x++) {
            vec2 neighbour=vec2(float(x), float(y));
            vec2 point = random2(i + neighbour);

            vec2 diff= neighbour + point - f;
            float dist = length(diff);
            m_dist = min(m_dist,dist);
        }
    }

    return m_dist;
}


vec3 veroniNoise(vec2 st) {
    vec2 p = floor(st);
    vec2 f = fract(st);

    float res = 2.0;
    vec2 m_point=vec2(1.0, 1.0),
        mr=vec2(0,0),
        mb = vec2(0,0);

    for(int j=-1; j<=1; j++) {
        for(int i=-1; i<=1; i++) {
            vec2 b=vec2(float(i), float(j));
            vec2 point = p + b;
            vec2 r = b + random2(point) - f;

            float d = dot(r,r);
            if (d < res) {
                res = d;
                m_point = point;
                mr=r;
                mb=b;
            }
        }
    }

    res = 8.0;
    for(int j=-2; j<=2; ++j) {
        for(int i=-2; i<=2; ++i) {

            vec2 b = mb + vec2(float(i),float(j));

            vec2 r = b + random2(p + b) - f;

            float d = dot(0.5 * (mr+r), normalize(r - mr));

            res = min(res, d);

        }
    }

    return vec3(m_point.xy, res);
}

const int octaves = 4;

float fbm(vec2 p, float H, float lacunarity) {
    float value, frequency;
    float exponent;

    value = 0.0;
    frequency = 1.0;

    for(int i=0; i<octaves; ++i) {

        exponent = pow(frequency, -H);

        value=value + (noise(p) * exponent);

        p=p*lacunarity;

        frequency=frequency * lacunarity;
    }

    return value;
}

float fbm(vec3 p, float H, float lacunarity) {
    float value, frequency;
    float exponent;

    value = 0.0;
    frequency = 1.0;

    for(int i=0; i<octaves; ++i) {

        exponent = pow(frequency, -H);

        value=value + (noise(p) * exponent);

        p=p*lacunarity;

        frequency=frequency * lacunarity;
    }

    return value;
}

float ridgedMultifractal(vec3 p, float H, float lacunarity, float offset) {
    float result, frequency, remainder;
    float weight, signal, exponent;

    float gain = 2.0;

    result = 1.0;
    frequency = 1.0;

    signal = noise(p);
    if (signal < 0.0) signal = -signal;
    signal = offset-signal;
    signal *=signal;
    result = signal;
    weight = 1.0;


    for(int i=1; i<octaves; ++i) {
        frequency=frequency*lacunarity;
        p=p*lacunarity;

        weight = signal * gain;
        if (weight>1.0) weight=1.0;
        if (weight < 0.0 ) weight= 0.0;

        signal = noise(p);

        if (signal <0.0) signal = -signal;
        signal = offset - signal;
        signal *=signal;
        signal *=weight;
        result += signal * pow(frequency,-H);

    }

    return result;
}

bool sphere(vec2 p, out vec3 hit) {

    float dist = 1.0 - p.x*p.x - p.y*p.y;

    if (dist < 0.0) return false;

    float z=sqrt( dist);

    hit = vec3(p, z);

    return true;

}

bool cylinder(vec2 p, out vec3 hit) {
    float dist = 1.0 - p.x*p.x;

    if (dist < 0.0) return false;

    float z=sqrt( dist);

    hit = vec3(p, z);

    return true;
}