import { Component } from 'react';

import { SoundCard } from './SoundCard';

export class Grid extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className='flex justify-around max-w-7xl sm:p-0 p-2 flex-grow flex-col sm:flex-row'>
                {Array(3)
                    .fill(0)
                    .map((_, colIdx) =>
                        <div key={colIdx}
                            className='flex-col flex-grow p-0 rounded-md min-w-min flex-1'>
                            {
                                this.props.data
                                    .filter((_, cardIdx) => cardIdx % 3 === colIdx)
                                    .map((cardData, cardIdx) =>
                                        <SoundCard key={`${colIdx}-${cardIdx}`}
                                            cardData={cardData}>
                                        </SoundCard>
                                    )
                            }
                        </div>
                    )
                }
            </div>
        );
    }
}