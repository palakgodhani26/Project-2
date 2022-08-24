import { call, put, takeEvery, all} from 'redux-saga/effects'
import { signUpapi } from '../Common/Api/Auth.api'

function* Signup(action) {
    try {
        const user = yield call(signUpapi,action.payload);
        // yield put({type: "USER_FETCH_SUUCCEEDED" ,user:user});
    } catch (e) {
        // yield put ({type:"USER_FETCH_SUCCEEDED", message: e.message});
    }
}
function* watchSignup() {
    yield takeEvery (ActionType.SIGN_UP, Signup);
}

export function* signUpSaga() {
    yield all([
        watchSignup()
    ])
}