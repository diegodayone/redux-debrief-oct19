export const LoadBooks = (search) => {
    return async (dispatch, getState) => {

      console.log(getState())
      const response = await fetch("http://localhost:5400/books" + 
                                            (search ? "?category=" + search : ""))
      const json = await response.json()

      //const previousBooks = getState().books;
      dispatch({
        type: "LOAD_BOOKS",
        payload: json
      });
    };
  };
