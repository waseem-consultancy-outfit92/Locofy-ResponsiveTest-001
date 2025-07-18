'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import { SupportedLivingFormImage } from "@/assets";
import { Stack, Typography } from '@mui/material';
import { CheckboxForm } from '@/components/checkbox-form';
import { CommonBackIcon } from '@/assets/common-assets';
import { useRouter } from "next/navigation";

const SupportedLivingFormPage = () => {
	const router = useRouter();
	const areas = [
		{
			id: 1,
			title: 'Service provider details',
			href: '/additional-form-for-supported-living-services-02',
			x: 77.26115859449193,
			y: 291.4852801519468,
			width: 344.1633428300095,
			height: 42.142450142450116,
		},
		{
			id: 2,
			title: 'Existing Provider (If you\'re restructuring business and changing your legal entity)',
			href: '/additional-form-for-supported-living-services-03',
			x: 623.3570750237417,
			y: 289.72934472934475,
			width: 1136.090218423552,
			height: 49.16619183285849,
		},
		{
			id: 3,
			title: 'Sale or Transfer',
			href: '/additional-form-for-supported-living-services-04',
			x: 75.50522317188984,
			y: 788.4150047483381,
			width: 237.05128205128204,
			height: 50.92212725546051,
		},
		{
			id: 4,
			title: 'Legal Representative (All Providers)',
			href: '/additional-form-for-supported-living-services-05',
			x: 1134.3342830009497,
			y: 788.4150047483381,
			width: 514.4890788224122,
			height: 56.18993352326686,
		},
		{
			id: 5,
			title: 'Services You Will Provide',
			href: '/additional-form-for-supported-living-services-06',
			x: 79.01709401709402,
			y: 1158.917378917379,
			width: 349.4311490978157,
			height: 49.16619183285843,
		},
		{
			id: 6,
			title: 'Ownership and Insurance',
			href: '/additional-form-for-supported-living-services-06',
			x: 79.01709401709402,
			y: 1747.1557454890788,
			width: 361.72269705603037,
			height: 45.6543209876545,
		},
		{
			id: 7,
			title: 'Registered Manager',
			href: '/additional-form-for-supported-living-services-06',
			x: 77.26115859449193,
			y: 2219.5023741690406,
			width: 296.7530864197531,
			height: 50.922127255460964,
		},
		{
			id: 8,
			title: 'Position Statement Letter',
			href: '/additional-form-for-supported-living-services-07',
			x: 463.56695156695156,
			y: 2217.746438746439,
			width: 366.99050332383666,
			height: 52.678062678062815,
		},
		{
			id: 9,
			title: 'Supporting Documents',
			href: '/additional-form-for-supported-living-services-08',
			x: 91.30864197530865,
			y: 2584.7369420702753,
			width: 323.0921177587844,
			height: 42.14245014245034,
		},
		{
			id: 10,
			title: 'Signature',
			href: '/additional-form-for-supported-living-services-09',
			x: 981.5679012345679,
			y: 2215.9905033238365,
			width: 147.49857549857552,
			height: 52.678062678062815,
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
					Supported living additional Form
				</Typography>
			</Stack>
			<CheckboxForm onChange={() => { }} />
			<Box sx={{
				position: 'relative',
				width: '100%',
				maxWidth: '1849px',
				margin: '0 auto',
				height: 'auto',
				overflow: 'hidden',
				backgroundColor: '#f8f9fa',
				border: '1px solid #e0e0e0',
				borderRadius: '8px',
				boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
			}}>
				<Image
					src={SupportedLivingFormImage}
					alt="Supported Living Additional Form"
					width={1849}
					height={3351}
					priority
					style={{
						width: '100%',
						height: 'auto',
						objectFit: 'contain',
						display: 'block'
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
									bgcolor: '#2c3e50',
									color: 'white',
									'& .MuiTooltip-arrow': {
										color: '#2c3e50',
									},
									maxWidth: 400,
									fontSize: '0.9rem',
									padding: '10px 15px',
									lineHeight: '1.5',
									borderRadius: '6px',
									fontWeight: 500
								}
							}
						}}
					>
						<Link href={area.href} passHref legacyBehavior>
							<Box
								component="a"
								sx={{
									position: 'absolute',
									left: `${(area.x / 1849) * 100}%`,
									top: `${(area.y / 3351) * 100}%`,
									width: `${(area.width / 1849) * 100}%`,
									height: `${(area.height / 3351) * 100}%`,
									cursor: 'pointer',
									transition: 'all 0.25s ease',
								}}
								aria-label={area.title}
							/>
						</Link>
					</Tooltip>
				))}
			</Box>
		</Stack>
	);
};

export default SupportedLivingFormPage;
