import {
  FormDescription,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
} from "../ui/form";

import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import { RadioGroup, RadioGroupItem } from "../ui";
import { InputProps } from "@/interface/interfaces";

interface RadioGroupProps extends InputProps {
  items: string[];
  radioGroupClassName: string;
}

export default function RadioGroupInput({
  radioGroupClassName,
  classNameContainer,
  description,
  inputName,
  control,
  items,
  ...props
}: RadioGroupProps) {
  return (
    <div className={classNameContainer}>
      <FormField
        control={control}
        name={inputName}
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor={props.label}>{props.label}</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className={radioGroupClassName}
                // defaultValue={`option-${items[0]}`}
              >
                {items.map((item) => (
                  <FormItem
                    key={item}
                    className="flex items-center space-x-2 border border-slate-600 p-2 rounded-md w-full flex-1 bg-slate-800"
                  >
                    <FormControl>
                      <RadioGroupItem
                        value={item}
                        id={item}
                      />
                    </FormControl>
                    <FormLabel htmlFor={item} className="w-full">
                      {capitalizeFirstLetter(item)}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormDescription>{description}</FormDescription>
            {/* <FormMessage></FormMessage> */}
          </FormItem>
        )}
      />
    </div>
  );
}
