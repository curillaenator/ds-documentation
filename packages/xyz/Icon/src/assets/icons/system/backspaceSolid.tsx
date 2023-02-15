import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BackspaceSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2495 3.74976H6.42429C6.16551 3.75081 5.91133 3.8183 5.68613 3.94578C5.46093 4.07326 5.27224 4.25645 5.13815 4.47778L0.856414 11.6138C0.786674 11.7304 0.749847 11.8638 0.749847 11.9997C0.749847 12.1357 0.786674 12.2691 0.856414 12.3857L5.13815 19.5217V19.5224C5.27226 19.7437 5.46097 19.9268 5.68619 20.0541C5.9114 20.1815 6.16556 20.2488 6.42429 20.2497H20.2495C20.6472 20.2493 21.0285 20.0912 21.3097 19.81C21.5909 19.5287 21.7491 19.1474 21.7495 18.7497V5.24975C21.7491 4.85205 21.5909 4.47075 21.3097 4.18953C21.0285 3.90831 20.6472 3.75015 20.2495 3.74976ZM15.5298 13.7195C15.5995 13.7891 15.6549 13.8718 15.6927 13.9628C15.7304 14.0538 15.7499 14.1514 15.75 14.2499C15.75 14.3485 15.7306 14.446 15.693 14.5371C15.6553 14.6282 15.6 14.7109 15.5303 14.7806C15.4606 14.8503 15.3779 14.9055 15.2868 14.9432C15.1958 14.9809 15.0982 15.0003 14.9996 15.0002C14.9011 15.0002 14.8035 14.9807 14.7125 14.9429C14.6215 14.9051 14.5388 14.8498 14.4692 14.78L12.7495 13.0603L11.0298 14.78C10.8891 14.9204 10.6984 14.9992 10.4996 14.9991C10.3009 14.999 10.1103 14.92 9.96977 14.7795C9.82923 14.6389 9.75023 14.4483 9.75013 14.2496C9.75002 14.0508 9.82882 13.8602 9.96921 13.7195L11.6889 11.9997L9.96921 10.28C9.82882 10.1393 9.75002 9.94867 9.75013 9.74991C9.75023 9.55116 9.82923 9.36058 9.96977 9.22004C10.1103 9.0795 10.3009 9.0005 10.4996 9.00039C10.6984 9.00029 10.8891 9.07909 11.0298 9.21947L12.7495 10.9392L14.4692 9.21947C14.6099 9.07909 14.8006 9.00029 14.9993 9.00039C15.1981 9.0005 15.3887 9.0795 15.5292 9.22004C15.6697 9.36058 15.7487 9.55116 15.7488 9.74991C15.7489 9.94867 15.6701 10.1393 15.5298 10.28L13.81 11.9997L15.5298 13.7195Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(BackspaceSolid);
export default ForwardRef;