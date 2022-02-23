import {sliceResolver} from '../slices';
import React from 'react';
import {SliceLike, SliceZone, SliceZoneLike} from '@prismicio/react';
import {fetchHomePage} from '../utils/queries';

export interface HomeProps {
  slices: SliceZoneLike<SliceLike>;
}

export async function getStaticProps() {

  const doc = await fetchHomePage();
  console.log(doc);
  return {
    props: {
      slices: doc?.data?.slices || [],
    },
  };

}

export default class Home extends React.Component<HomeProps> {
  render() {
    return (
      <div>
        <SliceZone slices={this.props.slices} resolver={sliceResolver} defaultComponent={() => null}/>
      </div>
    );
  }
};



