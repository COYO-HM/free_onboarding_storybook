import {ReactNode} from "react";

const ButtonGroup = ({children}: { children?: ReactNode }) => {
    return <div className="card">
        {children}
    </div>
}

export default ButtonGroup