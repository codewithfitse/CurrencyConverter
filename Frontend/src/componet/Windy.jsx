const size = "100px";

const WindyIcon = () => (
  <svg
    height="32px"
    width="32px"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="none"
      strokeLinecap="round"
      strokeWidth="1"
    >
      <g stroke="#979797" strokeWidth="2" transform="translate(3, 3)">
        <g transform="translate(2, 0)">
          <g transform="translate(5, 0)">
            <path d="M5,10 C7.76,10 10,7.76 10,5 C10,2.24 7.76,0 5,0 C2.24,0 0,2.24 0,5" />
          </g>
          <path d="M0,10 L10,10" />
        </g>
        <g transform="translate(3, 17)">
          <path d="M0,1 L14,1" />
          <path d="M11,4 C11,5.66 12.34,7 14,7 C15.66,7 17,5.66 17,4 C17,2.34 15.66,1 14,1" />
        </g>
        <g transform="translate(0, 4)">
          <path d="M21,10 C23.76,10 26,7.76 26,5 C26,2.24 23.76,0 21,0 C20.7,0 20.41,0.03 20.13,0.08" />
          <path d="M0,10 L21,10" />
        </g>
      </g>
    </g>
  </svg>
);

export default WindyIcon;

export const HumidIcon = () => (
  <svg
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    fill="none"
  >
    <g>
      <path
        fill="#444B54"
        d="M85.9,117c-1.9,0-3.7-0.2-5.6-0.7c-1.6-0.4-2.6-2-2.2-3.6c0.4-1.6,2-2.6,3.6-2.2
        c5.8,1.5,12-0.2,16.2-4.5c5.7-5.7,6.6-14.7,2.1-21.5l-16.6-25c-0.9-1.4-0.5-3.2,0.8-4.2c1.4-0.9,3.2-0.5,4.2,0.8l16.6,25
        c6.1,9.1,4.9,21.3-2.9,29C97.9,114.6,92,117,85.9,117z"
      />
      <path
        fill="#FFFFFF"
        d="M65.2,105.2c-11.7,11.7-30.7,11.7-42.4,0c-10.1-10.1-11.7-26-3.7-37.9l25-37.4l25,37.4
        C76.9,79.3,75.3,95.1,65.2,105.2z"
      />
      <path
        fill="#444B54"
        d="M44,117c-8.5,0-16.9-3.2-23.3-9.6C9.6,96.2,7.8,78.7,16.5,65.7l25-37.4c0.6-0.8,1.5-1.3,2.5-1.3
        s1.9,0.5,2.5,1.3l25,37.4c8.7,13,7,30.6-4.1,41.6C60.9,113.8,52.5,117,44,117z M44,35.3L21.5,69c-7.1,10.7-5.7,25,3.4,34.1
        c10.5,10.5,27.7,10.5,38.2,0C72.2,94,73.6,79.7,66.5,69L44,35.3z"
      />
    </g>
  </svg>
);

export const SunnyCloudyIcon = () => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className="size-24"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="46.72"
        x2="25.63"
        y1="58.39"
        y2="31.08"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-1, 0, 0, 1, 65.8, 0)"
      >
        <stop offset="0" stopColor="#f2f2f2" />
        <stop offset="1" stopColor="#cfcfcf" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="12.25"
        x2="23.86"
        y1="56.93"
        y2="74.58"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0, -1, -1, 0, 109.04, 59.43)"
      >
        <stop offset="0.02" stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
    <circle cx="39.8" cy="28" r="12.59" fill="#efcc00" />
    <line
      x1="39.8"
      y1="8"
      x2="39.8"
      y2="12.44"
      stroke="#efcc00"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="39.8"
      y1="43.56"
      x2="39.8"
      y2="48"
      stroke="#efcc00"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="19.8"
      y1="28"
      x2="24.25"
      y2="28"
      stroke="#efcc00"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="55.36"
      y1="28"
      x2="59.8"
      y2="28"
      stroke="#efcc00"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="25.66"
      y1="13.86"
      x2="28.8"
      y2="17"
      stroke="#efcc00"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="50.8"
      y1="39"
      x2="53.94"
      y2="42.14"
      stroke="#efcc00"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="25.66"
      y1="42.14"
      x2="28.8"
      y2="39"
      stroke="#efcc00"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="50.8"
      y1="17"
      x2="53.94"
      y2="13.86"
      stroke="#efcc00"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M23.5,21.9A17.49,17.49,0,0,1,39,31.22a13.75,13.75,0,1,1,6.92,25.62L23.5,56.9a17.5,17.5,0,0,1,0-35Z"
      fill="url(#linear-gradient)"
    />
    <circle
      cx="45.89"
      cy="43.09"
      r="13.75"
      transform="translate(-7.96 75.69) rotate(-74.39)"
      fill="url(#linear-gradient-2)"
    />
  </svg>
);

export const SunnyIcon = () => (
  <svg
    data-name="Layer 1"
    id="Layer_1"
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
  >
    <title>Sunny Icon</title>
    <circle cx="64" cy="64" r="37.202" fill="#fabe02" />
    <path
      d="M64,26.8a37.541,37.541,0,0,0-4.348.261,37.2,37.2,0,0,1,0,73.883A37.2,37.2,0,1,0,64,26.8Z"
      fill="#f59a1d"
    />
    <path
      d="M42.1,82.38a1.748,1.748,0,0,1-1.4-.691q-.455-.6-.88-1.222a1.75,1.75,0,1,1,2.891-1.973q.375.549.777,1.078A1.75,1.75,0,0,1,42.1,82.38Z"
      fill="#f59a1d"
    />
    <path
      d="M38.534,76.147a1.751,1.751,0,0,1-1.621-1.088A29.092,29.092,0,0,1,34.75,64a1.75,1.75,0,0,1,3.5,0,25.6,25.6,0,0,0,1.9,9.734,1.751,1.751,0,0,1-1.62,2.413Z"
      fill="#f59a1d"
    />
    <path
      d="M64,19.791a1.75,1.75,0,0,1-1.75-1.75V9a1.75,1.75,0,0,1,3.5,0v9.041A1.75,1.75,0,0,1,64,19.791ZM41.9,25.714a1.75,1.75,0,0,0,.641-2.391l-4.521-7.83a1.75,1.75,0,0,0-3.031,1.75l4.521,7.83a1.749,1.749,0,0,0,2.391.641ZM25.714,41.9a1.75,1.75,0,0,0-.641-2.391l-7.83-4.521a1.75,1.75,0,1,0-1.75,3.031l7.83,4.521a1.749,1.749,0,0,0,2.391-.641Zm78.963.641,7.83-4.521a1.75,1.75,0,0,0-1.75-3.031l-7.83,4.521a1.75,1.75,0,1,0,1.75,3.031ZM88.5,25.073l4.521-7.83a1.75,1.75,0,0,0-3.031-1.75l-4.521,7.83a1.75,1.75,0,1,0,3.031,1.75ZM65.75,119v-9.041a1.75,1.75,0,1,0-3.5,0V119a1.75,1.75,0,0,0,3.5,0Zm55-55A1.75,1.75,0,0,0,119,62.25h-9.041a1.75,1.75,0,1,0,0,3.5H119A1.75,1.75,0,0,0,120.75,64ZM19.791,64a1.75,1.75,0,0,0-1.75-1.75H9a1.75,1.75,0,0,0,0,3.5h9.041A1.75,1.75,0,0,0,19.791,64Zm72.584,49.147a1.75,1.75,0,0,0,.641-2.391l-4.521-7.83a1.75,1.75,0,1,0-3.031,1.75l4.521,7.83a1.749,1.749,0,0,0,2.391.641Zm20.772-20.772a1.75,1.75,0,0,0-.641-2.391l-7.83-4.521a1.75,1.75,0,1,0-1.75,3.031l7.83,4.521a1.749,1.749,0,0,0,2.391-.641Zm-95.9.641,7.83-4.521a1.75,1.75,0,1,0-1.75-3.031l-7.83,4.521a1.75,1.75,0,1,0,1.75,3.031Zm20.772,19.491,4.521-7.83a1.75,1.75,0,1,0-3.031-1.75l-4.521,7.83a1.75,1.75,0,1,0,3.031,1.75Z"
      fill="#fabe02"
    />
  </svg>
);

export const SnowIcon = () => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="46.72"
        x2="25.63"
        y1="46.39"
        y2="19.08"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-1, 0, 0, 1, 65.97, 0)"
      >
        <stop offset="0" stopColor="#f2f2f2" />
        <stop offset="1" stopColor="#cfcfcf" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="-52.44"
        x2="-40.82"
        y1="96.91"
        y2="114.56"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0, -1, -1, 0, 149.19, -17.25)"
      >
        <stop offset="0.02" stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <style>{`
        .cls-1{fill:url(#linear-gradient);}
        .cls-2{fill:url(#linear-gradient-2);}
        .cls-3{fill:none;stroke:#9c9fa0;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px;}
        .cls-4{fill:#c4c4c4;}
        .cls-5{fill:#e0e0e0;}
        .cls-6{fill:#fff;}
      `}</style>
    </defs>

    <path
      className="cls-1"
      d="M23.66,9.9a17.49,17.49,0,0,1,15.47,9.32A13.75,13.75,0,1,1,46,44.84l-22.39.06a17.5,17.5,0,0,1,0-35Z"
    />
    <circle
      className="cls-2"
      cx="46.05"
      cy="31.09"
      r="13.75"
      transform="translate(3.72 67.08) rotate(-74.39)"
    />
    <line className="cls-3" x1="32.13" y1="27.1" x2="32.13" y2="37.23" />
    <polyline className="cls-3" points="33.3 25.79 32.13 27.26 30.95 25.79" />
    <polyline className="cls-3" points="30.95 38.55 32.13 37.08 33.3 38.55" />
    <line className="cls-3" x1="36.51" y1="29.63" x2="27.74" y2="34.7" />
    <polyline className="cls-3" points="38.24 30 36.38 29.71 37.06 27.96" />
    <polyline className="cls-3" points="26.01 34.34 27.87 34.62 27.19 36.38" />
    <line className="cls-3" x1="36.51" y1="34.7" x2="27.74" y2="29.63" />
    <polyline className="cls-3" points="37.06 36.38 36.38 34.62 38.24 34.34" />
    <polyline className="cls-3" points="27.19 27.96 27.87 29.71 26.01 30" />
    <circle className="cls-4" cx="26.5" cy="52.63" r="2" />
    <circle className="cls-5" cx="36.5" cy="55.63" r="1.5" />
    <circle className="cls-5" cx="18.5" cy="48.63" r="1.5" />
    <circle className="cls-6" cx="32.5" cy="48.63" r="1" />
    <circle className="cls-6" cx="46.5" cy="55.63" r="1" />
    <circle className="cls-6" cx="17.5" cy="55.63" r="1" />
    <circle className="cls-4" cx="42.5" cy="49.63" r="2" />
  </svg>
);

export const SunnyRainyIcon = () => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="-693.28"
        x2="-714.37"
        y1="52.39"
        y2="25.08"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-1, 0, 0, 1, -674.2, 0)"
      >
        <stop offset="0" stopColor="#f2f2f2" />
        <stop offset="1" stopColor="#cfcfcf" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="-712.5"
        x2="-700.88"
        y1="-48.39"
        y2="-30.75"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0, -1, -1, 0, 3.72, -671.31)"
      >
        <stop offset="0.02" stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <style>{`
        .cls-1{fill:#efcc00;}
        .cls-2,.cls-5{fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px;}
        .cls-2{stroke:#efcc00;}
        .cls-3{fill:url(#linear-gradient);}
        .cls-4{fill:url(#linear-gradient-2);}
        .cls-5{stroke:#0baeff;}
      `}</style>
    </defs>

    <circle className="cls-1" cx="39.8" cy="22" r="12.59" />
    <line className="cls-2" x1="39.8" y1="2" x2="39.8" y2="6.44" />
    <line className="cls-2" x1="39.8" y1="37.56" x2="39.8" y2="42" />
    <line className="cls-2" x1="19.8" y1="22" x2="24.25" y2="22" />
    <line className="cls-2" x1="55.36" y1="22" x2="59.8" y2="22" />
    <line className="cls-2" x1="25.66" y1="7.86" x2="28.8" y2="11" />
    <line className="cls-2" x1="50.8" y1="33" x2="53.94" y2="36.14" />
    <line className="cls-2" x1="25.66" y1="36.14" x2="28.8" y2="33" />
    <line className="cls-2" x1="50.8" y1="11" x2="53.94" y2="7.86" />
    <path
      className="cls-3"
      d="M23.5,15.9A17.49,17.49,0,0,1,39,25.22a13.75,13.75,0,1,1,6.92,25.62L23.5,50.9a17.5,17.5,0,0,1,0-35Z"
    />
    <circle
      className="cls-4"
      cx="45.89"
      cy="37.09"
      r="13.75"
      transform="translate(-2.18 71.3) rotate(-74.39)"
    />
    <line className="cls-5" x1="32.5" y1="55.5" x2="32.5" y2="56.5" />
    <line className="cls-5" x1="26.5" y1="53.5" x2="26.5" y2="54.5" />
    <line className="cls-5" x1="38.5" y1="53.5" x2="38.5" y2="54.5" />
    <line className="cls-5" x1="38.5" y1="59.5" x2="38.5" y2="60.5" />
    <line className="cls-5" x1="26.5" y1="59.5" x2="26.5" y2="60.5" />
    <line className="cls-5" x1="32.5" y1="61.5" x2="32.5" y2="62.5" />
  </svg>
);
