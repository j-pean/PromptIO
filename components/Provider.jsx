import React from 'react'

const Provider = () => {
  return (
    <div>Provider</div>
  )
}

export default Provider
/*import {SessionProvider} from 'next-auth/react' ;

const Provider = ({children, session}) => {
  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  )
}

export default Provider*/