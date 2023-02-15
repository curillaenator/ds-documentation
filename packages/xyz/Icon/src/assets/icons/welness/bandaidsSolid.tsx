import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BandaidsSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z'
      fill='currentColor'
    />
    <path
      d='M17.3031 12.0003L19.9015 9.40193C20.2505 9.0539 20.5275 8.64046 20.7167 8.18527C20.9058 7.73008 21.0034 7.24206 21.0037 6.74913C21.0041 6.25621 20.9073 5.76804 20.7188 5.31257C20.5304 4.85709 20.254 4.44325 19.9054 4.09469C19.5569 3.74614 19.143 3.46973 18.6875 3.28126C18.2321 3.09279 17.7439 2.99597 17.251 2.99634C16.7581 2.9967 16.27 3.09425 15.8148 3.28339C15.3597 3.47253 14.9462 3.74956 14.5982 4.09863L11.9998 6.69698L9.40148 4.09863C9.05326 3.75041 8.63987 3.47419 8.1849 3.28573C7.72993 3.09728 7.2423 3.00028 6.74984 3.00028C6.25739 3.00028 5.76976 3.09728 5.31479 3.28573C4.85982 3.47419 4.44643 3.75041 4.09821 4.09863C3.74999 4.44684 3.47377 4.86024 3.28531 5.31521C3.09686 5.77018 2.99986 6.25781 2.99986 6.75027C2.99986 7.24272 3.09686 7.73036 3.28531 8.18533C3.47377 8.6403 3.74999 9.05369 4.09821 9.40191L6.69656 12.0003L4.09821 14.5986C3.74914 14.9466 3.47211 15.3601 3.28297 15.8153C3.09382 16.2705 2.99628 16.7585 2.99591 17.2514C2.99554 17.7443 3.09236 18.2325 3.28083 18.688C3.46929 19.1434 3.7457 19.5573 4.09425 19.9058C4.4428 20.2544 4.85665 20.5308 5.31212 20.7193C5.7676 20.9077 6.25576 21.0046 6.74868 21.0042C7.24161 21.0038 7.72962 20.9063 8.18481 20.7171C8.64001 20.528 9.05345 20.251 9.40148 19.9019L11.9998 17.3035L14.5982 19.9019C14.9464 20.2501 15.3598 20.5263 15.8148 20.7148C16.2697 20.9033 16.7574 21.0003 17.2498 21.0003C17.7423 21.0003 18.2299 20.9033 18.6849 20.7148C19.1398 20.5263 19.5532 20.2501 19.9015 19.9019C20.2497 19.5537 20.5259 19.1403 20.7143 18.6853C20.9028 18.2304 20.9998 17.7427 20.9998 17.2503C20.9998 16.7578 20.9028 16.2702 20.7143 15.8152C20.5259 15.3602 20.2497 14.9468 19.9015 14.5986L17.3031 12.0003ZM11.9998 8.81835L15.1817 12.0003L11.9998 15.1822L8.81792 12.0003L11.9998 8.81835ZM15.6589 5.15926C15.8678 4.95021 16.1159 4.78436 16.3889 4.67119C16.6619 4.55802 16.9545 4.49975 17.2501 4.4997C17.5456 4.49965 17.8383 4.55783 18.1113 4.67091C18.3844 4.78399 18.6325 4.94976 18.8414 5.15874C19.0504 5.36773 19.2162 5.61584 19.3292 5.88889C19.4423 6.16195 19.5004 6.45461 19.5004 6.75015C19.5003 7.04569 19.442 7.33833 19.3288 7.61133C19.2157 7.88434 19.0498 8.13238 18.8407 8.34127L16.2424 10.9396L13.0605 7.75767L15.6589 5.15926ZM8.34075 18.8413C8.13185 19.0503 7.8838 19.2162 7.61079 19.3293C7.33777 19.4425 7.04514 19.5008 6.7496 19.5008C6.45406 19.5009 6.1614 19.4427 5.88835 19.3296C5.6153 19.2165 5.3672 19.0508 5.15823 18.8418C4.94926 18.6328 4.78351 18.3847 4.67044 18.1116C4.55738 17.8386 4.49922 17.5459 4.49928 17.2504C4.49935 16.9548 4.55764 16.6622 4.67082 16.3892C4.78401 16.1162 4.94987 15.8682 5.15893 15.6593L7.75724 13.061L10.9391 16.2429L8.34075 18.8413Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(BandaidsSolid);
export default ForwardRef;
