import React from "react";

/**
 *
 */
interface SvgProps {
  /**
   *
   */
  color?: string;

  width?: any;

  height?: any;
}

/**
 *
 * @param root0
 * @param root0.color
 * @param root0.width
 * @param root0.height
 */
export const SpecieSvg = ({
  color = "#24463B",
  width = "100%",
  height = "100%",
}: SvgProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 19 29"
      fill={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7126 11.3809C16.0637 9.90724 15.8857 8.35705 15.2096 7.00138C14.5335 5.6457 13.4025 4.57081 12.0141 3.96464C12.5047 3.57681 12.9012 3.08296 13.1737 2.5201C13.4463 1.95724 13.5879 1.33998 13.5879 0.7146H11.1741C11.1741 1.17539 10.9911 1.6173 10.6652 1.94312C10.3394 2.26895 9.89751 2.45199 9.43672 2.45199C8.97594 2.45199 8.53402 2.26895 8.2082 1.94312C7.88237 1.6173 7.69933 1.17539 7.69933 0.7146H5.28554C5.28532 1.34025 5.42681 1.95782 5.69938 2.52098C5.97194 3.08414 6.36851 3.57825 6.85933 3.96625C5.4578 4.57836 4.31892 5.66792 3.6454 7.04099C2.97188 8.41407 2.8074 9.98159 3.18125 11.4646C1.32799 13.2819 0.166687 15.8856 0.166687 18.773C0.166687 24.2502 4.35059 28.706 9.49143 28.706C14.6323 28.706 18.8162 24.2502 18.8162 18.773C18.8151 15.841 17.6163 13.2003 15.7126 11.3809ZM9.43672 5.84042C10.4924 5.84156 11.5058 6.25567 12.2602 6.99422C13.0146 7.73277 13.4501 8.73714 13.4737 9.79261C12.2212 9.15653 10.8346 8.82949 9.42994 8.83883C8.02523 8.84816 6.64317 9.19359 5.39925 9.84625C5.40872 8.78129 5.83814 7.7631 6.59416 7.013C7.35019 6.2629 8.37172 5.84151 9.43672 5.84042ZM2.58048 18.773C2.58048 15.0954 5.01948 12.0262 8.22929 11.3787V26.1667C5.01841 25.5193 2.58048 22.45 2.58048 18.773ZM10.642 26.1876V11.3578C13.9065 11.9559 16.4013 15.0536 16.4013 18.773C16.4013 22.4924 13.9065 25.5895 10.642 26.1876Z"
        fill={`${color}`}
      />
    </svg>
  </div>
);

/**
 *
 * @param root0
 * @param root0.color
 */
export const HexagonsSvg = ({
  color = "#24463B",
  width = "100%",
  height = "100%",
}: SvgProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 21 18"
      fill={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.43362 0.5L12.3752 2.75074V7.25221L8.43362 9.50295L4.49203 7.25221V2.75074L8.43362 0.5ZM5.83964 3.52025V6.4827L8.43362 7.96391L11.0276 6.4827V3.52025L8.43362 2.03903L5.83964 3.52025Z"
        fill={`${color}`}
      />
      <path
        d="M5.83964 6.4827V3.52025L8.43362 2.03903L11.0276 3.52025V6.4827L8.43362 7.96391L5.83964 6.4827Z"
        fill={`${color}`}
      />
      <path
        d="M17.0584 0.5L21 2.75074V7.25221L17.0584 9.50295L13.1168 7.25221V2.75074L17.0584 0.5ZM14.4644 3.52025V6.4827L17.0584 7.96391L19.6524 6.4827V3.52025L17.0584 2.03903L14.4644 3.52025Z"
        fill={`${color}`}
      />
      <path
        d="M12.746 8.49705L16.6876 10.7478V15.2493L12.746 17.5L8.80443 15.2493V10.7478L12.746 8.49705ZM10.152 11.5173V14.4797L12.746 15.961L15.34 14.4797V11.5173L12.746 10.0361L10.152 11.5173Z"
        fill={`${color}`}
      />
      <path
        d="M3.94159 8.49705L7.88317 10.7478V15.2493L3.94159 17.5L0 15.2493V10.7478L3.94159 8.49705ZM1.34761 11.5173V14.4797L3.94159 15.961L6.53556 14.4797V11.5173L3.94159 10.0361L1.34761 11.5173Z"
        fill={`${color}`}
      />
    </svg>
  </div>
);

/**
 *
 * @param root0
 * @param root0.color
 */
export const PinSvg = ({
  color = "#24463B",
  width = "100%",
  height = "100%",
}: SvgProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 19 25"
      fill={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.50002 0.833374C7.02467 0.833374 4.6507 1.8167 2.90036 3.56704C1.15002 5.31738 0.166687 7.69135 0.166687 10.1667C0.166687 16.4667 8.39169 23.5834 8.74169 23.8867C8.95301 24.0675 9.22194 24.1668 9.50002 24.1668C9.7781 24.1668 10.047 24.0675 10.2584 23.8867C10.6667 23.5834 18.8334 16.4667 18.8334 10.1667C18.8334 7.69135 17.85 5.31738 16.0997 3.56704C14.3493 1.8167 11.9754 0.833374 9.50002 0.833374ZM9.50002 21.425C7.01502 19.0917 2.50002 14.0634 2.50002 10.1667C2.50002 8.31019 3.23752 6.52971 4.55027 5.21696C5.86303 3.90421 7.64351 3.16671 9.50002 3.16671C11.3565 3.16671 13.137 3.90421 14.4498 5.21696C15.7625 6.52971 16.5 8.31019 16.5 10.1667C16.5 14.0634 11.985 19.1034 9.50002 21.425ZM9.50002 5.50004C8.57704 5.50004 7.67479 5.77374 6.90736 6.28652C6.13993 6.7993 5.54179 7.52813 5.18858 8.38085C4.83537 9.23357 4.74296 10.1719 4.92302 11.0771C5.10309 11.9824 5.54754 12.8139 6.20019 13.4665C6.85283 14.1192 7.68435 14.5636 8.5896 14.7437C9.49484 14.9238 10.4332 14.8314 11.2859 14.4781C12.1386 14.1249 12.8674 13.5268 13.3802 12.7594C13.893 11.9919 14.1667 11.0897 14.1667 10.1667C14.1667 8.92903 13.675 7.74204 12.7999 6.86688C11.9247 5.99171 10.7377 5.50004 9.50002 5.50004ZM9.50002 12.5C9.03853 12.5 8.58741 12.3632 8.20369 12.1068C7.81998 11.8504 7.52091 11.486 7.3443 11.0596C7.1677 10.6333 7.12149 10.1641 7.21152 9.7115C7.30155 9.25887 7.52378 8.84311 7.85011 8.51679C8.17643 8.19047 8.59219 7.96824 9.04481 7.87821C9.49743 7.78818 9.96659 7.83438 10.3929 8.01099C10.8193 8.18759 11.1837 8.48666 11.4401 8.87038C11.6965 9.25409 11.8334 9.70522 11.8334 10.1667C11.8334 10.7855 11.5875 11.379 11.1499 11.8166C10.7124 12.2542 10.1189 12.5 9.50002 12.5Z"
        fill={`${color}`}
      />
    </svg>
  </div>
);

/**
 *
 * @param root0
 * @param root0.color
 */
export const CalendarSvg = ({
  color = "#24463B",
  width = "100%",
  height = "100%",
}: SvgProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 25 25"
      fill={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6666 3.16671H18.3333V2.00004C18.3333 1.69062 18.2104 1.39388 17.9916 1.17508C17.7728 0.95629 17.4761 0.833374 17.1666 0.833374C16.8572 0.833374 16.5605 0.95629 16.3417 1.17508C16.1229 1.39388 16 1.69062 16 2.00004V3.16671H8.99998V2.00004C8.99998 1.69062 8.87706 1.39388 8.65827 1.17508C8.43948 0.95629 8.14273 0.833374 7.83331 0.833374C7.52389 0.833374 7.22715 0.95629 7.00836 1.17508C6.78956 1.39388 6.66665 1.69062 6.66665 2.00004V3.16671H4.33331C3.40506 3.16671 2.51482 3.53546 1.85844 4.19183C1.20206 4.84821 0.833313 5.73845 0.833313 6.66671V20.6667C0.833313 21.595 1.20206 22.4852 1.85844 23.1416C2.51482 23.798 3.40506 24.1667 4.33331 24.1667H20.6666C21.5949 24.1667 22.4851 23.798 23.1415 23.1416C23.7979 22.4852 24.1666 21.595 24.1666 20.6667V6.66671C24.1666 5.73845 23.7979 4.84821 23.1415 4.19183C22.4851 3.53546 21.5949 3.16671 20.6666 3.16671ZM21.8333 20.6667C21.8333 20.9761 21.7104 21.2729 21.4916 21.4917C21.2728 21.7105 20.9761 21.8334 20.6666 21.8334H4.33331C4.02389 21.8334 3.72715 21.7105 3.50836 21.4917C3.28956 21.2729 3.16665 20.9761 3.16665 20.6667V12.5H21.8333V20.6667ZM21.8333 10.1667H3.16665V6.66671C3.16665 6.35729 3.28956 6.06054 3.50836 5.84175C3.72715 5.62296 4.02389 5.50004 4.33331 5.50004H6.66665V6.66671C6.66665 6.97613 6.78956 7.27287 7.00836 7.49166C7.22715 7.71046 7.52389 7.83337 7.83331 7.83337C8.14273 7.83337 8.43948 7.71046 8.65827 7.49166C8.87706 7.27287 8.99998 6.97613 8.99998 6.66671V5.50004H16V6.66671C16 6.97613 16.1229 7.27287 16.3417 7.49166C16.5605 7.71046 16.8572 7.83337 17.1666 7.83337C17.4761 7.83337 17.7728 7.71046 17.9916 7.49166C18.2104 7.27287 18.3333 6.97613 18.3333 6.66671V5.50004H20.6666C20.9761 5.50004 21.2728 5.62296 21.4916 5.84175C21.7104 6.06054 21.8333 6.35729 21.8333 6.66671V10.1667Z"
        fill={`${color}`}
      />
    </svg>
  </div>
);

export const LayerSvg = ({
  color = "#24463B",
  width = "100%",
  height = "100%",
}: SvgProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 26 26"
      fill={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.12504 9.07504L12.375 15.575C12.5651 15.6847 12.7806 15.7425 13 15.7425C13.2195 15.7425 13.435 15.6847 13.625 15.575L24.875 9.07504C25.064 8.96597 25.2211 8.80936 25.3307 8.62077C25.4403 8.43218 25.4987 8.21818 25.5 8.00004C25.5009 7.77977 25.4436 7.56319 25.3338 7.37222C25.2241 7.18125 25.0658 7.02267 24.875 6.91254L13.625 0.425037C13.435 0.315326 13.2195 0.257568 13 0.257568C12.7806 0.257568 12.5651 0.315326 12.375 0.425037L1.12504 6.91254C0.934283 7.02267 0.776015 7.18125 0.666261 7.37222C0.556507 7.56319 0.499164 7.77977 0.500038 8.00004C0.501355 8.21818 0.559737 8.43218 0.669381 8.62077C0.779026 8.80936 0.936116 8.96597 1.12504 9.07504ZM13 3.00004L21.75 8.00004L13 13L4.25004 8.00004L13 3.00004ZM23.625 11.9625L13 18L2.37504 11.9125C2.23237 11.8299 2.07476 11.7763 1.91129 11.7548C1.74782 11.7333 1.58171 11.7444 1.42253 11.7874C1.26336 11.8304 1.11426 11.9044 0.983827 12.0053C0.853393 12.1061 0.744201 12.2318 0.662538 12.375C0.499573 12.6621 0.45674 13.0019 0.543386 13.3204C0.630032 13.6388 0.839124 13.9101 1.12504 14.075L12.375 20.575C12.5651 20.6847 12.7806 20.7425 13 20.7425C13.2195 20.7425 13.435 20.6847 13.625 20.575L24.875 14.075C25.161 13.9101 25.37 13.6388 25.4567 13.3204C25.5433 13.0019 25.5005 12.6621 25.3375 12.375C25.2559 12.2318 25.1467 12.1061 25.0162 12.0053C24.8858 11.9044 24.7367 11.8304 24.5775 11.7874C24.4184 11.7444 24.2523 11.7333 24.0888 11.7548C23.9253 11.7763 23.7677 11.8299 23.625 11.9125V11.9625ZM23.625 16.9625L13 23L2.37504 16.9125C2.23237 16.8299 2.07476 16.7763 1.91129 16.7548C1.74782 16.7333 1.58171 16.7444 1.42253 16.7874C1.26336 16.8304 1.11426 16.9044 0.983827 17.0053C0.853393 17.1061 0.744201 17.2318 0.662538 17.375C0.499573 17.6621 0.45674 18.0019 0.543386 18.3204C0.630032 18.6388 0.839124 18.9101 1.12504 19.075L12.375 25.575C12.5651 25.6847 12.7806 25.7425 13 25.7425C13.2195 25.7425 13.435 25.6847 13.625 25.575L24.875 19.075C25.161 18.9101 25.37 18.6388 25.4567 18.3204C25.5433 18.0019 25.5005 17.6621 25.3375 17.375C25.2559 17.2318 25.1467 17.1061 25.0162 17.0053C24.8858 16.9044 24.7367 16.8304 24.5775 16.7874C24.4184 16.7444 24.2523 16.7333 24.0888 16.7548C23.9253 16.7763 23.7677 16.8299 23.625 16.9125V16.9625Z"
        fill={`${color}`}
      />
    </svg>
  </div>
);

export const BDSvg = ({
  color = "#24463B",
  width = "100%",
  height = "100%",
}: SvgProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 21 27"
      fill={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0479 4.40169C20.0479 4.38239 20.0479 4.36308 20.0479 4.34378C20.0479 3.10553 18.9241 2.17189 16.7072 1.56805C15.0266 1.11008 12.8124 0.858032 10.4732 0.858032C8.13392 0.858032 5.91966 1.11008 4.23913 1.56805C2.02487 2.17189 0.898438 3.10553 0.898438 4.34378C0.898438 4.36308 0.898438 4.38239 0.898438 4.40169V23.1132C0.898438 24.3514 2.02487 25.2851 4.23913 25.8889C5.91966 26.3469 8.13392 26.5989 10.4732 26.5989C12.8124 26.5989 15.0266 26.3469 16.7072 25.8889C18.9241 25.2851 20.0479 24.3514 20.0479 23.1132V4.40169ZM5.45031 3.75388C6.85353 3.44231 8.63706 3.27124 10.4732 3.27124C12.3092 3.27124 14.0928 3.44285 15.496 3.75388C16.3934 3.95337 16.9668 4.17217 17.3063 4.34378C16.9668 4.51485 16.3945 4.73364 15.496 4.93367C14.0928 5.24524 12.3092 5.41631 10.4732 5.41631C8.63706 5.41631 6.85246 5.24471 5.45031 4.93367C4.55292 4.73418 3.97951 4.51538 3.63997 4.34378C3.97951 4.17271 4.55292 3.95391 5.45031 3.75388ZM17.6341 22.9137C17.4238 23.0794 16.8048 23.4113 15.4949 23.7025C14.0917 24.0141 12.3082 24.1852 10.4721 24.1852C8.63599 24.1852 6.85246 24.0136 5.44924 23.7025C4.13936 23.4113 3.51821 23.0794 3.31009 22.9137V19.5352C3.59616 19.6424 3.90549 19.7409 4.23805 19.8307C5.91966 20.287 8.13392 20.5391 10.4732 20.5391C12.8124 20.5391 15.0266 20.287 16.7072 19.8291C17.0412 19.7379 17.3505 19.6394 17.6351 19.5336L17.6341 22.9137ZM17.6341 16.8538C17.4238 17.0196 16.8048 17.3515 15.4949 17.6427C14.0917 17.9543 12.3082 18.1253 10.4721 18.1253C8.63599 18.1253 6.85246 17.9537 5.44924 17.6427C4.13936 17.3515 3.51821 17.0196 3.31009 16.8538V13.2608C3.72176 13.4108 4.14153 13.5376 4.5674 13.6405C6.20127 14.0427 8.30074 14.2647 10.4732 14.2647C12.6456 14.2647 14.745 14.0427 16.3778 13.64C16.8033 13.537 17.2227 13.4102 17.6341 13.2603V16.8538ZM17.6341 10.5795C17.4238 10.7452 16.8048 11.0772 15.4944 11.3684C14.0917 11.6799 12.3076 11.851 10.4721 11.851C8.63652 11.851 6.85246 11.6794 5.44978 11.3684C4.13936 11.0772 3.51874 10.7452 3.31009 10.5795V6.82563C3.59616 6.93288 3.90549 7.03137 4.23805 7.12111C5.91966 7.57747 8.13392 7.82952 10.4732 7.82952C12.8124 7.82952 15.0266 7.57748 16.7072 7.1195C17.0412 7.02834 17.3505 6.92984 17.6351 6.82402L17.6341 10.5795Z"
        fill={`${color}`}
      />
    </svg>
  </div>
);

export const BarSvg = ({
  color = "#24463B",
  width = "100%",
  height = "100%",
}: SvgProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 17 18"
      fill={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.333374 5.73337H3.83337V17.1667H0.333374V5.73337ZM6.86671 0.833374H10.1334V17.1667H6.86671V0.833374ZM13.4 10.1667H16.6667V17.1667H13.4V10.1667Z"
        fill={`${color}`}
      />
    </svg>
  </div>
);

export const LapinSvg = ({
  color = "#24463B",
  width = "100%",
  height = "100%",
}: SvgProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 25 28"
      fill={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9324 16.4961H21.7625L16.6442 9.98313H19.8089L12.0751 0.143677L4.34079 9.98313H7.50554L2.38615 16.4961H5.2178L0.134888 22.9619H8.62071V27.8232H15.4866V22.9619H24.0153L18.9324 16.4961ZM12.0751 4.0756L14.8107 7.55437H9.33948L12.0751 4.0756ZM10.5963 9.98313H13.5556L16.7665 14.0673H7.38699L10.5963 9.98313ZM13.0556 25.3939H11.0479V22.9619H13.0556V25.3939ZM5.13412 20.5326L8.30692 16.4961H15.8428L19.0156 20.5326H5.13412Z"
        fill={`${color}`}
      />
    </svg>
  </div>
);

export const CompassSvg = ({
  color = "#24463B",
  width = "100%",
  height = "100%",
}: SvgProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 25 24"
      fill={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4999 0.332764C6.05992 0.332764 0.833252 5.55816 0.833252 11.9966C0.833252 18.435 6.05992 23.6604 12.4999 23.6604C18.9399 23.6604 24.1666 18.435 24.1666 11.9966C24.1666 5.55816 18.9399 0.332764 12.4999 0.332764ZM12.4999 21.3277C7.35492 21.3277 3.16659 17.1404 3.16659 11.9966C3.16659 6.85285 7.35492 2.66553 12.4999 2.66553C17.6449 2.66553 21.8333 6.85285 21.8333 11.9966C21.8333 17.1404 17.6449 21.3277 12.4999 21.3277ZM6.08325 18.4117L14.8449 14.341L18.9166 5.58149L10.1549 9.65217L6.08325 18.4117ZM12.4999 10.7136C13.2116 10.7136 13.7833 11.2851 13.7833 11.9966C13.7833 12.7081 13.2116 13.2796 12.4999 13.2796C11.7883 13.2796 11.2166 12.7081 11.2166 11.9966C11.2166 11.2851 11.7883 10.7136 12.4999 10.7136Z"
        fill={`${color}`}
      />
    </svg>
  </div>
);

export const FilterSvg = ({
  color = "#24463B",
  width = "100%",
  height = "100%",
}: SvgProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 14 14"
      fill={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6666 0.333252H2.33331C1.80288 0.333252 1.29417 0.543966 0.9191 0.919038C0.544027 1.29411 0.333313 1.80282 0.333313 2.33325V3.11325C0.333218 3.38855 0.389957 3.6609 0.49998 3.91325V3.95325C0.594166 4.16723 0.727575 4.36169 0.893313 4.52659L4.99998 8.60659V12.9999C4.99975 13.1132 5.0284 13.2247 5.08323 13.3238C5.13805 13.423 5.21724 13.5065 5.31331 13.5666C5.41941 13.6323 5.54183 13.667 5.66665 13.6666C5.77101 13.666 5.87376 13.6408 5.96665 13.5933L8.63331 12.2599C8.74326 12.2045 8.83571 12.1198 8.90043 12.015C8.96515 11.9103 8.99961 11.7897 8.99998 11.6666V8.60659L13.08 4.52659C13.2457 4.36169 13.3791 4.16723 13.4733 3.95325V3.91325C13.5925 3.66287 13.6584 3.39044 13.6666 3.11325V2.33325C13.6666 1.80282 13.4559 1.29411 13.0809 0.919038C12.7058 0.543966 12.1971 0.333252 11.6666 0.333252ZM7.85998 7.85992C7.79819 7.92221 7.74931 7.99609 7.71613 8.07731C7.68296 8.15854 7.66614 8.24551 7.66665 8.33325V11.2533L6.33331 11.9199V8.33325C6.33382 8.24551 6.317 8.15854 6.28383 8.07731C6.25065 7.99609 6.20177 7.92221 6.13998 7.85992L2.60665 4.33325H11.3933L7.85998 7.85992ZM12.3333 2.99992H1.66665V2.33325C1.66665 2.15644 1.73688 1.98687 1.86191 1.86185C1.98693 1.73682 2.1565 1.66659 2.33331 1.66659H11.6666C11.8435 1.66659 12.013 1.73682 12.1381 1.86185C12.2631 1.98687 12.3333 2.15644 12.3333 2.33325V2.99992Z"
        fill={`${color}`}
      />
    </svg>
  </div>
);

export const LentillesSvg = ({
  color = "#24463B",
  width = "100%",
  height = "100%",
}: SvgProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 21 15"
      fill={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8393 5.22848C12.1644 7.33899 12.2596 9.5006 12.7524 11.5789L11.8393 5.22848Z"
        fill={`${color}`}
      />
      <path
        d="M11.6929 5.26916C11.945 6.9158 12.0587 8.58079 12.3296 10.2249C12.4065 10.6928 12.4968 11.1581 12.6055 11.619C12.6507 11.8096 12.9434 11.7287 12.8988 11.5387C12.5157 9.91437 12.3738 8.24987 12.1753 6.59729C12.1192 6.12646 12.0577 5.65465 11.9862 5.18829C11.9733 5.10643 11.8716 5.06327 11.7991 5.08212C11.7608 5.09368 11.7284 5.11955 11.7086 5.15438C11.6888 5.18921 11.6832 5.23032 11.6929 5.26916Z"
        fill={`${color}`}
      />
      <path
        d="M12.3911 3.87456C12.3098 3.14972 12.2919 1.64746 13.5052 1.24263C14.7184 0.83779 15.5159 1.62167 15.8339 2.86247"
        fill={`${color}`}
      />
      <path
        d="M12.3911 3.87456C12.3098 3.14972 12.2919 1.64746 13.5052 1.24263C14.7184 0.83779 15.5159 1.62167 15.8339 2.86247"
        fill={`${color}`}
      />
      <path
        d="M12.543 3.87456C12.469 3.20827 12.4785 2.42687 12.8903 1.86278C13.3608 1.21782 14.3998 1.08684 14.9958 1.62365C15.3645 1.95556 15.565 2.43183 15.688 2.90266C15.7377 3.09168 16.0299 3.01131 15.9808 2.82179C15.7471 1.9243 15.1606 0.986131 14.1274 0.983154C13.6525 0.983154 13.1513 1.15332 12.8114 1.49118C12.5102 1.78886 12.3435 2.20064 12.2686 2.61292C12.1977 3.02984 12.188 3.45485 12.2398 3.87456C12.2418 3.91382 12.2584 3.95091 12.2864 3.97848C12.3145 4.00605 12.3518 4.02208 12.3911 4.0234C12.4666 4.0234 12.5524 3.95295 12.543 3.87158V3.87456Z"
        fill={`${color}`}
      />
      <path
        d="M5.23954 2.93441C6.0608 -0.120224 9.71053 1.16821 8.44218 4.07549L5.23954 2.93441Z"
        fill={`${color}`}
      />
      <path
        d="M5.38593 2.97459C5.51247 2.51171 5.72535 2.06321 6.08511 1.73428C6.34471 1.4945 6.67915 1.35168 7.03191 1.32994C7.72662 1.29968 8.32904 1.77645 8.50172 2.45962C8.63074 2.97211 8.51711 3.51934 8.31117 3.9976C8.29222 4.03263 8.28732 4.07356 8.29746 4.11208C8.30759 4.1506 8.33202 4.18381 8.36576 4.20498C8.42928 4.24318 8.54093 4.22582 8.57368 4.1509C8.79202 3.64436 8.91607 3.09912 8.82874 2.54793C8.76542 2.13119 8.56059 1.74894 8.24865 1.46539C7.94411 1.20019 7.55759 1.0478 7.15398 1.0338C6.75036 1.0198 6.35421 1.14503 6.03201 1.38849C5.54274 1.75562 5.25145 2.31227 5.09316 2.89273C5.04353 3.08176 5.33432 3.16213 5.38593 2.9736V2.97459Z"
        fill={`${color}`}
      />
      <path
        d="M8.70269 7.40398C9.54181 6.48318 11.1342 6.62457 12.0418 7.26556L11.8656 5.49837C11.0742 4.95611 9.63262 4.97645 8.82824 5.49837L8.70269 7.40398Z"
        fill={`${color}`}
      />
      <path
        d="M8.81038 7.51164C9.60731 6.65285 11.0662 6.76845 11.9654 7.39704C12.0552 7.46004 12.205 7.37769 12.1936 7.26606L12.0234 5.55543C12.0145 5.46861 12.0011 5.40659 11.9197 5.35251C11.7728 5.2566 11.6144 5.17943 11.4483 5.12281C10.7566 4.87475 9.92787 4.88516 9.23763 5.13372C9.07527 5.18852 8.91989 5.26211 8.77465 5.35301C8.69426 5.4056 8.67838 5.46662 8.6754 5.55146L8.63471 6.10712L8.54936 7.40448C8.53646 7.59995 8.84065 7.59896 8.85305 7.40448L8.9786 5.49887L8.90367 5.62985C9.32992 5.35797 9.84997 5.25378 10.3507 5.2518C10.8513 5.24981 11.3689 5.34805 11.7897 5.62985L11.7143 5.49887L11.8904 7.26606L12.1192 7.13508C11.3252 6.57992 10.1839 6.41967 9.28774 6.80814C9.02542 6.9214 8.78965 7.08819 8.59551 7.29781C8.46302 7.4402 8.67739 7.65552 8.81038 7.51164Z"
        fill={`${color}`}
      />
      <path
        d="M8.84164 5.37484C8.57864 7.27698 8.78408 11.8741 7.1778 12.9397C4.5354 15.0011 0.95514 13.4403 0.478764 10.1947C0.285733 7.49577 2.91027 5.46067 4.29374 3.36653C5.8365 2.54297 8.93245 3.28715 8.84164 5.37484ZM7.25372 8.09062C6.91827 7.40349 6.37193 6.77887 5.60774 6.80814V6.78879C1.72875 6.12597 -0.42238 10.8367 3.33454 12.7368C6.01217 13.8705 8.54688 10.5226 7.25322 8.09161L7.25372 8.09062Z"
        fill={`${color}`}
      />
      <path
        d="M4.15976 3.28963C3.48142 4.31264 2.62742 5.20516 1.88358 6.17905C1.15313 7.13558 0.494146 8.20274 0.345279 9.41924C0.302357 9.71919 0.302357 10.0237 0.345279 10.3237C0.39102 10.6001 0.461775 10.8717 0.556671 11.1353C0.737662 11.6381 1.00649 12.1047 1.35063 12.5136C2.00312 13.2882 2.91109 13.8041 3.91065 13.9682C4.96701 14.1284 6.04522 13.8906 6.93614 13.3009C7.29838 13.0628 7.61845 12.8048 7.84969 12.4352C8.08093 12.0656 8.23376 11.6364 8.34889 11.2132C8.62578 10.1962 8.71858 9.1295 8.79251 8.08318C8.82824 7.57961 8.85504 7.07505 8.88729 6.57099C8.90119 6.3522 8.91607 6.13341 8.93691 5.91462C8.95329 5.72808 8.98654 5.52119 8.99646 5.35152C9.04608 4.40889 8.36824 3.64982 7.55741 3.27177C6.7178 2.88083 5.7055 2.76969 4.80684 3.00833C4.60255 3.06204 4.40496 3.13859 4.21782 3.23655C4.04464 3.32783 4.19797 3.59028 4.37115 3.499C5.12194 3.1021 6.07717 3.11748 6.87709 3.34222C7.65368 3.56052 8.45111 4.05763 8.6501 4.89161C8.74091 5.27313 8.65506 5.65862 8.62429 6.04312C8.58807 6.49757 8.56375 6.95251 8.53646 7.40746C8.47443 8.42252 8.40744 9.44156 8.21689 10.4432C8.13694 10.8978 8.01313 11.3436 7.84721 11.7743C7.71223 12.1092 7.52962 12.4396 7.26216 12.6857C6.90062 13.0047 6.48595 13.258 6.03698 13.4339C5.57726 13.6187 5.08697 13.7158 4.59147 13.7201C3.64297 13.7213 2.7262 13.3787 2.01111 12.7557C1.64031 12.4331 1.33068 12.0464 1.09706 11.6141C0.976459 11.3889 0.876796 11.153 0.799325 10.9096C0.717944 10.6576 0.638548 10.3837 0.62515 10.1183C0.565106 8.9509 1.07175 7.87778 1.71287 6.93465C2.38724 5.94538 3.21048 5.07022 3.93844 4.12213C4.10716 3.90185 4.27042 3.67562 4.42425 3.44541C4.53044 3.27921 4.26794 3.1274 4.15976 3.28963Z"
        fill={`${color}`}
      />
      <path
        d="M3.41294 12.6063C2.81052 12.2997 2.25971 11.8711 1.90938 11.2842C1.62653 10.8123 1.49702 10.2644 1.5387 9.71592C1.62405 8.59617 2.4056 7.6322 3.41096 7.17973C4.08235 6.8766 4.84554 6.81409 5.56705 6.93515L5.45887 6.78879V6.80814C5.45926 6.84828 5.47539 6.88667 5.50378 6.91506C5.53217 6.94344 5.57057 6.95956 5.61072 6.95995C6.3754 6.94011 6.84185 7.60491 7.15199 8.21713C7.42065 8.75851 7.51413 9.37006 7.41946 9.96696C7.24181 11.1115 6.46174 12.2139 5.36161 12.6351C4.72048 12.8785 4.00971 12.8625 3.38019 12.5905C3.30377 12.5582 3.21395 12.6247 3.19311 12.6961C3.1683 12.7834 3.22388 12.8514 3.2993 12.8832C3.92026 13.1466 4.61381 13.1847 5.25989 12.9908C5.87502 12.7933 6.42127 12.4249 6.83491 11.9286C7.69734 10.9131 8.0318 9.46091 7.48595 8.21614C7.14604 7.44913 6.53171 6.63202 5.60774 6.65633L5.75959 6.80814V6.78879C5.76004 6.75513 5.74933 6.72227 5.72913 6.69535C5.70893 6.66842 5.68038 6.64894 5.64794 6.63995C4.93734 6.52088 4.19995 6.55512 3.52012 6.80715C2.92485 7.02373 2.3973 7.39356 1.99076 7.87927C1.21566 8.8219 0.986898 10.1287 1.5382 11.238C1.89846 11.9634 2.54604 12.5031 3.25812 12.8658C3.43329 12.9561 3.58712 12.6946 3.41294 12.6063Z"
        fill={`${color}`}
      />
      <path
        d="M20.5158 9.93421C20.6151 13.934 14.1641 15.2269 12.7961 11.4648L11.885 5.29C11.619 3.60318 14.5259 2.64864 15.8339 2.859C16.8373 3.00089 17.5668 3.99214 18.063 4.78346C19.1611 6.54321 20.7426 7.85893 20.5158 9.93421ZM16.3475 6.80417L16.4418 6.82749C15.1616 7.0046 13.4024 7.75226 13.4148 9.26941C13.1772 11.5491 15.2543 12.9546 17.3569 12.7646C21.1798 12.2362 19.8494 6.38594 16.3465 6.80417H16.3475Z"
        fill={`${color}`}
      />
      <path
        d="M18.1925 4.70706C17.7955 4.06954 17.3296 3.4211 16.6795 3.02024C16.155 2.69478 15.5556 2.63872 14.9551 2.71214C14.3592 2.78426 13.7791 2.95318 13.2377 3.21224C12.7365 3.45286 12.2398 3.79419 11.9475 4.27841C11.7406 4.62023 11.689 4.99034 11.7465 5.3803L12.6214 11.3209C12.6298 11.3799 12.6343 11.4419 12.6477 11.5C12.6938 11.6984 12.8095 11.9008 12.9092 12.076C13.162 12.5186 13.5118 12.8982 13.9324 13.1863C14.7497 13.7489 15.7913 13.9354 16.7673 13.8313C17.7737 13.7231 18.7612 13.3247 19.51 12.6346C19.8738 12.3037 20.1658 11.9016 20.3679 11.4533C20.4738 11.2164 20.5524 10.9683 20.6022 10.7136C20.628 10.5777 20.6463 10.4403 20.6567 10.3023C20.6677 10.1634 20.6567 10.0225 20.6716 9.8841C20.7451 9.1037 20.5486 8.34315 20.1928 7.65155C19.837 6.95995 19.3442 6.33831 18.8822 5.71022C18.6421 5.38327 18.4074 5.05285 18.1915 4.70904C18.0878 4.54383 17.8248 4.69614 17.9295 4.86234C18.3483 5.53062 18.844 6.14532 19.2986 6.78929C19.7184 7.38463 20.1104 8.01868 20.2861 8.7331C20.3764 9.10359 20.4046 9.48652 20.3694 9.86624C20.3466 10.1232 20.358 10.3768 20.3094 10.6323C20.2202 11.0966 20.0292 11.5355 19.7501 11.9172C19.1974 12.6748 18.3314 13.1714 17.4343 13.4026C16.5371 13.6338 15.5422 13.6145 14.6807 13.2483C14.2539 13.0682 13.8714 12.7973 13.5597 12.4545C13.3972 12.2735 13.2571 12.0736 13.1424 11.8592C13.067 11.7198 12.9772 11.5615 12.9439 11.4062C12.9022 11.2177 12.8869 11.0187 12.8586 10.8282L12.0944 5.64969C12.0726 5.50085 12.0448 5.34904 12.0294 5.19772C11.9237 4.09434 13.2302 3.46129 14.1041 3.19537C14.6003 3.04653 15.1283 2.94731 15.6469 2.986C16.3351 3.03562 16.8939 3.48213 17.3315 4.00504C17.5516 4.27474 17.7528 4.55918 17.934 4.85639C18.0337 5.02557 18.2967 4.87326 18.1925 4.70706Z"
        fill={`${color}`}
      />
      <path
        d="M17.3564 12.6128C16.0622 12.7249 14.639 12.2248 13.9433 11.0748C13.7778 10.7993 13.6614 10.4971 13.5994 10.1818C13.531 9.83449 13.5473 9.48175 13.5707 9.13C13.6109 8.51629 14.0143 8.01918 14.508 7.68727C15.0921 7.29484 15.7888 7.07406 16.4815 6.97682C16.6343 6.95499 16.6175 6.71784 16.4815 6.68361L16.3872 6.66029L16.3465 6.95797C16.9427 6.8809 17.5473 7.01142 18.0585 7.32758C18.5314 7.62525 18.8981 8.07177 19.1472 8.56789C19.6281 9.53086 19.6931 10.7856 19.04 11.6806C18.6381 12.2323 17.9866 12.524 17.3162 12.6192C17.2343 12.6306 17.1911 12.7343 17.21 12.8063C17.2328 12.8936 17.3157 12.9234 17.3966 12.9119C18.055 12.8187 18.6957 12.5403 19.1418 12.0348C19.5422 11.5813 19.7551 11.0024 19.8072 10.404C19.9129 9.19251 19.3671 7.90656 18.384 7.18172C17.7962 6.75412 17.0682 6.56514 16.3465 6.65285C16.1882 6.67121 16.1267 6.90637 16.3063 6.95053L16.4006 6.97434V6.68113C15.7402 6.7744 15.0782 6.98228 14.505 7.32609C13.9398 7.66544 13.4411 8.17744 13.3047 8.84274C13.2757 9.02102 13.2583 9.201 13.2526 9.38153C13.2387 9.5726 13.2417 9.76451 13.2615 9.95505C13.2983 10.3158 13.3979 10.6674 13.5558 10.9939C13.858 11.6171 14.382 12.1186 14.9894 12.4441C15.7164 12.826 16.5384 12.9897 17.3564 12.9154C17.5494 12.9 17.5514 12.5959 17.3564 12.6128Z"
        fill={`${color}`}
      />
      <path
        d="M2.33961 9.41874C2.20711 9.8459 2.28998 10.3286 2.45324 10.7359C2.62146 11.1636 2.88595 11.5794 3.2735 11.8378C3.46678 11.9721 3.69769 12.0416 3.93298 12.0363C4.128 12.0288 4.12899 11.7252 3.93298 11.7327C3.45065 11.7515 3.0894 11.3139 2.87702 10.9299C2.64826 10.5132 2.48649 9.96844 2.63238 9.49862C2.69044 9.31108 2.39717 9.23121 2.33961 9.41775V9.41874Z"
        fill={`${color}`}
      />
      <path
        d="M14.4276 9.37656C14.31 10.5936 15.3531 11.7083 16.5118 11.9108C16.7028 11.9445 16.7852 11.6518 16.5927 11.6181C15.5546 11.4355 14.6246 10.4705 14.7308 9.37656C14.7497 9.18208 14.4455 9.18357 14.4266 9.37656H14.4276Z"
        fill={`${color}`}
      />
    </svg>
  </div>
);

export const ThermometerSvg = ({
  color = "#24463B",
  width = "100%",
  height = "100%",
}: SvgProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 14 21"
      fill={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.125 8.87471H10.3741V7.72413H11.9914C12.1781 7.72413 12.3572 7.64996 12.4892 7.51793C12.6212 7.3859 12.6954 7.20683 12.6954 7.02011C12.6954 6.83339 12.6212 6.65432 12.4892 6.52229C12.3572 6.39026 12.1781 6.31608 11.9914 6.31608H10.3741V5.16551H13.125C13.3054 5.16551 13.4783 5.09388 13.6058 4.96638C13.7333 4.83887 13.8049 4.66594 13.8049 4.48562C13.8049 4.30531 13.7333 4.13238 13.6058 4.00487C13.4783 3.87737 13.3054 3.80574 13.125 3.80574H10.3733C10.3529 2.78805 9.93221 1.81941 9.20239 1.10985C8.47257 0.400293 7.49248 0.0070061 6.47462 0.0152642C5.45675 0.0235223 4.48317 0.43266 3.76496 1.15397C3.04675 1.87527 2.6418 2.85061 2.63792 3.8685V11.2442C2.06763 11.773 1.61304 12.4142 1.30278 13.1274C0.992527 13.8405 0.833329 14.6102 0.835222 15.3879C0.835222 18.5086 3.37373 21.0471 6.49396 21.0471C9.61419 21.0471 12.1527 18.5057 12.1527 15.3859C12.154 14.6142 11.9967 13.8505 11.6908 13.142C11.3849 12.4335 10.9367 11.7954 10.3741 11.2672V10.2345H13.125C13.3054 10.2345 13.4783 10.1628 13.6058 10.0353C13.7333 9.90784 13.8049 9.73491 13.8049 9.55459C13.8049 9.37427 13.7333 9.20134 13.6058 9.07384C13.4783 8.94634 13.3054 8.87471 13.125 8.87471ZM10.488 15.3859C10.488 16.0612 10.3168 16.7254 9.99047 17.3165C9.66412 17.9076 9.19324 18.4064 8.62184 18.7662C8.05043 19.1259 7.39714 19.335 6.72302 19.3738C6.0489 19.4126 5.37595 19.2798 4.76704 18.988C4.15814 18.6961 3.63316 18.2547 3.24116 17.7049C2.84916 17.1551 2.60294 16.5149 2.52549 15.8441C2.44804 15.1733 2.54191 14.4938 2.79831 13.8692C3.05471 13.2445 3.46528 12.6951 3.99166 12.2721L4.30183 12.0223V3.8685C4.30966 3.28912 4.54531 2.73612 4.95779 2.32918C5.37027 1.92224 5.92639 1.69408 6.50582 1.69408C7.08526 1.69408 7.64138 1.92224 8.05386 2.32918C8.46634 2.73612 8.70199 3.28912 8.70982 3.8685V12.0392L9.01597 12.2886C9.47654 12.6626 9.84773 13.1348 10.1024 13.6707C10.3571 14.2066 10.4888 14.7926 10.488 15.3859Z"
        fill={`${color}`}
      />
    </svg>
  </div>
);

export const MapSvg = ({
  color = "#24463B",
  width = "100%",
  height = "100%",
}: SvgProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 19 17"
      fill={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.655 2.41877L12.405 0.668767H12.3438C12.303 0.664674 12.262 0.664674 12.2213 0.668767H12.02H11.9063H11.845L6.875 2.37502L1.905 0.668767C1.77342 0.625377 1.63341 0.613857 1.4965 0.635154C1.35959 0.656451 1.22969 0.709957 1.1175 0.791267C1.00442 0.871782 0.91211 0.978048 0.848208 1.10129C0.784307 1.22452 0.750645 1.3612 0.750003 1.50002V13.75C0.749529 13.9335 0.806719 14.1124 0.91349 14.2616C1.02026 14.4107 1.17121 14.5226 1.345 14.5813L6.595 16.3313C6.77127 16.3887 6.96124 16.3887 7.1375 16.3313L12.125 14.6688L17.095 16.375C17.1879 16.3876 17.2821 16.3876 17.375 16.375C17.558 16.3776 17.7365 16.3191 17.8825 16.2088C17.9956 16.1283 18.0879 16.022 18.1518 15.8987C18.2157 15.7755 18.2494 15.6388 18.25 15.5V3.25002C18.2505 3.06658 18.1933 2.88763 18.0865 2.73847C17.9797 2.5893 17.8288 2.47747 17.655 2.41877ZM6 14.2838L2.5 13.12V2.71627L6 3.88002V14.2838ZM11.25 13.12L7.75 14.2838V3.88002L11.25 2.71627V13.12ZM16.5 14.2838L13 13.12V2.71627L16.5 3.88002V14.2838Z"
        fill={`${color}`}
      />
    </svg>
  </div>
);

export const TrafficLightSvg = ({
  color = "#24463B",
  width = "100%",
  height = "100%",
}: SvgProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 21 19"
      fill={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 3.8125C10.2404 3.8125 9.98665 3.88948 9.77081 4.0337C9.55497 4.17792 9.38675 4.3829 9.28741 4.62273C9.18807 4.86256 9.16208 5.12646 9.21272 5.38106C9.26336 5.63566 9.38837 5.86952 9.57192 6.05308C9.75548 6.23663 9.98934 6.36164 10.2439 6.41228C10.4985 6.46292 10.7624 6.43693 11.0023 6.33759C11.2421 6.23825 11.4471 6.07003 11.5913 5.85419C11.7355 5.63835 11.8125 5.38459 11.8125 5.125C11.8125 4.7769 11.6742 4.44306 11.4281 4.19692C11.1819 3.95078 10.8481 3.8125 10.5 3.8125ZM19.25 6.4375H18.7775C19.6423 5.47653 20.1221 4.23028 20.125 2.9375C20.125 2.70544 20.0328 2.48288 19.8687 2.31878C19.7046 2.15469 19.4821 2.0625 19.25 2.0625H15.5925C15.412 1.55189 15.0779 1.10962 14.6362 0.796321C14.1944 0.483019 13.6666 0.314022 13.125 0.3125H7.875C7.33342 0.314022 6.80557 0.483019 6.36382 0.796321C5.92206 1.10962 5.58802 1.55189 5.4075 2.0625H1.75C1.51794 2.0625 1.29538 2.15469 1.13128 2.31878C0.967187 2.48288 0.875 2.70544 0.875 2.9375C0.877918 4.23028 1.35773 5.47653 2.2225 6.4375H1.75C1.51794 6.4375 1.29538 6.52969 1.13128 6.69378C0.967187 6.85788 0.875 7.08044 0.875 7.3125C0.877918 8.60528 1.35773 9.85153 2.2225 10.8125H1.75C1.51794 10.8125 1.29538 10.9047 1.13128 11.0688C0.967187 11.2329 0.875 11.4554 0.875 11.6875C0.877297 12.9509 1.33512 14.1711 2.16446 15.1242C2.9938 16.0773 4.13903 16.6994 5.39 16.8763C5.56113 17.4011 5.89339 17.8587 6.33952 18.1838C6.78565 18.509 7.32295 18.6853 7.875 18.6875H13.125C13.6771 18.6853 14.2143 18.509 14.6605 18.1838C15.1066 17.8587 15.4389 17.4011 15.61 16.8763C16.861 16.6994 18.0062 16.0773 18.8355 15.1242C19.6649 14.1711 20.1227 12.9509 20.125 11.6875C20.125 11.4554 20.0328 11.2329 19.8687 11.0688C19.7046 10.9047 19.4821 10.8125 19.25 10.8125H18.7775C19.6423 9.85153 20.1221 8.60528 20.125 7.3125C20.125 7.08044 20.0328 6.85788 19.8687 6.69378C19.7046 6.52969 19.4821 6.4375 19.25 6.4375ZM5.25 15.0738C4.64545 14.9173 4.09377 14.6019 3.6522 14.1603C3.21063 13.7187 2.89524 13.1671 2.73875 12.5625H5.25V15.0738ZM5.25 10.6987C4.64545 10.5423 4.09377 10.2269 3.6522 9.7853C3.21063 9.34373 2.89524 8.79205 2.73875 8.1875H5.25V10.6987ZM5.25 6.32375C4.64961 6.17534 4.09793 5.87388 3.64875 5.44875C3.22362 4.99957 2.92216 4.44789 2.77375 3.8475H5.25V6.32375ZM14 16.0625C14 16.2946 13.9078 16.5171 13.7437 16.6812C13.5796 16.8453 13.3571 16.9375 13.125 16.9375H7.875C7.64294 16.9375 7.42038 16.8453 7.25628 16.6812C7.09219 16.5171 7 16.2946 7 16.0625V2.9375C7 2.70544 7.09219 2.48288 7.25628 2.31878C7.42038 2.15469 7.64294 2.0625 7.875 2.0625H13.125C13.3571 2.0625 13.5796 2.15469 13.7437 2.31878C13.9078 2.48288 14 2.70544 14 2.9375V16.0625ZM17.3512 14.1637C16.9021 14.5889 16.3504 14.8903 15.75 15.0387V12.5625H18.2613C18.1028 13.1665 17.7891 13.7185 17.3512 14.1637ZM17.3512 9.78875C16.9021 10.2139 16.3504 10.5153 15.75 10.6637V8.1875H18.2613C18.1028 8.7915 17.7891 9.34353 17.3512 9.78875ZM17.3512 5.41375C16.9021 5.83888 16.3504 6.14034 15.75 6.28875V3.8125H18.2613C18.1028 4.4165 17.7891 4.96853 17.3512 5.41375ZM10.5 12.5625C10.2404 12.5625 9.98665 12.6395 9.77081 12.7837C9.55497 12.9279 9.38675 13.1329 9.28741 13.3727C9.18807 13.6126 9.16208 13.8765 9.21272 14.1311C9.26336 14.3857 9.38837 14.6195 9.57192 14.8031C9.75548 14.9866 9.98934 15.1116 10.2439 15.1623C10.4985 15.2129 10.7624 15.1869 11.0023 15.0876C11.2421 14.9883 11.4471 14.82 11.5913 14.6042C11.7355 14.3883 11.8125 14.1346 11.8125 13.875C11.8125 13.5269 11.6742 13.1931 11.4281 12.9469C11.1819 12.7008 10.8481 12.5625 10.5 12.5625ZM10.5 8.1875C10.2404 8.1875 9.98665 8.26448 9.77081 8.4087C9.55497 8.55292 9.38675 8.7579 9.28741 8.99773C9.18807 9.23756 9.16208 9.50146 9.21272 9.75606C9.26336 10.0107 9.38837 10.2445 9.57192 10.4281C9.75548 10.6116 9.98934 10.7366 10.2439 10.7873C10.4985 10.8379 10.7624 10.8119 11.0023 10.7126C11.2421 10.6133 11.4471 10.445 11.5913 10.2292C11.7355 10.0133 11.8125 9.75959 11.8125 9.5C11.8125 9.1519 11.6742 8.81806 11.4281 8.57192C11.1819 8.32578 10.8481 8.1875 10.5 8.1875Z"
        fill={`${color}`}
      />
    </svg>
  </div>
);