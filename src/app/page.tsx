import TopNav from '~/shared/container/navigation/TopNav';
import LandingContainer from './container/LandingContainer';
import Footer from '~/shared/container/footer/Footer';
import { db } from '~/server/db';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const service = await db.query.services.findMany();

  return (
    <>
      <TopNav />
      <LandingContainer services={service} />
      <Footer />
    </>
  );
}
