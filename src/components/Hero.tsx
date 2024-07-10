"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import styles from "@/styles.module.css"



function Hero() {
  return (
    <div >
      <main className="flex-1">
        <section  className={`${styles['hero-background']} w-full py-20`}>
          <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
              Unlock the Power of Digital Twin for Agriculture
            </h1>
            <p className="max-w-[700px] text-lg text-primary-foreground">
              Agri Twin's cutting-edge monitoring and analytics platform revolutionizes precision agriculture,
              empowering you to optimize your operations and maximize yields.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="w-full sm:w-auto">Get Started</Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Hero






