import About from './components/About'
import Banner from './components/Banner'
import Features from './components/Features'
import Music from './components/Music'
import Producer from './components/Producer'
import Testimonials from './components/Testimonial'
import Booking from './components/Booking'
import Albums from './components/Albums'



export default function Home() {
  return (
    <main className="">
     
      <Banner/>
      <About/>
      <Features/>
<Albums/>
      <Music/>
      <Testimonials/>
<Booking/>
      <Producer/>
    </main>
  )
}