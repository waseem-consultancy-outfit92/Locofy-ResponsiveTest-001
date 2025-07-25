import FeaturesScreen from "@/components/features-screen";

const dataArray = [
  { key: 'ig-feature-1', href: '/', title: 'KYC _ Registry Screening' },
  { key: 'ig-feature-2', href: '/', title: 'KYC _ Email Risk Scoring' },
  { key: 'ig-feature-3', href: '/', title: 'KYC _ Negative Media Screening' },
  { key: 'ig-feature-4', href: '/', title: 'KYC _ Biometric Face Comparison' },
  { key: 'ig-feature-5', href: '/', title: 'KYC _ Geo Location ' },
  { key: 'ig-feature-6', href: '/', title: 'KYB _ Ultimate beneficiary owner (UBO)' },
  { key: 'ig-feature-7', href: '/', title: 'KYB _ Sanction Screening' },
  { key: 'ig-feature-8', href: '/', title: 'KYB _ Entity  Screening' },
  { key: 'ig-feature-9', href: '/', title: 'KYB _ Transaction Screening' },
  { key: 'ig-feature-10', href: '/', title: 'KYB _ Know your merchant (KYM) ' },
  { key: 'ig-feature-11', href: '/', title: 'KYB _ Supplier Due Diligence' },
  { key: 'ig-feature-12', href: '/', title: 'AML Compliance' },
  { key: 'ig-feature-13', href: '/', title: 'Digital Identity Verification' },
  { key: 'ig-feature-14', href: '/', title: 'Social Media Checks' },
  { key: 'ig-feature-15', href: '/', title: 'Identity Investigation' },
  { key: 'ig-feature-16', href: '/', title: 'Pre-Employment Screening' },
  { key: 'ig-feature-17', href: '/', title: 'Reference Checks' },
  { key: 'ig-feature-18', href: '/', title: 'Individual user (Employee)' },
  { key: 'ig-feature-19', href: '/', title: 'Company Admin _ Manual Verification' },
  { key: 'ig-feature-20', href: '/', title: 'Company Admin _ Subscription & Invoices' },
]

const IgFeaturesRelease2Page = () => {
  return (
    <FeaturesScreen
      pageTitle="IG Features _ Release 2"
      backRoute="/"
      dataArray={dataArray}
      maxCol={5}
    />
  );
};

export default IgFeaturesRelease2Page;
