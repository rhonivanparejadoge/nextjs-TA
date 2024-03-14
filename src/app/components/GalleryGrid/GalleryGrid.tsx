

import { GalleryGridInterface } from "./GalleryGrid.interface";
import { ItemCardInterface } from "../Card/Card.interface";

import ItemCard from '../Card/Card';

import styles from './GalleryGrid.module.scss';

const GalleryGrid = ({ galleryData } : GalleryGridInterface) => {
  return <div className={styles.container}>
          {galleryData.map(({ id, title, image }: ItemCardInterface) => {
            return <ItemCard 
            id={id} 
            key={id} 
            title={title} 
            image={image}  />
          })}
        </div>
}

export default GalleryGrid;