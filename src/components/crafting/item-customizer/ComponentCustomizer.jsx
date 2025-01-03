import { Item } from "components";
import { Rarities } from "models";
import { useState } from "react";

export const ComponentCustomizer = ({ customizableComponent, componentIndex, onComponentCustomized, quantity = null }) => {
    const [customizationOptions] = useState(customizableComponent.possibleCustomizations);

    const customizeComponent = e => {
        onComponentCustomized(customizableComponent, customizationOptions[e.target.value], e.target.value);
    }

    const selectId = `customization-${componentIndex}`;
    const currentCustomization = customizableComponent.customization;
    const defaultSelectValue = currentCustomization ? customizableComponent.possibleCustomizations.indexOf(currentCustomization) : "default";

    // This is the ugliest thing you've probably seen in your life
    // BUT! It supports a use case for 2 items out of 500+ and it took me 10 seconds to code...
    // ¯\_(ツ)_/¯
    const customizationType = customizationOptions[0].customizationEffects[Rarities.Common.name][0].type;

    return (
        <div className="flex items-center">
            <div className="h4 w4">
                <Item item={customizableComponent} />
            </div>
            <div className="flex flex-column ml2 space-between">
                <label className="mb1" htmlFor={selectId}>{customizationType} for {quantity ? `${quantity} ` : ""}{customizableComponent.baseName}</label>
                <select className="stat-selector | w-100 peach-puff bg-marine pointer" name={selectId} id={selectId} onChange={customizeComponent} defaultValue={defaultSelectValue}>
                    <option disabled value="default"> -- select a stat -- </option>
                    {customizationOptions.map((customizationOption, i) => (
                        <option key={customizationOption.id} value={i}>
                            {formatCustomizationEffects(customizationOption.getCustomizationEffects(customizableComponent.rarity))}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

const formatCustomizationEffects = customizationEffects => customizationEffects.map(ce => ce.effect).join(" + ");