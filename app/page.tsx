import Card from '@/components/Card'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section '>
        <Card
          id="123"
          name="ReactQuest: The JSX Jungle"
          topic="Component Trees and State Management"
          subject="Development"
          duration={45}
          color="#FFDA6E"
        />
        <Card
          id="456"
          name="Binary Battles: Bits vs Bytes"
          topic="Introduction to Binary Number System"
          subject="Computer Science"
          duration={30}
          color="#E5D0FF"
        />
        <Card
          id="789"
          name="Encryptor: Master of Ciphers"
          topic=" Basics of Cryptography and Encryption"
          subject="Cybersecurity"
          duration={35}
          color="#BDE7FF"
        />
      </section>
      <section className='home-section' >
        <CompanionsList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full "
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page