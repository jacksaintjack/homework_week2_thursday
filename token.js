var token = '243f4a6cb6a56d69751ad9c900584129f5b841cb';

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});
