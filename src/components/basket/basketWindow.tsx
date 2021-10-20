import {fileManager} from '../../store/fileManager'
import {observer} from "mobx-react-lite";

export const BasketWindow = observer(
    () => {

        const {} = fileManager

        return (
            <div>
                <ul>

                </ul>
            </div>
        )
    }
)