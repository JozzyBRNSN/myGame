import React from 'react'
import { createRoot } from 'react-dom/client'
import Index from './components/Index'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<Index />)
