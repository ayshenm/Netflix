import styles from '@/styles/Home.module.css'
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';


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


export default function Home() {
  return (
    <>
   <h1 className="text-3xl bg-red-900 font-bold underline">
      Hello world!
    </h1>
      
    </>
  )
}
