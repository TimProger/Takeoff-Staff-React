import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ICardProps {
    name: string,
    description: string,
    phone: string
}

const CardContainer = ({name, description, phone}: ICardProps) => {
    return (
        <Card sx={{ minWidth: 375 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {phone}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained">Call</Button>
            </CardActions>
        </Card>
    );
};

export default CardContainer;