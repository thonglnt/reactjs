export type SpinnerProps = {
  className?: string;
};

export const Spinner = ({ className }: SpinnerProps) => {
  return <div className={`loader ${className}`}></div>;
};

export default Spinner;
