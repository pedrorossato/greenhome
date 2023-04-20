import React from "react";
import Green from "../../../assets/greenside.jpg";
import Blue from "../../../assets/blueside.jpg";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  Typography,
  Box,
  Container,
  Divider,
  Button,
} from "@mui/material";
import { DashboardRounded, Place, CarRental } from "@mui/icons-material";

function Empreendimentos() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" component="div">
            Empreendimentos
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              alt="Residencial Green"
              image={Green}
              sx={{ width: 250 }}
            />
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="h4">Residencial Green</Typography>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Place /> RUA
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <DashboardRounded /> N metros quadrados
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <CarRental /> Vaga de garagem
              </Box>
              <CardActions>
                <Button color="success" variant="contained">
                  Mais informações
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              alt="Residencial Blue"
              image={Blue}
              sx={{ width: 250 }}
            />
            <CardContent sx={{display: "flex", flexDirection: "column", justifyContent:"space-between"}}>
              <Typography variant="h4">Residencial Blue</Typography>
              <Divider sx={{ marginBottom: 1 }} />
              <Box
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <Place /> RUA JOÃO ATÍLIO ZAMPIERI, 170
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <DashboardRounded /> N metros quadrados
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <CarRental /> Vaga de garagem
              </Box>
              <CardActions>
                <Button variant="contained">Mais informações</Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Empreendimentos;
