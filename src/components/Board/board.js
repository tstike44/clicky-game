import React, { Component } from 'react';


import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        "id": 1,
        "name": "butcher",
        "image": "https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8qx78gtycvej.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2fqx78gtycvej_icogrgfkcx2fvjwodx2ffx2ff9x2fTqcfjqi_Umkp_Dwvejgt.rpix2f372rz-Tqcfjqi_Umkp_Dwvejgt.rpix3fx78gtukqpx3deg05g311cf96654hdc407g7831786f55x26k32e.octmx3dkocig_$/$/$/$/$/$/$"
    },
    {
        "id": 2,
        "name": "islander",
        "image": "https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8qx78gtycvej.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2fqx78gtycvej_icogrgfkcx2fvjwodx2ffx2ffdx2fTqcfjqi_Umkp_Kuncpfgt.rpix2f372rz-Tqcfjqi_Umkp_Kuncpfgt.rpix3fx78gtukqpx3d6438fh07701202h2g767c87ed7304f1hx26k32e.octmx3dkocig_$/$/$/$/$/$/$"
    },
    {
        "id": 3,
        "name": "toa",
        "image": "https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8qx78gtycvej.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2fqx78gtycvej_icogrgfkcx2fvjwodx2fgx2fg5x2fTqcfjqi_Umkp_Vqc.rpix2f372rz-Tqcfjqi_Umkp_Vqc.rpix3fx78gtukqpx3d1gf365c643503733930122c82e81gd37x26k32e.octmx3dkocig_$/$/$/$/$/$/$"
    },
    {
        "id": 4,
        "name": "mako",
        "image": "https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8qx78gtycvej.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2fqx78gtycvej_icogrgfkcx2fvjwodx2f2x2f24x2fTqcfjqi_Umkp_Ocmq.rpix2f372rz-Tqcfjqi_Umkp_Ocmq.rpix3fx78gtukqpx3dhc84e56dg3g37h8755h6g537gc4068h7x26k32e.octmx3dkocig_$/$/$/$/$/$/$"
    },
    {
        "id": 5,
        "name": "sharkbait",
        "image": "https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8qx78gtycvej.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2fqx78gtycvej_icogrgfkcx2fvjwodx2f9x2f96x2fTqcfjqi_Umkp_Ujctmdckv.rpix2f372rz-Tqcfjqi_Umkp_Ujctmdckv.rpix3fx78gtukqpx3dhe99262ceee795hcgd16c62362629444x26k32e.octmx3dkocig_$/$/$/$/$/$/$"
    },
    {
        "id": 6,
        "name": "baijie",
        "image": "https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8qx78gtycvej.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2fqx78gtycvej_icogrgfkcx2fvjwodx2f8x2f81x2fTqcfjqi_Umkp_Dclkg.rpix2f372rz-Tqcfjqi_Umkp_Dclkg.rpix3fx78gtukqpx3d6d715f25ff60hd7f8f3c320f9c54856dx26k32e.octmx3dkocig_$/$/$/$/$/$/$"
    },
    {
        
        "id": 7,
        "name": "monster",
        "image": "https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8qx78gtycvej.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2fqx78gtycvej_icogrgfkcx2fvjwodx2f4x2f49x2fJcnnqyggpVgttqt_Tqcfjqi_Umkp_Lwpmgpuvgkpx2549u_Oqpuvgt.rpix2f372rz-JcnnqyggpVgttqt_Tqcfjqi_Umkp_Lwpmgpuvgkpx2549u_Oqpuvgt.rpix3fx78gtukqpx3de238e0cf728ddf313fg58gec2ce8e0gex26k32e.octmx3dkocig_$/$/$/$/$/$/$"
    },
    {
        "id": 8,
        "name": "fisherman",
        "image": "https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8qx78gtycvej.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2fqx78gtycvej_icogrgfkcx2fvjwodx2f9x2f99x2fTqcfjqi_Umkp_Keg_Hkujgtocp.rpix2f372rz-Tqcfjqi_Umkp_Keg_Hkujgtocp.rpix3fx78gtukqpx3df495e02f000067hhh331771069d0fg99x26k32e.octmx3dkocig_$/$/$/$/$/$/$"
    },
    {
        "id": 9,
        "name": "lacrosse",
        "image": "https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8qx78gtycvej.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2fqx78gtycvej_icogrgfkcx2fvjwodx2ffx2ff2x2fTqcfjqi_Umkp_Ncetquug.rpix2f372rz-Tqcfjqi_Umkp_Ncetquug.rpix3fx78gtukqpx3d88g6edd239h587049gd54887935g76e3x26k32e.octmx3dkocig_$/$/$/$/$/$/$"
    },
    {
        "id": 10,
        "name": "pigpen",
        "image": "https://c-4tvylwolbz88x24nhtlwlkphx2ejbyzljkux2ejvt.g00.gamepedia.com/g00/3_c-4vclydhajo.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fnhtlwlkph.jbyzljku.jvtx2fvclydhajo_nhtlwlkphx2faobtix2f9x2f9kx2fYvhkovn_Zrpu_Wpnwlu.wunx2f827we-Yvhkovn_Zrpu_Wpnwlu.wunx3fclyzpvux3dkk39590k6576l79i659m250imil6i32lx26p87j.thyrx3dpthnl_$/$/$/$/$/$/$"
    },
    {
        "id": 11,
        "name": "rudolph",
        "image": "https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8qx78gtycvej.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2fqx78gtycvej_icogrgfkcx2fvjwodx2f7x2f77x2fTqcfjqi_Umkp_Twfqnrj.rpix2f372rz-Tqcfjqi_Umkp_Twfqnrj.rpix3fx78gtukqpx3dgh72g30ffgc232131che58902e421c1gx26k32e.octmx3dkocig_$/$/$/$/$/$/$"
    },
    {
        "id": 12,
        "name": "stitched",
        "image": "https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8qx78gtycvej.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2fqx78gtycvej_icogrgfkcx2fvjwodx2fgx2fg8x2fTqcfjqi_Umkp_Uvkvejgf.rpix2f372rz-Tqcfjqi_Umkp_Uvkvejgf.rpix3fx78gtukqpx3dfghdhc516373f5337d8egfdfe4g405d1x26k32e.octmx3dkocig_$/$/$/$/$/$/$"
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}