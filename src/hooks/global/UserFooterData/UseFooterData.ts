import { HeroSection } from '@/payload-types'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFooterData = () => {
  const [footerData, setFooterData] = useState<string | undefined>()
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // fetch data through api
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/api/footer-data')

        // glean
        const data = response?.data?.docs[0]

        // update the state
        setFooterData(data)

        setLoading(false)
      } catch (err) {
        setError(true)
      }
    }

    fetchData()
  }, [])

  return { footerData, error, loading }
}
