'use client'

import React from 'react'

export default function LogoutButton() {
  const handleLogout = async () => {
    await fetch('/api/users/logout', {
      method: 'POST',
      credentials: 'include',
    })

    window.location.href = '/admin/login'
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      style={{
        width: '100%',
        padding: '10px',
        marginTop: '20px',
        cursor: 'pointer',
        borderRadius: '5px',
        border: '1px solid #ff5555',
        background: '#d32f2f',
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      Logout
    </button>
  )
}