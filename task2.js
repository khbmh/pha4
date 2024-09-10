function sendNotification(email) {
 if (email.includes(`@`)) {
    let splitedEmail = email.split(``);
    let indexofAt = email.indexOf('@');
    let username = splitedEmail.slice(0, indexofAt).join('');
    let domain = splitedEmail
      .slice(indexofAt + 1, splitedEmail.length)
      .join('');
    return `${username} sent you an email from ${domain}`;
  } else {
    return 'Invalid Email';
  }
}