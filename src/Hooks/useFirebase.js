import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    signInWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider
} from "firebase/auth";









initializeFirebase();



const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin,setAdmin]=useState(false)


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const createNewUser = (email, password,name,history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setError('')

                const newUser = { email, displayName: name }
                setUser(newUser)

                //save user
                saveUser(email, name,'POST')
                
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                  

                history.replace('/')
                // ...
            })
            .catch((error) => {
                
                setError(error.message);
                // ..
            }).finally(()=>setIsLoading(false));
    }


    const loginUser = (email, password,location,history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const path = location?.state?.from || '/';
                history.replace(path)
                setError('')
                // ...
            })
            .catch((error) => {
                setError(error.message);
            }).finally(()=>setIsLoading(false));
    }


    const signInWithGoogle = (location,history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
           
            const user = result.user;
            saveUser(user.email,user.displayName,'PUT')
            setError('')
            const path = location?.state?.from || '/';
                history.replace(path)
            // ...
        }).catch((error) => {
            // Handle Errors here.
      
            setError(error.message)
          
    // ...
    }).finally(()=>setIsLoading(false));
        
    }

    


    useEffect(() => {
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              
             
                setUser(user)
              // ...
            } else {
             setUser({})
           }
           setIsLoading(false)
       });
        return () => unsubscribe;
    }, [])
    

    useEffect(() => {
        fetch(`https://serene-tundra-17861.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data=>setAdmin(data.admin))
    },[user.email])


    const saveUser = (email,displayName,method) => {
        const user = { email, displayName }
        
        fetch('https://serene-tundra-17861.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          }).finally(()=>setIsLoading(false));
    }
    

    return {
        user,
        createNewUser,
        loginUser,
        logOut,
        isLoading,
        error,
        signInWithGoogle,
        admin

    }
}

export default useFirebase