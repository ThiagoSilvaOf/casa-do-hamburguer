type ButtonProps = {
  title: string;
  variant?: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant = "default", ...props }: ButtonProps) => {
  const buttonVariant = () => {
    if (variant === "default") {
      return "bg-[#C92A0E] w-full cursor-pointer rounded-md border-1 border-[#C92A0E] py-2 text-sm font-bold text-white";
    } else if (variant === "outline") {
      return "bg-white w-full cursor-pointer rounded-md border-1 border-[#C92A0E] py-2 text-sm font-bold text-[#C92A0E]";
    }
  };

  return (
    <button {...props} className={buttonVariant()}>
      {title}
    </button>
  );
};

export default Button;
