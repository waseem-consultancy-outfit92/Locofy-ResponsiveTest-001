'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import { AutismLearningDisabilityServicesFormImage } from "@/assets";
import { Stack, Typography } from '@mui/material';
import { CheckboxForm } from '@/components/checkbox-form';
import { CommonBackIcon } from '@/assets/common-assets';
import { useRouter } from "next/navigation";

const AutismLearningDisabilityServicesFormPage = () => {
	const router = useRouter();
	const areas = [
		{
			id: 1,
			title: 'Introduction',
			href: '/additional-form-for-autism-learning-disability-services-01',
			x: 33.344729344729345,
			y: 289.5726495726496,
			width: 182.51851851851853,
			height: 47.38461538461536,
		},
		{
			id: 2,
			title: 'There is a clear need for the service, and it has been agreed by commissioners',
			href: '/additional-form-for-autism-learning-disability-services-02',
			x: 82.48433048433048,
			y: 1049.4814814814815,
			width: 1088.0911680911681,
			height: 49.139601139601155,
		},
		{
			id: 3,
			title: 'The size, setting, and design of the service meet people\'s expectations and align with current best practice',
			href: '/additional-form-for-autism-learning-disability-services-03',
			x: 78.97435897435898,
			y: 1618.096866096866,
			width: 1470.6780626780628,
			height: 45.62962962962956,
		},
		{
			id: 4,
			title: 'People have access to the community',
			href: '/additional-form-for-autism-learning-disability-services-04',
			x: 78.97435897435898,
			y: 2729.002849002849,
			width: 531.7606837606837,
			height: 56.15954415954411,
		},
		{
			id: 5,
			title: 'The model of care, policies, and procedures are in line with current best practice',
			href: '/additional-form-for-autism-learning-disability-services-05',
			x: 77.21937321937322,
			y: 3099.3048433048434,
			width: 1121.4358974358975,
			height: 49.13960113960093,
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
					Services for autistic People with learning Disability
				</Typography>
			</Stack>
			<CheckboxForm onChange={() => { }} />
			<Box sx={{
				position: 'relative',
				width: '100%',
				maxWidth: '1848px',
				margin: '0 auto',
				height: 'auto',
				overflow: 'hidden',
				backgroundColor: '#f5f5f5', // Light background for better contrast
				borderRadius: '4px', // Soft rounded corners
				boxShadow: '0 2px 8px rgba(0,0,0,0.1)' // Subtle shadow
			}}>
				<Image
					src={AutismLearningDisabilityServicesFormImage}
					alt="Services for Autistic People with Learning Disability Form"
					width={1848}
					height={3692}
					priority
					style={{
						width: '100%',
						height: 'auto',
						objectFit: 'contain',
						display: 'block' // Remove extra space below image
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
									bgcolor: '#333',
									color: 'white',
									'& .MuiTooltip-arrow': {
										color: '#333',
									},
									maxWidth: 450,
									fontSize: '0.875rem',
									padding: '10px 14px',
									lineHeight: '1.4',
									borderRadius: '4px'
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
									top: `${(area.y / 3692) * 100}%`,
									width: `${(area.width / 1848) * 100}%`,
									height: `${(area.height / 3692) * 100}%`,
									cursor: 'pointer',
									transition: 'all 0.2s ease',
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

export default AutismLearningDisabilityServicesFormPage;
