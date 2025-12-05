export const getFooterText = () => {
  const today = new Date();
  const year = today.getFullYear();

  return `Copyright © ${year}, SwapWeb. All Rights Reserved.`;
};
