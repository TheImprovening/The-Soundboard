import { Component } from 'react';

import { SoundCard } from './SoundCard';

export class Grid extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (            
            <div className='flex justify-around max-w-7xl flex-grow md:flex-col lg:flex-row'>
                {Array(3)
                    .fill(0)
                    .map((_, colIdx) => 
                        <div key={colIdx} 
                             className='flex-col flex-grow lg:p-4 rounded-md min-w-min'>
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