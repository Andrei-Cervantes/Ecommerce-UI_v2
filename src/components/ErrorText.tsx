interface ErrorTextProps {
  text: string | undefined;
}

const ErrorText: React.FC<ErrorTextProps> = ({ text }) => {
  return <p className="text-destructive text-sm mt-1">{text}</p>;
};

export default ErrorText;
