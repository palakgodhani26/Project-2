import { createUserWithEmailAndPassword, onAuthStateChanged,  sendEmailVerification, signInWithEmailAndPassword,  onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

export const signUpapi = (data) => {
    
    console.log("signUpapi" ,data);

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
                console.log(user);

                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                           resolve({payload : "Check your emails"});
                        })
                        .catch((e) => {
                            reject({payload : e});
                        })
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/email-already-exists") === 0) 
                {
                        reject({payload : "Email is already verified"});                
                } 
                else 
                {
                        reject({payload : errorCode});
                }
            });
    })
}
export const SignInapi = (data) => {
    console.log("SignInapi", data);

    return new Promise((resolve, reject) => {

        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;

                if (user.emailVerified) {

                    reject({ payload: user});
                }
                else
                {
                    resolve({ payload: "Please Varify Your Email."});
                }
 
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/user-not-found") === 0) 
                {
                    reject({ payload: "Please Check Your Email And Password." });
                }
                else
                {
                    reject({ payload: errorCode });
                }
            });
        })
    }
    export const SignOutapi = () => {

        console.log("SignOutapi");
    
        return new Promise((resolve, reject) => {
    
            signOut(auth)
                .then(() => 
                {
                    resolve({payload : "Logout Is SuccessFully." })
                })
                .catch(() => 
                {
                    reject({payload : "SomeThing Is Worng." });
                })
        })
    }
    export const ForgotPassApi = (data) => {
        console.log(data);
    }