import { Control, Controller } from "react-hook-form";
import { Select } from "antd";

interface RHFSelectFieldProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
  options: any;
  onChange?: (value: string) => void;
}

const { Option } = Select;

const RHFSelectField = (props: RHFSelectFieldProps) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{
        required: "This field is required",
      }}
      render={({ field, fieldState }) => {
        return (
          <>
            <Select
              status={fieldState.error ? "error" : undefined}
              ref={field.ref}
              //   name={field.name}
              onBlur={field.onBlur}
              value={field.value || null}
              placeholder={props.placeholder}
              onChange={(value) => {
                field.onChange(value);
                if (props.onChange) {
                  props.onChange(value);
                }
              }}
            >
              {props.options.map((option: any) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
            <br />
            {fieldState.error ? (
              <span style={{ color: "red" }}>{fieldState.error?.message}</span>
            ) : null}
          </>
        );
      }}
    />
  );
};

export default RHFSelectField;
