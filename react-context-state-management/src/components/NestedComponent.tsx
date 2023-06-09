import { useContext } from 'react';
import Heading from './Heading';
import { ObjectContext } from './ObjectContext';

export default function NestedComponent() {
  const object = useContext(ObjectContext);

    return (
        <Heading>{object.name}</Heading>
    );

}
