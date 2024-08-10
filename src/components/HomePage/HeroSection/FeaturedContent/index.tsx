import { useState } from 'react'

import './index.scss'

type FeaturedImageProp = {
  description2: string | undefined
}
export const FeaturedContent: React.FC<FeaturedImageProp> = ({ description2 }) => {
  const [showArrow, setShowArrow] = useState<any>(false)
  return (
    <div className="home-page-featured-image-doodle-section">
      <div className="home-page-featured-image-doodle-description">{description2}</div>

      {/* link button */}
      <div
        className="home-page-featured-image-links-stack-section"
        onMouseEnter={() => setShowArrow(true)}
        onMouseLeave={() => setShowArrow(false)}
      >
        <div className="home-page-featured-image-links-wrapper">
          <div className="home-page-featured-image-links-block">For More Details</div>
          <div className={`home-page-featured-image-arrow-block ${showArrow ? 'showArrow' : ''}`}>
            /
          </div>
        </div>
      </div>

      {/* doodle */}
      <DoodleCards />
    </div>
  )
}

const DoodleCards = () => {
  return (
    <div className="home-page-doodle-cards-section">
      <div className="home-page-doodle-cards-wrapper">
        <div className="home-page-doodle-cards-agency-section">
          <div className="home-page-doodle-cards-agency-wrapper">
            <div className="home-page-doodle-cards-agency-images-wrapper">
              <div className="home-page-doodle-cards-agency-image"></div>
              <div className="home-page-doodle-cards-agency-image"></div>
              <div className="home-page-doodle-cards-agency-image"></div>
            </div>

            <div className="home-page-doodle-cards-agency-count">100K+</div>
          </div>
        </div>

        {/* side card */}
        <div className="home-page-doodle-cards-contact-section">
          <div className="home-page-doodle-cards-contact-wrapper">lorem ipsum</div>
        </div>
      </div>
    </div>
  )
}
