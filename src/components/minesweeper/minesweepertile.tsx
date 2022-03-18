import React, {useState} from "react"

export enum mstiletype {
    Blank,
    Mine,
}
export enum mstilestate {
    Blank=0,
    Mine=1,
    Exposed=2,
    Flagged=3,
    Exploded=4
}

type MSTileProps =
    {
        col: number,
        row: number,
        type?: mstiletype,
        state?: mstilestate,
        adjacent: number
    }

const MinesweeperTile: React.FC<MSTileProps> = (props) => {
    
    const [state,setState] = useState(mstilestate.Blank);
    const updateState = (event: any) => {
        event.preventDefault();
        //
        if (state === mstilestate.Blank) {
            if (props.type == mstiletype.Mine) {
                setState(mstilestate.Exploded);
            }
            if (props.type == mstiletype.Blank) {
                setState(mstilestate.Exposed);
            }
        }
    }

    const toggleFlag = (event: any) => {
        event.preventDefault();
        if (state === mstilestate.Flagged) {
            setState(mstilestate.Blank);
        } else if (state === mstilestate.Blank) {
            setState(mstilestate.Flagged);
        }
    }
    return (<div className={`col-ms-${state}`} onClick={updateState} onContextMenu={toggleFlag}>
        {(state === mstilestate.Exposed && props.adjacent > 0) ? props.adjacent : ""}
    </div>)
}

MinesweeperTile.defaultProps = {
    type: mstiletype.Blank,
    state: mstilestate.Blank
};

export default MinesweeperTile;