import styled from 'styled-components'
import { Link } from 'gatsby'

const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  #mobileMenu {
    background-color: ${({ theme }) => theme.color.secondary};
    nav {
      text-align: center;
      div {
        &:first-child {
          margin-bottom: 25px;
        }
      }
      a {
        color: ${({ theme }) => theme.color.primary};
        font-size: 22px;
        justify-content: center;
        margin-bottom: 10px;
      }
    }
  }


  @media only screen and (min-width: 1025px) {
    a {
      margin-left: 20px;
    }
  }

  @media only screen and (max-width: 1024px) {
    /* Position and sizing of burger button */
    .bm-burger-button {
      width: 36px;
      height: 30px;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: #373a47;
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
      background: #a90000;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
      background: #bdc3c7;
    }

    /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
    */
    .bm-menu-wrap {
      position: fixed;
      height: 100%;
      width: 100%!important;
      top: 0;
    }

    /* General sidebar styles */
    .bm-menu {
      background: ${({ theme }) => theme.color.secondary};
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
      fill: #373a47;
    }

    /* Wrapper for item list */
    .bm-item-list {
      color: #b8b7ad;
      padding: 0.8em;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
    }

    /* Individual item */
    .bm-item {
      display: inline-block;
    }

    /* Styling of overlay */
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
  }
 
`

const MenuLink = styled(Link)`
  color: #000;
  &.active {
    color: ${props => props.theme.color.secondary};
  }
`

export {
  MenuWrapper,
  MenuLink,
}