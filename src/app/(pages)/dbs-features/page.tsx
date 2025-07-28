import FeaturesScreen from "@/components/features-screen";

const dataArray = [
  { key: 'dbs-feature-1', href: '/ig-product-diagram-release-1-chekc-my-dbs', title: 'Company Admin Module' },
  { key: 'dbs-feature-2', href: '/ig-product-diagram-release-1-chekc-my-dbs', title: 'DBS Application Management' },
  { key: 'dbs-feature-3', href: '/ig-product-diagram-release-1-chekc-my-dbs', title: 'Financial Management' },
  { key: 'dbs-feature-4', href: '/ig-product-diagram-release-1-chekc-my-dbs', title: 'Support & Training' },
  { key: 'dbs-feature-5', href: '/ig-product-diagram-release-1-chekc-my-dbs', title: 'Counter Signature Module' },
  { key: 'dbs-feature-6', href: '/ig-product-diagram-release-1-chekc-my-dbs', title: 'Evidence Checker Module' },
]

const DBSFeaturesPage = () => {
  return (
    <FeaturesScreen
      pageTitle="DBS Features"
      backRoute="/product-diagram"
      dataArray={dataArray}
      maxCol={4}
    />
  );
};

export default DBSFeaturesPage;
