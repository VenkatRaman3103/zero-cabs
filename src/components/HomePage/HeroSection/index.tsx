'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'

// Import Style
import './index.scss'

// Import Component

// Import Hook
import { useHeroSectionData } from '@/hooks/HomePage/useHeroSectionData'
import { FeaturedImage } from './FeaturedImage'
import { FeaturedContent } from './FeaturedContent'
import { AccentComponent } from './AccentComponent'

export const HomePage: React.FC = (): React.JSX.Element => {
  const { heroSectionData, error, loading } = useHeroSectionData()

  const [title, setTitle] = useState()
  const [description1, setDescription1] = useState()
  const [description2, setDescription2] = useState()

  const [featuredImageSection, setFeaturedImageSection] = useState<any>()

  useEffect(() => {
    if (heroSectionData) {
      const { title, description1, description2, featuredImage }: any = heroSectionData
      setTitle(title)
      setDescription1(description1)
      setDescription2(description2)
      setFeaturedImageSection(featuredImage)
    }
  }, [heroSectionData])

  const [isActive, setIsActive] = useState<boolean>(false)

  console.log(featuredImageSection, 'featuredImageSection')

  return (
    <div className="home-page-container">
      <div className="home-page-wrapper">
        {/* Tittle and Description */}
        <TitleAndDescription title={title} description1={description1} />

        {/* Featured Content */}
        <FeaturedImage
          featuredImageSection={featuredImageSection}
          setIsActive={setIsActive}
          isActive={isActive}
        />

        {/* Feature Content */}
        <FeaturedContent description2={description2} />
      </div>
    </div>
  )
}

type TitleAndDescriptionProps = {
  title: string | undefined
  description1: string | undefined
}

const TitleAndDescription: React.FC<TitleAndDescriptionProps> = ({ title, description1 }) => {
  return (
    <React.Fragment>
      <div className="home-page-featured-content-heading">
        <div>
          {title}
          <AccentComponent />
        </div>
      </div>
      <div className="home-page-featured-content-description">{description1}</div>
    </React.Fragment>
  )
}
