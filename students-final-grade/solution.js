const excellent = (exam, projects) => exam > 90 || projects > 10;
const good = (exam, projects) => exam > 75 && projects >= 5;
const satisfactorily = (exam, projects) => exam > 50 && projects >= 2;

const createGrade = (predicate, grade) =>
  (exam, projects) => predicate(exam, projects) ? grade : 0;

export default (exam, projects) => [
  createGrade(excellent, 100),
  createGrade(good, 90),
  createGrade(satisfactorily, 75)]
  .map(predicat => predicat(exam, projects))
  .sort((a, b) => b - a)
  .shift();
