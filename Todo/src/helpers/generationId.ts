export const generationId = () => {
  return (Math.random() + 1).toString(36).substring(7);
};
