import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PaperclipSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.655 11.4691C19.7955 11.6098 19.8744 11.8007 19.8743 11.9996C19.8741 12.1985 19.795 12.3892 19.6543 12.5297L11.9618 20.2122C11.4742 20.6997 10.8955 21.0864 10.2585 21.3502C9.62152 21.614 8.93882 21.7497 8.24938 21.7497C6.85699 21.7496 5.52166 21.1964 4.53715 20.2118C3.55263 19.2272 2.99958 17.8918 2.99965 16.4994C2.99972 15.107 3.55292 13.7717 4.53753 12.7872L13.844 3.35122C14.1918 3.0023 14.6051 2.72536 15.06 2.53622C15.515 2.34708 16.0027 2.24945 16.4954 2.2489C16.9881 2.24836 17.4761 2.34492 17.9315 2.53306C18.3869 2.7212 18.8007 2.99723 19.1493 3.34538C19.498 3.69354 19.7746 4.10698 19.9633 4.56208C20.1521 5.01719 20.2494 5.50503 20.2495 5.99774C20.2497 6.49044 20.1527 6.97834 19.9642 7.43356C19.7757 7.88878 19.4993 8.30239 19.1509 8.65075L9.84444 18.0868C9.6358 18.2962 9.38795 18.4624 9.11504 18.576C8.84214 18.6896 8.54953 18.7483 8.25393 18.7487C7.95834 18.7491 7.66556 18.6913 7.39231 18.5786C7.11907 18.4658 6.87073 18.3003 6.66147 18.0915C6.45221 17.8828 6.28614 17.6348 6.17276 17.3618C6.05937 17.0888 6.00088 16.7962 6.00064 16.5006C6.0004 16.205 6.0584 15.9122 6.17134 15.6391C6.28428 15.3659 6.44994 15.1177 6.65886 14.9086L14.4646 6.97313C14.6041 6.83133 14.7942 6.75075 14.9931 6.74912C15.192 6.74749 15.3834 6.82494 15.5252 6.96444C15.667 7.10393 15.7476 7.29405 15.7492 7.49295C15.7509 7.69186 15.6734 7.88327 15.5339 8.02507L7.72384 15.9649C7.65335 16.0341 7.59723 16.1166 7.55871 16.2076C7.52019 16.2986 7.50002 16.3963 7.49937 16.4951C7.49872 16.5939 7.51759 16.6918 7.55491 16.7833C7.59223 16.8748 7.64726 16.958 7.71683 17.0281C7.7864 17.0983 7.86915 17.154 7.96032 17.1921C8.05149 17.2302 8.14928 17.2498 8.24809 17.25C8.34689 17.2502 8.44475 17.2308 8.53605 17.193C8.62734 17.1553 8.71028 17.0998 8.78009 17.0299L18.0866 7.59377C18.2962 7.38517 18.4626 7.1373 18.5763 6.86435C18.69 6.59139 18.7488 6.2987 18.7493 6.00301C18.7498 5.70732 18.692 5.41443 18.5793 5.14108C18.4665 4.86774 18.301 4.6193 18.0921 4.40997C17.8833 4.20065 17.6352 4.03454 17.3621 3.92115C17.089 3.80777 16.7963 3.74932 16.5006 3.74915C16.2049 3.74899 15.9121 3.80711 15.6388 3.92019C15.3656 4.03327 15.1174 4.1991 14.9083 4.40819L5.60183 13.8442C5.25291 14.192 4.97597 14.6053 4.78682 15.0602C4.59768 15.5152 4.50005 16.003 4.4995 16.4957C4.49896 16.9884 4.59552 17.4764 4.78367 17.9318C4.97181 18.3871 5.24785 18.801 5.596 19.1496C5.94416 19.4983 6.35761 19.7749 6.81272 19.9637C7.26784 20.1524 7.75569 20.2497 8.2484 20.2498C8.74111 20.25 9.22903 20.153 9.68425 19.9645C10.1395 19.776 10.5531 19.4996 10.9015 19.1512L18.5943 11.4685C18.6639 11.3989 18.7467 11.3436 18.8377 11.306C18.9287 11.2683 19.0262 11.249 19.1247 11.2491C19.2232 11.2491 19.3208 11.2686 19.4117 11.3063C19.5027 11.3441 19.5854 11.3994 19.655 11.4691Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PaperclipSolid);
export default ForwardRef;
