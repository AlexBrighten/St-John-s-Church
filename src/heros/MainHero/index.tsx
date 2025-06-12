'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const MainHero: React.FC<Page['hero']> = ({ heading, subheading, media, para }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div>
      <div className="absolute inset-0">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="object-cover" priority resource={media} />
        )}
      </div>

      <div className="relative pt-48 pb-12 xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="w-full lg:w-2/3 xl:w-1/2">
            {subheading && (
              <h1 className="font-sans text-base font-bold tracking-tight text-white text-opacity-70">
                {subheading}
              </h1>
            )}

            {heading && (
              <p className="mt-6 tracking-tighter text-white">
                <span className="font-serif italic font-normal text-6xl">{heading}</span>
              </p>
            )}

            {para && (
              <p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">
                {para}
              </p>
            )}

            <p className="mt-8 font-sans text-xl font-normal text-white">Starting at $9.99/month</p>
          </div>
        </div>
      </div>
    </div>
  )
}
