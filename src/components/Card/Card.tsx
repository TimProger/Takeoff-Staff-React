import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ICardProps {
    name: string,
    description: string,
    phone: string,
    deleteContact: (id: number) => void,
    id: number
}

const Card_ = ({name, description, phone, deleteContact, id}: ICardProps) => {
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
                <Button size="small" variant="contained">Update</Button>
                <Button size="small" variant="contained" onClick={()=>deleteContact(id)}>Delete</Button>
            </CardActions>
        </Card>
    );
};

export default Card_;