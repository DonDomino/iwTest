import moment from "moment";

const loadPosts = (url, numPosts) => {
  return dispatch => {
    return fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(post => {
        post.created_at = moment(post.created_at).format("DD/MM/YYYY HH:MM");
      })
      dispatch({
        type: 'SET_POSTS',
        payload: data.reverse().slice(0,numPosts)
      });
    });
  }
}

export { loadPosts }