import {SliceLike, SliceZone, SliceZoneLike} from '@prismicio/react';
import {fetchProductPage, fetchProductsPage} from '../../utils/queries';
import React from 'react';
import {sliceResolver} from '../../slices';
import {GetStaticPathsResult, GetStaticPropsContext} from 'next/types';

export interface ProductPageProps {
  slices: SliceZoneLike<SliceLike>;
}

export async function getStaticProps({params}: GetStaticPropsContext) {
  if(!params?.uid){
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const doc = await fetchProductPage(params.uid as string);
  return {
    props: {
      slices: doc?.data?.slices || [],
    },
  };

}

export async function getStaticPaths(): Promise<GetStaticPathsResult<any>> {
  const products = await fetchProductsPage() || [];
  return {
    paths: products.map((c) => ({
      params: {
        uid: c.uid,
      },
    })),
    fallback: false,
  };
}

export default class ProductPage extends React.Component<ProductPageProps> {
  render() {
    return (
      <div>
        <SliceZone slices={this.props.slices} resolver={sliceResolver} defaultComponent={() => null}/>
      </div>
    );
  }
};
