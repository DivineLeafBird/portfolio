// Age Calculation Function

export default function getAge(birthDate) {
  const birth = new Date(birthDate); // accepts string, Date object, or timestamp "YYYY-MM-DD"
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();

  // Check if birthday has not occurred yet this year
  const hasNotHadBirthdayThisYear =
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() < birth.getDate());

  if (hasNotHadBirthdayThisYear) {
    age -= 1;
  }

  return age;
}
