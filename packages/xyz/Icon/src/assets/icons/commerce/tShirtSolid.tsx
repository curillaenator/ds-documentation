import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TShirtSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M23.0061 5.74681L18.3722 3.09883C18.3703 3.09778 18.3684 3.09705 18.3666 3.09599C18.3518 3.08766 18.3364 3.0802 18.3209 3.07287C18.3137 3.06942 18.3065 3.0656 18.2992 3.06239C18.2852 3.0563 18.2708 3.05113 18.2564 3.04589C18.2471 3.04248 18.2379 3.0387 18.2285 3.03568C18.2173 3.03211 18.2058 3.02939 18.1943 3.02632C18.1813 3.02282 18.1684 3.01907 18.1553 3.0163C18.1472 3.0146 18.1389 3.01355 18.1308 3.01211C18.1141 3.00916 18.0974 3.00627 18.0807 3.00446C18.0741 3.00375 18.0673 3.00359 18.0607 3.00307C18.0423 3.00158 18.0239 3.00039 18.0055 3.00027C18.0037 3.00027 18.0019 3 18.0001 3H15.0001C14.9016 3 14.8041 3.01939 14.7131 3.05708C14.6221 3.09477 14.5394 3.15002 14.4697 3.21966C14.4001 3.28931 14.3449 3.37199 14.3072 3.46298C14.2695 3.55398 14.2501 3.65151 14.2501 3.75C14.2501 4.34674 14.013 4.91903 13.5911 5.34099C13.1691 5.76295 12.5968 6 12.0001 6C11.4034 6 10.8311 5.76295 10.4091 5.34099C9.98715 4.91903 9.7501 4.34674 9.7501 3.75C9.7501 3.65151 9.7307 3.55398 9.69301 3.46298C9.65532 3.37199 9.60008 3.28931 9.53043 3.21966C9.46079 3.15002 9.37811 3.09477 9.28711 3.05708C9.19612 3.01939 9.09859 3 9.0001 3H6.00011C5.9977 3 5.99537 3.00034 5.99296 3.00037C5.9772 3.0005 5.96145 3.0016 5.94568 3.00275C5.93648 3.00341 5.92719 3.00371 5.91808 3.00469C5.90389 3.00625 5.88977 3.00879 5.87561 3.01117C5.86496 3.01295 5.8542 3.01435 5.84369 3.01659C5.83272 3.01893 5.82186 3.02216 5.81094 3.02502C5.79751 3.02852 5.784 3.03177 5.77086 3.03598C5.76285 3.03857 5.75499 3.04184 5.74704 3.04472C5.73136 3.05033 5.71573 3.05598 5.70056 3.0626C5.69377 3.06557 5.68712 3.06915 5.68037 3.07233C5.66451 3.07983 5.64878 3.08748 5.63356 3.09602C5.63173 3.09705 5.62983 3.09778 5.628 3.09883L0.993981 5.74681C0.661223 5.93718 0.413933 6.24767 0.302849 6.61459C0.191765 6.98151 0.22531 7.37703 0.396602 7.72L2.122 11.1708C2.24581 11.4205 2.43713 11.6306 2.67427 11.7772C2.91141 11.9238 3.18488 12.0009 3.46365 12H5.25011V19.5C5.25057 19.8977 5.40875 20.2789 5.68995 20.5602C5.97116 20.8414 6.35242 20.9995 6.75011 21H17.2501C17.6478 20.9995 18.029 20.8414 18.3102 20.5602C18.5914 20.2789 18.7496 19.8977 18.7501 19.5V12H20.5365C20.8153 12.0009 21.0887 11.9238 21.3259 11.7772C21.563 11.6306 21.7543 11.4206 21.8781 11.1708L23.6036 7.71995C23.7749 7.37698 23.8084 6.98146 23.6973 6.61455C23.5862 6.24764 23.3389 5.93716 23.0061 5.74681ZM3.46365 10.5L1.73825 7.04915L5.25011 5.04238V10.5H3.46365ZM20.5365 10.5H18.7501V5.04238L22.262 7.04919L20.5365 10.5Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(TShirtSolid);
export default ForwardRef;