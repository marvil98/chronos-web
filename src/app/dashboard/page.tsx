import Navbar from "@/components/Navbar";
import { Container, Grid } from "@mui/material";
import { DashboardCard } from "./dashboard-card";
import alarmsImage from '@/assets/Alarms-ico.svg';
import configImage from '@/assets/Config-ico.svg';
import reportsImage from '@/assets/Reports-ico.svg';

export default function Dashboard() {

    const cardsData = [
        { id: 1, title: 'MIS ALARMAS', image: alarmsImage, page: '/alarmas' },
        { id: 2, title: 'CONFIGURAR NOTIFICACIONES', image: configImage, page: '/notificaciones' },
        { id: 3, title: 'REPORTES', image: reportsImage, page: '/reportes' }
    ];

    return (
        <>
            <Navbar />
            <Container sx={{ mt: "25px !important" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {cardsData.map((card, index) => (
                        <Grid xs={6} key={card.id} style={{ marginBottom: index < cardsData.length - 2 ? '2.438em' : '0' }}>
                            <DashboardCard title={card.title} image={card.image} page={card.page} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}