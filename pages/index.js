import { getFeaturedEvents } from "../dummy";
import EventList from "../components/events/event-list";
const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <div>
      <h1>The Home Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
};
export default HomePage;
