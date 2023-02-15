import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Club = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 168 126' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <g clipPath='url(#club__clip0)'>
      <path
        d='M13 125C6.37259 125 1.00001 119.627 1.00001 113L1 13C1 6.3726 6.37258 1.00001 13 1.00001L155 1C161.627 1 167 6.37259 167 13V113C167 119.627 161.627 125 155 125H13Z'
        fill='#E3F1FD'
        stroke='#469FF1'
        strokeWidth={2}
      />
      <path
        d='M84 33C89.5228 33 94 28.5228 94 23C94 17.4772 89.5228 13 84 13C78.4772 13 74 17.4772 74 23C74 28.5228 78.4772 33 84 33Z'
        fill='#FFD1D6'
        stroke='#FF6476'
        strokeWidth={2}
      />
      <path
        d='M92 33H76C71.5817 33 68 36.5817 68 41V60C68 64.4183 71.5817 68 76 68H92C96.4183 68 100 64.4183 100 60V41C100 36.5817 96.4183 33 92 33Z'
        fill='#FFD1D6'
        stroke='#FF6476'
        strokeWidth={2}
      />
      <path
        d='M83.9997 55C48.7815 55 18.8158 63.2432 1 77V113C1 119.627 6.37259 125 13 125H155C161.627 125 167 119.627 167 113V77C149.184 63.2432 119.218 55 83.9997 55Z'
        fill='#FDF0E4'
        stroke='#F2994A'
        strokeWidth={2}
      />
      <path
        d='M46 102C51.5228 102 56 97.5228 56 92C56 86.4772 51.5228 82 46 82C40.4772 82 36 86.4772 36 92C36 97.5228 40.4772 102 46 102Z'
        fill='#E7E7FF'
        stroke='#6060FF'
        strokeWidth={2}
      />
      <path
        d='M84 102C89.5228 102 94 97.5228 94 92C94 86.4772 89.5228 82 84 82C78.4772 82 74 86.4772 74 92C74 97.5228 78.4772 102 84 102Z'
        fill='#E7E7FF'
        stroke='#6060FF'
        strokeWidth={2}
      />
      <path
        d='M122 102C127.523 102 132 97.5228 132 92C132 86.4772 127.523 82 122 82C116.477 82 112 86.4772 112 92C112 97.5228 116.477 102 122 102Z'
        fill='#E7E7FF'
        stroke='#6060FF'
        strokeWidth={2}
      />
      <path
        d='M31 110C31 105.582 34.5817 102 39 102H53C57.4183 102 61 105.582 61 110V126H31V110Z'
        fill='#E7E7FF'
        stroke='#6060FF'
        strokeWidth={2}
      />
      <path
        d='M69 110C69 105.582 72.5817 102 77 102H91C95.4183 102 99 105.582 99 110V126H69V110Z'
        fill='#E7E7FF'
        stroke='#6060FF'
        strokeWidth={2}
      />
      <path
        d='M107 110C107 105.582 110.582 102 115 102H129C133.418 102 137 105.582 137 110V126H107V110Z'
        fill='#E7E7FF'
        stroke='#6060FF'
        strokeWidth={2}
      />
      <path
        d='M13 125C6.37259 125 1.00001 119.627 1.00001 113L1 13C1 6.3726 6.37258 1.00001 13 1.00001L155 1C161.627 1 167 6.37259 167 13V113C167 119.627 161.627 125 155 125H13Z'
        stroke='#469FF1'
        strokeWidth={2}
      />
    </g>
    <defs>
      <clipPath id='club__clip0'>
        <rect width={168} height={126} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Club);
export default ForwardRef;
