import { call, put, takeEvery, all} from 'redux-saga/effects';
import { signUpapi, SignInapi } from '../../Common/Api/Auth.api';
import * as ActionType from '../ActionType';

function* Signup(action) {
    try {
        const user = yield call(signUpapi,action.payload);
        // yield put({type: "USER_FETCH_SUUCCEEDED" ,user:user});
        console.log(user);
    } catch (e) {
        // yield put ({type:"USER_FETCH_SUCCEEDED", message: e.message});
        console.log(e);
    }
}
function* SignIn(action){
    try {
      const user = yield call(SignInapi, action.payload);
      console.log(user);
  
    } catch (e) {
      console.log(e);
    }
  }
  
  function* watchSignUp() {
    yield takeEvery(ActionType.SIGN_UP, Signup);
  }
  
  function* watchSignIn(){
    yield takeEvery(ActionType.SIGN_IN , SignIn);
  }
  

export function* signUpSaga() {
    yield all([
        watchSignUp(),
        watchSignIn()
    ])
}