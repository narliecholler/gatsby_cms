import styled from 'styled-components'

const PageHeader = styled.div`
  position: relative;
  margin-bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background: ${({ theme }) => theme.color.secondary};
  color: #fff;
  margin-left: -100%;
  margin-right: -100%;

  h1 {
    color: ${({ theme }) => theme.color.primary};
  }
`

export default PageHeader