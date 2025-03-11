import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Image from "next/image";
import Link from 'next/link';

type CardProps = {
    image: any;
    title: string;
    page: string;
};

export function DashboardCard({ image, title, page }: CardProps) {

    return (

        <Card sx={{ width: 360, height: 253, borderRadius: '25px', backgroundColor: '#E3ECFF' }}>
            <Link href={page} style={{ textDecoration: 'none' }}>
                <Image src={image} alt="Alarms logo"
                    layout="responsive" width={100} height={70} objectFit="cover" />
            </Link>
            <CardContent>
                <Link href={page} style={{ textDecoration: 'none' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <Typography variant="body1" color="text.secondary" textAlign="center">
                            {title}
                        </Typography>
                    </Box>
                </Link>
            </CardContent>
        </Card>
    );
}