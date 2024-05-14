import { Link } from '@inertiajs/react'
import React from 'react'


const UserAside = () => {
  return (
    <div>
        <Link href='/' >Akun</Link>
        <Link href='/'>Profile</Link>
        <Link href='/'>Logout</Link>
    </div>
  )
}

export default UserAside