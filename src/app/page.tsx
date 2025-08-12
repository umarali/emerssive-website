import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { CustomerLogos } from '@/components/CustomerLogos'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { StickyBottom } from '@/components/StickyBottom'

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <Navigation />
      <Hero />
      <CustomerLogos />
      <Services />
      <Testimonials />
      <FAQ />
      {/* <Contact /> */}
      <Footer />
      <StickyBottom />
    </main>
  )
}
