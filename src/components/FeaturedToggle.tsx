'use client'

import React from 'react'
import { useField } from '@payloadcms/ui'

export default function FeaturedToggle() {
  const { value, setValue } = useField<boolean>({
    path: 'featured',
  })

  return (
    <div style={{ marginTop: '20px' }}>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
        }}
      >
        <input
          type="checkbox"
          checked={Boolean(value)}
          onChange={(e) => setValue(e.target.checked)}
        />

        <span>
          ⭐ Featured Product
        </span>
      </label>

      <p style={{ fontSize: '13px' }}>
        {value
          ? 'This product is featured'
          : 'This product is not featured'}
      </p>
    </div>
  )
}