import React from 'react';

interface MainProps {
  children: React.ReactNode;
}
const Section = ({ children }: MainProps) => {
  return (
    <section className="grow basis-full shrink py-8 pr-8">{children}</section>
  );
};

export default Section;
