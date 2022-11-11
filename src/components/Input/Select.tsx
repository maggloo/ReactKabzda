import React, {useState, KeyboardEvent} from "react";
import s from './Select.module.css'


export type ItemType = {
    title: string,
    value: any
}

type SelectPropsType = {
    value?: any,
    onChange: (value: any) => void,
    items: ItemType[],
}

export const Select = React.memo(SelectSecret);

function SelectSecret(props: SelectPropsType) {
    const [selectCollapsed, setSelectCollapsed] = useState(false);
    const [hoveredElValue, setHoveredElValue] = useState(props.value);

    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElValue);

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItem) {
                    setHoveredElValue(props.items[i + 1].value)
                    break
                }
            }
    }

    return (
        <div className={s.wrapper} tabIndex={0} onKeyUp={onKeyUp}>
            <div onClick={() => setSelectCollapsed(!selectCollapsed)}
                 className={s.selectName}>{selectedItem && selectedItem.title}</div>
            {selectCollapsed && props.items.map(el => <div
                onMouseEnter={() => setHoveredElValue(el.value)}
                className={s.optionName + ' ' + (hoveredItem === el ? s.selected : '')}
                key={el.value}
                onClick={() => {
                    props.onChange(el.value);
                    setSelectCollapsed(!selectCollapsed)
                }
                }

            >{el.title}</div>)}
        </div>
    )

}
