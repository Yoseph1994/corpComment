type HashtagItemProps = {
  company: string;
};

export default function HashtagItem({
  company,
  setFilterBy,
}: HashtagItemProps) {
  return (
    <li key={company}>
      <button
        onClick={() => {
          setFilterBy(company);
        }}
      >
        #{company}
      </button>
    </li>
  );
}
