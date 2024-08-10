import { useEffect, useState } from 'react'
import './index.scss'
import Image from 'next/image'

export const FeaturedImage: React.FC<any> = ({ featuredImageSection, setIsActive, isActive }) => {
  const [activeId, setActiveId] = useState<number>(1)
  const [prevActiveId, setPrevActiveId] = useState<number>(1)
  const [stopInterval, setStopInterval] = useState<boolean>(false)
  const [cons, setCons] = useState<any>()

  function handleStyling(id: number): any {
    if (id == 1) {
      return 'red'
    } else if (id == 2) {
      return 'green'
    } else if (id == 3) {
      return 'blue'
    }
  }

  useEffect(() => {
    if (!stopInterval) {
      const id = setInterval(() => {
        setActiveId((prevId) => {
          setPrevActiveId(prevId)
          return (prevId % featuredImageSection?.length) + 1
        })
      }, 2000)
      setCons(id)
      return () => clearInterval(id)
    }
  }, [featuredImageSection?.length, stopInterval])

  console.log(cons, 'const')

  return (
    <>
      <div
        className="home-page-featured-image-card"
        onMouseEnter={() => {
          setIsActive(true)
          setStopInterval(true)
        }}
        onMouseLeave={() => {
          setIsActive(false)
          setStopInterval(false)
        }}
      >
        <div className="home-page-featured-image-container">
          {featuredImageSection?.map((data: any, index: any) => (
            <div
              key={index}
              className={`home-page-featured-image ${
                activeId === index + 1 ? 'active' : prevActiveId === index + 1 ? 'prev-active' : ''
              }`}
            >
              <div className="home-page-featured-image-spacer">
                {data.imageUrl ? (
                  <Image
                    // style={{ backgroundColor: `${handleStyling(index + 1)}` }}
                    src={`/image-${index + 1}.jpg`}
                    alt={`Featured image ${index + 1}`}
                    height={100}
                    width={100}
                  />
                ) : (
                  index + 1
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="home-page-featured-image-card-links-wrapper">
          {featuredImageSection?.map((data: any, index: any) => {
            console.log(data, data.imageUrl, 'data--')
            return (
              <div
                key={index}
                className={`home-page-featured-image-card-link ${
                  activeId == index + 1 ? 'makeItBigger' : ''
                }`}
                onMouseEnter={() => setActiveId(index + 1)}
              >
                <div
                  className={`home-page-featured-image-card-btn ${
                    activeId == index + 1 ? 'makeItBigger' : ''
                  }`}
                >
                  {data?.iconUrl}
                </div>
              </div>
            )
          })}
        </div>
        <div
          className={`home-page-featured-image-card-main-link-wrapper ${
            isActive ? 'makeItBigger' : ''
          }`}
        >
          {featuredImageSection?.map((data: any, index: any) => (
            <div
              key={index}
              className={`home-page-featured-image-card-main-link-description ${
                isActive ? 'moveUp' : ''
              }`}
            >
              {activeId == index + 1 ? data?.imageDescription : ''}
            </div>
          ))}
          <div className="home-page-featured-image-card-main-link-arrow-wrapper">
            <div className="home-page-featured-image-card-main-link-arrow-mark">/</div>
          </div>
        </div>
      </div>
    </>
  )
}
