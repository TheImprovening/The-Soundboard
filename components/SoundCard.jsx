import React from 'react';

import { Player } from './Player';

export class SoundCard extends React.Component {

    constructor(props) {
        super(props);
        this.props = props
    }

    render() {
        return(
            <div className='bg-white shadow-md p-6 lg:my-4 md:m-2 rounded-lg'>
                <h1 className='text-2xl font-bold'>{this.props.cardData.title}</h1>
                <Player media={this.props.cardData.fileName}
                        playerId={this.props.cardData.id}>
                </Player>
            </div>
        )
    }
}
