import React from 'react'
import FooterProducts from './FooterProducts'
import FooterNewsletter from './FooterNewsletter'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <footer className='footer tw-text-white tw-pt-32 tw-pb-12 max-sm:tw-px-7'>
        <FooterProducts />
        <FooterNewsletter />
        <FooterLinks />
    </footer>
  )
}

export default Footer