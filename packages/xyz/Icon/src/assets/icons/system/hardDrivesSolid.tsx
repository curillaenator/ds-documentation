import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HardDrivesSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 3.75H4.5C4.10231 3.75045 3.72105 3.90864 3.43984 4.18984C3.15864 4.47105 3.00045 4.85231 3 5.25V9.75C3.00045 10.1477 3.15864 10.529 3.43984 10.8102C3.72105 11.0914 4.10231 11.2495 4.5 11.25H19.5C19.8977 11.2495 20.279 11.0914 20.5602 10.8102C20.8414 10.529 20.9995 10.1477 21 9.75V5.25C20.9995 4.85231 20.8414 4.47105 20.5602 4.18984C20.279 3.90864 19.8977 3.75045 19.5 3.75ZM16.875 8.625C16.6525 8.625 16.435 8.55902 16.25 8.4354C16.065 8.31179 15.9208 8.13609 15.8357 7.93052C15.7505 7.72495 15.7283 7.49875 15.7717 7.28052C15.8151 7.06229 15.9222 6.86184 16.0796 6.7045C16.2369 6.54717 16.4373 6.44002 16.6556 6.39662C16.8738 6.35321 17.1 6.37549 17.3056 6.46064C17.5111 6.54578 17.6868 6.68998 17.8104 6.87498C17.9341 7.05999 18 7.2775 18 7.5C18 7.79837 17.8815 8.08452 17.6705 8.2955C17.4596 8.50647 17.1734 8.625 16.875 8.625Z'
      fill='currentColor'
    />
    <path
      d='M19.5 12.75H4.5C4.10231 12.7505 3.72105 12.9086 3.43984 13.1898C3.15864 13.471 3.00045 13.8523 3 14.25V18.75C3.00045 19.1477 3.15864 19.529 3.43984 19.8102C3.72105 20.0914 4.10231 20.2495 4.5 20.25H19.5C19.8977 20.2495 20.279 20.0914 20.5602 19.8102C20.8414 19.529 20.9995 19.1477 21 18.75V14.25C20.9995 13.8523 20.8414 13.471 20.5602 13.1898C20.279 12.9086 19.8977 12.7505 19.5 12.75ZM16.875 17.625C16.6525 17.625 16.435 17.559 16.25 17.4354C16.065 17.3118 15.9208 17.1361 15.8357 16.9305C15.7505 16.725 15.7283 16.4988 15.7717 16.2805C15.8151 16.0623 15.9222 15.8618 16.0796 15.7045C16.2369 15.5472 16.4373 15.44 16.6556 15.3966C16.8738 15.3532 17.1 15.3755 17.3056 15.4606C17.5111 15.5458 17.6868 15.69 17.8104 15.875C17.9341 16.06 18 16.2775 18 16.5C18 16.7984 17.8815 17.0845 17.6705 17.2955C17.4596 17.5065 17.1734 17.625 16.875 17.625Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(HardDrivesSolid);
export default ForwardRef;
