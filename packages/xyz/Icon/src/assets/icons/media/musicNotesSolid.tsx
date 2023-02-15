import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MusicNotesSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.961 2.40863C19.8715 2.33793 19.767 2.28885 19.6554 2.26522C19.5439 2.24159 19.4284 2.24404 19.3179 2.2724L7.31788 5.2724C7.15559 5.31285 7.01149 5.40642 6.9085 5.53821C6.80551 5.66999 6.74955 5.83244 6.74951 5.99969V16.3212C6.12408 15.9035 5.37702 15.7069 4.62702 15.7625C3.87703 15.818 3.16711 16.1226 2.61005 16.6279C2.053 17.1331 1.68076 17.81 1.55247 18.551C1.42418 19.2921 1.5472 20.0547 1.90199 20.7178C2.25678 21.3809 2.82298 21.9064 3.51065 22.2109C4.19832 22.5154 4.96801 22.5813 5.69744 22.3982C6.42687 22.2151 7.0742 21.7936 7.53659 21.2005C7.99898 20.6074 8.24992 19.8767 8.24952 19.1247V10.3349L18.7496 7.7099V13.3212C18.1241 12.9035 17.3771 12.7069 16.6271 12.7625C15.8771 12.818 15.1672 13.1226 14.6101 13.6279C14.0531 14.1331 13.6808 14.81 13.5525 15.551C13.4242 16.2921 13.5473 17.0547 13.902 17.7178C14.2568 18.3809 14.823 18.9064 15.5107 19.2109C16.1984 19.5154 16.9681 19.5813 17.6975 19.3982C18.4269 19.2151 19.0743 18.7936 19.5366 18.2005C19.999 17.6074 20.25 16.8767 20.2496 16.1247V2.99969C20.2494 2.88574 20.2234 2.77331 20.1734 2.67091C20.1234 2.56851 20.0508 2.47882 19.961 2.40863Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(MusicNotesSolid);
export default ForwardRef;
