import styled from 'styled-components'

const QuickLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin: auto;
  margin-bottom: 50px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`

const OuterTable = styled.div`
  width: 60%;
  margin: auto;
  margin-bottom: 150px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  .repertoireTitle {
    text-align: center;
    padding: 20px;
    background-color: ${({ theme }) => theme.color.secondary};
    p{
      color: ${({ theme }) => theme.color.primary};
      font-weight: 500;
      font-size: 20px;
    }
  }

  .repertoireCombination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid black;
    border-bottom: none;

    &:last-child {
      border-bottom: 1px solid black;
    }

    div {
      width: 100%;
      &.repertoireArtist {
        text-align: center;
        width: 40%;

        @media only screen and (max-width: 768px) {
          width: 50%;
        }
        p {
          font-weight: 500;
          font-size: 18px;
        }
      }
      &.repertoireSongs {
        border-left: 1px solid black;
        p {
          border-bottom: 1px solid black;
          padding: 10px;
          font-size: 15px;
          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }
`

export {
  OuterTable,
  QuickLinkContainer,
}