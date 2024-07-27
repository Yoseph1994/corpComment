type messageTypes = {
  message: string;
};
export default function ErrorMessage({ message }: messageTypes) {
  return <div>{message}</div>;
}
