import './App.css';
import Heading from './components/Heading';
import Section from './components/Section';
import NestedComponent from './components/NestedComponent';
import { ObjectContext } from './components/ObjectContext';


function App() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <NestedComponent />
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <ObjectContext.Provider value={{ name: 'Jane' }}>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <NestedComponent />
            </Section>
          </ObjectContext.Provider>
        </Section>
      </Section>
    </Section>

  );
}

export default App;
