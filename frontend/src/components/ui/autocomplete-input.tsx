import * as React from "react";
import { cn } from "../../lib/utils";
import { Input, type InputProps } from "./input";

export interface AutocompleteInputProps<T>
	extends Omit<InputProps, "onChange" | "onSelect"> {
	options: T[];
	isLoading?: boolean;
	placeholder?: string;
	onSelect: (option: T) => void;
	onChange: (value: string) => void;
	getOptionLabel: (option: T) => string;
	renderOption?: (option: T) => React.ReactNode;
}

export const AutocompleteInput = <T,>({
	options,
	onSelect,
	onChange,
	getOptionLabel,
	renderOption,
	className,
	isLoading,
	placeholder,
	...props
}: AutocompleteInputProps<T>) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const inputRef = React.useRef<HTMLInputElement>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
		setIsOpen(true);
	};

	const handleOptionClick = (option: T) => {
		onSelect(option);
		setIsOpen(false);
		inputRef.current?.focus();
	};

	return (
		<div className="relative w-full">
			<Input
				ref={inputRef}
				onChange={handleInputChange}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setTimeout(() => setIsOpen(false), 200)}
				className={cn("w-full", className)}
				placeholder={placeholder}
				{...props}
			/>
			{isOpen && (
				<ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto mt-1">
					{isLoading ? (
						<li className="px-4 py-2 text-center">
							<div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900 mx-auto" />
						</li>
					) : options.length > 0 ? (
						options.map((option, index) => (
							<li
								key={getOptionLabel(option)}
								className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
								onClick={() => handleOptionClick(option)}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										handleOptionClick(option);
									}
								}}
								tabIndex={index}
							>
								{renderOption ? renderOption(option) : getOptionLabel(option)}
							</li>
						))
					) : (
						<li className="px-4 py-2 text-center text-gray-500">
							No options available
						</li>
					)}
				</ul>
			)}
		</div>
	);
};
