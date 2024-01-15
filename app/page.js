'use client'

import { useEffect, useRef } from 'react'

export default function Home() {
  const preloader = useRef()
  const loader = useRef()

  useEffect(() => {
    setTimeout(() => {
      preloader.current.classList.add('gone')

      setTimeout(() => {
        loader.current.classList.add('gone')
      }, 300)
    }, 300);
  }, [preloader, loader])

  return (
    <>
      <main id="main-404-content" className="main-content-static">
        <div className="content-wrap">
          <div className="shadow-overlay"></div>

          <div className="main-content">
            <div className="row">
              <div className="col-twelve">
                <h1 className="kern-this">
                  mvcdev.net
                </h1>

                <p>
                  works in progress
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div id="preloader" ref={preloader}>
        <div id="loader" ref={loader}></div>
      </div>
    </>
  )
}
