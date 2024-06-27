import TopNav from '~/shared/container/navigation/TopNav';
import LandingContainer from './container/LandingContainer';
import Footer from '~/shared/container/footer/Footer';

export default function HomePage() {
  return (
    <>
      <TopNav />
      <LandingContainer />
      <Footer />
    </>
  );
}
