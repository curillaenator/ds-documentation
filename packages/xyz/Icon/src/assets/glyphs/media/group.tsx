import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Group = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 168 126' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M13 125C6.37259 125 1.00001 119.627 1.00001 113L1 13C1 6.3726 6.37258 1.00001 13 1.00001L155 1C161.627 1 167 6.37259 167 13V113C167 119.627 161.627 125 155 125H13Z'
      fill='#E7E7FF'
      stroke='#6060FF'
      strokeWidth={2}
    />
    <path
      d='M69 68H27C21.4772 68 17 72.4772 17 78V94C17 99.5228 21.4772 104 27 104H69C74.5228 104 79 99.5228 79 94V78C79 72.4772 74.5228 68 69 68Z'
      fill='#FFD1D6'
      stroke='#FF6476'
      strokeWidth={2}
    />
    <path
      d='M43 77H29C27.8954 77 27 77.8954 27 79V93C27 94.1046 27.8954 95 29 95H43C44.1046 95 45 94.1046 45 93V79C45 77.8954 44.1046 77 43 77Z'
      fill='#FFE8EA'
      stroke='#FF6476'
      strokeWidth={2}
    />
    <path
      d='M67 77H53C51.8954 77 51 77.8954 51 79V93C51 94.1046 51.8954 95 53 95H67C68.1046 95 69 94.1046 69 93V79C69 77.8954 68.1046 77 67 77Z'
      fill='#FFE8EA'
      stroke='#FF6476'
      strokeWidth={2}
    />
    <path
      d='M77 22H19C17.8954 22 17 22.8954 17 24V56C17 57.1046 17.8954 58 19 58H77C78.1046 58 79 57.1046 79 56V24C79 22.8954 78.1046 22 77 22Z'
      fill='#FDF0E4'
      stroke='#F2994A'
      strokeWidth={2}
    />
    <path
      d='M29.1113 43C31.3205 43 33.1113 44.7909 33.1113 47C33.1113 49.2091 31.3205 51 29.1113 51C26.9022 51 25.1113 49.2091 25.1113 47C25.1113 44.7909 26.9022 43 29.1113 43Z'
      fill='#FDF0E4'
      stroke='#F2994A'
      strokeWidth={2}
    />
    <path
      d='M29.1113 31C31.3205 31 33.1113 32.7909 33.1113 35C33.1113 37.2091 31.3205 39 29.1113 39C26.9022 39 25.1113 37.2091 25.1113 35C25.1113 32.7909 26.9022 31 29.1113 31Z'
      fill='#FDF0E4'
      stroke='#F2994A'
      strokeWidth={2}
    />
    <path opacity={0.8} d='M40.1113 35H70.1113' stroke='#F2994A' strokeWidth={2} strokeLinecap='round' />
    <path opacity={0.8} d='M40.1113 46H70.1113' stroke='#F2994A' strokeWidth={2} strokeLinecap='round' />
    <path
      d='M141 22H99C93.4772 22 89 26.4772 89 32V48C89 53.5228 93.4772 58 99 58H141C146.523 58 151 53.5228 151 48V32C151 26.4772 146.523 22 141 22Z'
      fill='#C8E2FB'
      stroke='#469FF1'
      strokeWidth={2}
    />
    <path opacity={0.8} d='M99.8887 35H129.889' stroke='#469FF1' strokeWidth={2} strokeLinecap='round' />
    <path opacity={0.8} d='M99.8887 46H139.889' stroke='#469FF1' strokeWidth={2} strokeLinecap='round' />
    <path
      d='M149 68H91C89.8954 68 89 68.8954 89 70V102C89 103.105 89.8954 104 91 104H149C150.105 104 151 103.105 151 102V70C151 68.8954 150.105 68 149 68Z'
      fill='#E7E7FF'
      stroke='#6060FF'
      strokeWidth={2}
    />
    <path d='M91.4023 101.644L148.644 70.5977' stroke='#6060FF' strokeWidth={2} strokeLinecap='round' />
    <path d='M148.598 101.645L91.3557 70.5981' stroke='#6060FF' strokeWidth={2} strokeLinecap='round' />
    <path
      d='M143.967 11.2025C144.31 10.3843 145.469 10.3843 145.812 11.2025L148.64 17.9549C148.784 18.2992 149.108 18.5345 149.48 18.5652L156.776 19.1683C157.66 19.2414 158.018 20.344 157.346 20.9228L151.798 25.6991C151.515 25.9426 151.392 26.3234 151.477 26.6866L153.158 33.8118C153.362 34.6752 152.424 35.3566 151.666 34.8961L145.409 31.0956C145.09 30.9019 144.69 30.9019 144.371 31.0956L138.114 34.8961C137.355 35.3566 136.417 34.6752 136.621 33.8118L138.302 26.6866C138.388 26.3234 138.264 25.9426 137.981 25.6991L132.433 20.9228C131.761 20.344 132.119 19.2414 133.003 19.1683L140.299 18.5652C140.671 18.5345 140.995 18.2992 141.139 17.9549L143.967 11.2025Z'
      fill='#FFD1D6'
      stroke='#FF6476'
      strokeWidth={2}
    />
  </svg>
);

const ForwardRef = forwardRef(Group);
export default ForwardRef;
