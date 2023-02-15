import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Scrom = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 126 168' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M0 12C0 5.37259 5.37258 0 12 0H97L126 28.5V156C126 162.627 120.627 168 114 168H12C5.37258 168 0 162.627 0 156V12Z'
      fill='#E3F1FD'
    />
    <path
      d='M0 133.5V155.5C0 162.127 5.37258 167.5 12 167.5H114C120.627 167.5 126 162.127 126 155.5V133.5H0Z'
      fill='#C8E2FB'
    />
    <path
      d='M114 167H12C5.92487 167 1 162.075 1 156V12C1 5.92487 5.92487 1 12 1H96.5909L125 28.9193V156C125 162.075 120.075 167 114 167Z'
      stroke='#469FF1'
      strokeWidth={2}
    />
    <path
      d='M98 2.38483L124.065 28H109C102.925 28 98 23.0751 98 17V2.38483Z'
      fill='#C8E2FB'
      stroke='#469FF1'
      strokeWidth={2}
    />
    <path
      d='M29.4555 58.6446C29.3995 57.9566 29.4025 57.2724 29.4565 56.5777L27.2653 52.9138C27.0683 52.5726 27.0216 52.1634 27.1604 51.78C27.8424 49.9075 28.8324 48.1416 30.1512 46.584C30.4125 46.2815 30.7844 46.1047 31.1755 46.1253L35.4461 46.2C36.0187 45.8126 36.6158 45.4678 37.2376 45.1657L39.3083 41.4298C39.5084 41.0868 39.8392 40.839 40.2319 40.7639C42.1894 40.411 44.2115 40.4 46.2189 40.7576C46.598 40.8231 46.9514 41.0741 47.1342 41.4235L49.2116 45.1531C49.8402 45.4537 50.4343 45.7932 51.0021 46.1857L55.264 46.1138C55.6611 46.112 56.0385 46.2733 56.2924 46.5817C57.5679 48.1012 58.6 49.8561 59.2805 51.7571C59.4206 52.1312 59.3715 52.5387 59.1714 52.8817L56.9782 56.5366C57.0342 57.2247 57.0312 57.9089 56.9772 58.6036L59.1684 62.2675C59.3654 62.6087 59.4121 63.0178 59.2733 63.4013C58.5913 65.2737 57.6013 67.0396 56.2825 68.5972C56.0212 68.8998 55.6493 69.0766 55.2582 69.0559L50.9876 68.9813C50.415 69.3687 49.8179 69.7135 49.1961 70.0156L47.1254 73.7514C46.9253 74.0944 46.5945 74.3423 46.2018 74.4174C44.2443 74.7702 42.2222 74.7813 40.2148 74.4236C39.8357 74.3581 39.4823 74.1072 39.2995 73.7577L37.2221 70.0282C36.5935 69.7275 35.9994 69.3881 35.4316 68.9955L31.1697 69.0675C30.7726 69.0692 30.3952 68.908 30.1413 68.5996C28.8658 67.08 27.8337 65.3252 27.1532 63.4242C27.0131 63.0501 27.0622 62.6426 27.2623 62.2996L29.4555 58.6446Z'
      stroke='#FF6476'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M47.147 64.4307C50.9162 62.2545 52.2076 57.4349 50.0315 53.6656C47.8553 49.8964 43.0356 48.605 39.2664 50.7812C35.4972 52.9573 34.2058 57.777 36.3819 61.5462C38.5581 65.3154 43.3778 66.6068 47.147 64.4307Z'
      stroke='#FF6476'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M52.9506 92.1564C52.8733 91.2075 52.8775 90.264 52.9519 89.306L49.9303 84.2535C49.6586 83.7829 49.5943 83.2188 49.7857 82.69C50.7262 80.1079 52.0913 77.6727 53.9099 75.5247C54.2703 75.1075 54.7831 74.8637 55.3224 74.8922L61.2117 74.9952C62.0012 74.4609 62.8247 73.9855 63.6822 73.5689L66.5376 68.4171C66.8135 67.9441 67.2698 67.6023 67.8113 67.4988C70.5106 67.0122 73.2991 66.997 76.0674 67.4901C76.5901 67.5805 77.0774 67.9265 77.3295 68.4084L80.1943 73.5515C81.0611 73.9661 81.8804 74.4342 82.6634 74.9755L88.5406 74.8763C89.0882 74.8739 89.6087 75.0962 89.9588 75.5215C91.7176 77.617 93.1409 80.037 94.0793 82.6584C94.2725 83.1743 94.2048 83.7362 93.9289 84.2092L90.9045 89.2494C90.9817 90.1982 90.9775 91.1418 90.9031 92.0997L93.9248 97.1522C94.1965 97.6228 94.2608 98.187 94.0694 98.7158C93.1289 101.298 91.7637 103.733 89.9451 105.881C89.5847 106.298 89.0719 106.542 88.5326 106.514L82.6433 106.411C81.8538 106.945 81.0303 107.42 80.1729 107.837L77.3174 112.989C77.0415 113.462 76.5853 113.803 76.0438 113.907C73.3444 114.394 70.556 114.409 67.7877 113.916C67.265 113.825 66.7776 113.479 66.5255 112.997L63.6607 107.854C62.794 107.44 61.9747 106.972 61.1916 106.43L55.3145 106.529C54.7669 106.532 54.2464 106.31 53.8963 105.884C52.1374 103.789 50.7141 101.369 49.7758 98.7473C49.5825 98.2315 49.6502 97.6695 49.9261 97.1965L52.9506 92.1564Z'
      stroke='#6060FF'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M77.347 100.136C82.5448 97.1347 84.3257 90.4884 81.3247 85.2906C78.3238 80.0929 71.6775 78.312 66.4797 81.3129C61.282 84.3139 59.5011 90.9602 62.502 96.1579C65.5029 101.356 72.1493 103.137 77.347 100.136Z'
      stroke='#6060FF'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <line x1={2} y1={134.21} x2={124} y2={134.21} stroke='#469FF1' strokeWidth={2} />
  </svg>
);

const ForwardRef = forwardRef(Scrom);
export default ForwardRef;