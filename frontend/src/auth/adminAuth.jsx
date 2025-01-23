'use client';
import React, { useState } from 'react'
// import useRouter from 'next/router';
import toast from 'react-hot-toast';
// import Swal from 'sweetalert2';

const AdminAuth = ({children}) => {

    // const router = useRouter();

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('admin')));

    if(currentUser===null){
        return children;
    }else{
        toast.success("Successfully login")
        // router.push('/admin/dashboard');
    }
}

export default AdminAuth;