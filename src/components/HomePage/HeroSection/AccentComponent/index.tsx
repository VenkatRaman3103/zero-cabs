import React from 'react'

import './index.scss'

export const AccentComponent: React.FC = (): React.JSX.Element => {
  return (
    <div className="home-page-featured-content-heading-accent-wrapper">
      <div className="home-page-featured-content-heading-accent-icon">@</div>
      <div className="home-page-featured-content-heading-accent-arrow">|</div>
    </div>
  )
}
