export const ArrowDown = () => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 8"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
      />
    </svg>
  );
};

export const ArrowUp = () => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 8"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
      />
    </svg>
  );
};

export const Stars = ({ width = "24", height = "24" }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      color="currentColor"
      fill="white"
    >
      <path d="M0 0h48v48H0z" fill="none" />
      <g id="Shopicon">
        <path
          d="M12,44h4c0-4.411,3.589-8,8-8v-4c-4.411,0-8-3.589-8-8h-4c0,4.411-3.589,8-8,8v4C8.411,36,12,39.589,12,44z M14,30.627
		c0.888,1.336,2.037,2.484,3.373,3.373c-1.336,0.889-2.485,2.037-3.373,3.373c-0.888-1.336-2.037-2.484-3.373-3.373
		C11.963,33.111,13.112,31.963,14,30.627z"
        />
        <polygon points="39.999,32 35.999,32 35.999,36 32,36 32,40 35.999,40 35.999,44 39.999,44 39.999,40 44,40 44,36 39.999,36 	" />
        <path
          d="M36,4h-4c0,4.411-3.589,8-8,8v4c4.411,0,8,3.589,8,8h4c0-4.411,3.589-8,8-8v-4C39.589,12,36,8.411,36,4z M34,17.373
		c-0.888-1.336-2.037-2.484-3.373-3.373c1.336-0.889,2.485-2.037,3.373-3.373c0.888,1.336,2.037,2.484,3.373,3.373
		C36.037,14.889,34.888,16.037,34,17.373z"
        />
        <polygon points="8.001,16 12.001,16 12.001,12 16,12 16,8 12.001,8 12.001,4 8.001,4 8.001,8 4,8 4,12 8.001,12 	" />
      </g>
    </svg>
  );
};
