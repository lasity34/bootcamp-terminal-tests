

export default function yearsAgo(prevYear) {
	const date = new Date();
  	const currentYear = date.getFullYear();
  return  currentYear - prevYear;
}