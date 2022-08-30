import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as ActionType from '../ActionType';
import { ForgotPassApi, signUpapi, SignInapi, SignOutapi } from '../../Common/Api/Auth.api';
import { setAlert } from '../Action/AlertAction';
import { history } from '../../history';
import { signedInAction, signOutAction } from '../Action/Auth.Action';


function* Signup(action) {
  try {
    const user = yield call(signUpapi, action.payload);
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
  }
}
function* SignIn(action) {
  try {
    const user = yield call(SignInapi, action.payload);
    yield put(signedInAction(user))
    history.push('/');
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);

  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
  }
}

function* SignOut(action) {
  try {
    const user = yield call(SignOutapi);
    yield put(signOutAction(user))
    history.push('/');
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);

  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
  }
}

function* forgotPassword(action) {
  try {
    const user = yield call(ForgotPassApi, action.payload)
    console.log(user);
  } catch (e) {
    console.log(e);
  }
}

function* watchSignUp() {
  yield takeEvery(ActionType.SIGN_UP, Signup);
}

function* watchSignIn() {
  yield takeEvery(ActionType.SIGN_IN, SignIn);
}

function* watchSignOut() {
  yield takeEvery(ActionType.SIGN_OUT, SignOut)
}

function* watchForgotPass() {
  yield takeEvery(ActionType.FORGOT_PASSWORD,forgotPassword)
}

export function* signUpSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
    watchSignOut(),
    watchForgotPass()
  ])
}