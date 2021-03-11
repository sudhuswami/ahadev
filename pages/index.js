import Head from "next/head";
import AboutContent from "../components/AboutContent";
import FeaturesContent from "../components/FeaturesContent";
import MainBanner from "../components/MainBanner";
import ServicesContent from "../components/ServicesContent";
import TabsContent from "../components/TabsContent";
import WhyChooseUs from "../components/WhyChooseUs";
export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Innovatie IT Company for Web Development, Desinging, Mobile Apps &amp;
          SEO - AHA Technocrats
        </title>
        <meta
          name="description"
          content="AHA Technocrats is the Leading IT company in India, dealing with Web Development, designing, Apps and digital Marketing (SEO/SMO) services across the world."
        />
        <link rel="canonical" href="http://www.ahatechnocrats.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Innovatie IT Company for Web Development, Desinging, Mobile Apps &amp; SEO - AHA Technocrats"
        />
        <meta
          property="og:description"
          content="AHA Technocrats is the Leading IT company in India, dealing with Web Development, designing, Apps and digital Marketing (SEO/SMO) services across the world."
        />
        <meta property="og:url" content="http://www.ahatechnocrats.com/" />
        <meta property="og:site_name" content="AHA Technocrats" />
      </Head>

      <MainBanner />
      <FeaturesContent />
      <div className="pb-100">
        <AboutContent />
      </div>
      <ServicesContent />
      <WhyChooseUs />
      <TabsContent />
    </div>
  );
}
