import React from 'react'
import { AddRemoveConditionAndNoticeProcessFlowPage } from '@/assets';
import CommonImgMapPage from '@/components/common-img-map-page';

const areas = [
  {
    alt: "Warning Notice Representation",
    title: "Warning Notice Representation",
    href: "/warning-notice-representation",
    coords: "42,243,543,318",
    shape: "rect",
  },
  {
    alt: "Notice of Proposal Representation",
    title: "Notice of Proposal Representation",
    href: "/notice-of-proposal-representation",
    coords: "40,566,580,642",
    shape: "rect",
  },
  {
    alt: "Provider or Manager – Vary/Remove Condition",
    title: "Provider or Manager – Vary/Remove Condition",
    href: "/provider-or-manager-varyremove-conditionnotice-of-proposal-representation",
    coords: "37,1123,735,1203",
    shape: "rect",
  },
  {
    alt: "Registered Manager – Vary/Remove Condition",
    title: "Registered Manager – Vary/Remove Condition",
    href: "/registered-manager-varyremove-condition",
    coords: "40,1459,734,1548",
    shape: "rect",
  },
];



const AddRemoveConditionAndNoticeProcessFlow = () => {
    return (
        <CommonImgMapPage
            backRoute="/what-needs-to-be-registered"
            pageTitle=" Add/Remove Condition and Notice "
            image={AddRemoveConditionAndNoticeProcessFlowPage}
            areas={areas}
        />
    )
}

export default AddRemoveConditionAndNoticeProcessFlow;