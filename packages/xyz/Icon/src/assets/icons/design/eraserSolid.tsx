import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const EraserSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2501 19.4843H12.2197L15.4756 16.2284L15.4772 16.227L15.4785 16.2254L20.7805 10.9236C21.2017 10.5013 21.4383 9.92913 21.4383 9.33261C21.4383 8.73609 21.2017 8.16392 20.7805 7.74161L16.5378 3.49896C16.1158 3.07701 15.5435 2.83997 14.9468 2.83997C14.3501 2.83997 13.7778 3.07701 13.3558 3.49896L8.05339 8.80137L8.05243 8.80225L8.05156 8.80321L2.74915 14.1056C2.3272 14.5276 2.09015 15.0999 2.09015 15.6966C2.09015 16.2934 2.3272 16.8657 2.74915 17.2876L6.22623 20.7646C6.36691 20.9052 6.55768 20.9842 6.75659 20.9843H20.2501C20.449 20.9843 20.6398 20.9052 20.7804 20.7646C20.9211 20.6239 21.0001 20.4332 21.0001 20.2343C21.0001 20.0353 20.9211 19.8446 20.7804 19.7039C20.6398 19.5633 20.449 19.4843 20.2501 19.4843V19.4843ZM14.4165 4.55969C14.4862 4.49003 14.5688 4.43477 14.6598 4.39707C14.7508 4.35937 14.8483 4.33997 14.9468 4.33997C15.0453 4.33997 15.1428 4.35937 15.2338 4.39707C15.3248 4.43477 15.4075 4.49003 15.4771 4.55969L19.7197 8.80234C19.8602 8.9431 19.939 9.13382 19.939 9.33266C19.939 9.5315 19.8602 9.72222 19.7197 9.86297L14.9468 14.6359L9.64357 9.33266L14.4165 4.55969Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(EraserSolid);
export default ForwardRef;