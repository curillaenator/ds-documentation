import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const RosUchebnikRu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 126 168' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <rect width={126} height={168} rx={12} fill='#E3F1FD' />
    <path d='M0 12C0 5.37259 5.37258 0 12 0H21V168H12C5.37259 168 0 162.627 0 156V12Z' fill='#E7E7FF' />
    <line x1={22} y1={-4.37114e-8} x2={22} y2={168} stroke='#6060FF' strokeWidth={2} />
    <rect x={1} y={1} width={124} height={166} rx={11} stroke='#6060FF' strokeWidth={2} />
    <line x1={47} y1={126} x2={97} y2={126} stroke='#6060FF' strokeWidth={2} strokeLinecap='round' />
    <line x1={47} y1={142} x2={97} y2={142} stroke='#6060FF' strokeWidth={2} strokeLinecap='round' />
    <path
      d='M45 103.132V104.132H46H61.616H62.616V103.132V78.3414C63.1035 78.3731 63.7402 78.4114 64.4932 78.4497C66.3043 78.5418 68.7925 78.634 71.498 78.634C83.3916 78.634 92.1391 76.049 97.9082 70.6475C103.692 65.2327 106.292 57.1675 106.292 46.646C106.292 36.2163 104.011 28.4596 98.3525 23.3491C92.7211 18.2632 83.9609 16 71.498 16C65.4874 16 59.0874 16.3371 54.1969 16.6734C51.7501 16.8416 49.6778 17.0098 48.2167 17.136C47.4861 17.1991 46.9081 17.2518 46.5124 17.2887C46.3146 17.3071 46.1622 17.3216 46.0592 17.3315L45.942 17.3429L45.9119 17.3458L45.9042 17.3466L45.9022 17.3468L45.9016 17.3468C45.9015 17.3469 45.9014 17.3469 46 18.342L45.9014 17.3469L45 17.4362V18.342V103.132ZM88.188 46.646C88.188 52.5403 87.0668 56.3037 84.5971 58.6377C82.1109 60.9873 78.0222 62.116 71.498 62.116C68.8355 62.116 66.3827 62.0252 64.5948 61.9343C63.7829 61.893 63.1091 61.8518 62.616 61.8191V32.9149C63.1095 32.8711 63.7896 32.8154 64.6116 32.7597C66.3957 32.6388 68.8427 32.518 71.498 32.518C78.1574 32.518 82.2571 33.5899 84.7135 35.7597C87.1322 37.8962 88.188 41.3106 88.188 46.646Z'
      fill='#E7E7FF'
      stroke='#6060FF'
      strokeWidth={2}
    />
  </svg>
);

const ForwardRef = forwardRef(RosUchebnikRu);
export default ForwardRef;