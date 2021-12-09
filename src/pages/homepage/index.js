import Hero from '../../components/Hero';
import ActionboxContainer from '../../components/ActionboxContainer';
import ReusableSection from '../../components/ReusableSection';
import FeaturesSection from '../../components/FeaturesSection';

export default function Homepage() {
  return (
    <>
      <Hero />
      <ActionboxContainer />
      <ReusableSection
        firstline="Your Team in"
        secondline="One Place."
        content="Cobold makes your contract signing and review much more easier, collaborate with colleagues and partners and get that contract signed."
        firstbutton={{ text: 'Get Started', link: '#' }}
        secondbutton={{ text: 'Learn More', link: '#' }}
        config={{
          direction: true,
          image_url: '/phone_img.png',
          height: 500,
          width: 450,
        }}
        // direction="row"
      />
      <ReusableSection
        firstline="Simplifying Contract"
        secondline="Execution"
        content="Cobold makes your contract signing and review much more easier, collaborate with colleagues and partners and get that contract signed."
        firstbutton={{ text: 'Get Started', link: '#' }}
        config={{
          direction: false,
          image_url: '/contract_img.png',
          height: 370,
          width: 450,
        }}
        //  direction="row-reverse"
      />

      <ReusableSection
        firstline="Your Team in"
        secondline="One Place."
        content="Cobold makes your contract signing and review much more easier, collaborate with colleagues and partners and get that contract signed."
        firstbutton={{ text: 'Get Started', link: '#' }}
        secondbutton={{ text: 'Learn More', link: '#' }}
        config={{
          direction: true,
          image_url: '/phone_img.png',
          height: 500,
          width: 450,
        }}
        // direction="row"
      />
      <FeaturesSection />
    </>
  );
}
