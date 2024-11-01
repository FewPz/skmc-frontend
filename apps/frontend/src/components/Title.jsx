import React from 'react';

const Title = ({ text = 'Title', color = 'Text-Color'}) => {
  return (
    <div className={`pt-4 text-center text-${color}`}>
      <span className={`p-5 mt-8 mb-3 inline-block bg-[#49BF66] text-6xl`}> {text} </span>
    </div>
  );
};

export default Title;