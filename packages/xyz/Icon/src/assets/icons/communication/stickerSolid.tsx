import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const StickerSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.75 3H8.25C6.85809 3.00156 5.52364 3.55519 4.53941 4.53941C3.55519 5.52364 3.00156 6.85809 3 8.25V15.75C3.00156 17.1419 3.55519 18.4764 4.53941 19.4606C5.52364 20.4448 6.85809 20.9984 8.25 21H12.75C12.8306 21 12.9107 20.987 12.9872 20.9615C15.4465 20.1417 20.1417 15.4465 20.9615 12.9872C20.987 12.9107 21 12.8306 21 12.75V8.25C20.9984 6.85809 20.4448 5.52364 19.4606 4.53941C18.4764 3.55519 17.1419 3.00156 15.75 3ZM12.75 19.4458V16.5C12.7511 15.5058 13.1466 14.5526 13.8496 13.8496C14.5526 13.1466 15.5058 12.7511 16.5 12.75H19.4458C18.5775 14.7705 14.7705 18.5775 12.75 19.4458Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(StickerSolid);
export default ForwardRef;