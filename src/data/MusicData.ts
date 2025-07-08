import img1 from '../img/asdadga.png'
import img2 from '../img/funkdobounce.png'
import img3 from '../img/funkuniverso.png'
import img4 from '../img/aa6f7371a07dbf07277475de47507553.webp'
import img5 from '../img/kavin.png'
import img6 from '../img/425345.png'
import img7 from '../img/personaji.png'
import img8 from '../img/resonance.png'
import track1 from '../track/Lil Peep, XXXTENTACION - Falling Down (Slowed & Reverb).mp3'
import track2 from '../track/funkdobounce.mp3'
import track3 from '../track/Irokz Funk Universo.mp3'
import track4 from '../track/Modjo - Lady (Hear Me Tohight).mp3'
import track5 from '../track/sadsvit-personazhi-(meloua.com) (2).mp3'
import track6 from '../track/Kevin MacLeod - Local Forecast - Elevator.mp3'
import track7 from '../track/Rust_-_Fishing_village_75860584.mp3'
import track8 from '../track/a69ab5f09f8ded454c37af58befefd36.mp3'

type Tracks = {
    id: number;
    name: string;
    creator: string;
    avatarTrack: string;
    track: string;
}

export const TrackList: Tracks[] = [
    {
        id: 1,
        name: 'Falling Down - Bonus Track',
        creator: 'Lil Peep, XXXTENTACION',
        avatarTrack: img1,
        track: track1
    },
    {
        id: 2,
        name: 'FUNK DO BOUNCE (Slowed)',
        creator: 'Airis',
        avatarTrack: img2,
        track: track2
    },
    {
        id: 3,
        name: 'FUNK UNIVERSO',
        creator: 'Irokz',
        avatarTrack: img3,
        track: track3
    },
    {
        id: 4,
        name: 'Laby (Hear Me Tonigth)',
        creator: 'Modjo',
        avatarTrack: img4,
        track: track4
    },
    {
        id: 5,
        name: 'Local Forecast - Elevator',
        creator: 'Kevin MacLeod',
        avatarTrack: img5,
        track: track6
    },
    {
        id: 6,
        name: 'Персонажі',
        creator: 'SadSvit',
        avatarTrack: img7,
        track: track5
    },
    {
        id: 7,
        name: 'Fishing village',
        creator: 'RUST',
        avatarTrack: img6,
        track: track7
    },
    {
        id: 8,
        name: 'Resonance',
        creator: 'HOME',
        avatarTrack: img8,
        track: track8
    },
]