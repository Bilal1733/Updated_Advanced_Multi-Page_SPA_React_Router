import { Fragment } from 'react';
import EventForm from '../components/EventForm';

function NewEventPage() {
  return (
    <Fragment>
      <EventForm method="post" />
    </Fragment>
  );
}

export default NewEventPage;
