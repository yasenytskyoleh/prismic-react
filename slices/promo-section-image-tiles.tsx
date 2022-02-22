import {ImageFieldImage, LinkField} from '@prismicio/types';
import React from 'react';
import Image from 'next/image';
import {SliceComponentPropsDto} from './index';

interface PromoSectionImageTilesPrimaryProps {
  readonly backgroundColor: string;
  readonly image1: ImageFieldImage;
  readonly image2: ImageFieldImage;
  readonly image3: ImageFieldImage;
  readonly image4: ImageFieldImage;
  readonly image5: ImageFieldImage;
  readonly image6: ImageFieldImage;
  readonly image7: ImageFieldImage;
  readonly link: LinkField;
  readonly linkLabel: string;
  readonly subtitle: string;
  readonly title: string;
}

type PromoSectionImageTilesProps = SliceComponentPropsDto<any, PromoSectionImageTilesPrimaryProps>;

export default class PromoSectionImageTiles extends React.Component<PromoSectionImageTilesProps, PromoSectionImageTilesPrimaryProps> {
  constructor(props: PromoSectionImageTilesProps) {
    super(props);
    this.state = props.slice.primary;
  }

  render() {
    return (

      <div className="relative overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1
                className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">{this.state?.title}</h1>
              <p>{this.state?.subtitle}</p>
            </div>
            <div className="mt-10">
              <div className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                <div
                  className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      {
                        this.state.image1.url &&
												<div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
													<img src={this.state.image1.url} alt={this.state.image1.alt || ''}/>
												</div>
                      }
                      {
                        this.state.image2.url &&
												<div className="w-44 h-64 rounded-lg overflow-hidden">
													<img src={this.state.image2.url} alt={this.state.image2.alt || ''}/>
												</div>
                      }
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      {
                        this.state.image3.url &&
												<div className="w-44 h-64 rounded-lg overflow-hidden">
													<img src={this.state.image3.url} alt={this.state.image3.alt || ''}/>
												</div>
                      }
                      {
                        this.state.image4.url &&
												<div className="w-44 h-64 rounded-lg overflow-hidden">
													<img src={this.state.image4.url} alt={this.state.image4.alt || ''}/>
												</div>
                      }
                      {
                        this.state.image5.url &&
												<div className="w-44 h-64 rounded-lg overflow-hidden">
													<img src={this.state.image5.url} alt={this.state.image5.alt || ''}/>
												</div>
                      }
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      {
                        this.state.image6.url &&
												<div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
													<img src={this.state.image6.url} alt={this.state.image6.alt || ''}/>
												</div>
                      }
                      {
                        this.state.image7.url &&
												<div className="w-44 h-64 rounded-lg overflow-hidden">
													<img src={this.state.image7.url} alt={this.state.image7.alt || ''}/>
												</div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

