import React from 'react'
import './index.scss'

export const BentoSection: React.FC = (): React.JSX.Element => {
  return (
    <div className="bento-grid-container">
      <div className="bento-grid-wrapper">
        <div className="bento-grid-content-container">
          <h1 className="bento-grid-content-heading">Heading</h1>
          <div className="bento-grid-content-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero earum quod sunt dolores
            ducimus repudiandae recusandae! Dolorum cumque, repellendus natus quod officia sit minus
            at nobis id illum nesciunt dolor.
          </div>
        </div>

        <div className="bento-grid-section-container">
          <div className="bento-grid-section-wrapper">
            <div className="bento-grid-section-1 bento-box">
              <div className="bento-grid-section-1-container">
                <div className="bento-grid-section-1-wrapper">
                  <div className="bento-grid-section-1-featured-component-section">
                    <div className="bento-grid-section-1-featured-component-1"></div>
                    <div className="bento-grid-section-1-featured-component-2"></div>
                    <div className="bento-grid-section-1-featured-component-3"></div>
                  </div>
                  <div className="bento-grid-section-1-content-component">
                    <div className="bento-grid-section-1-content-component-heading">Heading</div>
                    <div className="bento-grid-section-1-content-component-para">
                      some text for the placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bento-grid-section-2 bento-box">
              <div className="bento-grid-section-2-wrapper">
                <div className="bento-grid-section-2-heading">Heading</div>
                <div className="bento-grid-section-2-para">Lorem ipsum dolor sit amet </div>
                <div className="bento-grid-section-2-image"></div>
              </div>
            </div>
            <div className="bento-grid-section-3 bento-box">
              <div className="bento-grid-section-3-wrapper">
                <div className="bento-grid-section-3-heading">Heading</div>
                <div className="bento-grid-section-3-paragraph">Paragraph</div>
                <div className="bento-grid-section-3-feature-component">
                  <div className="bento-grid-section-3-feature-component-heading-section">
                    <div className="bento-grid-section-3-feature-component-heading">heading</div>
                    <div className="bento-grid-section-3-feature-component-para">paragraph</div>
                  </div>
                  <div className="bento-grid-section-3-feature-component-section">
                    <div className="bento-grid-section-3-strip"></div>
                    <div className="bento-grid-section-3-highlight">some text</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bento-grid-section-4 bento-box">
              <div className="bento-grid-section-4-wrapper ">
                <div className="bento-grid-section-4-heading-section">
                  <div className="bento-grid-section-4-heading">Heading</div>
                  <div className="bento-grid-section-4-paragraph">Paragraph</div>
                </div>
                <div className="bento-grid-section-4-featured-section">
                  <div className="bento-grid-section-4-featured-section-c-1"></div>
                  <div className="bento-grid-section-4-featured-section-c-2"></div>
                  <div className="bento-grid-section-4-featured-section-c-3">
                    <div className="bento-grid-section-4-featured-section-c-3-1"></div>
                    <div className="bento-grid-section-4-featured-section-c-3-2"></div>
                    <div className="bento-grid-section-4-featured-section-c-3-3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bento-grid-section-5 bento-box">
              <div className="bento-grid-section-5-heading">Heading</div>
              <div className="bento-grid-section-5-para">Paragraph</div>
            </div>
            <div className="bento-grid-section-6-wrapper  bento-box">
              <div className="bento-grid-section-6">
                <div className="bento-grid-section-6-heading">Heading</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
