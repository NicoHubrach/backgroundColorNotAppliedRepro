import { View } from 'react-native';
import Markdown from 'react-native-marked';
import { MD_STRING } from './exampleString';

const backgroundColorNotStyleable = <Markdown value={MD_STRING}
  styles={{
    blockquote:         { backgroundColor: 'red' },
    code:               { backgroundColor: 'red' },
    codespan:           { backgroundColor: 'red' },
    em:                 { backgroundColor: 'red' },
    h1:                 { backgroundColor: 'red' },
    h2:                 { backgroundColor: 'red' },
    h3:                 { backgroundColor: 'red' },
    h4:                 { backgroundColor: 'red' },
    h5:                 { backgroundColor: 'red' },
    h6:                 { backgroundColor: 'red' },
    hr:                 { backgroundColor: 'red' },
    image:              { backgroundColor: 'red' },
    li:                 { backgroundColor: 'red' },
    link:               { backgroundColor: 'red' },
    list:               { backgroundColor: 'red' },
    paragraph:          { backgroundColor: 'red' },
    strikethrough:      { backgroundColor: 'red' },
    strong:             { backgroundColor: 'red' },
    table:              { backgroundColor: 'red' },
    tableCell:          { backgroundColor: 'red' },
    tableRow:           { backgroundColor: 'red' },
    text:               { backgroundColor: 'red' },
  }}
  theme={{
    colors: {
      text: 'black',

    } as any
  }}
/>

export default function App() {
  return (
    <View>
      <View style={{ backgroundColor: 'red' }}>
        {backgroundColorNotStyleable}
      </View>
    </View>
  );
}
