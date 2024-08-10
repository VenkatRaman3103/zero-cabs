'use client'
import { useFooterData } from '@/hooks/global/UserFooterData/UseFooterData'
import './index.scss'
import { useEffect, useState } from 'react'

export const Footer = () => {
  const { footerData } = useFooterData()

  const [footer, setFooter] = useState<any>()

  useEffect(() => {
    if (footerData) {
      setFooter(footerData)
    }
  }, [footerData])

  console.log(footer, 'footerData')
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-content-container">
          <div className="footer-agency-promotion"></div>
          <div className="footer-content-wrapper">
            <div className="footer-content-columns-container">
              {footer?.columns?.map((item: any) => (
                <Columns heading={item.column} footerLinks={item.footerLinks} />
              ))}
            </div>
          </div>
          <div className="footer-company-name">ZERO CABS</div>
        </div>
      </div>
    </div>
  )
}



export const Columns = ({ heading, footerLinks }: any) => {

  console.log(footerLinks, 'footerLinks')
  return (
    <div className="footer-content-column-wrapper">
      <h2 className="footer-content-column-heading">{heading}</h2>
      {footerLinks?.map((link: any) => (
        <FooterLink label={link.linkLabel} />
      ))}
    </div>
  )
}

export const FooterLink = ({ label }: any) => {
  return <div className="footer-content-column-links">{label}</div>
}
