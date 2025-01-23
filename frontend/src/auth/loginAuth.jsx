'use client';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import React, { useState } from 'react'
// import Swal from 'sweetalert2';

const LoginAuth = ({children}) => {

    const router = useRouter();
  
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    if(currentUser===null){
        return children;
    }else{
        toast.success("Successfully login")
        router.push('/');
    }
}

export default LoginAuth;