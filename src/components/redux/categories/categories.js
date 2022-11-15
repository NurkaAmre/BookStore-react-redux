const CHECK_STATUS = bookstore/categories/CHECK_STATUS;

const initialState = []

export const addStatus = () => ({
    type: CHECK_STATUS,
})

export const categoryReducer = (state = initialState, {type}) => {
    switch(type) {
        case CHECK_STATUS:
            return 'Under the construction'
        default:
            return state;
    }
}
