REDUX Check

### Configuration
Package.json ==> npm i redux react-redux

Create your store file (imagine how your data will look like)
Create your reducers (imagine which action you'll need)
Connect your Application using:

<Provider store={configureStore()}>
    <App />
</Provider>


### For Each Components:

If you want to access to the REDUX store data:
const mapStateToProps = state => state; 

If you want to access to the actions from the reducers:
const mapDispatchToProps = dispatch => ({
  setUserName: username =>
    dispatch({
      type: "SET_USER_NAME",
      payload: username
    })
});

Connect it using the connect function:
export default connect(mapStateToProps, mapDispatchToProps)(ComponentName)


### Combine reducers

Combine using the combineReducers from redux
Each of them will be assign to a part of the store, defined by the name

const bigReducer = combineReducers({ cart: cartReducer, user: userReducer });

### Thunk

Allows async operations in REDUX
You need to npm i redux-thunk
You need to pass the composeEnhancers(applyMiddleware(thunk))

To interact with Thunk you should create your actions like this:

export const Name = id => {
  return async (dispatch, getState) => {
    //do async code here
    dispatch({
      type: "ACTION_NAME",
      payload: id
    });
  };
};

And use them in the components like this:
const mapDispatchToProps = dispatch => ({
  addToCartThunk: id => dispatch(Name(id))
});
