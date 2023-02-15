import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Playlist = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 168 168' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <rect width={168} height={168} rx={12} fill='#E7E7FF' />
    <path d='M0 12C0 5.37258 5.37258 0 12 0H104V115H0V12Z' fill='#FFE8EA' />
    <line x1={8.74228e-8} y1={114} x2={104} y2={114} stroke='#6060FF' strokeWidth={2} />
    <line x1={103} y1={168} x2={103} y2={2} stroke='#6060FF' strokeWidth={2} />
    <circle cx={52} cy={141} r={17} fill='white' stroke='#6060FF' strokeWidth={2} />
    <path
      d='M59.2143 142.732L49.8929 148.114C48.5595 148.884 46.8929 147.921 46.8929 146.382L46.8929 135.618C46.8929 134.079 48.5595 133.116 49.8929 133.886L59.2143 139.268C60.5476 140.038 60.5476 141.962 59.2143 142.732Z'
      fill='#E7E7FF'
      stroke='#6060FF'
      strokeWidth={2}
      strokeLinejoin='round'
    />
    <line x1={37.0281} y1={44} x2={37.0281} y2={80} stroke='#FF6476' strokeWidth={2} strokeLinecap='round' />
    <line x1={76.0562} y1={39} x2={76.0562} y2={75} stroke='#FF6476' strokeWidth={2} strokeLinecap='round' />
    <path
      d='M35.4454 76.5652C36.6223 77.7421 37.0878 79.5408 36.7415 81.6183C36.3957 83.6936 35.244 85.9591 33.3241 87.8789C31.4042 89.7988 29.1387 90.9505 27.0635 91.2963C24.986 91.6426 23.1872 91.1771 22.0104 90.0002C20.8336 88.8234 20.3681 87.0247 20.7143 84.9471C21.0602 82.8719 22.2119 80.6064 24.1317 78.6865C26.0516 76.7667 28.3171 75.615 30.3923 75.2691C32.4699 74.9229 34.2686 75.3884 35.4454 76.5652Z'
      fill='#FFD1D6'
      stroke='#FF6476'
      strokeWidth={2}
    />
    <path
      d='M74.4735 71.5652C75.6503 72.7421 76.1159 74.5408 75.7696 76.6183C75.4237 78.6936 74.2721 80.9591 72.3522 82.8789C70.4323 84.7988 68.1668 85.9505 66.0916 86.2963C64.0141 86.6426 62.2153 86.1771 61.0385 85.0002C59.8616 83.8234 59.3961 82.0247 59.7424 79.9471C60.0883 77.8719 61.2399 75.6064 63.1598 73.6865C65.0797 71.7667 67.3452 70.615 69.4204 70.2691C71.4979 69.9229 73.2967 70.3884 74.4735 71.5652Z'
      fill='#FFD1D6'
      stroke='#FF6476'
      strokeWidth={2}
    />
    <path
      d='M37.7689 42.5683L74.7689 32.6415C75.4041 32.4711 76.0281 32.9497 76.0281 33.6073V45.2329L37.0281 55.6963V43.5341C37.0281 43.0817 37.3319 42.6856 37.7689 42.5683Z'
      fill='#FFD1D6'
      stroke='#FF6476'
      strokeWidth={2}
    />
    <rect x={115} y={20} width={38} height={22} rx={1} fill='#FFD1D6' stroke='#FF6476' strokeWidth={2} />
    <rect x={115} y={92} width={38} height={22} rx={1} fill='#FFD1D6' stroke='#FF6476' strokeWidth={2} />
    <rect x={115} y={56} width={38} height={22} rx={1} fill='#FFD1D6' stroke='#FF6476' strokeWidth={2} />
    <rect x={115} y={128} width={38} height={22} rx={1} fill='#FFD1D6' stroke='#FF6476' strokeWidth={2} />
    <rect x={1} y={1} width={166} height={166} rx={11} stroke='#6060FF' strokeWidth={2} />
  </svg>
);

const ForwardRef = forwardRef(Playlist);
export default ForwardRef;
