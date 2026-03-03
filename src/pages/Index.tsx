import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedTips from "@/components/home/FeaturedTips";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <FeaturedTips />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
