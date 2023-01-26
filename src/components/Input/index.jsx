import React from "react";
import cx from "classnames";
import { Field } from "formik";

const Input = (props) => {
	const { name, label, styles, ...restProps } = props;
	const { wrapperInput, input, inputValid, inputInvalid, error } = styles;
	return (
		<div className={wrapperInput}>
			<Field name={name}>
				{({ 
            field, 
            form: { errors, touched }, 
            meta,
          }) => {
					const inputEmailCN = cx(input, {
						[inputValid]: !meta.error && meta.touched,
						[inputInvalid]: meta.error && meta.touched,
					});

					return (
						<label>
							<input className={inputEmailCN} {...restProps} {...field} />
              {meta.touched && meta.error && (
                <div className={error}>{meta.error}</div>
              )}
            </label>
					);
				}}
			</Field>
		</div>
	);
};

export default Input;
