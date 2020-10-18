import { useState, useEffect } from 'react'

export function useLogIn(auth, database) {
    const [authentication, setAuthentication] = useState();
    const [err, setError] = useState()

    async function LogOn(email, pass, setAuthModal) {
    try {
            await auth().signInWithEmailAndPassword(email, pass)
            alert('Sucssesful');
            setTimeout(setAuthModal(false), 3000)
        } catch(error) {
            switch (error.code) {
                case 'auth/invalid-email':
                    setError('Please write valid email');
                    break;
                case 'auth/user-disabled':
                    setError('This is User have been disabled by Administration');
                    break;
                case 'auth/user-not-found':
                    setError('User not found');
                    break;
                case 'auth/wrong-password':
                    setError('Wrong password');
                    break;
                case 'auth/argument-error':
                    setError('Write all Inputs');
                    break;
                case 'auth/too-many-requests':
                    setError('Too many unsuccessful login attempts. Please try again later.');
                    break;
                default:
                    console.warn(error);
                    break;
        }
    }
}

    function LogOut() {
        auth().signOut()
    }

    async function LogIn(email, pass, name, phone, setAuthModal) {
    try {
        const data = await auth().createUserWithEmailAndPassword(email, pass)
        const user = auth().currentUser
        user.updateProfile({
            displayName: name,
        })
            try {
                const newClient = {
                    clientEmail: email,
                    clientPassword: pass,
                    clientName: name,
                    clientphone: phone,
                    clientID: data.user.uid
                }
                database().ref('Clients/' + newClient.clientID).set(newClient)
                setError('Sucssesful');
                setTimeout(setAuthModal(false), 3000)
            } catch (error) {
                throw error
            }
    }
    catch(error) {
        switch (error.code) {
            case 'auth/email-already-in-use':
                setError('This email have already used');
                break;
            case 'auth/invalid-email':
                setError('Please write valid email');
                break;
            case 'auth/weak-password':
                setError('This password too weak');
                break;
            case 'auth/operation-not-allowed':
                setError('This email have banned');
                break;
            case 'auth/argument-error':
                setError('Write all Inputs');
                break;
            default:
                console.warn(error);
                break;
        }
    }
}
    useEffect(() => {
        auth().onAuthStateChanged(user => {
            if(user) {
                setAuthentication(user);
            } else {
                setAuthentication(null);
            }
        })
    }, [auth, authentication])
    return {authentication, LogIn, LogOut, LogOn, err};
}