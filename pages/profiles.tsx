// import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
// import React, { useCallback } from 'react'


export async function getServerSideProps(context: NextPageContext) {

  const session = await getSession(context);

  if(!session){
    return{
      redirect:{
        destination:'/auth',
        permanent : false,
      }
    }
  }

  return{
    props: {}
  }
  
}






function profiles() {
 

  return (
    <div className='flex items-center justify-center h-full bg-green-950 text-white'>
      burdayamm
      
    </div>
  )
}

export default profiles