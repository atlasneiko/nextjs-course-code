import EventItem from "./event-item";
const EventList = ({ events = [] }) => {
  return (
    <ul>
      {events.map((event, idx) => {
        return <EventItem event={event} key={event.id} />;
      })}
    </ul>
  );
};
export default EventList;
