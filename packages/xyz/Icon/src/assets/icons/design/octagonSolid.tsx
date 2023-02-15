import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const OctagonSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.3105 7.52197L16.478 2.68945C16.1961 2.40913 15.815 2.25124 15.4175 2.25H8.58252C8.18495 2.25124 7.8039 2.40913 7.52197 2.68945L2.68945 7.52197C2.40913 7.8039 2.25124 8.18495 2.25 8.58252V15.4175C2.25124 15.815 2.40913 16.1961 2.68945 16.478L7.52197 21.3105C7.8039 21.5909 8.18495 21.7488 8.58252 21.75H15.4175C15.815 21.7488 16.1961 21.5909 16.478 21.3105L21.3105 16.478C21.5909 16.1961 21.7488 15.815 21.75 15.4175V8.58252C21.7488 8.18495 21.5909 7.8039 21.3105 7.52197Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(OctagonSolid);
export default ForwardRef;
