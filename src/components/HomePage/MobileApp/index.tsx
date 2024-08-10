import './index.scss'

export const StoreAvailability = () => {
  return (
    <>
      <div className="store-container">
        <div className="store-wrapper">
          <div className="store-heading">Available On</div>
          <div className="store-phone-image-container">
            <div className="store-phone-image"></div>
            <div className="store-phone-divider"></div>
          </div>
          <div className="store-links-buttons-container">
            <div className="store-links-buttons-wrapper">
              <div className="store-link-button-container">
                <div className="store-link-button-wrapper">
                  <div className="store-icon"></div>
                  <div className="store-content-section">
                    <div className="store-content-heading">Heading</div>
                    <div className="store-content-description">Paragraph</div>
                  </div>
                </div>
              </div>

              <div className="store-link-button-container">
                <div className="store-link-button-wrapper">
                  <div className="store-icon"></div>
                  <div className="store-content-section">
                    <div className="store-content-heading">Heading</div>
                    <div className="store-content-description">Paragraph</div>
                  </div>
                </div>
              </div>

              <div className="store-link-button-container">
                <div className="store-link-button-wrapper">
                  <div className="store-icon"></div>
                  <div className="store-content-section">
                    <div className="store-content-heading">Heading</div>
                    <div className="store-content-description">Paragraph</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
