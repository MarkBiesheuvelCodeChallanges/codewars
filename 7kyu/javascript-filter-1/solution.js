function searchNames( logins ){
  return logins.filter(function(login) {
    return login[0].match(/_$/);
  });
}