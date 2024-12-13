import Chicago from "./Chicago"
import CustomersSay from "./CustomersSay"
import { Hero } from "./Hero"
import { Highlights } from "./Highlights"

export const HomeMain = () => {
  return (
    <main>
      <Hero />
      <Highlights />
      <CustomersSay />
      <Chicago />
    </main>
  )
}