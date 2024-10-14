/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function TextInput({
  classNameLabel,
  ...props
}: {
  [x: string]: any;
  classNameLabel: string;
}) {
  return (
    <div className={classNameLabel}>
      <Label htmlFor={props.label}>{props.label}</Label>
      <Input type="text" {...props} />
    </div>
  );
}
