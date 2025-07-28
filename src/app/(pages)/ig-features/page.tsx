import FeaturesScreen from "@/components/features-screen";

const dataArray = [
  { key: 'feature-1', href: '/ig-product-diagram-release-1', title: 'Secure Login & SSO Integration' },
  { key: 'feature-2', href: '/ig-product-diagram-release-1', title: 'KYC Verification (AWS Recognition API)' },
  { key: 'feature-3', href: '/ig-product-diagram-release-1', title: 'KYB Verification (Company House API)' },
  { key: 'feature-4', href: '/ig-product-diagram-release-1', title: 'Automated Document Verification' },
  { key: 'feature-5', href: '/ig-product-diagram-release-1', title: 'Company Admin Dashboard' },
  { key: 'feature-6', href: '/ig-product-diagram-release-1', title: 'Team Oversight and Verification' },
  { key: 'feature-7', href: '/ig-product-diagram-release-1', title: 'Real-time Reports & Data Insights' },
  { key: 'feature-8', href: '/ig-product-diagram-release-1', title: 'Scalable Integrations & API Support' },
]

const IgFeaturesPage = () => {
  return (
    <FeaturesScreen
      pageTitle="IG Features"
      backRoute="/product-diagram"
      dataArray={dataArray}
      maxCol={4}
    />
  );
};

export default IgFeaturesPage;
