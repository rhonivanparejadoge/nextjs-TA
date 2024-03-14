import * as React from 'react';
import Image from 'next/image'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { ItemCardInterface } from './Card.interface';

import styles from './Card.module.scss';

const ItemCard = ({ title, image } : ItemCardInterface) => {
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.Card}>
      <CardActionArea>
        <CardMedia className={styles.CardImageWrap} title={title}>
          <Image
            alt={title}
            src={image}
            fill={true}
            style={{objectFit: "cover"}}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ItemCard;