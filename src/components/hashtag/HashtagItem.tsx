type THashtagItemProps = {
  company: string;
  onSelectCompany: (text: string) => void;
};

export default function HashtagItem({
  company,
  onSelectCompany,
}: THashtagItemProps) {
  return (
    <li>
      <button onClick={() => onSelectCompany(company)}>#{company}</button>
    </li>
  );
}
