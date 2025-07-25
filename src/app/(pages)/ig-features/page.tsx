import FeaturesScreen from "@/components/features-screen";

const dataArray = [
  { key: 'feature-1', href: '/', title: 'Secure Login & SSO Integration' },
  { key: 'feature-2', href: '/', title: 'KYC Verification (AWS Recognition API)' },
  { key: 'feature-3', href: '/', title: 'KYB Verification (Company House API)' },
  { key: 'feature-4', href: '/', title: 'Automated Document Verification' },
  { key: 'feature-5', href: '/', title: 'Company Admin Dashboard' },
  { key: 'feature-6', href: '/', title: 'Team Oversight and Verification' },
  { key: 'feature-7', href: '/', title: 'Real-time Reports & Data Insights' },
  { key: 'feature-8', href: '/', title: 'Scalable Integrations & API Support' },
]

const IgFeaturesPage = () => {
  return (
    <FeaturesScreen
      pageTitle="IG Features"
      backRoute="/"
      dataArray={dataArray}
      maxCol={4}
    />
  );
};

export default IgFeaturesPage;
