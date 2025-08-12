import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { CustomerLogos } from '@/components/CustomerLogos'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { StickyBottom } from '@/components/StickyBottom'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <CustomerLogos />
      <Testimonials />
      <FAQ />
      <Footer />
      <StickyBottom />
    </main>
  )
}
