import React from "react";

const InnerCircle = () => {
  return (
    <>
      <circle fill="none" strokeMiterlimit="10" cx="256" cy="256" r="224.928" />

      <line strokeMiterlimit="10" x1="256" y1="26.389" x2="256" y2="485.61" />
      <line
        fill="none"
        strokeMiterlimit="10"
        x1="485.61"
        y1="256"
        x2="26.389"
        y2="256"
      />
      <line
        fill="none"
        strokeMiterlimit="10"
        x1="418.359"
        y1="93.641"
        x2="93.641"
        y2="418.359"
      />
      <line
        fill="none"
        strokeMiterlimit="10"
        x1="418.359"
        y1="418.359"
        x2="93.641"
        y2="93.641"
      />
      <line
        fill="none"
        strokeMiterlimit="10"
        x1="168.131"
        y1="43.868"
        x2="343.866"
        y2="468.134"
      />
      <line
        fill="none"
        strokeMiterlimit="10"
        x1="468.134"
        y1="168.131"
        x2="43.868"
        y2="343.866"
      />
      <line
        fill="none"
        strokeMiterlimit="10"
        x1="343.866"
        y1="43.868"
        x2="168.131"
        y2="468.134"
      />
      <line
        fill="none"
        strokeMiterlimit="10"
        x1="468.134"
        y1="343.866"
        x2="43.868"
        y2="168.131"
      />
    </>
  );
};

export default InnerCircle;
