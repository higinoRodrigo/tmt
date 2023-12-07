import { useState } from 'react'
import { Template1 } from '@/components/Template1'
import { Button } from 'antd'
import { Template2 } from '@/components/Template2'

export const BaseLayout = ({children}) => {
  const [templates, setTemplates] = useState(2)

  return (
    <>
      {
        templates === 1 ? (
          <Template1>
            <Button onClick={() => setTemplates(2)} size="small">Trocar Template</Button>
            {children}
          </Template1>
        ) : (
          <Template2>
            <Button onClick={() => setTemplates(1)} size="small">Trocar Template</Button>
            {children}
          </Template2>
        ) 
      }
    </>
  )
}
