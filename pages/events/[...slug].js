import { useRouter } from "next/router";

const FilteredEventPage = () => {
  const router = useRouter();
  const { query } = router;
  console.log(query);
  return (
    <div>
      <h1>Filtered Events</h1>
      <ul>
        {query.slug
          ? query.slug.map((ele, idx) => <li key={`${ele}-${idx}`}>{ele}</li>)
          : null}
      </ul>
    </div>
  );
};

export default FilteredEventPage;
