import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TextAlignLeftSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75235 7.125H20.2523C20.4513 7.125 20.642 7.04598 20.7827 6.90533C20.9233 6.76468 21.0023 6.57391 21.0023 6.375C21.0023 6.17609 20.9233 5.98532 20.7827 5.84467C20.642 5.70402 20.4513 5.625 20.2523 5.625H3.75235C3.55344 5.625 3.36267 5.70402 3.22202 5.84467C3.08137 5.98532 3.00235 6.17609 3.00235 6.375C3.00235 6.57391 3.08137 6.76468 3.22202 6.90533C3.36267 7.04598 3.55344 7.125 3.75235 7.125Z'
      fill='currentColor'
    />
    <path
      d='M3.75235 10.875H15.7523C15.9513 10.875 16.142 10.796 16.2827 10.6553C16.4233 10.5147 16.5023 10.3239 16.5023 10.125C16.5023 9.92609 16.4233 9.73532 16.2827 9.59467C16.142 9.45402 15.9513 9.375 15.7523 9.375H3.75235C3.55344 9.375 3.36267 9.45402 3.22202 9.59467C3.08137 9.73532 3.00235 9.92609 3.00235 10.125C3.00235 10.3239 3.08137 10.5147 3.22202 10.6553C3.36267 10.796 3.55344 10.875 3.75235 10.875Z'
      fill='currentColor'
    />
    <path
      d='M20.252 13.125H3.75262C3.55371 13.125 3.36295 13.204 3.22229 13.3447C3.08164 13.4853 3.00263 13.6761 3.00263 13.875C3.00263 14.0739 3.08164 14.2647 3.22229 14.4053C3.36295 14.546 3.55371 14.625 3.75262 14.625H20.252C20.4509 14.625 20.6417 14.546 20.7823 14.4053C20.923 14.2647 21.002 14.0739 21.002 13.875C21.002 13.6761 20.923 13.4853 20.7823 13.3447C20.6417 13.204 20.4509 13.125 20.252 13.125Z'
      fill='currentColor'
    />
    <path
      d='M15.7521 16.875H3.75263C3.55371 16.875 3.36295 16.954 3.2223 17.0947C3.08164 17.2353 3.00263 17.4261 3.00263 17.625C3.00263 17.8239 3.08164 18.0147 3.2223 18.1553C3.36295 18.296 3.55371 18.375 3.75263 18.375H15.7521C15.951 18.375 16.1418 18.296 16.2824 18.1553C16.4231 18.0147 16.5021 17.8239 16.5021 17.625C16.5021 17.4261 16.4231 17.2353 16.2824 17.0947C16.1418 16.954 15.951 16.875 15.7521 16.875Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(TextAlignLeftSolid);
export default ForwardRef;
