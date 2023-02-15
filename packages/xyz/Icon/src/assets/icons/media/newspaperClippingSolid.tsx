import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NewspaperClippingSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6.75 9.75H9.75V14.25H6.75V9.75ZM21.75 5.25V20.25C21.75 20.3779 21.7173 20.5036 21.6551 20.6153C21.5928 20.7269 21.5031 20.8208 21.3943 20.888C21.2855 20.9553 21.1614 20.9935 21.0337 20.9993C20.906 21.005 20.7789 20.978 20.6646 20.9208L18 19.5885L15.3354 20.9208C15.2313 20.9729 15.1164 21 15 21C14.8836 21 14.7687 20.9729 14.6646 20.9208L12 19.5885L9.33545 20.9208C9.2313 20.9729 9.11645 21 9 21C8.88355 21 8.7687 20.9729 8.66455 20.9208L6 19.5885L3.33545 20.9208C3.2211 20.978 3.09404 21.005 2.96631 20.9993C2.83859 20.9935 2.71445 20.9553 2.6057 20.888C2.49694 20.8208 2.40717 20.7269 2.34491 20.6153C2.28266 20.5036 2.24999 20.3779 2.25 20.25V5.25C2.25045 4.85231 2.40864 4.47105 2.68984 4.18984C2.97105 3.90864 3.35231 3.75045 3.75 3.75H20.25C20.6477 3.75045 21.029 3.90864 21.3102 4.18984C21.5914 4.47105 21.7495 4.85231 21.75 5.25ZM11.25 9C11.25 8.80109 11.171 8.61033 11.0303 8.46968C10.8897 8.32903 10.6989 8.25001 10.5 8.25H6C5.80109 8.25001 5.61033 8.32903 5.46968 8.46968C5.32903 8.61033 5.25001 8.80109 5.25 9V15C5.25001 15.1989 5.32903 15.3897 5.46968 15.5303C5.61033 15.671 5.80109 15.75 6 15.75H10.5C10.6989 15.75 10.8897 15.671 11.0303 15.5303C11.171 15.3897 11.25 15.1989 11.25 15V9ZM18.75 13.5C18.75 13.3011 18.671 13.1103 18.5303 12.9697C18.3897 12.829 18.1989 12.75 18 12.75H13.5C13.3011 12.75 13.1103 12.829 12.9697 12.9697C12.829 13.1103 12.75 13.3011 12.75 13.5C12.75 13.6989 12.829 13.8897 12.9697 14.0303C13.1103 14.171 13.3011 14.25 13.5 14.25H18C18.1989 14.25 18.3897 14.171 18.5303 14.0303C18.671 13.8897 18.75 13.6989 18.75 13.5ZM18.75 10.5C18.75 10.3011 18.671 10.1103 18.5303 9.96968C18.3897 9.82903 18.1989 9.75001 18 9.75H13.5C13.3011 9.75 13.1103 9.82902 12.9697 9.96967C12.829 10.1103 12.75 10.3011 12.75 10.5C12.75 10.6989 12.829 10.8897 12.9697 11.0303C13.1103 11.171 13.3011 11.25 13.5 11.25H18C18.1989 11.25 18.3897 11.171 18.5303 11.0303C18.671 10.8897 18.75 10.6989 18.75 10.5Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(NewspaperClippingSolid);
export default ForwardRef;