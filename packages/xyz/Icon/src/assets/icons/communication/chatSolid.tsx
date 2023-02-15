import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChatSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2503 4.50043H3.75025C3.35259 4.50094 2.97136 4.65915 2.69016 4.94034C2.40897 5.22153 2.25077 5.60276 2.25025 6.00043V20.8898C2.24863 21.1759 2.32958 21.4564 2.4834 21.6977C2.63722 21.9389 2.85737 22.1307 3.11744 22.2499C3.31695 22.3432 3.53443 22.3917 3.75465 22.392C4.10673 22.3915 4.44722 22.2662 4.71559 22.0383L7.69215 19.5356L20.2503 19.5004C20.6479 19.4999 21.0292 19.3417 21.3103 19.0605C21.5915 18.7793 21.7497 18.3981 21.7503 18.0004V6.00043C21.7497 5.60276 21.5915 5.22153 21.3103 4.94034C21.0292 4.65915 20.6479 4.50094 20.2503 4.50043Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ChatSolid);
export default ForwardRef;