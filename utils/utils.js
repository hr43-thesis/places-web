import axios from 'axios';

export const followUser = (user) => {
  axios.post('/api/users/:id/follows', {
    user,
  })
  .then(response => {
    console.log(response);
    console.log('followed');
  })
  .catch(error => {
    console.log(error);
  });
};