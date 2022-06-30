export const bookmarkAction = () => {};
export const homeAction = () => {
  return (dispatch, getState) => {
    dispatch({type: 'try', payload: 'Akash'});
  };
};
