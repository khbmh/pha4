function waitingTime(waitingTimes, serialNumber) {
  if (
    serialNumber > waitingTimes.length &&
    Array.isArray(waitingTime) &&
    typeof serialNumber === 'number'
  ) {
    let sum = 0;
    for (const time of waitingTimes) {
      sum += time;
    }
    let average = Math.round(sum / waitingTimes.length);
    let remainingCandidates = serialNumber - waitingTimes.length - 1;
    let waitingTime = remainingCandidates * average;
    return waitingTime;
  } else {
    return 'Invalid Input';
  }
}
