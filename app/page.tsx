import Card from '@/components/Card'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'
import React from 'react'

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 })
  const recentSessionsCompanions = await getRecentSessions(10)

  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section '>
        {
          companions.map((companion) => (
            <Card
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          ))
        }
      </section>
      <section className='home-section' >
        <CompanionsList
          title="Recently Completed Sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full "
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page