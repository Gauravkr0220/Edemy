import React from 'react'
import { dummyTestimonial, assets } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <div className="pb-14 px-4 md:px-0">
      <div className="container mx-auto"> {/* 1. Centered container */}
        <h2 className="text-3xl font-medium text-gray-800">
          Testimonials
        </h2>
        <p className="md:text-base text-gray-500 mt-3">
          Hear from our learners as they share their journeys of transformation,
          success, and how our <br /> platform has made a difference in their lives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {dummyTestimonial.map((t, i) => (
            <div
              key={i}
              className="
                w-full          /* stretch to fill on mobile */
                max-w-sm        /* but never exceed ~24rem */
                mx-auto         /* center within its grid cell */
                bg-white
                border border-gray-300/30
                rounded-lg
                shadow-[0px_4px_15px_0px] shadow-black/5
                overflow-hidden
                flex flex-col
              "
            >
              {/* Card header */}
              <div className="flex items-center gap-4 px-5 py-4 bg-gray-50">
                <img
                  className="h-12 w-12 rounded-full"
                  src={t.image}
                  alt={t.name}
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {t.name}
                  </h3>
                  <p className="text-gray-600">{t.role}</p>
                </div>
              </div>

              {/* Card body: stars + feedback */}
              <div className="px-5 py-4 flex-1 flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <img
                      key={idx}
                      src={
                        idx < Math.floor(t.rating)
                          ? assets.star
                          : assets.star_blank
                      }
                      alt="star"
                    />
                  ))}
                </div>
                <p className="text-gray-500 mt-auto">{t.feedback}</p>
                <a
    href="#"
    className="self-start mt-4 text-blue-500 underline"
  >
    Read more
  </a>

              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
