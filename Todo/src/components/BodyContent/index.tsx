// Lib
import { ReactNode } from 'react';

export type BodyContentProps = {
  children: ReactNode | JSX.Element;
};

const BodyContent = ({ children }: BodyContentProps) => {
  return <div className='content-wrapper'>{children}</div>;
};

export default BodyContent;
