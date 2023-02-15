import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LeftRightSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.5798 16.9756C21.588 16.9657 21.5951 16.9552 21.6027 16.9449C21.6096 16.9356 21.6169 16.9265 21.6234 16.9168C21.6313 16.9051 21.6381 16.893 21.6452 16.881C21.6505 16.872 21.6562 16.8632 21.6612 16.8539C21.6676 16.8419 21.6731 16.8295 21.6789 16.8173C21.6835 16.8073 21.6885 16.7975 21.6927 16.7873C21.6976 16.7755 21.7016 16.7634 21.7059 16.7514C21.7099 16.7403 21.7141 16.7294 21.7175 16.718C21.7212 16.7059 21.7239 16.6937 21.727 16.6814C21.7299 16.6699 21.7331 16.6585 21.7354 16.6468C21.7382 16.6326 21.74 16.6182 21.742 16.6039C21.7434 16.594 21.7452 16.5843 21.7463 16.5742C21.7512 16.5248 21.7512 16.4751 21.7463 16.4257C21.7452 16.4157 21.7434 16.406 21.742 16.3961C21.74 16.3817 21.7382 16.3674 21.7354 16.3531C21.7331 16.3414 21.7299 16.3301 21.727 16.3185C21.7239 16.3063 21.7212 16.294 21.7175 16.2819C21.7141 16.2706 21.7099 16.2597 21.7059 16.2486C21.7016 16.2366 21.6976 16.2245 21.6927 16.2126C21.6885 16.2024 21.6835 16.1926 21.6789 16.1827C21.6731 16.1704 21.6676 16.1581 21.6612 16.1461C21.6562 16.1368 21.6505 16.128 21.6452 16.1189C21.6381 16.1069 21.6313 16.0949 21.6234 16.0832C21.6169 16.0735 21.6096 16.0644 21.6027 16.055C21.5951 16.0447 21.588 16.0342 21.5798 16.0243C21.5673 16.0091 21.5539 15.9947 21.5403 15.9806C21.5368 15.977 21.5339 15.9731 21.5304 15.9696L18.5304 12.9696C18.3897 12.8289 18.1989 12.7499 18 12.7499C17.8011 12.7499 17.6103 12.8289 17.4696 12.9696C17.329 13.1103 17.25 13.301 17.25 13.5C17.25 13.6989 17.329 13.8897 17.4696 14.0303L19.1894 15.75H3C2.80109 15.75 2.61032 15.829 2.46967 15.9697C2.32902 16.1103 2.25 16.3011 2.25 16.5C2.25 16.6989 2.32902 16.8897 2.46967 17.0303C2.61032 17.171 2.80109 17.25 3 17.25H19.1894L17.4696 18.9696C17.329 19.1103 17.25 19.3011 17.25 19.5C17.25 19.6989 17.329 19.8897 17.4696 20.0303C17.6103 20.171 17.8011 20.25 18 20.25C18.1989 20.25 18.3897 20.171 18.5304 20.0303L21.5304 17.0303C21.5341 17.0265 21.5373 17.0224 21.541 17.0186C21.5544 17.0047 21.5675 16.9906 21.5798 16.9756Z'
      fill='currentColor'
    />
    <path
      d='M2.39732 7.0551C2.39041 7.06444 2.38313 7.07355 2.37663 7.08326C2.36881 7.09493 2.36199 7.10701 2.35489 7.11901C2.34953 7.12807 2.34386 7.13686 2.33887 7.14615C2.33241 7.15815 2.32696 7.17051 2.3212 7.18277C2.31653 7.19271 2.31159 7.2025 2.30732 7.21271C2.30243 7.22457 2.29844 7.23665 2.29419 7.24865C2.2902 7.25977 2.28595 7.27066 2.28251 7.28202C2.27885 7.29411 2.27615 7.30637 2.27308 7.3186C2.2702 7.33013 2.26695 7.34148 2.26461 7.3532C2.26182 7.36744 2.26008 7.38181 2.25807 7.39614C2.2567 7.40603 2.25482 7.41578 2.25381 7.4258C2.24891 7.47518 2.24891 7.52492 2.25381 7.5743C2.25482 7.58433 2.2567 7.59408 2.25807 7.60397C2.26008 7.61829 2.26182 7.63267 2.26461 7.6469C2.26695 7.65862 2.2702 7.66998 2.27308 7.68151C2.27615 7.69373 2.27885 7.706 2.28251 7.71809C2.28595 7.72944 2.2902 7.74033 2.29419 7.75146C2.29844 7.76345 2.30243 7.77554 2.30732 7.7874C2.31158 7.7976 2.31652 7.8074 2.3212 7.81733C2.32697 7.8296 2.33241 7.84196 2.33887 7.85395C2.34386 7.86325 2.34953 7.87204 2.35489 7.8811C2.36199 7.89309 2.36881 7.90518 2.37663 7.91685C2.38313 7.92656 2.39042 7.93566 2.39732 7.945C2.40492 7.9553 2.41211 7.96579 2.4203 7.97572C2.43253 7.99064 2.44571 8.00474 2.45908 8.01866C2.46274 8.0225 2.46594 8.02663 2.4697 8.03042L5.4697 11.0304C5.61036 11.1711 5.80114 11.2501 6.00006 11.2501C6.19899 11.2501 6.38977 11.1711 6.53043 11.0304C6.67109 10.8898 6.75011 10.699 6.75011 10.5001C6.75011 10.3011 6.67109 10.1104 6.53043 9.96969L4.8107 8.25005H21.0001C21.199 8.25005 21.3897 8.17103 21.5304 8.03038C21.671 7.88973 21.7501 7.69896 21.7501 7.50005C21.7501 7.30114 21.671 7.11037 21.5304 6.96972C21.3897 6.82907 21.199 6.75005 21.0001 6.75005H4.8107L6.53043 5.03042C6.67109 4.88975 6.75011 4.69898 6.75011 4.50005C6.75011 4.30112 6.67109 4.11035 6.53043 3.96968C6.38977 3.82902 6.19899 3.75 6.00006 3.75C5.80114 3.75 5.61036 3.82902 5.4697 3.96968L2.4697 6.96968C2.46617 6.97321 2.46324 6.9771 2.45981 6.98067C2.44617 6.99482 2.43276 7.00919 2.4203 7.02439C2.41211 7.03432 2.40492 7.0448 2.39732 7.0551Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(LeftRightSolid);
export default ForwardRef;