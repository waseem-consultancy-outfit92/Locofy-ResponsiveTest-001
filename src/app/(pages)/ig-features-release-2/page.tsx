import FeaturesScreen from "@/components/features-screen";

const dataArray = [
  { key: 'ig-feature-1', href: '/ig-release-2', title: 'KYC _ Registry Screening' },
  { key: 'ig-feature-2', href: '/ig-release-2', title: 'KYC _ Email Risk Scoring' },
  { key: 'ig-feature-3', href: '/ig-release-2', title: 'KYC _ Negative Media Screening' },
  { key: 'ig-feature-4', href: '/ig-release-2', title: 'KYC _ Biometric Face Comparison' },
  { key: 'ig-feature-5', href: '/ig-release-2', title: 'KYC _ Geo Location ' },
  { key: 'ig-feature-6', href: '/ig-release-2', title: 'KYB _ Ultimate beneficiary owner (UBO)' },
  { key: 'ig-feature-7', href: '/ig-release-2', title: 'KYB _ Sanction Screening' },
  { key: 'ig-feature-8', href: '/ig-release-2', title: 'KYB _ Entity  Screening' },
  { key: 'ig-feature-9', href: '/ig-release-2', title: 'KYB _ Transaction Screening' },
  { key: 'ig-feature-10', href: '/ig-release-2', title: 'KYB _ Know your merchant (KYM) ' },
  { key: 'ig-feature-11', href: '/ig-release-2', title: 'KYB _ Supplier Due Diligence' },
  { key: 'ig-feature-12', href: '/ig-release-2', title: 'AML Compliance' },
  { key: 'ig-feature-13', href: '/ig-release-2', title: 'Digital Identity Verification' },
  { key: 'ig-feature-14', href: '/ig-release-2', title: 'Social Media Checks' },
  { key: 'ig-feature-15', href: '/ig-release-2', title: 'Identity Investigation' },
  { key: 'ig-feature-16', href: '/ig-release-2', title: 'Pre-Employment Screening' },
  { key: 'ig-feature-17', href: '/ig-release-2', title: 'Reference Checks' },
  { key: 'ig-feature-18', href: '/ig-release-2', title: 'Individual user (Employee)' },
  { key: 'ig-feature-19', href: '/ig-release-2', title: 'Company Admin _ Manual Verification' },
  { key: 'ig-feature-20', href: '/ig-release-2', title: 'Company Admin _ Subscription & Invoices' },
]

const IgFeaturesRelease2Page = () => {
  return (
    <FeaturesScreen
      pageTitle="IG Features _ Release 2"
      backRoute="/identity-gram"
      dataArray={dataArray}
      maxCol={5}
    />
  );
};

export default IgFeaturesRelease2Page;
