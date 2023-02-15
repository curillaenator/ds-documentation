import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DigitalSkills = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <g clipPath='url(#digitalSkills__clip0)'>
      <path d='M21.3383 2.5H2.5V14H21.4286L21.3383 2.5Z' fill='white' />
      <path d='M2.5 2.5L21.5 14V2.5H2.5Z' fill='#D7EBFF' />
      <path d='M2.25211 14H22L21.5 17L21 17.5H2.99991L2.25208 16.5707L2.25211 14Z' fill='#93C4FC' />
      <path d='M9.5 17.5L9 20H15L14 17.5H9.5Z' fill='#93C4FC' />
      <path d='M7 20.5001V22H17L16.5957 20.5001H7Z' fill='#93C4FC' />
      <g filter='url(#digitalSkills__filter0_d)'>
        <path
          d='M20.3333 2H3.66667C3.22475 2.00035 2.80103 2.17606 2.48854 2.48856C2.17606 2.80105 2.00035 3.22479 2 3.66672V16.3339C2.00052 16.7758 2.17629 17.1995 2.48873 17.5119C2.80118 17.8244 3.2248 18.0001 3.66667 18.0007H9.18552L8.43592 20.001H7.66654C7.40151 20.001 7.14732 20.1062 6.9598 20.2935C6.77228 20.4807 6.66675 20.7348 6.6664 20.9998V21.667C6.66658 21.7554 6.7018 21.8401 6.76434 21.9025C6.82689 21.9649 6.91164 22 7 22H17C17.0884 22 17.1731 21.9649 17.2357 21.9025C17.2982 21.8401 17.3334 21.7554 17.3336 21.667V20.9998C17.3334 20.7347 17.228 20.4805 17.0404 20.293C16.8529 20.1056 16.5986 20.0003 16.3335 20.0003H15.5641L14.8145 18H20.3333C20.7752 17.9995 21.1988 17.8237 21.5113 17.5112C21.8237 17.1988 21.9995 16.7752 22 16.3333V3.66672C21.9997 3.22479 21.8239 2.80105 21.5115 2.48856C21.199 2.17606 20.7753 2.00035 20.3333 2V2ZM3.66667 2.66656H20.3333C20.5986 2.66656 20.853 2.77193 21.0405 2.9595C21.2281 3.14707 21.3335 3.40146 21.3335 3.66672V14.0007H2.66653V3.66672C2.66653 3.40146 2.77191 3.14707 2.95947 2.9595C3.14703 2.77193 3.40142 2.66656 3.66667 2.66656V2.66656ZM16.6671 20.9998V21.3334H7.33294V20.9998C7.33311 20.9115 7.36834 20.8268 7.43088 20.7644C7.49342 20.7019 7.57817 20.6669 7.66654 20.6669H16.3335C16.4218 20.6669 16.5066 20.7019 16.5691 20.7644C16.6317 20.8268 16.6669 20.9115 16.6671 20.9998ZM14.8521 20.0003H9.14794L9.89755 18H14.1025L14.8521 20.0003ZM20.3333 17.3341H3.66667C3.40142 17.3341 3.14703 17.2287 2.95947 17.0412C2.77191 16.8536 2.66653 16.5992 2.66653 16.3339V14.6705H21.3335V16.3372C21.3326 16.6019 21.2268 16.8555 21.0394 17.0423C20.8519 17.2292 20.598 17.3341 20.3333 17.3341Z'
          fill='#60A5F9'
        />
      </g>
    </g>
    <defs>
      <filter
        id='digitalSkills__filter0_d'
        x={-30}
        y={-22}
        width={84}
        height={84}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={8} />
        <feGaussianBlur stdDeviation={16} />
        <feColorMatrix type='matrix' values='0 0 0 0 0.215686 0 0 0 0 0.254902 0 0 0 0 0.317647 0 0 0 0.08 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
      </filter>
      <clipPath id='digitalSkills__clip0'>
        <rect width={24} height={24} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(DigitalSkills);
export default ForwardRef;
