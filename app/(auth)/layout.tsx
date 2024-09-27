import * as React from 'react';

export default function RootLayout(props: { children: React.ReactNode }) {
  return <main>{props.children}</main>;
}
