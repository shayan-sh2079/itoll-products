import { ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {
  labelProps?: Omit<ComponentProps<"label">, "children">;
  label: string;
}

const Input = ({ labelProps, label, className, ...props }: Props) => {
  return (
    <label
      {...labelProps}
      className={"flex items-center gap-3 text-sm font-semibold italic"}
    >
      <p className={"hidden lg:block"}>{label}:</p>
      <input
        className={
          "rounded border border-blue-300 px-3 py-2 outline-none focus:border-blue-500 " +
          className
        }
        type="text"
        {...props}
      />
    </label>
  );
};

export default Input;
