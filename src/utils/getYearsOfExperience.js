const CAREER_START_YEAR = 2013;

export function getYearsOfExperience() {
  const currentYear = new Date().getFullYear();
  return currentYear - CAREER_START_YEAR;
}