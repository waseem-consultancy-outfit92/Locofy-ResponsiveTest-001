'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import { GpsAdditionalFormImage } from "@/assets";
import { Stack, Typography } from '@mui/material';
import { CheckboxForm } from '@/components/checkbox-form';
import { CommonBackIcon } from '@/assets/common-assets';
import { useRouter } from "next/navigation";

const GpsAdditionalFormPage = () => {

	const router = useRouter();

	const areas = [
		{
			id: 1,
			title: 'Service provider details',
			href: '/additional-form-for-gps-01',
			x: 80.72934472934473,
			y: 293.0826210826211,
			width: 329.93732193732194,
			height: 35.09971509971513,
		},
		{
			id: 2,
			title: 'Existing provider',
			href: '/additional-form-for-gps-02',
			x: 628.2849002849002,
			y: 294.8376068376068,
			width: 1168.820512820513,
			height: 38.60968660968666,
		},
		{
			id: 3,
			title: 'Legal representative',
			href: '/additional-form-for-gps-04',
			x: 1140.7407407407406,
			y: 795.008547008547,
			width: 500.1709401709402,
			height: 38.609686609686605,
		},
		{
			id: 4,
			title: 'Sale or transfer',
			href: '/additional-form-for-gps-03',
			x: 77.21937321937322,
			y: 789.7435897435897,
			width: 228.14814814814815,
			height: 49.139601139601155,
		},
		{
			id: 5,
			title: 'Services you will provide',
			href: '/additional-form-for-gps-05',
			x: 82.48433048433048,
			y: 1156.5356125356125,
			width: 347.4871794871795,
			height: 45.62962962962979,
		},
		{
			id: 6,
			title: 'Supporting documents',
			href: '/additional-form-for-gps-07',
			x: 619.5099715099715,
			y: 2088.4330484330485,
			width: 321.1623931623932,
			height: 42.1196581196582,
		},
		{
			id: 7,
			title: 'Position statement Letter',
			href: '/additional-form-for-gps-06',
			x: 91.25925925925925,
			y: 2090.188034188034,
			width: 366.7920227920228,
			height: 42.1196581196582,
		},
		{
			id: 8,
			title: 'Signature',
			href: '/additional-form-for-gps-08',
			x: 94.76923076923077,
			y: 2458.735042735043,
			width: 136.88888888888889,
			height: 35.09971509971501,
		},
	];

	return (
		<Stack px={5} py={3} gap={2}>
			<Stack
				flexDirection={"row"}
				alignItems={"center"}
				mt={{ md: 2, xs: 1 }}
				mb={{ md: 4, sm: 3, xs: 2 }}
			>
				<Image
					src={CommonBackIcon}
					alt={"backIcon"}
					width={40}
					height={40}
					onClick={() => {
						router.replace("/specific-type-of-services");
					}}
					style={{ cursor: "pointer" }}
				/>
				<Typography
					variant="h5"
					color="#5A5867"
					fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
					fontWeight={{ md: 600, xs: 500 }}
					ml={{ md: 2, xs: 1 }}
					sx={{
						fontFamily: "inherit",
					}}
				>
					GPs  Additional Form
				</Typography>
			</Stack>
			 <CheckboxForm onChange={() => { }} />
			<Box sx={{
				position: 'relative',
				width: '100%',
				maxWidth: '1848px',
				margin: '0 auto',
				height: 'auto'
			}}>
				{/* Replace with your actual image path */}
				<Image
					src={GpsAdditionalFormImage}
					alt="Gps Additional Form"
					width={1848}
					height={2994}
					style={{
						width: '100%',
						height: 'auto',
						objectFit: 'contain'
					}}
				/>

				{areas.map((area) => (
					<Tooltip
						key={area.id}
						title={area.title}
						arrow
						placement="top"
						componentsProps={{
							tooltip: {
								sx: {
									bgcolor: 'common.black',
									'& .MuiTooltip-arrow': {
										color: 'common.black',
									},
									maxWidth: 350,
									fontSize: '0.875rem'
								}
							}
						}}
					>
						<Link href={area.href} passHref legacyBehavior>
							<Box
								component="a"
								sx={{
									position: 'absolute',
									left: `${(area.x / 1848) * 100}%`,
									top: `${(area.y / 2994) * 100}%`,
									width: `${(area.width / 1848) * 100}%`,
									height: `${(area.height / 2994) * 100}%`,
									cursor: 'pointer',
								}}
							/>
						</Link>
					</Tooltip>
				))}
			</Box>
		</Stack>
	);
};

export default GpsAdditionalFormPage;
