function calculateFinalScore(obj) {
  if (
    typeof obj.name === 'string' &&
    typeof obj.testScore === 'number' &&
    obj.testScore <= 50 &&
    typeof obj.schoolGrade === 'number' &&
    obj.schoolGrade <= 30 &&
    typeof obj.isFFamily === 'boolean'
  ) {
    let finalScore = obj.testScore + obj.schoolGrade + (obj.isFFamily ? 20 : 0);
    return !!(finalScore >= 80);
  } else {
    return 'Invalid Input';
  }
}