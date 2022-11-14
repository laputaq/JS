let password = '_-3';

if ((password.length > 3) && (password.includes('-') || password.includes('_'))) {
    console.log('Надежный пароль')
} else {
  console.log('Пароль недостаточно надёжный')
};
