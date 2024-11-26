/* eslint-disable @typescript-eslint/no-explicit-any */

import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function TextInput({
  classNameContainer,
  ...props
}: {
  [x: string]: any;
  classNameContainer: string;
}) {
  return (
    <div className={classNameContainer}>
      <Label htmlFor={props.label}>{props.label}</Label>
      <Input type="text" {...props} placeholder={props.label}/>
    </div>
  );
}
