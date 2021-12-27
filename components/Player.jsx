import { Component } from 'react';

export class Player extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            playing: false,
            computedWidth: 0,
        }
    }

    componentDidMount() {
        this.setState((prevState, props) => ({
            ...prevState,
            playerRef: document.querySelector(`#player-${props.playerId}`)  
        }));

    }

    play = () => {
        if(this.state.playing == false) {
            this.setState((prevState) => ({
                ...prevState,
                playing: true
            }))

            this.state.playerRef.play();
        } else {
             this.setState((prevState) => ({
                ...prevState,
                playing: false
            }))

            this.state.playerRef.pause();
        }
    }

    onAudioEnded = () => {
        if(this.state.playing) {
            this.setState((prevState) => ({
                ...prevState,
                playing: false,
                computedWidth: 0
            }))
        }
    }

    onTimeUpdate = (evt) => {
        const currentTime = this.state.playerRef.currentTime;
        this.setState((prevState) => ({
            ...prevState,
            computedWidth: (currentTime * 100 / prevState.duration)
        }))
    }

    onLoadedData = () => {
            this.setState((prevState) => ({
                ...prevState,
                duration: prevState.playerRef.duration
            }))
    }

    render() {
        return (
            <>
            <audio id={`player-${this.props.playerId}`}
                   onEnded={this.onAudioEnded}
                   onTimeUpdate={this.onTimeUpdate}
                   onLoadedData={this.onLoadedData}
                   src={this.props.media}
                   loop={false}>
            </audio>
            <div className='flex items-center mt-4'>
                <button className='bg-slate-200 p-3 rounded-full' onClick={this.play}>
                    {
                        !this.state.playing 
                        ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )
                        : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )
                    }
                </button>

                <div className='ml-2 flex-grow relative'>
                    <div className='bg-slate-200 min-w-full h-2 rounded-full absolute'></div>
                    <div className='bg-slate-500 h-2 rounded-full absolute z-10' style={{width: `${this.state.computedWidth}%`}}></div>
                </div>
            </div>
            </>
        )
    }
}