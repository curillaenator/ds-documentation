import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const InLineVerticalSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12ZM11.4696 9.53036C11.4747 9.53545 11.4803 9.53977 11.4855 9.54469C11.4982 9.55664 11.5108 9.56866 11.5243 9.57971C11.5343 9.58793 11.5448 9.59512 11.5551 9.60274C11.5644 9.60967 11.5735 9.61697 11.5833 9.62347C11.5947 9.63112 11.6065 9.63778 11.6183 9.64474C11.6276 9.65025 11.6367 9.65611 11.6462 9.66126C11.6579 9.66749 11.6698 9.67278 11.6817 9.67836C11.6921 9.68321 11.7022 9.68839 11.7128 9.6928C11.7242 9.69749 11.7358 9.70129 11.7473 9.70541C11.7589 9.70957 11.7703 9.71402 11.7822 9.71761C11.7936 9.72106 11.8052 9.72361 11.8167 9.72649C11.8289 9.72958 11.841 9.73299 11.8534 9.73546C11.8666 9.73807 11.88 9.73963 11.8932 9.74153C11.9042 9.74308 11.9149 9.74517 11.926 9.74624C11.9506 9.74867 11.9753 9.74999 12 9.74999C12.0247 9.74999 12.0494 9.74866 12.074 9.74624C12.0851 9.74517 12.0958 9.74308 12.1067 9.74153C12.12 9.73963 12.1334 9.73807 12.1466 9.73546C12.159 9.73299 12.1711 9.72958 12.1833 9.72649C12.1948 9.72361 12.2064 9.72106 12.2178 9.71761C12.2297 9.71402 12.2411 9.70957 12.2527 9.70541C12.2642 9.70129 12.2758 9.69749 12.2872 9.6928C12.2978 9.68838 12.3079 9.68321 12.3183 9.67836C12.3302 9.67278 12.3421 9.66748 12.3538 9.66126C12.3633 9.65611 12.3724 9.65025 12.3817 9.64474C12.3935 9.63778 12.4053 9.63112 12.4167 9.62347C12.4264 9.61697 12.4356 9.60967 12.4449 9.60274C12.4552 9.59512 12.4657 9.58792 12.4757 9.57971C12.4892 9.56866 12.5018 9.55664 12.5145 9.54469C12.5197 9.53977 12.5253 9.53545 12.5304 9.53036L15.5304 6.53036C15.671 6.3897 15.75 6.19893 15.75 6C15.75 5.80107 15.671 5.6103 15.5304 5.46963C15.3897 5.32897 15.1989 5.24995 15 5.24995C14.8011 5.24995 14.6103 5.32897 14.4696 5.46963L12.75 7.18934V1.5C12.75 1.30109 12.671 1.11032 12.5303 0.96967C12.3897 0.829018 12.1989 0.75 12 0.75C11.8011 0.75 11.6103 0.829018 11.4697 0.96967C11.329 1.11032 11.25 1.30109 11.25 1.5V7.18934L9.53036 5.46963C9.3897 5.32897 9.19893 5.24995 9 5.24995C8.80107 5.24995 8.6103 5.32897 8.46964 5.46963C8.32897 5.6103 8.24995 5.80107 8.24995 6C8.24995 6.19893 8.32897 6.3897 8.46964 6.53036L11.4696 9.53036ZM12.5304 14.4696C12.5254 14.4646 12.5199 14.4604 12.5148 14.4556C12.502 14.4435 12.4893 14.4314 12.4757 14.4202C12.4659 14.4122 12.4556 14.4052 12.4455 14.3977C12.4359 14.3906 12.4266 14.3831 12.4167 14.3765C12.4056 14.3691 12.3941 14.3626 12.3827 14.3559C12.373 14.3501 12.3636 14.344 12.3536 14.3386C12.3425 14.3327 12.3311 14.3277 12.3197 14.3223C12.3088 14.3172 12.2981 14.3117 12.2868 14.3071C12.2763 14.3027 12.2655 14.2992 12.2548 14.2953C12.2423 14.2909 12.2301 14.2861 12.2173 14.2823C12.2071 14.2792 12.1967 14.2769 12.1863 14.2743C12.1729 14.2709 12.1598 14.2672 12.1462 14.2645C12.1348 14.2622 12.1233 14.2609 12.1118 14.2592C12.0991 14.2573 12.0865 14.255 12.0735 14.2537C12.0546 14.2519 12.0356 14.2513 12.0166 14.2508C12.011 14.2507 12.0056 14.25 12 14.25C11.9944 14.25 11.989 14.2507 11.9834 14.2508C11.9644 14.2513 11.9454 14.2519 11.9265 14.2537C11.9135 14.255 11.9009 14.2573 11.8882 14.2592C11.8767 14.2609 11.8652 14.2622 11.8538 14.2645C11.8402 14.2672 11.8271 14.2709 11.8137 14.2743C11.8033 14.2769 11.7929 14.2792 11.7827 14.2823C11.7699 14.2861 11.7577 14.2909 11.7452 14.2953C11.7345 14.2992 11.7237 14.3027 11.7132 14.3071C11.702 14.3117 11.6912 14.3172 11.6803 14.3223C11.6689 14.3277 11.6575 14.3327 11.6464 14.3386C11.6364 14.344 11.627 14.3501 11.6173 14.3559C11.6059 14.3626 11.5944 14.3691 11.5833 14.3765C11.5734 14.3831 11.5641 14.3906 11.5545 14.3977C11.5444 14.4052 11.5341 14.4122 11.5243 14.4202C11.5107 14.4314 11.498 14.4435 11.4852 14.4556C11.4801 14.4604 11.4746 14.4646 11.4696 14.4696L8.46964 17.4696C8.32897 17.6103 8.24995 17.8011 8.24995 18C8.24995 18.1989 8.32897 18.3897 8.46964 18.5304C8.6103 18.671 8.80107 18.7501 9 18.7501C9.19893 18.7501 9.3897 18.671 9.53037 18.5304L11.25 16.8107V22.5C11.25 22.6989 11.329 22.8897 11.4697 23.0303C11.6103 23.171 11.8011 23.25 12 23.25C12.1989 23.25 12.3897 23.171 12.5303 23.0303C12.671 22.8897 12.75 22.6989 12.75 22.5V16.8107L14.4696 18.5304C14.5393 18.6 14.622 18.6553 14.713 18.693C14.804 18.7306 14.9015 18.75 15 18.75C15.0985 18.75 15.196 18.7306 15.287 18.693C15.378 18.6553 15.4607 18.6 15.5304 18.5304C15.6 18.4607 15.6553 18.378 15.693 18.287C15.7306 18.196 15.75 18.0985 15.75 18C15.75 17.9015 15.7306 17.804 15.693 17.713C15.6553 17.622 15.6 17.5393 15.5304 17.4696L12.5304 14.4696Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(InLineVerticalSolid);
export default ForwardRef;
