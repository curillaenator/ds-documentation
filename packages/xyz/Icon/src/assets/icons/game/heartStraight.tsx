import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HeartStraight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.5303 19.864L20.1271 12.2672C21.9937 10.4006 22.2691 7.32976 20.5027 5.36811C20.0602 4.87533 19.522 4.47786 18.9208 4.19997C18.3197 3.92207 17.6682 3.76956 17.0062 3.75176C16.3441 3.73396 15.6854 3.85123 15.0702 4.09642C14.455 4.34161 13.8962 4.70957 13.4279 5.17786L12 6.60571L10.7672 5.3729C8.9006 3.5063 5.82976 3.23091 3.86811 4.99735C3.37533 5.43981 2.97786 5.97804 2.69997 6.57919C2.42207 7.18034 2.26956 7.83181 2.25176 8.49384C2.23396 9.15588 2.35123 9.8146 2.59642 10.4298C2.84161 11.045 3.20957 11.6038 3.67786 12.0722L11.4697 19.864C11.6103 20.0046 11.8011 20.0836 12 20.0836C12.1989 20.0836 12.3897 20.0046 12.5303 19.864V19.864Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(HeartStraight);
export default ForwardRef;
