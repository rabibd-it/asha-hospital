import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializedAuthentication from "../firebase/firebase.init";

initializedAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const SignUpUsingEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUsingEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

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