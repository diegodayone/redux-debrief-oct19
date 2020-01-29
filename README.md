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