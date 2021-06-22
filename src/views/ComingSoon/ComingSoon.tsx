import React, { useEffect } from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import { useModal } from '@pancakeswap/uikit'
import ComingSoonModal from 'components/ComingSoonModal'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ComingSoon: React.FC = () => {
  const [openModal] = useModal(<ComingSoonModal title="Swap.net" />, false)

  useEffect(() => {
    openModal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Page>
      <Wrapper />
    </Page>
  )
}

export default ComingSoon
