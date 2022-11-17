// const STATUS_CHEKCKED = 'STATUS_CHEKCKED';

// const categoriesReducer = (state = '', action) => {
//   switch (action.type) {
//     case STATUS_CHEKCKED:
//       return 'Under construction';
//     default:
//       return state;
//   }
// };
// export const checkStatus = () => ({ type: STATUS_CHEKCKED });
// export default categoriesReducer;

const CHECK_STATUS = 'CHECK_STATUS';

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = '', action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under constructor';
    default:
      return state;
  }
};

export default categoriesReducer;
