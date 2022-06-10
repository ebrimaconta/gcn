import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import NavBody from './NavBody';
import {
  BtnStyles1,
  BtnStyles2,
  Container,
  MainLi,
  Navbar,
  NavButton,
  NavButtonContainer,
  SocialContainer,
} from './styles';
import { BackgroundVariant, liVariant } from './animations';
// import { Link } from "react-router-dom";

///////types
export type NavButtonType = {
  after: { transform: string; width?: string };
  before: { transform: string; width?: string };
};
type menuStateType = {
  show: boolean;
  BtnStyles: NavButtonType;
};
const MobileNav = () => {
  const [menu, setmenu] = useState<menuStateType>({
    show: false,
    BtnStyles: BtnStyles1,
  });

  return (
    <>
      <Navbar>
        <img src='/images/GCNLogo.svg' alt='logo' />

        <NavButtonContainer>
          <NavButton
            onClick={() => {
              setmenu({
                show: !menu.show,
                BtnStyles: menu.show === true ? BtnStyles1 : BtnStyles2,
              });
            }}
            after={menu.BtnStyles.after}
            before={menu.BtnStyles.before}
          />
        </NavButtonContainer>
      </Navbar>
      <SocialContainer>
        <img src='/images/IconCrc_facebook.png' alt='facebook-icon' />

        <img src='/images/IconCrc_instagram.png' alt='facebook-icon' />

        <img src='/images/IconCrc_twitter.png' alt='facebook-icon' />

        <img src='/images/youTubeLogo.png' alt='facebook-icon' />
      </SocialContainer>
      <AnimatePresence exitBeforeEnter={true}>
        {menu.show && (
          <Container variants={BackgroundVariant} initial='hidden' animate={'visible'} key={1} exit='exit'>
            <MainLi variants={liVariant} initial='hidden' animate='visible' key={2} exit='exit'>
              New
              <span></span>
            </MainLi>

            <NavBody
              id={21}
              heading='GCN CASTELLI KIT'
              content={[
                { li: 'GCN Castelli Pro Team' },
                { li: 'GCN Castelli Pro Training' },
                { li: 'GCN Castelli Core Kit' },
                { li: 'GCN Castelli Winter Kit' },
                { li: 'Castelli Cycling Jerseys' },
                { li: 'Castelli Cycling Bibshorts' },
                { li: 'Castelli Cycling Bibtights' },
                { li: 'Castelli Baselayers' },
                { li: 'Castelli Cycling Vests' },
                { li: 'Castelli Gabba Jackets' },
                { li: 'Castelli Cycling Accessories' },
                { li: "Women's GCN Castelli Kit" },
                { li: '10% Off Castelli Bundles' },
              ]}
            />

            <NavBody
              heading='team KIT'
              content={[
                { li: 'GCN Castelli Pro Team Kit' },
                { li: 'GCN Castelli Pro Training' },
                { li: 'GCN Castelli Core Kit' },
                { li: 'GCN Castelli Winter Kit' },
                { li: 'GCN Core Fan Kit' },
                { li: "Women's Cycling Kit" },
                { li: 'Cycling Jerseys' },
                { li: 'Bibshorts' },
                { li: 'Bibtights' },
                { li: 'Baselayers' },
                { li: 'Cycling Jackets' },
                { li: 'Cycling Vests' },
                { li: 'Accessories' },
                { li: '10% Off Kit Bundles' },
              ]}
            />
            <NavBody
              heading='Casual clothing'
              content={[{ li: 'Sweatshirts' }, { li: 'T-Shirts' }, { li: 'Hoodies' }, { li: 'Casual Bundles' }]}
            />
            <NavBody
              heading='accessories'
              content={[
                { li: 'Socks' },
                { li: 'Coffee' },
                { li: 'Cups & Mugs' },
                { li: 'Water Bottles' },
                { li: 'On-Bike Accessories' },
                { li: 'Beanies & Caps' },
                { li: 'Towels' },
                { li: 'Helmets' },
                { li: 'Face Masks' },
              ]}
            />
            {/* <Link to="/books"> */}
            <MainLi variants={liVariant} initial='hidden' animate='visible' key={7} exit='exit'>
              books
              <span></span>
            </MainLi>

            <MainLi variants={liVariant} initial='hidden' animate='visible' key={8} exit='exit'>
              gcn club exclusives
              <span></span>
            </MainLi>

            <MainLi variants={liVariant} initial='hidden' animate='visible' key={9} exit='exit'>
              outlet
              <span></span>
            </MainLi>
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
