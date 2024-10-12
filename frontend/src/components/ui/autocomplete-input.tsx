import * as React from "react";
import { cn } from "../../lib/utils";
import { Input, type InputProps } from "./input";

export interface AutocompleteInputProps<T>
	extends Omit<InputProps, "onChange" | "onSelect"> {
	options: T[];
	onSelect: (option: T) => void;
	onChange: (value: string) => void;
	getOptionLabel: (option: T) => string;
	renderOption?: (option: T) => React.ReactNode;
}

export function AutocompleteInput<T>({
	options,
	onSelect,
	onChange,
	getOptionLabel,
	renderOption,
	className,
	...props
}: AutocompleteInputProps<T>) {
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
		<div className="relative">
			<Input
				ref={inputRef}
				onChange={handleInputChange}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setTimeout(() => setIsOpen(false), 200)}
				className={cn("w-full", className)}
				{...props}
			/>
			{isOpen && options.length > 0 && (
				<ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto mt-1">
					{options.map((option, index) => (
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
					))}
				</ul>
			)}
		</div>
	);
}
