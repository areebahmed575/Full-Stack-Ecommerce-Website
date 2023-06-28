"use client"

import { ReactNode, createContext, useEffect, useState, useReducer } from "react";
import { cartReducer } from "../reducer";
import { auth } from "@/app/lib/firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
export const carContext = createContext<any>(null);

interface indexForError {
    [key: string]: string
};


const ContextWrapper = ({ children }: { children: ReactNode }) => {
    const initializerCart = {
        cart: [

        ]
    }

    const [state, dispatch] = useReducer(cartReducer, initializerCart)
    let router = useRouter();
    const [userData, setUserData] = useState<any>();
    const [errorViaUserCredential, setErrorViaUserCredential] = useState<indexForError | "">("")
    const [loading, setLoading] = useState(false);
    const [cartArray, setCartArray] = useState<any>([]);
    const [errorsOfFirebase, setErrorsOfFirebase] = useState({
        key: "",
        errorMessage: "",
    });
    const [quantity, setQuantity] = useState(0);


    useEffect(() => {
        let cart = localStorage.getItem("cart") as string
        if (cart === null) {
            localStorage.setItem("cartstate:", JSON.stringify(state.cart))

        } else {
            initializerCart.cart = JSON.parse(cart)
        }
    })

    useEffect(() => {
        localStorage.setItem("cartstate:", JSON.stringify(state.cart))
    }, [state.cart])

    let user = auth.currentUser;

    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            if (user) {
                setUserData({
                    displayName: user.displayName,
                    email: user.email,
                    uuid: user.uid,
                    photoUrl: user.photoURL,
                    emailVerified: user.emailVerified
                })
            } else {
                setUserData(null);
            }
        });
    }, [])


    let provider = new GoogleAuthProvider();

    function signUpViaGoogle() {
        setLoading(true)
        return signInWithPopup(auth, provider).then((userData: any) => {
            if (userData) {
                setUserData({
                    displayName: userData.user.displayName,
                    email: userData.user.email,
                    uuid: userData.user.uid,
                    photoUrl: userData.user.photoURL,
                    emailVerified: userData.user.emailVerified
                });
                router.push("/")
            }
            setLoading(false)
        })
    }


    function signUpUser(email: string, password: string) {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password).then((res: any) => {
            setLoading(false);
            router.push("/");
        }).catch((res: any) => {
            let error = res.code.split("/")
            error = error[error.length - 1];
            setErrorsOfFirebase({
                key: "signup",
                errorMessage: error
            })
            setLoading(false);
        });
        setLoading(false);
    };

    function signInUser(email: string, password: string) {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password).then((res: any) => {
            setLoading(false);
        }).catch((res: any) => {
            let error = res.code.split("/")
            error = error[error.length - 1];
            setErrorsOfFirebase({
                key: "signin",
                errorMessage: error
            })
        });
        setLoading(false);
    }

    function LogOut() {
        setLoading(true);
        signOut(auth);
        setLoading(false);
        window.location.reload();
    };

    function sendEmailVerificationCode() {
        setLoading(true);
        if (user) {
            sendEmailVerification(user).then((res: any) => {
                console.log("sended");
                window.location.href = "/"
            })
            setLoading(false);
        }
    }


    function updateUserNamePhoto(userName: string, photoURL?: string) {
        setLoading(true);
        if (user) {
            updateProfile(user, {
                displayName: userName, photoURL: "/istockphoto-1337144146-612x612.jpg"
            }).then(() => {
                setLoading(false);
                window.location.reload();
            }).catch((error: any) => {
                setLoading(false);
                console.log(error)
            });
        }
    }

    return (
        <carContext.Provider value={{
            cartArray,
            errorsOfFirebase,
            dispatch,
            updateUserNamePhoto,
            userData,
            sendEmailVerificationCode,
            signUpUser,
            signUpViaGoogle,
            signInUser,
            LogOut,
            loading,
            quantity,
            setQuantity,
        }}>
            {children}
        </carContext.Provider>
    )
}
export default ContextWrapper