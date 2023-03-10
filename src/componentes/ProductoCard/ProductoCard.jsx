

import React from 'react'


    import {
      Button,
      Card,
      CardActions,
      CardContent,
      CardMedia,
      Typography,
    } from "@mui/material";
    import { Link } from "react-router-dom";
    
    const ProductoCard = ( { element } ) => {
      return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image={element.img}
            alt="imagen producto"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="primary"
              align="center"
            >
              {element.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" align="center">
              {element.description}
            </Typography>
            <Typography variant="body1" color="secondary" align="center">
              ${element.price}
            </Typography>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "center" }}>
            <Link to={`/itemDetail/${element.id}`}>
              <Button
                
                size="large"
                variant="contained"
                sx={{ textTransform: "none" }}
              >
                MAS DETALLES
              </Button>
            </Link>
          </CardActions>
        </Card>
  )
}

export default ProductoCard