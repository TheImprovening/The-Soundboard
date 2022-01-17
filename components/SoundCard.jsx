import React from 'react';

import { Player } from './Player';

export class SoundCard extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="bg-white shadow-md p-6 m-2 rounded-lg h-48">
        <h1 className="text-2xl font-bold">{this.props.cardData.title}</h1>
        <Player
          media={this.props.cardData.fileName}
          playerId={this.props.cardData.id}
        ></Player>
        {this.props.cardData.source && (
          <div className="flex justify-end">
            <a
              href={this.props.cardData.source}
              target="_blank"
              className="text-sm text-gray-500 ml-auto"
              rel="noreferrer"
            >
              source
            </a>
          </div>
        )}
      </div>
    );
  }
}
