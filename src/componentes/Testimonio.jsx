import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from '@mui/material';
import  '../App.css';


function Testimonio({ testimo }) {
    const [like, setLike] = useState({});

    const toggleLike = (id) => {
        setLike(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        testimo.map((test) => (
            <Box key={test.ID} sx={{ padding: '20px'  }}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia sx={{height: 430}}
                        component="img"
                        alt={test.alt}
                        height="140"
                        image={test.img}
                    />
                    <CardContent>
                        <Typography>{test.nombre}</Typography>
                        <Typography>{test.descripcion}</Typography>
                        <IconButton onClick={() => toggleLike(test.ID)}>
                            {like[test.ID] ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                        </IconButton>
                    </CardContent>
                </Card>
            </Box>
        ))
    );
}

export default Testimonio;
