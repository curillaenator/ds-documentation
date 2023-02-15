import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const URightUpSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.7804 6.96981L16.2804 2.46981C16.2784 2.46789 16.2763 2.46629 16.2743 2.46436C16.2587 2.44903 16.2425 2.4342 16.2255 2.42028C16.2163 2.41264 16.2065 2.406 16.1969 2.39886C16.1868 2.39135 16.177 2.38352 16.1666 2.37656C16.1555 2.36915 16.1441 2.36274 16.1327 2.35601C16.1231 2.35024 16.1136 2.34415 16.1036 2.3388C16.0922 2.33266 16.0804 2.32745 16.0687 2.32195C16.0582 2.31701 16.0479 2.31179 16.0371 2.3073C16.0257 2.30259 16.0141 2.29879 16.0025 2.29467C15.991 2.2905 15.9796 2.28611 15.9678 2.28254C15.9563 2.27902 15.9445 2.27645 15.9328 2.27352C15.9207 2.2705 15.9089 2.26711 15.8966 2.26469C15.8831 2.26199 15.8693 2.26038 15.8557 2.25842C15.8451 2.25695 15.8348 2.25494 15.8241 2.25388C15.7748 2.24903 15.7252 2.24903 15.6759 2.25388C15.6652 2.25494 15.6549 2.25695 15.6443 2.25842C15.6307 2.26038 15.6169 2.26199 15.6034 2.26469C15.5911 2.26711 15.5793 2.2705 15.5672 2.27352C15.5555 2.27645 15.5437 2.27902 15.5322 2.28254C15.5204 2.28611 15.509 2.29051 15.4975 2.29467C15.4859 2.29879 15.4743 2.30259 15.4629 2.3073C15.4521 2.31179 15.4418 2.31701 15.4313 2.32195C15.4196 2.32745 15.4078 2.33266 15.3964 2.3388C15.3864 2.34415 15.377 2.35024 15.3673 2.35601C15.3559 2.36274 15.3445 2.36915 15.3334 2.37656C15.323 2.38352 15.3132 2.39135 15.3031 2.39886C15.2935 2.406 15.2837 2.41264 15.2745 2.42028C15.2575 2.4342 15.2413 2.44903 15.2257 2.46436C15.2237 2.46629 15.2216 2.46789 15.2196 2.46981L10.7196 6.96981C10.579 7.11047 10.5 7.30124 10.5 7.50016C10.5 7.69908 10.579 7.88985 10.7197 8.03049C10.8603 8.17114 11.0511 8.25016 11.25 8.25015C11.4489 8.25014 11.6397 8.17111 11.7804 8.03045L15 4.81082V15.7501C15 16.9436 14.5259 18.0882 13.682 18.9321C12.8381 19.776 11.6935 20.2501 10.5 20.2501C9.30653 20.2501 8.16193 19.776 7.31802 18.9321C6.47411 18.0882 6 16.9436 6 15.7501V7.50013C6 7.30122 5.92098 7.11045 5.78033 6.9698C5.63968 6.82915 5.44891 6.75013 5.25 6.75013C5.05109 6.75013 4.86032 6.82915 4.71967 6.9698C4.57902 7.11045 4.5 7.30122 4.5 7.50013V15.7501C4.5 17.3414 5.13214 18.8676 6.25736 19.9928C7.38258 21.118 8.9087 21.7501 10.5 21.7501C12.0913 21.7501 13.6174 21.118 14.7426 19.9928C15.8679 18.8676 16.5 17.3414 16.5 15.7501V4.81082L19.7196 8.03045C19.8603 8.17111 20.0511 8.25014 20.25 8.25015C20.4489 8.25016 20.6397 8.17115 20.7803 8.0305C20.921 7.88985 21 7.69908 21 7.50017C21 7.30125 20.921 7.11048 20.7804 6.96981V6.96981Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(URightUpSolid);
export default ForwardRef;
