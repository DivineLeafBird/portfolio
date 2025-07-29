// Experience Years Calculation Function
export default function getExperienceYears(startYear) {
  const startDate = new Date(startYear, 0); // January of that year
  const currentDate = new Date();
  let experienceYears = currentDate.getFullYear() - startDate.getFullYear();

  // Check if the current date is before the start date in the year
  const hasNotCompletedYear =
    currentDate.getMonth() < startDate.getMonth() ||
    (currentDate.getMonth() === startDate.getMonth() &&
      currentDate.getDate() < startDate.getDate());

  if (hasNotCompletedYear) {
    experienceYears -= 1;
  }

  return experienceYears;
}
