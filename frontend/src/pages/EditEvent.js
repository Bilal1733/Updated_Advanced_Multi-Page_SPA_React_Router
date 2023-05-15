import { Fragment } from 'react';
import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

function EditEventPage() {
  const data = useRouteLoaderData('event-detail');
  return (
    <Fragment>
      <EventForm event={data.event} />
    </Fragment>
  );
}

export default EditEventPage;
