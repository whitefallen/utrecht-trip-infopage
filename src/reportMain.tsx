import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/print.css'

import { ReportPage } from './contexts/report/presentation/components/ReportPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReportPage />
  </StrictMode>,
)
