import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { Label, RadioGroup, RadioGroupItem } from "../ui";
import { InputProps } from "@/interface/interfaces";

interface RadioGroupProps extends InputProps {
  items: string[];
  radioGroupClassName: string;
}

export default function RadioGroupInput({
  radioGroupClassName,
  classNameContainer,
  items,
  ...props
}: RadioGroupProps) {
  return (
    <div className={classNameContainer}>
      <Label htmlFor={props.label}>{props.label}</Label>
      <RadioGroup
        defaultValue={`option-${items[0]}`}
        className={radioGroupClassName}
      >
        {items.map((item) => (
          <div
            className="flex items-center space-x-2 border border-slate-600 p-2 rounded-[6px] w-full flex-1 bg-slate-800"
            key={item}
          >
            <RadioGroupItem value={`option-${item}`} id={`option-${item}`} />
            <Label htmlFor={`option-${item}`} className="w-full">
              {capitalizeFirstLetter(item)}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
