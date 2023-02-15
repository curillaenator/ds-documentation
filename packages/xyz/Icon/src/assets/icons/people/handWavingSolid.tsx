import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HandWavingSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.6439 9.7489L18.769 6.50134C18.5473 6.11814 18.2323 5.79718 17.8534 5.56826C17.4744 5.33934 17.0438 5.20987 16.6014 5.19189C16.1591 5.17392 15.7194 5.268 15.3231 5.46542C14.9268 5.66283 14.5869 5.95717 14.3348 6.32112L12.7088 3.50487C12.4815 3.11085 12.1556 2.7827 11.7632 2.5526C11.3708 2.32251 10.9253 2.19837 10.4705 2.19236C10.0156 2.18635 9.56701 2.29868 9.16866 2.51834C8.77031 2.73799 8.4359 3.05742 8.19823 3.44529C7.73412 3.02598 7.13557 2.78615 6.51034 2.76899C5.88511 2.75182 5.27429 2.95844 4.78787 3.35164C4.30146 3.74484 3.97141 4.29879 3.85716 4.91373C3.74291 5.52867 3.85196 6.1642 4.16468 6.70587L4.85408 7.89993C4.41262 7.93541 3.98732 8.08204 3.6178 8.32616C3.24827 8.57028 2.94654 8.90395 2.74071 9.29609C2.53488 9.68824 2.43164 10.1261 2.44062 10.5689C2.44959 11.0117 2.57048 11.445 2.79203 11.8285L6.35453 17.9989C6.89624 18.9372 7.61744 19.7595 8.47696 20.4191C9.33648 21.0786 10.3175 21.5624 11.364 21.8428C12.4105 22.1232 13.5019 22.1947 14.5761 22.0533C15.6502 21.9119 16.686 21.5603 17.6242 21.0186C18.5625 20.4769 19.3848 19.7557 20.0444 18.8962C20.7039 18.0366 21.1877 17.0556 21.4681 16.0091C21.7485 14.9627 21.82 13.8712 21.6786 12.7971C21.5372 11.7229 21.1856 10.6872 20.6439 9.7489ZM20.0192 15.621C19.6737 16.9105 18.9535 18.0686 17.9498 18.9488C16.9461 19.8291 15.7038 20.3919 14.3802 20.5662C13.0566 20.7404 11.7111 20.5183 10.5137 19.9278C9.31637 19.3373 8.321 18.4051 7.65348 17.2489L4.09108 11.0785C3.94216 10.8201 3.90193 10.5132 3.97921 10.2252C4.0565 9.93716 4.24499 9.69161 4.50325 9.54249C4.76151 9.39337 5.0684 9.3529 5.35649 9.42997C5.64458 9.50703 5.89028 9.69533 6.03959 9.95348L7.72709 12.8763C7.74284 12.9032 7.76023 12.9291 7.77919 12.9538C7.78413 12.9604 7.78935 12.9666 7.79448 12.9729C7.80926 12.9912 7.82475 13.0086 7.84094 13.0252C7.84643 13.0309 7.85183 13.0367 7.85746 13.0421C7.87891 13.0629 7.90158 13.0825 7.92535 13.1006L7.927 13.1017C7.95008 13.1188 7.97412 13.1345 7.99901 13.1488C8.00606 13.1529 8.01315 13.1566 8.02029 13.1605C8.04011 13.1712 8.06038 13.181 8.08108 13.1898C8.088 13.1928 8.09472 13.1959 8.10173 13.1987C8.12894 13.2095 8.15676 13.2188 8.18504 13.2264C8.18687 13.2269 8.18875 13.2271 8.19058 13.2276C8.21698 13.2343 8.24372 13.2395 8.27069 13.2433C8.2787 13.2444 8.28671 13.2453 8.29477 13.2461C8.31729 13.2486 8.33992 13.2501 8.36265 13.2505C8.3676 13.2506 8.37245 13.2515 8.37739 13.2515C8.37977 13.2515 8.3822 13.251 8.38458 13.251C8.41373 13.2509 8.44285 13.249 8.47178 13.2454C8.47412 13.2451 8.47645 13.2445 8.47879 13.2442C8.50534 13.2405 8.53167 13.2353 8.55766 13.2288C8.56608 13.2267 8.57437 13.2242 8.58275 13.2218C8.6038 13.2157 8.62466 13.2087 8.64532 13.2007C8.65347 13.1976 8.66162 13.1946 8.66972 13.1912C8.76782 13.1502 8.85602 13.0887 8.9284 13.0108C9.00079 12.9329 9.0557 12.8404 9.08945 12.7396C9.1232 12.6388 9.13501 12.5319 9.12409 12.4261C9.11317 12.3204 9.07977 12.2182 9.02614 12.1263L7.33864 9.20344L7.33827 9.20283L5.46363 5.95583C5.31475 5.69744 5.27455 5.39052 5.35186 5.1025C5.42917 4.81449 5.61767 4.56896 5.87593 4.41986C6.13419 4.27076 6.44108 4.2303 6.72916 4.30737C7.01724 4.38444 7.26293 4.57274 7.41224 4.83087L8.16069 6.12726L8.16215 6.12991L10.5997 10.3518C10.6489 10.4371 10.7145 10.5119 10.7926 10.5718C10.8707 10.6318 10.9599 10.6758 11.0551 10.7013C11.1502 10.7268 11.2494 10.7333 11.3471 10.7204C11.4447 10.7076 11.5389 10.6756 11.6242 10.6263C11.7095 10.5771 11.7842 10.5115 11.8442 10.4334C11.9041 10.3553 11.9481 10.2661 11.9736 10.1709C11.9991 10.0758 12.0056 9.97658 11.9928 9.87893C11.9799 9.78128 11.9479 9.68712 11.8987 9.60182L9.46129 5.37991C9.38742 5.25197 9.33947 5.11072 9.32019 4.96425C9.30091 4.81777 9.31067 4.66893 9.34891 4.52622C9.38715 4.38352 9.45312 4.24974 9.54306 4.13253C9.633 4.01532 9.74514 3.91698 9.87309 3.84311C10.001 3.76924 10.1423 3.7213 10.2888 3.70201C10.4352 3.68273 10.5841 3.69249 10.7268 3.73073C10.8695 3.76897 11.0033 3.83494 11.1205 3.92488C11.2377 4.01482 11.336 4.12697 11.4099 4.25491L14.2222 9.12593L14.2224 9.12634L14.8157 10.1542C13.9965 10.8323 13.4438 11.7786 13.2556 12.8253C13.0673 13.872 13.2557 14.9516 13.7872 15.8727C13.8365 15.958 13.9021 16.0328 13.9802 16.0927C14.0583 16.1527 14.1475 16.1966 14.2426 16.2221C14.3378 16.2476 14.437 16.2541 14.5346 16.2413C14.6323 16.2284 14.7264 16.1964 14.8117 16.1472C14.897 16.098 14.9718 16.0324 15.0317 15.9543C15.0917 15.8761 15.1356 15.7869 15.1611 15.6918C15.1866 15.5967 15.1931 15.4975 15.1803 15.3998C15.1674 15.3022 15.1354 15.208 15.0862 15.1227C14.6884 14.4337 14.5806 13.6148 14.7865 12.8462C14.9925 12.0777 15.4953 11.4225 16.1844 11.0246C16.206 11.0122 16.2269 10.9986 16.2472 10.984C16.2641 10.9719 16.28 10.9588 16.2955 10.9456C16.2985 10.943 16.3017 10.9408 16.3047 10.9383C16.3226 10.9226 16.3395 10.906 16.3556 10.8889L16.3571 10.8874C16.3733 10.8701 16.3885 10.8521 16.4028 10.8335L16.4045 10.8315C16.418 10.8139 16.4305 10.7955 16.4424 10.7768C16.4436 10.7749 16.445 10.7731 16.4463 10.7711C16.4569 10.7539 16.4664 10.7362 16.4756 10.7184C16.4777 10.7144 16.4801 10.7106 16.4821 10.7066C16.4903 10.6899 16.4974 10.6727 16.5043 10.6554C16.5065 10.6499 16.5092 10.6446 16.5114 10.639C16.5189 10.6189 16.5253 10.5983 16.5311 10.5776C16.5319 10.5748 16.5331 10.5721 16.5338 10.5693C16.5346 10.5665 16.5349 10.5636 16.5357 10.5609C16.541 10.54 16.5457 10.5189 16.5493 10.4976C16.5504 10.4911 16.5507 10.4845 16.5516 10.478C16.5541 10.4602 16.5565 10.4425 16.5577 10.4246C16.558 10.4191 16.5578 10.4137 16.558 10.4082C16.5589 10.3892 16.5596 10.3701 16.559 10.351C16.5588 10.3473 16.5583 10.3437 16.5581 10.3401C16.5572 10.3193 16.5557 10.2985 16.553 10.2777C16.5527 10.2754 16.5521 10.2731 16.5518 10.2707C16.5487 10.249 16.545 10.2273 16.54 10.2057C16.5393 10.2031 16.5384 10.2005 16.5378 10.1979C16.5327 10.1769 16.527 10.156 16.52 10.1353C16.5179 10.1292 16.5152 10.1233 16.5129 10.1173C16.5067 10.1004 16.5005 10.0835 16.493 10.0669C16.4828 10.0441 16.4714 10.0218 16.4588 10.0001L15.5213 8.37629C15.3725 8.11791 15.3323 7.81098 15.4096 7.52297C15.4869 7.23496 15.6754 6.98942 15.9336 6.84033C16.1919 6.69123 16.4988 6.65077 16.7869 6.72784C17.0749 6.80491 17.3206 6.9932 17.47 7.25134L19.345 10.4989C19.7904 11.2657 20.0794 12.1132 20.1951 12.9924C20.3109 13.8716 20.2511 14.765 20.0192 15.621ZM8.21873 22.9276C8.16262 23.0086 8.09111 23.0777 8.00828 23.131C7.92546 23.1843 7.83295 23.2208 7.73603 23.2383C7.63911 23.2559 7.53968 23.2542 7.44342 23.2333C7.34717 23.2124 7.25597 23.1727 7.17503 23.1166C5.81166 22.1729 4.67588 20.9371 3.85039 19.4991C3.75093 19.3269 3.72397 19.1222 3.77545 18.93C3.82692 18.7379 3.95261 18.5741 4.12486 18.4747C4.29711 18.3752 4.50182 18.3482 4.69394 18.3997C4.88607 18.4512 5.04988 18.5769 5.14934 18.7491C5.86452 19.9952 6.84854 21.0661 8.02977 21.8839C8.19323 21.9973 8.30497 22.1709 8.34041 22.3667C8.37584 22.5624 8.33208 22.7642 8.21873 22.9276ZM15.7499 2.90556C15.75 2.70677 15.8291 2.51618 15.9698 2.37568C16.1104 2.23518 16.3011 2.15625 16.4999 2.15625H16.5006C17.4874 2.15854 18.4563 2.41948 19.3108 2.91303C20.1653 3.40659 20.8755 4.11553 21.3706 4.96916C21.4199 5.05447 21.4519 5.14865 21.4648 5.24633C21.4777 5.34402 21.4712 5.44328 21.4457 5.53846C21.4202 5.63364 21.3763 5.72287 21.3163 5.80104C21.2563 5.87922 21.1815 5.94481 21.0962 5.99407C21.0109 6.04333 20.9167 6.0753 20.819 6.08815C20.7213 6.10099 20.622 6.09446 20.5268 6.06893C20.4317 6.0434 20.3425 5.99937 20.2643 5.93936C20.1862 5.87934 20.1206 5.80452 20.0714 5.71916C19.7083 5.09306 19.1873 4.5731 18.5605 4.21113C17.9337 3.84917 17.2229 3.65785 16.4991 3.65625C16.3002 3.65606 16.1095 3.57686 15.969 3.43608C15.8285 3.2953 15.7497 3.10447 15.7499 2.90556Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(HandWavingSolid);
export default ForwardRef;