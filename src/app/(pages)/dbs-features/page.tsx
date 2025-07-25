import FeaturesScreen from "@/components/features-screen";

const dataArray = [
  { key: 'dbs-feature-1', href: '/', title: 'Company Admin Module' },
  { key: 'dbs-feature-2', href: '/', title: 'DBS Application Management' },
  { key: 'dbs-feature-3', href: '/', title: 'Financial Management' },
  { key: 'dbs-feature-4', href: '/', title: 'Support & Training' },
  { key: 'dbs-feature-5', href: '/', title: 'Counter Signature Module' },
  { key: 'dbs-feature-6', href: '/', title: 'Evidence Checker Module' },
]

const DBSFeaturesPage = () => {
  return (
    <FeaturesScreen
      pageTitle="DBS Features"
      backRoute="/"
      dataArray={dataArray}
      maxCol={4}
    />
  );
};

export default DBSFeaturesPage;
