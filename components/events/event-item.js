import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "../ui/button";
const EventItem = ({ event }) => {
  const EventLink = `/events/${event.id}`;
  return (
    <li className={classes.eventItem}>
      <h1>{event.title}</h1>
      <img src={`/${event.image}`} alt={`${event.title}-img`} />
      <h3>{`location: ${event.location}`}</h3>
      <p>{`date: ${event.date}`}</p>

      <p>{event.description}</p>
      <Button link={EventLink}>Event Page</Button>
      {/* <Link href={EventLink}>Event Page</Link> */}
    </li>
  );
};
export default EventItem;
