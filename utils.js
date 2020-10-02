export const trimText = (text, limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;

export const formatDate = date => {
  const theDate = new Date(date);
  const leng = 'ko';
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return theDate.toLocaleDateString(leng, options);
};
