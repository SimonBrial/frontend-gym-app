import { FormDescription, FormControl, FormField, FormItem } from "../ui/form";
import { InputProps } from "@/interface/interfaces";
import { Input, Label } from "../ui";

export default function NumberInput({
  classNameContainer,
  description,
  inputName,
  inputType,
  control,
  ...props
}: InputProps) {
  return (
    <div className={classNameContainer}>
      <Label htmlFor={props.label}>{props.label}</Label>
      <FormField
        control={control}
        name={inputName}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                type={inputType}
                placeholder={props.label}
                {...props}
                {...field}
                //defaultValue={1}
                value={
                  field.value !== undefined && field.value !== null
                    ? Number(field.value)
                    : ""
                }
                onChange={(e) =>
                  field.onChange(
                    e.target.value /* ? Number(e.target.value) : undefined, */,
                  )
                }
                /* min={props.min}
                  max={props.max} */
              />
            </FormControl>
            <FormDescription>{description}</FormDescription>
            {/* <FormMessage></FormMessage> */}
          </FormItem>
        )}
      />
    </div>
  );
}
