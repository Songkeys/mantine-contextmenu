import { Box, Text } from '@mantine/core';
import clsx from 'clsx';
import Image from 'next/image';
import type { MouseEventHandler } from 'react';
import { PRODUCT_NAME } from '~/app/config';
import type { UnsplashImage } from '~/lib/images';
import { ExternalLink } from './ExternalLink';
import classes from './Picture.module.css';

export type PictureProps = {
  image: UnsplashImage;
  flipVertical?: boolean;
  flipHorizontal?: boolean;
  onContextMenu?: MouseEventHandler<HTMLDivElement>;
};

export function Picture({
  image: {
    file: { src },
    author: { name, profile },
  },
  flipVertical,
  flipHorizontal,
  onContextMenu,
}: PictureProps) {
  return (
    <Box className={classes.root} onContextMenu={onContextMenu}>
      <Image
        className={clsx(classes.image, {
          [classes.flipHorizontal]: flipHorizontal,
          [classes.flipVertical]: flipVertical,
        })}
        src={src}
        alt={`Picture by ${name} | ${PRODUCT_NAME}`}
        fill
        priority
      />
      <div className={classes.attribution}>
        <Text className={classes.attributionText}>
          Picture by <ExternalLink to={`https://unsplash.com/@${profile}`}>{name}</ExternalLink>
        </Text>
      </div>
    </Box>
  );
}
