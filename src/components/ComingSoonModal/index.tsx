import React from 'react'
import { Modal, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'

interface ComingSoonProps {
  title: string
}

const CustomModal = styled(Modal)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ComingSoonModal: React.FC<ComingSoonProps> = ({ title }) => (
  <CustomModal title={title} hideCloseButton>
    <Text fontSize="18px" bold>
      Coming soon
    </Text>
  </CustomModal>
)

export default ComingSoonModal
