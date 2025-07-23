"use client";
import { MultiPathPage } from "@/components";
import {
    removeLocation1,
    removeLocation2,
    removeLocation3,
    removeLocation4,
} from "@/assets";
import React from "react";

const ManageLocationPageData = [
    {
        key: "scope-1",
        link: "/add-location",
        icon: removeLocation1,
        title: "Add Location",
    },
    {
        key: "scope-2",
        link: "/additional-location-form-for-new-provider-registration-applications-2",
        icon: removeLocation2,
        title: "Additional location form for new provider",
    },
    {
        key: "scope-5",
        link: "/additional-location-form-for-new-provider-registration-applications",
        icon: removeLocation3,
        title: "Additional Location section For Manager application",
    },
    {
        key: "scope-3",
        link: "/remove-a-location",
        icon: removeLocation4,
        title: "Remove Location",
    },
];

const ManageLocation = () => {
    return (
        <MultiPathPage
            arrayData={ManageLocationPageData}
            pageTitle="Add / Remove Location"
            backRoute="/how-the-process-works"
        />
    );
};

export default ManageLocation;
