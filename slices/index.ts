import PromoSectionImageTiles from './promo-section-image-tiles';
import React from 'react';
import {SliceComponentProps} from '@prismicio/react';
import ProductListWithCta from './product_list_with_cta';

interface SliceComponent {
  [key: string]: typeof React.Component;
}

export type SliceComponentPropsDto<T = any, P = any> = SliceComponentProps<SlicePropsData<T, P>>

export interface SlicePropsData<T, P> {
  items: T[];
  primary: P;
  slice_label: string | null;
  slice_type: string;
  variation: string;
  version: string;
}

export const slicesComponents: SliceComponent = {
  PromoSectionImageTiles: PromoSectionImageTiles,
  ProductListWithCta: ProductListWithCta,
};
