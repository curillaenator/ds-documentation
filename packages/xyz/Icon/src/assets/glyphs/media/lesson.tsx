import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Lesson = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 168 126' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <g clipPath='url(#lesson__clip0)'>
      <path
        d='M13 125C6.37259 125 1.00001 119.627 1.00001 113L1 13C1 6.3726 6.37258 1.00001 13 1.00001L155 1C161.627 1 167 6.37259 167 13V113C167 119.627 161.627 125 155 125H13Z'
        fill='#FDF0E4'
        stroke='#F2994A'
        strokeWidth={2}
      />
      <path
        d='M149 22H19C17.8954 22 17 22.8954 17 24V78C17 79.1046 17.8954 80 19 80H149C150.105 80 151 79.1046 151 78V24C151 22.8954 150.105 22 149 22Z'
        fill='#E3F1FD'
        stroke='#469FF1'
        strokeWidth={2}
      />
      <path
        d='M47 64C51.9706 64 56 59.9706 56 55C56 50.0294 51.9706 46 47 46C42.0294 46 38 50.0294 38 55C38 59.9706 42.0294 64 47 64Z'
        fill='#E7E7FF'
        stroke='#6060FF'
        strokeWidth={2}
      />
      <path
        d='M55 65H39C34.5817 65 31 68.5817 31 73V92C31 96.4183 34.5817 100 39 100H55C59.4183 100 63 96.4183 63 92V73C63 68.5817 59.4183 65 55 65Z'
        fill='#E7E7FF'
        stroke='#6060FF'
        strokeWidth={2}
      />
      <path
        d='M69 87H25C23.8954 87 23 87.8954 23 89V124C23 125.105 23.8954 126 25 126H69C70.1046 126 71 125.105 71 124V89C71 87.8954 70.1046 87 69 87Z'
        fill='#FBE0C9'
        stroke='#F2994A'
        strokeWidth={2}
      />
      <path
        d='M125.429 56.2856C125.429 59.5913 124.448 62.8229 122.612 65.5715C120.775 68.3202 118.165 70.4625 115.111 71.7276C112.056 72.9926 108.696 73.3236 105.453 72.6787C102.211 72.0338 99.233 70.4419 96.8955 68.1044C94.558 65.7668 92.9661 62.7886 92.3212 59.5464C91.6762 56.3041 92.0072 52.9434 93.2723 49.8893C94.5374 46.8352 96.6797 44.2247 99.4283 42.3882C102.177 40.5516 105.409 39.5713 108.714 39.5713V56.2856H125.429Z'
        fill='#FFD1D6'
        stroke='#FF6476'
        strokeWidth={2}
        strokeLinejoin='round'
      />
      <path
        d='M111.287 37C113.482 37 115.655 37.4324 117.683 38.2723C119.711 39.1123 121.553 40.3435 123.105 41.8955C124.657 43.4476 125.889 45.2902 126.729 47.318C127.569 49.3459 128.001 51.5194 128.001 53.7143H111.287V37Z'
        fill='#FFE8EA'
        stroke='#FF6476'
        strokeWidth={2}
        strokeLinejoin='round'
      />
      <path d='M66 46H91L100.5 54.5' stroke='#469FF1' strokeWidth={2} strokeLinecap='round' />
      <path d='M143.5 39H127.5L118 47.5' stroke='#469FF1' strokeWidth={2} strokeLinecap='round' />
      <path d='M69 39H87' stroke='#469FF1' strokeWidth={2} strokeLinecap='round' />
      <path d='M131 32H141' stroke='#469FF1' strokeWidth={2} strokeLinecap='round' />
    </g>
    <defs>
      <clipPath id='lesson__clip0'>
        <rect width={168} height={126} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Lesson);
export default ForwardRef;
