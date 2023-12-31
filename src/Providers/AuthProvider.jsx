
import PropTypes from 'prop-types';
import { createContext, useEffect, useState} from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase.config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user',currentUser);
            setLoading(false)
        })
        return () =>{
            unSubscribe();
        }
    }, [])
    

    const authInfo = {user, createUser, signInUser, logOut, loading, signInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children : PropTypes.node
}





























// import { createContext } from 'react';

// export const AuthContext = createContext(null)

// const AuthProvider = ({children}) => {

//     const authInfo = {name : 'nodi sagor kahal billllll'}
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
