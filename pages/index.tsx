import {PrismicClient} from '../prismic-config';
import {slicesComponents} from '../slices';
import React from 'react';
import {SliceLike, SliceZone, SliceZoneLike} from '@prismicio/react';

interface Slice<T = any> {
  i: number;
  slice: T,
  sliceName: string;
}

const resolver = ({sliceName}: Slice): typeof React.Component | null => {
  const comp = slicesComponents[sliceName];
  if(!comp){
    console.warn(`Could not find component for Slice type "${sliceName}"`)
  }
  return comp;
};

export interface HomeProps {
  slices: SliceZoneLike<SliceLike>;
}

export async function getStaticProps() {

  const doc = await PrismicClient.getSingle('home-page') || null;

  return {
    props: {
      slices: doc.data.slices,
    },
  };

}

export default class Home extends React.Component<HomeProps> {
  render() {
    console.log(this.props.slices);
    return (
      <div>
        <SliceZone slices={this.props.slices} resolver={resolver} defaultComponent={() => null}/>
      </div>
    );
  }
};



