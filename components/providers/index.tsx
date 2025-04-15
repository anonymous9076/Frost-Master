"use client"
import React from 'react'
import { AOSProvider } from './AOSContext'

export default function Providers({children}:any) {
  return (
    <AOSProvider>
      {children}
    </AOSProvider>
  )
}
