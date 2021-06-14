import { useRouter } from "next/router";
import { getEventById } from "../../dummy";
import EventItem from "../../components/events/event-item";
const EventItemPage = () => {
  const router = useRouter();
  const { query } = router;
  const eventId = query.eventId;
  const event = getEventById(eventId);
  console.log(event);
  return (
    <div>
      <h1>This is event with id: {query.eventId}</h1>
      <EventItem event={event}></EventItem>
    </div>
  );
};

export default EventItemPage;
