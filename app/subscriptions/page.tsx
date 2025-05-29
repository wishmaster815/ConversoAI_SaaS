import { PricingTable } from "@clerk/nextjs"

const subscription = () => {
  return (
    <main className="flex items-center justify-center">
      <PricingTable />
    </main>
  )
}

export default subscription