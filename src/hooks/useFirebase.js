import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializedAuthentication from "../firebase/firebase.init";

initializedAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Registration Using Email and Password
    const SignUpUsingEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login Using Email and Password
    const logInUsingEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Login Using Google
    const logInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Login Using Github
    const logInUsingGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, []);

    return {
        SignUpUsingEmailPassword,
        logInUsingEmailPassword,
        logInUsingGoogle,
        logInUsingGithub,
        user,
        logOut
    }
}

export default useFirebase;