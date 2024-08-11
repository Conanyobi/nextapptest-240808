'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
      <section className='w-full h-screen items-center justify-center flex flex-col gap-2'>
        <Image src="/assets/goddess.jpeg" width={200} height={200} className='mx-auto' alt="logo" />
        <form className='max-w-[800px] bg-slate-50 rounded-md shadow-md mx-auto p-5 gap-2'>
          {isLogin ? 
          <h1 className='font-bold text-2xl text-slate-700'>Connexion</h1> :
          <h1 className='font-bold text-2xl text-slate-700'>Inscription</h1>
        }
          <Label htmlFor="login" className='mt-5'>Identifiant</Label>
          <Input type="text" name='login' id='login' />

          <Label htmlFor="password">Mot de passe</Label>
          <Input type='password' name='password' id='password'/>

        {isLogin ? 
          <>
            <Button type='submit' className='mt-5 w-full'>Se connecter</Button>
            <Link href="/">
            Mot de passe oublié ?
            </Link>
          </> :
          <>
          <Button type='submit' className='mt-5 w-full'>S'inscrire</Button>
          <Link href="/">
           Dejà utilisateur ? se connecter
          </Link>
          </>
        }
        </form>
        
      </section>
  )
}
