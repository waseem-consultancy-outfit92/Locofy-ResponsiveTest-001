"use client";
import { MultiPathPage } from "@/components";
import {
  IconSpecificTypeOfServices1,
  IconSpecificTypeOfServices2,
  IconSpecificTypeOfServices3,
  IconSpecificTypeOfServices4,
  IconSpecificTypeOfServices5,
  IconSpecificTypeOfServices6,
  IconSpecificTypeOfServices7,
  IconSpecificTypeOfServices8
} from "@/assets";


const SpecificTypeOfServicesPageData = [
  {
    key: "s-1",
    link: "/insurance-supporting-information",
    icon: IconSpecificTypeOfServices1,
    title: "Insurance supporting information",
  },
  {
    key: "s-2",
    link: "/adult-social-care-1",
    icon: IconSpecificTypeOfServices2,
    title: "Adult Social Care",
  },
  {
    key: "s-3",
    link: "/additional-form-for-ambulance-services-1",
    icon: IconSpecificTypeOfServices3,
    title: "Ambulances Additional Form",
  },
  {
    key: "s-4",
    link: "/dentist-additional-form",
    icon: IconSpecificTypeOfServices4,
    title: "Dentist Additional Form",
  },
  {
    key: "s-5",
    link: "/home-care-domiciliary-care-services-form",
    icon: IconSpecificTypeOfServices5,
    title: "Home Care (Domiciliary Care) Services Form",
  },
  {
    key: "s-6",
    link: "/gps-additional-form",
    icon: IconSpecificTypeOfServices6,
    title: "GPs Addtional Form",
  },
  {
    key: "s-7",
    link: "/services-for-autistic-people-with-learning-disability",
    icon: IconSpecificTypeOfServices7,
    title: "Services for autistic People with learning Disability",
  },
  {
    key: "s-8",
    link: "/supported-living-additional-form",
    icon: IconSpecificTypeOfServices8,
    title: "Supported living additional Form",
  },
];

const SpecificTypeOfServices = () => {
  return (
    <MultiPathPage
      backRoute="/"
      arrayData={SpecificTypeOfServicesPageData}
      pageTitle="Specific type of services"
    />
  );
};

export default SpecificTypeOfServices;
