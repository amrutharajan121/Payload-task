'use client'

import Link from 'next/link'

export default function RegisterLink() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '20px',
      }}
    >
      <p style={{ marginBottom: '8px' }}>
        New customer?
      </p>

      <Link
        href="/register"
        style={{
          color: '#0070f3',
          textDecoration: 'underline',
          fontWeight: 'bold',
        }}
      >
        Register New User
      </Link>
    </div>
  )
}