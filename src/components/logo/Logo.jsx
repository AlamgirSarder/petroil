import React from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'

import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'

const image = [logo1, logo2, logo3, logo4]

const Logo = () => {
  return (
    <section>
      <Container>
        <Flex className='py-[117px] justify-between'>
          {
            image.map((item, index) => (
              <img key={index} src={item} alt="logo" />
            ))
          }
        </Flex>
      </Container>
    </section>
  )
}

export default Logo
