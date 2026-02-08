//callback hell

getUser(1, (err, user) => {
  if (err) throw err;
  getPosts(user.id, (err, posts) => {
    if (err) throw err;
  });
});
