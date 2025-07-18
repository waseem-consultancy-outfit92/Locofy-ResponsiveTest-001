'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import { DentistAdditionalFormImage } from "@/assets";
import { Stack, Typography } from '@mui/material';
import { CheckboxForm } from '@/components/checkbox-form';
import { CommonBackIcon } from '@/assets/common-assets';
import { useRouter } from "next/navigation";

const DentistAdditionalFormPage = () => {
	const router = useRouter();
	const areas = [
		{
			id: 1,
			title: 'Service provider details',
			href: '/additional-form-for-dentists-02',
			x: 77.21937321937322,
			y: 287.8176638176638,
			width: 338.7122507122507,
			height: 43.87464387464388,
		},
		{
			id: 2,
			title: 'Existing Provider (if you\'re restructuring business and are changing your legal entity)',
			href: '/additional-form-for-dentists-03',
			x: 623.019943019943,
			y: 286.06267806267806,
			width: 1172.3304843304843,
			height: 57.91452991452991,
		},
		{
			id: 3,
			title: 'Sale or Transfer',
			href: '/additional-form-for-dentists-04',
			x: 77.21937321937322,
			y: 786.2336182336182,
			width: 235.16809116809117,
			height: 52.64957264957263,
		},
		{
			id: 4,
			title: 'Legal Representative (All Providers)',
			href: '/additional-form-for-dentists-05',
			x: 1131.965811965812,
			y: 793.2535612535612,
			width: 510.70085470085473,
			height: 43.87464387464388,
		},
		{
			id: 5,
			title: 'Services You Will Provide',
			href: '/additional-form-for-dentists-06',
			x: 77.21937321937322,
			y: 1158.2905982905984,
			width: 352.7521367521368,
			height: 47.384615384615245,
		},
		{
			id: 6,
			title: 'Position Statement Letter',
			href: '/additional-form-for-dentists-07',
			x: 70.1994301994302,
			y: 2091.94301994302,
			width: 373.8119658119658,
			height: 50.894586894587064,
		},
		{
			id: 7,
			title: 'Supporting Documents',
			href: '/additional-form-for-dentists-08',
			x: 593.1851851851851,
			y: 2095.4529914529912,
			width: 345.73219373219376,
			height: 47.3846153846157,
		},
		{
			id: 8,
			title: 'Signature',
			href: '/additional-form-for-dentists-09',
			x: 82.48433048433048,
			y: 2599.133903133903,
			width: 149.17378917378917,
			height: 45.62962962962956,
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
					Additional form for ambulance services
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
					src={DentistAdditionalFormImage}
					alt="Dentist Additional Form"
					width={1848}
					height={3143}
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
									top: `${(area.y / 3143) * 100}%`,
									width: `${(area.width / 1848) * 100}%`,
									height: `${(area.height / 3143) * 100}%`,
									cursor: 'pointer',
									'&:hover': {
										outline: '2px solid white',
										opacity: 0.2,
										backgroundColor: 'rgba(255, 255, 255, 0.2)',
									},
								}}
							/>
						</Link>
					</Tooltip>
				))}
			</Box>
		</Stack>
	);
};

export default DentistAdditionalFormPage;
