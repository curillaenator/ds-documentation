import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const InLineHorizontalSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.75 3.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75ZM9.60361 12.4438C9.6102 12.4348 9.61716 12.4262 9.62338 12.4169C9.63135 12.405 9.6383 12.3927 9.64549 12.3805C9.65071 12.3717 9.6563 12.3631 9.66115 12.354C9.66765 12.3419 9.67319 12.3294 9.67896 12.317C9.68358 12.3072 9.68852 12.2975 9.69274 12.2874C9.69763 12.2755 9.70166 12.2634 9.70592 12.2513C9.70986 12.2403 9.71411 12.2294 9.71755 12.218C9.72121 12.2059 9.72391 12.1937 9.72698 12.1815C9.72986 12.1699 9.73311 12.1586 9.73545 12.1468C9.73824 12.1326 9.73998 12.1183 9.74194 12.104C9.74332 12.094 9.74524 12.0843 9.74625 12.0743C9.75115 12.0249 9.75115 11.9751 9.74625 11.9258C9.74524 11.9157 9.74332 11.906 9.74194 11.896C9.73997 11.8817 9.73824 11.8674 9.73545 11.8532C9.73311 11.8414 9.72986 11.8301 9.72698 11.8185C9.72391 11.8063 9.72121 11.7941 9.71755 11.782C9.71411 11.7707 9.70986 11.7597 9.70592 11.7487C9.70166 11.7366 9.69763 11.7245 9.69274 11.7126C9.68853 11.7025 9.68358 11.6928 9.67896 11.683C9.67319 11.6706 9.66765 11.6581 9.66115 11.646C9.6563 11.637 9.65071 11.6283 9.64549 11.6195C9.6383 11.6073 9.63135 11.595 9.62338 11.5831C9.61716 11.5738 9.6102 11.5652 9.60361 11.5562C9.59573 11.5455 9.58823 11.5346 9.57967 11.5242C9.56877 11.511 9.55701 11.4985 9.54524 11.4861C9.54016 11.4807 9.53568 11.4749 9.53036 11.4696L6.53036 8.46964C6.3897 8.32898 6.19893 8.24995 6 8.24995C5.80107 8.24995 5.6103 8.32898 5.46963 8.46964C5.32897 8.6103 5.24995 8.80108 5.24995 9C5.24995 9.19893 5.32897 9.38971 5.46963 9.53037L7.18931 11.25H1.5C1.30109 11.25 1.11032 11.329 0.96967 11.4697C0.829018 11.6103 0.75 11.8011 0.75 12C0.75 12.1989 0.829018 12.3897 0.96967 12.5303C1.11032 12.671 1.30109 12.75 1.5 12.75H7.18931L5.46963 14.4696C5.39999 14.5393 5.34474 14.622 5.30704 14.713C5.26935 14.804 5.24995 14.9015 5.24995 15C5.24995 15.0985 5.26935 15.196 5.30704 15.287C5.34474 15.378 5.39999 15.4607 5.46963 15.5304C5.6103 15.671 5.80107 15.75 6 15.75C6.0985 15.75 6.19603 15.7306 6.28703 15.693C6.37803 15.6553 6.46072 15.6 6.53036 15.5304L9.53036 12.5304C9.53568 12.5251 9.54016 12.5193 9.54524 12.5139C9.55701 12.5015 9.56877 12.489 9.57967 12.4758C9.58823 12.4654 9.59573 12.4545 9.60361 12.4438ZM22.5 11.25H16.8107L18.5304 9.53036C18.671 9.3897 18.7501 9.19893 18.7501 9C18.7501 8.80107 18.671 8.6103 18.5304 8.46964C18.3897 8.32897 18.1989 8.24995 18 8.24995C17.8011 8.24995 17.6103 8.32897 17.4696 8.46964L14.4696 11.4696C14.4643 11.4749 14.4598 11.4807 14.4548 11.4861C14.443 11.4985 14.4312 11.511 14.4203 11.5242C14.4118 11.5346 14.4043 11.5455 14.3964 11.5562C14.3898 11.5652 14.3828 11.5738 14.3766 11.5831C14.3687 11.595 14.3617 11.6073 14.3545 11.6195C14.3493 11.6283 14.3437 11.6369 14.3389 11.646C14.3324 11.6581 14.3268 11.6706 14.321 11.683C14.3164 11.6928 14.3115 11.7025 14.3073 11.7126C14.3024 11.7245 14.2983 11.7366 14.2941 11.7487C14.2901 11.7597 14.2859 11.7706 14.2825 11.782C14.2788 11.7941 14.2761 11.8063 14.273 11.8185C14.2701 11.8301 14.2669 11.8414 14.2646 11.8532C14.2618 11.8674 14.26 11.8817 14.2581 11.896C14.2567 11.906 14.2548 11.9157 14.2538 11.9257C14.2489 11.9751 14.2489 12.0249 14.2538 12.0742C14.2548 12.0843 14.2567 12.094 14.2581 12.104C14.26 12.1183 14.2618 12.1326 14.2646 12.1468C14.2669 12.1586 14.2701 12.1699 14.273 12.1815C14.2761 12.1937 14.2788 12.2059 14.2825 12.218C14.2859 12.2293 14.2901 12.2403 14.2941 12.2513C14.2983 12.2634 14.3024 12.2755 14.3073 12.2874C14.3115 12.2975 14.3164 12.3072 14.321 12.317C14.3268 12.3294 14.3324 12.3419 14.3389 12.354C14.3437 12.363 14.3493 12.3717 14.3545 12.3805C14.3617 12.3927 14.3687 12.405 14.3766 12.4169C14.3828 12.4262 14.3898 12.4348 14.3964 12.4438C14.4043 12.4545 14.4118 12.4654 14.4203 12.4758C14.4312 12.489 14.443 12.5015 14.4548 12.5139C14.4598 12.5193 14.4643 12.5251 14.4696 12.5304L17.4696 15.5304C17.5393 15.6 17.622 15.6553 17.713 15.693C17.804 15.7306 17.9015 15.75 18 15.75C18.0985 15.75 18.196 15.7306 18.287 15.693C18.378 15.6553 18.4607 15.6 18.5304 15.5304C18.6 15.4607 18.6553 15.378 18.693 15.287C18.7307 15.196 18.7501 15.0985 18.7501 15C18.7501 14.9015 18.7307 14.804 18.693 14.713C18.6553 14.622 18.6 14.5393 18.5304 14.4696L16.8107 12.75H22.5C22.6989 12.75 22.8897 12.671 23.0303 12.5303C23.171 12.3897 23.25 12.1989 23.25 12C23.25 11.8011 23.171 11.6103 23.0303 11.4697C22.8897 11.329 22.6989 11.25 22.5 11.25Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(InLineHorizontalSolid);
export default ForwardRef;