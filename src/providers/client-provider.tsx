'use client'
import { ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()
export default function ClientProvider({ children }: { children: ReactNode }) {
  return (
      <QueryClientProvider client={queryClient}>
            {children}
        <ToastContainer />
      </QueryClientProvider>
  )
}
